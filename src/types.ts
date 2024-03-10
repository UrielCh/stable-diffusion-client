import ControlNetUnit from "./lib/ControlNetUnit.ts";
import { Sharp } from "./deps.ts";

export type SamplerName =
  | "Euler a"
  | "Euler"
  | "LMS"
  | "Heun"
  | "DPM2"
  | "DPM2 a"
  | "DPM++ 2S a"
  | "DPM++ 2M"
  | "DPM++ SDE"
  | "DPM fast"
  | "DPM adaptive"
  | "LMS Karras"
  | "DPM2 Karras"
  | "DPM2 a Karras"
  | "DPM++ 2S a Karras"
  | "DPM++ 2M Karras"
  | "DPM++ SDE Karras"
  | "DDIM"
  | "PLMS"
  | "UniPC"
  | string;

export type StableDiffusionApiConfig = {
  /**
   * default is 127.0.0.1
   */
  host?: string;
  /**
   * default is 7860
   */
  port?: number | null;
  /**
   * default is http://127.0.0.1:7860/
   */
  baseUrl?: string | null;
  /**
   * default is 30_000
   */
  timeout?: number;
  /**
   * default is "Euler a""
   */
  defaultSampler?: SamplerName;
  /**
   * default is 20
   */
  defaultStepCount?: number;
  /**
   * default is http
   */
  protocol?: "http" | "https";
};

export type ApiRawResponse = {
  image?: string;
  images?: string[];
  info?: any;
  html_info?: any;
  parameters?: any;
};

// export type AxiosApiRawResponse = AxiosResponse<ApiRawResponse>;

export type UpscalerName =
  | "None"
  | "Lanczos"
  | "Nearest"
  | "LDSR"
  | "BSRGAN"
  | "ESRGAN_4x"
  | "R-ESRGAN General 4xV3"
  | "ScuNET GAN"
  | "ScuNET PSNR"
  | "SwinIR 4x"
  | string;

export type HiResUpscalerName =
  | "None"
  | "Latent"
  | "Latent (antialiased)"
  | "Latent (bicubic)"
  | "Latent (bicubic antialiased)"
  | "Latent (nearist)"
  | "Latent (nearist-exact)"
  | "Lanczos"
  | "Nearest"
  | "ESRGAN_4x"
  | "LDSR"
  | "ScuNET GAN"
  | "ScuNET PSNR"
  | "SwinIR 4x"
  | string;

export type Txt2ImgInfo = {
  prompt: string,
  all_prompts: string[],
  negative_prompt: string,
  all_negative_prompts: string[],
  seed: number,
  all_seeds: number[],
  subseed: number,
  all_subseeds: number[],
  subseed_strength: number,
  width: number,
  height: number,
  sampler_name: SamplerName,
  cfg_scale: number,
  steps: number,
  batch_size: number,
  restore_faces: boolean,
  face_restoration_model: unknown,
  sd_model_name: string; // "sd_xl_base_1.0_0.9vae",
  sd_model_hash: string; // "e6bb9ea85b",
  sd_vae_name: string | null,
  sd_vae_hash: string | null,
  seed_resize_from_w: number,
  seed_resize_from_h: number,
  denoising_strength: number, // [0-1]
  extra_generation_params: Record<string, any>,
  index_of_first_image: number,
  infotexts: string[],
  styles: unknown[],
  job_timestamp: `${number}`, //"20240310114447",
  clip_skip: 1 | 0,
  is_using_inpainting_conditioning: boolean,
  version: string,
}

export type Txt2ImgOptions = {
  /**
   * Enable Hr
   * default: false
   */
  enable_hr?: boolean;
  /**
   * Hr Scale
   * default: 2
   */
  hr_scale?: number;
  hr_upscaler?: HiResUpscalerName;
  hr_second_pass_steps?: number;
  hr_resize_x?: number;
  hr_resize_y?: number;
  denoising_strength?: number;
  firstphase_width?: number;
  firstphase_height?: number;
  prompt: string;
  styles?: string[];
  seed?: number;
  subseed?: number;
  subseed_strength?: number;
  seed_resize_from_h?: number;
  seed_resize_from_w?: number;
  batch_size?: number;
  n_iter?: number;
  steps?: number;
  cfg_scale?: number;
  /** default is 512 */
  width?: number;
  /** default is 512 */
  height?: number;
  restore_faces?: boolean;
  tiling?: boolean;
  do_not_save_samples?: boolean;
  do_not_save_grid?: boolean;
  negative_prompt?: string;
  eta?: number;
  s_churn?: number;
  s_tmax?: number;
  s_tmin?: number;
  s_noise?: number;
  override_settings?: Record<string, unknown>;
  override_settings_restore_afterwards?: boolean;
  script_args?: unknown[];
  script_name?: string;
  send_images?: boolean;
  save_images?: boolean;
  alwayson_scripts?: Record<string, unknown>;
  controlnet_units?: ControlNetUnit[];
  /**
   * Sampler Name
   */
  sampler_name?: SamplerName;
  use_deprecated_controlnet?: boolean;
};

export type Img2ImgOptions = {
  init_images: Sharp[];
  resize_mode?: number;
  denoising_strength?: number;
  image_cfg_scale?: number;
  mask_image?: any;
  mask_blur?: number;
  inpainting_fill?: number;
  inpaint_full_res?: number;
  inpaint_full_res_padding?: number;
  inpainting_mask_invert?: number;
  initial_noise_multiplier?: number;
  prompt?: string;
  styles?: [];
  seed?: number;
  subseed?: number;
  subseed_strength?: number;
  seed_resize_from_h?: number;
  seed_resize_from_w?: number;
  sampler_name?: SamplerName;
  batch_size?: number;
  n_iter?: number;
  steps?: number;
  cfg_scale?: number;
  width?: number;
  height?: number;
  restore_faces?: boolean;
  tiling?: boolean;
  do_not_save_samples?: boolean;
  do_not_save_grid?: boolean;
  negative_prompt?: string;
  eta?: number;
  s_churn?: number;
  s_tmax?: number;
  s_tmin?: number;
  s_noise?: number;
  override_settings?: {};
  override_settings_restore_afterwards?: boolean;
  script_args?: [];
  include_init_images?: boolean;
  script_name?: string;
  send_images?: boolean;
  save_images?: boolean;
  alwayson_scripts?: {};
  controlnet_units?: ControlNetUnit[];
  use_deprecated_controlnet?: boolean;
};

export type ExtraBaseOptions = {
  image: Sharp;
  resize_mode?: number;
  show_extras_results?: boolean;
  gfpgan_visibility?: number;
  codeformer_weight?: number;
  upscaling_resize?: number;
  upscaling_resize_w?: number;
  upscaling_resize_h?: number;
  upscaling_resize_crop?: boolean;
  upscaler_1?: UpscalerName;
  upscaler_2?: UpscalerName;
  extras_upscaler_2_visibility?: number;
  upscale_first?: boolean;
};

export type ExtraSingleOptions = {
  image: Sharp;
} & ExtraBaseOptions;

export type ExtraBatchOptions = {
  images: Sharp[];
  name_list: string[];
} & ExtraBaseOptions;

type ControlNetModule =
  | "none"
  | "canny"
  | "depth"
  | "depth_leres"
  | "hed"
  | "mlsd"
  | "normal_map"
  | "openpose"
  | "openpose_hand"
  | "clip_vision"
  | "color"
  | "pidinet"
  | "scribble"
  | "fake_scribble"
  | "segmentation"
  | "binary"
  | string;

export type ResizeMode = "Inner Fit (Scale to Fit)" |
  "Outer Fit (Shrink to Fit)" |
  "Scale to Fit (Inner Fit)" |
  'Envelope (Outer Fit)'
  ;

/**
 * progress status
 */
export type Progress = {
  /**
   * progress in percent
   */
  progress: number;
  /**
   * expected ETA in second
   */
  eta_relative: number;
  state: {
    skipped: boolean;
    interrupted: boolean;
    stopping_generation: boolean;
    job: string;
    job_count: number;
    job_timestamp: `${number}`;
    job_no: number;
    sampling_step: number;
    sampling_steps: number;
  };
  /**
   * current PNG image as base64
   */
  current_image: string;
  textinfo: string | null;
};

/**
 * sampler definition
 */
export type Sampler = {
  /**
   * named as displayed
   */
  name: string;
  /**
   * alternative names
   */
  aliases: string[];
  /**
   * sampler options
   */
  options: {
    scheduler?: "karras" | "exponential";
    second_order?: "True";
    brownian_noise?: "True";
    uses_ensd?: "True";
    discard_next_to_last_sigma?: "True";
    solver_type?: "heun";
  }
};

export type Upscaler = {
  name: string;
  model_name: string;
  model_path: string;
  model_url: string;
  scale: number;
};

/**
 * model description
 */
export type StableDiffusionModel = {
  /**
   * model title displayed as filename + [hash]
   */
  title: string;
  /**
   * modelname
   */
  model_name: string;
  /**
   * 10 Hex hash
   */
  hash: string;
  /**
   * sha 256
   */
  sha256: string;
  /**
   * full path filename
   */
  filename: string;
  /**
   * full path filename of config yaml
   */
  config: string | null;
};

export type HyperNetwork = {
  name: string;
  path: string;
};

export type FaceRestorer = {
  name: string;
  cmd_dir: string;
};

export type RealESRGanModel = {
  name: string;
  path: string;
  scale: number;
};

export type PromptStyle = {
  name: string;
  prompt: string;
  negative_prompt: string;
};

export type ControlNetUnitConfig = {
  input_image: Sharp;
  mask?: Sharp;
  module: ControlNetModule;
  model?: string;
  weight?: number;
  resize_mode?: ResizeMode;
  lowvram?: boolean;
  processor_res?: number;
  threshold_a?: number;
  threshold_b?: number;
  guidance?: number;
  guidance_start?: number;
  guidance_end?: number;
  control_mode?: ControlMode;
};

export type ControlNetDetectOptions = {
  controlnet_module?: ControlNetModule | string;
  controlnet_input_images: Sharp[];
  controlnet_processor_res?: number;
  controlnet_threshold_a?: number;
  controlnet_threshold_b?: number;
};

export type ControlNetTxt2ImgOptions = {};

export type ControlMode = "Balanced" | "My prompt is more important" | "ControlNet is more important";

export type CmdFlags = {
  f: false,
  update_all_extensions: boolean;
  skip_python_version_check: boolean;
  skip_torch_cuda_test: boolean;
  reinstall_xformers: boolean;
  reinstall_torch: boolean;
  update_check: boolean;
  test_server: boolean;
  log_startup: boolean;
  skip_prepare_environment: boolean;
  skip_install: boolean;
  dump_sysinfo: boolean;
  loglevel: null | unknown,
  do_not_download_clip: boolean;
  data_dir: string;
  config: string;
  ckpt: string;
  ckpt_dir: null | string;
  vae_dir: null | string;
  gfpgan_dir: string;
  gfpgan_model: null | string;
  no_half: boolean;
  no_half_vae: boolean;
  no_progressbar_hiding: boolean;
  max_batch_count: 16,
  embeddings_dir: string;
  textual_inversion_templates_dir: string;
  hypernetwork_dir: string;
  localizations_dir: string;
  allow_code: boolean;
  medvram: boolean;
  medvram_sdxl: boolean;
  lowvram: boolean;
  lowram: boolean;
  always_batch_cond_uncond: boolean;
  unload_gfpgan: boolean;
  precision: "autocast",
  upcast_sampling: boolean;
  share: boolean;
  ngrok: null | unknown,
  ngrok_region: string;
  ngrok_options: Record<string, string>,
  enable_insecure_extension_access: boolean;
  codeformer_models_path: string;
  gfpgan_models_path: string;
  esrgan_models_path: string;
  bsrgan_models_path: string;
  realesrgan_models_path: string;
  dat_models_path: string;
  clip_models_path: null | string;
  xformers: boolean;
  force_enable_xformers: boolean;
  xformers_flash_attention: boolean;
  deepdanbooru: boolean;
  opt_split_attention: boolean;
  opt_sub_quad_attention: boolean;
  sub_quad_q_chunk_size: number;
  sub_quad_kv_chunk_size: null | unknown;
  sub_quad_chunk_threshold: null | unknown;
  opt_split_attention_invokeai: boolean;
  opt_split_attention_v1: boolean;
  opt_sdp_attention: boolean;
  opt_sdp_no_mem_attention: boolean;
  disable_opt_split_attention: boolean;
  disable_nan_check: boolean;
  use_cpu: unknown[];
  use_ipex: boolean;
  disable_model_loading_ram_optimization: boolean;
  listen: boolean;
  port: null | number;
  show_negative_prompt: boolean;
  ui_config_file: string;
  hide_ui_dir_config: boolean;
  freeze_settings: boolean;
  freeze_settings_in_sections: null | unknown;
  freeze_specific_settings: null | unknown;
  ui_settings_file: string;
  gradio_debug: boolean;
  gradio_auth: null | unknown;
  gradio_auth_path: null | string;
  gradio_img2img_tool: null | unknown;
  gradio_inpaint_tool: null | unknown;
  gradio_allowed_path: string[];
  opt_channelslast: boolean;
  styles_file: string[];
  autolaunch: boolean;
  theme: null | string,
  use_textbox_seed: boolean;
  disable_console_progressbars: boolean;
  enable_console_prompts: boolean;
  vae_path: null | string;
  disable_safe_unpickle: boolean;
  api: boolean;
  api_auth: null | unknown;
  api_log: boolean;
  nowebui: boolean;
  ui_debug_mode: boolean;
  device_id: null | string;
  administrator: boolean;
  cors_allow_origins: null | string;
  cors_allow_origins_regex: null | string;
  tls_keyfile: null | string;
  tls_certfile: null | string;
  disable_tls_verify: null | boolean;
  server_name: null | string;
  gradio_queue: boolean;
  no_gradio_queue: boolean;
  skip_version_check: boolean;
  no_hashing: boolean;
  no_download_sd_model: boolean;
  subpath: null | string;
  add_stop_route: boolean;
  api_server_stop: boolean;
  timeout_keep_alive: number;
  disable_all_extensions: boolean;
  disable_extra_extensions: boolean;
  skip_load_model_at_start: boolean;
  ldsr_models_path: string;
  lora_dir: string;
  lyco_dir_backcompat: string;
  scunet_models_path: string;
  swinir_models_path: string;
};

export type SDOption = {
  samples_save: boolean;
  samples_format: "png";
  samples_filename_pattern: string;
  save_images_add_number: boolean;
  save_images_replace_action: string;
  grid_save: boolean;
  grid_format: "png";
  grid_extended_filename: boolean;
  grid_only_if_multiple: boolean;
  grid_prevent_empty_spots: boolean;
  grid_zip_filename_pattern: "";
  n_rows: number;
  font: string;
  grid_text_active_color: string;
  grid_text_inactive_color: string;
  grid_background_color: string;
  save_images_before_face_restoration: boolean;
  save_images_before_highres_fix: boolean;
  save_images_before_color_correction: boolean;
  save_mask: boolean;
  save_mask_composite: boolean;
  jpeg_quality: number,
  webp_lossless: boolean;
  export_for_4chan: boolean;
  img_downscale_threshold: 4,
  target_side_length: 4000,
  img_max_size_mp: 200,
  use_original_name_batch: boolean;
  use_upscaler_name_as_suffix: boolean;
  save_selected_only: boolean;
  save_init_img: boolean;
  temp_dir: "",
  clean_temp_dir_at_start: boolean;
  save_incomplete_images: boolean;
  notification_audio: boolean;
  notification_volume: 100,
  outdir_samples: "",
  outdir_txt2img_samples: string;
  outdir_img2img_samples: string;
  outdir_extras_samples: string;
  outdir_grids: string;
  outdir_txt2img_grids: string;
  outdir_img2img_grids: string;
  outdir_save: string;
  outdir_init_images: string;
  save_to_dirs: boolean;
  grid_save_to_dirs: boolean;
  use_save_to_dirs_for_ui: boolean;
  directories_filename_pattern: "[date]",
  directories_max_prompt_words: 8,
  ESRGAN_tile: 192,
  ESRGAN_tile_overlap: 8,
  realesrgan_enabled_models: string[],
  dat_enabled_models: string[],
  DAT_tile: number,
  DAT_tile_overlap: 8,
  upscaler_for_img2img: null,
  face_restoration: boolean;
  face_restoration_model: string;
  code_former_weight: 0.5,
  face_restoration_unload: boolean;
  auto_launch_browser: "Local",
  enable_console_prompts: boolean;
  show_warnings: boolean;
  show_gradio_deprecation_warnings: boolean;
  memmon_poll_rate: 8,
  samples_log_stdout: boolean;
  multiple_tqdm: boolean;
  enable_upscale_progressbar: boolean;
  print_hypernet_extra: boolean;
  list_hidden_files: boolean;
  disable_mmap_load_safetensors: boolean;
  hide_ldm_prints: boolean;
  dump_stacks_on_signal: boolean;
  api_enable_requests: boolean;
  api_forbid_local_requests: boolean;
  api_useragent: "",
  unload_models_when_training: boolean;
  pin_memory: boolean;
  save_optimizer_state: boolean;
  save_training_settings_to_txt: boolean;
  dataset_filename_word_regex: "",
  dataset_filename_join_string: " ",
  training_image_repeats_per_epoch: 1,
  training_write_csv_every: 500,
  training_xattention_optimizations: boolean;
  training_enable_tensorboard: boolean;
  training_tensorboard_save_images: boolean;
  training_tensorboard_flush_every: 120,
  sd_model_checkpoint: string;
  sd_checkpoints_limit: 1,
  sd_checkpoints_keep_in_cpu: boolean;
  sd_checkpoint_cache: 0,
  sd_unet: "Automatic",
  enable_quantization: boolean;
  emphasis: "Original",
  enable_batch_seeds: boolean;
  comma_padding_backtrack: 20,
  CLIP_stop_at_last_layers: 1,
  upcast_attn: boolean;
  randn_source: "GPU",
  tiling: boolean;
  hires_fix_refiner_pass: "second pass",
  sdxl_crop_top: 0,
  sdxl_crop_left: 0,
  sdxl_refiner_low_aesthetic_score: 2.5,
  sdxl_refiner_high_aesthetic_score: 6,
  sd_vae_explanation: string;
  sd_vae_checkpoint_cache: number,
  sd_vae: string;
  sd_vae_overrides_per_model_preferences: boolean;
  auto_vae_precision_bfloat16: boolean;
  auto_vae_precision: boolean;
  sd_vae_encode_method: "Full",
  sd_vae_decode_method: "Full",
  inpainting_mask_weight: 1,
  initial_noise_multiplier: 1,
  img2img_extra_noise: 0,
  img2img_color_correction: boolean;
  img2img_fix_steps: boolean;
  img2img_background_color: string;
  img2img_editor_height: number,
  img2img_sketch_default_brush_color: string;
  img2img_inpaint_mask_brush_color: string;
  img2img_inpaint_sketch_default_brush_color: string;
  return_mask: boolean;
  return_mask_composite: boolean;
  img2img_batch_show_results_limit: 32,
  overlay_inpaint: boolean;
  cross_attention_optimization: string;
  s_min_uncond: 0,
  token_merging_ratio: 0,
  token_merging_ratio_img2img: 0,
  token_merging_ratio_hr: 0,
  pad_cond_uncond: boolean;
  pad_cond_uncond_v0: boolean;
  persistent_cond_cache: boolean;
  batch_cond_uncond: boolean;
  fp8_storage: "Disable",
  cache_fp16_weight: boolean;
  auto_backcompat: boolean;
  use_old_emphasis_implementation: boolean;
  use_old_karras_scheduler_sigmas: boolean;
  no_dpmpp_sde_batch_determinism: boolean;
  use_old_hires_fix_width_height: boolean;
  dont_fix_second_order_samplers_schedule: boolean;
  hires_fix_use_firstpass_conds: boolean;
  use_old_scheduling: boolean;
  use_downcasted_alpha_bar: boolean;
  interrogate_keep_models_in_memory: boolean;
  interrogate_return_ranks: boolean;
  interrogate_clip_num_beams: 1,
  interrogate_clip_min_length: 24,
  interrogate_clip_max_length: 48,
  interrogate_clip_dict_limit: 1500,
  interrogate_clip_skip_categories: [],
  interrogate_deepbooru_score_threshold: 0.5,
  deepbooru_sort_alpha: boolean;
  deepbooru_use_spaces: boolean;
  deepbooru_escape: boolean;
  deepbooru_filter_tags: "",
  extra_networks_show_hidden_directories: boolean;
  extra_networks_dir_button_function: boolean;
  extra_networks_hidden_models: string;
  extra_networks_default_multiplier: 1,
  extra_networks_card_width: 0,
  extra_networks_card_height: 0,
  extra_networks_card_text_scale: 1,
  extra_networks_card_show_desc: boolean;
  extra_networks_card_description_is_html: boolean;
  extra_networks_card_order_field: string;
  extra_networks_card_order: "Ascending",
  extra_networks_tree_view_default_enabled: boolean;
  extra_networks_add_text_separator: string;
  ui_extra_networks_tab_reorder: string;
  textual_inversion_print_at_load: boolean;
  textual_inversion_add_hashes_to_infotext: boolean;
  sd_hypernetwork: "None",
  keyedit_precision_attention: number,
  keyedit_precision_extra: number,
  keyedit_delimiters: string;
  keyedit_delimiters_whitespace: string[];
  keyedit_move: boolean;
  disable_token_counters: boolean;
  include_styles_into_token_counters: boolean;
  return_grid: boolean;
  do_not_show_images: boolean;
  js_modal_lightbox: boolean;
  js_modal_lightbox_initially_zoomed: boolean;
  js_modal_lightbox_gamepad: boolean;
  js_modal_lightbox_gamepad_repeat: 250,
  sd_webui_modal_lightbox_icon_opacity: 1,
  sd_webui_modal_lightbox_toolbar_opacity: 0.9,
  gallery_height: "",
  open_dir_button_choice: "Subdirectory",
  compact_prompt_box: boolean;
  samplers_in_dropdown: boolean;
  dimensions_and_batch_together: boolean;
  sd_checkpoint_dropdown_use_short: boolean;
  hires_fix_show_sampler: boolean;
  hires_fix_show_prompts: boolean;
  txt2img_settings_accordion: boolean;
  img2img_settings_accordion: boolean;
  interrupt_after_current: boolean;
  localization: "None",
  quicksettings_list: string[];
  ui_tab_order: [],
  hidden_tabs: [],
  ui_reorder_list: [],
  gradio_theme: "Default",
  gradio_themes_cache: boolean;
  show_progress_in_title: boolean;
  send_seed: boolean;
  send_size: boolean;
  infotext_explanation: string;
  enable_pnginfo: boolean;
  save_txt: boolean;
  add_model_name_to_info: boolean;
  add_model_hash_to_info: boolean;
  add_vae_name_to_info: boolean;
  add_vae_hash_to_info: boolean;
  add_user_name_to_info: boolean;
  add_version_to_infotext: boolean;
  disable_weights_auto_swap: boolean;
  infotext_skip_pasting: [],
  infotext_styles: string;
  show_progressbar: boolean;
  live_previews_enable: boolean;
  live_previews_image_format: "png",
  show_progress_grid: boolean;
  show_progress_every_n_steps: 10,
  show_progress_type: string;
  live_preview_allow_lowvram_full: boolean;
  live_preview_content: string;
  live_preview_refresh_period: 1000,
  live_preview_fast_interrupt: boolean;
  js_live_preview_in_modal_lightbox: boolean;
  hide_samplers: [],
  eta_ddim: 0,
  eta_ancestral: 1,
  ddim_discretize: "uniform",
  s_churn: 0,
  s_tmin: 0,
  s_tmax: 0,
  s_noise: 1,
  k_sched_type: "Automatic",
  sigma_min: 0,
  sigma_max: 0,
  rho: 0,
  eta_noise_seed_delta: 0,
  always_discard_next_to_last_sigma: boolean;
  sgm_noise_multiplier: boolean;
  uni_pc_variant: "bh1",
  uni_pc_skip_type: "time_uniform",
  uni_pc_order: 3,
  uni_pc_lower_order_final: boolean;
  sd_noise_schedule: "Default",
  postprocessing_enable_in_main_ui: [],
  postprocessing_operation_order: [],
  upscaling_max_images_in_cache: 5,
  postprocessing_existing_caption_action: "Ignore",
  disabled_extensions: [],
  disable_all_extensions: "none",
  restore_config_state_file: "",
  sd_checkpoint_hash: string;
  sd_lora: "None",
  lora_preferred_name: "Alias from file",
  lora_add_hashes_to_infotext: boolean;
  lora_show_all: boolean;
  lora_hide_unknown_for_versions: [],
  lora_in_memory_limit: 0,
  lora_not_found_warning_console: boolean;
  lora_not_found_gradio_warning: boolean;
  lora_functional: boolean;
  canvas_hotkey_zoom: string;
  canvas_hotkey_adjust: string;
  canvas_hotkey_shrink_brush: string;
  canvas_hotkey_grow_brush: string;
  canvas_hotkey_move: string;
  canvas_hotkey_fullscreen: string;
  canvas_hotkey_reset: string;
  canvas_hotkey_overlap: string;
  canvas_show_tooltip: boolean;
  canvas_auto_expand: boolean;
  canvas_blur_prompt: boolean;
  canvas_disabled_functions: [ "Overlap" ],
  settings_in_ui: string;
  extra_options_txt2img: [],
  extra_options_img2img: [],
  extra_options_cols: 1,
  extra_options_accordion: boolean;
  enable_prompt_comments: boolean;
}