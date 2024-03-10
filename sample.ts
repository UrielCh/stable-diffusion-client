import { StableDiffusionApi } from "./mod.ts";

const SD = new StableDiffusionApi({ timeout: 180_000 });

export async function generation() {
  try {
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
  } catch (e) {
    console.log("err:", typeof e);
    console.log("err:", e);
  }
}

export async function listModels() {
  const resp = await SD.getSdModels();
  console.log(resp);
}
// await listModels();

export async function getSamplers() {
  const resp = await SD.getSamplers()
  console.log(resp);
}
// await getSamplers();

export async function getPromptStyles() {
  const resp = await SD.getPromptStyles()
  console.log(resp);
}
// await getPromptStyles();

export async function getProgress() {
  const resp = await SD.getProgress()
  console.log(resp);
}
// await getProgress();

export async function getCmdFlags() {
  const resp = await SD.getCmdFlags()
  console.log(resp);
}
// await getCmdFlags();
export async function getCurrentModel() {
  const resp = await SD.getCurrentModel()
  console.log(resp);
}
// await getCurrentModel();
export async function getOptions() {
  const resp = await SD.getOptions();
  console.log(resp);
}
// await getOptions();
