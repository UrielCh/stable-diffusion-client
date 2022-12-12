import { ApiParamsType, ApiRequestable } from "./common.ts";

export class SimpleDiffusionCaller implements ApiRequestable {
    constructor(private base = 'http://127.0.0.1:7860') {
    }
    async doRequest<T>(httpMethod: string, path: string, _pathTemplate: string, params?: ApiParamsType): Promise<T> {
        httpMethod = httpMethod.toUpperCase();

        let url = `${this.base}${path}`;
        const headers: string[][] = [["User-Agent", "Deno SD APi/0.0"], ["Accept", "application/json"]];
        const option: RequestInit = {
            method: httpMethod,
            headers,
        };
        if (typeof (params) === 'object' && Object.keys(params).length > 0) {
            if (httpMethod === 'PUT' || httpMethod === 'POST') {
                // Escape unicode
                const reqBody = JSON
                    .stringify(params)
                    .replace(/[\u0080-\uFFFF]/g, (m) => '\\u' + ('0000' + m.charCodeAt(0).toString(16)).slice(-4));
                headers.push(["Content-Type", "application/json"]);
                headers.push(['Content-Length', reqBody.length.toString()]);
                option.body = reqBody;
            } else {
                url += `?${new URLSearchParams(params).toString()}`;
            }
        }
        // console.log(`doRequest ${httpMethod} ${url}`); // , JSON.stringify(option, null, 2)
        // console.log(`doRequest ${url} params: ${JSON.stringify(params)}`);
        const req = await fetch(url, option);
        const contentType = req.headers.get('content-type');
        if (contentType === 'application/json') {
            const resp = await req.json();
            return resp as Promise<T>;
        }
        throw Error(`return type ${contentType} not implemented yet`)
    }
}
