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
	bracketSpacing: true,
	useTabs: true,
	singleQuote: false,
	printWidth: 100,
	semi: true,
	tabWidth: 2,
	quoteProps: "consistent",
	arrowParens: "always",
	trailingComma: "all",
	pluginSearchDirs: false,
	pugTabWidth: 2,
	pugUseTabs: "true",
	pugSortAttributes: "asc",
	pugWrapAttributesPattern: "^(class|style|src)$",
	pugWrapAttributesThreshold: 1,
	pugFramework: "svelte",
	pugEmptyAttributes: "none",
	pugClassNotation: "literal",
	pugIdNotation: "literal",
};
