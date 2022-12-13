import * as pc from "https://deno.land/std@0.160.0/fmt/colors.ts";
import { SDClientProxy, SDClient, SDModels, SDHelper } from "../mod.ts";
import { decode } from "https://deno.land/std@0.167.0/encoding/base64.ts";
import { showActiveModel } from './helper.ts';

async function _listSamplers(client: SDClient): Promise<void> {
    const samplers = await client.sdapi.v1.samplers.$get();
    console.log('Available sampler:')
    for (const sampler of samplers)
        console.log(` - ${pc.green(sampler.name).padEnd(30, ' ')} config File: ${pc.white(JSON.stringify(sampler.options))}`);
}

async function _listCmdFlags(client: SDClient): Promise<void> {
    const cmdFlags = await client.sdapi.v1["cmd-flags"].$get();
    console.log('cmdFlags models:')
    for (const [cmdFlag, value] of Object.entries(cmdFlags))
        console.log(` - ${pc.green(cmdFlag).padEnd(42, ' ')} config File: ${pc.white(JSON.stringify(value))}`);
}
async function _printQueue(client: SDClient): Promise<void> {
    const status = await client.queue.status.$get();
    console.log(`status ${status.msg} ${pc.yellow(status.queue_eta.toString())}/${pc.yellow(status.queue_size.toString())}`);
    console.log();

}

if (import.meta.main) {
    const client: SDClient = SDClientProxy('http://127.0.0.1:7860');
    const helper = new SDHelper(client);
    await _listSamplers(client);
    await _listCmdFlags(client);
    const _liveModel = await showActiveModel(helper);

    /**
     * use txt2img
     */
    const body: SDModels.StableDiffusionProcessingTxt2Img = {
        prompt: "a fluffy rabbit with a gun shooting at flying ducks",
        steps: 25,
        batch_size: 1,
        width: 768,
        height: 768,
        cfg_scale: 7,
        sampler_name: "Euler a",
    };
    Deno.mkdirSync('out', { recursive: true });
    for (let k = 0; k < 1; k++) {
        const img = await client.sdapi.v1.txt2img.$post(body);
        const imgId = Date.now();
        console.log(`request ${imgId} done`);
        await Deno.writeTextFile(`out/${imgId}.txt`, `info: ${img.info}\nparams: ${JSON.stringify(img.parameters)}\n`);
        if (img.images) {
            for (let i = 0; i < img.images.length; i++) {
                const base64Image = img.images[i];
                const fn = `out/${imgId}.${i}.png`;
                const byteArray = decode(base64Image)
                await Deno.writeFile(fn, byteArray);
                console.log(`write img to ${pc.green(fn)}`)
            }
        }
    }
}