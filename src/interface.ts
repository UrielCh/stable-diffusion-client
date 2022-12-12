import * as t from './models.ts';

export interface SDClient {
    /**
     * get /
     * Main
     */
    $get(): Promise<string>;
    /**
     * head /
     * Main
     */
    $head(): Promise<string>;
    /* Path: /user */
    user: {
        /**
         * get /user
         * Get Current User
         */
        $get(): Promise<unknown>;
    };
    /* Path: /login_check */
    login_check: {
        /**
         * get /login_check
         * Login Check
         */
        $get(): Promise<unknown>;
    };
    /* Path: /token */
    token: {
        /**
         * get /token
         * Get Token
         */
        $get(): Promise<unknown>;
    };
    /* Path: /app_id */
    app_id: {
        /**
         * get /app_id
         * App Id
         */
        $get(): Promise<unknown>;
    };
    /* Path: /login */
    login: {
        /**
         * post /login
         * Login
         */
        $postx(body: t.Body_login_login_post): Promise<unknown>;
    };
    /* Path: /config */
    config: {
        /**
         * get /config
         * Get Config
         */
        $get(): Promise<unknown>;
    };
    /* Path: /static */
    static: {
        /* Path: /static/{path} */
        "$"(path: string): {
            /**
             * get /static/{path}
             * Static Resource
             */
            $get(): Promise<unknown>;
        };
    };
    /* Path: /assets */
    assets: {
        /* Path: /assets/{path} */
        "$"(path: string): {
            /**
             * get /assets/{path}
             * Build Resource
             */
            $get(): Promise<unknown>;
        };
    };
    /* Path: /file={path} */
    "$file="(path: string): {
        /**
         * get /file={path}
         * File
         */
        $get(): Promise<unknown>;
    };
    /* Path: /file */
    file: {
        /* Path: /file/{path} */
        "$"(path: string): {
            /**
             * get /file/{path}
             * File Deprecated
             */
            $get(): Promise<unknown>;
        };
    };
    /* Path: /reset */
    reset: {
        /**
         * post /reset
         * Reset Iterator
         */
        $post(body: t.ResetBody): Promise<unknown>;
    };
    /* Path: /api */
    api: {
        /* Path: /api/{api_name} */
        "$"(api_name: string): {
            /**
             * post /api/{api_name}
             * Predict
             */
            $post(body: t.PredictBody): Promise<unknown>;
        };
    };
    /* Path: /run */
    run: {
        /* Path: /run/{api_name} */
        "$"(api_name: string): {
            /**
             * post /run/{api_name}
             * Predict
             */
            $post(body: t.PredictBody): Promise<unknown>;
        };
    };
    /* Path: /queue */
    queue: {
        /* Path: /queue/status */
        status: {
            /**
             * get /queue/status
             * Get Queue Status
             */
            $get(): Promise<t.Estimation>;
        };
    };
    /* Path: /startup-events */
    "startup-events": {
        /**
         * get /startup-events
         * Startup Events
         */
        $get(): Promise<unknown>;
    };
    /* Path: /sdapi */
    sdapi: {
        /* Path: /sdapi/v1 */
        v1: {
            /* Path: /sdapi/v1/txt2img */
            txt2img: {
                /**
                 * post /sdapi/v1/txt2img
                 * Text2Imgapi
                 */
                $post(body: t.StableDiffusionProcessingTxt2Img): Promise<t.TextToImageResponse>;
            };
            /* Path: /sdapi/v1/img2img */
            img2img: {
                /**
                 * post /sdapi/v1/img2img
                 * Img2Imgapi
                 */
                $post(body: t.StableDiffusionProcessingImg2Img): Promise<t.ImageToImageResponse>;
            };
            /* Path: /sdapi/v1/extra-single-image */
            "extra-single-image": {
                /**
                 * post /sdapi/v1/extra-single-image
                 * Extras Single Image Api
                 */
                $post(body: t.ExtrasSingleImageRequest): Promise<t.ExtrasSingleImageResponse>;
            };
            /* Path: /sdapi/v1/extra-batch-images */
            "extra-batch-images": {
                /**
                 * post /sdapi/v1/extra-batch-images
                 * Extras Batch Images Api
                 */
                $post(body: t.ExtrasBatchImagesRequest): Promise<t.ExtrasBatchImagesResponse>;
            };
            /* Path: /sdapi/v1/png-info */
            "png-info": {
                /**
                 * post /sdapi/v1/png-info
                 * Pnginfoapi
                 */
                $post(body: t.PNGInfoRequest): Promise<t.PNGInfoResponse>;
            };
            /* Path: /sdapi/v1/progress */
            progress: {
                /**
                 * get /sdapi/v1/progress
                 * Progressapi
                 */
                $get(): Promise<t.ProgressResponse>;
            };
            /* Path: /sdapi/v1/interrogate */
            interrogate: {
                /**
                 * post /sdapi/v1/interrogate
                 * Interrogateapi
                 */
                $post(body: t.InterrogateRequest): Promise<unknown>;
            };
            /* Path: /sdapi/v1/interrupt */
            interrupt: {
                /**
                 * post /sdapi/v1/interrupt
                 * Interruptapi
                 */
                $post(): Promise<unknown>;
            };
            /* Path: /sdapi/v1/skip */
            skip: {
                /**
                 * post /sdapi/v1/skip
                 * Skip
                 */
                $post(): Promise<unknown>;
            };
            /* Path: /sdapi/v1/options */
            options: {
                /**
                 * get /sdapi/v1/options
                 * Get Config
                 */
                $get(): Promise<t.Options>;
                /**
                 * post /sdapi/v1/options
                 * Set Config
                 */
                // deno-lint-ignore no-explicit-any
                $post(body: any): Promise<unknown>;
            };
            /* Path: /sdapi/v1/cmd-flags */
            "cmd-flags": {
                /**
                 * get /sdapi/v1/cmd-flags
                 * Get Cmd Flags
                 */
                $get(): Promise<t.Flags>;
            };
            /* Path: /sdapi/v1/samplers */
            samplers: {
                /**
                 * get /sdapi/v1/samplers
                 * Get Samplers
                 */
                $get(): Promise<Array<t.SamplerItem>>;
            };
            /* Path: /sdapi/v1/upscalers */
            upscalers: {
                /**
                 * get /sdapi/v1/upscalers
                 * Get Upscalers
                 */
                $get(): Promise<Array<t.UpscalerItem>>;
            };
            /* Path: /sdapi/v1/sd-models */
            "sd-models": {
                /**
                 * get /sdapi/v1/sd-models
                 * Get Sd Models
                 */
                $get(): Promise<Array<t.SDModelItem>>;
            };
            /* Path: /sdapi/v1/hypernetworks */
            hypernetworks: {
                /**
                 * get /sdapi/v1/hypernetworks
                 * Get Hypernetworks
                 */
                $get(): Promise<Array<t.HypernetworkItem>>;
            };
            /* Path: /sdapi/v1/face-restorers */
            "face-restorers": {
                /**
                 * get /sdapi/v1/face-restorers
                 * Get Face Restorers
                 */
                $get(): Promise<Array<t.FaceRestorerItem>>;
            };
            /* Path: /sdapi/v1/realesrgan-models */
            "realesrgan-models": {
                /**
                 * get /sdapi/v1/realesrgan-models
                 * Get Realesrgan Models
                 */
                $get(): Promise<Array<t.RealesrganItem>>;
            };
            /* Path: /sdapi/v1/prompt-styles */
            "prompt-styles": {
                /**
                 * get /sdapi/v1/prompt-styles
                 * Get Promp Styles
                 */
                $get(): Promise<Array<t.PromptStyleItem>>;
            };
            /* Path: /sdapi/v1/artist-categories */
            "artist-categories": {
                /**
                 * get /sdapi/v1/artist-categories
                 * Get Artists Categories
                 */
                $get(): Promise<Array<string>>;
            };
            /* Path: /sdapi/v1/artists */
            artists: {
                /**
                 * get /sdapi/v1/artists
                 * Get Artists
                 */
                $get(): Promise<Array<t.ArtistItem>>;
            };
        };
    };
}
