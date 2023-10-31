"use strict";
// Copyright (c) 2023 Apple Inc. Licensed under MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferTypeValidator = exports.OfferType = void 0;
/**
 * The type of subscription offer.
 *
 * {@link https://developer.apple.com/documentation/appstoreserverapi/offertype offerType}
 */
var OfferType;
(function (OfferType) {
    OfferType[OfferType["INTRODUCTORY_OFFER"] = 1] = "INTRODUCTORY_OFFER";
    OfferType[OfferType["PROMOTIONAL_OFFER"] = 2] = "PROMOTIONAL_OFFER";
    OfferType[OfferType["SUBSCRIPTION_OFFER_CODE"] = 3] = "SUBSCRIPTION_OFFER_CODE";
})(OfferType || (exports.OfferType = OfferType = {}));
class OfferTypeValidator {
    validate(obj) {
        return Object.values(OfferType).includes(obj);
    }
}
exports.OfferTypeValidator = OfferTypeValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2ZmZXJUeXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbW9kZWxzL09mZmVyVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNERBQTREOzs7QUFJNUQ7Ozs7R0FJRztBQUNILElBQVksU0FJWDtBQUpELFdBQVksU0FBUztJQUNqQixxRUFBc0IsQ0FBQTtJQUN0QixtRUFBcUIsQ0FBQTtJQUNyQiwrRUFBMkIsQ0FBQTtBQUMvQixDQUFDLEVBSlcsU0FBUyx5QkFBVCxTQUFTLFFBSXBCO0FBRUQsTUFBYSxrQkFBa0I7SUFDNUIsUUFBUSxDQUFDLEdBQVE7UUFDWixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ2pELENBQUM7Q0FDSjtBQUpELGdEQUlDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIEFwcGxlIEluYy4gTGljZW5zZWQgdW5kZXIgTUlUIExpY2Vuc2UuXG5cbmltcG9ydCB7IFZhbGlkYXRvciB9IGZyb20gXCIuL1ZhbGlkYXRvclwiO1xuXG4vKipcbiAqIFRoZSB0eXBlIG9mIHN1YnNjcmlwdGlvbiBvZmZlci5cbiAqXG4gKiB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2RvY3VtZW50YXRpb24vYXBwc3RvcmVzZXJ2ZXJhcGkvb2ZmZXJ0eXBlIG9mZmVyVHlwZX1cbiAqL1xuZXhwb3J0IGVudW0gT2ZmZXJUeXBlIHtcbiAgICBJTlRST0RVQ1RPUllfT0ZGRVIgPSAxLFxuICAgIFBST01PVElPTkFMX09GRkVSID0gMixcbiAgICBTVUJTQ1JJUFRJT05fT0ZGRVJfQ09ERSA9IDMsXG59XG5cbmV4cG9ydCBjbGFzcyBPZmZlclR5cGVWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3I8T2ZmZXJUeXBlPiB7XG4gICB2YWxpZGF0ZShvYmo6IGFueSk6IG9iaiBpcyBPZmZlclR5cGUge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhPZmZlclR5cGUpLmluY2x1ZGVzKG9iailcbiAgICB9XG59XG4iXX0=