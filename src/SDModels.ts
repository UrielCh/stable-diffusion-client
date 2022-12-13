/** ArtistItem */
export interface ArtistItem {
  /**
   * Name
   */
  name: string;
  /**
   * Score
   */
  score: number;
  /**
   * Category
   */
  category: string;
}
/** Body_login_login__post */
export interface Body_login_login__post {
  /**
   * Grant Type
   */
  grant_type?: string;
  /**
   * Username
   */
  username: string;
  /**
   * Password
   */
  password: string;
  /**
   * Scope
   * default Value ""
   */
  scope?: string;
  /**
   * Client Id
   */
  client_id?: string;
  /**
   * Client Secret
   */
  client_secret?: string;
}
/** Body_login_login_post */
export interface Body_login_login_post {
  /**
   * Grant Type
   */
  grant_type?: string;
  /**
   * Username
   */
  username: string;
  /**
   * Password
   */
  password: string;
  /**
   * Scope
   * default Value ""
   */
  scope?: string;
  /**
   * Client Id
   */
  client_id?: string;
  /**
   * Client Secret
   */
  client_secret?: string;
}
/** Estimation */
export interface Estimation {
  /**
   * Msg
   * default Value "estimation"
   */
  msg?: string;
  /**
   * Rank
   */
  rank?: number;
  /**
   * Queue Size
   */
  queue_size: number;
  /**
   * Avg Event Process Time
   */
  avg_event_process_time?: number;
  /**
   * Avg Event Concurrent Process Time
   */
  avg_event_concurrent_process_time?: number;
  /**
   * Rank Eta
   */
  rank_eta?: number;
  /**
   * Queue Eta
   */
  queue_eta: number;
}
/** ExtrasBatchImagesRequest */
export interface ExtrasBatchImagesRequest {
  /**
   * Resize Mode
   * Sets the resize mode: 0 to upscale by upscaling_resize amount, 1 to upscale up to upscaling_resize_h x upscaling_resize_w.
   */
  resize_mode?: 0 | 1;
  /**
   * Show results
   * Should the backend return the generated image?
   * default Value true
   */
  show_extras_results?: boolean;
  /**
   * GFPGAN Visibility
   * Sets the visibility of GFPGAN, values should be between 0 and 1.
   * Min Value 0
   * Max Value 1
   * default Value 0
   */
  gfpgan_visibility?: number;
  /**
   * CodeFormer Visibility
   * Sets the visibility of CodeFormer, values should be between 0 and 1.
   * Min Value 0
   * Max Value 1
   * default Value 0
   */
  codeformer_visibility?: number;
  /**
   * CodeFormer Weight
   * Sets the weight of CodeFormer, values should be between 0 and 1.
   * Min Value 0
   * Max Value 1
   * default Value 0
   */
  codeformer_weight?: number;
  /**
   * Upscaling Factor
   * By how much to upscale the image, only used when resize_mode=0.
   * Min Value 1
   * Max Value 4
   * default Value 2
   */
  upscaling_resize?: number;
  /**
   * Target Width
   * Target width for the upscaler to hit. Only used when resize_mode=1.
   * Min Value 1
   */
  upscaling_resize_w?: number;
  /**
   * Target Height
   * Target height for the upscaler to hit. Only used when resize_mode=1.
   * Min Value 1
   */
  upscaling_resize_h?: number;
  /**
   * Crop to fit
   * Should the upscaler crop the image to fit in the choosen size?
   * default Value true
   */
  upscaling_crop?: boolean;
  /**
   * Main upscaler
   * The name of the main upscaler to use, it has to be one of this list: None , Lanczos , Nearest , LDSR , ScuNET GAN , ScuNET PSNR , SwinIR 4x , ESRGAN_4x , R-ESRGAN 4x+ , R-ESRGAN 4x+ Anime6B
   * default Value "None"
   */
  upscaler_1?: string;
  /**
   * Secondary upscaler
   * The name of the secondary upscaler to use, it has to be one of this list: None , Lanczos , Nearest , LDSR , ScuNET GAN , ScuNET PSNR , SwinIR 4x , ESRGAN_4x , R-ESRGAN 4x+ , R-ESRGAN 4x+ Anime6B
   * default Value "None"
   */
  upscaler_2?: string;
  /**
   * Secondary upscaler visibility
   * Sets the visibility of secondary upscaler, values should be between 0 and 1.
   * Min Value 0
   * Max Value 1
   * default Value 0
   */
  extras_upscaler_2_visibility?: number;
  /**
   * Upscale first
   * Should the upscaler run before restoring faces?
   * default Value false
   */
  upscale_first?: boolean;
  /**
   * Images
   * List of images to work on. Must be Base64 strings
   */
  imageList: Array<FileData>;
}
/** ExtrasBatchImagesResponse */
export interface ExtrasBatchImagesResponse {
  /**
   * HTML info
   * A series of HTML tags containing the process info.
   */
  html_info: string;
  /**
   * Images
   * The generated images in base64 format.
   */
  images: string[];
}
/** ExtrasSingleImageRequest */
export interface ExtrasSingleImageRequest {
  /**
   * Resize Mode
   * Sets the resize mode: 0 to upscale by upscaling_resize amount, 1 to upscale up to upscaling_resize_h x upscaling_resize_w.
   */
  resize_mode?: 0 | 1;
  /**
   * Show results
   * Should the backend return the generated image?
   * default Value true
   */
  show_extras_results?: boolean;
  /**
   * GFPGAN Visibility
   * Sets the visibility of GFPGAN, values should be between 0 and 1.
   * Min Value 0
   * Max Value 1
   * default Value 0
   */
  gfpgan_visibility?: number;
  /**
   * CodeFormer Visibility
   * Sets the visibility of CodeFormer, values should be between 0 and 1.
   * Min Value 0
   * Max Value 1
   * default Value 0
   */
  codeformer_visibility?: number;
  /**
   * CodeFormer Weight
   * Sets the weight of CodeFormer, values should be between 0 and 1.
   * Min Value 0
   * Max Value 1
   * default Value 0
   */
  codeformer_weight?: number;
  /**
   * Upscaling Factor
   * By how much to upscale the image, only used when resize_mode=0.
   * Min Value 1
   * Max Value 4
   * default Value 2
   */
  upscaling_resize?: number;
  /**
   * Target Width
   * Target width for the upscaler to hit. Only used when resize_mode=1.
   * Min Value 1
   */
  upscaling_resize_w?: number;
  /**
   * Target Height
   * Target height for the upscaler to hit. Only used when resize_mode=1.
   * Min Value 1
   */
  upscaling_resize_h?: number;
  /**
   * Crop to fit
   * Should the upscaler crop the image to fit in the choosen size?
   * default Value true
   */
  upscaling_crop?: boolean;
  /**
   * Main upscaler
   * The name of the main upscaler to use, it has to be one of this list: None , Lanczos , Nearest , LDSR , ScuNET GAN , ScuNET PSNR , SwinIR 4x , ESRGAN_4x , R-ESRGAN 4x+ , R-ESRGAN 4x+ Anime6B
   * default Value "None"
   */
  upscaler_1?: string;
  /**
   * Secondary upscaler
   * The name of the secondary upscaler to use, it has to be one of this list: None , Lanczos , Nearest , LDSR , ScuNET GAN , ScuNET PSNR , SwinIR 4x , ESRGAN_4x , R-ESRGAN 4x+ , R-ESRGAN 4x+ Anime6B
   * default Value "None"
   */
  upscaler_2?: string;
  /**
   * Secondary upscaler visibility
   * Sets the visibility of secondary upscaler, values should be between 0 and 1.
   * Min Value 0
   * Max Value 1
   * default Value 0
   */
  extras_upscaler_2_visibility?: number;
  /**
   * Upscale first
   * Should the upscaler run before restoring faces?
   * default Value false
   */
  upscale_first?: boolean;
  /**
   * Image
   * Image to work on, must be a Base64 string containing the image's data.
   * default Value ""
   */
  image?: string;
}
/** ExtrasSingleImageResponse */
export interface ExtrasSingleImageResponse {
  /**
   * HTML info
   * A series of HTML tags containing the process info.
   */
  html_info: string;
  /**
   * Image
   * The generated image in base64 format.
   */
  image?: string;
}
/** FaceRestorerItem */
export interface FaceRestorerItem {
  /**
   * Name
   */
  name: string;
  /**
   * Path
   */
  cmd_dir?: string;
}
/** FileData */
export interface FileData {
  /**
   * File data
   * Base64 representation of the file
   */
  data: string;
  /**
   * File name
   */
  name: string;
}
/** Flags */
export interface Flags {
  /**
   * Config
   * path to config which constructs model
   * default Value "[set_fullPath]v1-inference.yaml"
   */
  config?: string;
  /**
   * Ckpt
   * path to checkpoint of stable diffusion model; if specified, this checkpoint will be added to the list of checkpoints and loaded
   * default Value "[set_fullPath]model.ckpt"
   */
  ckpt?: string;
  /**
   * Ckpt Dir
   * Path to directory with stable diffusion checkpoints
   */
  ckpt_dir?: string;
  /**
   * Gfpgan Dir
   * GFPGAN directory
   * default Value "./GFPGAN"
   */
  gfpgan_dir?: string;
  /**
   * Gfpgan Model
   * GFPGAN model file name
   */
  gfpgan_model?: string;
  /**
   * No Half
   * do not switch the model to 16-bit floats
   * default Value false
   */
  no_half?: boolean;
  /**
   * No Half Vae
   * do not switch the VAE model to 16-bit floats
   * default Value false
   */
  no_half_vae?: boolean;
  /**
   * No Progressbar Hiding
   * do not hide progressbar in gradio UI (we hide it because it slows down ML if you have hardware acceleration in browser)
   * default Value false
   */
  no_progressbar_hiding?: boolean;
  /**
   * Max Batch Count
   * maximum batch count value for the UI
   */
  max_batch_count?: number;
  /**
   * Embeddings Dir
   * embeddings directory for textual inversion (default: embeddings)
   * default Value "[set_fullPath]embeddings"
   */
  embeddings_dir?: string;
  /**
   * Hypernetwork Dir
   * hypernetwork directory
   * default Value "[set_fullPath]models\hypernetworks"
   */
  hypernetwork_dir?: string;
  /**
   * Localizations Dir
   * localizations directory
   * default Value "[set_fullPath]localizations"
   */
  localizations_dir?: string;
  /**
   * Allow Code
   * allow custom script execution from webui
   * default Value false
   */
  allow_code?: boolean;
  /**
   * Medvram
   * enable stable diffusion model optimizations for sacrificing a little speed for low VRM usage
   * default Value false
   */
  medvram?: boolean;
  /**
   * Lowvram
   * enable stable diffusion model optimizations for sacrificing a lot of speed for very low VRM usage
   * default Value false
   */
  lowvram?: boolean;
  /**
   * Lowram
   * load stable diffusion checkpoint weights to VRAM instead of RAM
   * default Value false
   */
  lowram?: boolean;
  /**
   * Always Batch Cond Uncond
   * disables cond/uncond batching that is enabled to save memory with --medvram or --lowvram
   * default Value false
   */
  always_batch_cond_uncond?: boolean;
  /**
   * Unload Gfpgan
   * does not do anything.
   * default Value false
   */
  unload_gfpgan?: boolean;
  /**
   * Precision
   * evaluate at this precision
   * default Value "autocast"
   */
  precision?: string;
  /**
   * Share
   * use share=True for gradio and make the UI accessible through their site
   * default Value false
   */
  share?: boolean;
  /**
   * Ngrok
   * ngrok authtoken, alternative to gradio --share
   */
  ngrok?: string;
  /**
   * Ngrok Region
   * The region in which ngrok should start.
   * default Value "us"
   */
  ngrok_region?: string;
  /**
   * Enable Insecure Extension Access
   * enable extensions tab regardless of other options
   * default Value false
   */
  enable_insecure_extension_access?: boolean;
  /**
   * Codeformer Models Path
   * Path to directory with codeformer model file(s).
   * default Value "[set_fullPath]models\Codeformer"
   */
  codeformer_models_path?: string;
  /**
   * Gfpgan Models Path
   * Path to directory with GFPGAN model file(s).
   * default Value "[set_fullPath]models\GFPGAN"
   */
  gfpgan_models_path?: string;
  /**
   * Esrgan Models Path
   * Path to directory with ESRGAN model file(s).
   * default Value "[set_fullPath]models\ESRGAN"
   */
  esrgan_models_path?: string;
  /**
   * Bsrgan Models Path
   * Path to directory with BSRGAN model file(s).
   * default Value "[set_fullPath]models\BSRGAN"
   */
  bsrgan_models_path?: string;
  /**
   * Realesrgan Models Path
   * Path to directory with RealESRGAN model file(s).
   * default Value "[set_fullPath]models\RealESRGAN"
   */
  realesrgan_models_path?: string;
  /**
   * Clip Models Path
   * Path to directory with CLIP model file(s).
   */
  clip_models_path?: string;
  /**
   * Xformers
   * enable xformers for cross attention layers
   * default Value false
   */
  xformers?: boolean;
  /**
   * Force Enable Xformers
   * enable xformers for cross attention layers regardless of whether the checking code thinks you can run it; do not make bug reports if this fails to work
   * default Value false
   */
  force_enable_xformers?: boolean;
  /**
   * Deepdanbooru
   * does not do anything
   * default Value false
   */
  deepdanbooru?: boolean;
  /**
   * Opt Split Attention
   * force-enables Doggettx's cross-attention layer optimization. By default, it's on for torch cuda.
   * default Value false
   */
  opt_split_attention?: boolean;
  /**
   * Opt Split Attention Invokeai
   * force-enables InvokeAI's cross-attention layer optimization. By default, it's on when cuda is unavailable.
   * default Value false
   */
  opt_split_attention_invokeai?: boolean;
  /**
   * Opt Split Attention V1
   * enable older version of split attention optimization that does not consume all the VRAM it can find
   * default Value false
   */
  opt_split_attention_v1?: boolean;
  /**
   * Disable Opt Split Attention
   * force-disables cross-attention layer optimization
   * default Value false
   */
  disable_opt_split_attention?: boolean;
  /**
   * Use Cpu
   * use CPU as torch device for specified modules
   * default Value []
   */
  use_cpu?: string[];
  /**
   * Listen
   * launch gradio with 0.0.0.0 as server name, allowing to respond to network requests
   * default Value false
   */
  listen?: boolean;
  /**
   * Port
   * launch gradio with given server port, you need root/admin rights for ports < 1024, defaults to 7860 if available
   */
  port?: string;
  /**
   * Show Negative Prompt
   * does not do anything
   * default Value false
   */
  show_negative_prompt?: boolean;
  /**
   * Ui Config File
   * filename to use for ui configuration
   * default Value "[set_fullPath]ui-config.json"
   */
  ui_config_file?: string;
  /**
   * Hide Ui Dir Config
   * hide directory configuration from webui
   * default Value false
   */
  hide_ui_dir_config?: boolean;
  /**
   * Freeze Settings
   * disable editing settings
   * default Value false
   */
  freeze_settings?: boolean;
  /**
   * Ui Settings File
   * filename to use for ui settings
   * default Value "[set_fullPath]config.json"
   */
  ui_settings_file?: string;
  /**
   * Gradio Debug
   * launch gradio with --debug option
   * default Value false
   */
  gradio_debug?: boolean;
  /**
   * Gradio Auth
   * set gradio authentication like "username:password"; or comma-delimit multiple like "u1:p1,u2:p2,u3:p3"
   */
  gradio_auth?: string;
  /**
   * Gradio Img2Img Tool
   * gradio image uploader tool: can be either editor for ctopping, or color-sketch for drawing
   * default Value "editor"
   */
  gradio_img2img_tool?: string;
  /**
   * Gradio Inpaint Tool
   * gradio inpainting editor: can be either sketch to only blur/noise the input, or color-sketch to paint over it
   * default Value "sketch"
   */
  gradio_inpaint_tool?: string;
  /**
   * Opt Channelslast
   * change memory type for stable diffusion to channels last
   * default Value false
   */
  opt_channelslast?: boolean;
  /**
   * Styles File
   * filename to use for styles
   * default Value "[set_fullPath]styles.csv"
   */
  styles_file?: string;
  /**
   * Autolaunch
   * open the webui URL in the system's default browser upon launch
   * default Value false
   */
  autolaunch?: boolean;
  /**
   * Theme
   * launches the UI with light or dark theme
   */
  theme?: string;
  /**
   * Use Textbox Seed
   * use textbox for seeds in UI (no up/down, but possible to input long seeds)
   * default Value false
   */
  use_textbox_seed?: boolean;
  /**
   * Disable Console Progressbars
   * do not output progressbars to console
   * default Value false
   */
  disable_console_progressbars?: boolean;
  /**
   * Enable Console Prompts
   * print prompts to console when generating with txt2img and img2img
   * default Value false
   */
  enable_console_prompts?: boolean;
  /**
   * Vae Path
   * Path to Variational Autoencoders model
   */
  vae_path?: string;
  /**
   * Disable Safe Unpickle
   * disable checking pytorch models for malicious code
   * default Value false
   */
  disable_safe_unpickle?: boolean;
  /**
   * Api
   * use api=True to launch the API together with the webui (use --nowebui instead for only the API)
   * default Value false
   */
  api?: boolean;
  /**
   * Api Auth
   * Set authentication for API like "username:password"; or comma-delimit multiple like "u1:p1,u2:p2,u3:p3"
   */
  api_auth?: string;
  /**
   * Nowebui
   * use api=True to launch the API instead of the webui
   * default Value false
   */
  nowebui?: boolean;
  /**
   * Ui Debug Mode
   * Don't load model to quickly launch UI
   * default Value false
   */
  ui_debug_mode?: boolean;
  /**
   * Device Id
   * Select the default CUDA device to use (export CUDA_VISIBLE_DEVICES=0,1,etc might be needed before)
   */
  device_id?: string;
  /**
   * Administrator
   * Administrator rights
   * default Value false
   */
  administrator?: boolean;
  /**
   * Cors Allow Origins
   * Allowed CORS origin(s) in the form of a comma-separated list (no spaces)
   */
  cors_allow_origins?: string;
  /**
   * Cors Allow Origins Regex
   * Allowed CORS origin(s) in the form of a single regular expression
   */
  cors_allow_origins_regex?: string;
  /**
   * Tls Keyfile
   * Partially enables TLS, requires --tls-certfile to fully function
   */
  tls_keyfile?: string;
  /**
   * Tls Certfile
   * Partially enables TLS, requires --tls-keyfile to fully function
   */
  tls_certfile?: string;
  /**
   * Server Name
   * Sets hostname of server
   */
  server_name?: string;
  /**
   * Dreambooth Models Path
   * Path to directory to store Dreambooth model file(s).
   */
  dreambooth_models_path?: string;
  /**
   * Ckptfix
   * (Dreambooth) Enable fix for OOM errors when extracting checkpoints.
   * default Value false
   */
  ckptfix?: boolean;
  /**
   * Ldsr Models Path
   * Path to directory with LDSR model file(s).
   * default Value "[set_fullPath]models\LDSR"
   */
  ldsr_models_path?: string;
  /**
   * Scunet Models Path
   * Path to directory with ScuNET model file(s).
   * default Value "[set_fullPath]models\ScuNET"
   */
  scunet_models_path?: string;
  /**
   * Swinir Models Path
   * Path to directory with SwinIR model file(s).
   * default Value "[set_fullPath]models\SwinIR"
   */
  swinir_models_path?: string;
}
/** HTTPValidationError */
export interface HTTPValidationError {
  /**
   * Detail
   */
  detail?: Array<ValidationError>;
}
/** HypernetworkItem */
export interface HypernetworkItem {
  /**
   * Name
   */
  name: string;
  /**
   * Path
   */
  path?: string;
}
/** ImageToImageResponse */
export interface ImageToImageResponse {
  /**
   * Image
   * The generated image in base64 format.
   */
  images?: string[];
  /**
   * Parameters
   */
  // deno-lint-ignore no-explicit-any
  parameters: any;
  /**
   * Info
   */
  info: string;
}
/** InterrogateRequest */
export interface InterrogateRequest {
  /**
   * Image
   * Image to work on, must be a Base64 string containing the image's data.
   * default Value ""
   */
  image?: string;
  /**
   * Model
   * The interrogate model used.
   * default Value "clip"
   */
  model?: string;
}
/** Options */
export interface Options {
  /**
   * Samples Save
   * Always save all generated images
   * default Value true
   */
  samples_save?: boolean;
  /**
   * Samples Format
   * File format for images
   * default Value "png"
   */
  samples_format?: string;
  /**
   * Samples Filename Pattern
   * Images filename pattern
   * default Value ""
   */
  samples_filename_pattern?: string;
  /**
   * Save Images Add Number
   * Add number to filename when saving
   * default Value true
   */
  save_images_add_number?: boolean;
  /**
   * Grid Save
   * Always save all generated image grids
   * default Value true
   */
  grid_save?: boolean;
  /**
   * Grid Format
   * File format for grids
   * default Value "png"
   */
  grid_format?: string;
  /**
   * Grid Extended Filename
   * Add extended info (seed, prompt) to filename when saving grid
   * default Value false
   */
  grid_extended_filename?: boolean;
  /**
   * Grid Only If Multiple
   * Do not save grids consisting of one picture
   * default Value true
   */
  grid_only_if_multiple?: boolean;
  /**
   * Grid Prevent Empty Spots
   * Prevent empty spots in grid (when set to autodetect)
   * default Value false
   */
  grid_prevent_empty_spots?: boolean;
  /**
   * N Rows
   * Grid row count; use -1 for autodetect and 0 for it to be same as batch size
   * default Value -1
   */
  n_rows?: number;
  /**
   * Enable Pnginfo
   * Save text information about generation parameters as chunks to png files
   * default Value true
   */
  enable_pnginfo?: boolean;
  /**
   * Save Txt
   * Create a text file next to every image with generation parameters.
   * default Value false
   */
  save_txt?: boolean;
  /**
   * Save Images Before Face Restoration
   * Save a copy of image before doing face restoration.
   * default Value false
   */
  save_images_before_face_restoration?: boolean;
  /**
   * Save Images Before Highres Fix
   * Save a copy of image before applying highres fix.
   * default Value false
   */
  save_images_before_highres_fix?: boolean;
  /**
   * Save Images Before Color Correction
   * Save a copy of image before applying color correction to img2img results
   * default Value false
   */
  save_images_before_color_correction?: boolean;
  /**
   * Jpeg Quality
   * Quality for saved jpeg images
   * default Value 80
   */
  jpeg_quality?: number;
  /**
   * Export For 4Chan
   * If PNG image is larger than 4MB or any dimension is larger than 4000, downscale and save copy as JPG
   * default Value true
   */
  export_for_4chan?: boolean;
  /**
   * Use Original Name Batch
   * Use original name for output filename during batch process in extras tab
   * default Value false
   */
  use_original_name_batch?: boolean;
  /**
   * Save Selected Only
   * When using 'Save' button, only save a single selected image
   * default Value true
   */
  save_selected_only?: boolean;
  /**
   * Do Not Add Watermark
   * Do not add watermark to images
   * default Value false
   */
  do_not_add_watermark?: boolean;
  /**
   * Temp Dir
   * Directory for temporary images; leave empty for default
   * default Value ""
   */
  temp_dir?: string;
  /**
   * Clean Temp Dir At Start
   * Cleanup non-default temporary directory when starting webui
   * default Value false
   */
  clean_temp_dir_at_start?: boolean;
  /**
   * Outdir Samples
   * Output directory for images; if empty, defaults to three directories below
   * default Value ""
   */
  outdir_samples?: string;
  /**
   * Outdir Txt2Img Samples
   * Output directory for txt2img images
   * default Value "outputs/txt2img-images"
   */
  outdir_txt2img_samples?: string;
  /**
   * Outdir Img2Img Samples
   * Output directory for img2img images
   * default Value "outputs/img2img-images"
   */
  outdir_img2img_samples?: string;
  /**
   * Outdir Extras Samples
   * Output directory for images from extras tab
   * default Value "outputs/extras-images"
   */
  outdir_extras_samples?: string;
  /**
   * Outdir Grids
   * Output directory for grids; if empty, defaults to two directories below
   * default Value ""
   */
  outdir_grids?: string;
  /**
   * Outdir Txt2Img Grids
   * Output directory for txt2img grids
   * default Value "outputs/txt2img-grids"
   */
  outdir_txt2img_grids?: string;
  /**
   * Outdir Img2Img Grids
   * Output directory for img2img grids
   * default Value "outputs/img2img-grids"
   */
  outdir_img2img_grids?: string;
  /**
   * Outdir Save
   * Directory for saving images using the Save button
   * default Value "log/images"
   */
  outdir_save?: string;
  /**
   * Save To Dirs
   * Save images to a subdirectory
   * default Value false
   */
  save_to_dirs?: boolean;
  /**
   * Grid Save To Dirs
   * Save grids to a subdirectory
   * default Value false
   */
  grid_save_to_dirs?: boolean;
  /**
   * Use Save To Dirs For Ui
   * When using "Save" button, save images to a subdirectory
   * default Value false
   */
  use_save_to_dirs_for_ui?: boolean;
  /**
   * Directories Filename Pattern
   * Directory name pattern
   * default Value ""
   */
  directories_filename_pattern?: string;
  /**
   * Directories Max Prompt Words
   * Max prompt words for [prompt_words] pattern
   * default Value 8
   */
  directories_max_prompt_words?: number;
  /**
   * Esrgan Tile
   * Tile size for ESRGAN upscalers. 0 = no tiling.
   * default Value 192
   */
  ESRGAN_tile?: number;
  /**
   * Esrgan Tile Overlap
   * Tile overlap, in pixels for ESRGAN upscalers. Low values = visible seam.
   * default Value 8
   */
  ESRGAN_tile_overlap?: number;
  /**
   * Realesrgan Enabled Models
   * Select which Real-ESRGAN models to show in the web UI. (Requires restart)
   * default Value ["R-ESRGAN 4x+","R-ESRGAN 4x+ Anime6B"]
   */
  realesrgan_enabled_models?: string[];
  /**
   * Upscaler For Img2Img
   * Upscaler for img2img
   */
  upscaler_for_img2img?: null;
  /**
   * Use Scale Latent For Hires Fix
   * Upscale latent space image when doing hires. fix
   * default Value false
   */
  use_scale_latent_for_hires_fix?: boolean;
  /**
   * Ldsr Steps
   * LDSR processing steps. Lower = faster
   * default Value 100
   */
  ldsr_steps?: number;
  /**
   * Swin Tile
   * Tile size for all SwinIR.
   * default Value 192
   */
  SWIN_tile?: number;
  /**
   * Swin Tile Overlap
   * Tile overlap, in pixels for SwinIR. Low values = visible seam.
   * default Value 8
   */
  SWIN_tile_overlap?: number;
  /**
   * Face Restoration Model
   * Face restoration model
   */
  face_restoration_model?: null;
  /**
   * Code Former Weight
   * CodeFormer weight parameter; 0 = maximum effect; 1 = minimum effect
   * default Value 0.5
   */
  code_former_weight?: number;
  /**
   * Face Restoration Unload
   * Move face restoration model from VRAM into RAM after processing
   * default Value false
   */
  face_restoration_unload?: boolean;
  /**
   * Memmon Poll Rate
   * VRAM usage polls per second during generation. Set to 0 to disable.
   * default Value 8
   */
  memmon_poll_rate?: number;
  /**
   * Samples Log Stdout
   * Always print all generation info to standard output
   * default Value false
   */
  samples_log_stdout?: boolean;
  /**
   * Multiple Tqdm
   * Add a second progress bar to the console that shows progress for an entire job.
   * default Value true
   */
  multiple_tqdm?: boolean;
  /**
   * Unload Models When Training
   * Move VAE and CLIP to RAM when training if possible. Saves VRAM.
   * default Value false
   */
  unload_models_when_training?: boolean;
  /**
   * Pin Memory
   * Turn on pin_memory for DataLoader. Makes training slightly faster but can increase memory usage.
   * default Value false
   */
  pin_memory?: boolean;
  /**
   * Save Optimizer State
   * Saves Optimizer state as separate *.optim file. Training can be resumed with HN itself and matching optim file.
   * default Value false
   */
  save_optimizer_state?: boolean;
  /**
   * Dataset Filename Word Regex
   * Filename word regex
   * default Value ""
   */
  dataset_filename_word_regex?: string;
  /**
   * Dataset Filename Join String
   * Filename join string
   * default Value " "
   */
  dataset_filename_join_string?: string;
  /**
   * Training Image Repeats Per Epoch
   * Number of repeats for a single input image per epoch; used only for displaying epoch number
   * default Value 1
   */
  training_image_repeats_per_epoch?: number;
  /**
   * Training Write Csv Every
   * Save an csv containing the loss to log directory every N steps, 0 to disable
   * default Value 500
   */
  training_write_csv_every?: number;
  /**
   * Training Xattention Optimizations
   * Use cross attention optimizations while training
   * default Value false
   */
  training_xattention_optimizations?: boolean;
  /**
   * Sd Model Checkpoint
   * Stable Diffusion checkpoint
   */
  sd_model_checkpoint?: string;
  /**
   * Sd Checkpoint Cache
   * Checkpoints to cache in RAM
   * default Value 0
   */
  sd_checkpoint_cache?: number;
  /**
   * Sd Vae
   * SD VAE
   * default Value "auto"
   */
  sd_vae?: string;
  /**
   * Sd Vae As Default
   * Ignore selected VAE for stable diffusion checkpoints that have their own .vae.pt next to them
   * default Value false
   */
  sd_vae_as_default?: boolean;
  /**
   * Sd Hypernetwork
   * Hypernetwork
   * default Value "None"
   */
  sd_hypernetwork?: string;
  /**
   * Sd Hypernetwork Strength
   * Hypernetwork strength
   * default Value 1
   */
  sd_hypernetwork_strength?: number;
  /**
   * Inpainting Mask Weight
   * Inpainting conditioning mask strength
   * default Value 1
   */
  inpainting_mask_weight?: number;
  /**
   * Img2Img Color Correction
   * Apply color correction to img2img results to match original colors.
   * default Value false
   */
  img2img_color_correction?: boolean;
  /**
   * Img2Img Fix Steps
   * With img2img, do exactly the amount of steps the slider specifies (normally you'd do less with less denoising).
   * default Value false
   */
  img2img_fix_steps?: boolean;
  /**
   * Enable Quantization
   * Enable quantization in K samplers for sharper and cleaner results. This may change existing seeds. Requires restart to apply.
   * default Value false
   */
  enable_quantization?: boolean;
  /**
   * Enable Emphasis
   * Emphasis: use (text) to make model pay more attention to text and [text] to make it pay less attention
   * default Value true
   */
  enable_emphasis?: boolean;
  /**
   * Use Old Emphasis Implementation
   * Use old emphasis implementation. Can be useful to reproduce old seeds.
   * default Value false
   */
  use_old_emphasis_implementation?: boolean;
  /**
   * Enable Batch Seeds
   * Make K-diffusion samplers produce same images in a batch as when making a single image
   * default Value true
   */
  enable_batch_seeds?: boolean;
  /**
   * Comma Padding Backtrack
   * Increase coherency by padding from the last comma within n tokens when using more than 75 tokens
   * default Value 20
   */
  comma_padding_backtrack?: number;
  /**
   * Filter Nsfw
   * Filter NSFW content
   * default Value false
   */
  filter_nsfw?: boolean;
  /**
   * Clip Stop At Last Layers
   * Clip skip
   * default Value 1
   */
  CLIP_stop_at_last_layers?: number;
  /**
   * Random Artist Categories
   * Allowed categories for random artists selection when using the Roll button
   * default Value []
   */
  random_artist_categories?: string[];
  /**
   * Interrogate Keep Models In Memory
   * Interrogate: keep models in VRAM
   * default Value false
   */
  interrogate_keep_models_in_memory?: boolean;
  /**
   * Interrogate Use Builtin Artists
   * Interrogate: use artists from artists.csv
   * default Value true
   */
  interrogate_use_builtin_artists?: boolean;
  /**
   * Interrogate Return Ranks
   * Interrogate: include ranks of model tags matches in results (Has no effect on caption-based interrogators).
   * default Value false
   */
  interrogate_return_ranks?: boolean;
  /**
   * Interrogate Clip Num Beams
   * Interrogate: num_beams for BLIP
   * default Value 1
   */
  interrogate_clip_num_beams?: number;
  /**
   * Interrogate Clip Min Length
   * Interrogate: minimum description length (excluding artists, etc..)
   * default Value 24
   */
  interrogate_clip_min_length?: number;
  /**
   * Interrogate Clip Max Length
   * Interrogate: maximum description length
   * default Value 48
   */
  interrogate_clip_max_length?: number;
  /**
   * Interrogate Clip Dict Limit
   * CLIP: maximum number of lines in text file (0 = No limit)
   * default Value 1500
   */
  interrogate_clip_dict_limit?: number;
  /**
   * Interrogate Deepbooru Score Threshold
   * Interrogate: deepbooru score threshold
   * default Value 0.5
   */
  interrogate_deepbooru_score_threshold?: number;
  /**
   * Deepbooru Sort Alpha
   * Interrogate: deepbooru sort alphabetically
   * default Value true
   */
  deepbooru_sort_alpha?: boolean;
  /**
   * Deepbooru Use Spaces
   * use spaces for tags in deepbooru
   * default Value false
   */
  deepbooru_use_spaces?: boolean;
  /**
   * Deepbooru Escape
   * escape (\) brackets in deepbooru (so they are used as literal brackets and not for emphasis)
   * default Value true
   */
  deepbooru_escape?: boolean;
  /**
   * Show Progressbar
   * Show progressbar
   * default Value true
   */
  show_progressbar?: boolean;
  /**
   * Show Progress Every N Steps
   * Show image creation progress every N sampling steps. Set to 0 to disable. Set to -1 to show after completion of batch.
   * default Value 0
   */
  show_progress_every_n_steps?: number;
  /**
   * Show Progress Grid
   * Show previews of all images generated in a batch as a grid
   * default Value true
   */
  show_progress_grid?: boolean;
  /**
   * Return Grid
   * Show grid in results for web
   * default Value true
   */
  return_grid?: boolean;
  /**
   * Do Not Show Images
   * Do not show any images in results for web
   * default Value false
   */
  do_not_show_images?: boolean;
  /**
   * Add Model Hash To Info
   * Add model hash to generation information
   * default Value true
   */
  add_model_hash_to_info?: boolean;
  /**
   * Add Model Name To Info
   * Add model name to generation information
   * default Value false
   */
  add_model_name_to_info?: boolean;
  /**
   * Disable Weights Auto Swap
   * When reading generation parameters from text into UI (from PNG info or pasted text), do not change the selected model/checkpoint.
   * default Value false
   */
  disable_weights_auto_swap?: boolean;
  /**
   * Send Seed
   * Send seed when sending prompt or image to other interface
   * default Value true
   */
  send_seed?: boolean;
  /**
   * Font
   * Font for image grids that have text
   * default Value ""
   */
  font?: string;
  /**
   * Js Modal Lightbox
   * Enable full page image viewer
   * default Value true
   */
  js_modal_lightbox?: boolean;
  /**
   * Js Modal Lightbox Initially Zoomed
   * Show images zoomed in by default in full page image viewer
   * default Value true
   */
  js_modal_lightbox_initially_zoomed?: boolean;
  /**
   * Show Progress In Title
   * Show generation progress in window title.
   * default Value true
   */
  show_progress_in_title?: boolean;
  /**
   * Quicksettings
   * Quicksettings list
   * default Value "sd_model_checkpoint"
   */
  quicksettings?: string;
  /**
   * Localization
   * Localization (requires restart)
   * default Value "None"
   */
  localization?: string;
  /**
   * Hide Samplers
   * Hide samplers in user interface (requires restart)
   * default Value []
   */
  hide_samplers?: string[];
  /**
   * Eta Ddim
   * eta (noise multiplier) for DDIM
   * default Value 0
   */
  eta_ddim?: number;
  /**
   * Eta Ancestral
   * eta (noise multiplier) for ancestral samplers
   * default Value 1
   */
  eta_ancestral?: number;
  /**
   * Ddim Discretize
   * img2img DDIM discretize
   * default Value "uniform"
   */
  ddim_discretize?: string;
  /**
   * S Churn
   * sigma churn
   * default Value 0
   */
  s_churn?: number;
  /**
   * S Tmin
   * sigma tmin
   * default Value 0
   */
  s_tmin?: number;
  /**
   * S Noise
   * sigma noise
   * default Value 1
   */
  s_noise?: number;
  /**
   * Eta Noise Seed Delta
   * Eta noise seed delta
   * default Value 0
   */
  eta_noise_seed_delta?: number;
  /**
   * Disabled Extensions
   * Disable those extensions
   * default Value []
   */
  disabled_extensions?: string[];
}
/** PNGInfoRequest */
export interface PNGInfoRequest {
  /**
   * Image
   * The base64 encoded PNG image
   */
  image: string;
}
/** PNGInfoResponse */
export interface PNGInfoResponse {
  /**
   * Image info
   * A string with all the info the image had
   */
  info: string;
}
/** PredictBody */
export interface PredictBody {
  /**
   * Session Hash
   */
  session_hash?: string;
  /**
   * Data
   */
  data: Array<boolean | number | string>;
  /**
   * Fn Index
   */
  fn_index?: number;
  /**
   * Batched
   * default Value false
   */
  batched?: boolean;
}
/** ProgressResponse */
export interface ProgressResponse {
  /**
   * Progress
   * The progress with a range of 0 to 1
   */
  progress: number;
  /**
   * ETA in secs
   */
  eta_relative: number;
  /**
   * State
   * The current state snapshot
   */
  // deno-lint-ignore no-explicit-any
  state: any;
  /**
   * Current image
   * The current image in base64 format. opts.show_progress_every_n_steps is required for this to work.
   */
  current_image?: string;
}
/** PromptStyleItem */
export interface PromptStyleItem {
  /**
   * Name
   */
  name: string;
  /**
   * Prompt
   */
  prompt?: string;
  /**
   * Negative Prompt
   */
  negative_prompt?: string;
}
/** RealesrganItem */
export interface RealesrganItem {
  /**
   * Name
   */
  name: string;
  /**
   * Path
   */
  path?: string;
  /**
   * Scale
   */
  scale?: number;
}
/** ResetBody */
export interface ResetBody {
  /**
   * Session Hash
   */
  session_hash: string;
  /**
   * Fn Index
   */
  fn_index: number;
}
/** SDModelItem */
export interface SDModelItem {
  /**
   * Title
   */
  title: string;
  /**
   * Model Name
   */
  model_name: string;
  /**
   * Hash
   */
  hash: string;
  /**
   * Filename
   */
  filename: string;
  /**
   * Config file
   */
  config: string;
}
/** SamplerItem */
export interface SamplerItem {
  /**
   * Name
   */
  name: string;
  /**
   * Aliases
   */
  aliases: string[];
  /**
   * Options
   */
  // deno-lint-ignore no-explicit-any
  options: any;
}
/** StableDiffusionProcessingImg2Img */
export interface StableDiffusionProcessingImg2Img {
  /**
   * Init Images
   */
  init_images?: string[];
  /**
   * Resize Mode
   */
  resize_mode?: number;
  /**
   * Denoising Strength
   * default Value 0.75
   */
  denoising_strength?: number;
  /**
   * Mask
   */
  mask?: string;
  /**
   * Mask Blur
   */
  mask_blur?: number;
  /**
   * Inpainting Fill
   */
  inpainting_fill?: number;
  /**
   * Inpaint Full Res
   * default Value true
   */
  inpaint_full_res?: boolean;
  /**
   * Inpaint Full Res Padding
   */
  inpaint_full_res_padding?: number;
  /**
   * Inpainting Mask Invert
   */
  inpainting_mask_invert?: number;
  /**
   * Prompt
   * default Value ""
   */
  prompt?: string;
  /**
   * Styles
   */
  styles?: string[];
  /**
   * Seed
   */
  seed?: number;
  /**
   * Subseed
   */
  subseed?: number;
  /**
   * Subseed Strength
   * default Value 0
   */
  subseed_strength?: number;
  /**
   * Seed Resize From H
   */
  seed_resize_from_h?: number;
  /**
   * Seed Resize From W
   */
  seed_resize_from_w?: number;
  /**
   * Sampler Name
   */
  sampler_name?: string;
  /**
   * Batch Size
   */
  batch_size?: number;
  /**
   * N Iter
   */
  n_iter?: number;
  /**
   * Steps
   */
  steps?: number;
  /**
   * Cfg Scale
   * default Value 7
   */
  cfg_scale?: number;
  /**
   * Width
   */
  width?: number;
  /**
   * Height
   */
  height?: number;
  /**
   * Restore Faces
   * default Value false
   */
  restore_faces?: boolean;
  /**
   * Tiling
   * default Value false
   */
  tiling?: boolean;
  /**
   * Negative Prompt
   */
  negative_prompt?: string;
  /**
   * Eta
   */
  eta?: number;
  /**
   * S Churn
   * default Value 0
   */
  s_churn?: number;
  /**
   * S Tmax
   */
  s_tmax?: number;
  /**
   * S Tmin
   * default Value 0
   */
  s_tmin?: number;
  /**
   * S Noise
   * default Value 1
   */
  s_noise?: number;
  /**
   * Override Settings
   */
  // deno-lint-ignore no-explicit-any
  override_settings?: any;
  /**
   * Sampler Index
   * default Value "Euler"
   */
  sampler_index?: string;
  /**
   * Include Init Images
   * default Value false
   */
  include_init_images?: boolean;
}
/** StableDiffusionProcessingTxt2Img */
export interface StableDiffusionProcessingTxt2Img {
  /**
   * Enable Hr
   * default Value false
   */
  enable_hr?: boolean;
  /**
   * Denoising Strength
   * default Value 0
   */
  denoising_strength?: number;
  /**
   * Firstphase Width
   */
  firstphase_width?: number;
  /**
   * Firstphase Height
   */
  firstphase_height?: number;
  /**
   * Prompt
   * default Value ""
   */
  prompt?: string;
  /**
   * Styles
   */
  styles?: string[];
  /**
   * Seed
   */
  seed?: number;
  /**
   * Subseed
   */
  subseed?: number;
  /**
   * Subseed Strength
   * default Value 0
   */
  subseed_strength?: number;
  /**
   * Seed Resize From H
   */
  seed_resize_from_h?: number;
  /**
   * Seed Resize From W
   */
  seed_resize_from_w?: number;
  /**
   * Sampler Name
   */
  sampler_name?: string;
  /**
   * Batch Size
   */
  batch_size?: number;
  /**
   * N Iter
   */
  n_iter?: number;
  /**
   * Steps
   */
  steps?: number;
  /**
   * Cfg Scale
   * default Value 7
   */
  cfg_scale?: number;
  /**
   * Width
   */
  width?: number;
  /**
   * Height
   */
  height?: number;
  /**
   * Restore Faces
   * default Value false
   */
  restore_faces?: boolean;
  /**
   * Tiling
   * default Value false
   */
  tiling?: boolean;
  /**
   * Negative Prompt
   */
  negative_prompt?: string;
  /**
   * Eta
   */
  eta?: number;
  /**
   * S Churn
   * default Value 0
   */
  s_churn?: number;
  /**
   * S Tmax
   */
  s_tmax?: number;
  /**
   * S Tmin
   * default Value 0
   */
  s_tmin?: number;
  /**
   * S Noise
   * default Value 1
   */
  s_noise?: number;
  /**
   * Override Settings
   */
  // deno-lint-ignore no-explicit-any
  override_settings?: any;
  /**
   * Sampler Index
   * default Value "Euler"
   */
  sampler_index?: string;
}
/** TextToImageResponse */
export interface TextToImageResponse {
  /**
   * Image
   * The generated image in base64 format.
   */
  images?: string[];
  /**
   * Parameters
   */
  // deno-lint-ignore no-explicit-any
  parameters: any;
  /**
   * Info
   */
  info: string;
}
/** UpscalerItem */
export interface UpscalerItem {
  /**
   * Name
   */
  name: string;
  /**
   * Model Name
   */
  model_name?: string;
  /**
   * Path
   */
  model_path?: string;
  /**
   * URL
   */
  model_url?: string;
}
/** ValidationError */
export interface ValidationError {
  /**
   * Location
   */
  loc: string[];
  /**
   * Message
   */
  msg: string;
  /**
   * Error Type
   */
  type: string;
}
