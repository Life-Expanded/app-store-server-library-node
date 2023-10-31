"use strict";
// Copyright (c) 2023 Apple Inc. Licensed under MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeValidator = exports.Type = void 0;
/**
 * The type of in-app purchase products you can offer in your app.
 *
 * {@link https://developer.apple.com/documentation/appstoreserverapi/type type}
 */
var Type;
(function (Type) {
    Type["AUTO_RENEWABLE_SUBSCRIPTION"] = "Auto-Renewable Subscription";
    Type["NON_CONSUMABLE"] = "Non-Consumable";
    Type["CONSUMABLE"] = "Consumable";
    Type["NON_RENEWING_SUBSCRIPTION"] = "Non-Renewing Subscription";
})(Type || (exports.Type = Type = {}));
class TypeValidator {
    validate(obj) {
        return Object.values(Type).includes(obj);
    }
}
exports.TypeValidator = TypeValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21vZGVscy9UeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0REFBNEQ7OztBQUk1RDs7OztHQUlHO0FBQ0gsSUFBWSxJQUtYO0FBTEQsV0FBWSxJQUFJO0lBQ1osbUVBQTJELENBQUE7SUFDM0QseUNBQWlDLENBQUE7SUFDakMsaUNBQXlCLENBQUE7SUFDekIsK0RBQXNELENBQUE7QUFDMUQsQ0FBQyxFQUxXLElBQUksb0JBQUosSUFBSSxRQUtmO0FBRUQsTUFBYSxhQUFhO0lBQ3ZCLFFBQVEsQ0FBQyxHQUFRO1FBQ1osT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0NBQ0o7QUFKRCxzQ0FJQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBBcHBsZSBJbmMuIExpY2Vuc2VkIHVuZGVyIE1JVCBMaWNlbnNlLlxuXG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tIFwiLi9WYWxpZGF0b3JcIjtcblxuLyoqXG4gKiBUaGUgdHlwZSBvZiBpbi1hcHAgcHVyY2hhc2UgcHJvZHVjdHMgeW91IGNhbiBvZmZlciBpbiB5b3VyIGFwcC5cbiAqXG4gKiB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2RvY3VtZW50YXRpb24vYXBwc3RvcmVzZXJ2ZXJhcGkvdHlwZSB0eXBlfVxuICovXG5leHBvcnQgZW51bSBUeXBlIHtcbiAgICBBVVRPX1JFTkVXQUJMRV9TVUJTQ1JJUFRJT04gPSBcIkF1dG8tUmVuZXdhYmxlIFN1YnNjcmlwdGlvblwiLFxuICAgIE5PTl9DT05TVU1BQkxFID0gXCJOb24tQ29uc3VtYWJsZVwiLFxuICAgIENPTlNVTUFCTEUgPSBcIkNvbnN1bWFibGVcIixcbiAgICBOT05fUkVORVdJTkdfU1VCU0NSSVBUSU9OID1cIk5vbi1SZW5ld2luZyBTdWJzY3JpcHRpb25cIixcbn1cblxuZXhwb3J0IGNsYXNzIFR5cGVWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3I8VHlwZT4ge1xuICAgdmFsaWRhdGUob2JqOiBhbnkpOiBvYmogaXMgVHlwZSB7XG4gICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKFR5cGUpLmluY2x1ZGVzKG9iailcbiAgICB9XG59XG4iXX0=