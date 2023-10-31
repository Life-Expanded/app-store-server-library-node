import { Validator } from "./Validator";
/**
 * A notification type value that App Store Server Notifications V2 uses.
 *
 * {@link https://developer.apple.com/documentation/appstoreserverapi/notificationtype notificationType}
 */
export declare enum NotificationTypeV2 {
    SUBSCRIBED = "SUBSCRIBED",
    DID_CHANGE_RENEWAL_PREF = "DID_CHANGE_RENEWAL_PREF",
    DID_CHANGE_RENEWAL_STATUS = "DID_CHANGE_RENEWAL_STATUS",
    OFFER_REDEEMED = "OFFER_REDEEMED",
    DID_RENEW = "DID_RENEW",
    EXPIRED = "EXPIRED",
    DID_FAIL_TO_RENEW = "DID_FAIL_TO_RENEW",
    GRACE_PERIOD_EXPIRED = "GRACE_PERIOD_EXPIRED",
    PRICE_INCREASE = "PRICE_INCREASE",
    REFUND = "REFUND",
    REFUND_DECLINED = "REFUND_DECLINED",
    CONSUMPTION_REQUEST = "CONSUMPTION_REQUEST",
    RENEWAL_EXTENDED = "RENEWAL_EXTENDED",
    REVOKE = "REVOKE",
    TEST = "TEST",
    RENEWAL_EXTENSION = "RENEWAL_EXTENSION",
    REFUND_REVERSED = "REFUND_REVERSED"
}
export declare class NotificationTypeV2Validator implements Validator<NotificationTypeV2> {
    validate(obj: any): obj is NotificationTypeV2;
}
