import { CheckTestNotificationResponse } from './models/CheckTestNotificationResponse';
import { ConsumptionRequest } from './models/ConsumptionRequest';
import { Environment } from './models/Environment';
import { ExtendRenewalDateRequest } from './models/ExtendRenewalDateRequest';
import { ExtendRenewalDateResponse } from './models/ExtendRenewalDateResponse';
import { HistoryResponse } from './models/HistoryResponse';
import { MassExtendRenewalDateRequest } from './models/MassExtendRenewalDateRequest';
import { MassExtendRenewalDateResponse } from './models/MassExtendRenewalDateResponse';
import { MassExtendRenewalDateStatusResponse } from './models/MassExtendRenewalDateStatusResponse';
import { OrderLookupResponse } from './models/OrderLookupResponse';
import { RefundHistoryResponse } from './models/RefundHistoryResponse';
import { SendTestNotificationResponse } from './models/SendTestNotificationResponse';
import { StatusResponse } from './models/StatusResponse';
import { TransactionHistoryRequest } from './models/TransactionHistoryRequest';
import { TransactionInfoResponse } from './models/TransactionInfoResponse';
import { Validator } from './models/Validator';
import { Status } from './models/Status';
export { SignedDataVerifier as SignedJWTVerifier } from './jwt_verification';
export { ReceiptUtility } from './receipt_utility';
export { AccountTenure } from "./models/AccountTenure";
export { AutoRenewStatus } from './models/AutoRenewStatus';
export { CheckTestNotificationResponse } from './models/CheckTestNotificationResponse';
export { ConsumptionRequest } from './models/ConsumptionRequest';
export { ConsumptionStatus } from './models/ConsumptionStatus';
export { Data } from './models/Data';
export { DeliveryStatus } from './models/DeliveryStatus';
export { Environment } from './models/Environment';
export { ExpirationIntent } from './models/ExpirationIntent';
export { ExtendReasonCode } from './models/ExtendReasonCode';
export { ExtendRenewalDateRequest } from './models/ExtendRenewalDateRequest';
export { ExtendRenewalDateResponse } from './models/ExtendRenewalDateResponse';
export { SendAttemptResult } from './models/SendAttemptResult';
export { SendAttemptItem } from './models/SendAttemptItem';
export { HistoryResponse } from './models/HistoryResponse';
export { InAppOwnershipType } from './models/InAppOwnershipType';
export { JWSRenewalInfoDecodedPayload } from './models/JWSRenewalInfoDecodedPayload';
export { JWSTransactionDecodedPayload } from './models/JWSTransactionDecodedPayload';
export { LastTransactionsItem } from './models/LastTransactionsItem';
export { LifetimeDollarsPurchased } from './models/LifetimeDollarsPurchased';
export { LifetimeDollarsRefunded } from './models/LifetimeDollarsRefunded';
export { MassExtendRenewalDateRequest } from './models/MassExtendRenewalDateRequest';
export { MassExtendRenewalDateResponse } from './models/MassExtendRenewalDateResponse';
export { MassExtendRenewalDateStatusResponse } from './models/MassExtendRenewalDateStatusResponse';
export { NotificationHistoryRequest } from './models/NotificationHistoryRequest';
export { NotificationHistoryResponse } from './models/NotificationHistoryResponse';
export { NotificationHistoryResponseItem } from './models/NotificationHistoryResponseItem';
export { NotificationTypeV2 } from './models/NotificationTypeV2';
export { OfferType } from './models/OfferType';
export { OrderLookupResponse } from './models/OrderLookupResponse';
export { OrderLookupStatus } from './models/OrderLookupStatus';
export { Platform } from './models/Platform';
export { PlayTime } from './models/PlayTime';
export { PriceIncreaseStatus } from './models/PriceIncreaseStatus';
export { RefundHistoryResponse } from './models/RefundHistoryResponse';
export { ResponseBodyV2 } from './models/ResponseBodyV2';
export { ResponseBodyV2DecodedPayload } from './models/ResponseBodyV2DecodedPayload';
export { RevocationReason } from './models/RevocationReason';
export { SendTestNotificationResponse } from './models/SendTestNotificationResponse';
export { Status } from './models/Status';
export { StatusResponse } from './models/StatusResponse';
export { SubscriptionGroupIdentifierItem } from './models/SubscriptionGroupIdentifierItem';
export { Subtype } from './models/Subtype';
export { Summary } from './models/Summary';
export { TransactionHistoryRequest, Order, ProductType } from './models/TransactionHistoryRequest';
export { TransactionInfoResponse } from './models/TransactionInfoResponse';
export { TransactionReason } from './models/TransactionReason';
export { Type } from './models/Type';
export { UserStatus } from './models/UserStatus';
export { PromotionalOfferSignatureCreator } from './promotional_offer';
export { DecodedSignedData } from './models/DecodedSignedData';
export { AppTransaction } from './models/AppTransaction';
import { NotificationHistoryRequest } from './models/NotificationHistoryRequest';
import { NotificationHistoryResponse } from './models/NotificationHistoryResponse';
export declare class AppStoreServerAPIClient {
    private static PRODUCTION_URL;
    private static SANDBOX_URL;
    private static USER_AGENT;
    private issueId;
    private keyId;
    private signingKey;
    private bundleId;
    private urlBase;
    /**
     * Create an App Store Server API client
     * @param signingKey Your private key downloaded from App Store Connect
     * @param keyId Your private key ID from App Store Connect
     * @param issuerId Your issuer ID from the Keys page in App Store Connect
     * @param bundleId Your app’s bundle ID
     * @param environment The environment to target
     */
    constructor(signingKey: string, keyId: string, issuerId: string, bundleId: string, environment: Environment);
    protected makeRequest<T>(path: string, method: string, queryParameters: {
        [key: string]: [string];
    }, body: object | null, validator: Validator<T> | null): Promise<T>;
    /**
     * Uses a subscription’s product identifier to extend the renewal date for all of its eligible active subscribers.
     *
     * @param massExtendRenewalDateRequest The request body for extending a subscription renewal date for all of its active subscribers.
     * @return A response that indicates the server successfully received the subscription-renewal-date extension request.
     * @throws APIException If a response was returned indicating the request could not be processed
     * {@link https://developer.apple.com/documentation/appstoreserverapi/extend_subscription_renewal_dates_for_all_active_subscribers Extend Subscription Renewal Dates for All Active Subscribers}
     */
    extendRenewalDateForAllActiveSubscribers(massExtendRenewalDateRequest: MassExtendRenewalDateRequest): Promise<MassExtendRenewalDateResponse>;
    /**
     * Extends the renewal date of a customer’s active subscription using the original transaction identifier.
     *
     * @param originalTransactionId    The original transaction identifier of the subscription receiving a renewal date extension.
     * @param extendRenewalDateRequest The request body containing subscription-renewal-extension data.
     * @return A response that indicates whether an individual renewal-date extension succeeded, and related details.
     * @throws APIException If a response was returned indicating the request could not be processed
     * {@link https://developer.apple.com/documentation/appstoreserverapi/extend_a_subscription_renewal_date Extend a Subscription Renewal Date}
     */
    extendSubscriptionRenewalDate(originalTransactionId: string, extendRenewalDateRequest: ExtendRenewalDateRequest): Promise<ExtendRenewalDateResponse>;
    /**
     * Get the statuses for all of a customer’s auto-renewable subscriptions in your app.
     *
     * @param transactionId The identifier of a transaction that belongs to the customer, and which may be an original transaction identifier.
     * @param status An optional filter that indicates the status of subscriptions to include in the response. Your query may specify more than one status query parameter.
     * @return A response that contains status information for all of a customer’s auto-renewable subscriptions in your app.
     * @throws APIException If a response was returned indicating the request could not be processed
     * {@link https://developer.apple.com/documentation/appstoreserverapi/get_all_subscription_statuses Get All Subscription Statuses}
     */
    getAllSubscriptionStatuses(transactionId: string, status?: [Status] | undefined): Promise<StatusResponse>;
    /**
     * Get a paginated list of all of a customer’s refunded in-app purchases for your app.
     *
     * @param transactionId The identifier of a transaction that belongs to the customer, and which may be an original transaction identifier.
     * @param revision              A token you provide to get the next set of up to 20 transactions. All responses include a revision token. Use the revision token from the previous RefundHistoryResponse.
     * @return A response that contains status information for all of a customer’s auto-renewable subscriptions in your app.
     * @throws APIException If a response was returned indicating the request could not be processed
     * {@link https://developer.apple.com/documentation/appstoreserverapi/get_refund_history Get Refund History}
     */
    getRefundHistory(transactionId: string, revision: string | null): Promise<RefundHistoryResponse>;
    /**
     * Checks whether a renewal date extension request completed, and provides the final count of successful or failed extensions.
     *
     * @param requestIdentifier The UUID that represents your request to the Extend Subscription Renewal Dates for All Active Subscribers endpoint.
     * @param productId         The product identifier of the auto-renewable subscription that you request a renewal-date extension for.
     * @return A response that indicates the current status of a request to extend the subscription renewal date to all eligible subscribers.
     * @throws APIException If a response was returned indicating the request could not be processed
     * {@link https://developer.apple.com/documentation/appstoreserverapi/get_status_of_subscription_renewal_date_extensions Get Status of Subscription Renewal Date Extensions}
     */
    getStatusOfSubscriptionRenewalDateExtensions(requestIdentifier: string, productId: string): Promise<MassExtendRenewalDateStatusResponse>;
    /**
     * Check the status of the test App Store server notification sent to your server.
     *
     * @param testNotificationToken The test notification token received from the Request a Test Notification endpoint
     * @return A response that contains the contents of the test notification sent by the App Store server and the result from your server.
     * @throws APIException If a response was returned indicating the request could not be processed
     * {@link https://developer.apple.com/documentation/appstoreserverapi/get_test_notification_status Get Test Notification Status}
     */
    getTestNotificationStatus(testNotificationToken: string): Promise<CheckTestNotificationResponse>;
    /**
     * Get a list of notifications that the App Store server attempted to send to your server.
     *
     * @param paginationToken An optional token you use to get the next set of up to 20 notification history records. All responses that have more records available include a paginationToken. Omit this parameter the first time you call this endpoint.
     * @param notificationHistoryRequest The request body that includes the start and end dates, and optional query constraints.
     * @return A response that contains the App Store Server Notifications history for your app.
     * @throws APIException If a response was returned indicating the request could not be processed
     * {@link https://developer.apple.com/documentation/appstoreserverapi/get_notification_histor Get Notification History}
     */
    getNotificationHistory(paginationToken: string | null, notificationHistoryRequest: NotificationHistoryRequest): Promise<NotificationHistoryResponse>;
    /**
     * Get a customer’s in-app purchase transaction history for your app.
     *
     * @param transactionId The identifier of a transaction that belongs to the customer, and which may be an original transaction identifier.
     * @param revision              A token you provide to get the next set of up to 20 transactions. All responses include a revision token. Note: For requests that use the revision token, include the same query parameters from the initial request. Use the revision token from the previous HistoryResponse.
     * @return A response that contains the customer’s transaction history for an app.
     * @throws APIException If a response was returned indicating the request could not be processed
     * {@link https://developer.apple.com/documentation/appstoreserverapi/get_transaction_history Get Transaction History}
     */
    getTransactionHistory(transactionId: string, revision: string | null, transactionHistoryRequest: TransactionHistoryRequest): Promise<HistoryResponse>;
    /**
     * Get information about a single transaction for your app.
     *
     * @param transactionId The identifier of a transaction that belongs to the customer, and which may be an original transaction identifier.
     * @return A response that contains signed transaction information for a single transaction.
     * @throws APIException If a response was returned indicating the request could not be processed
     * {@link https://developer.apple.com/documentation/appstoreserverapi/get_transaction_info Get Transaction Info}
     */
    getTransactionInfo(transactionId: string): Promise<TransactionInfoResponse>;
    /**
     * Get a customer’s in-app purchases from a receipt using the order ID.
     *
     * @param orderId The order ID for in-app purchases that belong to the customer.
     * @return A response that includes the order lookup status and an array of signed transactions for the in-app purchases in the order.
     * @throws APIException If a response was returned indicating the request could not be processed
     * {@link https://developer.apple.com/documentation/appstoreserverapi/look_up_order_id Look Up Order ID}
     */
    lookUpOrderId(orderId: string): Promise<OrderLookupResponse>;
    /**
     * Ask App Store Server Notifications to send a test notification to your server.
     *
     * @return A response that contains the test notification token.
     * @throws APIException If a response was returned indicating the request could not be processed
     * {@link https://developer.apple.com/documentation/appstoreserverapi/request_a_test_notification Request a Test Notification}
     */
    requestTestNotification(): Promise<SendTestNotificationResponse>;
    /**
     * Send consumption information about a consumable in-app purchase to the App Store after your server receives a consumption request notification.
     *
     * @param transactionId The transaction identifier for which you’re providing consumption information. You receive this identifier in the CONSUMPTION_REQUEST notification the App Store sends to your server.
     * @param consumptionRequest    The request body containing consumption information.
     * @throws APIException If a response was returned indicating the request could not be processed
     * {@link https://developer.apple.com/documentation/appstoreserverapi/send_consumption_information Send Consumption Information}
     */
    sendConsumptionData(transactionId: string, consumptionRequest: ConsumptionRequest): Promise<void>;
    private createBearerToken;
}
export declare class APIException extends Error {
    httpStatusCode: number;
    apiError: APIError | null;
    constructor(httpStatusCode: number, apiError?: APIError | null);
}
export declare enum APIError {
    GENERAL_BAD_REQUEST = 4000000,
    INVALID_APP_IDENTIFIER = 4000002,
    INVALID_REQUEST_REVISION = 4000005,
    INVALID_TRANSACTION_ID = 4000006,
    INVALID_ORIGINAL_TRANSACTION_ID = 4000008,
    INVALID_EXTEND_BY_DAYS = 4000009,
    INVALID_EXTEND_REASON_CODE = 4000010,
    INVALID_IDENTIFIER = 4000011,
    START_DATE_TOO_FAR_IN_PAST = 4000012,
    START_DATE_AFTER_END_DATE = 4000013,
    INVALID_PAGINATION_TOKEN = 4000014,
    INVALID_START_DATE = 4000015,
    INVALID_END_DATE = 4000016,
    PAGINATION_TOKEN_EXPIRED = 4000017,
    INVALID_NOTIFICATION_TYPE = 4000018,
    MULTIPLE_FILTERS_SUPPLIED = 4000019,
    INVALID_TEST_NOTIFICATION_TOKEN = 4000020,
    INVALID_SORT = 4000021,
    INVALID_PRODUCT_TYPE = 4000022,
    INVALID_PRODUCT_ID = 4000023,
    INVALID_SUBSCRIPTION_GROUP_IDENTIFIER = 4000024,
    INVALID_EXCLUDE_REVOKED = 4000025,
    INVALID_IN_APP_OWNERSHIP_TYPE = 4000026,
    INVALID_EMPTY_STOREFRONT_COUNTRY_CODE_LIST = 4000027,
    INVALID_STOREFRONT_COUNTRY_CODE = 4000028,
    INVALID_REVOKED = 4000030,
    INVALID_STATUS = 4000031,
    INVALID_ACCOUNT_TENURE = 4000032,
    INVALID_APP_ACCOUNT_TOKEN = 4000033,
    INVALID_CONSUMPTION_STATUS = 4000034,
    INVALID_CUSTOMER_CONSENTED = 4000035,
    INVALID_DELIVERY_STATUS = 4000036,
    INVALID_LIFETIME_DOLLARS_PURCHASED = 4000037,
    INVALID_LIFETIME_DOLLARS_REFUNDED = 4000038,
    INVALID_PLATFORM = 4000039,
    INVALID_PLAY_TIME = 4000040,
    INVALID_SAMPLE_CONTENT_PROVIDED = 4000041,
    INVALID_USER_STATUS = 4000042,
    INVALID_TRANSACTION_NOT_CONSUMABLE = 4000043,
    SUBSCRIPTION_EXTENSION_INELIGIBLE = 4030004,
    SUBSCRIPTION_MAX_EXTENSION = 4030005,
    FAMILY_SHARED_SUBSCRIPTION_EXTENSION_INELIGIBLE = 4030007,
    ACCOUNT_NOT_FOUND = 4040001,
    ACCOUNT_NOT_FOUND_RETRYABLE = 4040002,
    APP_NOT_FOUND = 4040003,
    APP_NOT_FOUND_RETRYABLE = 4040004,
    ORIGINAL_TRANSACTION_ID_NOT_FOUND = 4040005,
    ORIGINAL_TRANSACTION_ID_NOT_FOUND_RETRYABLE = 4040006,
    SERVER_NOTIFICATION_URL_NOT_FOUND = 4040007,
    TEST_NOTIFICATION_NOT_FOUND = 4040008,
    STATUS_REQUEST_NOT_FOUND = 4040009,
    TRANSACTION_ID_NOT_FOUND = 4040010,
    RATE_LIMIT_EXCEEDED = 4290000,
    GENERAL_INTERNAL = 5000000,
    GENERAL_INTERNAL_RETRYABLE = 5000001
}
