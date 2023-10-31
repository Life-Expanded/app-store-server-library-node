import { AutoRenewStatus, AutoRenewStatusValidator } from "./AutoRenewStatus";
import { DecodedSignedData } from "./DecodedSignedData";
import { Environment, EnvironmentValidator } from "./Environment";
import { ExpirationIntent, ExpirationIntentValidator } from "./ExpirationIntent";
import { OfferType, OfferTypeValidator } from "./OfferType";
import { PriceIncreaseStatus, PriceIncreaseStatusValidator } from "./PriceIncreaseStatus";
import { Validator } from "./Validator";
/**
 * A decoded payload containing subscription renewal information for an auto-renewable subscription.
 *
 * {@link https://developer.apple.com/documentation/appstoreserverapi/jwsrenewalinfodecodedpayload JWSRenewalInfoDecodedPayload}
 */
export interface JWSRenewalInfoDecodedPayload extends DecodedSignedData {
    /**
     * The reason the subscription expired.
     *
     * {@link https://developer.apple.com/documentation/appstoreserverapi/expirationintent expirationIntent}
     **/
    expirationIntent?: ExpirationIntent;
    /**
     * The original transaction identifier of a purchase.
     *
     * {@link https://developer.apple.com/documentation/appstoreserverapi/originaltransactionid originalTransactionId}
     **/
    originalTransactionId?: string;
    /**
     * The product identifier of the product that will renew at the next billing period.
     *
     * {@link https://developer.apple.com/documentation/appstoreserverapi/autorenewproductid autoRenewProductId}
     **/
    autoRenewProductId?: string;
    /**
     * The unique identifier for the product, that you create in App Store Connect.
     *
     * {@link https://developer.apple.com/documentation/appstoreserverapi/productid productId}
     **/
    productId?: string;
    /**
     * The renewal status of the auto-renewable subscription.
     *
     * {@link https://developer.apple.com/documentation/appstoreserverapi/autorenewstatus autoRenewStatus}
     **/
    autoRenewStatus?: AutoRenewStatus;
    /**
     * A Boolean value that indicates whether the App Store is attempting to automatically renew an expired subscription.
     *
     * {@link https://developer.apple.com/documentation/appstoreserverapi/isinbillingretryperiod isInBillingRetryPeriod}
     **/
    isInBillingRetryPeriod?: boolean;
    /**
     * The status that indicates whether the auto-renewable subscription is subject to a price increase.
     *
     * {@link https://developer.apple.com/documentation/appstoreserverapi/priceincreasestatus priceIncreaseStatus}
     **/
    priceIncreaseStatus?: PriceIncreaseStatus;
    /**
     * The time when the billing grace period for subscription renewals expires.
     *
     * {@link https://developer.apple.com/documentation/appstoreserverapi/graceperiodexpiresdate gracePeriodExpiresDate}
     **/
    gracePeriodExpiresDate?: number;
    /**
     * The type of the subscription offer.
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
     * The UNIX time, in milliseconds, that the App Store signed the JSON Web Signature data.
     *
     * {@link https://developer.apple.com/documentation/appstoreserverapi/signeddate signedDate}
     **/
    signedDate?: number;
    /**
     * The server environment, either sandbox or production.
     *
     * {@link https://developer.apple.com/documentation/appstoreserverapi/environment environment}
     **/
    environment?: Environment;
    /**
     * The earliest start date of a subscription in a series of auto-renewable subscription purchases that ignores all lapses of paid service shorter than 60 days.
     *
     * {@link https://developer.apple.com/documentation/appstoreserverapi/recentsubscriptionstartdate recentSubscriptionStartDate}
     **/
    recentSubscriptionStartDate?: number;
    /**
     * The UNIX time, in milliseconds, when the most recent auto-renewable subscription purchase expires.
     *
     * {@link https://developer.apple.com/documentation/appstoreserverapi/renewaldate renewalDate}
     **/
    renewalDate?: number;
}
export declare class JWSRenewalInfoDecodedPayloadValidator implements Validator<JWSRenewalInfoDecodedPayload> {
    static readonly environmentValidator: EnvironmentValidator;
    static readonly offerTypeValidator: OfferTypeValidator;
    static readonly priceIncreaseStatusValidator: PriceIncreaseStatusValidator;
    static readonly autoRenewStatusValidator: AutoRenewStatusValidator;
    static readonly expirationIntentValidator: ExpirationIntentValidator;
    validate(obj: any): obj is JWSRenewalInfoDecodedPayload;
}
