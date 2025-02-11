"use strict";
// Copyright (c) 2023 Apple Inc. Licensed under MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLookupStatusValidator = exports.OrderLookupStatus = void 0;
/**
 * A value that indicates whether the order ID in the request is valid for your app.
 *
 * {@link https://developer.apple.com/documentation/appstoreserverapi/orderlookupstatus OrderLookupStatus}
 */
var OrderLookupStatus;
(function (OrderLookupStatus) {
    OrderLookupStatus[OrderLookupStatus["VALID"] = 0] = "VALID";
    OrderLookupStatus[OrderLookupStatus["INVALID"] = 1] = "INVALID";
})(OrderLookupStatus || (exports.OrderLookupStatus = OrderLookupStatus = {}));
class OrderLookupStatusValidator {
    validate(obj) {
        return Object.values(OrderLookupStatus).includes(obj);
    }
}
exports.OrderLookupStatusValidator = OrderLookupStatusValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JkZXJMb29rdXBTdGF0dXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2RlbHMvT3JkZXJMb29rdXBTdGF0dXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDREQUE0RDs7O0FBSTVEOzs7O0dBSUc7QUFDSCxJQUFZLGlCQUdYO0FBSEQsV0FBWSxpQkFBaUI7SUFDekIsMkRBQVMsQ0FBQTtJQUNULCtEQUFXLENBQUE7QUFDZixDQUFDLEVBSFcsaUJBQWlCLGlDQUFqQixpQkFBaUIsUUFHNUI7QUFFRCxNQUFhLDBCQUEwQjtJQUNwQyxRQUFRLENBQUMsR0FBUTtRQUNaLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUN6RCxDQUFDO0NBQ0o7QUFKRCxnRUFJQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBBcHBsZSBJbmMuIExpY2Vuc2VkIHVuZGVyIE1JVCBMaWNlbnNlLlxuXG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tIFwiLi9WYWxpZGF0b3JcIjtcblxuLyoqXG4gKiBBIHZhbHVlIHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIG9yZGVyIElEIGluIHRoZSByZXF1ZXN0IGlzIHZhbGlkIGZvciB5b3VyIGFwcC5cbiAqXG4gKiB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2RvY3VtZW50YXRpb24vYXBwc3RvcmVzZXJ2ZXJhcGkvb3JkZXJsb29rdXBzdGF0dXMgT3JkZXJMb29rdXBTdGF0dXN9XG4gKi9cbmV4cG9ydCBlbnVtIE9yZGVyTG9va3VwU3RhdHVzIHtcbiAgICBWQUxJRCA9IDAsXG4gICAgSU5WQUxJRCA9IDEsXG59XG5cbmV4cG9ydCBjbGFzcyBPcmRlckxvb2t1cFN0YXR1c1ZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvcjxPcmRlckxvb2t1cFN0YXR1cz4ge1xuICAgdmFsaWRhdGUob2JqOiBhbnkpOiBvYmogaXMgT3JkZXJMb29rdXBTdGF0dXMge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhPcmRlckxvb2t1cFN0YXR1cykuaW5jbHVkZXMob2JqKVxuICAgIH1cbn1cbiJdfQ==