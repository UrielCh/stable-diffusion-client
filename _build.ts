import { build, emptyDir } from "https://deno.land/x/dnt@0.32.0/mod.ts";
// check version here: https://www.npmjs.com/package/@u4/chrome-remote-interface
// deno run -A _build.ts 0.4.8; 
// cd npm; npm publish;
if (!Deno.args[0]) {
    console.error('Missing version number')
    Deno.exit(-1);
}

try {
    await emptyDir("./npm");

    await build({
        entryPoints: ["./mod.ts"],
        outDir: "./npm",
        shims: {
            // see JS docs for overview and more options
            deno: true,
            undici: true,
            // timers: true,
            // custom: [
            //     {
            //         package: {
            //             name: "stream/web",
            //         },
            //         globalNames: ["ReadableStream", "TransformStream"],
            //     },
            // ],
        },
        compilerOptions: {
            lib: ["dom", "esnext"],
        },
        package: {
            // package.json properties
            name: "stable-diffusion-client",
            author: "Uriel chemouni <uchemouni@gmail.com>",
            license: "MIT",
            contributors: [
                "Uriel chemouni <uchemouni@gmail.com>",
            ],
            description: "smart stable-diffusion-webui client",
            keywords: [
                "stable-diffusion-webui",
                "deno",
                "typescript",
            ],
            homepage: "https://github.com/UrielCh/stable-diffusion-client",
            version: Deno.args[0],
            repository: {
                type: "git",
                url: "git+https://github.com/UrielCh/stable-diffusion-client.git",
            },
            bugs: {
                url: "http://github.com/UrielCh/stable-diffusion-client/issues",
            },
            "engine-strict": {
                node: ">=14"
            },
        },
    });

    // post build steps
    console.log('extra build steps');
    console.log('cwd:', Deno.cwd());
    Deno.copyFileSync("LICENSE", "npm/LICENSE");

    let readme = Deno.readTextFileSync("README.md");
    readme = readme.replaceAll('https://deno.land/x/stable_diffusion_client/mod.ts', 'stable-diffusion-client');
    readme = readme.replaceAll('https://deno.land/std@0.167.0/fmt/colors.ts', 'picocolors');

    Deno.writeTextFileSync("npm/README.md", readme);
    // Deno.mkdirSync("npm/types/types");
    // const files = Deno.readDirSync("types");
    // for (const file of files) {
    //     if (!file.isFile)
    //         continue;
    //     let text = Deno.readTextFileSync(`types/${file.name}`)
    //     text = text.replace(/.d.ts(["'])/g, "$1");
    //     Deno.writeTextFileSync(`npm/types/types/${file.name}`, text);
    //     console.log(`copy types/${file.name} to npm/types/types/${file.name}`)
    // }
    //Deno.copyFileSync("types", "npm/types");
} catch (e) {
    console.error(e);
}