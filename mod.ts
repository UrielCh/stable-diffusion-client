import { ApiRequestable } from './common.ts';
import { buildProxy } from './engine.ts';
import { SdwApiCaller } from './SdApiCaller.ts';
import { type SDClient } from './model.ts';

/**
 * 
 * ````typescript
 * import {SDWClientProxy, type SDWClient} from 'sdg_client';
 * ````
 */

export { type SDClient } from './model.ts'
/**
 * main entry point.
 */
export function SDClientProxy(apiEngine: ApiRequestable | string = 'http://127.0.0.1:7860'): SDClient {
    if (typeof apiEngine === 'string') {
        apiEngine = new SdwApiCaller(apiEngine);
    }
    return buildProxy<SDClient>(apiEngine);
}
export default SDClientProxy;


