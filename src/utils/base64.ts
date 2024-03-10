import { type Sharp } from "../deps.ts";

/**
 * Converts an image buffer to base64
 *
 * @param {Buffer} image image buffer to convert to base64
 * @param {boolean} raw if true, returns the raw base64 string, if false, returns a data url with the base64 string
 * @returns {Promise<string>} base64 encoded image
 */
export async function toBase64(
  image: Sharp,
  raw: boolean = false
): Promise<string> {
  if (raw) {
    const buffer = await image.raw().toBuffer();
    return buffer.toString("base64");
  }
  const header = "data:image/png;base64,";
  const buffer = await image.png().toBuffer();
  return header + buffer.toString("base64");
}