# Sveltekit Typescript Tailwind Pug Starter Template

A starter template for launching a Sveltekit / Pug project with Typescript and TailwindCSS.
&nbsp;

## 1. About this Template

This starter was developed for the [Lightning Jar ](https://lightningjar.com) team. It's designed to get one up and running quickly on a new project using:

- Sveltekit
- Svelte
- Typescript
- Pug.js
- TailwindCSS
- Prettier
- ESLint
- Vite
- Playwright

&nbsp;
This starter was generated using 'npm create svelte@latest" and sticks as closely as possible to the default configuration and settings created using that set-up.

&nbsp;

## 2. Getting Started

### Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

To create a production version of your app:

```bash
npm run build
```

### Preview

You can preview the production build with `npm run preview`.

&nbsp;

## 3. About SvelteKit

Sveltekit is still in the final stages of beta. Specifically, it is in release candidate phase for 1.0 while the SvelteKit team addresses reported issues and add polish.

While there are no more planned breaking changes before 1.0, it is still likely that there are bugs, and things will break and change.

Because of this fact, there are two dev dependencies in this package which are set to pull in the latest releases (see below).

- "@sveltejs/adapter-auto": "next",
- "@sveltejs/kit": "next",

As soon as SvelteKit officially releases 1.0 this starter will switch to pulling in only official releases, and the starter will become more reliably stable. For now, I will watch SvelteKit releases notes, and test daily.

If you get stuck working with SvelteKit yuo can reach out for help in the [SvelteKit Discord chatroom](https://svelte.dev/chat).

&nbsp;

## 4. Using Pug with Svelte via Svelte-Preprocess

I love Pug, and the first thing I figured out when I started working with Svelte, was how to use Pug inside Svelte files. Thankfully other devs had already solved the technical challenges for me.

This starter uses the [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess) package.It is a Svelte preprocessor with sensible defaults and support for: PostCSS, SCSS, Less, Stylus, CoffeeScript, TypeScript, Pug and much more.

**Note: Special syntax is required to write Pug inside Svelte templates.** Some basics are included below. You can learn more [here](https://github.com/sveltejs/svelte-preprocess/blob/HEAD/docs/preprocessing.md#preprocessors).\*\*

&nbsp;

### How to write Svelte's Template Syntax using Pug Mixins

Because some of Svelte's template syntax is invalid in Pug `svelte-preprocess` provides some pug mixins to represent svelte's `{#...}{/...}` blocks: `+if()`, `+else()`, `+elseif()`, `+each()`, `+key()`, `+await()`, `+then()`, `+catch()`, `+html()`, `+const()`, `+debug()`.

```pug
ul
  +if('posts && posts.length > 1')
    +each('posts as post')
      li
        a(rel="prefetch" href="blog/{post.slug}") {post.title}
    +else()
      span No posts :c
```

&nbsp;

### Svelte Element Attributes and Callbacks Using Pug

Pug encodes everything inside an element attribute to html entities, so `attr="{foo && bar}"` becomes `attr="foo &amp;&amp; bar"`. To prevent this from happening, instead of using the `=` operator use `!=` which won't encode your attribute value:

```pug
button(disabled!="{foo && bar}")
```

This is also necessary to pass callbacks:

```pug
button(on:click!="{(e) => doTheThing(e)}")
```

It is not possible to use template literals for attribute values. You can't write `` attr=`Hello ${value ? 'Foo' : 'Bar'}` ``, instead write `attr="Hello {value ? 'Foo' : 'Bar'}"`.

&nbsp;

### Spreading props in Svelte using Pug

To spread props into a pug element, wrap the `{...object}` expression with quotes `"`.

This:

```pug
button.big(type="button" disabled "{...slide.props}") Send
```

Becomes:

```svelte
<button class="big" type="button" disabled {...slide.props}> Send </button>
```

&nbsp;

### Svelte Element Directives using Pug

Syntax to use Svelte Element directives with Pug

```pug
input(bind:value="{foo}")
input(on:input="{bar}")
```

&nbsp;

## 5. Folder Shortcuts

The following shortcuts and corresponding folders come pre-configured in this template:

- $atoms: './src/lib/components/atoms'
- $components: './src/lib/components'
- $functions: path.resolve('./src/lib/functions'
- $lib: './src/lib'
- $molecules: './src/lib/components/molecules'
- $organisms: './src/lib/components/organisms'
- $settings: './src/lib/settings'
- $stores: './src/lib/stores'
- $types: './src/lib/types'
- $utils: './src/lib/utils'

&nbsp;

## 6. Recommended Editor & Extensions

If you are using VSCode, we recommend these extensions:

- [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)
- [Tailwind CSS Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Playwright Test for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
