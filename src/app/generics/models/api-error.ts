export class ApiError {
    code: ErrorCode;
    text: string;
}

export enum ErrorCode {
    UnknownError = 1
} 
