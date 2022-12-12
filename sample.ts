import { SDModelItem, SDWClient, StableDiffusionProcessingTxt2Img } from "./sdwClient.ts"
import * as pc from "https://deno.land/std@0.160.0/fmt/colors.ts";
import { Base64 } from "https://deno.land/x/bb64@1.1.0/mod.ts";
import { SdwApiCaller } from './SdwApiCaller.ts';
import SDWClientProxy from "./mod.ts";

async function _listSamplers(client: SDWClient): Promise<void> {
    const samplers = await client.sdapi.v1.samplers.$get();
    console.log('Available sampler:')
    for (const sampler of samplers)
        console.log(` - ${pc.green(sampler.name).padEnd(30, ' ')} config File: ${pc.white(JSON.stringify(sampler.options))}`);
}


async function _listCmdFlags(client: SDWClient): Promise<void> {
    const cmdFlags = await client.sdapi.v1["cmd-flags"].$get();
    console.log('cmdFlags models:')
    for (const cmdFlag of Object.keys(cmdFlags))
        console.log(` - ${pc.green(cmdFlag).padEnd(42, ' ')} config File: ${pc.white(JSON.stringify((cmdFlags as any)[cmdFlag]))}`);
}


async function _getActiveModel(client: SDWClient): Promise<SDModelItem | null> {
    let selectHash = '';
    const options = await client.sdapi.v1.options.$get();
    const sd_model_checkpoint = options.sd_model_checkpoint || '';
    const m = sd_model_checkpoint?.match(/(.+) \[([a-f0-9]+)\]/);
    if (m) {
        selectHash = m[2];
        console.log(`sd_model_checkpoint: ${pc.white(m[1])} [${pc.brightMagenta(m[2])}]`);
    }
    const models = await client.sdapi.v1["sd-models"].$get();
    console.log('Available models:')
    let active: SDModelItem | null = null;
    for (const model of models) {
        const selected = (selectHash === model.hash);
        if (selected) {
            active = model;
        }
        const colorize = selected ? pc.green : pc.cyan;
        console.log(` ${selected ? '*' : '-'} ${colorize(model.model_name).padEnd(30, ' ')} [${pc.brightMagenta(model.hash)}] config File: ${pc.white(model.config)}`);
    }
    return active;
}

async function _printQueue(client: SDWClient): Promise<void> {
    const status = await client.queue.status.$get();
    console.log(`status ${status.msg} ${pc.yellow(status.queue_eta.toString())}/${pc.yellow(status.queue_size.toString())}`);
    console.log();

}

if (import.meta.main) {
    const client: SDWClient = SDWClientProxy('http://127.0.0.1:7860');
    await _listSamplers(client);
    await _listCmdFlags(client);
    const _liveModel = await _getActiveModel(client);

    /**
     * use txt2img
     */
    const body: StableDiffusionProcessingTxt2Img = {
        prompt: "a fluffy rabbit with a gun shooting at flying ducks",
        steps: 10,
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
                const fn = `out/${imgId}.${i}.png`;
                Base64.fromBase64String(img.images[i]).toFile(fn);
            }
        }
    }
}