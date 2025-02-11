"use strict";
// Copyright (c) 2023 Apple Inc. Licensed under MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendReasonCodeValidator = exports.ExtendReasonCode = void 0;
/**
 * The code that represents the reason for the subscription-renewal-date extension.
 *
 * {@link https://developer.apple.com/documentation/appstoreserverapi/extendreasoncode extendReasonCode}
 */
var ExtendReasonCode;
(function (ExtendReasonCode) {
    ExtendReasonCode[ExtendReasonCode["UNDECLARED"] = 0] = "UNDECLARED";
    ExtendReasonCode[ExtendReasonCode["CUSTOMER_SATISFACTION"] = 1] = "CUSTOMER_SATISFACTION";
    ExtendReasonCode[ExtendReasonCode["OTHER"] = 2] = "OTHER";
    ExtendReasonCode[ExtendReasonCode["SERVICE_ISSUE_OR_OUTAGE"] = 3] = "SERVICE_ISSUE_OR_OUTAGE";
})(ExtendReasonCode || (exports.ExtendReasonCode = ExtendReasonCode = {}));
class ExtendReasonCodeValidator {
    validate(obj) {
        return Object.values(ExtendReasonCode).includes(obj);
    }
}
exports.ExtendReasonCodeValidator = ExtendReasonCodeValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0ZW5kUmVhc29uQ29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21vZGVscy9FeHRlbmRSZWFzb25Db2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0REFBNEQ7OztBQUk1RDs7OztHQUlHO0FBQ0gsSUFBWSxnQkFLWDtBQUxELFdBQVksZ0JBQWdCO0lBQ3hCLG1FQUFjLENBQUE7SUFDZCx5RkFBeUIsQ0FBQTtJQUN6Qix5REFBUyxDQUFBO0lBQ1QsNkZBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQUxXLGdCQUFnQixnQ0FBaEIsZ0JBQWdCLFFBSzNCO0FBRUQsTUFBYSx5QkFBeUI7SUFDbkMsUUFBUSxDQUFDLEdBQVE7UUFDWixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDeEQsQ0FBQztDQUNKO0FBSkQsOERBSUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgQXBwbGUgSW5jLiBMaWNlbnNlZCB1bmRlciBNSVQgTGljZW5zZS5cblxuaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSBcIi4vVmFsaWRhdG9yXCI7XG5cbi8qKlxuICogVGhlIGNvZGUgdGhhdCByZXByZXNlbnRzIHRoZSByZWFzb24gZm9yIHRoZSBzdWJzY3JpcHRpb24tcmVuZXdhbC1kYXRlIGV4dGVuc2lvbi5cbiAqXG4gKiB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2RvY3VtZW50YXRpb24vYXBwc3RvcmVzZXJ2ZXJhcGkvZXh0ZW5kcmVhc29uY29kZSBleHRlbmRSZWFzb25Db2RlfVxuICovXG5leHBvcnQgZW51bSBFeHRlbmRSZWFzb25Db2RlIHtcbiAgICBVTkRFQ0xBUkVEID0gMCxcbiAgICBDVVNUT01FUl9TQVRJU0ZBQ1RJT04gPSAxLFxuICAgIE9USEVSID0gMixcbiAgICBTRVJWSUNFX0lTU1VFX09SX09VVEFHRSA9IDMsXG59XG5cbmV4cG9ydCBjbGFzcyBFeHRlbmRSZWFzb25Db2RlVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yPEV4dGVuZFJlYXNvbkNvZGU+IHtcbiAgIHZhbGlkYXRlKG9iajogYW55KTogb2JqIGlzIEV4dGVuZFJlYXNvbkNvZGUge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhFeHRlbmRSZWFzb25Db2RlKS5pbmNsdWRlcyhvYmopXG4gICAgfVxufVxuIl19