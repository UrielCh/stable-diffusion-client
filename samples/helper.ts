import * as pc from "https://deno.land/std@0.160.0/fmt/colors.ts";
import { SDModels, SDHelper } from "../mod.ts";

/**
 * list model and hiligth the selected one
 */
export async function showActiveModel(helper: SDHelper): Promise<{ selected: SDModels.SDModelItem | null, list: SDModels.SDModelItem[] }> {
    const { selected, list } = await helper.getModels();
    if (selected)
        console.log(`sd_model_checkpoint: ${pc.white(selected.title)} [${pc.brightMagenta(selected.hash)}]`);
    console.log('Available models:')
    for (const model of list) {
        const colorize = model == selected ? pc.green : pc.cyan;
        console.log(` ${selected ? '*' : '-'} ${colorize(model.model_name).padEnd(30, ' ')} [${pc.brightMagenta(model.hash)}] config File: ${pc.white(model.config)}`);
    }
    return { selected, list };
}
