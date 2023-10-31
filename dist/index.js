"use strict";
// Copyright (c) 2023 Apple Inc. Licensed under MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIError = exports.APIException = exports.AppStoreServerAPIClient = exports.PromotionalOfferSignatureCreator = exports.UserStatus = exports.Type = exports.TransactionReason = exports.ProductType = exports.Order = exports.Subtype = exports.Status = exports.RevocationReason = exports.PriceIncreaseStatus = exports.PlayTime = exports.Platform = exports.OrderLookupStatus = exports.OfferType = exports.NotificationTypeV2 = exports.LifetimeDollarsRefunded = exports.LifetimeDollarsPurchased = exports.InAppOwnershipType = exports.SendAttemptResult = exports.ExtendReasonCode = exports.ExpirationIntent = exports.Environment = exports.DeliveryStatus = exports.ConsumptionStatus = exports.AutoRenewStatus = exports.AccountTenure = exports.ReceiptUtility = exports.SignedJWTVerifier = void 0;
const node_fetch_1 = require("node-fetch");
const CheckTestNotificationResponse_1 = require("./models/CheckTestNotificationResponse");
const ExtendRenewalDateResponse_1 = require("./models/ExtendRenewalDateResponse");
const HistoryResponse_1 = require("./models/HistoryResponse");
const MassExtendRenewalDateResponse_1 = require("./models/MassExtendRenewalDateResponse");
const MassExtendRenewalDateStatusResponse_1 = require("./models/MassExtendRenewalDateStatusResponse");
const OrderLookupResponse_1 = require("./models/OrderLookupResponse");
const RefundHistoryResponse_1 = require("./models/RefundHistoryResponse");
const SendTestNotificationResponse_1 = require("./models/SendTestNotificationResponse");
const StatusResponse_1 = require("./models/StatusResponse");
const TransactionInfoResponse_1 = require("./models/TransactionInfoResponse");
var jwt_verification_1 = require("./jwt_verification");
Object.defineProperty(exports, "SignedJWTVerifier", { enumerable: true, get: function () { return jwt_verification_1.SignedDataVerifier; } });
var receipt_utility_1 = require("./receipt_utility");
Object.defineProperty(exports, "ReceiptUtility", { enumerable: true, get: function () { return receipt_utility_1.ReceiptUtility; } });
var AccountTenure_1 = require("./models/AccountTenure");
Object.defineProperty(exports, "AccountTenure", { enumerable: true, get: function () { return AccountTenure_1.AccountTenure; } });
var AutoRenewStatus_1 = require("./models/AutoRenewStatus");
Object.defineProperty(exports, "AutoRenewStatus", { enumerable: true, get: function () { return AutoRenewStatus_1.AutoRenewStatus; } });
var ConsumptionStatus_1 = require("./models/ConsumptionStatus");
Object.defineProperty(exports, "ConsumptionStatus", { enumerable: true, get: function () { return ConsumptionStatus_1.ConsumptionStatus; } });
var DeliveryStatus_1 = require("./models/DeliveryStatus");
Object.defineProperty(exports, "DeliveryStatus", { enumerable: true, get: function () { return DeliveryStatus_1.DeliveryStatus; } });
var Environment_1 = require("./models/Environment");
Object.defineProperty(exports, "Environment", { enumerable: true, get: function () { return Environment_1.Environment; } });
var ExpirationIntent_1 = require("./models/ExpirationIntent");
Object.defineProperty(exports, "ExpirationIntent", { enumerable: true, get: function () { return ExpirationIntent_1.ExpirationIntent; } });
var ExtendReasonCode_1 = require("./models/ExtendReasonCode");
Object.defineProperty(exports, "ExtendReasonCode", { enumerable: true, get: function () { return ExtendReasonCode_1.ExtendReasonCode; } });
var SendAttemptResult_1 = require("./models/SendAttemptResult");
Object.defineProperty(exports, "SendAttemptResult", { enumerable: true, get: function () { return SendAttemptResult_1.SendAttemptResult; } });
var InAppOwnershipType_1 = require("./models/InAppOwnershipType");
Object.defineProperty(exports, "InAppOwnershipType", { enumerable: true, get: function () { return InAppOwnershipType_1.InAppOwnershipType; } });
var LifetimeDollarsPurchased_1 = require("./models/LifetimeDollarsPurchased");
Object.defineProperty(exports, "LifetimeDollarsPurchased", { enumerable: true, get: function () { return LifetimeDollarsPurchased_1.LifetimeDollarsPurchased; } });
var LifetimeDollarsRefunded_1 = require("./models/LifetimeDollarsRefunded");
Object.defineProperty(exports, "LifetimeDollarsRefunded", { enumerable: true, get: function () { return LifetimeDollarsRefunded_1.LifetimeDollarsRefunded; } });
var NotificationTypeV2_1 = require("./models/NotificationTypeV2");
Object.defineProperty(exports, "NotificationTypeV2", { enumerable: true, get: function () { return NotificationTypeV2_1.NotificationTypeV2; } });
var OfferType_1 = require("./models/OfferType");
Object.defineProperty(exports, "OfferType", { enumerable: true, get: function () { return OfferType_1.OfferType; } });
var OrderLookupStatus_1 = require("./models/OrderLookupStatus");
Object.defineProperty(exports, "OrderLookupStatus", { enumerable: true, get: function () { return OrderLookupStatus_1.OrderLookupStatus; } });
var Platform_1 = require("./models/Platform");
Object.defineProperty(exports, "Platform", { enumerable: true, get: function () { return Platform_1.Platform; } });
var PlayTime_1 = require("./models/PlayTime");
Object.defineProperty(exports, "PlayTime", { enumerable: true, get: function () { return PlayTime_1.PlayTime; } });
var PriceIncreaseStatus_1 = require("./models/PriceIncreaseStatus");
Object.defineProperty(exports, "PriceIncreaseStatus", { enumerable: true, get: function () { return PriceIncreaseStatus_1.PriceIncreaseStatus; } });
var RevocationReason_1 = require("./models/RevocationReason");
Object.defineProperty(exports, "RevocationReason", { enumerable: true, get: function () { return RevocationReason_1.RevocationReason; } });
var Status_1 = require("./models/Status");
Object.defineProperty(exports, "Status", { enumerable: true, get: function () { return Status_1.Status; } });
var Subtype_1 = require("./models/Subtype");
Object.defineProperty(exports, "Subtype", { enumerable: true, get: function () { return Subtype_1.Subtype; } });
var TransactionHistoryRequest_1 = require("./models/TransactionHistoryRequest");
Object.defineProperty(exports, "Order", { enumerable: true, get: function () { return TransactionHistoryRequest_1.Order; } });
Object.defineProperty(exports, "ProductType", { enumerable: true, get: function () { return TransactionHistoryRequest_1.ProductType; } });
var TransactionReason_1 = require("./models/TransactionReason");
Object.defineProperty(exports, "TransactionReason", { enumerable: true, get: function () { return TransactionReason_1.TransactionReason; } });
var Type_1 = require("./models/Type");
Object.defineProperty(exports, "Type", { enumerable: true, get: function () { return Type_1.Type; } });
var UserStatus_1 = require("./models/UserStatus");
Object.defineProperty(exports, "UserStatus", { enumerable: true, get: function () { return UserStatus_1.UserStatus; } });
var promotional_offer_1 = require("./promotional_offer");
Object.defineProperty(exports, "PromotionalOfferSignatureCreator", { enumerable: true, get: function () { return promotional_offer_1.PromotionalOfferSignatureCreator; } });
const jsonwebtoken = require("jsonwebtoken");
const NotificationHistoryResponse_1 = require("./models/NotificationHistoryResponse");
class AppStoreServerAPIClient {
    /**
     * Create an App Store Server API client
     * @param signingKey Your private key downloaded from App Store Connect
     * @param keyId Your private key ID from App Store Connect
     * @param issuerId Your issuer ID from the Keys page in App Store Connect
     * @param bundleId Your app’s bundle ID
     * @param environment The environment to target
     */
    constructor(signingKey, keyId, issuerId, bundleId, environment) {
        this.issueId = issuerId;
        this.keyId = keyId;
        this.bundleId = bundleId;
        this.signingKey = signingKey;
        this.urlBase = environment === "Sandbox" ? AppStoreServerAPIClient.SANDBOX_URL : AppStoreServerAPIClient.PRODUCTION_URL;
    }
    async makeRequest(path, method, queryParameters, body, validator) {
        const headers = {
            'User-Agent': AppStoreServerAPIClient.USER_AGENT,
            'Authorization': 'Bearer ' + this.createBearerToken(),
            'Accept': 'application/json',
        };
        const parsedQueryParameters = new URLSearchParams(queryParameters);
        let stringBody = undefined;
        if (body != null) {
            stringBody = JSON.stringify(body);
            headers['Content-Type'] = 'application/json';
        }
        const response = await (0, node_fetch_1.default)(this.urlBase + path + '?' + parsedQueryParameters, {
            method: method,
            body: stringBody,
            headers: headers
        });
        if (response.ok) {
            // Success
            if (validator == null) {
                return null;
            }
            const responseBody = await response.json();
            if (!validator.validate(responseBody)) {
                throw new Error("Unexpected response body format");
            }
            return responseBody;
        }
        try {
            const responseBody = await response.json();
            const errorCode = responseBody['errorCode'];
            if (Object.values(APIError).includes(errorCode)) {
                throw new APIException(response.status, errorCode);
            }
            throw new APIException(response.status);
        }
        catch (e) {
            if (e instanceof APIException) {
                throw e;
            }
            throw new APIException(response.status);
        }
    }
    /**
     * Uses a subscription’s product identifier to extend the renewal date for all of its eligible active subscribers.
     *
     * @param massExtendRenewalDateRequest The request body for extending a subscription renewal date for all of its active subscribers.
     * @return A response that indicates the server successfully received the subscription-renewal-date extension request.
     * @throws APIException If a response was returned indicating the request could not be processed
     * {@link https://developer.apple.com/documentation/appstoreserverapi/extend_subscription_renewal_dates_for_all_active_subscribers Extend Subscription Renewal Dates for All Active Subscribers}
     */
    async extendRenewalDateForAllActiveSubscribers(massExtendRenewalDateRequest) {
        return await this.makeRequest("/inApps/v1/subscriptions/extend/mass/", "POST", {}, massExtendRenewalDateRequest, new MassExtendRenewalDateResponse_1.MassExtendRenewalDateResponseValidator());
    }
    /**
     * Extends the renewal date of a customer’s active subscription using the original transaction identifier.
     *
     * @param originalTransactionId    The original transaction identifier of the subscription receiving a renewal date extension.
     * @param extendRenewalDateRequest The request body containing subscription-renewal-extension data.
     * @return A response that indicates whether an individual renewal-date extension succeeded, and related details.
     * @throws APIException If a response was returned indicating the request could not be processed
     * {@link https://developer.apple.com/documentation/appstoreserverapi/extend_a_subscription_renewal_date Extend a Subscription Renewal Date}
     */
    async extendSubscriptionRenewalDate(originalTransactionId, extendRenewalDateRequest) {
        return await this.makeRequest("/inApps/v1/subscriptions/extend/" + originalTransactionId, "PUT", {}, extendRenewalDateRequest, new ExtendRenewalDateResponse_1.ExtendRenewalDateResponseValidator());
    }
    /**
     * Get the statuses for all of a customer’s auto-renewable subscriptions in your app.
     *
     * @param transactionId The identifier of a transaction that belongs to the customer, and which may be an original transaction identifier.
     * @param status An optional filter that indicates the status of subscriptions to include in the response. Your query may specify more than one status query parameter.
     * @return A response that contains status information for all of a customer’s auto-renewable subscriptions in your app.
     * @throws APIException If a response was returned indicating the request could not be processed
     * {@link https://developer.apple.com/documentation/appstoreserverapi/get_all_subscription_statuses Get All Subscription Statuses}
     */
    async getAllSubscriptionStatuses(transactionId, status = undefined) {
        const queryParameters = {};
        if (status != null) {
            queryParameters["status"] = status.map(s => s.toString());
        }
        return await this.makeRequest("/inApps/v1/subscriptions/" + transactionId, "GET", queryParameters, null, new StatusResponse_1.StatusResponseValidator());
    }
    /**
     * Get a paginated list of all of a customer’s refunded in-app purchases for your app.
     *
     * @param transactionId The identifier of a transaction that belongs to the customer, and which may be an original transaction identifier.
     * @param revision              A token you provide to get the next set of up to 20 transactions. All responses include a revision token. Use the revision token from the previous RefundHistoryResponse.
     * @return A response that contains status information for all of a customer’s auto-renewable subscriptions in your app.
     * @throws APIException If a response was returned indicating the request could not be processed
     * {@link https://developer.apple.com/documentation/appstoreserverapi/get_refund_history Get Refund History}
     */
    async getRefundHistory(transactionId, revision) {
        const queryParameters = {};
        if (revision !== null) {
            queryParameters["revision"] = [revision];
        }
        return await this.makeRequest("/inApps/v2/refund/lookup/" + transactionId, "GET", queryParameters, null, new RefundHistoryResponse_1.RefundHistoryResponseValidator());
    }
    /**
     * Checks whether a renewal date extension request completed, and provides the final count of successful or failed extensions.
     *
     * @param requestIdentifier The UUID that represents your request to the Extend Subscription Renewal Dates for All Active Subscribers endpoint.
     * @param productId         The product identifier of the auto-renewable subscription that you request a renewal-date extension for.
     * @return A response that indicates the current status of a request to extend the subscription renewal date to all eligible subscribers.
     * @throws APIException If a response was returned indicating the request could not be processed
     * {@link https://developer.apple.com/documentation/appstoreserverapi/get_status_of_subscription_renewal_date_extensions Get Status of Subscription Renewal Date Extensions}
     */
    async getStatusOfSubscriptionRenewalDateExtensions(requestIdentifier, productId) {
        return await this.makeRequest("/inApps/v1/subscriptions/extend/mass/" + productId + "/" + requestIdentifier, "GET", {}, null, new MassExtendRenewalDateStatusResponse_1.MassExtendRenewalDateStatusResponseValidator());
    }
    /**
     * Check the status of the test App Store server notification sent to your server.
     *
     * @param testNotificationToken The test notification token received from the Request a Test Notification endpoint
     * @return A response that contains the contents of the test notification sent by the App Store server and the result from your server.
     * @throws APIException If a response was returned indicating the request could not be processed
     * {@link https://developer.apple.com/documentation/appstoreserverapi/get_test_notification_status Get Test Notification Status}
     */
    async getTestNotificationStatus(testNotificationToken) {
        return await this.makeRequest("/inApps/v1/notifications/test/" + testNotificationToken, "GET", {}, null, new CheckTestNotificationResponse_1.CheckTestNotificationResponseValidator());
    }
    /**
     * Get a list of notifications that the App Store server attempted to send to your server.
     *
     * @param paginationToken An optional token you use to get the next set of up to 20 notification history records. All responses that have more records available include a paginationToken. Omit this parameter the first time you call this endpoint.
     * @param notificationHistoryRequest The request body that includes the start and end dates, and optional query constraints.
     * @return A response that contains the App Store Server Notifications history for your app.
     * @throws APIException If a response was returned indicating the request could not be processed
     * {@link https://developer.apple.com/documentation/appstoreserverapi/get_notification_histor Get Notification History}
     */
    async getNotificationHistory(paginationToken, notificationHistoryRequest) {
        const queryParameters = {};
        if (paginationToken != null) {
            queryParameters["paginationToken"] = [paginationToken];
        }
        return await this.makeRequest("/inApps/v1/notifications/history", "POST", queryParameters, notificationHistoryRequest, new NotificationHistoryResponse_1.NotificationHistoryResponseValidator());
    }
    /**
     * Get a customer’s in-app purchase transaction history for your app.
     *
     * @param transactionId The identifier of a transaction that belongs to the customer, and which may be an original transaction identifier.
     * @param revision              A token you provide to get the next set of up to 20 transactions. All responses include a revision token. Note: For requests that use the revision token, include the same query parameters from the initial request. Use the revision token from the previous HistoryResponse.
     * @return A response that contains the customer’s transaction history for an app.
     * @throws APIException If a response was returned indicating the request could not be processed
     * {@link https://developer.apple.com/documentation/appstoreserverapi/get_transaction_history Get Transaction History}
     */
    async getTransactionHistory(transactionId, revision, transactionHistoryRequest) {
        const queryParameters = {};
        if (revision != null) {
            queryParameters["revision"] = [revision];
        }
        if (transactionHistoryRequest.startDate) {
            queryParameters["startDate"] = [transactionHistoryRequest.startDate.toString()];
        }
        if (transactionHistoryRequest.endDate) {
            queryParameters["endDate"] = [transactionHistoryRequest.endDate.toString()];
        }
        if (transactionHistoryRequest.productIds) {
            queryParameters["productId"] = transactionHistoryRequest.productIds;
        }
        if (transactionHistoryRequest.productTypes) {
            queryParameters["productType"] = transactionHistoryRequest.productTypes;
        }
        if (transactionHistoryRequest.sort) {
            queryParameters["sort"] = [transactionHistoryRequest.sort];
        }
        if (transactionHistoryRequest.subscriptionGroupIdentifiers) {
            queryParameters["subscriptionGroupIdentifier"] = transactionHistoryRequest.subscriptionGroupIdentifiers;
        }
        if (transactionHistoryRequest.inAppOwnershipType) {
            queryParameters["inAppOwnershipType"] = [transactionHistoryRequest.inAppOwnershipType];
        }
        if (transactionHistoryRequest.revoked) {
            queryParameters["revoked"] = [transactionHistoryRequest.revoked.toString()];
        }
        return await this.makeRequest("/inApps/v1/history/" + transactionId, "GET", queryParameters, null, new HistoryResponse_1.HistoryResponseValidator());
    }
    /**
     * Get information about a single transaction for your app.
     *
     * @param transactionId The identifier of a transaction that belongs to the customer, and which may be an original transaction identifier.
     * @return A response that contains signed transaction information for a single transaction.
     * @throws APIException If a response was returned indicating the request could not be processed
     * {@link https://developer.apple.com/documentation/appstoreserverapi/get_transaction_info Get Transaction Info}
     */
    async getTransactionInfo(transactionId) {
        return await this.makeRequest("/inApps/v1/transactions/" + transactionId, "GET", {}, null, new TransactionInfoResponse_1.TransactionInfoResponseValidator());
    }
    /**
     * Get a customer’s in-app purchases from a receipt using the order ID.
     *
     * @param orderId The order ID for in-app purchases that belong to the customer.
     * @return A response that includes the order lookup status and an array of signed transactions for the in-app purchases in the order.
     * @throws APIException If a response was returned indicating the request could not be processed
     * {@link https://developer.apple.com/documentation/appstoreserverapi/look_up_order_id Look Up Order ID}
     */
    async lookUpOrderId(orderId) {
        return await this.makeRequest("/inApps/v1/lookup/" + orderId, "GET", {}, null, new OrderLookupResponse_1.OrderLookupResponseValidator());
    }
    /**
     * Ask App Store Server Notifications to send a test notification to your server.
     *
     * @return A response that contains the test notification token.
     * @throws APIException If a response was returned indicating the request could not be processed
     * {@link https://developer.apple.com/documentation/appstoreserverapi/request_a_test_notification Request a Test Notification}
     */
    async requestTestNotification() {
        return await this.makeRequest("/inApps/v1/notifications/test", "POST", {}, null, new SendTestNotificationResponse_1.SendTestNotificationResponseValidator());
    }
    /**
     * Send consumption information about a consumable in-app purchase to the App Store after your server receives a consumption request notification.
     *
     * @param transactionId The transaction identifier for which you’re providing consumption information. You receive this identifier in the CONSUMPTION_REQUEST notification the App Store sends to your server.
     * @param consumptionRequest    The request body containing consumption information.
     * @throws APIException If a response was returned indicating the request could not be processed
     * {@link https://developer.apple.com/documentation/appstoreserverapi/send_consumption_information Send Consumption Information}
     */
    async sendConsumptionData(transactionId, consumptionRequest) {
        await this.makeRequest("/inApps/v1/transactions/consumption/" + transactionId, "PUT", {}, consumptionRequest, null);
    }
    createBearerToken() {
        const payload = {
            bid: this.bundleId
        };
        return jsonwebtoken.sign(payload, this.signingKey, { algorithm: 'ES256', keyid: this.keyId, issuer: this.issueId, audience: 'appstoreconnect-v1', expiresIn: '5m' });
    }
}
exports.AppStoreServerAPIClient = AppStoreServerAPIClient;
AppStoreServerAPIClient.PRODUCTION_URL = "https://api.storekit.itunes.apple.com";
AppStoreServerAPIClient.SANDBOX_URL = "https://api.storekit-sandbox.itunes.apple.com";
AppStoreServerAPIClient.USER_AGENT = "app-store-server-library/node/0.1";
class APIException extends Error {
    constructor(httpStatusCode, apiError = null) {
        super();
        this.httpStatusCode = httpStatusCode;
        this.apiError = apiError;
    }
}
exports.APIException = APIException;
var APIError;
(function (APIError) {
    APIError[APIError["GENERAL_BAD_REQUEST"] = 4000000] = "GENERAL_BAD_REQUEST";
    APIError[APIError["INVALID_APP_IDENTIFIER"] = 4000002] = "INVALID_APP_IDENTIFIER";
    APIError[APIError["INVALID_REQUEST_REVISION"] = 4000005] = "INVALID_REQUEST_REVISION";
    APIError[APIError["INVALID_TRANSACTION_ID"] = 4000006] = "INVALID_TRANSACTION_ID";
    APIError[APIError["INVALID_ORIGINAL_TRANSACTION_ID"] = 4000008] = "INVALID_ORIGINAL_TRANSACTION_ID";
    APIError[APIError["INVALID_EXTEND_BY_DAYS"] = 4000009] = "INVALID_EXTEND_BY_DAYS";
    APIError[APIError["INVALID_EXTEND_REASON_CODE"] = 4000010] = "INVALID_EXTEND_REASON_CODE";
    APIError[APIError["INVALID_IDENTIFIER"] = 4000011] = "INVALID_IDENTIFIER";
    APIError[APIError["START_DATE_TOO_FAR_IN_PAST"] = 4000012] = "START_DATE_TOO_FAR_IN_PAST";
    APIError[APIError["START_DATE_AFTER_END_DATE"] = 4000013] = "START_DATE_AFTER_END_DATE";
    APIError[APIError["INVALID_PAGINATION_TOKEN"] = 4000014] = "INVALID_PAGINATION_TOKEN";
    APIError[APIError["INVALID_START_DATE"] = 4000015] = "INVALID_START_DATE";
    APIError[APIError["INVALID_END_DATE"] = 4000016] = "INVALID_END_DATE";
    APIError[APIError["PAGINATION_TOKEN_EXPIRED"] = 4000017] = "PAGINATION_TOKEN_EXPIRED";
    APIError[APIError["INVALID_NOTIFICATION_TYPE"] = 4000018] = "INVALID_NOTIFICATION_TYPE";
    APIError[APIError["MULTIPLE_FILTERS_SUPPLIED"] = 4000019] = "MULTIPLE_FILTERS_SUPPLIED";
    APIError[APIError["INVALID_TEST_NOTIFICATION_TOKEN"] = 4000020] = "INVALID_TEST_NOTIFICATION_TOKEN";
    APIError[APIError["INVALID_SORT"] = 4000021] = "INVALID_SORT";
    APIError[APIError["INVALID_PRODUCT_TYPE"] = 4000022] = "INVALID_PRODUCT_TYPE";
    APIError[APIError["INVALID_PRODUCT_ID"] = 4000023] = "INVALID_PRODUCT_ID";
    APIError[APIError["INVALID_SUBSCRIPTION_GROUP_IDENTIFIER"] = 4000024] = "INVALID_SUBSCRIPTION_GROUP_IDENTIFIER";
    APIError[APIError["INVALID_EXCLUDE_REVOKED"] = 4000025] = "INVALID_EXCLUDE_REVOKED";
    APIError[APIError["INVALID_IN_APP_OWNERSHIP_TYPE"] = 4000026] = "INVALID_IN_APP_OWNERSHIP_TYPE";
    APIError[APIError["INVALID_EMPTY_STOREFRONT_COUNTRY_CODE_LIST"] = 4000027] = "INVALID_EMPTY_STOREFRONT_COUNTRY_CODE_LIST";
    APIError[APIError["INVALID_STOREFRONT_COUNTRY_CODE"] = 4000028] = "INVALID_STOREFRONT_COUNTRY_CODE";
    APIError[APIError["INVALID_REVOKED"] = 4000030] = "INVALID_REVOKED";
    APIError[APIError["INVALID_STATUS"] = 4000031] = "INVALID_STATUS";
    APIError[APIError["INVALID_ACCOUNT_TENURE"] = 4000032] = "INVALID_ACCOUNT_TENURE";
    APIError[APIError["INVALID_APP_ACCOUNT_TOKEN"] = 4000033] = "INVALID_APP_ACCOUNT_TOKEN";
    APIError[APIError["INVALID_CONSUMPTION_STATUS"] = 4000034] = "INVALID_CONSUMPTION_STATUS";
    APIError[APIError["INVALID_CUSTOMER_CONSENTED"] = 4000035] = "INVALID_CUSTOMER_CONSENTED";
    APIError[APIError["INVALID_DELIVERY_STATUS"] = 4000036] = "INVALID_DELIVERY_STATUS";
    APIError[APIError["INVALID_LIFETIME_DOLLARS_PURCHASED"] = 4000037] = "INVALID_LIFETIME_DOLLARS_PURCHASED";
    APIError[APIError["INVALID_LIFETIME_DOLLARS_REFUNDED"] = 4000038] = "INVALID_LIFETIME_DOLLARS_REFUNDED";
    APIError[APIError["INVALID_PLATFORM"] = 4000039] = "INVALID_PLATFORM";
    APIError[APIError["INVALID_PLAY_TIME"] = 4000040] = "INVALID_PLAY_TIME";
    APIError[APIError["INVALID_SAMPLE_CONTENT_PROVIDED"] = 4000041] = "INVALID_SAMPLE_CONTENT_PROVIDED";
    APIError[APIError["INVALID_USER_STATUS"] = 4000042] = "INVALID_USER_STATUS";
    APIError[APIError["INVALID_TRANSACTION_NOT_CONSUMABLE"] = 4000043] = "INVALID_TRANSACTION_NOT_CONSUMABLE";
    APIError[APIError["SUBSCRIPTION_EXTENSION_INELIGIBLE"] = 4030004] = "SUBSCRIPTION_EXTENSION_INELIGIBLE";
    APIError[APIError["SUBSCRIPTION_MAX_EXTENSION"] = 4030005] = "SUBSCRIPTION_MAX_EXTENSION";
    APIError[APIError["FAMILY_SHARED_SUBSCRIPTION_EXTENSION_INELIGIBLE"] = 4030007] = "FAMILY_SHARED_SUBSCRIPTION_EXTENSION_INELIGIBLE";
    APIError[APIError["ACCOUNT_NOT_FOUND"] = 4040001] = "ACCOUNT_NOT_FOUND";
    APIError[APIError["ACCOUNT_NOT_FOUND_RETRYABLE"] = 4040002] = "ACCOUNT_NOT_FOUND_RETRYABLE";
    APIError[APIError["APP_NOT_FOUND"] = 4040003] = "APP_NOT_FOUND";
    APIError[APIError["APP_NOT_FOUND_RETRYABLE"] = 4040004] = "APP_NOT_FOUND_RETRYABLE";
    APIError[APIError["ORIGINAL_TRANSACTION_ID_NOT_FOUND"] = 4040005] = "ORIGINAL_TRANSACTION_ID_NOT_FOUND";
    APIError[APIError["ORIGINAL_TRANSACTION_ID_NOT_FOUND_RETRYABLE"] = 4040006] = "ORIGINAL_TRANSACTION_ID_NOT_FOUND_RETRYABLE";
    APIError[APIError["SERVER_NOTIFICATION_URL_NOT_FOUND"] = 4040007] = "SERVER_NOTIFICATION_URL_NOT_FOUND";
    APIError[APIError["TEST_NOTIFICATION_NOT_FOUND"] = 4040008] = "TEST_NOTIFICATION_NOT_FOUND";
    APIError[APIError["STATUS_REQUEST_NOT_FOUND"] = 4040009] = "STATUS_REQUEST_NOT_FOUND";
    APIError[APIError["TRANSACTION_ID_NOT_FOUND"] = 4040010] = "TRANSACTION_ID_NOT_FOUND";
    APIError[APIError["RATE_LIMIT_EXCEEDED"] = 4290000] = "RATE_LIMIT_EXCEEDED";
    APIError[APIError["GENERAL_INTERNAL"] = 5000000] = "GENERAL_INTERNAL";
    APIError[APIError["GENERAL_INTERNAL_RETRYABLE"] = 5000001] = "GENERAL_INTERNAL_RETRYABLE";
})(APIError || (exports.APIError = APIError = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNERBQTREOzs7QUFFNUQsMkNBQStCO0FBQy9CLDBGQUErSDtBQUkvSCxrRkFBbUg7QUFDbkgsOERBQXFGO0FBRXJGLDBGQUErSDtBQUMvSCxzR0FBaUo7QUFDakosc0VBQWlHO0FBQ2pHLDBFQUF1RztBQUN2Ryx3RkFBNEg7QUFDNUgsNERBQWtGO0FBRWxGLDhFQUE2RztBQUc3Ryx1REFBNEU7QUFBbkUscUhBQUEsa0JBQWtCLE9BQXFCO0FBQ2hELHFEQUFrRDtBQUF6QyxpSEFBQSxjQUFjLE9BQUE7QUFDdkIsd0RBQXNEO0FBQTdDLDhHQUFBLGFBQWEsT0FBQTtBQUN0Qiw0REFBMEQ7QUFBakQsa0hBQUEsZUFBZSxPQUFBO0FBR3hCLGdFQUE4RDtBQUFyRCxzSEFBQSxpQkFBaUIsT0FBQTtBQUUxQiwwREFBd0Q7QUFBL0MsZ0hBQUEsY0FBYyxPQUFBO0FBQ3ZCLG9EQUFrRDtBQUF6QywwR0FBQSxXQUFXLE9BQUE7QUFDcEIsOERBQTREO0FBQW5ELG9IQUFBLGdCQUFnQixPQUFBO0FBQ3pCLDhEQUE0RDtBQUFuRCxvSEFBQSxnQkFBZ0IsT0FBQTtBQUd6QixnRUFBOEQ7QUFBckQsc0hBQUEsaUJBQWlCLE9BQUE7QUFHMUIsa0VBQWdFO0FBQXZELHdIQUFBLGtCQUFrQixPQUFBO0FBSTNCLDhFQUE0RTtBQUFuRSxvSUFBQSx3QkFBd0IsT0FBQTtBQUNqQyw0RUFBMEU7QUFBakUsa0lBQUEsdUJBQXVCLE9BQUE7QUFPaEMsa0VBQWdFO0FBQXZELHdIQUFBLGtCQUFrQixPQUFBO0FBQzNCLGdEQUE4QztBQUFyQyxzR0FBQSxTQUFTLE9BQUE7QUFFbEIsZ0VBQThEO0FBQXJELHNIQUFBLGlCQUFpQixPQUFBO0FBQzFCLDhDQUE0QztBQUFuQyxvR0FBQSxRQUFRLE9BQUE7QUFDakIsOENBQTRDO0FBQW5DLG9HQUFBLFFBQVEs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QVIsUUFBUSxRQXdEbkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgQXBwbGUgSW5jLiBMaWNlbnNlZCB1bmRlciBNSVQgTGljZW5zZS5cblxuaW1wb3J0IGZldGNoIGZyb20gJ25vZGUtZmV0Y2gnO1xuaW1wb3J0IHsgQ2hlY2tUZXN0Tm90aWZpY2F0aW9uUmVzcG9uc2UsIENoZWNrVGVzdE5vdGlmaWNhdGlvblJlc3BvbnNlVmFsaWRhdG9yIH0gZnJvbSAnLi9tb2RlbHMvQ2hlY2tUZXN0Tm90aWZpY2F0aW9uUmVzcG9uc2UnO1xuaW1wb3J0IHsgQ29uc3VtcHRpb25SZXF1ZXN0IH0gZnJvbSAnLi9tb2RlbHMvQ29uc3VtcHRpb25SZXF1ZXN0JztcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnLi9tb2RlbHMvRW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgRXh0ZW5kUmVuZXdhbERhdGVSZXF1ZXN0IH0gZnJvbSAnLi9tb2RlbHMvRXh0ZW5kUmVuZXdhbERhdGVSZXF1ZXN0JztcbmltcG9ydCB7IEV4dGVuZFJlbmV3YWxEYXRlUmVzcG9uc2UsIEV4dGVuZFJlbmV3YWxEYXRlUmVzcG9uc2VWYWxpZGF0b3IgfSBmcm9tICcuL21vZGVscy9FeHRlbmRSZW5ld2FsRGF0ZVJlc3BvbnNlJztcbmltcG9ydCB7IEhpc3RvcnlSZXNwb25zZSwgSGlzdG9yeVJlc3BvbnNlVmFsaWRhdG9yIH0gZnJvbSAnLi9tb2RlbHMvSGlzdG9yeVJlc3BvbnNlJztcbmltcG9ydCB7IE1hc3NFeHRlbmRSZW5ld2FsRGF0ZVJlcXVlc3QgfSBmcm9tICcuL21vZGVscy9NYXNzRXh0ZW5kUmVuZXdhbERhdGVSZXF1ZXN0JztcbmltcG9ydCB7IE1hc3NFeHRlbmRSZW5ld2FsRGF0ZVJlc3BvbnNlLCBNYXNzRXh0ZW5kUmVuZXdhbERhdGVSZXNwb25zZVZhbGlkYXRvciB9IGZyb20gJy4vbW9kZWxzL01hc3NFeHRlbmRSZW5ld2FsRGF0ZVJlc3BvbnNlJztcbmltcG9ydCB7IE1hc3NFeHRlbmRSZW5ld2FsRGF0ZVN0YXR1c1Jlc3BvbnNlLCBNYXNzRXh0ZW5kUmVuZXdhbERhdGVTdGF0dXNSZXNwb25zZVZhbGlkYXRvciB9IGZyb20gJy4vbW9kZWxzL01hc3NFeHRlbmRSZW5ld2FsRGF0ZVN0YXR1c1Jlc3BvbnNlJztcbmltcG9ydCB7IE9yZGVyTG9va3VwUmVzcG9uc2UsIE9yZGVyTG9va3VwUmVzcG9uc2VWYWxpZGF0b3IgfSBmcm9tICcuL21vZGVscy9PcmRlckxvb2t1cFJlc3BvbnNlJztcbmltcG9ydCB7IFJlZnVuZEhpc3RvcnlSZXNwb25zZSwgUmVmdW5kSGlzdG9yeVJlc3BvbnNlVmFsaWRhdG9yIH0gZnJvbSAnLi9tb2RlbHMvUmVmdW5kSGlzdG9yeVJlc3BvbnNlJztcbmltcG9ydCB7IFNlbmRUZXN0Tm90aWZpY2F0aW9uUmVzcG9uc2UsIFNlbmRUZXN0Tm90aWZpY2F0aW9uUmVzcG9uc2VWYWxpZGF0b3IgfSBmcm9tICcuL21vZGVscy9TZW5kVGVzdE5vdGlmaWNhdGlvblJlc3BvbnNlJztcbmltcG9ydCB7IFN0YXR1c1Jlc3BvbnNlLCBTdGF0dXNSZXNwb25zZVZhbGlkYXRvciB9IGZyb20gJy4vbW9kZWxzL1N0YXR1c1Jlc3BvbnNlJztcbmltcG9ydCB7IFRyYW5zYWN0aW9uSGlzdG9yeVJlcXVlc3QgfSBmcm9tICcuL21vZGVscy9UcmFuc2FjdGlvbkhpc3RvcnlSZXF1ZXN0JztcbmltcG9ydCB7IFRyYW5zYWN0aW9uSW5mb1Jlc3BvbnNlLCBUcmFuc2FjdGlvbkluZm9SZXNwb25zZVZhbGlkYXRvciB9IGZyb20gJy4vbW9kZWxzL1RyYW5zYWN0aW9uSW5mb1Jlc3BvbnNlJztcbmltcG9ydCB7IFZhbGlkYXRvciB9IGZyb20gJy4vbW9kZWxzL1ZhbGlkYXRvcic7XG5pbXBvcnQgeyBTdGF0dXMgfSBmcm9tICcuL21vZGVscy9TdGF0dXMnO1xuZXhwb3J0IHsgU2lnbmVkRGF0YVZlcmlmaWVyIGFzIFNpZ25lZEpXVFZlcmlmaWVyIH0gZnJvbSAnLi9qd3RfdmVyaWZpY2F0aW9uJ1xuZXhwb3J0IHsgUmVjZWlwdFV0aWxpdHkgfSBmcm9tICcuL3JlY2VpcHRfdXRpbGl0eSdcbmV4cG9ydCB7IEFjY291bnRUZW51cmUgfSBmcm9tIFwiLi9tb2RlbHMvQWNjb3VudFRlbnVyZVwiXG5leHBvcnQgeyBBdXRvUmVuZXdTdGF0dXMgfSBmcm9tICcuL21vZGVscy9BdXRvUmVuZXdTdGF0dXMnXG5leHBvcnQgeyBDaGVja1Rlc3ROb3RpZmljYXRpb25SZXNwb25zZSB9IGZyb20gJy4vbW9kZWxzL0NoZWNrVGVzdE5vdGlmaWNhdGlvblJlc3BvbnNlJ1xuZXhwb3J0IHsgQ29uc3VtcHRpb25SZXF1ZXN0IH0gZnJvbSAnLi9tb2RlbHMvQ29uc3VtcHRpb25SZXF1ZXN0J1xuZXhwb3J0IHsgQ29uc3VtcHRpb25TdGF0dXMgfSBmcm9tICcuL21vZGVscy9Db25zdW1wdGlvblN0YXR1cydcbmV4cG9ydCB7IERhdGEgfSBmcm9tICcuL21vZGVscy9EYXRhJ1xuZXhwb3J0IHsgRGVsaXZlcnlTdGF0dXMgfSBmcm9tICcuL21vZGVscy9EZWxpdmVyeVN0YXR1cydcbmV4cG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnLi9tb2RlbHMvRW52aXJvbm1lbnQnXG5leHBvcnQgeyBFeHBpcmF0aW9uSW50ZW50IH0gZnJvbSAnLi9tb2RlbHMvRXhwaXJhdGlvbkludGVudCdcbmV4cG9ydCB7IEV4dGVuZFJlYXNvbkNvZGUgfSBmcm9tICcuL21vZGVscy9FeHRlbmRSZWFzb25Db2RlJ1xuZXhwb3J0IHsgRXh0ZW5kUmVuZXdhbERhdGVSZXF1ZXN0IH0gZnJvbSAnLi9tb2RlbHMvRXh0ZW5kUmVuZXdhbERhdGVSZXF1ZXN0J1xuZXhwb3J0IHsgRXh0ZW5kUmVuZXdhbERhdGVSZXNwb25zZSB9IGZyb20gJy4vbW9kZWxzL0V4dGVuZFJlbmV3YWxEYXRlUmVzcG9uc2UnXG5leHBvcnQgeyBTZW5kQXR0ZW1wdFJlc3VsdCB9IGZyb20gJy4vbW9kZWxzL1NlbmRBdHRlbXB0UmVzdWx0J1xuZXhwb3J0IHsgU2VuZEF0dGVtcHRJdGVtIH0gZnJvbSAnLi9tb2RlbHMvU2VuZEF0dGVtcHRJdGVtJ1xuZXhwb3J0IHsgSGlzdG9yeVJlc3BvbnNlIH0gZnJvbSAnLi9tb2RlbHMvSGlzdG9yeVJlc3BvbnNlJ1xuZXhwb3J0IHsgSW5BcHBPd25lcnNoaXBUeXBlIH0gZnJvbSAnLi9tb2RlbHMvSW5BcHBPd25lcnNoaXBUeXBlJ1xuZXhwb3J0IHsgSldTUmVuZXdhbEluZm9EZWNvZGVkUGF5bG9hZCB9IGZyb20gJy4vbW9kZWxzL0pXU1JlbmV3YWxJbmZvRGVjb2RlZFBheWxvYWQnXG5leHBvcnQgeyBKV1NUcmFuc2FjdGlvbkRlY29kZWRQYXlsb2FkIH0gZnJvbSAnLi9tb2RlbHMvSldTVHJhbnNhY3Rpb25EZWNvZGVkUGF5bG9hZCdcbmV4cG9ydCB7IExhc3RUcmFuc2FjdGlvbnNJdGVtIH0gZnJvbSAnLi9tb2RlbHMvTGFzdFRyYW5zYWN0aW9uc0l0ZW0nXG5leHBvcnQgeyBMaWZldGltZURvbGxhcnNQdXJjaGFzZWQgfSBmcm9tICcuL21vZGVscy9MaWZldGltZURvbGxhcnNQdXJjaGFzZWQnXG5leHBvcnQgeyBMaWZldGltZURvbGxhcnNSZWZ1bmRlZCB9IGZyb20gJy4vbW9kZWxzL0xpZmV0aW1lRG9sbGFyc1JlZnVuZGVkJ1xuZXhwb3J0IHsgTWFzc0V4dGVuZFJlbmV3YWxEYXRlUmVxdWVzdCB9IGZyb20gJy4vbW9kZWxzL01hc3NFeHRlbmRSZW5ld2FsRGF0ZVJlcXVlc3QnXG5leHBvcnQgeyBNYXNzRXh0ZW5kUmVuZXdhbERhdGVSZXNwb25zZSB9IGZyb20gJy4vbW9kZWxzL01hc3NFeHRlbmRSZW5ld2FsRGF0ZVJlc3BvbnNlJ1xuZXhwb3J0IHsgTWFzc0V4dGVuZFJlbmV3YWxEYXRlU3RhdHVzUmVzcG9uc2UgfSBmcm9tICcuL21vZGVscy9NYXNzRXh0ZW5kUmVuZXdhbERhdGVTdGF0dXNSZXNwb25zZSdcbmV4cG9ydCB7IE5vdGlmaWNhdGlvbkhpc3RvcnlSZXF1ZXN0IH0gZnJvbSAnLi9tb2RlbHMvTm90aWZpY2F0aW9uSGlzdG9yeVJlcXVlc3QnXG5leHBvcnQgeyBOb3RpZmljYXRpb25IaXN0b3J5UmVzcG9uc2UgfSBmcm9tICcuL21vZGVscy9Ob3RpZmljYXRpb25IaXN0b3J5UmVzcG9uc2UnXG5leHBvcnQgeyBOb3RpZmljYXRpb25IaXN0b3J5UmVzcG9uc2VJdGVtIH0gZnJvbSAnLi9tb2RlbHMvTm90aWZpY2F0aW9uSGlzdG9yeVJlc3BvbnNlSXRlbSdcbmV4cG9ydCB7IE5vdGlmaWNhdGlvblR5cGVWMiB9IGZyb20gJy4vbW9kZWxzL05vdGlmaWNhdGlvblR5cGVWMidcbmV4cG9ydCB7IE9mZmVyVHlwZSB9IGZyb20gJy4vbW9kZWxzL09mZmVyVHlwZSdcbmV4cG9ydCB7IE9yZGVyTG9va3VwUmVzcG9uc2UgfSBmcm9tICcuL21vZGVscy9PcmRlckxvb2t1cFJlc3BvbnNlJ1xuZXhwb3J0IHsgT3JkZXJMb29rdXBTdGF0dXMgfSBmcm9tICcuL21vZGVscy9PcmRlckxvb2t1cFN0YXR1cydcbmV4cG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi9tb2RlbHMvUGxhdGZvcm0nXG5leHBvcnQgeyBQbGF5VGltZSB9IGZyb20gJy4vbW9kZWxzL1BsYXlUaW1lJ1xuZXhwb3J0IHsgUHJpY2VJbmNyZWFzZVN0YXR1cyB9IGZyb20gJy4vbW9kZWxzL1ByaWNlSW5jcmVhc2VTdGF0dXMnXG5leHBvcnQgeyBSZWZ1bmRIaXN0b3J5UmVzcG9uc2UgfSBmcm9tICcuL21vZGVscy9SZWZ1bmRIaXN0b3J5UmVzcG9uc2UnXG5leHBvcnQgeyBSZXNwb25zZUJvZHlWMiB9IGZyb20gJy4vbW9kZWxzL1Jlc3BvbnNlQm9keVYyJ1xuZXhwb3J0IHsgUmVzcG9uc2VCb2R5VjJEZWNvZGVkUGF5bG9hZCB9IGZyb20gJy4vbW9kZWxzL1Jlc3BvbnNlQm9keVYyRGVjb2RlZFBheWxvYWQnXG5leHBvcnQgeyBSZXZvY2F0aW9uUmVhc29uIH0gZnJvbSAnLi9tb2RlbHMvUmV2b2NhdGlvblJlYXNvbidcbmV4cG9ydCB7IFNlbmRUZXN0Tm90aWZpY2F0aW9uUmVzcG9uc2UgfSBmcm9tICcuL21vZGVscy9TZW5kVGVzdE5vdGlmaWNhdGlvblJlc3BvbnNlJ1xuZXhwb3J0IHsgU3RhdHVzIH0gZnJvbSAnLi9tb2RlbHMvU3RhdHVzJ1xuZXhwb3J0IHsgU3RhdHVzUmVzcG9uc2UgfSBmcm9tICcuL21vZGVscy9TdGF0dXNSZXNwb25zZSdcbmV4cG9ydCB7IFN1YnNjcmlwdGlvbkdyb3VwSWRlbnRpZmllckl0ZW0gfSBmcm9tICcuL21vZGVscy9TdWJzY3JpcHRpb25Hcm91cElkZW50aWZpZXJJdGVtJ1xuZXhwb3J0IHsgU3VidHlwZSB9IGZyb20gJy4vbW9kZWxzL1N1YnR5cGUnXG5leHBvcnQgeyBTdW1tYXJ5IH0gZnJvbSAnLi9tb2RlbHMvU3VtbWFyeSdcbmV4cG9ydCB7IFRyYW5zYWN0aW9uSGlzdG9yeVJlcXVlc3QsIE9yZGVyLCBQcm9kdWN0VHlwZSB9IGZyb20gJy4vbW9kZWxzL1RyYW5zYWN0aW9uSGlzdG9yeVJlcXVlc3QnXG5leHBvcnQgeyBUcmFuc2FjdGlvbkluZm9SZXNwb25zZSB9IGZyb20gJy4vbW9kZWxzL1RyYW5zYWN0aW9uSW5mb1Jlc3BvbnNlJ1xuZXhwb3J0IHsgVHJhbnNhY3Rpb25SZWFzb24gfSBmcm9tICcuL21vZGVscy9UcmFuc2FjdGlvblJlYXNvbidcbmV4cG9ydCB7IFR5cGUgfSBmcm9tICcuL21vZGVscy9UeXBlJ1xuZXhwb3J0IHsgVXNlclN0YXR1cyB9IGZyb20gJy4vbW9kZWxzL1VzZXJTdGF0dXMnXG5leHBvcnQgeyBQcm9tb3Rpb25hbE9mZmVyU2lnbmF0dXJlQ3JlYXRvciB9IGZyb20gJy4vcHJvbW90aW9uYWxfb2ZmZXInXG5leHBvcnQgeyBEZWNvZGVkU2lnbmVkRGF0YSB9IGZyb20gJy4vbW9kZWxzL0RlY29kZWRTaWduZWREYXRhJ1xuZXhwb3J0IHsgQXBwVHJhbnNhY3Rpb24gfSBmcm9tICcuL21vZGVscy9BcHBUcmFuc2FjdGlvbidcblxuaW1wb3J0IGpzb253ZWJ0b2tlbiA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uSGlzdG9yeVJlcXVlc3QgfSBmcm9tICcuL21vZGVscy9Ob3RpZmljYXRpb25IaXN0b3J5UmVxdWVzdCc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25IaXN0b3J5UmVzcG9uc2UsIE5vdGlmaWNhdGlvbkhpc3RvcnlSZXNwb25zZVZhbGlkYXRvciB9IGZyb20gJy4vbW9kZWxzL05vdGlmaWNhdGlvbkhpc3RvcnlSZXNwb25zZSc7XG5cbmV4cG9ydCBjbGFzcyBBcHBTdG9yZVNlcnZlckFQSUNsaWVudCB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgUFJPRFVDVElPTl9VUkwgPSBcImh0dHBzOi8vYXBpLnN0b3Jla2l0Lml0dW5lcy5hcHBsZS5jb21cIjtcbiAgICBwcml2YXRlIHN0YXRpYyBTQU5EQk9YX1VSTCA9IFwiaHR0cHM6Ly9hcGkuc3RvcmVraXQtc2FuZGJveC5pdHVuZXMuYXBwbGUuY29tXCI7XG4gICAgcHJpdmF0ZSBzdGF0aWMgVVNFUl9BR0VOVCA9IFwiYXBwLXN0b3JlLXNlcnZlci1saWJyYXJ5L25vZGUvMC4xXCI7XG5cbiAgICBwcml2YXRlIGlzc3VlSWQ6IHN0cmluZ1xuICAgIHByaXZhdGUga2V5SWQ6IHN0cmluZ1xuICAgIHByaXZhdGUgc2lnbmluZ0tleTogc3RyaW5nXG4gICAgcHJpdmF0ZSBidW5kbGVJZDogc3RyaW5nXG4gICAgcHJpdmF0ZSB1cmxCYXNlOiBzdHJpbmdcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhbiBBcHAgU3RvcmUgU2VydmVyIEFQSSBjbGllbnRcbiAgICAgKiBAcGFyYW0gc2lnbmluZ0tleSBZb3VyIHByaXZhdGUga2V5IGRvd25sb2FkZWQgZnJvbSBBcHAgU3RvcmUgQ29ubmVjdFxuICAgICAqIEBwYXJhbSBrZXlJZCBZb3VyIHByaXZhdGUga2V5IElEIGZyb20gQXBwIFN0b3JlIENvbm5lY3RcbiAgICAgKiBAcGFyYW0gaXNzdWVySWQgWW91ciBpc3N1ZXIgSUQgZnJvbSB0aGUgS2V5cyBwYWdlIGluIEFwcCBTdG9yZSBDb25uZWN0XG4gICAgICogQHBhcmFtIGJ1bmRsZUlkIFlvdXIgYXBw4oCZcyBidW5kbGUgSURcbiAgICAgKiBAcGFyYW0gZW52aXJvbm1lbnQgVGhlIGVudmlyb25tZW50IHRvIHRhcmdldFxuICAgICAqL1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzaWduaW5nS2V5OiBzdHJpbmcsIGtleUlkOiBzdHJpbmcsIGlzc3VlcklkOiBzdHJpbmcsIGJ1bmRsZUlkOiBzdHJpbmcsIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCkge1xuICAgICAgICB0aGlzLmlzc3VlSWQgPSBpc3N1ZXJJZFxuICAgICAgICB0aGlzLmtleUlkID0ga2V5SWRcbiAgICAgICAgdGhpcy5idW5kbGVJZCA9IGJ1bmRsZUlkXG4gICAgICAgIHRoaXMuc2lnbmluZ0tleSA9IHNpZ25pbmdLZXlcbiAgICAgICAgdGhpcy51cmxCYXNlID0gZW52aXJvbm1lbnQgPT09IFwiU2FuZGJveFwiID8gQXBwU3RvcmVTZXJ2ZXJBUElDbGllbnQuU0FOREJPWF9VUkwgOiBBcHBTdG9yZVNlcnZlckFQSUNsaWVudC5QUk9EVUNUSU9OX1VSTFxuICAgIH1cblxuICAgIHByb3RlY3RlZCBhc3luYyBtYWtlUmVxdWVzdDxUPihwYXRoOiBzdHJpbmcsIG1ldGhvZDogc3RyaW5nLCBxdWVyeVBhcmFtZXRlcnM6IHsgW2tleTogc3RyaW5nXTogW3N0cmluZ119LCBib2R5OiBvYmplY3QgfCBudWxsLCB2YWxpZGF0b3I6IFZhbGlkYXRvcjxUPiB8IG51bGwpOiBQcm9taXNlPFQ+IHtcbiAgICAgICAgY29uc3QgaGVhZGVyczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHtcbiAgICAgICAgICAgICdVc2VyLUFnZW50JzogQXBwU3RvcmVTZXJ2ZXJBUElDbGllbnQuVVNFUl9BR0VOVCxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5jcmVhdGVCZWFyZXJUb2tlbigpLFxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWRRdWVyeVBhcmFtZXRlcnMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5UGFyYW1ldGVycylcbiAgICAgICAgbGV0IHN0cmluZ0JvZHkgPSB1bmRlZmluZWRcbiAgICAgICAgaWYgKGJvZHkgIT0gbnVsbCkge1xuICAgICAgICAgICAgc3RyaW5nQm9keSA9IEpTT04uc3RyaW5naWZ5KGJvZHkpXG4gICAgICAgICAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLnVybEJhc2UgKyBwYXRoICsgJz8nICsgcGFyc2VkUXVlcnlQYXJhbWV0ZXJzLCB7XG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICAgIGJvZHk6IHN0cmluZ0JvZHksXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIC8vIFN1Y2Nlc3NcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsIGFzIFRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VCb2R5ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgICAgICAgICAgIGlmICghdmFsaWRhdG9yLnZhbGlkYXRlKHJlc3BvbnNlQm9keSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIHJlc3BvbnNlIGJvZHkgZm9ybWF0XCIpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZUJvZHlcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZUJvZHkgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgIGNvbnN0IGVycm9yQ29kZSA9IHJlc3BvbnNlQm9keVsnZXJyb3JDb2RlJ11cblxuICAgICAgICAgICAgaWYgKE9iamVjdC52YWx1ZXMoQVBJRXJyb3IpLmluY2x1ZGVzKGVycm9yQ29kZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgQVBJRXhjZXB0aW9uKHJlc3BvbnNlLnN0YXR1cywgZXJyb3JDb2RlIGFzIEFQSUVycm9yKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgQVBJRXhjZXB0aW9uKHJlc3BvbnNlLnN0YXR1cylcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBBUElFeGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBBUElFeGNlcHRpb24ocmVzcG9uc2Uuc3RhdHVzKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlcyBhIHN1YnNjcmlwdGlvbuKAmXMgcHJvZHVjdCBpZGVudGlmaWVyIHRvIGV4dGVuZCB0aGUgcmVuZXdhbCBkYXRlIGZvciBhbGwgb2YgaXRzIGVsaWdpYmxlIGFjdGl2ZSBzdWJzY3JpYmVycy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBtYXNzRXh0ZW5kUmVuZXdhbERhdGVSZXF1ZXN0IFRoZSByZXF1ZXN0IGJvZHkgZm9yIGV4dGVuZGluZyBhIHN1YnNjcmlwdGlvbiByZW5ld2FsIGRhdGUgZm9yIGFsbCBvZiBpdHMgYWN0aXZlIHN1YnNjcmliZXJzLlxuICAgICAqIEByZXR1cm4gQSByZXNwb25zZSB0aGF0IGluZGljYXRlcyB0aGUgc2VydmVyIHN1Y2Nlc3NmdWxseSByZWNlaXZlZCB0aGUgc3Vic2NyaXB0aW9uLXJlbmV3YWwtZGF0ZSBleHRlbnNpb24gcmVxdWVzdC5cbiAgICAgKiBAdGhyb3dzIEFQSUV4Y2VwdGlvbiBJZiBhIHJlc3BvbnNlIHdhcyByZXR1cm5lZCBpbmRpY2F0aW5nIHRoZSByZXF1ZXN0IGNvdWxkIG5vdCBiZSBwcm9jZXNzZWRcbiAgICAgKiB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2RvY3VtZW50YXRpb24vYXBwc3RvcmVzZXJ2ZXJhcGkvZXh0ZW5kX3N1YnNjcmlwdGlvbl9yZW5ld2FsX2RhdGVzX2Zvcl9hbGxfYWN0aXZlX3N1YnNjcmliZXJzIEV4dGVuZCBTdWJzY3JpcHRpb24gUmVuZXdhbCBEYXRlcyBmb3IgQWxsIEFjdGl2ZSBTdWJzY3JpYmVyc31cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgZXh0ZW5kUmVuZXdhbERhdGVGb3JBbGxBY3RpdmVTdWJzY3JpYmVycyhtYXNzRXh0ZW5kUmVuZXdhbERhdGVSZXF1ZXN0OiBNYXNzRXh0ZW5kUmVuZXdhbERhdGVSZXF1ZXN0KTogUHJvbWlzZTxNYXNzRXh0ZW5kUmVuZXdhbERhdGVSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5tYWtlUmVxdWVzdChcIi9pbkFwcHMvdjEvc3Vic2NyaXB0aW9ucy9leHRlbmQvbWFzcy9cIiwgXCJQT1NUXCIsIHt9LCBtYXNzRXh0ZW5kUmVuZXdhbERhdGVSZXF1ZXN0LCBuZXcgTWFzc0V4dGVuZFJlbmV3YWxEYXRlUmVzcG9uc2VWYWxpZGF0b3IoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0ZW5kcyB0aGUgcmVuZXdhbCBkYXRlIG9mIGEgY3VzdG9tZXLigJlzIGFjdGl2ZSBzdWJzY3JpcHRpb24gdXNpbmcgdGhlIG9yaWdpbmFsIHRyYW5zYWN0aW9uIGlkZW50aWZpZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3JpZ2luYWxUcmFuc2FjdGlvbklkICAgIFRoZSBvcmlnaW5hbCB0cmFuc2FjdGlvbiBpZGVudGlmaWVyIG9mIHRoZSBzdWJzY3JpcHRpb24gcmVjZWl2aW5nIGEgcmVuZXdhbCBkYXRlIGV4dGVuc2lvbi5cbiAgICAgKiBAcGFyYW0gZXh0ZW5kUmVuZXdhbERhdGVSZXF1ZXN0IFRoZSByZXF1ZXN0IGJvZHkgY29udGFpbmluZyBzdWJzY3JpcHRpb24tcmVuZXdhbC1leHRlbnNpb24gZGF0YS5cbiAgICAgKiBAcmV0dXJuIEEgcmVzcG9uc2UgdGhhdCBpbmRpY2F0ZXMgd2hldGhlciBhbiBpbmRpdmlkdWFsIHJlbmV3YWwtZGF0ZSBleHRlbnNpb24gc3VjY2VlZGVkLCBhbmQgcmVsYXRlZCBkZXRhaWxzLlxuICAgICAqIEB0aHJvd3MgQVBJRXhjZXB0aW9uIElmIGEgcmVzcG9uc2Ugd2FzIHJldHVybmVkIGluZGljYXRpbmcgdGhlIHJlcXVlc3QgY291bGQgbm90IGJlIHByb2Nlc3NlZFxuICAgICAqIHtAbGluayBodHRwczovL2RldmVsb3Blci5hcHBsZS5jb20vZG9jdW1lbnRhdGlvbi9hcHBzdG9yZXNlcnZlcmFwaS9leHRlbmRfYV9zdWJzY3JpcHRpb25fcmVuZXdhbF9kYXRlIEV4dGVuZCBhIFN1YnNjcmlwdGlvbiBSZW5ld2FsIERhdGV9XG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGV4dGVuZFN1YnNjcmlwdGlvblJlbmV3YWxEYXRlKG9yaWdpbmFsVHJhbnNhY3Rpb25JZDogc3RyaW5nLCBleHRlbmRSZW5ld2FsRGF0ZVJlcXVlc3Q6IEV4dGVuZFJlbmV3YWxEYXRlUmVxdWVzdCk6IFByb21pc2U8RXh0ZW5kUmVuZXdhbERhdGVSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5tYWtlUmVxdWVzdDxFeHRlbmRSZW5ld2FsRGF0ZVJlc3BvbnNlPihcIi9pbkFwcHMvdjEvc3Vic2NyaXB0aW9ucy9leHRlbmQvXCIgKyBvcmlnaW5hbFRyYW5zYWN0aW9uSWQsIFwiUFVUXCIsIHt9LCBleHRlbmRSZW5ld2FsRGF0ZVJlcXVlc3QsIG5ldyBFeHRlbmRSZW5ld2FsRGF0ZVJlc3BvbnNlVmFsaWRhdG9yKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgc3RhdHVzZXMgZm9yIGFsbCBvZiBhIGN1c3RvbWVy4oCZcyBhdXRvLXJlbmV3YWJsZSBzdWJzY3JpcHRpb25zIGluIHlvdXIgYXBwLlxuICAgICAqXG4gICAgICogQHBhcmFtIHRyYW5zYWN0aW9uSWQgVGhlIGlkZW50aWZpZXIgb2YgYSB0cmFuc2FjdGlvbiB0aGF0IGJlbG9uZ3MgdG8gdGhlIGN1c3RvbWVyLCBhbmQgd2hpY2ggbWF5IGJlIGFuIG9yaWdpbmFsIHRyYW5zYWN0aW9uIGlkZW50aWZpZXIuXG4gICAgICogQHBhcmFtIHN0YXR1cyBBbiBvcHRpb25hbCBmaWx0ZXIgdGhhdCBpbmRpY2F0ZXMgdGhlIHN0YXR1cyBvZiBzdWJzY3JpcHRpb25zIHRvIGluY2x1ZGUgaW4gdGhlIHJlc3BvbnNlLiBZb3VyIHF1ZXJ5IG1heSBzcGVjaWZ5IG1vcmUgdGhhbiBvbmUgc3RhdHVzIHF1ZXJ5IHBhcmFtZXRlci5cbiAgICAgKiBAcmV0dXJuIEEgcmVzcG9uc2UgdGhhdCBjb250YWlucyBzdGF0dXMgaW5mb3JtYXRpb24gZm9yIGFsbCBvZiBhIGN1c3RvbWVy4oCZcyBhdXRvLXJlbmV3YWJsZSBzdWJzY3JpcHRpb25zIGluIHlvdXIgYXBwLlxuICAgICAqIEB0aHJvd3MgQVBJRXhjZXB0aW9uIElmIGEgcmVzcG9uc2Ugd2FzIHJldHVybmVkIGluZGljYXRpbmcgdGhlIHJlcXVlc3QgY291bGQgbm90IGJlIHByb2Nlc3NlZFxuICAgICAqIHtAbGluayBodHRwczovL2RldmVsb3Blci5hcHBsZS5jb20vZG9jdW1lbnRhdGlvbi9hcHBzdG9yZXNlcnZlcmFwaS9nZXRfYWxsX3N1YnNjcmlwdGlvbl9zdGF0dXNlcyBHZXQgQWxsIFN1YnNjcmlwdGlvbiBTdGF0dXNlc31cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgZ2V0QWxsU3Vic2NyaXB0aW9uU3RhdHVzZXModHJhbnNhY3Rpb25JZDogc3RyaW5nLCBzdGF0dXM6IFtTdGF0dXNdIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkKTogUHJvbWlzZTxTdGF0dXNSZXNwb25zZT4ge1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtZXRlcnM6IHsgW2tleTogc3RyaW5nXTogW3N0cmluZ119ID0ge31cbiAgICAgICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbXCJzdGF0dXNcIl0gPSBzdGF0dXMubWFwKHMgPT4gcy50b1N0cmluZygpKSBhcyBbc3RyaW5nXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLm1ha2VSZXF1ZXN0KFwiL2luQXBwcy92MS9zdWJzY3JpcHRpb25zL1wiICsgdHJhbnNhY3Rpb25JZCwgXCJHRVRcIiwgcXVlcnlQYXJhbWV0ZXJzLCBudWxsLCBuZXcgU3RhdHVzUmVzcG9uc2VWYWxpZGF0b3IoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGEgcGFnaW5hdGVkIGxpc3Qgb2YgYWxsIG9mIGEgY3VzdG9tZXLigJlzIHJlZnVuZGVkIGluLWFwcCBwdXJjaGFzZXMgZm9yIHlvdXIgYXBwLlxuICAgICAqXG4gICAgICogQHBhcmFtIHRyYW5zYWN0aW9uSWQgVGhlIGlkZW50aWZpZXIgb2YgYSB0cmFuc2FjdGlvbiB0aGF0IGJlbG9uZ3MgdG8gdGhlIGN1c3RvbWVyLCBhbmQgd2hpY2ggbWF5IGJlIGFuIG9yaWdpbmFsIHRyYW5zYWN0aW9uIGlkZW50aWZpZXIuXG4gICAgICogQHBhcmFtIHJldmlzaW9uICAgICAgICAgICAgICBBIHRva2VuIHlvdSBwcm92aWRlIHRvIGdldCB0aGUgbmV4dCBzZXQgb2YgdXAgdG8gMjAgdHJhbnNhY3Rpb25zLiBBbGwgcmVzcG9uc2VzIGluY2x1ZGUgYSByZXZpc2lvbiB0b2tlbi4gVXNlIHRoZSByZXZpc2lvbiB0b2tlbiBmcm9tIHRoZSBwcmV2aW91cyBSZWZ1bmRIaXN0b3J5UmVzcG9uc2UuXG4gICAgICogQHJldHVybiBBIHJlc3BvbnNlIHRoYXQgY29udGFpbnMgc3RhdHVzIGluZm9ybWF0aW9uIGZvciBhbGwgb2YgYSBjdXN0b21lcuKAmXMgYXV0by1yZW5ld2FibGUgc3Vic2NyaXB0aW9ucyBpbiB5b3VyIGFwcC5cbiAgICAgKiBAdGhyb3dzIEFQSUV4Y2VwdGlvbiBJZiBhIHJlc3BvbnNlIHdhcyByZXR1cm5lZCBpbmRpY2F0aW5nIHRoZSByZXF1ZXN0IGNvdWxkIG5vdCBiZSBwcm9jZXNzZWRcbiAgICAgKiB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2RvY3VtZW50YXRpb24vYXBwc3RvcmVzZXJ2ZXJhcGkvZ2V0X3JlZnVuZF9oaXN0b3J5IEdldCBSZWZ1bmQgSGlzdG9yeX1cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgZ2V0UmVmdW5kSGlzdG9yeSh0cmFuc2FjdGlvbklkOiBzdHJpbmcsIHJldmlzaW9uOiBzdHJpbmcgfCBudWxsKTogUHJvbWlzZTxSZWZ1bmRIaXN0b3J5UmVzcG9uc2U+IHtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbWV0ZXJzOiB7IFtrZXk6IHN0cmluZ106IFtzdHJpbmddfSA9IHt9XG4gICAgICAgIGlmIChyZXZpc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzW1wicmV2aXNpb25cIl0gPSBbcmV2aXNpb25dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMubWFrZVJlcXVlc3QoXCIvaW5BcHBzL3YyL3JlZnVuZC9sb29rdXAvXCIgKyB0cmFuc2FjdGlvbklkLCBcIkdFVFwiLCBxdWVyeVBhcmFtZXRlcnMsIG51bGwsIG5ldyBSZWZ1bmRIaXN0b3J5UmVzcG9uc2VWYWxpZGF0b3IoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgYSByZW5ld2FsIGRhdGUgZXh0ZW5zaW9uIHJlcXVlc3QgY29tcGxldGVkLCBhbmQgcHJvdmlkZXMgdGhlIGZpbmFsIGNvdW50IG9mIHN1Y2Nlc3NmdWwgb3IgZmFpbGVkIGV4dGVuc2lvbnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdElkZW50aWZpZXIgVGhlIFVVSUQgdGhhdCByZXByZXNlbnRzIHlvdXIgcmVxdWVzdCB0byB0aGUgRXh0ZW5kIFN1YnNjcmlwdGlvbiBSZW5ld2FsIERhdGVzIGZvciBBbGwgQWN0aXZlIFN1YnNjcmliZXJzIGVuZHBvaW50LlxuICAgICAqIEBwYXJhbSBwcm9kdWN0SWQgICAgICAgICBUaGUgcHJvZHVjdCBpZGVudGlmaWVyIG9mIHRoZSBhdXRvLXJlbmV3YWJsZSBzdWJzY3JpcHRpb24gdGhhdCB5b3UgcmVxdWVzdCBhIHJlbmV3YWwtZGF0ZSBleHRlbnNpb24gZm9yLlxuICAgICAqIEByZXR1cm4gQSByZXNwb25zZSB0aGF0IGluZGljYXRlcyB0aGUgY3VycmVudCBzdGF0dXMgb2YgYSByZXF1ZXN0IHRvIGV4dGVuZCB0aGUgc3Vic2NyaXB0aW9uIHJlbmV3YWwgZGF0ZSB0byBhbGwgZWxpZ2libGUgc3Vic2NyaWJlcnMuXG4gICAgICogQHRocm93cyBBUElFeGNlcHRpb24gSWYgYSByZXNwb25zZSB3YXMgcmV0dXJuZWQgaW5kaWNhdGluZyB0aGUgcmVxdWVzdCBjb3VsZCBub3QgYmUgcHJvY2Vzc2VkXG4gICAgICoge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLmFwcGxlLmNvbS9kb2N1bWVudGF0aW9uL2FwcHN0b3Jlc2VydmVyYXBpL2dldF9zdGF0dXNfb2Zfc3Vic2NyaXB0aW9uX3JlbmV3YWxfZGF0ZV9leHRlbnNpb25zIEdldCBTdGF0dXMgb2YgU3Vic2NyaXB0aW9uIFJlbmV3YWwgRGF0ZSBFeHRlbnNpb25zfVxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBnZXRTdGF0dXNPZlN1YnNjcmlwdGlvblJlbmV3YWxEYXRlRXh0ZW5zaW9ucyhyZXF1ZXN0SWRlbnRpZmllcjogc3RyaW5nLCBwcm9kdWN0SWQ6IHN0cmluZyk6IFByb21pc2U8TWFzc0V4dGVuZFJlbmV3YWxEYXRlU3RhdHVzUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMubWFrZVJlcXVlc3QoXCIvaW5BcHBzL3YxL3N1YnNjcmlwdGlvbnMvZXh0ZW5kL21hc3MvXCIgKyBwcm9kdWN0SWQgKyBcIi9cIiArIHJlcXVlc3RJZGVudGlmaWVyLCBcIkdFVFwiLCB7fSwgbnVsbCwgbmV3IE1hc3NFeHRlbmRSZW5ld2FsRGF0ZVN0YXR1c1Jlc3BvbnNlVmFsaWRhdG9yKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIHRoZSBzdGF0dXMgb2YgdGhlIHRlc3QgQXBwIFN0b3JlIHNlcnZlciBub3RpZmljYXRpb24gc2VudCB0byB5b3VyIHNlcnZlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0ZXN0Tm90aWZpY2F0aW9uVG9rZW4gVGhlIHRlc3Qgbm90aWZpY2F0aW9uIHRva2VuIHJlY2VpdmVkIGZyb20gdGhlIFJlcXVlc3QgYSBUZXN0IE5vdGlmaWNhdGlvbiBlbmRwb2ludFxuICAgICAqIEByZXR1cm4gQSByZXNwb25zZSB0aGF0IGNvbnRhaW5zIHRoZSBjb250ZW50cyBvZiB0aGUgdGVzdCBub3RpZmljYXRpb24gc2VudCBieSB0aGUgQXBwIFN0b3JlIHNlcnZlciBhbmQgdGhlIHJlc3VsdCBmcm9tIHlvdXIgc2VydmVyLlxuICAgICAqIEB0aHJvd3MgQVBJRXhjZXB0aW9uIElmIGEgcmVzcG9uc2Ugd2FzIHJldHVybmVkIGluZGljYXRpbmcgdGhlIHJlcXVlc3QgY291bGQgbm90IGJlIHByb2Nlc3NlZFxuICAgICAqIHtAbGluayBodHRwczovL2RldmVsb3Blci5hcHBsZS5jb20vZG9jdW1lbnRhdGlvbi9hcHBzdG9yZXNlcnZlcmFwaS9nZXRfdGVzdF9ub3RpZmljYXRpb25fc3RhdHVzIEdldCBUZXN0IE5vdGlmaWNhdGlvbiBTdGF0dXN9XG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGdldFRlc3ROb3RpZmljYXRpb25TdGF0dXModGVzdE5vdGlmaWNhdGlvblRva2VuOiBzdHJpbmcpOiBQcm9taXNlPENoZWNrVGVzdE5vdGlmaWNhdGlvblJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLm1ha2VSZXF1ZXN0KFwiL2luQXBwcy92MS9ub3RpZmljYXRpb25zL3Rlc3QvXCIgKyB0ZXN0Tm90aWZpY2F0aW9uVG9rZW4sIFwiR0VUXCIsIHt9LCBudWxsLCBuZXcgQ2hlY2tUZXN0Tm90aWZpY2F0aW9uUmVzcG9uc2VWYWxpZGF0b3IoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGEgbGlzdCBvZiBub3RpZmljYXRpb25zIHRoYXQgdGhlIEFwcCBTdG9yZSBzZXJ2ZXIgYXR0ZW1wdGVkIHRvIHNlbmQgdG8geW91ciBzZXJ2ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFnaW5hdGlvblRva2VuIEFuIG9wdGlvbmFsIHRva2VuIHlvdSB1c2UgdG8gZ2V0IHRoZSBuZXh0IHNldCBvZiB1cCB0byAyMCBub3RpZmljYXRpb24gaGlzdG9yeSByZWNvcmRzLiBBbGwgcmVzcG9uc2VzIHRoYXQgaGF2ZSBtb3JlIHJlY29yZHMgYXZhaWxhYmxlIGluY2x1ZGUgYSBwYWdpbmF0aW9uVG9rZW4uIE9taXQgdGhpcyBwYXJhbWV0ZXIgdGhlIGZpcnN0IHRpbWUgeW91IGNhbGwgdGhpcyBlbmRwb2ludC5cbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uSGlzdG9yeVJlcXVlc3QgVGhlIHJlcXVlc3QgYm9keSB0aGF0IGluY2x1ZGVzIHRoZSBzdGFydCBhbmQgZW5kIGRhdGVzLCBhbmQgb3B0aW9uYWwgcXVlcnkgY29uc3RyYWludHMuXG4gICAgICogQHJldHVybiBBIHJlc3BvbnNlIHRoYXQgY29udGFpbnMgdGhlIEFwcCBTdG9yZSBTZXJ2ZXIgTm90aWZpY2F0aW9ucyBoaXN0b3J5IGZvciB5b3VyIGFwcC5cbiAgICAgKiBAdGhyb3dzIEFQSUV4Y2VwdGlvbiBJZiBhIHJlc3BvbnNlIHdhcyByZXR1cm5lZCBpbmRpY2F0aW5nIHRoZSByZXF1ZXN0IGNvdWxkIG5vdCBiZSBwcm9jZXNzZWRcbiAgICAgKiB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2RvY3VtZW50YXRpb24vYXBwc3RvcmVzZXJ2ZXJhcGkvZ2V0X25vdGlmaWNhdGlvbl9oaXN0b3IgR2V0IE5vdGlmaWNhdGlvbiBIaXN0b3J5fVxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBnZXROb3RpZmljYXRpb25IaXN0b3J5KHBhZ2luYXRpb25Ub2tlbjogc3RyaW5nIHwgbnVsbCwgbm90aWZpY2F0aW9uSGlzdG9yeVJlcXVlc3Q6IE5vdGlmaWNhdGlvbkhpc3RvcnlSZXF1ZXN0KTogUHJvbWlzZTxOb3RpZmljYXRpb25IaXN0b3J5UmVzcG9uc2U+IHtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbWV0ZXJzOiB7IFtrZXk6IHN0cmluZ106IFtzdHJpbmddfSA9IHt9XG4gICAgICAgIGlmIChwYWdpbmF0aW9uVG9rZW4gIT0gbnVsbCkge1xuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzW1wicGFnaW5hdGlvblRva2VuXCJdID0gW3BhZ2luYXRpb25Ub2tlbl07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMubWFrZVJlcXVlc3QoXCIvaW5BcHBzL3YxL25vdGlmaWNhdGlvbnMvaGlzdG9yeVwiLCBcIlBPU1RcIiwgcXVlcnlQYXJhbWV0ZXJzLCBub3RpZmljYXRpb25IaXN0b3J5UmVxdWVzdCwgbmV3IE5vdGlmaWNhdGlvbkhpc3RvcnlSZXNwb25zZVZhbGlkYXRvcigpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYSBjdXN0b21lcuKAmXMgaW4tYXBwIHB1cmNoYXNlIHRyYW5zYWN0aW9uIGhpc3RvcnkgZm9yIHlvdXIgYXBwLlxuICAgICAqXG4gICAgICogQHBhcmFtIHRyYW5zYWN0aW9uSWQgVGhlIGlkZW50aWZpZXIgb2YgYSB0cmFuc2FjdGlvbiB0aGF0IGJlbG9uZ3MgdG8gdGhlIGN1c3RvbWVyLCBhbmQgd2hpY2ggbWF5IGJlIGFuIG9yaWdpbmFsIHRyYW5zYWN0aW9uIGlkZW50aWZpZXIuXG4gICAgICogQHBhcmFtIHJldmlzaW9uICAgICAgICAgICAgICBBIHRva2VuIHlvdSBwcm92aWRlIHRvIGdldCB0aGUgbmV4dCBzZXQgb2YgdXAgdG8gMjAgdHJhbnNhY3Rpb25zLiBBbGwgcmVzcG9uc2VzIGluY2x1ZGUgYSByZXZpc2lvbiB0b2tlbi4gTm90ZTogRm9yIHJlcXVlc3RzIHRoYXQgdXNlIHRoZSByZXZpc2lvbiB0b2tlbiwgaW5jbHVkZSB0aGUgc2FtZSBxdWVyeSBwYXJhbWV0ZXJzIGZyb20gdGhlIGluaXRpYWwgcmVxdWVzdC4gVXNlIHRoZSByZXZpc2lvbiB0b2tlbiBmcm9tIHRoZSBwcmV2aW91cyBIaXN0b3J5UmVzcG9uc2UuXG4gICAgICogQHJldHVybiBBIHJlc3BvbnNlIHRoYXQgY29udGFpbnMgdGhlIGN1c3RvbWVy4oCZcyB0cmFuc2FjdGlvbiBoaXN0b3J5IGZvciBhbiBhcHAuXG4gICAgICogQHRocm93cyBBUElFeGNlcHRpb24gSWYgYSByZXNwb25zZSB3YXMgcmV0dXJuZWQgaW5kaWNhdGluZyB0aGUgcmVxdWVzdCBjb3VsZCBub3QgYmUgcHJvY2Vzc2VkXG4gICAgICoge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLmFwcGxlLmNvbS9kb2N1bWVudGF0aW9uL2FwcHN0b3Jlc2VydmVyYXBpL2dldF90cmFuc2FjdGlvbl9oaXN0b3J5IEdldCBUcmFuc2FjdGlvbiBIaXN0b3J5fVxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBnZXRUcmFuc2FjdGlvbkhpc3RvcnkodHJhbnNhY3Rpb25JZDogc3RyaW5nLCByZXZpc2lvbjogc3RyaW5nIHwgbnVsbCwgdHJhbnNhY3Rpb25IaXN0b3J5UmVxdWVzdDogVHJhbnNhY3Rpb25IaXN0b3J5UmVxdWVzdCk6IFByb21pc2U8SGlzdG9yeVJlc3BvbnNlPiB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1ldGVyczogeyBba2V5OiBzdHJpbmddOiBbc3RyaW5nXX0gPSB7fVxuICAgICAgICBpZiAocmV2aXNpb24gIT0gbnVsbCkge1xuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzW1wicmV2aXNpb25cIl0gPSBbcmV2aXNpb25dO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0cmFuc2FjdGlvbkhpc3RvcnlSZXF1ZXN0LnN0YXJ0RGF0ZSkge1xuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzW1wic3RhcnREYXRlXCJdID0gW3RyYW5zYWN0aW9uSGlzdG9yeVJlcXVlc3Quc3RhcnREYXRlLnRvU3RyaW5nKCldO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0cmFuc2FjdGlvbkhpc3RvcnlSZXF1ZXN0LmVuZERhdGUpIHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1tcImVuZERhdGVcIl0gPSBbdHJhbnNhY3Rpb25IaXN0b3J5UmVxdWVzdC5lbmREYXRlLnRvU3RyaW5nKCldO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0cmFuc2FjdGlvbkhpc3RvcnlSZXF1ZXN0LnByb2R1Y3RJZHMpIHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1tcInByb2R1Y3RJZFwiXSA9IHRyYW5zYWN0aW9uSGlzdG9yeVJlcXVlc3QucHJvZHVjdElkcztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHJhbnNhY3Rpb25IaXN0b3J5UmVxdWVzdC5wcm9kdWN0VHlwZXMpIHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1tcInByb2R1Y3RUeXBlXCJdID0gdHJhbnNhY3Rpb25IaXN0b3J5UmVxdWVzdC5wcm9kdWN0VHlwZXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRyYW5zYWN0aW9uSGlzdG9yeVJlcXVlc3Quc29ydCkge1xuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzW1wic29ydFwiXSA9IFt0cmFuc2FjdGlvbkhpc3RvcnlSZXF1ZXN0LnNvcnRdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0cmFuc2FjdGlvbkhpc3RvcnlSZXF1ZXN0LnN1YnNjcmlwdGlvbkdyb3VwSWRlbnRpZmllcnMpIHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1tcInN1YnNjcmlwdGlvbkdyb3VwSWRlbnRpZmllclwiXSA9IHRyYW5zYWN0aW9uSGlzdG9yeVJlcXVlc3Quc3Vic2NyaXB0aW9uR3JvdXBJZGVudGlmaWVycztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHJhbnNhY3Rpb25IaXN0b3J5UmVxdWVzdC5pbkFwcE93bmVyc2hpcFR5cGUpIHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1tcImluQXBwT3duZXJzaGlwVHlwZVwiXSA9IFt0cmFuc2FjdGlvbkhpc3RvcnlSZXF1ZXN0LmluQXBwT3duZXJzaGlwVHlwZV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRyYW5zYWN0aW9uSGlzdG9yeVJlcXVlc3QucmV2b2tlZCkge1xuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzW1wicmV2b2tlZFwiXSA9IFt0cmFuc2FjdGlvbkhpc3RvcnlSZXF1ZXN0LnJldm9rZWQudG9TdHJpbmcoKV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMubWFrZVJlcXVlc3QoXCIvaW5BcHBzL3YxL2hpc3RvcnkvXCIgKyB0cmFuc2FjdGlvbklkLCBcIkdFVFwiLCBxdWVyeVBhcmFtZXRlcnMsIG51bGwsIG5ldyBIaXN0b3J5UmVzcG9uc2VWYWxpZGF0b3IoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGluZm9ybWF0aW9uIGFib3V0IGEgc2luZ2xlIHRyYW5zYWN0aW9uIGZvciB5b3VyIGFwcC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0cmFuc2FjdGlvbklkIFRoZSBpZGVudGlmaWVyIG9mIGEgdHJhbnNhY3Rpb24gdGhhdCBiZWxvbmdzIHRvIHRoZSBjdXN0b21lciwgYW5kIHdoaWNoIG1heSBiZSBhbiBvcmlnaW5hbCB0cmFuc2FjdGlvbiBpZGVudGlmaWVyLlxuICAgICAqIEByZXR1cm4gQSByZXNwb25zZSB0aGF0IGNvbnRhaW5zIHNpZ25lZCB0cmFuc2FjdGlvbiBpbmZvcm1hdGlvbiBmb3IgYSBzaW5nbGUgdHJhbnNhY3Rpb24uXG4gICAgICogQHRocm93cyBBUElFeGNlcHRpb24gSWYgYSByZXNwb25zZSB3YXMgcmV0dXJuZWQgaW5kaWNhdGluZyB0aGUgcmVxdWVzdCBjb3VsZCBub3QgYmUgcHJvY2Vzc2VkXG4gICAgICoge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLmFwcGxlLmNvbS9kb2N1bWVudGF0aW9uL2FwcHN0b3Jlc2VydmVyYXBpL2dldF90cmFuc2FjdGlvbl9pbmZvIEdldCBUcmFuc2FjdGlvbiBJbmZvfVxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBnZXRUcmFuc2FjdGlvbkluZm8odHJhbnNhY3Rpb25JZDogc3RyaW5nKTogUHJvbWlzZTxUcmFuc2FjdGlvbkluZm9SZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5tYWtlUmVxdWVzdChcIi9pbkFwcHMvdjEvdHJhbnNhY3Rpb25zL1wiICsgdHJhbnNhY3Rpb25JZCwgXCJHRVRcIiwge30sIG51bGwsIG5ldyBUcmFuc2FjdGlvbkluZm9SZXNwb25zZVZhbGlkYXRvcigpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYSBjdXN0b21lcuKAmXMgaW4tYXBwIHB1cmNoYXNlcyBmcm9tIGEgcmVjZWlwdCB1c2luZyB0aGUgb3JkZXIgSUQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3JkZXJJZCBUaGUgb3JkZXIgSUQgZm9yIGluLWFwcCBwdXJjaGFzZXMgdGhhdCBiZWxvbmcgdG8gdGhlIGN1c3RvbWVyLlxuICAgICAqIEByZXR1cm4gQSByZXNwb25zZSB0aGF0IGluY2x1ZGVzIHRoZSBvcmRlciBsb29rdXAgc3RhdHVzIGFuZCBhbiBhcnJheSBvZiBzaWduZWQgdHJhbnNhY3Rpb25zIGZvciB0aGUgaW4tYXBwIHB1cmNoYXNlcyBpbiB0aGUgb3JkZXIuXG4gICAgICogQHRocm93cyBBUElFeGNlcHRpb24gSWYgYSByZXNwb25zZSB3YXMgcmV0dXJuZWQgaW5kaWNhdGluZyB0aGUgcmVxdWVzdCBjb3VsZCBub3QgYmUgcHJvY2Vzc2VkXG4gICAgICoge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLmFwcGxlLmNvbS9kb2N1bWVudGF0aW9uL2FwcHN0b3Jlc2VydmVyYXBpL2xvb2tfdXBfb3JkZXJfaWQgTG9vayBVcCBPcmRlciBJRH1cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgbG9va1VwT3JkZXJJZChvcmRlcklkOiBzdHJpbmcpOiBQcm9taXNlPE9yZGVyTG9va3VwUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMubWFrZVJlcXVlc3QoXCIvaW5BcHBzL3YxL2xvb2t1cC9cIiArIG9yZGVySWQsIFwiR0VUXCIsIHt9LCBudWxsLCBuZXcgT3JkZXJMb29rdXBSZXNwb25zZVZhbGlkYXRvcigpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBc2sgQXBwIFN0b3JlIFNlcnZlciBOb3RpZmljYXRpb25zIHRvIHNlbmQgYSB0ZXN0IG5vdGlmaWNhdGlvbiB0byB5b3VyIHNlcnZlci5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gQSByZXNwb25zZSB0aGF0IGNvbnRhaW5zIHRoZSB0ZXN0IG5vdGlmaWNhdGlvbiB0b2tlbi5cbiAgICAgKiBAdGhyb3dzIEFQSUV4Y2VwdGlvbiBJZiBhIHJlc3BvbnNlIHdhcyByZXR1cm5lZCBpbmRpY2F0aW5nIHRoZSByZXF1ZXN0IGNvdWxkIG5vdCBiZSBwcm9jZXNzZWRcbiAgICAgKiB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2RvY3VtZW50YXRpb24vYXBwc3RvcmVzZXJ2ZXJhcGkvcmVxdWVzdF9hX3Rlc3Rfbm90aWZpY2F0aW9uIFJlcXVlc3QgYSBUZXN0IE5vdGlmaWNhdGlvbn1cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgcmVxdWVzdFRlc3ROb3RpZmljYXRpb24oKTogUHJvbWlzZTxTZW5kVGVzdE5vdGlmaWNhdGlvblJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLm1ha2VSZXF1ZXN0KFwiL2luQXBwcy92MS9ub3RpZmljYXRpb25zL3Rlc3RcIiwgXCJQT1NUXCIsIHt9LCBudWxsLCBuZXcgU2VuZFRlc3ROb3RpZmljYXRpb25SZXNwb25zZVZhbGlkYXRvcigpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kIGNvbnN1bXB0aW9uIGluZm9ybWF0aW9uIGFib3V0IGEgY29uc3VtYWJsZSBpbi1hcHAgcHVyY2hhc2UgdG8gdGhlIEFwcCBTdG9yZSBhZnRlciB5b3VyIHNlcnZlciByZWNlaXZlcyBhIGNvbnN1bXB0aW9uIHJlcXVlc3Qgbm90aWZpY2F0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHRyYW5zYWN0aW9uSWQgVGhlIHRyYW5zYWN0aW9uIGlkZW50aWZpZXIgZm9yIHdoaWNoIHlvdeKAmXJlIHByb3ZpZGluZyBjb25zdW1wdGlvbiBpbmZvcm1hdGlvbi4gWW91IHJlY2VpdmUgdGhpcyBpZGVudGlmaWVyIGluIHRoZSBDT05TVU1QVElPTl9SRVFVRVNUIG5vdGlmaWNhdGlvbiB0aGUgQXBwIFN0b3JlIHNlbmRzIHRvIHlvdXIgc2VydmVyLlxuICAgICAqIEBwYXJhbSBjb25zdW1wdGlvblJlcXVlc3QgICAgVGhlIHJlcXVlc3QgYm9keSBjb250YWluaW5nIGNvbnN1bXB0aW9uIGluZm9ybWF0aW9uLlxuICAgICAqIEB0aHJvd3MgQVBJRXhjZXB0aW9uIElmIGEgcmVzcG9uc2Ugd2FzIHJldHVybmVkIGluZGljYXRpbmcgdGhlIHJlcXVlc3QgY291bGQgbm90IGJlIHByb2Nlc3NlZFxuICAgICAqIHtAbGluayBodHRwczovL2RldmVsb3Blci5hcHBsZS5jb20vZG9jdW1lbnRhdGlvbi9hcHBzdG9yZXNlcnZlcmFwaS9zZW5kX2NvbnN1bXB0aW9uX2luZm9ybWF0aW9uIFNlbmQgQ29uc3VtcHRpb24gSW5mb3JtYXRpb259XG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIHNlbmRDb25zdW1wdGlvbkRhdGEodHJhbnNhY3Rpb25JZDogc3RyaW5nLCBjb25zdW1wdGlvblJlcXVlc3Q6IENvbnN1bXB0aW9uUmVxdWVzdCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCB0aGlzLm1ha2VSZXF1ZXN0KFwiL2luQXBwcy92MS90cmFuc2FjdGlvbnMvY29uc3VtcHRpb24vXCIgKyB0cmFuc2FjdGlvbklkLCBcIlBVVFwiLCB7fSwgY29uc3VtcHRpb25SZXF1ZXN0LCBudWxsKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUJlYXJlclRva2VuKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICAgICAgICBiaWQ6IHRoaXMuYnVuZGxlSWRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ganNvbndlYnRva2VuLnNpZ24ocGF5bG9hZCwgdGhpcy5zaWduaW5nS2V5LCB7IGFsZ29yaXRobTogJ0VTMjU2Jywga2V5aWQ6IHRoaXMua2V5SWQsIGlzc3VlcjogdGhpcy5pc3N1ZUlkLCBhdWRpZW5jZTogJ2FwcHN0b3JlY29ubmVjdC12MScsIGV4cGlyZXNJbjogJzVtJ30pO1xuICAgIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgQVBJRXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Ige1xuICAgIHB1YmxpYyBodHRwU3RhdHVzQ29kZTogbnVtYmVyXG4gICAgcHVibGljIGFwaUVycm9yOiBBUElFcnJvciB8IG51bGxcblxuICAgIGNvbnN0cnVjdG9yKGh0dHBTdGF0dXNDb2RlOiBudW1iZXIsIGFwaUVycm9yOiBBUElFcnJvciB8IG51bGwgPSBudWxsKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5odHRwU3RhdHVzQ29kZSA9IGh0dHBTdGF0dXNDb2RlXG4gICAgICAgIHRoaXMuYXBpRXJyb3IgPSBhcGlFcnJvclxuICAgIH1cbn1cblxuZXhwb3J0IGVudW0gQVBJRXJyb3Ige1xuICAgIEdFTkVSQUxfQkFEX1JFUVVFU1QgPSA0MDAwMDAwLFxuICAgIElOVkFMSURfQVBQX0lERU5USUZJRVIgPSA0MDAwMDAyLFxuICAgIElOVkFMSURfUkVRVUVTVF9SRVZJU0lPTiA9IDQwMDAwMDUsXG4gICAgSU5WQUxJRF9UUkFOU0FDVElPTl9JRCA9IDQwMDAwMDYsXG4gICAgSU5WQUxJRF9PUklHSU5BTF9UUkFOU0FDVElPTl9JRCA9IDQwMDAwMDgsXG4gICAgSU5WQUxJRF9FWFRFTkRfQllfREFZUyA9IDQwMDAwMDksXG4gICAgSU5WQUxJRF9FWFRFTkRfUkVBU09OX0NPREUgPSA0MDAwMDEwLFxuICAgIElOVkFMSURfSURFTlRJRklFUiA9IDQwMDAwMTEsXG4gICAgU1RBUlRfREFURV9UT09fRkFSX0lOX1BBU1QgPSA0MDAwMDEyLFxuICAgIFNUQVJUX0RBVEVfQUZURVJfRU5EX0RBVEUgPSA0MDAwMDEzLFxuICAgIElOVkFMSURfUEFHSU5BVElPTl9UT0tFTiA9IDQwMDAwMTQsXG4gICAgSU5WQUxJRF9TVEFSVF9EQVRFID0gNDAwMDAxNSxcbiAgICBJTlZBTElEX0VORF9EQVRFID0gNDAwMDAxNixcbiAgICBQQUdJTkFUSU9OX1RPS0VOX0VYUElSRUQgPSA0MDAwMDE3LFxuICAgIElOVkFMSURfTk9USUZJQ0FUSU9OX1RZUEUgPSA0MDAwMDE4LFxuICAgIE1VTFRJUExFX0ZJTFRFUlNfU1VQUExJRUQgPSA0MDAwMDE5LFxuICAgIElOVkFMSURfVEVTVF9OT1RJRklDQVRJT05fVE9LRU4gPSA0MDAwMDIwLFxuICAgIElOVkFMSURfU09SVCA9IDQwMDAwMjEsXG4gICAgSU5WQUxJRF9QUk9EVUNUX1RZUEUgPSA0MDAwMDIyLFxuICAgIElOVkFMSURfUFJPRFVDVF9JRCA9IDQwMDAwMjMsXG4gICAgSU5WQUxJRF9TVUJTQ1JJUFRJT05fR1JPVVBfSURFTlRJRklFUiA9IDQwMDAwMjQsXG4gICAgSU5WQUxJRF9FWENMVURFX1JFVk9LRUQgPSA0MDAwMDI1LFxuICAgIElOVkFMSURfSU5fQVBQX09XTkVSU0hJUF9UWVBFID0gNDAwMDAyNixcbiAgICBJTlZBTElEX0VNUFRZX1NUT1JFRlJPTlRfQ09VTlRSWV9DT0RFX0xJU1QgPSA0MDAwMDI3LFxuICAgIElOVkFMSURfU1RPUkVGUk9OVF9DT1VOVFJZX0NPREUgPSA0MDAwMDI4LFxuICAgIElOVkFMSURfUkVWT0tFRCA9IDQwMDAwMzAsXG4gICAgSU5WQUxJRF9TVEFUVVMgPSA0MDAwMDMxLFxuICAgIElOVkFMSURfQUNDT1VOVF9URU5VUkUgPSA0MDAwMDMyLFxuICAgIElOVkFMSURfQVBQX0FDQ09VTlRfVE9LRU4gPSA0MDAwMDMzLFxuICAgIElOVkFMSURfQ09OU1VNUFRJT05fU1RBVFVTID0gNDAwMDAzNCxcbiAgICBJTlZBTElEX0NVU1RPTUVSX0NPTlNFTlRFRCA9IDQwMDAwMzUsXG4gICAgSU5WQUxJRF9ERUxJVkVSWV9TVEFUVVMgPSA0MDAwMDM2LFxuICAgIElOVkFMSURfTElGRVRJTUVfRE9MTEFSU19QVVJDSEFTRUQgPSA0MDAwMDM3LFxuICAgIElOVkFMSURfTElGRVRJTUVfRE9MTEFSU19SRUZVTkRFRCA9IDQwMDAwMzgsXG4gICAgSU5WQUxJRF9QTEFURk9STSA9IDQwMDAwMzksXG4gICAgSU5WQUxJRF9QTEFZX1RJTUUgPSA0MDAwMDQwLFxuICAgIElOVkFMSURfU0FNUExFX0NPTlRFTlRfUFJPVklERUQgPSA0MDAwMDQxLFxuICAgIElOVkFMSURfVVNFUl9TVEFUVVMgPSA0MDAwMDQyLFxuICAgIElOVkFMSURfVFJBTlNBQ1RJT05fTk9UX0NPTlNVTUFCTEUgPSA0MDAwMDQzLFxuICAgIFNVQlNDUklQVElPTl9FWFRFTlNJT05fSU5FTElHSUJMRSA9IDQwMzAwMDQsXG4gICAgU1VCU0NSSVBUSU9OX01BWF9FWFRFTlNJT04gPSA0MDMwMDA1LFxuICAgIEZBTUlMWV9TSEFSRURfU1VCU0NSSVBUSU9OX0VYVEVOU0lPTl9JTkVMSUdJQkxFID0gNDAzMDAwNyxcbiAgICBBQ0NPVU5UX05PVF9GT1VORCA9IDQwNDAwMDEsXG4gICAgQUNDT1VOVF9OT1RfRk9VTkRfUkVUUllBQkxFID0gNDA0MDAwMixcbiAgICBBUFBfTk9UX0ZPVU5EID0gNDA0MDAwMyxcbiAgICBBUFBfTk9UX0ZPVU5EX1JFVFJZQUJMRSA9IDQwNDAwMDQsXG4gICAgT1JJR0lOQUxfVFJBTlNBQ1RJT05fSURfTk9UX0ZPVU5EID0gNDA0MDAwNSxcbiAgICBPUklHSU5BTF9UUkFOU0FDVElPTl9JRF9OT1RfRk9VTkRfUkVUUllBQkxFID0gNDA0MDAwNixcbiAgICBTRVJWRVJfTk9USUZJQ0FUSU9OX1VSTF9OT1RfRk9VTkQgPSA0MDQwMDA3LFxuICAgIFRFU1RfTk9USUZJQ0FUSU9OX05PVF9GT1VORCA9IDQwNDAwMDgsXG4gICAgU1RBVFVTX1JFUVVFU1RfTk9UX0ZPVU5EID0gNDA0MDAwOSxcbiAgICBUUkFOU0FDVElPTl9JRF9OT1RfRk9VTkQgPSA0MDQwMDEwLFxuICAgIFJBVEVfTElNSVRfRVhDRUVERUQgPSA0MjkwMDAwLFxuICAgIEdFTkVSQUxfSU5URVJOQUwgPSA1MDAwMDAwLFxuICAgIEdFTkVSQUxfSU5URVJOQUxfUkVUUllBQkxFID0gNTAwMDAwMSxcbn0iXX0=