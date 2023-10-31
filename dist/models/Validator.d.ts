export interface Validator<T> {
    validate(obj: any): obj is T;
}
