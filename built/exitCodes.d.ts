/// <reference types="node" />
import { Logger } from './logger';
export declare class IError extends Error {
    code?: number;
    stack?: string;
}
export declare class ProtractorError extends IError {
    static ERR_MSGS: string[];
    static CODE: number;
    static SUPRESS_EXIT_CODE: boolean;
    message: string;
    /**
     * Captures the stack trace to this.stack from the Error.captureStackTrace.
     * this allows us to capture the error of this error object. Note:
     * called with Error set to any to quiet typescript warnings.
     */
    captureStackTrace(): void;
    constructor(logger: Logger, message: string, code: number, error?: Error);
    logError(logger: Logger): void;
    static log(logger: Logger, code: number, message: string, stack: string): void;
}
/**
 * Configuration file error
 */
export declare class ConfigError extends ProtractorError {
    static CODE: number;
    constructor(logger: Logger, message: string, error?: Error);
}
/**
 * Browser errors including getting a driver session, direct connect, etc.
 */
export declare class BrowserError extends ProtractorError {
    static CODE: number;
    static ERR_MSGS: string[];
    constructor(logger: Logger, message: string);
}
export declare class ErrorHandler {
    static isError(errMsgs: string[], e: Error): boolean;
    static parseError(e: Error): number;
}
