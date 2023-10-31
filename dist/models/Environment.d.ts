import { Validator } from "./Validator";
/**
 * The server environment, either sandbox or production.
 *
 * {@link https://developer.apple.com/documentation/appstoreserverapi/environment environment}
 */
export declare enum Environment {
    SANDBOX = "Sandbox",
    PRODUCTION = "Production"
}
export declare class EnvironmentValidator implements Validator<Environment> {
    validate(obj: any): obj is Environment;
}
