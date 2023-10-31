"use strict";
// Copyright (c) 2023 Apple Inc. Licensed under MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppTransactionValidator = void 0;
const Environment_1 = require("./Environment");
class AppTransactionValidator {
    validate(obj) {
        if ((typeof obj['appAppleId'] !== 'undefined') && !(typeof obj['appAppleId'] === "number")) {
            return false;
        }
        if ((typeof obj['bundleId'] !== 'undefined') && !(typeof obj['bundleId'] === "string" || obj['bundleId'] instanceof String)) {
            return false;
        }
        if ((typeof obj['applicationVersion'] !== 'undefined') && !(typeof obj['applicationVersion'] === "string" || obj['applicationVersion'] instanceof String)) {
            return false;
        }
        if ((typeof obj['versionExternalIdentifier'] !== 'undefined') && !(typeof obj['versionExternalIdentifier'] === "number")) {
            return false;
        }
        if ((typeof obj['receiptCreationDate'] !== 'undefined') && !(typeof obj['receiptCreationDate'] === "number")) {
            return false;
        }
        if ((typeof obj['originalPurchaseDate'] !== 'undefined') && !(typeof obj['originalPurchaseDate'] === "number")) {
            return false;
        }
        if ((typeof obj['originalApplicationVersion'] !== 'undefined') && !(typeof obj['originalApplicationVersion'] === "string" || obj['originalApplicationVersion'] instanceof String)) {
            return false;
        }
        if ((typeof obj['deviceVerification'] !== 'undefined') && !(typeof obj['deviceVerification'] === "string" || obj['deviceVerification'] instanceof String)) {
            return false;
        }
        if ((typeof obj['deviceVerificationNonce'] !== 'undefined') && !(typeof obj['deviceVerificationNonce'] === "string" || obj['deviceVerificationNonce'] instanceof String)) {
            return false;
        }
        if ((typeof obj['preorderDate'] !== 'undefined') && !(typeof obj['preorderDate'] === "number")) {
            return false;
        }
        if ((typeof obj['environment'] !== 'undefined') && !(AppTransactionValidator.environmentValidator.validate(obj['environment']))) {
            return false;
        }
        return true;
    }
}
exports.AppTransactionValidator = AppTransactionValidator;
AppTransactionValidator.environmentValidator = new Environment_1.EnvironmentValidator();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwVHJhbnNhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2RlbHMvQXBwVHJhbnNhY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDREQUE0RDs7O0FBRTVELCtDQUFpRTtBQXdGakUsTUFBYSx1QkFBdUI7SUFFaEMsUUFBUSxDQUFDLEdBQVE7UUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLFFBQVEsQ0FBQyxFQUFFO1lBQ3hGLE9BQU8sS0FBSyxDQUFBO1NBQ2Y7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLFFBQVEsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLFlBQVksTUFBTSxDQUFDLEVBQUU7WUFDekgsT0FBTyxLQUFLLENBQUE7U0FDZjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLFFBQVEsSUFBSSxHQUFHLENBQUMsb0JBQW9CLENBQUMsWUFBWSxNQUFNLENBQUMsRUFBRTtZQUN2SixPQUFPLEtBQUssQ0FBQTtTQUNmO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLDJCQUEyQixDQUFDLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLDJCQUEyQixDQUFDLEtBQUssUUFBUSxDQUFDLEVBQUU7WUFDdEgsT0FBTyxLQUFLLENBQUE7U0FDZjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxFQUFFO1lBQzFHLE9BQU8sS0FBSyxDQUFBO1NBQ2Y7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsc0JBQXNCLENBQUMsS0FBSyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsc0JBQXNCLENBQUMsS0FBSyxRQUFRLENBQUMsRUFBRTtZQUM1RyxPQUFPLEtBQUssQ0FBQTtTQUNmO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLDRCQUE0QixDQUFDLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLDRCQUE0QixDQUFDLEtBQUssUUFBUSxJQUFJLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxZQUFZLE1BQU0sQ0FBQyxFQUFFO1lBQy9LLE9BQU8sS0FBSyxDQUFBO1NBQ2Y7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsb0JBQW9CLENBQUMsS0FBSyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsb0JBQW9CLENBQUMsS0FBSyxRQUFRLElBQUksR0FBRyxDQUFDLG9CQUFvQixDQUFDLFlBQVksTUFBTSxDQUFDLEVBQUU7WUFDdkosT0FBTyxLQUFLLENBQUE7U0FDZjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLFFBQVEsSUFBSSxHQUFHLENBQUMseUJBQXlCLENBQUMsWUFBWSxNQUFNLENBQUMsRUFBRTtZQUN0SyxPQUFPLEtBQUssQ0FBQTtTQUNmO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLGNBQWMsQ0FBQyxLQUFLLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxjQUFjLENBQUMsS0FBSyxRQUFRLENBQUMsRUFBRTtZQUM1RixPQUFPLEtBQUssQ0FBQTtTQUNmO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUM3SCxPQUFPLEtBQUssQ0FBQTtTQUNmO1FBQ0QsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDOztBQXJDTCwwREFzQ0M7QUFyQ21CLDRDQUFvQixHQUFHLElBQUksa0NBQW9CLEVBQUUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBBcHBsZSBJbmMuIExpY2Vuc2VkIHVuZGVyIE1JVCBMaWNlbnNlLlxuXG5pbXBvcnQgeyBFbnZpcm9ubWVudCwgRW52aXJvbm1lbnRWYWxpZGF0b3IgfSBmcm9tIFwiLi9FbnZpcm9ubWVudFwiXG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tIFwiLi9WYWxpZGF0b3JcIlxuXG4vKipcbiAqIEluZm9ybWF0aW9uIHRoYXQgcmVwcmVzZW50cyB0aGUgY3VzdG9tZXLigJlzIHB1cmNoYXNlIG9mIHRoZSBhcHAsIGNyeXB0b2dyYXBoaWNhbGx5IHNpZ25lZCBieSB0aGUgQXBwIFN0b3JlLlxuICpcbiAqIHtAbGluayBodHRwczovL2RldmVsb3Blci5hcHBsZS5jb20vZG9jdW1lbnRhdGlvbi9zdG9yZWtpdC9hcHB0cmFuc2FjdGlvbiBBcHBUcmFuc2FjdGlvbn1cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBcHBUcmFuc2FjdGlvbiB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VydmVyIGVudmlyb25tZW50IHRoYXQgc2lnbnMgdGhlIGFwcCB0cmFuc2FjdGlvbi5cbiAgICAgKiAgXG4gICAgICoge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLmFwcGxlLmNvbS9kb2N1bWVudGF0aW9uL3N0b3Jla2l0L2FwcHRyYW5zYWN0aW9uLzM5NjM5MDEtZW52aXJvbm1lbnQgZW52aXJvbm1lbnR9XG4gICAgICovXG4gICAgcmVjZWlwdFR5cGU/OiBFbnZpcm9ubWVudFxuICAgIFxuICAgIC8qKlxuICAgICAqIFRoZSB1bmlxdWUgaWRlbnRpZmllciB0aGUgQXBwIFN0b3JlIHVzZXMgdG8gaWRlbnRpZnkgdGhlIGFwcC5cbiAgICAgKiAgXG4gICAgICoge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLmFwcGxlLmNvbS9kb2N1bWVudGF0aW9uL3N0b3Jla2l0L2FwcHRyYW5zYWN0aW9uLzM5NTQ0MzYtYXBwaWQgYXBwSWR9XG4gICAgICovXG4gICAgYXBwQXBwbGVJZD86IG51bWJlclxuICAgIFxuICAgIC8qKlxuICAgICAqIFRoZSBidW5kbGUgaWRlbnRpZmllciB0aGF0IHRoZSBhcHAgdHJhbnNhY3Rpb24gYXBwbGllcyB0by5cbiAgICAgKiAgXG4gICAgICoge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLmFwcGxlLmNvbS9kb2N1bWVudGF0aW9uL3N0b3Jla2l0L2FwcHRyYW5zYWN0aW9uLzM5NTQ0MzktYnVuZGxlaWQgYnVuZGxlSWR9XG4gICAgICovXG4gICAgYnVuZGxlSWQ/OiBzdHJpbmdcbiAgICBcbiAgICAvKipcbiAgICAgKiBUaGUgYXBwIHZlcnNpb24gdGhhdCB0aGUgYXBwIHRyYW5zYWN0aW9uIGFwcGxpZXMgdG8uXG4gICAgICogIFxuICAgICAqIHtAbGluayBodHRwczovL2RldmVsb3Blci5hcHBsZS5jb20vZG9jdW1lbnRhdGlvbi9zdG9yZWtpdC9hcHB0cmFuc2FjdGlvbi8zOTU0NDM3LWFwcHZlcnNpb24gYXBwVmVyc2lvbn1cbiAgICAgKi9cbiAgICBhcHBsaWNhdGlvblZlcnNpb24/OiBzdHJpbmdcbiAgICBcbiAgICAvKipcbiAgICAgKiBUaGUgdmVyc2lvbiBleHRlcm5hbCBpZGVudGlmaWVyIG9mIHRoZSBhcHBcbiAgICAgKiAgXG4gICAgICoge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLmFwcGxlLmNvbS9kb2N1bWVudGF0aW9uL3N0b3Jla2l0L2FwcHRyYW5zYWN0aW9uLzM5NTQ0MzgtYXBwdmVyc2lvbmlkIGFwcFZlcnNpb25JRH1cbiAgICAgKi9cbiAgICB2ZXJzaW9uRXh0ZXJuYWxJZGVudGlmaWVyPzogbnVtYmVyXG4gICAgXG4gICAgLyoqXG4gICAgICogVGhlIGRhdGUgdGhhdCB0aGUgQXBwIFN0b3JlIHNpZ25lZCB0aGUgSldTIGFwcCB0cmFuc2FjdGlvbi5cbiAgICAgKiAgXG4gICAgICoge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLmFwcGxlLmNvbS9kb2N1bWVudGF0aW9uL3N0b3Jla2l0L2FwcHRyYW5zYWN0aW9uLzM5NTQ0NDktc2lnbmVkZGF0ZSBzaWduZWREYXRlfVxuICAgICAqL1xuICAgIHJlY2VpcHRDcmVhdGlvbkRhdGU/OiBudW1iZXJcbiAgICBcbiAgICAvKipcbiAgICAgKiBUaGUgZGF0ZSB0aGUgdXNlciBvcmlnaW5hbGx5IHB1cmNoYXNlZCB0aGUgYXBwIGZyb20gdGhlIEFwcCBTdG9yZS5cbiAgICAgKiAgXG4gICAgICoge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLmFwcGxlLmNvbS9kb2N1bWVudGF0aW9uL3N0b3Jla2l0L2FwcHRyYW5zYWN0aW9uLzM5NTQ0NDgtb3JpZ2luYWxwdXJjaGFzZWRhdGUgb3JpZ2luYWxQdXJjaGFzZURhdGV9XG4gICAgICovXG4gICAgb3JpZ2luYWxQdXJjaGFzZURhdGU/OiBudW1iZXJcbiAgICBcbiAgICAvKipcbiAgICAgKiBUaGUgYXBwIHZlcnNpb24gdGhhdCB0aGUgdXNlciBvcmlnaW5hbGx5IHB1cmNoYXNlZCBmcm9tIHRoZSBBcHAgU3RvcmUuXG4gICAgICogIFxuICAgICAqIHtAbGluayBodHRwczovL2RldmVsb3Blci5hcHBsZS5jb20vZG9jdW1lbnRhdGlvbi9zdG9yZWtpdC9hcHB0cmFuc2FjdGlvbi8zOTU0NDQ3LW9yaWdpbmFsYXBwdmVyc2lvbiBvcmlnaW5hbEFwcFZlcnNpb259XG4gICAgICovXG4gICAgb3JpZ2luYWxBcHBsaWNhdGlvblZlcnNpb24/OiBzdHJpbmdcbiAgICBcbiAgICAvKipcbiAgICBUaGUgQmFzZTY0IGRldmljZSB2ZXJpZmljYXRpb24gdmFsdWUgdG8gdXNlIHRvIHZlcmlmeSB3aGV0aGVyIHRoZSBhcHAgdHJhbnNhY3Rpb24gYmVsb25ncyB0byB0aGUgZGV2aWNlLlxuXG4gICAge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLmFwcGxlLmNvbS9kb2N1bWVudGF0aW9uL3N0b3Jla2l0L2FwcHRyYW5zYWN0aW9uLzM5NTQ0NDEtZGV2aWNldmVyaWZpY2F0aW9uIGRldmljZVZlcmlmaWNhdGlvbn1cbiAgICAqL1xuICAgIGRldmljZVZlcmlmaWNhdGlvbj86IHN0cmluZ1xuICAgIFxuICAgIC8qKlxuICAgICAqIFRoZSBVVUlEIHVzZWQgdG8gY29tcHV0ZSB0aGUgZGV2aWNlIHZlcmlmaWNhdGlvbiB2YWx1ZS5cbiAgICAgKiBcbiAgICAgKiB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2RvY3VtZW50YXRpb24vc3RvcmVraXQvYXBwdHJhbnNhY3Rpb24vMzk1NDQ0Mi1kZXZpY2V2ZXJpZmljYXRpb25ub25jZSBkZXZpY2VWZXJpZmljYXRpb25Ob25jZX1cbiAgICAqL1xuICAgIGRldmljZVZlcmlmaWNhdGlvbk5vbmNlPzogc3RyaW5nXG4gICAgXG4gICAgLyoqXG4gICAgICogVGhlIGRhdGUgdGhlIGN1c3RvbWVyIHBsYWNlZCBhbiBvcmRlciBmb3IgdGhlIGFwcCBiZWZvcmUgaXTigJlzIGF2YWlsYWJsZSBpbiB0aGUgQXBwIFN0b3JlLlxuICAgICAqICBcbiAgICAgKiB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2RvY3VtZW50YXRpb24vc3RvcmVraXQvYXBwdHJhbnNhY3Rpb24vNDAxMzE3NS1wcmVvcmRlcmRhdGUgcHJlb3JkZXJEYXRlfVxuICAgICovXG4gICAgcHJlb3JkZXJEYXRlPzogbnVtYmVyXG59XG5cbmV4cG9ydCBjbGFzcyBBcHBUcmFuc2FjdGlvblZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvcjxBcHBUcmFuc2FjdGlvbj4ge1xuICAgIHN0YXRpYyByZWFkb25seSBlbnZpcm9ubWVudFZhbGlkYXRvciA9IG5ldyBFbnZpcm9ubWVudFZhbGlkYXRvcigpXG4gICAgdmFsaWRhdGUob2JqOiBhbnkpOiBvYmogaXMgQXBwVHJhbnNhY3Rpb24ge1xuICAgICAgICBpZiAoKHR5cGVvZiBvYmpbJ2FwcEFwcGxlSWQnXSAhPT0gJ3VuZGVmaW5lZCcpICYmICEodHlwZW9mIG9ialsnYXBwQXBwbGVJZCddID09PSBcIm51bWJlclwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh0eXBlb2Ygb2JqWydidW5kbGVJZCddICE9PSAndW5kZWZpbmVkJykgJiYgISh0eXBlb2Ygb2JqWydidW5kbGVJZCddID09PSBcInN0cmluZ1wiIHx8IG9ialsnYnVuZGxlSWQnXSBpbnN0YW5jZW9mIFN0cmluZykpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGlmICgodHlwZW9mIG9ialsnYXBwbGljYXRpb25WZXJzaW9uJ10gIT09ICd1bmRlZmluZWQnKSAmJiAhKHR5cGVvZiBvYmpbJ2FwcGxpY2F0aW9uVmVyc2lvbiddID09PSBcInN0cmluZ1wiIHx8IG9ialsnYXBwbGljYXRpb25WZXJzaW9uJ10gaW5zdGFuY2VvZiBTdHJpbmcpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHR5cGVvZiBvYmpbJ3ZlcnNpb25FeHRlcm5hbElkZW50aWZpZXInXSAhPT0gJ3VuZGVmaW5lZCcpICYmICEodHlwZW9mIG9ialsndmVyc2lvbkV4dGVybmFsSWRlbnRpZmllciddID09PSBcIm51bWJlclwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh0eXBlb2Ygb2JqWydyZWNlaXB0Q3JlYXRpb25EYXRlJ10gIT09ICd1bmRlZmluZWQnKSAmJiAhKHR5cGVvZiBvYmpbJ3JlY2VpcHRDcmVhdGlvbkRhdGUnXSA9PT0gXCJudW1iZXJcIikpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGlmICgodHlwZW9mIG9ialsnb3JpZ2luYWxQdXJjaGFzZURhdGUnXSAhPT0gJ3VuZGVmaW5lZCcpICYmICEodHlwZW9mIG9ialsnb3JpZ2luYWxQdXJjaGFzZURhdGUnXSA9PT0gXCJudW1iZXJcIikpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGlmICgodHlwZW9mIG9ialsnb3JpZ2luYWxBcHBsaWNhdGlvblZlcnNpb24nXSAhPT0gJ3VuZGVmaW5lZCcpICYmICEodHlwZW9mIG9ialsnb3JpZ2luYWxBcHBsaWNhdGlvblZlcnNpb24nXSA9PT0gXCJzdHJpbmdcIiB8fCBvYmpbJ29yaWdpbmFsQXBwbGljYXRpb25WZXJzaW9uJ10gaW5zdGFuY2VvZiBTdHJpbmcpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHR5cGVvZiBvYmpbJ2RldmljZVZlcmlmaWNhdGlvbiddICE9PSAndW5kZWZpbmVkJykgJiYgISh0eXBlb2Ygb2JqWydkZXZpY2VWZXJpZmljYXRpb24nXSA9PT0gXCJzdHJpbmdcIiB8fCBvYmpbJ2RldmljZVZlcmlmaWNhdGlvbiddIGluc3RhbmNlb2YgU3RyaW5nKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh0eXBlb2Ygb2JqWydkZXZpY2VWZXJpZmljYXRpb25Ob25jZSddICE9PSAndW5kZWZpbmVkJykgJiYgISh0eXBlb2Ygb2JqWydkZXZpY2VWZXJpZmljYXRpb25Ob25jZSddID09PSBcInN0cmluZ1wiIHx8IG9ialsnZGV2aWNlVmVyaWZpY2F0aW9uTm9uY2UnXSBpbnN0YW5jZW9mIFN0cmluZykpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGlmICgodHlwZW9mIG9ialsncHJlb3JkZXJEYXRlJ10gIT09ICd1bmRlZmluZWQnKSAmJiAhKHR5cGVvZiBvYmpbJ3ByZW9yZGVyRGF0ZSddID09PSBcIm51bWJlclwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh0eXBlb2Ygb2JqWydlbnZpcm9ubWVudCddICE9PSAndW5kZWZpbmVkJykgJiYgIShBcHBUcmFuc2FjdGlvblZhbGlkYXRvci5lbnZpcm9ubWVudFZhbGlkYXRvci52YWxpZGF0ZShvYmpbJ2Vudmlyb25tZW50J10pKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG59Il19