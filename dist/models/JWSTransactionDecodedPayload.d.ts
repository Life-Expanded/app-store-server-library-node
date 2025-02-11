import { DecodedSignedData } from "./DecodedSignedData";
import { Environment, EnvironmentValidator } from "./Environment";
import { InAppOwnershipType, InAppOwnershipTypeValidator } from "./InAppOwnershipType";
import { OfferType, OfferTypeValidator } from "./OfferType";
import { RevocationReason, RevocationReasonValidator } from "./RevocationReason";
import { TransactionReason, TransactionReasonValidator } from "./TransactionReason";
import { Type, TypeValidator } from "./Type";
import { Validator } from "./Validator";
/**
 * A decoded payload containing transaction information.
 *
 * {@link https://developer.apple.com/documentation/appstoreserverapi/jwstransactiondecodedpayload JWSTransactionDecodedPayload}
 */
export interface JWSTransactionDecodedPayload extends DecodedSignedData {
    /**
     * The original transaction identifier of a purchase.
     *
     * {@link https://developer.apple.com/documentation/appstoreserverapi/originaltransactionid originalTransactionId}
     **/
    originalTransactionId?: string;
    /**
     * The unique identifier for a transaction such as an in-app purchase, restored in-app purchase, or subscription renewal.
     *
     * {@link https://developer.apple.com/documentation/appstoreserverapi/transactionid transactionId}
     **/
    transactionId?: string;
    /**
     * The unique identifier of subscription-purchase events across devices, including renewals.
     *
     * {@link https://developer.apple.com/documentation/appstoreserverapi/weborderlineitemid webOrderLineItemId}
     **/
    webOrderLineItemId?: string;
    /**
     * The bundle identifier of an app.
     *
     * {@link https://developer.apple.com/documentation/appstoreserverapi/bundleid bundleId}
     **/
    bundleId?: string;
    /**
     * The unique identifier for the product, that you create in App Store Connect.
     *
     * {@link https://developer.apple.com/documentation/appstoreserverapi/productid productId}
     **/
    productId?: string;
    /**
     * The identifier of the subscription group that the subscription belongs to.
     *
     * {@link https://developer.apple.com/documentation/appstoreserverapi/subscriptiongroupidentifier subscriptionGroupIdentifier}
     **/
    subscriptionGroupIdentifier?: string;
    /**
     * The time that the App Store charged the user’s account for an in-app purchase, a restored in-app purchase, a subscription, or a subscription renewal after a lapse.
     *
     * {@link https://developer.apple.com/documentation/appstoreserverapi/purchasedate purchaseDate}
     **/
    purchaseDate?: number;
    /**
     * The purchase date of the transaction associated with the original transaction identifier.
     *
     * {@link https://developer.apple.com/documentation/appstoreserverapi/originalpurchasedate originalPurchaseDate}
     **/
    originalPurchaseDate?: number;
    /**
     * The UNIX time, in milliseconds, an auto-renewable subscription expires or renews.
     *
     * {@link https://developer.apple.com/documentation/appstoreserverapi/expiresdate expiresDate}
     **/
    expiresDate?: number;
    /**
     * The number of consumable products purchased.
     *
     * {@link https://developer.apple.com/documentation/appstoreserverapi/quantity quantity}
     **/
    quantity?: number;
    /**
     * The type of the in-app purchase.
     *
     * {@link https://developer.apple.com/documentation/appstoreserverapi/type type}
     **/
    type?: Type;
    /**
     * The UUID that an app optionally generates to map a customer’s in-app purchase with its resulting App Store transaction.
     *
     * {@link https://developer.apple.com/documentation/appstoreserverapi/appaccounttoken appAccountToken}
     **/
    appAccountToken?: string;
    /**
     * A string that describes whether the transaction was purchased by the user, or is available to them through Family Sharing.
     *
     * {@link https://developer.apple.com/documentation/appstoreserverapi/inappownershiptype inAppOwnershipType}
     **/
    inAppOwnershipType?: InAppOwnershipType;
    /**
     * The UNIX time, in milliseconds, that the App Store signed the JSON Web Signature data.
     *
     * {@link https://developer.apple.com/documentation/appstoreserverapi/signeddate signedDate}
     **/
    signedDate?: number;
    /**
     * The reason that the App Store refunded the transaction or revoked it from family sharing.
     *
     * {@link https://developer.apple.com/documentation/appstoreserverapi/revocationreason revocationReason}
     **/
    revocationReason?: RevocationReason;
    /**
     * The UNIX time, in milliseconds, that Apple Support refunded a transaction.
     *
     * {@link https://developer.apple.com/documentation/appstoreserverapi/revocationdate revocationDate}
     **/
    revocationDate?: number;
    /**
     * The Boolean value that indicates whether the user upgraded to another subscription.
     *
     * {@link https://developer.apple.com/documentation/appstoreserverapi/isupgraded isUpgraded}
     **/
    isUpgraded?: boolean;
    /**
     * A value that represents the promotional offer type.
     *
     * {@link https://developer.apple.com/documentation/appstoreserverapi/offertype offerType}
     **/
    offerType?: OfferType;
    /**
     * The identifier that contains the promo code or the promotional offer identifier.
     *
     * {@link https://developer.apple.com/documentation/appstoreserverapi/offeridentifier offerIdentifier}
     **/
    offerIdentifier?: string;
    /**
     * The server environment, either sandbox or production.
     *
     * {@link https://developer.apple.com/documentation/appstoreserverapi/environment environment}
     **/
    environment?: Environment;
    /**
     * The three-letter code that represents the country or region associated with the App Store storefront for the purchase.
     *
     * {@link https://developer.apple.com/documentation/appstoreserverapi/storefront storefront}
     **/
    storefront?: string;
    /**
     * An Apple-defined value that uniquely identifies the App Store storefront associated with the purchase.
     *
     * {@link https://developer.apple.com/documentation/appstoreserverapi/storefrontid storefrontId}
     **/
    storefrontId?: string;
    /**
     * The reason for the purchase transaction, which indicates whether it’s a customer’s purchase or a renewal for an auto-renewable subscription that the system initates.
     *
     * {@link https://developer.apple.com/documentation/appstoreserverapi/transactionreason transactionReason}
     **/
    transactionReason?: TransactionReason;
}
export declare class JWSTransactionDecodedPayloadValidator implements Validator<JWSTransactionDecodedPayload> {
    static readonly environmentValidator: EnvironmentValidator;
    static readonly offerTypeValidator: OfferTypeValidator;
    static readonly revocationReasonValidator: RevocationReasonValidator;
    static readonly inAppOwnershipTypeValidator: InAppOwnershipTypeValidator;
    static readonly typeValidator: TypeValidator;
    static readonly transactionReasonValidator: TransactionReasonValidator;
    validate(obj: any): obj is JWSTransactionDecodedPayload;
}
