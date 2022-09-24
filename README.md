# Sveltekit Typescript Tailwind Pug Starter

A starter for launching a Sveltekit / Pug project with Typescript and Tailwind and some other bells and whistles.

## About

This starter was developed for the [Lightning Jar ](URL 'https://lightningjar.com')Lightning Jar team. It's designed to get one up and running quickly on a new project using:

- Sveltekit
- Svelte
- Typescript
- Pug
- TailwindCSS
- Prettier
- ESLint
- Vite
- Playwright

This starter follows many of the defaults of Sveltekit.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Pug

This starter uses the [svelte-preprocess](URL 'https://github.com/sveltejs/svelte-preprocess'). Special syntax is required to write Pug inside Svelte templates. You can learn more [here](URL 'https://github.com/sveltejs/svelte-preprocess/blob/HEAD/docs/preprocessing.md#preprocessors').

## Shortcuts

The following shortcuts and corresponding folders come pre-configured:

- $atoms: path.resolve('./src/lib/components/atoms'),
- $components: path.resolve('./src/lib/components'),
- $functions: path.resolve('./src/lib/functions'),
- $lib: path.resolve('./src/lib'),
- $molecules: path.resolve('./src/lib/components/molecules'),
- $organs: path.resolve('./src/lib/components/organisms'),
- $settings: path.resolve('./src/lib/settings'),
- $stores: path.resolve('./src/lib/stores'),
- $types: path.resolve('./src/lib/types'),
- $utils: path.resolve('./src/lib/utils')

## Strongly Recommended Editor & Extensions

If you are using VSCode, we recommend these extensions:

- [Svelte for VS Code](URL 'https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode')
- [ESLint](URL 'https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint')
- [Prettier ESLint](URL 'https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint')
- [Tailwind CSS Intellisense](URL 'https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss')
- [Playwright Test for VSCode](URL 'https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright')

