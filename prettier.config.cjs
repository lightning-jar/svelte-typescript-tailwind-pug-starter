const prettierPluginSvelte = require("prettier-plugin-svelte");
const prettierPluginPug = require("@prettier/plugin-pug");

// @ts-check
/// <reference types="./src/prettier" />
/// <reference types="@prettier/plugin-pug/src/prettier" />

/**
 * @type {import('prettier').Options}
 */
module.exports = {
	plugins: [prettierPluginPug, prettierPluginSvelte],
	overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],

	arrowParens: "always",
	bracketSpacing: true,
	htmlWhitespaceSensitivity: "strict",
	pluginSearchDirs: false,
	printWidth: 80,
	quoteProps: "consistent",
	semi: true,
	singleQuote: false,
	singleAttributePerLine: true,
	tabWidth: 2,
	trailingComma: "all",
	useTabs: true,

	// prettier pug plugin options
	// https://prettier.github.io/plugin-pug/guide/pug-specific-options.html
	// https://prettier.github.io/plugin-pug/guide/standard-prettier-overrides.html
	pugArrowParens: "always",
	pugClassLocation: "before-attributes",
	pugClassNotation: "as-is",
	pugEmptyAttributes: "as-is",
	pugExplicitDiv: false,
	pugFramework: "svelte",
	pugIdNotation: "as-is",
	pugSingleFileComponentIndentation: false,
	pugSortAttributes: "asc",
	pugSortAttributesBeginning: ["(class)"],
	pugTabWidth: 2,
	pugWrapAttributesPattern: "(style)",
	pugWrapAttributesThreshold: 1,

	// prettier svelte plugin options
	// https://github.com/sveltejs/prettier-plugin-svelte
	svelteAllowShorthand: true,
	svelteStrictMode: true,
};
