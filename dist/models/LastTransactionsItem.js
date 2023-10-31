"use strict";
// Copyright (c) 2023 Apple Inc. Licensed under MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.LastTransactionsItemValidator = void 0;
const Status_1 = require("./Status");
class LastTransactionsItemValidator {
    validate(obj) {
        if ((typeof obj['status'] !== 'undefined') && !(LastTransactionsItemValidator.statusValidator.validate(obj['status']))) {
            return false;
        }
        if ((typeof obj['originalTransactionId'] !== 'undefined') && !(typeof obj['originalTransactionId'] === "string" || obj['originalTransactionId'] instanceof String)) {
            return false;
        }
        if ((typeof obj['signedTransactionInfo'] !== 'undefined') && !(typeof obj['signedTransactionInfo'] === "string" || obj['signedTransactionInfo'] instanceof String)) {
            return false;
        }
        if ((typeof obj['signedRenewalInfo'] !== 'undefined') && !(typeof obj['signedRenewalInfo'] === "string" || obj['signedRenewalInfo'] instanceof String)) {
            return false;
        }
        return true;
    }
}
exports.LastTransactionsItemValidator = LastTransactionsItemValidator;
LastTransactionsItemValidator.statusValidator = new Status_1.StatusValidator();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGFzdFRyYW5zYWN0aW9uc0l0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2RlbHMvTGFzdFRyYW5zYWN0aW9uc0l0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDREQUE0RDs7O0FBRTVELHFDQUFrRDtBQXdDbEQsTUFBYSw2QkFBNkI7SUFFdEMsUUFBUSxDQUFDLEdBQVE7UUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLDZCQUE2QixDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNwSCxPQUFPLEtBQUssQ0FBQTtTQUNmO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLHVCQUF1QixDQUFDLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLHVCQUF1QixDQUFDLEtBQUssUUFBUSxJQUFJLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLE1BQU0sQ0FBQyxFQUFFO1lBQ2hLLE9BQU8sS0FBSyxDQUFBO1NBQ2Y7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsdUJBQXVCLENBQUMsS0FBSyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsdUJBQXVCLENBQUMsS0FBSyxRQUFRLElBQUksR0FBRyxDQUFDLHVCQUF1QixDQUFDLFlBQVksTUFBTSxDQUFDLEVBQUU7WUFDaEssT0FBTyxLQUFLLENBQUE7U0FDZjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLFFBQVEsSUFBSSxHQUFHLENBQUMsbUJBQW1CLENBQUMsWUFBWSxNQUFNLENBQUMsRUFBRTtZQUNwSixPQUFPLEtBQUssQ0FBQTtTQUNmO1FBQ0QsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDOztBQWhCTCxzRUFpQkM7QUFoQm1CLDZDQUFlLEdBQUcsSUFBSSx3QkFBZSxFQUFFLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgQXBwbGUgSW5jLiBMaWNlbnNlZCB1bmRlciBNSVQgTGljZW5zZS5cblxuaW1wb3J0IHsgU3RhdHVzLCBTdGF0dXNWYWxpZGF0b3IgfSBmcm9tIFwiLi9TdGF0dXNcIlxuaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSBcIi4vVmFsaWRhdG9yXCJcblxuLyoqXG4gKiBUaGUgbW9zdCByZWNlbnQgQXBwIFN0b3JlLXNpZ25lZCB0cmFuc2FjdGlvbiBpbmZvcm1hdGlvbiBhbmQgQXBwIFN0b3JlLXNpZ25lZCByZW5ld2FsIGluZm9ybWF0aW9uIGZvciBhbiBhdXRvLXJlbmV3YWJsZSBzdWJzY3JpcHRpb24uXG4gKlxuICoge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLmFwcGxlLmNvbS9kb2N1bWVudGF0aW9uL2FwcHN0b3Jlc2VydmVyYXBpL2xhc3R0cmFuc2FjdGlvbnNpdGVtIGxhc3RUcmFuc2FjdGlvbnNJdGVtfVxuICovXG5leHBvcnQgaW50ZXJmYWNlIExhc3RUcmFuc2FjdGlvbnNJdGVtIHtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdGF0dXMgb2YgdGhlIGF1dG8tcmVuZXdhYmxlIHN1YnNjcmlwdGlvbi5cbiAgICAgKlxuICAgICAqIHtAbGluayBodHRwczovL2RldmVsb3Blci5hcHBsZS5jb20vZG9jdW1lbnRhdGlvbi9hcHBzdG9yZXNlcnZlcmFwaS9zdGF0dXMgc3RhdHVzfVxuICAgICAqKi9cbiAgICBzdGF0dXM/OiBTdGF0dXNcbiAgICAgICAgXG4gICAgLyoqXG4gICAgICogVGhlIG9yaWdpbmFsIHRyYW5zYWN0aW9uIGlkZW50aWZpZXIgb2YgYSBwdXJjaGFzZS5cbiAgICAgKlxuICAgICAqIHtAbGluayBodHRwczovL2RldmVsb3Blci5hcHBsZS5jb20vZG9jdW1lbnRhdGlvbi9hcHBzdG9yZXNlcnZlcmFwaS9vcmlnaW5hbHRyYW5zYWN0aW9uaWQgb3JpZ2luYWxUcmFuc2FjdGlvbklkfVxuICAgICAqKi9cbiAgICBvcmlnaW5hbFRyYW5zYWN0aW9uSWQ/OiBzdHJpbmdcbiAgICAgICAgXG4gICAgLyoqXG4gICAgICogVHJhbnNhY3Rpb24gaW5mb3JtYXRpb24gc2lnbmVkIGJ5IHRoZSBBcHAgU3RvcmUsIGluIEpTT04gV2ViIFNpZ25hdHVyZSAoSldTKSBmb3JtYXQuXG4gICAgICpcbiAgICAgKiB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2RvY3VtZW50YXRpb24vYXBwc3RvcmVzZXJ2ZXJhcGkvandzdHJhbnNhY3Rpb24gSldTVHJhbnNhY3Rpb259XG4gICAgICoqL1xuICAgIHNpZ25lZFRyYW5zYWN0aW9uSW5mbz86IHN0cmluZ1xuICAgICAgICBcbiAgICAvKipcbiAgICAgKiBTdWJzY3JpcHRpb24gcmVuZXdhbCBpbmZvcm1hdGlvbiwgc2lnbmVkIGJ5IHRoZSBBcHAgU3RvcmUsIGluIEpTT04gV2ViIFNpZ25hdHVyZSAoSldTKSBmb3JtYXQuXG4gICAgICpcbiAgICAgKiB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2RvY3VtZW50YXRpb24vYXBwc3RvcmVzZXJ2ZXJhcGkvandzcmVuZXdhbGluZm8gSldTUmVuZXdhbEluZm99XG4gICAgICoqL1xuICAgIHNpZ25lZFJlbmV3YWxJbmZvPzogc3RyaW5nXG59XG5cblxuZXhwb3J0IGNsYXNzIExhc3RUcmFuc2FjdGlvbnNJdGVtVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yPExhc3RUcmFuc2FjdGlvbnNJdGVtPiB7XG4gICAgc3RhdGljIHJlYWRvbmx5IHN0YXR1c1ZhbGlkYXRvciA9IG5ldyBTdGF0dXNWYWxpZGF0b3IoKVxuICAgIHZhbGlkYXRlKG9iajogYW55KTogb2JqIGlzIExhc3RUcmFuc2FjdGlvbnNJdGVtIHtcbiAgICAgICAgaWYgKCh0eXBlb2Ygb2JqWydzdGF0dXMnXSAhPT0gJ3VuZGVmaW5lZCcpICYmICEoTGFzdFRyYW5zYWN0aW9uc0l0ZW1WYWxpZGF0b3Iuc3RhdHVzVmFsaWRhdG9yLnZhbGlkYXRlKG9ialsnc3RhdHVzJ10pKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh0eXBlb2Ygb2JqWydvcmlnaW5hbFRyYW5zYWN0aW9uSWQnXSAhPT0gJ3VuZGVmaW5lZCcpICYmICEodHlwZW9mIG9ialsnb3JpZ2luYWxUcmFuc2FjdGlvbklkJ10gPT09IFwic3RyaW5nXCIgfHwgb2JqWydvcmlnaW5hbFRyYW5zYWN0aW9uSWQnXSBpbnN0YW5jZW9mIFN0cmluZykpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGlmICgodHlwZW9mIG9ialsnc2lnbmVkVHJhbnNhY3Rpb25JbmZvJ10gIT09ICd1bmRlZmluZWQnKSAmJiAhKHR5cGVvZiBvYmpbJ3NpZ25lZFRyYW5zYWN0aW9uSW5mbyddID09PSBcInN0cmluZ1wiIHx8IG9ialsnc2lnbmVkVHJhbnNhY3Rpb25JbmZvJ10gaW5zdGFuY2VvZiBTdHJpbmcpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHR5cGVvZiBvYmpbJ3NpZ25lZFJlbmV3YWxJbmZvJ10gIT09ICd1bmRlZmluZWQnKSAmJiAhKHR5cGVvZiBvYmpbJ3NpZ25lZFJlbmV3YWxJbmZvJ10gPT09IFwic3RyaW5nXCIgfHwgb2JqWydzaWduZWRSZW5ld2FsSW5mbyddIGluc3RhbmNlb2YgU3RyaW5nKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG59XG4iXX0=