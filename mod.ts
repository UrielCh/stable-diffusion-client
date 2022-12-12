import { ApiRequestable } from './common.ts';
import { buildProxy } from './engine.ts';
import { SdwApiCaller } from './SdwApiCaller.ts';
import { SDWClient } from './sdwClient.ts';

/**
 * 
 * @module
 */

export { type SDWClient } from './sdwClient.ts'
/**
 * END API Models
 */
export function SDWClientProxy(apiEngine: ApiRequestable | string = 'http://127.0.0.1:7860'): SDWClient {
    if (typeof apiEngine === 'string') {
        apiEngine = new SdwApiCaller(apiEngine);
    }
    return buildProxy<SDWClient>(apiEngine);
}
export default SDWClientProxy;


