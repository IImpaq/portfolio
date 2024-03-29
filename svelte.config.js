import adapter from "@sveltejs/adapter-node";
import sveltePreprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess(),
		mdsvex({
			extensions: [ ".md" ],
			rehypePlugins: [
				rehypeSlug,
				rehypeAutolinkHeadings
			]
		})
	],
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	},
	extensions: [".svelte", ".md" ]
};

export default config;
