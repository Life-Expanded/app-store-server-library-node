"use strict";
// Copyright (c) 2023 Apple Inc. Licensed under MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStatusValidator = exports.UserStatus = void 0;
/**
 * The status of a customer’s account within your app.
 *
 * {@link https://developer.apple.com/documentation/appstoreserverapi/userstatus userStatus}
 */
var UserStatus;
(function (UserStatus) {
    UserStatus[UserStatus["UNDECLARED"] = 0] = "UNDECLARED";
    UserStatus[UserStatus["ACTIVE"] = 1] = "ACTIVE";
    UserStatus[UserStatus["SUSPENDED"] = 2] = "SUSPENDED";
    UserStatus[UserStatus["TERMINATED"] = 3] = "TERMINATED";
    UserStatus[UserStatus["LIMITED_ACCESS"] = 4] = "LIMITED_ACCESS";
})(UserStatus || (exports.UserStatus = UserStatus = {}));
class UserStatusValidator {
    validate(obj) {
        return Object.values(UserStatus).includes(obj);
    }
}
exports.UserStatusValidator = UserStatusValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclN0YXR1cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21vZGVscy9Vc2VyU3RhdHVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0REFBNEQ7OztBQUk1RDs7OztHQUlHO0FBQ0gsSUFBWSxVQU1YO0FBTkQsV0FBWSxVQUFVO0lBQ2xCLHVEQUFjLENBQUE7SUFDZCwrQ0FBVSxDQUFBO0lBQ1YscURBQWEsQ0FBQTtJQUNiLHVEQUFjLENBQUE7SUFDZCwrREFBa0IsQ0FBQTtBQUN0QixDQUFDLEVBTlcsVUFBVSwwQkFBVixVQUFVLFFBTXJCO0FBRUQsTUFBYSxtQkFBbUI7SUFDN0IsUUFBUSxDQUFDLEdBQVE7UUFDWixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ2xELENBQUM7Q0FDSjtBQUpELGtEQUlDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIEFwcGxlIEluYy4gTGljZW5zZWQgdW5kZXIgTUlUIExpY2Vuc2UuXG5cbmltcG9ydCB7IFZhbGlkYXRvciB9IGZyb20gXCIuL1ZhbGlkYXRvclwiO1xuXG4vKipcbiAqIFRoZSBzdGF0dXMgb2YgYSBjdXN0b21lcuKAmXMgYWNjb3VudCB3aXRoaW4geW91ciBhcHAuXG4gKlxuICoge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLmFwcGxlLmNvbS9kb2N1bWVudGF0aW9uL2FwcHN0b3Jlc2VydmVyYXBpL3VzZXJzdGF0dXMgdXNlclN0YXR1c31cbiAqL1xuZXhwb3J0IGVudW0gVXNlclN0YXR1cyB7XG4gICAgVU5ERUNMQVJFRCA9IDAsXG4gICAgQUNUSVZFID0gMSxcbiAgICBTVVNQRU5ERUQgPSAyLFxuICAgIFRFUk1JTkFURUQgPSAzLFxuICAgIExJTUlURURfQUNDRVNTID0gNCxcbn1cblxuZXhwb3J0IGNsYXNzIFVzZXJTdGF0dXNWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3I8VXNlclN0YXR1cz4ge1xuICAgdmFsaWRhdGUob2JqOiBhbnkpOiBvYmogaXMgVXNlclN0YXR1cyB7XG4gICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKFVzZXJTdGF0dXMpLmluY2x1ZGVzKG9iailcbiAgICB9XG59XG4iXX0=