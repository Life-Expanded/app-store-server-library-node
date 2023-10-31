"use strict";
// Copyright (c) 2023 Apple Inc. Licensed under MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationException = exports.VerificationStatus = exports.SignedDataVerifier = void 0;
const jsonwebtoken = require("jsonwebtoken");
const base64url_1 = require("base64url");
const crypto_1 = require("crypto");
const jsrsasign_1 = require("jsrsasign");
const node_fetch_1 = require("node-fetch");
const JWSTransactionDecodedPayload_1 = require("./models/JWSTransactionDecodedPayload");
const ResponseBodyV2DecodedPayload_1 = require("./models/ResponseBodyV2DecodedPayload");
const JWSRenewalInfoDecodedPayload_1 = require("./models/JWSRenewalInfoDecodedPayload");
const AppTransaction_1 = require("./models/AppTransaction");
const MAX_SKEW = 60000;
/**
 * A class providing utility methods for verifying and decoding App Store signed data.
 *
 * Example Usage:
 * ```ts
 * const verifier = new SignedDataVerifier([appleRoot, appleRoot2], true, Environment.SANDBOX, "com.example")
 *
 * try {
 *     const decodedNotification = verifier.verifyAndDecodeNotification("ey...")
 *     console.log(decodedNotification)
 * } catch (e) {
 *     console.error(e)
 * }
 * ```
 */
class SignedDataVerifier {
    /**
     *
     * @param appleRootCertificates A list of DER-encoded root certificates
     * @param enableOnlineChecks Whether to enable revocation checking and check expiration using the current date
     * @param environment The App Store environment to target for checks
     * @param bundleId The app's bundle identifier
     * @param appAppleId The app's identifier, ommitted in the sandbox environment
     */
    constructor(appleRootCertificates, enableOnlineChecks, environment, bundleId, appAppleId) {
        this.JWSRenewalInfoDecodedPayloadValidator = new JWSRenewalInfoDecodedPayload_1.JWSRenewalInfoDecodedPayloadValidator();
        this.JWSTransactionDecodedPayloadValidator = new JWSTransactionDecodedPayload_1.JWSTransactionDecodedPayloadValidator();
        this.responseBodyV2DecodedPayloadValidator = new ResponseBodyV2DecodedPayload_1.ResponseBodyV2DecodedPayloadValidator();
        this.appTransactionValidator = new AppTransaction_1.AppTransactionValidator();
        this.rootCertificates = appleRootCertificates.map(cert => new crypto_1.X509Certificate(cert));
        this.enableOnlineChecks = enableOnlineChecks;
        this.bundleId = bundleId;
        this.environment = environment;
        this.appAppleId = appAppleId;
    }
    /**
     * Verifies and decodes a signedTransaction obtained from the App Store Server API, an App Store Server Notification, or from a device
     *
     * @param signedTransaction The signedTransaction field
     * @return The decoded transaction info after verification
     * @throws VerificationException Thrown if the data could not be verified
     */
    async verifyAndDecodeTransaction(signedTransactionInfo) {
        const decodedJWT = await this.verifyJWT(signedTransactionInfo, this.JWSTransactionDecodedPayloadValidator, this.extractSignedDate);
        if (decodedJWT.bundleId !== this.bundleId) {
            throw new VerificationException(VerificationStatus.INVALID_APP_IDENTIFIER);
        }
        if (decodedJWT.environment !== this.environment) {
            throw new VerificationException(VerificationStatus.INVALID_ENVIRONMENT);
        }
        return decodedJWT;
    }
    /**
     * Verifies and decodes a signedRenewalInfo obtained from the App Store Server API, an App Store Server Notification, or from a device
     *
     * @param signedRenewalInfo The signedRenewalInfo field
     * @return The decoded renewal info after verification
     * @throws VerificationException Thrown if the data could not be verified
     */
    async verifyAndDecodeRenewalInfo(signedRenewalInfo) {
        return this.verifyJWT(signedRenewalInfo, this.JWSRenewalInfoDecodedPayloadValidator, this.extractSignedDate);
    }
    /**
     * Verifies and decodes an App Store Server Notification signedPayload
     *
     * @param signedPayload The payload received by your server
     * @return The decoded payload after verification
     * @throws VerificationException Thrown if the data could not be verified
     */
    async verifyAndDecodeNotification(signedPayload) {
        // TODO: should be ResponseBodyV2DecodedPayload | Data
        const decodedJWT = await this.verifyJWT(signedPayload, this.responseBodyV2DecodedPayloadValidator, this.extractSignedDate);
        const appAppleId = decodedJWT?.appAppleId || decodedJWT?.data.appAppleId || (decodedJWT?.summary ? decodedJWT?.summary?.appAppleId : null);
        const bundleId = decodedJWT?.bundleId || decodedJWT?.data?.bundleId || (decodedJWT?.summary ? decodedJWT?.summary?.bundleId : null);
        const environment = decodedJWT.environment || decodedJWT?.data?.environment || (decodedJWT?.summary ? decodedJWT?.summary?.environment : null);
        if (this.bundleId !== bundleId || (this.environment === "Production" && this.appAppleId !== appAppleId)) {
            throw new VerificationException(VerificationStatus.INVALID_APP_IDENTIFIER);
        }
        if (this.environment !== environment) {
            throw new VerificationException(VerificationStatus.INVALID_ENVIRONMENT);
        }
        return decodedJWT;
    }
    /**
     * Verifies and decodes a signed AppTransaction
     * @param signedAppTransaction The signed AppTransaction
     * @returns The decoded AppTransaction after validation
     * @throws VerificationException Thrown if the data could not be verified
     */
    async verifyAndDecodeAppTransaction(signedAppTransaction) {
        const decodedAppTransaction = await this.verifyJWT(signedAppTransaction, this.appTransactionValidator, t => t.receiptCreationDate === undefined ? new Date() : new Date(t.receiptCreationDate));
        const environment = decodedAppTransaction.receiptType;
        if (this.bundleId !== decodedAppTransaction.bundleId || (this.environment === "Production" && this.appAppleId !== decodedAppTransaction.appAppleId)) {
            throw new VerificationException(VerificationStatus.INVALID_APP_IDENTIFIER);
        }
        if (this.environment !== environment) {
            throw new VerificationException(VerificationStatus.INVALID_ENVIRONMENT);
        }
        return decodedAppTransaction;
    }
    async verifyJWT(jwt, validator, signedDateExtractor) {
        let certificateChain;
        try {
            const header = jwt.split('.')[0];
            const decodedHeader = base64url_1.default.decode(header);
            const headerObj = JSON.parse(decodedHeader);
            const chain = headerObj['x5c'] ?? [];
            if (chain.length != 3) {
                throw new VerificationException(VerificationStatus.INVALID_CHAIN_LENGTH);
            }
            certificateChain = chain.slice(0, 2).map(cert => new crypto_1.X509Certificate(Buffer.from(cert, 'base64')));
        }
        catch (error) {
            if (error instanceof Error) {
                throw new VerificationException(VerificationStatus.INVALID_CERTIFICATE, error);
            }
            throw new VerificationException(VerificationStatus.INVALID_CERTIFICATE);
        }
        try {
            const decodedJWT = jsonwebtoken.decode(jwt);
            if (!validator.validate(decodedJWT)) {
                throw new VerificationException(VerificationStatus.FAILURE);
            }
            const effectiveDate = this.enableOnlineChecks ? new Date() : signedDateExtractor(decodedJWT);
            const publicKey = await this.verifyCertificateChain(this.rootCertificates, certificateChain[0], certificateChain[1], effectiveDate);
            const encodedKey = publicKey.export({
                type: "spki",
                format: "pem"
            });
            jsonwebtoken.verify(jwt, encodedKey);
            return decodedJWT;
        }
        catch (error) {
            if (error instanceof VerificationException) {
                throw error;
            }
            else if (error instanceof Error) {
                throw new VerificationException(VerificationStatus.VERIFICATION_FAILURE, error);
            }
            throw new VerificationException(VerificationStatus.VERIFICATION_FAILURE);
        }
    }
    async verifyCertificateChain(trustedRoots, leaf, intermediate, effectiveDate) {
        let validity = false;
        let rootCert;
        for (const root of trustedRoots) {
            if (intermediate.verify(root.publicKey) && intermediate.issuer === root.subject) {
                validity = true;
                rootCert = root;
            }
        }
        validity = validity && leaf.verify(intermediate.publicKey) && leaf.issuer === intermediate.subject;
        validity = validity && intermediate.ca;
        const jsrsassignX509Leaf = new jsrsasign_1.X509();
        jsrsassignX509Leaf.readCertHex(leaf.raw.toString('hex'));
        const jsrassignX509Intermediate = new jsrsasign_1.X509();
        jsrassignX509Intermediate.readCertHex(intermediate.raw.toString('hex'));
        validity = validity && jsrsassignX509Leaf.getExtInfo("1.2.840.113635.100.6.11.1") !== undefined;
        validity = validity && jsrassignX509Intermediate.getExtInfo("1.2.840.113635.100.6.2.1") !== undefined;
        if (!validity) {
            throw new VerificationException(VerificationStatus.VERIFICATION_FAILURE);
        }
        rootCert = rootCert;
        this.checkDates(leaf, effectiveDate);
        this.checkDates(intermediate, effectiveDate);
        this.checkDates(rootCert, effectiveDate);
        if (this.enableOnlineChecks) {
            await Promise.all([this.checkOCSPStatus(leaf, intermediate), this.checkOCSPStatus(intermediate, rootCert)]);
        }
        return leaf.publicKey;
    }
    async checkOCSPStatus(cert, issuer) {
        const authorityRex = /^OCSP - URI:(.*)$/m;
        const matchResult = cert.infoAccess ? authorityRex.exec(cert.infoAccess) : "";
        if (matchResult === null || matchResult.length !== 2) {
            throw new VerificationException(VerificationStatus.INVALID_CERTIFICATE);
        }
        const request = new jsrsasign_1.KJUR.asn1.ocsp.OCSPRequest({ reqList: [{ issuerCert: issuer.toString(), subjectCert: cert.toString(), alg: "sha256" }] });
        const headers = new node_fetch_1.Headers();
        headers.append('Content-Type', 'application/ocsp-request');
        const response = await (0, node_fetch_1.default)(matchResult[1], {
            headers: headers,
            method: 'POST',
            body: Buffer.from(request.getEncodedHex(), 'hex')
        });
        const responseBuffer = await response.buffer();
        const parsedResponse = new jsrsasign_1.KJUR.asn1.ocsp.OCSPParser().getOCSPResponse(responseBuffer.toString('hex'));
        // The issuer could also be the signer
        const jsrassignX509Issuer = new jsrsasign_1.X509();
        jsrassignX509Issuer.readCertHex(issuer.raw.toString('hex'));
        const allCerts = [jsrassignX509Issuer];
        for (const certHex of parsedResponse.certs) {
            const cert = new jsrsasign_1.X509();
            cert.readCertHex(certHex);
            allCerts.push(cert);
        }
        let signingCert = null;
        if (parsedResponse.respid.key) {
            for (const cert of allCerts) {
                const shasum = (0, crypto_1.createHash)('sha1');
                shasum.update(Buffer.from(cert.getSPKIValue(), 'hex'));
                const spkiHash = shasum.digest('hex');
                if (spkiHash === parsedResponse.respid.key) {
                    signingCert = new crypto_1.X509Certificate(Buffer.from(cert.hex, 'hex'));
                }
            }
        }
        else if (parsedResponse.respid.name) {
            for (const cert of allCerts) {
                if (cert.getSubject().str === parsedResponse.respid.name.str) {
                    signingCert = new crypto_1.X509Certificate(Buffer.from(cert.hex, 'hex'));
                }
            }
        }
        if (signingCert == null) {
            throw new VerificationException(VerificationStatus.FAILURE);
        }
        // Verify Signing Cert is issued by issuer
        if (signingCert.publicKey === issuer.publicKey && signingCert.subject === issuer.subject) {
            // This is directly signed by the issuer
        }
        else if (signingCert.verify(issuer.publicKey)) {
            // This is issued by the issuer, let's check the dates and purpose
            const signingCertAsign = new jsrsasign_1.X509();
            signingCertAsign.readCertPEM(signingCert.toString());
            if (!signingCertAsign.getExtExtKeyUsage().array.includes("ocspSigning")) {
                throw new VerificationException(VerificationStatus.INVALID_CERTIFICATE);
            }
            this.checkDates(signingCert, new Date());
        }
        else {
            throw new VerificationException(VerificationStatus.INVALID_CERTIFICATE);
        }
        // Extract raw responseData
        const responseData = jsrsasign_1.ASN1HEX.getTLVbyList(responseBuffer.toString('hex'), 0, [1, 0, 1, 0, 0]);
        // Verify Payload signed by cert
        const shortAlg = parsedResponse.alg.substring(0, 6).toUpperCase();
        if (shortAlg !== "SHA256" && shortAlg !== "SHA384" && shortAlg !== "SHA512") {
            throw new VerificationException(VerificationStatus.FAILURE);
        }
        if (!(0, crypto_1.verify)(shortAlg, Buffer.from(responseData, 'hex'), signingCert.publicKey, Buffer.from(parsedResponse.sighex, 'hex'))) {
            throw new VerificationException(VerificationStatus.FAILURE);
        }
        for (const singleResponse of parsedResponse.array) {
            // Confirm entry is for this cert
            const certIdBuilder = new jsrsasign_1.KJUR.asn1.ocsp.CertID();
            const currentCertCertId = certIdBuilder.getParamByCerts(issuer.toString(), cert.toString(), 'sha256');
            if (!(currentCertCertId.alg === singleResponse.certid.alg && currentCertCertId.issname === singleResponse.certid.issname &&
                currentCertCertId.isskey === singleResponse.certid.isskey && currentCertCertId.sbjsn === singleResponse.certid.sbjsn)) {
                continue;
            }
            // Validate contents
            const issueDate = this.parseX509Date(singleResponse.thisupdate);
            const nextDate = this.parseX509Date(singleResponse.nextupdate);
            if (singleResponse.status.status !== 'good' || new Date().getTime() - MAX_SKEW < issueDate.getTime() || nextDate.getTime() < new Date().getTime() + MAX_SKEW) {
                throw new VerificationException(VerificationStatus.FAILURE);
            }
            // Success
            return;
        }
        throw new VerificationException(VerificationStatus.FAILURE);
    }
    checkDates(cert, effectiveDate) {
        if (new Date(cert.validFrom).getTime() > (effectiveDate.getTime() + MAX_SKEW) ||
            new Date(cert.validTo).getTime() < (effectiveDate.getTime() - MAX_SKEW)) {
            throw new VerificationException(VerificationStatus.INVALID_CERTIFICATE);
        }
    }
    parseX509Date(date) {
        return new Date(date.replace(/^(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)$/, '$4:$5:$6 $2/$3/$1'));
    }
    extractSignedDate(decodedJWT) {
        return decodedJWT.signedDate === undefined ? new Date() : new Date(decodedJWT.signedDate);
    }
}
exports.SignedDataVerifier = SignedDataVerifier;
var VerificationStatus;
(function (VerificationStatus) {
    VerificationStatus[VerificationStatus["OK"] = 0] = "OK";
    VerificationStatus[VerificationStatus["VERIFICATION_FAILURE"] = 1] = "VERIFICATION_FAILURE";
    VerificationStatus[VerificationStatus["INVALID_APP_IDENTIFIER"] = 2] = "INVALID_APP_IDENTIFIER";
    VerificationStatus[VerificationStatus["INVALID_ENVIRONMENT"] = 3] = "INVALID_ENVIRONMENT";
    VerificationStatus[VerificationStatus["INVALID_CHAIN_LENGTH"] = 4] = "INVALID_CHAIN_LENGTH";
    VerificationStatus[VerificationStatus["INVALID_CERTIFICATE"] = 5] = "INVALID_CERTIFICATE";
    VerificationStatus[VerificationStatus["FAILURE"] = 6] = "FAILURE";
})(VerificationStatus || (exports.VerificationStatus = VerificationStatus = {}));
class VerificationException extends Error {
    constructor(status, cause) {
        super();
        this.status = status;
        this.cause = cause;
    }
}
exports.VerificationException = VerificationException;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0X3ZlcmlmaWNhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2p3dF92ZXJpZmljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDREQUE0RDs7O0FBRTVELDZDQUE4QztBQUU5Qyx5Q0FBa0M7QUFDbEMsbUNBQXdFO0FBQ3hFLHlDQUFnRDtBQUNoRCwyQ0FBNEM7QUFFNUMsd0ZBQTRIO0FBQzVILHdGQUE0SDtBQUM1SCx3RkFBNEg7QUFJNUgsNERBQWtGO0FBRWxGLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQTtBQUV0Qjs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUNILE1BQWEsa0JBQWtCO0lBWTNCOzs7Ozs7O09BT0c7SUFDSCxZQUFZLHFCQUErQixFQUFFLGtCQUEyQixFQUFFLFdBQXdCLEVBQUUsUUFBZ0IsRUFBRSxVQUFtQjtRQW5CakksMENBQXFDLEdBQUcsSUFBSSxvRUFBcUMsRUFBRSxDQUFBO1FBQ25GLDBDQUFxQyxHQUFHLElBQUksb0VBQXFDLEVBQUUsQ0FBQTtRQUNuRiwwQ0FBcUMsR0FBRyxJQUFJLG9FQUFxQyxFQUFFLENBQUE7UUFDbkYsNEJBQXVCLEdBQUcsSUFBSSx3Q0FBdUIsRUFBRSxDQUFBO1FBaUI3RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcscUJBQXFCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSx3QkFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7UUFDcEYsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFBO1FBQzVDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFBO0lBQzlCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxLQUFLLENBQUMsMEJBQTBCLENBQUMscUJBQTZCO1FBQzVELE1BQU0sVUFBVSxHQUFpQyxN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QUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUMzRixDQUFDO0NBQ0o7QUF0UkQsZ0RBc1JDO0FBRUQsSUFBWSxrQkFRWDtBQVJELFdBQVksa0JBQWtCO0lBQzVCLHVEQUFFLENBQUE7SUFDRiwyRkFBb0IsQ0FBQTtJQUNwQiwrRkFBc0IsQ0FBQTtJQUN0Qix5RkFBbUIsQ0FBQTtJQUNuQiwyRkFBb0IsQ0FBQTtJQUNwQix5RkFBbUIsQ0FBQTtJQUNuQixpRUFBTyxDQUFBO0FBQ1QsQ0FBQyxFQVJXLGtCQUFrQixrQ0FBbEIsa0JBQWtCLFFBUTdCO0FBRUQsTUFBYSxxQkFBc0IsU0FBUSxLQUFLO0lBSTlDLFlBQVksTUFBMEIsRUFBRSxLQUFhO1FBQ25ELEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDcEIsQ0FBQztDQUNGO0FBVEQsc0RBU0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgQXBwbGUgSW5jLiBMaWNlbnNlZCB1bmRlciBNSVQgTGljZW5zZS5cblxuaW1wb3J0IGpzb253ZWJ0b2tlbiA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpO1xuXG5pbXBvcnQgYmFzZTY0dXJsIGZyb20gJ2Jhc2U2NHVybCc7XG5pbXBvcnQgeyBLZXlPYmplY3QsIFg1MDlDZXJ0aWZpY2F0ZSwgY3JlYXRlSGFzaCwgdmVyaWZ5IH0gZnJvbSAnY3J5cHRvJztcbmltcG9ydCB7IEtKVVIsIFg1MDksIEFTTjFIRVggfSBmcm9tICdqc3JzYXNpZ24nO1xuaW1wb3J0IGZldGNoLCB7IEhlYWRlcnMgfSBmcm9tICdub2RlLWZldGNoJztcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnLi9tb2RlbHMvRW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgSldTVHJhbnNhY3Rpb25EZWNvZGVkUGF5bG9hZCwgSldTVHJhbnNhY3Rpb25EZWNvZGVkUGF5bG9hZFZhbGlkYXRvciB9IGZyb20gJy4vbW9kZWxzL0pXU1RyYW5zYWN0aW9uRGVjb2RlZFBheWxvYWQnO1xuaW1wb3J0IHsgUmVzcG9uc2VCb2R5VjJEZWNvZGVkUGF5bG9hZCwgUmVzcG9uc2VCb2R5VjJEZWNvZGVkUGF5bG9hZFZhbGlkYXRvciB9IGZyb20gJy4vbW9kZWxzL1Jlc3BvbnNlQm9keVYyRGVjb2RlZFBheWxvYWQnO1xuaW1wb3J0IHsgSldTUmVuZXdhbEluZm9EZWNvZGVkUGF5bG9hZCwgSldTUmVuZXdhbEluZm9EZWNvZGVkUGF5bG9hZFZhbGlkYXRvciB9IGZyb20gJy4vbW9kZWxzL0pXU1JlbmV3YWxJbmZvRGVjb2RlZFBheWxvYWQnO1xuaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4vbW9kZWxzL0RhdGEnO1xuaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSAnLi9tb2RlbHMvVmFsaWRhdG9yJztcbmltcG9ydCB7IERlY29kZWRTaWduZWREYXRhIH0gZnJvbSAnLi9tb2RlbHMvRGVjb2RlZFNpZ25lZERhdGEnO1xuaW1wb3J0IHsgQXBwVHJhbnNhY3Rpb24sIEFwcFRyYW5zYWN0aW9uVmFsaWRhdG9yIH0gZnJvbSAnLi9tb2RlbHMvQXBwVHJhbnNhY3Rpb24nO1xuXG5jb25zdCBNQVhfU0tFVyA9IDYwMDAwXG5cbi8qKlxuICogQSBjbGFzcyBwcm92aWRpbmcgdXRpbGl0eSBtZXRob2RzIGZvciB2ZXJpZnlpbmcgYW5kIGRlY29kaW5nIEFwcCBTdG9yZSBzaWduZWQgZGF0YS5cbiAqIFxuICogRXhhbXBsZSBVc2FnZTpcbiAqIGBgYHRzXG4gKiBjb25zdCB2ZXJpZmllciA9IG5ldyBTaWduZWREYXRhVmVyaWZpZXIoW2FwcGxlUm9vdCwgYXBwbGVSb290Ml0sIHRydWUsIEVudmlyb25tZW50LlNBTkRCT1gsIFwiY29tLmV4YW1wbGVcIilcbiAqIFxuICogdHJ5IHtcbiAqICAgICBjb25zdCBkZWNvZGVkTm90aWZpY2F0aW9uID0gdmVyaWZpZXIudmVyaWZ5QW5kRGVjb2RlTm90aWZpY2F0aW9uKFwiZXkuLi5cIilcbiAqICAgICBjb25zb2xlLmxvZyhkZWNvZGVkTm90aWZpY2F0aW9uKVxuICogfSBjYXRjaCAoZSkge1xuICogICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAqIH1cbiAqIGBgYFxuICovXG5leHBvcnQgY2xhc3MgU2lnbmVkRGF0YVZlcmlmaWVyIHtcbiAgICBwcml2YXRlIEpXU1JlbmV3YWxJbmZvRGVjb2RlZFBheWxvYWRWYWxpZGF0b3IgPSBuZXcgSldTUmVuZXdhbEluZm9EZWNvZGVkUGF5bG9hZFZhbGlkYXRvcigpXG4gICAgcHJpdmF0ZSBKV1NUcmFuc2FjdGlvbkRlY29kZWRQYXlsb2FkVmFsaWRhdG9yID0gbmV3IEpXU1RyYW5zYWN0aW9uRGVjb2RlZFBheWxvYWRWYWxpZGF0b3IoKVxuICAgIHByaXZhdGUgcmVzcG9uc2VCb2R5VjJEZWNvZGVkUGF5bG9hZFZhbGlkYXRvciA9IG5ldyBSZXNwb25zZUJvZHlWMkRlY29kZWRQYXlsb2FkVmFsaWRhdG9yKClcbiAgICBwcml2YXRlIGFwcFRyYW5zYWN0aW9uVmFsaWRhdG9yID0gbmV3IEFwcFRyYW5zYWN0aW9uVmFsaWRhdG9yKClcblxuICAgIHByb3RlY3RlZCByb290Q2VydGlmaWNhdGVzOiBYNTA5Q2VydGlmaWNhdGVbXVxuICAgIHByb3RlY3RlZCBlbmFibGVPbmxpbmVDaGVja3M6IGJvb2xlYW5cbiAgICBwcm90ZWN0ZWQgYnVuZGxlSWQ6IHN0cmluZ1xuICAgIHByb3RlY3RlZCBhcHBBcHBsZUlkPzogbnVtYmVyXG4gICAgcHJvdGVjdGVkIGVudmlyb25tZW50OiBFbnZpcm9ubWVudFxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIGFwcGxlUm9vdENlcnRpZmljYXRlcyBBIGxpc3Qgb2YgREVSLWVuY29kZWQgcm9vdCBjZXJ0aWZpY2F0ZXMgXG4gICAgICogQHBhcmFtIGVuYWJsZU9ubGluZUNoZWNrcyBXaGV0aGVyIHRvIGVuYWJsZSByZXZvY2F0aW9uIGNoZWNraW5nIGFuZCBjaGVjayBleHBpcmF0aW9uIHVzaW5nIHRoZSBjdXJyZW50IGRhdGVcbiAgICAgKiBAcGFyYW0gZW52aXJvbm1lbnQgVGhlIEFwcCBTdG9yZSBlbnZpcm9ubWVudCB0byB0YXJnZXQgZm9yIGNoZWNrc1xuICAgICAqIEBwYXJhbSBidW5kbGVJZCBUaGUgYXBwJ3MgYnVuZGxlIGlkZW50aWZpZXJcbiAgICAgKiBAcGFyYW0gYXBwQXBwbGVJZCBUaGUgYXBwJ3MgaWRlbnRpZmllciwgb21taXR0ZWQgaW4gdGhlIHNhbmRib3ggZW52aXJvbm1lbnRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihhcHBsZVJvb3RDZXJ0aWZpY2F0ZXM6IEJ1ZmZlcltdLCBlbmFibGVPbmxpbmVDaGVja3M6IGJvb2xlYW4sIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgYnVuZGxlSWQ6IHN0cmluZywgYXBwQXBwbGVJZD86IG51bWJlcikge1xuICAgICAgdGhpcy5yb290Q2VydGlmaWNhdGVzID0gYXBwbGVSb290Q2VydGlmaWNhdGVzLm1hcChjZXJ0ID0+IG5ldyBYNTA5Q2VydGlmaWNhdGUoY2VydCkpXG4gICAgICB0aGlzLmVuYWJsZU9ubGluZUNoZWNrcyA9IGVuYWJsZU9ubGluZUNoZWNrc1xuICAgICAgdGhpcy5idW5kbGVJZCA9IGJ1bmRsZUlkO1xuICAgICAgdGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50XG4gICAgICB0aGlzLmFwcEFwcGxlSWQgPSBhcHBBcHBsZUlkXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmVyaWZpZXMgYW5kIGRlY29kZXMgYSBzaWduZWRUcmFuc2FjdGlvbiBvYnRhaW5lZCBmcm9tIHRoZSBBcHAgU3RvcmUgU2VydmVyIEFQSSwgYW4gQXBwIFN0b3JlIFNlcnZlciBOb3RpZmljYXRpb24sIG9yIGZyb20gYSBkZXZpY2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzaWduZWRUcmFuc2FjdGlvbiBUaGUgc2lnbmVkVHJhbnNhY3Rpb24gZmllbGRcbiAgICAgKiBAcmV0dXJuIFRoZSBkZWNvZGVkIHRyYW5zYWN0aW9uIGluZm8gYWZ0ZXIgdmVyaWZpY2F0aW9uXG4gICAgICogQHRocm93cyBWZXJpZmljYXRpb25FeGNlcHRpb24gVGhyb3duIGlmIHRoZSBkYXRhIGNvdWxkIG5vdCBiZSB2ZXJpZmllZFxuICAgICAqL1xuICAgIGFzeW5jIHZlcmlmeUFuZERlY29kZVRyYW5zYWN0aW9uKHNpZ25lZFRyYW5zYWN0aW9uSW5mbzogc3RyaW5nKTogUHJvbWlzZTxKV1NUcmFuc2FjdGlvbkRlY29kZWRQYXlsb2FkPiB7XG4gICAgICBjb25zdCBkZWNvZGVkSldUOiBKV1NUcmFuc2FjdGlvbkRlY29kZWRQYXlsb2FkID0gYXdhaXQgdGhpcy52ZXJpZnlKV1Qoc2lnbmVkVHJhbnNhY3Rpb25JbmZvLCB0aGlzLkpXU1RyYW5zYWN0aW9uRGVjb2RlZFBheWxvYWRWYWxpZGF0b3IsIHRoaXMuZXh0cmFjdFNpZ25lZERhdGUpO1xuICAgICAgaWYgKGRlY29kZWRKV1QuYnVuZGxlSWQgIT09IHRoaXMuYnVuZGxlSWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFZlcmlmaWNhdGlvbkV4Y2VwdGlvbihWZXJpZmljYXRpb25TdGF0dXMuSU5WQUxJRF9BUFBfSURFTlRJRklFUilcbiAgICAgIH1cbiAgICAgIGlmIChkZWNvZGVkSldULmVudmlyb25tZW50ICE9PSB0aGlzLmVudmlyb25tZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBWZXJpZmljYXRpb25FeGNlcHRpb24oVmVyaWZpY2F0aW9uU3RhdHVzLklOVkFMSURfRU5WSVJPTk1FTlQpXG4gICAgICB9XG4gICAgICByZXR1cm4gZGVjb2RlZEpXVDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBWZXJpZmllcyBhbmQgZGVjb2RlcyBhIHNpZ25lZFJlbmV3YWxJbmZvIG9idGFpbmVkIGZyb20gdGhlIEFwcCBTdG9yZSBTZXJ2ZXIgQVBJLCBhbiBBcHAgU3RvcmUgU2VydmVyIE5vdGlmaWNhdGlvbiwgb3IgZnJvbSBhIGRldmljZVxuICAgICAqXG4gICAgICogQHBhcmFtIHNpZ25lZFJlbmV3YWxJbmZvIFRoZSBzaWduZWRSZW5ld2FsSW5mbyBmaWVsZFxuICAgICAqIEByZXR1cm4gVGhlIGRlY29kZWQgcmVuZXdhbCBpbmZvIGFmdGVyIHZlcmlmaWNhdGlvblxuICAgICAqIEB0aHJvd3MgVmVyaWZpY2F0aW9uRXhjZXB0aW9uIFRocm93biBpZiB0aGUgZGF0YSBjb3VsZCBub3QgYmUgdmVyaWZpZWRcbiAgICAgKi9cbiAgICBhc3luYyB2ZXJpZnlBbmREZWNvZGVSZW5ld2FsSW5mbyhzaWduZWRSZW5ld2FsSW5mbzogc3RyaW5nKTogUHJvbWlzZTxKV1NSZW5ld2FsSW5mb0RlY29kZWRQYXlsb2FkPiB7XG4gICAgICByZXR1cm4gdGhpcy52ZXJpZnlKV1Qoc2lnbmVkUmVuZXdhbEluZm8sIHRoaXMuSldTUmVuZXdhbEluZm9EZWNvZGVkUGF5bG9hZFZhbGlkYXRvciwgdGhpcy5leHRyYWN0U2lnbmVkRGF0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmVyaWZpZXMgYW5kIGRlY29kZXMgYW4gQXBwIFN0b3JlIFNlcnZlciBOb3RpZmljYXRpb24gc2lnbmVkUGF5bG9hZFxuICAgICAqXG4gICAgICogQHBhcmFtIHNpZ25lZFBheWxvYWQgVGhlIHBheWxvYWQgcmVjZWl2ZWQgYnkgeW91ciBzZXJ2ZXJcbiAgICAgKiBAcmV0dXJuIFRoZSBkZWNvZGVkIHBheWxvYWQgYWZ0ZXIgdmVyaWZpY2F0aW9uXG4gICAgICogQHRocm93cyBWZXJpZmljYXRpb25FeGNlcHRpb24gVGhyb3duIGlmIHRoZSBkYXRhIGNvdWxkIG5vdCBiZSB2ZXJpZmllZFxuICAgICAqL1xuICAgIGFzeW5jIHZlcmlmeUFuZERlY29kZU5vdGlmaWNhdGlvbihzaWduZWRQYXlsb2FkOiBzdHJpbmcpOiBQcm9taXNlPFJlc3BvbnNlQm9keVYyRGVjb2RlZFBheWxvYWQ+IHtcbiAgICAgIC8vIFRPRE86IHNob3VsZCBiZSBSZXNwb25zZUJvZHlWMkRlY29kZWRQYXlsb2FkIHwgRGF0YVxuICAgICAgY29uc3QgZGVjb2RlZEpXVDogYW55ID0gYXdhaXQgdGhpcy52ZXJpZnlKV1Qoc2lnbmVkUGF5bG9hZCwgdGhpcy5yZXNwb25zZUJvZHlWMkRlY29kZWRQYXlsb2FkVmFsaWRhdG9yLCB0aGlzLmV4dHJhY3RTaWduZWREYXRlKTtcbiAgICAgIGNvbnN0IGFwcEFwcGxlSWQgPSBkZWNvZGVkSldUPy5hcHBBcHBsZUlkIHx8IGRlY29kZWRKV1Q/LmRhdGEuYXBwQXBwbGVJZCB8fCAoZGVjb2RlZEpXVD8uc3VtbWFyeSA/IGRlY29kZWRKV1Q/LnN1bW1hcnk/LmFwcEFwcGxlSWQgOiBudWxsKVxuICAgICAgY29uc3QgYnVuZGxlSWQgPSBkZWNvZGVkSldUPy5idW5kbGVJZCB8fCBkZWNvZGVkSldUPy5kYXRhPy5idW5kbGVJZCB8fCAoZGVjb2RlZEpXVD8uc3VtbWFyeSA/IGRlY29kZWRKV1Q/LnN1bW1hcnk/LmJ1bmRsZUlkIDogbnVsbClcbiAgICAgIGNvbnN0IGVudmlyb25tZW50ID0gZGVjb2RlZEpXVC5lbnZpcm9ubWVudCB8fCBkZWNvZGVkSldUPy5kYXRhPy5lbnZpcm9ubWVudCB8fCAoZGVjb2RlZEpXVD8uc3VtbWFyeSA/IGRlY29kZWRKV1Q/LnN1bW1hcnk/LmVudmlyb25tZW50IDogbnVsbClcbiAgICAgIGlmICh0aGlzLmJ1bmRsZUlkICE9PSBidW5kbGVJZCB8fCAodGhpcy5lbnZpcm9ubWVudCA9PT0gXCJQcm9kdWN0aW9uXCIgJiYgdGhpcy5hcHBBcHBsZUlkICE9PSBhcHBBcHBsZUlkKSkge1xuICAgICAgICB0aHJvdyBuZXcgVmVyaWZpY2F0aW9uRXhjZXB0aW9uKFZlcmlmaWNhdGlvblN0YXR1cy5JTlZBTElEX0FQUF9JREVOVElGSUVSKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZW52aXJvbm1lbnQgIT09IGVudmlyb25tZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBWZXJpZmljYXRpb25FeGNlcHRpb24oVmVyaWZpY2F0aW9uU3RhdHVzLklOVkFMSURfRU5WSVJPTk1FTlQpXG4gICAgICB9XG4gICAgICByZXR1cm4gZGVjb2RlZEpXVFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZlcmlmaWVzIGFuZCBkZWNvZGVzIGEgc2lnbmVkIEFwcFRyYW5zYWN0aW9uXG4gICAgICogQHBhcmFtIHNpZ25lZEFwcFRyYW5zYWN0aW9uIFRoZSBzaWduZWQgQXBwVHJhbnNhY3Rpb25cbiAgICAgKiBAcmV0dXJucyBUaGUgZGVjb2RlZCBBcHBUcmFuc2FjdGlvbiBhZnRlciB2YWxpZGF0aW9uXG4gICAgICogQHRocm93cyBWZXJpZmljYXRpb25FeGNlcHRpb24gVGhyb3duIGlmIHRoZSBkYXRhIGNvdWxkIG5vdCBiZSB2ZXJpZmllZFxuICAgICAqL1xuICAgIGFzeW5jIHZlcmlmeUFuZERlY29kZUFwcFRyYW5zYWN0aW9uKHNpZ25lZEFwcFRyYW5zYWN0aW9uOiBzdHJpbmcpOiBQcm9taXNlPEFwcFRyYW5zYWN0aW9uPiB7XG4gICAgICBjb25zdCBkZWNvZGVkQXBwVHJhbnNhY3Rpb246IEFwcFRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy52ZXJpZnlKV1Qoc2lnbmVkQXBwVHJhbnNhY3Rpb24sIHRoaXMuYXBwVHJhbnNhY3Rpb25WYWxpZGF0b3IsIHQgPT4gdC5yZWNlaXB0Q3JlYXRpb25EYXRlID09PSB1bmRlZmluZWQgPyBuZXcgRGF0ZSgpIDogbmV3IERhdGUodC5yZWNlaXB0Q3JlYXRpb25EYXRlKSk7XG4gICAgICBjb25zdCBlbnZpcm9ubWVudCA9IGRlY29kZWRBcHBUcmFuc2FjdGlvbi5yZWNlaXB0VHlwZVxuICAgICAgaWYgKHRoaXMuYnVuZGxlSWQgIT09IGRlY29kZWRBcHBUcmFuc2FjdGlvbi5idW5kbGVJZCB8fCAodGhpcy5lbnZpcm9ubWVudCA9PT0gXCJQcm9kdWN0aW9uXCIgJiYgdGhpcy5hcHBBcHBsZUlkICE9PSBkZWNvZGVkQXBwVHJhbnNhY3Rpb24uYXBwQXBwbGVJZCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFZlcmlmaWNhdGlvbkV4Y2VwdGlvbihWZXJpZmljYXRpb25TdGF0dXMuSU5WQUxJRF9BUFBfSURFTlRJRklFUilcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmVudmlyb25tZW50ICE9PSBlbnZpcm9ubWVudCkge1xuICAgICAgICB0aHJvdyBuZXcgVmVyaWZpY2F0aW9uRXhjZXB0aW9uKFZlcmlmaWNhdGlvblN0YXR1cy5JTlZBTElEX0VOVklST05NRU5UKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGRlY29kZWRBcHBUcmFuc2FjdGlvblxuICAgIH1cblxuICAgIHByb3RlY3RlZCBhc3luYyB2ZXJpZnlKV1Q8VD4oand0OiBzdHJpbmcsIHZhbGlkYXRvcjogVmFsaWRhdG9yPFQ+LCBzaWduZWREYXRlRXh0cmFjdG9yOiAoZGVjb2RlZEpXVDogVCkgPT4gRGF0ZSk6IFByb21pc2U8VD4ge1xuICAgICAgbGV0IGNlcnRpZmljYXRlQ2hhaW47XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBqd3Quc3BsaXQoJy4nKVswXVxuICAgICAgICBjb25zdCBkZWNvZGVkSGVhZGVyID0gYmFzZTY0dXJsLmRlY29kZShoZWFkZXIpXG4gICAgICAgIGNvbnN0IGhlYWRlck9iaiA9IEpTT04ucGFyc2UoZGVjb2RlZEhlYWRlcilcbiAgICAgICAgY29uc3QgY2hhaW46IHN0cmluZ1tdID0gaGVhZGVyT2JqWyd4NWMnXSA/PyBbXVxuICAgICAgICBpZiAoY2hhaW4ubGVuZ3RoICE9IDMpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVmVyaWZpY2F0aW9uRXhjZXB0aW9uKFZlcmlmaWNhdGlvblN0YXR1cy5JTlZBTElEX0NIQUlOX0xFTkdUSClcbiAgICAgICAgfVxuICAgICAgICBjZXJ0aWZpY2F0ZUNoYWluID0gY2hhaW4uc2xpY2UoMCwgMikubWFwKGNlcnQgPT4gbmV3IFg1MDlDZXJ0aWZpY2F0ZShCdWZmZXIuZnJvbShjZXJ0LCAnYmFzZTY0JykpKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVmVyaWZpY2F0aW9uRXhjZXB0aW9uKFZlcmlmaWNhdGlvblN0YXR1cy5JTlZBTElEX0NFUlRJRklDQVRFLCBlcnJvcilcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgVmVyaWZpY2F0aW9uRXhjZXB0aW9uKFZlcmlmaWNhdGlvblN0YXR1cy5JTlZBTElEX0NFUlRJRklDQVRFKVxuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGVjb2RlZEpXVCA9IGpzb253ZWJ0b2tlbi5kZWNvZGUoand0KVxuICAgICAgICBpZiAoIXZhbGlkYXRvci52YWxpZGF0ZShkZWNvZGVkSldUKSkge1xuICAgICAgICAgIHRocm93IG5ldyBWZXJpZmljYXRpb25FeGNlcHRpb24oVmVyaWZpY2F0aW9uU3RhdHVzLkZBSUxVUkUpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZWZmZWN0aXZlRGF0ZSA9IHRoaXMuZW5hYmxlT25saW5lQ2hlY2tzICA/IG5ldyBEYXRlKCkgOiBzaWduZWREYXRlRXh0cmFjdG9yKGRlY29kZWRKV1QpXG4gICAgICAgIGNvbnN0IHB1YmxpY0tleSA9IGF3YWl0IHRoaXMudmVyaWZ5Q2VydGlmaWNhdGVDaGFpbih0aGlzLnJvb3RDZXJ0aWZpY2F0ZXMsIGNlcnRpZmljYXRlQ2hhaW5bMF0sIGNlcnRpZmljYXRlQ2hhaW5bMV0sIGVmZmVjdGl2ZURhdGUpO1xuICAgICAgICBjb25zdCBlbmNvZGVkS2V5ID0gcHVibGljS2V5LmV4cG9ydCh7XG4gICAgICAgICAgdHlwZTogXCJzcGtpXCIsXG4gICAgICAgICAgZm9ybWF0OiBcInBlbVwiXG4gICAgICAgIH0pO1xuICAgICAgICBqc29ud2VidG9rZW4udmVyaWZ5KGp3dCwgZW5jb2RlZEtleSkgYXMgVFxuICAgICAgICByZXR1cm4gZGVjb2RlZEpXVFxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgVmVyaWZpY2F0aW9uRXhjZXB0aW9uKSB7XG4gICAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgICAgfSBlbHNlIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFZlcmlmaWNhdGlvbkV4Y2VwdGlvbihWZXJpZmljYXRpb25TdGF0dXMuVkVSSUZJQ0FUSU9OX0ZBSUxVUkUsIGVycm9yKVxuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBWZXJpZmljYXRpb25FeGNlcHRpb24oVmVyaWZpY2F0aW9uU3RhdHVzLlZFUklGSUNBVElPTl9GQUlMVVJFKVxuICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBhc3luYyB2ZXJpZnlDZXJ0aWZpY2F0ZUNoYWluKHRydXN0ZWRSb290czogWDUwOUNlcnRpZmljYXRlW10sIGxlYWY6IFg1MDlDZXJ0aWZpY2F0ZSwgaW50ZXJtZWRpYXRlOiBYNTA5Q2VydGlmaWNhdGUsIGVmZmVjdGl2ZURhdGU6IERhdGUpOiBQcm9taXNlPEtleU9iamVjdD4ge1xuICAgICAgbGV0IHZhbGlkaXR5ID0gZmFsc2VcbiAgICAgIGxldCByb290Q2VydFxuICAgICAgZm9yIChjb25zdCByb290IG9mIHRydXN0ZWRSb290cykge1xuICAgICAgICBpZiAoaW50ZXJtZWRpYXRlLnZlcmlmeShyb290LnB1YmxpY0tleSkgJiYgaW50ZXJtZWRpYXRlLmlzc3VlciA9PT0gcm9vdC5zdWJqZWN0KSB7XG4gICAgICAgICAgdmFsaWRpdHkgPSB0cnVlXG4gICAgICAgICAgcm9vdENlcnQgPSByb290XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhbGlkaXR5ID0gdmFsaWRpdHkgJiYgbGVhZi52ZXJpZnkoaW50ZXJtZWRpYXRlLnB1YmxpY0tleSkgJiYgbGVhZi5pc3N1ZXIgPT09IGludGVybWVkaWF0ZS5zdWJqZWN0XG4gICAgICB2YWxpZGl0eSA9IHZhbGlkaXR5ICYmIGludGVybWVkaWF0ZS5jYVxuICAgICAgY29uc3QganNyc2Fzc2lnblg1MDlMZWFmID0gbmV3IFg1MDkoKVxuICAgICAganNyc2Fzc2lnblg1MDlMZWFmLnJlYWRDZXJ0SGV4KGxlYWYucmF3LnRvU3RyaW5nKCdoZXgnKSlcbiAgICAgIGNvbnN0IGpzcmFzc2lnblg1MDlJbnRlcm1lZGlhdGUgPSBuZXcgWDUwOSgpXG4gICAgICBqc3Jhc3NpZ25YNTA5SW50ZXJtZWRpYXRlLnJlYWRDZXJ0SGV4KGludGVybWVkaWF0ZS5yYXcudG9TdHJpbmcoJ2hleCcpKVxuICAgICAgdmFsaWRpdHkgPSB2YWxpZGl0eSAmJiBqc3JzYXNzaWduWDUwOUxlYWYuZ2V0RXh0SW5mbyhcIjEuMi44NDAuMTEzNjM1LjEwMC42LjExLjFcIikgIT09IHVuZGVmaW5lZFxuICAgICAgdmFsaWRpdHkgPSB2YWxpZGl0eSAmJiBqc3Jhc3NpZ25YNTA5SW50ZXJtZWRpYXRlLmdldEV4dEluZm8oXCIxLjIuODQwLjExMzYzNS4xMDAuNi4yLjFcIikgIT09IHVuZGVmaW5lZFxuICAgICAgaWYgKCF2YWxpZGl0eSkge1xuICAgICAgICB0aHJvdyBuZXcgVmVyaWZpY2F0aW9uRXhjZXB0aW9uKFZlcmlmaWNhdGlvblN0YXR1cy5WRVJJRklDQVRJT05fRkFJTFVSRSk7XG4gICAgICB9XG4gICAgICByb290Q2VydCA9IHJvb3RDZXJ0IGFzIFg1MDlDZXJ0aWZpY2F0ZVxuICAgICAgdGhpcy5jaGVja0RhdGVzKGxlYWYsIGVmZmVjdGl2ZURhdGUpXG4gICAgICB0aGlzLmNoZWNrRGF0ZXMoaW50ZXJtZWRpYXRlLCBlZmZlY3RpdmVEYXRlKVxuICAgICAgdGhpcy5jaGVja0RhdGVzKHJvb3RDZXJ0LCBlZmZlY3RpdmVEYXRlKVxuICAgICAgaWYgKHRoaXMuZW5hYmxlT25saW5lQ2hlY2tzKSB7XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFt0aGlzLmNoZWNrT0NTUFN0YXR1cyhsZWFmLCBpbnRlcm1lZGlhdGUpLCB0aGlzLmNoZWNrT0NTUFN0YXR1cyhpbnRlcm1lZGlhdGUsIHJvb3RDZXJ0KV0pXG4gICAgICB9XG4gICAgICByZXR1cm4gbGVhZi5wdWJsaWNLZXlcbiAgICB9XG4gICAgcHJvdGVjdGVkIGFzeW5jIGNoZWNrT0NTUFN0YXR1cyhjZXJ0OiBYNTA5Q2VydGlmaWNhdGUsIGlzc3VlcjogWDUwOUNlcnRpZmljYXRlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICBjb25zdCBhdXRob3JpdHlSZXggPSAvXk9DU1AgLSBVUkk6KC4qKSQvbVxuICAgICAgY29uc3QgbWF0Y2hSZXN1bHQgPSBjZXJ0LmluZm9BY2Nlc3MgPyBhdXRob3JpdHlSZXguZXhlYyhjZXJ0LmluZm9BY2Nlc3MpIDogXCJcIlxuICAgICAgaWYgKG1hdGNoUmVzdWx0ID09PSBudWxsIHx8IG1hdGNoUmVzdWx0Lmxlbmd0aCAhPT0gMikge1xuICAgICAgICB0aHJvdyBuZXcgVmVyaWZpY2F0aW9uRXhjZXB0aW9uKFZlcmlmaWNhdGlvblN0YXR1cy5JTlZBTElEX0NFUlRJRklDQVRFKVxuICAgICAgfVxuICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBLSlVSLmFzbjEub2NzcC5PQ1NQUmVxdWVzdCh7cmVxTGlzdDogW3tpc3N1ZXJDZXJ0OiBpc3N1ZXIudG9TdHJpbmcoKSwgc3ViamVjdENlcnQ6IGNlcnQudG9TdHJpbmcoKSAsIGFsZzogXCJzaGEyNTZcIn1dfSlcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpXG4gICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL29jc3AtcmVxdWVzdCcpXG4gICAgICBcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gobWF0Y2hSZXN1bHRbMV0sIHtcbiAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEJ1ZmZlci5mcm9tKHJlcXVlc3QuZ2V0RW5jb2RlZEhleCgpLCAnaGV4JylcbiAgICAgIH0pXG4gICAgICBcbiAgICAgIGNvbnN0IHJlc3BvbnNlQnVmZmVyID0gYXdhaXQgcmVzcG9uc2UuYnVmZmVyKClcbiAgICAgIGNvbnN0IHBhcnNlZFJlc3BvbnNlID0gbmV3IChLSlVSLmFzbjEub2NzcCBhcyBhbnkpLk9DU1BQYXJzZXIoKS5nZXRPQ1NQUmVzcG9uc2UocmVzcG9uc2VCdWZmZXIudG9TdHJpbmcoJ2hleCcpKVxuICAgICAgLy8gVGhlIGlzc3VlciBjb3VsZCBhbHNvIGJlIHRoZSBzaWduZXJcbiAgICAgIGNvbnN0IGpzcmFzc2lnblg1MDlJc3N1ZXIgPSBuZXcgWDUwOSgpXG4gICAgICBqc3Jhc3NpZ25YNTA5SXNzdWVyLnJlYWRDZXJ0SGV4KGlzc3Vlci5yYXcudG9TdHJpbmcoJ2hleCcpKVxuICAgICAgY29uc3QgYWxsQ2VydHM6IFg1MDlbXSA9IFtqc3Jhc3NpZ25YNTA5SXNzdWVyXVxuICAgICAgZm9yIChjb25zdCBjZXJ0SGV4IG9mIHBhcnNlZFJlc3BvbnNlLmNlcnRzKSB7XG4gICAgICAgIGNvbnN0IGNlcnQgPSBuZXcgWDUwOSgpXG4gICAgICAgIGNlcnQucmVhZENlcnRIZXgoY2VydEhleClcbiAgICAgICAgYWxsQ2VydHMucHVzaChjZXJ0KVxuICAgICAgfVxuICAgICAgbGV0IHNpZ25pbmdDZXJ0OiBYNTA5Q2VydGlmaWNhdGUgfCBudWxsID0gbnVsbFxuICAgICAgaWYgKHBhcnNlZFJlc3BvbnNlLnJlc3BpZC5rZXkpIHtcbiAgICAgICAgZm9yIChjb25zdCBjZXJ0IG9mIGFsbENlcnRzKSB7XG4gICAgICAgICAgY29uc3Qgc2hhc3VtID0gY3JlYXRlSGFzaCgnc2hhMScpXG4gICAgICAgICAgc2hhc3VtLnVwZGF0ZShCdWZmZXIuZnJvbShjZXJ0LmdldFNQS0lWYWx1ZSgpLCAnaGV4JykpXG4gICAgICAgICAgY29uc3Qgc3BraUhhc2ggPSBzaGFzdW0uZGlnZXN0KCdoZXgnKVxuICAgICAgICAgIGlmIChzcGtpSGFzaCA9PT0gcGFyc2VkUmVzcG9uc2UucmVzcGlkLmtleSkge1xuICAgICAgICAgICAgc2lnbmluZ0NlcnQgPSBuZXcgWDUwOUNlcnRpZmljYXRlKEJ1ZmZlci5mcm9tKGNlcnQuaGV4LCAnaGV4JykpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHBhcnNlZFJlc3BvbnNlLnJlc3BpZC5uYW1lKSB7XG4gICAgICAgIGZvciAoY29uc3QgY2VydCBvZiBhbGxDZXJ0cykge1xuICAgICAgICAgIGlmIChjZXJ0LmdldFN1YmplY3QoKS5zdHIgPT09IHBhcnNlZFJlc3BvbnNlLnJlc3BpZC5uYW1lLnN0cikge1xuICAgICAgICAgICAgc2lnbmluZ0NlcnQgPSBuZXcgWDUwOUNlcnRpZmljYXRlKEJ1ZmZlci5mcm9tKGNlcnQuaGV4LCAnaGV4JykpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc2lnbmluZ0NlcnQgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgVmVyaWZpY2F0aW9uRXhjZXB0aW9uKFZlcmlmaWNhdGlvblN0YXR1cy5GQUlMVVJFKVxuICAgICAgfVxuICAgICAgLy8gVmVyaWZ5IFNpZ25pbmcgQ2VydCBpcyBpc3N1ZWQgYnkgaXNzdWVyXG4gICAgICBpZiAoc2lnbmluZ0NlcnQucHVibGljS2V5ID09PSBpc3N1ZXIucHVibGljS2V5ICYmIHNpZ25pbmdDZXJ0LnN1YmplY3QgPT09IGlzc3Vlci5zdWJqZWN0KSB7XG4gICAgICAgIC8vIFRoaXMgaXMgZGlyZWN0bHkgc2lnbmVkIGJ5IHRoZSBpc3N1ZXJcbiAgICAgIH0gZWxzZSBpZiAoc2lnbmluZ0NlcnQudmVyaWZ5KGlzc3Vlci5wdWJsaWNLZXkpKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgaXNzdWVkIGJ5IHRoZSBpc3N1ZXIsIGxldCdzIGNoZWNrIHRoZSBkYXRlcyBhbmQgcHVycG9zZVxuICAgICAgICBjb25zdCBzaWduaW5nQ2VydEFzaWduID0gbmV3IFg1MDkoKVxuICAgICAgICBzaWduaW5nQ2VydEFzaWduLnJlYWRDZXJ0UEVNKHNpZ25pbmdDZXJ0LnRvU3RyaW5nKCkpXG4gICAgICAgIGlmICghc2lnbmluZ0NlcnRBc2lnbi5nZXRFeHRFeHRLZXlVc2FnZSgpLmFycmF5LmluY2x1ZGVzKFwib2NzcFNpZ25pbmdcIikpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVmVyaWZpY2F0aW9uRXhjZXB0aW9uKFZlcmlmaWNhdGlvblN0YXR1cy5JTlZBTElEX0NFUlRJRklDQVRFKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hlY2tEYXRlcyhzaWduaW5nQ2VydCwgbmV3IERhdGUoKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBWZXJpZmljYXRpb25FeGNlcHRpb24oVmVyaWZpY2F0aW9uU3RhdHVzLklOVkFMSURfQ0VSVElGSUNBVEUpXG4gICAgICB9XG4gICAgXG4gICAgICAvLyBFeHRyYWN0IHJhdyByZXNwb25zZURhdGFcbiAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IEFTTjFIRVguZ2V0VExWYnlMaXN0KHJlc3BvbnNlQnVmZmVyLnRvU3RyaW5nKCdoZXgnKSwgMCwgWzEsIDAsIDEsIDAsIDBdKSBhcyBzdHJpbmdcbiAgICAgIC8vIFZlcmlmeSBQYXlsb2FkIHNpZ25lZCBieSBjZXJ0XG4gICAgICBjb25zdCBzaG9ydEFsZyA9IHBhcnNlZFJlc3BvbnNlLmFsZy5zdWJzdHJpbmcoMCwgNikudG9VcHBlckNhc2UoKVxuICAgICAgaWYgKHNob3J0QWxnICE9PSBcIlNIQTI1NlwiICYmIHNob3J0QWxnICE9PSBcIlNIQTM4NFwiICYmIHNob3J0QWxnICE9PSBcIlNIQTUxMlwiKSB7XG4gICAgICAgIHRocm93IG5ldyBWZXJpZmljYXRpb25FeGNlcHRpb24oVmVyaWZpY2F0aW9uU3RhdHVzLkZBSUxVUkUpXG4gICAgICB9XG5cbiAgICAgIGlmICghdmVyaWZ5KHNob3J0QWxnLCBCdWZmZXIuZnJvbShyZXNwb25zZURhdGEsICdoZXgnKSwgc2lnbmluZ0NlcnQucHVibGljS2V5LCBCdWZmZXIuZnJvbShwYXJzZWRSZXNwb25zZS5zaWdoZXgsICdoZXgnKSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFZlcmlmaWNhdGlvbkV4Y2VwdGlvbihWZXJpZmljYXRpb25TdGF0dXMuRkFJTFVSRSlcbiAgICAgIH1cbiAgICAgIFxuICAgICAgZm9yIChjb25zdCBzaW5nbGVSZXNwb25zZSBvZiBwYXJzZWRSZXNwb25zZS5hcnJheSkge1xuICAgICAgICAvLyBDb25maXJtIGVudHJ5IGlzIGZvciB0aGlzIGNlcnRcbiAgICAgICAgY29uc3QgY2VydElkQnVpbGRlciA9IG5ldyBLSlVSLmFzbjEub2NzcC5DZXJ0SUQoKSBhcyBhbnlcbiAgICAgICAgY29uc3QgY3VycmVudENlcnRDZXJ0SWQgPSBjZXJ0SWRCdWlsZGVyLmdldFBhcmFtQnlDZXJ0cyhpc3N1ZXIudG9TdHJpbmcoKSwgY2VydC50b1N0cmluZygpLCAnc2hhMjU2JylcbiAgICAgICAgaWYgKCEoY3VycmVudENlcnRDZXJ0SWQuYWxnID09PSBzaW5nbGVSZXNwb25zZS5jZXJ0aWQuYWxnICYmIGN1cnJlbnRDZXJ0Q2VydElkLmlzc25hbWUgPT09IHNpbmdsZVJlc3BvbnNlLmNlcnRpZC5pc3NuYW1lICYmXG4gICAgICAgICAgICAgIGN1cnJlbnRDZXJ0Q2VydElkLmlzc2tleSA9PT0gc2luZ2xlUmVzcG9uc2UuY2VydGlkLmlzc2tleSAmJiBjdXJyZW50Q2VydENlcnRJZC5zYmpzbiA9PT0gc2luZ2xlUmVzcG9uc2UuY2VydGlkLnNianNuKSkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cbiAgICAgICAgLy8gVmFsaWRhdGUgY29udGVudHNcbiAgICAgICAgY29uc3QgaXNzdWVEYXRlID0gdGhpcy5wYXJzZVg1MDlEYXRlKHNpbmdsZVJlc3BvbnNlLnRoaXN1cGRhdGUpXG4gICAgICAgIGNvbnN0IG5leHREYXRlID0gdGhpcy5wYXJzZVg1MDlEYXRlKHNpbmdsZVJlc3BvbnNlLm5leHR1cGRhdGUpXG4gICAgICAgIFxuICAgICAgICBpZiAoc2luZ2xlUmVzcG9uc2Uuc3RhdHVzLnN0YXR1cyAhPT0gJ2dvb2QnIHx8IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gTUFYX1NLRVcgPCBpc3N1ZURhdGUuZ2V0VGltZSgpIHx8IG5leHREYXRlLmdldFRpbWUoKSA8IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgTUFYX1NLRVcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVmVyaWZpY2F0aW9uRXhjZXB0aW9uKFZlcmlmaWNhdGlvblN0YXR1cy5GQUlMVVJFKVxuICAgICAgICB9XG4gICAgICAgIC8vIFN1Y2Nlc3NcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgVmVyaWZpY2F0aW9uRXhjZXB0aW9uKFZlcmlmaWNhdGlvblN0YXR1cy5GQUlMVVJFKVxuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tEYXRlcyhjZXJ0OiBYNTA5Q2VydGlmaWNhdGUsIGVmZmVjdGl2ZURhdGU6IERhdGUpIHtcbiAgICAgIGlmIChuZXcgRGF0ZShjZXJ0LnZhbGlkRnJvbSkuZ2V0VGltZSgpID4gKGVmZmVjdGl2ZURhdGUuZ2V0VGltZSgpICsgTUFYX1NLRVcpfHxcbiAgICAgICAgICBuZXcgRGF0ZShjZXJ0LnZhbGlkVG8pLmdldFRpbWUoKSA8IChlZmZlY3RpdmVEYXRlLmdldFRpbWUoKSAtIE1BWF9TS0VXKSkge1xuICAgICAgICB0aHJvdyBuZXcgVmVyaWZpY2F0aW9uRXhjZXB0aW9uKFZlcmlmaWNhdGlvblN0YXR1cy5JTlZBTElEX0NFUlRJRklDQVRFKVxuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcGFyc2VYNTA5RGF0ZShkYXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLnJlcGxhY2UoXG4gICAgICAgIC9eKFxcZHs0fSkoXFxkXFxkKShcXGRcXGQpKFxcZFxcZCkoXFxkXFxkKShcXGRcXGQpJC8sXG4gICAgICAgICckNDokNTokNiAkMi8kMy8kMSdcbiAgICAgICkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZXh0cmFjdFNpZ25lZERhdGUoZGVjb2RlZEpXVDogRGVjb2RlZFNpZ25lZERhdGEpOiBEYXRlIHtcbiAgICAgIHJldHVybiBkZWNvZGVkSldULnNpZ25lZERhdGUgPT09IHVuZGVmaW5lZCA/IG5ldyBEYXRlKCkgOiBuZXcgRGF0ZShkZWNvZGVkSldULnNpZ25lZERhdGUpXG4gICAgfVxufVxuXG5leHBvcnQgZW51bSBWZXJpZmljYXRpb25TdGF0dXMge1xuICBPSyxcbiAgVkVSSUZJQ0FUSU9OX0ZBSUxVUkUsXG4gIElOVkFMSURfQVBQX0lERU5USUZJRVIsXG4gIElOVkFMSURfRU5WSVJPTk1FTlQsXG4gIElOVkFMSURfQ0hBSU5fTEVOR1RILFxuICBJTlZBTElEX0NFUlRJRklDQVRFLFxuICBGQUlMVVJFXG59XG5cbmV4cG9ydCBjbGFzcyBWZXJpZmljYXRpb25FeGNlcHRpb24gZXh0ZW5kcyBFcnJvciB7XG4gIHN0YXR1czogVmVyaWZpY2F0aW9uU3RhdHVzXG4gIGNhdXNlPzogRXJyb3JcblxuICBjb25zdHJ1Y3RvcihzdGF0dXM6IFZlcmlmaWNhdGlvblN0YXR1cywgY2F1c2U/OiBFcnJvcikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXNcbiAgICB0aGlzLmNhdXNlID0gY2F1c2VcbiAgfVxufSJdfQ==