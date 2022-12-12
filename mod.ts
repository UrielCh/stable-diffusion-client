import { ApiRequestable } from './common.ts';
import { buildProxy } from './engine.ts';
import { SimpleDiffusionCaller } from './SimpleDiffusionCaller.ts';
import { type SDClient } from './interface.ts';
import * as models from './models.ts';
export { models };

/**
 * 
 * ````typescript
 * import {SDClientProxy, type SDClient} from 'sdg_client';
 * ````
 */

export { type SDClient } from './interface.ts'
/**
 * main entry point.
 */
export function SDClientProxy(apiEngine: ApiRequestable | string = 'http://127.0.0.1:7860'): SDClient {
    if (typeof apiEngine === 'string') {
        apiEngine = new SimpleDiffusionCaller(apiEngine);
    }
    return buildProxy<SDClient>(apiEngine);
}
export default SDClientProxy;


