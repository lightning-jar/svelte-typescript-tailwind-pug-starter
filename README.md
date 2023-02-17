# Svelte Typescript Tailwind Pug Starter Template

A starter template to help you quickly launch a new project with Svelte / Sveltekit, Typescript, TailwindCSS, Pug. I call it the "Skinnypug" stack.
&nbsp;

## 0. Contents

1. [About this Template](#1-about-this-template)
2. [Dependencies](#2-dependencies)
3. [Getting Started](#3-getting-started)
4. [About Sveltekit](#4-about-sveltekit)
5. [Using Pug with Svelte](#5-using-pug-with-svelte)
6. [Folder Shortcuts](#6-folder-shortcuts)
7. [Editor & Extensions](#7-editor--extensions)

## 1. About This Template

This starter was developed for the [Lightning Jar](https://lightningjar.com) team. It's designed to get one up and running quickly on a new project using the core technologies Svelte, Sveltekit, Typescript, TailwindCSS, Pug + a few other bells and whistles ( see the full breakdown below).

## 2. Dependencies

### A. Frameworks & Build

- **[Svelte](https://svelte.dev/)** - _component framework_
- **[Sveltekit](https://kit.svelte.dev/)** - _application framework_
- **[Vite](https://vitejs.dev/)** - _front-end build tool_

<!-- * #### Adapters & Plugins
* * [sveltejs/adapter-auto](https://github.com/sveltejs/kit/tree/master/packages/adapter-auto)
* * [svelte-check](https://github.com/sveltejs/language-tools/tree/master/packages/svelte-check)
* * [svelte-preprocess](https://github.com/sveltejs/eslint-plugin-svelte3) -->

### B. Scripting / Typescript

- **[Typescript](https://www.typescriptlang.org/)** - _JS preprocessor_
- **[tslib](https://github.com/Microsoft/tslib)** - _TS runtime library_

### C. Templating / Pug

- **[Pug](https://pugjs.org/api/getting-started.html)** - _HTML template engine_

### D. CSS / TailwindCSS

- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - _CSS vendor prefixing_
- **[PostCSS](https://postcss.org/)** - _CSS transformations_
- **[TailwindCSS](https://tailwindcss.com/)** - _CSS framework_

- #### Tailwind Plugins (optional)
- [tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography) - _prose styling_
- [tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms) - _form styling_

### E. Formatting / Prettier

- **[Prettier](https://prettier.io/)** - _formatter_

- #### Prettier Plugins
- [@prettier/plugin-pug](https://github.com/prettier/plugin-pug) - _Pug formatting_<br />
- [prettier-plugin-svelte](https://github.com/sveltejs/prettier-plugin-svelte) - _Svelte formatting_<br />

### F. Linting / ESLint

- **[ESLint](https://eslint.org/)** - _linter_

- #### ESLint Parsers & Plugins
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - _compatibility w/ prettier_
- [typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/parser) - _TS parsing_
- [typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/)- _TS linting_
- [eslint-plugin-svelte3](https://github.com/sveltejs/eslint-plugin-svelte3) - _Svelte linting_

### G. Testing

- **[Playwright](https://playwright.dev/)** - _cross-browser testing_
- **[Vitest](https://vitest.dev/)** - _unit testing_

## 3. Getting Started

### A. Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```console
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### B. Building

To create a production version of your app:

```console
npm run build
```

### C. Preview

You can preview the production build with `npm run preview`.

&nbsp;

## 4. About SvelteKit

Sveltekit is a new framework for building web applications. It's built on top of Svelte, which is a component framework for building user interfaces. Sveltekit is a great tool for building modern web applications.

If you get stuck working with SvelteKit you can reach out for help in the [SvelteKit Discord chatroom](https://svelte.dev/chat).

&nbsp;

## 5. Using Pug with Svelte

I love Pug, and the first thing I figured out when I started working with Svelte, was how to use Pug inside Svelte files. Thankfully other devs had already solved the technical challenges for me.

This starter uses the [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess) package.It is a Svelte preprocessor with sensible defaults and support for: PostCSS, SCSS, Less, Stylus, CoffeeScript, TypeScript, Pug and much more.

**Note: Special syntax is required to write Pug inside Svelte templates.** Some basics are included below. You can learn more [here](https://github.com/sveltejs/svelte-preprocess/blob/HEAD/docs/preprocessing.md#preprocessors).\*\*

&nbsp;

### A. How to write Svelte's Template Syntax using Pug Mixins

Because some of Svelte's template syntax is invalid in Pug `svelte-preprocess` provides some pug mixins to represent svelte's `{#...}{/...}` blocks: `+if()`, `+else()`, `+elseif()`, `+each()`, `+key()`, `+await()`, `+then()`, `+catch()`, `+html()`, `+const()`, `+debug()`.

```pug
ul
	+if('posts && posts.length > 1')
		+each('posts as post')
			li
				a(
					href="blog/{post.slug}",
					rel="prefetch") {  post.title  }
		+else
			span No posts :c
```

&nbsp;

### B. Svelte Element Attributes and Callbacks Using Pug

Pug encodes everything inside an element attribute to html entities, so `attr="{foo && bar}"` becomes `attr="foo &amp;&amp; bar"`. To prevent this from happening, instead of using the `=` operator use `!=` which won't encode your attribute value:

```pug
button(disabled!="{ foo && bar }")
```

This is also necessary to pass callbacks:

```pug
button(on:click!="{ (e) => doTheThing(e) }")
```

It is not possible to use template literals for attribute values. You can't write `` attr=`Hello ${value ? 'Foo' : 'Bar'}` ``, instead write `attr="Hello {value ? 'Foo' : 'Bar'}"`.

&nbsp;

### C. Spreading props in Svelte using Pug

To spread props into a pug element, wrap the `{...object}` expression with quotes `"`.

This:

```pug
button.big(
	disabled,
	type="button",
	{...slide.props}) Send
```

Becomes:

```svelte
<button
	class="big"
	type="button"
	disabled
	{...slide.props}
>
	Send
</button>
```

&nbsp;

### D. Svelte Element Directives using Pug

Syntax to use Svelte Element directives with Pug

```pug
input(bind:value="{ foo }")
input(on:input="{ bar }")
```

&nbsp;

## 6. Folder Shortcuts

The following shortcuts and corresponding folders come pre-configured in this template:

- $atoms: './src/lib/components/atoms'
- $components: './src/lib/components'
- $lib: './src/lib'
- $molecules: './src/lib/components/molecules'
- $organisms: './src/lib/components/organisms'
- $stores: './src/lib/stores'
- $types: './src/lib/types'
- $utils: './src/lib/utils'

&nbsp;&nbsp;

## 7. Editor & Extensions

If you are using VSCode, we recommend these extensions:

- [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)
- [Tailwind CSS Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Playwright Test for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
