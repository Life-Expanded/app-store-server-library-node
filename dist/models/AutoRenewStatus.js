"use strict";
// Copyright (c) 2023 Apple Inc. Licensed under MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoRenewStatusValidator = exports.AutoRenewStatus = void 0;
/**
 * The renewal status for an auto-renewable subscription.
 *
 * {@link https://developer.apple.com/documentation/appstoreserverapi/autorenewstatus autoRenewStatus}
 */
var AutoRenewStatus;
(function (AutoRenewStatus) {
    AutoRenewStatus[AutoRenewStatus["OFF"] = 0] = "OFF";
    AutoRenewStatus[AutoRenewStatus["ON"] = 1] = "ON";
})(AutoRenewStatus || (exports.AutoRenewStatus = AutoRenewStatus = {}));
class AutoRenewStatusValidator {
    validate(obj) {
        return Object.values(AutoRenewStatus).includes(obj);
    }
}
exports.AutoRenewStatusValidator = AutoRenewStatusValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0b1JlbmV3U3RhdHVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbW9kZWxzL0F1dG9SZW5ld1N0YXR1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNERBQTREOzs7QUFJNUQ7Ozs7R0FJRztBQUNILElBQVksZUFHWDtBQUhELFdBQVksZUFBZTtJQUN2QixtREFBTyxDQUFBO0lBQ1AsaURBQU0sQ0FBQTtBQUNWLENBQUMsRUFIVyxlQUFlLCtCQUFmLGVBQWUsUUFHMUI7QUFFRCxNQUFhLHdCQUF3QjtJQUNsQyxRQUFRLENBQUMsR0FBUTtRQUNaLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDdkQsQ0FBQztDQUNKO0FBSkQsNERBSUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgQXBwbGUgSW5jLiBMaWNlbnNlZCB1bmRlciBNSVQgTGljZW5zZS5cblxuaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSBcIi4vVmFsaWRhdG9yXCI7XG5cbi8qKlxuICogVGhlIHJlbmV3YWwgc3RhdHVzIGZvciBhbiBhdXRvLXJlbmV3YWJsZSBzdWJzY3JpcHRpb24uXG4gKlxuICoge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLmFwcGxlLmNvbS9kb2N1bWVudGF0aW9uL2FwcHN0b3Jlc2VydmVyYXBpL2F1dG9yZW5ld3N0YXR1cyBhdXRvUmVuZXdTdGF0dXN9XG4gKi9cbmV4cG9ydCBlbnVtIEF1dG9SZW5ld1N0YXR1cyB7XG4gICAgT0ZGID0gMCxcbiAgICBPTiA9IDEsXG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvUmVuZXdTdGF0dXNWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3I8QXV0b1JlbmV3U3RhdHVzPiB7XG4gICB2YWxpZGF0ZShvYmo6IGFueSk6IG9iaiBpcyBBdXRvUmVuZXdTdGF0dXMge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhBdXRvUmVuZXdTdGF0dXMpLmluY2x1ZGVzKG9iailcbiAgICB9XG59XG4iXX0=