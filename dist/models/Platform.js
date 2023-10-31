"use strict";
// Copyright (c) 2023 Apple Inc. Licensed under MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformValidator = exports.Platform = void 0;
/**
 * The platform on which the customer consumed the in-app purchase.
 *
 * {@link https://developer.apple.com/documentation/appstoreserverapi/platform platform}
 */
var Platform;
(function (Platform) {
    Platform[Platform["UNDECLARED"] = 0] = "UNDECLARED";
    Platform[Platform["APPLE"] = 1] = "APPLE";
    Platform[Platform["NON_APPLE"] = 2] = "NON_APPLE";
})(Platform || (exports.Platform = Platform = {}));
class PlatformValidator {
    validate(obj) {
        return Object.values(Platform).includes(obj);
    }
}
exports.PlatformValidator = PlatformValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxhdGZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2RlbHMvUGxhdGZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDREQUE0RDs7O0FBSTVEOzs7O0dBSUc7QUFDSCxJQUFZLFFBSVg7QUFKRCxXQUFZLFFBQVE7SUFDaEIsbURBQWMsQ0FBQTtJQUNkLHlDQUFTLENBQUE7SUFDVCxpREFBYSxDQUFBO0FBQ2pCLENBQUMsRUFKVyxRQUFRLHdCQUFSLFFBQVEsUUFJbkI7QUFFRCxNQUFhLGlCQUFpQjtJQUMzQixRQUFRLENBQUMsR0FBUTtRQUNaLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDaEQsQ0FBQztDQUNKO0FBSkQsOENBSUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgQXBwbGUgSW5jLiBMaWNlbnNlZCB1bmRlciBNSVQgTGljZW5zZS5cblxuaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSBcIi4vVmFsaWRhdG9yXCI7XG5cbi8qKlxuICogVGhlIHBsYXRmb3JtIG9uIHdoaWNoIHRoZSBjdXN0b21lciBjb25zdW1lZCB0aGUgaW4tYXBwIHB1cmNoYXNlLlxuICpcbiAqIHtAbGluayBodHRwczovL2RldmVsb3Blci5hcHBsZS5jb20vZG9jdW1lbnRhdGlvbi9hcHBzdG9yZXNlcnZlcmFwaS9wbGF0Zm9ybSBwbGF0Zm9ybX1cbiAqL1xuZXhwb3J0IGVudW0gUGxhdGZvcm0ge1xuICAgIFVOREVDTEFSRUQgPSAwLFxuICAgIEFQUExFID0gMSxcbiAgICBOT05fQVBQTEUgPSAyLFxufVxuXG5leHBvcnQgY2xhc3MgUGxhdGZvcm1WYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3I8UGxhdGZvcm0+IHtcbiAgIHZhbGlkYXRlKG9iajogYW55KTogb2JqIGlzIFBsYXRmb3JtIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoUGxhdGZvcm0pLmluY2x1ZGVzKG9iailcbiAgICB9XG59XG4iXX0=