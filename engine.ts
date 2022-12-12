// deno-lint-ignore-file no-explicit-any
import { ApiParamsType, ApiRequestable } from './common.ts';

/**
 * handler for all proxy level except the root one
 * handle:
 * - Object Field
 * - $()
 * - $getv/$put()/$post()/$delete()
 * - path navigation
 */
const handlerChild: ProxyHandler<GenericProxyApi> = {
    get(target: GenericProxyApi, p: PropertyKey, _receiver: any) {
        if (typeof p === 'symbol') {
            // symbol can not be part of API
            return (target as any)[p];
        }
        const key = p.toString();
        switch (key) {
            case 'toString':
            case 'valueOf':
            case 'toLocaleString':
                return (target as any)[p];
        }
        return commonGet(key, target);
    }
}

/**
 * Common getter part for handlers child
 * - $()
 * - $get()/$put()/$post()/$delete()/$cache()
 * - path navigation
 */
const commonGet = (key: string, target: GenericProxyApi) => {
    if (key.startsWith('$')) {
        // give parameter in path
        if (key === '$') {
            return (id: string | number) => {
                const idStr = encodeURIComponent(String(id));
                const child = new GenericProxyApi(target._apiEngine, `${target._path}/${idStr}`, `${target._model}/*`);
                return new Proxy(child, handlerChild);
            }
        }
        switch (key) {
            case '$get':
            case '$post':
            case '$delete':
            case '$put':
            case '$patch':
            case '$option':
            case '$head':
                {
                    const fnc = (params: ApiParamsType) => {
                        const mtd = key.substring(1);
                        return target._apiEngine.doRequest(mtd, target._path, target._model, params);
                    }
                    return fnc.bind(target._apiEngine);
                }
            default:
                return (id: string | number) => {
                    const idStr = encodeURIComponent(String(id));
                    const prefixKey = key.substring(1);
                    const child = new GenericProxyApi(target._apiEngine, `${target._path}/${prefixKey}${idStr}`, `${target._model}/${prefixKey}*`);
                    return new Proxy(child, handlerChild);
                }
        }
    }
    if (key.startsWith('_'))
        key = key.substring(1);
    const child = new GenericProxyApi(target._apiEngine, `${target._path}/${key}`, `${target._model}/${key}`);
    return new Proxy(child, handlerChild);
}

/**
 * handler for the first level of the proxy
 * handle:
 * - Object Field
 * - EventEmitter Field
 * - flat get/put/post/delete calls
 * - $()
 * - $get()/$put()/$post()/$delete()
 * - path navigation
 */
const handlerRoot: ProxyHandler<GenericProxyApi> = {
    get(target: GenericProxyApi, p: PropertyKey, _receiver: any) {
        if (typeof p === 'symbol') {
            // symbol can not be part of API
            return (target as any)[p];
        }
        const key = p.toString();
        switch (key) {
            // object
            case 'toString':
            case 'valueOf':
            case 'toLocaleString':
                // hasOwnProperty
                // isPrototypeOf
                // propertyIsEnumerable
                // constructor
                return target[p as 'toString' | 'valueOf' | 'toLocaleString'];
            // // EventEmitter if engine implement EventEmitter
            // case 'addListener':
            // case 'on':
            // case 'once':
            // case 'prependListener':
            // case 'prependOnceListener':
            // case 'removeListener':
            // case 'off':
            // case 'removeAllListeners':
            // case 'setMaxListeners':
            // case 'getMaxListeners':
            // case 'listeners':
            // case 'rawListeners':
            // case 'emit':
            // case 'eventNames':
            // case 'listenerCount':
            //     return (target as any)[p as 'addListener' | 'on' | 'once' | 'prependListener' | 'prependOnceListener' | 'removeListener' | 'off' | 'removeAllListeners' | 'setMaxListeners' | 'getMaxListeners' | 'listeners' | 'rawListeners' | 'emit' | 'eventNames' | 'listenerCount'];
            // legacy method only in root level
        }
        return commonGet(key, target);
    }
}

/**
 * For API 2.0 Proxy
 * Data cloned on each Proxy node call
 * maintains full request path for Api calls
 */
class GenericProxyApi {
    public _apiEngine: ApiRequestable;
    public _path: string;
    public _model: string;
    constructor(apiEngine: ApiRequestable, path = '', model = path) {
        this._apiEngine = apiEngine;
        this._path = path;
        this._model = model;
    }
    toString(): string {
        return 'current path:' + this._path
    }
}

/**
 * Build an API proxy, to use as api-client
 * Use internaly only, should be cast by the public API client.
 * 
 * @param apiEngine a requestable object containing the request implementation
 * @param path add a prefix to all path
 */
export function buildProxy<T>(apiEngine: ApiRequestable, path = ''): T {
    return new Proxy(new GenericProxyApi(apiEngine, path), handlerRoot) as T;
}
