export const STATUS_CODES = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401, // Fixed the typo from UN_AUTHORISED to UNAUTHORIZED
  FORBIDDEN: 403, // Added FORBIDDEN since it's commonly 403
  NOT_FOUND: 404,
  INTERNAL_ERROR: 500,
} as const;

// Define a TypeScript type for the status codes
export type StatusCode = (typeof STATUS_CODES)[keyof typeof STATUS_CODES];

export class AppError extends Error {
  public statusCode: StatusCode;
  public isOperational: boolean;
  public errorStack?: any;
  public logError?: any;

  constructor(
    name: string,
    statusCode: StatusCode,
    description: string,
    isOperational: boolean,
    errorStack?: any,
    logError?: any
  ) {
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

// API-specific Errors
export class APIError extends AppError {
  constructor(
    name: string,
    statusCode: StatusCode = STATUS_CODES.INTERNAL_ERROR,
    description: string = "Internal Server Error",
    isOperational: boolean = true
  ) {
    super(name, statusCode, description, isOperational);
  }
}

// 400 Error - Bad Request
export class BadRequestError extends AppError {
  constructor(description: string = "Bad request", logError?: any) {
    super(
      "Bad Request",
      STATUS_CODES.BAD_REQUEST,
      description,
      true,
      undefined,
      logError
    );
  }
}

// 400 Error - Validation Error
export class ValidationError extends AppError {
  constructor(description: string = "Validation Error", errorStack?: any) {
    super(
      "Validation Error",
      STATUS_CODES.BAD_REQUEST,
      description,
      true,
      errorStack
    );
  }
}
