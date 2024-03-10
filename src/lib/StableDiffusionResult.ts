import { decodeBase64, sharp } from "../deps.ts";
import { ApiRawResponse } from "../mod.ts";

/**
 * @class StableDiffusionResult
 * @classdesc Result of a Stable Diffusion image processing API call
 * @param {StableDiffusionApiRawResponse} Raw axios response
 * @property {sharp.Sharp} image - First sharp image from the result list
 * @property {sharp.Sharp[]} images - List of sharp images
 * @property {any} info - Info object
 * @property {any} parameters - Parameters object
 * @property {AxiosApiRawResponse} response - Raw response from the API
 * @example
 * const api = new StableDiffusionApi()
 * const result = await api.txt2img({
 *   prompt: "The brain of a computer",
 * })
 *
 * // Save the first image
 * result.image.toFile("result.png")
 *
 * // Save all images
 * result.images.map((image, i) => {
 *   image.toFile(`result_${i}.png`)
 * })
 */
export default class StableDiffusionResult<PARAMETER, INFO> {
  images: string[] = [];

  // images: sharp.Sharp[] = [];
  info: INFO | {html_info: string};
  parameters: PARAMETER;

  constructor(public data: ApiRawResponse) {
    if (data.image && typeof data.image === "string") {
      this.images.push(data.image);
    }
    if (data.images && Array.isArray(data.images)) {
      for (const image of data.images) {
        this.images.push(image);
      }
    }
    const { info, html_info } = data as {
      info?: string;
      html_info?: string;
    };
    if (info && info.startsWith("{")) {
      this.info = JSON.parse(info);
    } else if (html_info) {
      if (html_info.startsWith("{")) {
        this.info = JSON.parse(html_info);
      } else {
        this.info = { html_info };
      }
    } else {
      this.info = { html_info: "" };
    }
    this.parameters = data.parameters || {};
  }

  public static base64toSharp(base64: string): sharp.Sharp {
    const imageBuffer: Uint8Array = decodeBase64(base64);
    return sharp(imageBuffer);
  }

  public getSharpImage(id: number) {
    if (!this.images[id])
      throw Error(`OutOfBound Error no image id: ${id}, Total images: ${this.images.length}`)
    return StableDiffusionResult.base64toSharp(this.images[id]);
  };

  /**
   * First sharp image from the result list, or undefined if no images
   * @returns {sharp.Sharp} First sharp image from the result list
   */
  // public get image(): sharp.Sharp {
  //   return this.images[0];
  // }
}
