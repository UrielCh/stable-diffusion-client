/**
 * All type that should be sent as parameter to Api calls
 */
// deno-lint-ignore no-explicit-any
export type ApiParamsType = { [key: string]: any; };

/**
 * Common interface used to call API server
 */
export interface ApiRequestable {
    /**
     * Execute a request on the API with promise
     *
     * @param httpMethod: The HTTP method GET POST PUT DELETE
     * @param path: The request final path
     * @param pathTemplate: The request path with {pathParams}
     * @param params: The request parameters (passed as query string or body params)
     */
    doRequest<T>(httpMethod: string, path: string, pathTemplate: string, params?: ApiParamsType): Promise<T>;
}
