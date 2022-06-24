import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { catchError, map, Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { ErrorCode } from "../models/api-error";
import { ApiResponse } from "../models/api-response";

export class RestService<T> {
    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json',
        'Accept': 'application/json'})
    };

    private _apiEndPoint: string = environment.appRoot;

    constructor(private _url: string,
                private _http: HttpClient) {

    }

    getAll(): Observable<ApiResponse<T>> {
        return this.mapAndCatchError(
            this._http.get<ApiResponse<T>>(`${this._apiEndPoint + this._url}`, 
            this.httpOptions));
    }

    get(id: number): Observable<ApiResponse<T>> {
        return this.mapAndCatchError(
            this._http.get<ApiResponse<T>>(`${this._apiEndPoint + this._url}/${id}`, 
            this.httpOptions));
    }

    add(resource: T): Observable<ApiResponse<number>> {
        return this.mapAndCatchError(
            this._http.post<ApiResponse<number>>(`${this._apiEndPoint + this._url}`, 
                resource, 
                this.httpOptions));
    }

    // update and remove here

    // common method
    makeRequest<TData>(method: string, url: string, data: any) {
        let finalUrl: string = `${this._apiEndPoint + url}`;
        let body: any = null;

        if(method.toUpperCase() == 'GET') {
            finalUrl += '?' + this.objectToQueryString(data);
        } else {
            body = data;
        }

        return this.mapAndCatchError<TData>(
            this._http.request<ApiResponse<TData>>(
                method.toUpperCase(),
                finalUrl,
                { body: body, headers: this.httpOptions.headers })
        );
    }

    // private methods
    private mapAndCatchError<TData>(response: Observable<ApiResponse<TData>>): Observable<ApiResponse<TData>> {
        return response.pipe(
            map((resp: ApiResponse<TData>) => {
                let result = new ApiResponse<TData>();
                Object.assign(result, r);
                
                return result;
            }),
            catchError((err: HttpErrorResponse) => {
                let result = new ApiResponse<TData>();

                // if err.error is not ApiResponse<TData> e.g: connection issue
                if(err.error instanceof ErrorEvent || err.error instanceof ProgressEvent) {
                    result.errors.push({
                        code: ErrorCode.UnknownError,
                        text: 'Unknown Error'
                    });
                } else {
                    Object.assign(result, err.error)
                }

                return of(result);
            })
        );
    } 

    private objectToQueryString(obj: any): string {
        let str = [];

        for(let p in obj) {
            if(obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + '=' = encodeURIComponent(obj[p]));
            }
        }

        return str.join('&');
    }
}
