// from eslint, basic recommended rules
import js from "@eslint/js";
const eslintRecommendedRules = js.configs.recommended.rules;

// from typescript-eslint, parser and plugin for typescript
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
const tsRecommendedRules = tsPlugin.configs.recommended.rules;

// from eslint-config-prettier, rules to override ESLint formatting rules that might conflict with Prettier
import eslintConfigPrettier from "eslint-config-prettier";
const prettierRecommendedRules = eslintConfigPrettier.rules;

// from svelte, parser for svelte
import svelteEslintPlugin from "eslint-plugin-svelte";
import svelteEslintParser from "svelte-eslint-parser";
const svelteRecommendedRules = svelteEslintPlugin.configs.recommended.rules;
const sveltePrettierRules = svelteEslintPlugin.configs.prettier.rules;

// globals package for predefined global variables
// https://github.com/sindresorhus/globals
import globals from "globals";

export default [
	// 4. set default parser to typescript-eslint-parser
	{
		files: ["**/*.js", "**/*.cjs", "**/*.mjs", "**/*.ts", "**/*.svelte"],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				extraFileExtensions: [".svelte"],
				ecmaVersion: 2022,
			},
			sourceType: "module",
			ecmaVersion: 2022,
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
			// add recommended rules from ESLint
			...eslintRecommendedRules,
			// add recommended rules from typescript-eslint
			...tsRecommendedRules,
			...prettierRecommendedRules,
			// add custom rules
			"@typescript-eslint/no-unused-vars": "off",
			"@typescript-eslint/no-inferrable-types": "off",
			"no-inner-declarations": "off",
			"no-undef": "warn",
		},
		ignores: [
			"**/.*",
			"**/.svelte-kit/**",
			"**/.vercel/**",
			"**/build/**",
			"**/package/**",
			"**/yarn.lock",
			"**/package-lock.json",
			"**/pnpm-lock.yaml",
			"**/src/static/**",
		],
	},
	{
		files: ["**/*.svelte"],
		plugins: {
			svelte: svelteEslintPlugin,
		},
		rules: {
			// add recommended rules from svelte/recommended
			...svelteRecommendedRules,
			// add recommended rules from svelte/prettier
			...sveltePrettierRules,
			// add custom rules
			// note: with pug syntax the parser doesn't seem to know when certain refs are used in the template
			"svelte/valid-compile": "warn",
		},
		languageOptions: {
			sourceType: "module",
			ecmaVersion: 2022,
			parser: svelteEslintParser,
			parserOptions: {
				parser: tsParser,
			},
		},
	},
];
