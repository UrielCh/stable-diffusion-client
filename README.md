# sdw_client


[stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui) is a awesome, and you may want to integrate it right now to your Javascript projects.

stable-diffusion-webui Client writen in Deno first.

## Sample usage

By default stable-diffusion-webui run on localhost port 7860, it that the case you can omit the entry point: 'http://127.0.0.1:7860'

## List available models

```typescript
import {SDWClientProxy, type SDWClient} from 'sdg_client';
import { * as pc} from 'picocolors';

// initialize your client
const client: SDWClient = SDWClientProxy('http://127.0.0.1:7860');
// access the stable-diffusion-webui API

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
for (const model of models) {
  const selected = (selectHash === model.hash);
  const colorize = selected ? pc.green : pc.cyan;
  console.log(` ${selected ? '*' : '-'} ${colorize(model.model_name).padEnd(30, ' ')} [${pc.brightMagenta(model.hash)}] config File: ${pc.white(model.config)}`);
}

```

## Start a txt2img generation

```typescript
import {SDWClientProxy, type SDWClient} from 'sdg_client';
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
            const base64Image = img.images[i];
            const fn = `out/${imgId}.${i}.png`;
            const byteArray = decode(base64Image)
            await Deno.writeFile(fn, byteArray);
            console.log(`write img to ${pc.green(fn)}`)
        }
    }
}
```
