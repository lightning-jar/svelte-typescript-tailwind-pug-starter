const prettierPluginSvelte = require("prettier-plugin-svelte");
const prettierPluginPug = require("@prettier/plugin-pug");
const prettierPluginTailwindcss = require("prettier-plugin-tailwindcss");
// const prettierPluginOrganizeImports = require('prettier-plugin-organize-imports');

// @ts-check
/// <reference types="./src/prettier" />
/// <reference types="@prettier/plugin-pug/src/prettier" />

/**
 * @type {import('prettier').Options}
 */
module.exports = {
	plugins: [prettierPluginSvelte, prettierPluginPug, prettierPluginTailwindcss],
	arrowParens: "always",
	bracketSpacing: true,
	htmlWhitespaceSensitivity: "strict",
	printWidth: 80,
	quoteProps: "consistent",
	semi: true,
	singleQuote: false,
	singleAttributePerLine: true,
	tabWidth: 2,
	trailingComma: "all",
	useTabs: true,

	pluginSearchDirs: false,

	// prettier pug plugin options
	// https://prettier.github.io/plugin-pug/guide/pug-specific-options.html
	// https://prettier.github.io/plugin-pug/guide/standard-prettier-overrides.html
	pugArrowParens: "always",
	pugBracketSameLine: "true",
	pugBracketSpacing: "true",
	pugClassLocation: "before-attributes",
	pugClassNotation: "as-is",
	pugEmptyAttributes: "as-is",
	pugExplicitDiv: false,
	pugFramework: "svelte",
	pugIdNotation: "as-is",
	pugSingleFileComponentIndentation: true,
	pugSortAttributes: "asc",
	pugSortAttributesEnd: ["(style)"],
	pugTabWidth: 2,
	pugUseTabs: "true",
	pugWrapAttributesPattern: "(style)",
	pugWrapAttributesThreshold: 1,

	// prettier svelte plugin options
	// https://github.com/sveltejs/prettier-plugin-svelte
	svelteSortOrder: "none",
	svelteStrictMode: true,
	svelteIndentScriptAndStyle: true,
	svelteAllowShorthand: true,
	svelteBracketNewLine: true,
};
