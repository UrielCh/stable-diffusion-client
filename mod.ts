/**
 * Use stable-diffusion-webui from deno
 * 
 * SDHelper contains refactored simple call, `SDHelper.client` give access to all [stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui) API
 * 
 * ```ts 
 * import { SDHelper } from 'https://deno.land/x/stable_diffusion_client/mod.ts';
 * import { * as pc } from 'https://deno.land/std@0.167.0/fmt/colors.ts';
 * 
 * const helper = new SDHelper('http://127.0.0.1:7860');
 * 
 * const { selected, list } = await helper.getModels();
 * console.log(`${list.length} Model available, Selected model is: ${helper.model_name}`);
 * ```
 * 
 * > Do not forget to enable API access by adding `--api` to `COMMANDLINE_ARGS` variable, and `--server-name=0.0.0.0` to allow external access
 * 
 * @module
 */
import type * as SDModels from './src/SDModels.ts';
export { SDModels };
export { SDHelper } from './src/SDHelper.ts';
export { type SDClient } from './src/interface.ts'
export { SDHelper as default } from './src/SDHelper.ts';
