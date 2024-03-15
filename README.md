# stable-diffusion-client

The library has been rewritten from the original library: [sd-api](https://github.com/jaschahuisman/sd-api) with some changes:
- Drop Axios, use fetch
- Drop Buffer usage
- Improve typing
- Lazy image processing
- replace `string-similarity` by `fzf`

[stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui) is awesome, and you may want to integrate it right now into your JavaScript projects.

stable-diffusion-webui Client is written in Deno first.

## Sample usage

By default stable-diffusion-webui run on localhost port 7860, it that the case you can omit the entry point: `http://127.0.0.1:7860`, with a openAPI donc available at `http://127.0.0.1:7860/docs`

API are disabled by default to enable APIs add in COMMANDLINE_ARGS:
- `--api` to enable API access
- `--server-name=0.0.0.0` to access stable-diffusion-webui from a remote host
- `--api-log` to debug incoming request

> set COMMANDLINE_ARGS=--xformers --api --server-name=0.0.0.0

## List available models

```ts
import { StableDiffusionApi } from "https://cdn.jsdelivr.net/gh/UrielCh/stable-diffusion-client@48cfc853f075bdd7144a48238a3f937aeec9c05d/mod.ts";
import { * as pc } from 'https://deno.land/std@0.167.0/fmt/colors.ts';

const SD = new StableDiffusionApi();
const list = await SD.getSdModels();
console.log(`${list.length} Models availables`);
```

## Start a txt2img generation using Helper

```ts
import { StableDiffusionApi } from "https://cdn.jsdelivr.net/gh/UrielCh/stable-diffusion-client@48cfc853f075bdd7144a48238a3f937aeec9c05d/mod.ts";
const SD = new StableDiffusionApi({ timeout: 180_000 });

const helper = new SDHelper('http://127.0.0.1:7860');
const resp = await SD.txt2img({
  prompt:
    "A hyper - realistic GoPro selfie of a smiling glamorous Influencer with a t-rex Dinosaurus. Extreme environment.",
  negative_prompt:
    "sketch, ugly, blur, text, logo, monochrome, bad art, cut off, low contrast, underexposed, overexposed, beginner, amateur",
  width: 1024,
  height: 1024,
  sampler_name: "Euler a",
});
if (resp.images.length) {
  await resp.getSharpImage(0).webp().toFile(`${Date.now()}.webp`);
}
```
