import * as pc from "https://deno.land/std@0.167.0/fmt/colors.ts";
import { SDHelper, SDModels } from "../mod.ts";
import { showActiveModel } from "./helper.ts";
export const SD_V2 = { hash: '2c02b20a', sd_vae: 'auto' };
export const SD_V2_1 = { hash: '4bdfc29c', sd_vae: 'auto' };
export const Anything3 = { hash: '2700c435', sd_vae: 'Anything-V3.0.vae' };

if (import.meta.main) {
    const SDModel = SD_V2_1;
    const helper = new SDHelper('http://127.0.0.1:7860');

    // const html1 = await helper.getHtml115();
    // console.log(html1.data);
    // const html2 = await helper.getHtml120();
    // console.log(html2.data);

    const models = await showActiveModel(helper);
    if (models.selected?.hash !== SDModel.hash) {
        const expected = models.list.find(a => a.hash === SDModel.hash)
        if (!expected) {
            throw Error(`can not find model ${SDModel.hash}`);
        }
        console.log(`Changing model to ${pc.green(expected.title)} [${pc.brightMagenta(expected.hash)}]`)
        const resp = await helper.changeModels(expected);
        console.log(resp.data.value);
        console.log(resp.data.options);
        console.log({ average_duration: resp.average_duration, duration: resp.duration, is_generating: resp.is_generating });
    }

    const options = await helper.getCurrentOptions();
    if (options.sd_vae != SDModel.sd_vae) {
        const sd_vae_idx = Object.keys(options).indexOf('sd_vae');
        console.log({ sd_vae_idx })
        console.log(`sd_vae is set to ${options.sd_vae} changing it to ${SDModel.sd_vae}`)
        options.sd_vae = SDModel.sd_vae;
        console.log(Object.keys(options)[sd_vae_idx])
        console.log(Object.values(options)[sd_vae_idx])
        const out = await helper.setOptions(options);
        console.log('changes:', out.data.changes)
    }

    /**
     * use txt2img
     */
    const variantes = ['brocolis', 'mushroom', 'pinaple', 'cheese', 'tomatoes']
    const imgId = Date.now().toString().slice(0, -4);
    for (const variante of variantes) {
        const body: SDModels.StableDiffusionProcessingTxt2Img = {
            prompt: `A pizza with ${variante}, delicious, HD`,
            steps: 25,
            batch_size: 1,
            width: 768,
            height: 768,
            cfg_scale: 7,
            sampler_name: "Euler a",
        };
        Deno.mkdirSync('out', { recursive: true });
        for (let k = 0; k < 1; k++) {
            const img = await helper.txt2img(body);
            const fn = `${imgId}-${k}-pizza-${variante}`;
            console.log(`request ${fn} done`);
            console.log(JSON.stringify(img.parameters, undefined, 2));
            await Deno.writeTextFile(`out/${fn}.txt`, `info: ${img.info}\nparams: ${JSON.stringify(img.parameters)}\n`);
            if (img.images) {
                for (let i = 0; i < img.images.length; i++) {
                    const imgName = `out/${fn}.${i}.png`;
                    await Deno.writeFile(imgName, img.images[i]);
                    console.log(`write img to ${pc.green(imgName)}`)
                }
            }
        }
    }
}
