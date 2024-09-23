"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = exports.BadRequestError = exports.APIError = exports.AppError = exports.STATUS_CODES = void 0;
exports.STATUS_CODES = {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_ERROR: 500,
};
class AppError extends Error {
    constructor(name, statusCode, description, isOperational, errorStack, logError) {
        super(description);
        // In JavaScript, when extending the
        // Error
        // class (or other built-in classes), the prototype chain might not be correctly set up, leading to issues where methods or properties from the subclass are not accessible. The line
        // Object.setPrototypeOf(this, new.target.prototype);
        // is a workaround to ensure that the instance inherits from the correct prototype, especially when working with inheritance and custom error classes.
        Object.setPrototypeOf(this, new.target.prototype); // Ensure the correct prototype chain
        this.name = name;
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        this.errorStack = errorStack;
        this.logError = logError;
        Error.captureStackTrace(this);
    }
}
exports.AppError = AppError;
// API-specific Errors
class APIError extends AppError {
    constructor(name, statusCode = exports.STATUS_CODES.INTERNAL_ERROR, description = "Internal Server Error", isOperational = true) {
        super(name, statusCode, description, isOperational);
    }
}
exports.APIError = APIError;
// 400 Error - Bad Request
class BadRequestError extends AppError {
    constructor(description = "Bad request", logError) {
        super("Bad Request", exports.STATUS_CODES.BAD_REQUEST, description, true, undefined, logError);
    }
}
exports.BadRequestError = BadRequestError;
// 400 Error - Validation Error
class ValidationError extends AppError {
    constructor(description = "Validation Error", errorStack) {
        super("Validation Error", exports.STATUS_CODES.BAD_REQUEST, description, true, errorStack);
    }
}
exports.ValidationError = ValidationError;
