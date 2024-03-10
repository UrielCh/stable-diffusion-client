import { StableDiffusionApi } from "./mod.ts";

const SD = new StableDiffusionApi({ timeout: 180_000 });
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
