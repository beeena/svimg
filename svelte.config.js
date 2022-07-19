import preprocess from "svelte-preprocess";
import staticAdapter from "@sveltejs/adapter-static";
import imagePreprocessor from "svimg";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    imagePreprocessor({
      inputDir: "static",
      outputDir: "static/g",
      webp: true,
      avif: true
    }),
    preprocess()
  ],

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    adapter: staticAdapter()
  }
};

export default config;
