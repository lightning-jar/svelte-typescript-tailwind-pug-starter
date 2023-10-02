// from eslint, basic recommended rules
import js from "@eslint/js";
const eslintRecommendedRules = js.configs.recommended;

// from typescript-eslint, parser and plugin for typescript
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
// recommended rules from typescript-eslint
// we have to do a bit of string manipulation to replace the plugin name
// so that it can be used with the ESLint "flat config" format
const tsRecommendedRules = {
	rules: tsPlugin.configs.recommended.rules,
};

// from eslint-config-prettier, rules to override ESLint formatting rules that might conflict with Prettier
import eslintConfigPrettier from "eslint-config-prettier"

// from svelte, parser for svelte
import svelteEslintParser from "svelte-eslint-parser";

// globals package for predefined global variables
// https://github.com/sindresorhus/globals
import globals from "globals";

export default [
	// 1. globally ignore files in .svelte-kit directory
	{
		ignores: [".svelte-kit/**/*.js"],
	},
	// 2. add recommended rules from ESLint
	// reference: https://eslint.org/docs/rules/
	eslintRecommendedRules,
	// 3. add recommended rules from typescript-eslint
	tsRecommendedRules,
	// 4. set default parser to typescript-eslint-parser
	{
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				sourceType: "module",
				ecmaVersion: 2022,
				extraFileExtensions: [".svelte"],
				// extraFileExtensions: [".svelte"],
			},
			// enable globals
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2017,
			},
		},
		plugins: {
			"@typescript-eslint": tsPlugin,
		},
		rules: {
			// custom rules added
			"@typescript-eslint/no-unused-vars": "off",
			"@typescript-eslint/no-inferrable-types": "warn",
			"no-inner-declarations": "off",
			"no-undef": "warn",
		},
	},
	// 5. add parser for svelte
	{
		files: ["*.svelte"],
		languageOptions: {
			parser: svelteEslintParser,
			parserOptions: {
				sourceType: "module",
				ecmaVersion: 2022,
				parser: "@typescript-eslint/parser",
			},
		},
	},
	// 6. eslint-config-prettier rules to override ESLint formatting rules that might conflict with Prettier
	eslintConfigPrettier,
];
