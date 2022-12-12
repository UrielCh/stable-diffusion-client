import { ApiRequestable } from './src/common.ts';
import { buildProxy } from './src/engine.ts';
import { SimpleDiffusionCaller } from './src/SimpleDiffusionCaller.ts';
import { type SDClient } from './src/interface.ts';
import * as models from './src/models.ts';
export { models };

/**
 * 
 * ````typescript
 * import {SDClientProxy, type SDClient} from 'sdg_client';
 * ````
 */

export { type SDClient } from './src/interface.ts'
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


