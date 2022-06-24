import { T } from "ramda";
import { ApiError } from "@generics/models/api-error";

/* ApiResponse<T> represents any server Response.
Server must have the same structure and return it whatever happens. */
export class ApiResponse<T> {
    data: T;
    errors: ApiError[];

    constructor() {
        this.errors = [];
    }

    getErrorsText(): string {
        return this.errors.map(e => e.text). join(' ');
    }

    hasErrors(): boolean {
        return this.errors.length > 0;
    }
}
