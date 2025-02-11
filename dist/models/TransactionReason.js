"use strict";
// Copyright (c) 2023 Apple Inc. Licensed under MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionReasonValidator = exports.TransactionReason = void 0;
/**
 * The cause of a purchase transaction, which indicates whether it’s a customer’s purchase or a renewal for an auto-renewable subscription that the system initiates.
 *
 * {@link https://developer.apple.com/documentation/appstoreserverapi/transactionreason transactionReason}
 */
var TransactionReason;
(function (TransactionReason) {
    TransactionReason["PURCHASE"] = "PURCHASE";
    TransactionReason["RENEWAL"] = "RENEWAL";
})(TransactionReason || (exports.TransactionReason = TransactionReason = {}));
class TransactionReasonValidator {
    validate(obj) {
        return Object.values(TransactionReason).includes(obj);
    }
}
exports.TransactionReasonValidator = TransactionReasonValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhbnNhY3Rpb25SZWFzb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2RlbHMvVHJhbnNhY3Rpb25SZWFzb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDREQUE0RDs7O0FBSTVEOzs7O0dBSUc7QUFDSCxJQUFZLGlCQUdYO0FBSEQsV0FBWSxpQkFBaUI7SUFDekIsMENBQXFCLENBQUE7SUFDckIsd0NBQW1CLENBQUE7QUFDdkIsQ0FBQyxFQUhXLGlCQUFpQixpQ0FBakIsaUJBQWlCLFFBRzVCO0FBRUQsTUFBYSwwQkFBMEI7SUFDcEMsUUFBUSxDQUFDLEdBQVE7UUFDWixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDekQsQ0FBQztDQUNKO0FBSkQsZ0VBSUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgQXBwbGUgSW5jLiBMaWNlbnNlZCB1bmRlciBNSVQgTGljZW5zZS5cblxuaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSBcIi4vVmFsaWRhdG9yXCI7XG5cbi8qKlxuICogVGhlIGNhdXNlIG9mIGEgcHVyY2hhc2UgdHJhbnNhY3Rpb24sIHdoaWNoIGluZGljYXRlcyB3aGV0aGVyIGl04oCZcyBhIGN1c3RvbWVy4oCZcyBwdXJjaGFzZSBvciBhIHJlbmV3YWwgZm9yIGFuIGF1dG8tcmVuZXdhYmxlIHN1YnNjcmlwdGlvbiB0aGF0IHRoZSBzeXN0ZW0gaW5pdGlhdGVzLlxuICpcbiAqIHtAbGluayBodHRwczovL2RldmVsb3Blci5hcHBsZS5jb20vZG9jdW1lbnRhdGlvbi9hcHBzdG9yZXNlcnZlcmFwaS90cmFuc2FjdGlvbnJlYXNvbiB0cmFuc2FjdGlvblJlYXNvbn1cbiAqL1xuZXhwb3J0IGVudW0gVHJhbnNhY3Rpb25SZWFzb24ge1xuICAgIFBVUkNIQVNFID0gXCJQVVJDSEFTRVwiLFxuICAgIFJFTkVXQUwgPSBcIlJFTkVXQUxcIixcbn1cblxuZXhwb3J0IGNsYXNzIFRyYW5zYWN0aW9uUmVhc29uVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yPFRyYW5zYWN0aW9uUmVhc29uPiB7XG4gICB2YWxpZGF0ZShvYmo6IGFueSk6IG9iaiBpcyBUcmFuc2FjdGlvblJlYXNvbiB7XG4gICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKFRyYW5zYWN0aW9uUmVhc29uKS5pbmNsdWRlcyhvYmopXG4gICAgfVxufVxuIl19