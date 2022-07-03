import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { catchError, map, Observable, of } from "rxjs";
import { ErrorCode } from "../models/api-error";
import { ApiResponse } from "../models/api-response";

/**
 * RestService<T> catches all errors and returns them within strongly typed ApiResponse<T>. 
 * The calling code should check ApiResponse<T>.hasErrors() instead of catching errors 
 * on Observable<T>.
 * 
 * Example:
 * this._orderService.getAll().subscribe(res => {
 *  if (!res.hasErrors()) {
 *      // deal with res.data : Order[]
 *  else {
 *      this._messageService.showError(res.getErrorsText());
 *  }
 * });
 * 
 * ApiResponse<T> represents any server response.
 */
export class RestService<T extends Object> {
    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json',
        'Accept': 'application/json'})
    };

    constructor(private _http: HttpClient,
                private _url: string,
                private _endpoint: string) {

    }

    /**
     * To fetch all entities of type T.
     * @returns Observable<ApiResponse<T>>
     */
    getAll(): Observable<ApiResponse<T>> {
        return this.mapAndCatchError(
            this._http.get<ApiResponse<T>>(`${this._url}/${this._endpoint}`, 
            this.httpOptions));
    }

    /**
     * To fetch a single T entity without specifying id.
     * @returns Observable<ApiResponse<T>> 
     */
    get(): Observable<ApiResponse<T>> {
        return this.mapAndCatchError(
            this._http.get<ApiResponse<T>>(`${this._url}/${this._endpoint}`, 
            this.httpOptions));
    }

    /**
     * To fetch a T entity by id.
     * @param id 
     * @returns Observable<ApiResponse<T>>
     */
    getById(id: any): Observable<ApiResponse<T>> {
        return this.mapAndCatchError(
            this._http.get<ApiResponse<T>>(`${this._url}/${this._endpoint}/${id}`, 
            this.httpOptions));
    }

    /**
     * To insert an ew T entity in the persistence layer.
     * @param resource 
     * @returns Observable<ApiResponse<number>>
     */
    create(resource: T): Observable<ApiResponse<number>> {
        return this.mapAndCatchError(
            this._http.post<ApiResponse<number>>(`${this._url}/${this._endpoint}`, 
                JSON.stringify(resource), 
                this.httpOptions));
    }

    /**
     * To update a T entity in the persistence layer
     * @param resource 
     * @param id 
     * @returns Observable<ApiResponse<number>>
     */
    update(resource: T, id: any): Observable<ApiResponse<number>> {
        return this.mapAndCatchError(
            this._http.put<ApiResponse<number>>(`${this._url}/${this._endpoint}/${id}`, 
                JSON.stringify(resource), 
                this.httpOptions));
    }

    /**
     * To delete a T entity in the persistence layer.
     * @param resource 
     * @param id 
     * @returns Observable<ApiResponse<number>>
     */
    delete(resource: T, id: any): Observable<ApiResponse<number>> {
        return this.mapAndCatchError(
            this._http.delete<ApiResponse<number>>(`${this._url}/${this._endpoint}/${resource}`, 
                this.httpOptions));
    }

    // **********************************
    // *         COMMON METHODS         *
    // **********************************
    
    /**
     * To make a custom request.
     * @param method 
     * @param url 
     * @param data 
     * @returns Observable<ApiResponse<TData>> 
     */
    makeRequest<TData>(method: string, url: string, data: any) {
        let finalUrl: string = `${url}`;
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

    // **********************************
    // *         PRIVATE METHODS        *
    // **********************************
    
    /**
     * 
     * @param response 
     * @returns 
     */
    private mapAndCatchError<TData>(response: Observable<ApiResponse<TData>>): Observable<ApiResponse<TData>> {
        return response.pipe(
            map((resp: ApiResponse<TData>) => {
                let result = new ApiResponse<TData>();
                Object.assign(result, resp);
                
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

    private objectToQueryString(params: any): string {
        let str = [];
        

        for(let key in params) {
            str.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
        }
  
        return str.join('&');
    }
}
