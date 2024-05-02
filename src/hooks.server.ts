// 2. INTRODUCTION - SERVER HOOKS
// 'Hooks' are app-wide functions you declare that SvelteKit will call in response to specific events, giving you fine-grained control over the framework's behavior. For our team, most websites we build are server-side rendered, so we use hooks to fetch data from a CMS or database and pass it to the page component via load functions in individual '+page.server.ts' files. This is a good way to keep the data-fetching logic out of the page component, which should be focused on rendering the data.

// 2. CONFIGURE SERVERLESS FUNCTION (Vercel)
//note: This configuration is specific to Vercel -- you'll need to change this if you are not using vercel
/** @type {import('@sveltejs/adapter-vercel').Config} */
export const config = {
	runtime: "nodejs20.x",
};

// 3. IMPORT "SEQUENCE"
// use "sequence" instead of "handle" to run multiple hooks in order (see below)
// our team uses "sequence" to load Sentry before loading the page data
import { sequence } from "@sveltejs/kit/hooks";

// 4. TYPES
// import type for handle / sequence functions
import type { Handle } from "@sveltejs/kit";

// 5. IMPORT METADATA
// this allows you to add logic that is environment specific
// e.g. not running Sentry in the dev environment
import { dev, version } from "$app/environment";
const siteMeta = {
	dev,
	version,
};

// 6. CONTENT STORES
// using content stores can be a handy pattern whether you are using a CMS or not
// you can use content stores to import backup data from json files as backup data
// and then use a CMS to override the backup with fresh data after it is loaded on the server
// this is a good way to keep the data-fetching logic out of the page component
// we'll add types for content to app.d.ts so we don't have to re-type this in every file

// 6.1 import content or data stores
import homeContentStore from "$stores/homeContentStore";
import footerContentStore from "$stores/footerContentStore";

// 6.2 create a content object to pass stores to locals
const content = {
	footerContentStore,
	homeContentStore,
};

// 7. UTILS
// helper functions that might be used in multiple places can be added to locals
// and then accessed in the +page.server.ts file load function
// this can avoid having to import the same function in multiple places
// we'll add a type to these functions in app.d.ts
import { get } from "svelte/store";
import { redirect } from "@sveltejs/kit";
import { error } from "@sveltejs/kit";
const utils = {
	error,
	get,
	redirect,
};

// 8. SETTINGS
// settings that might be used in multiple places can go into locals as well
// a good example would be redirects that are stored in a single file
// or a general settings file that holds things like the site name, description, etc.
// JSON is a good format for this type of data
import { default as general } from "$settings/general.json";
import { default as redirects } from "$settings/redirects.json";

const settings = {
	general,
	redirects,
};

// S. SENTRY
// our team uses Sentry for error tracking.
// learn more about Sentry here: https://sentry.io/welcome/

// S.1 import sentry
// import * as Sentry from "@sentry/sveltekit";

// S.2 initialize Sentry
// Sentry.init({
// 	dsn: "https://4a8d945bea35470285e30b0de3d5580a@o4505247956860928.ingest.sentry.io/4505561997246464",
// Performance Monitoring
// 	tracesSampleRate: 0, // Capture 100% of the transactions. Adjust this value in production as necessary.
// });

export const handle: Handle = sequence(
	// Sentry
	// Sentry.sentryHandle(),

	async ({ event, resolve }) => {
		// pass data to the layout.server.ts file
		event.locals = {
			content,
			settings,
			siteMeta,
			utils,
		};

		const response = await resolve(event);
		return response;
	},
);

// S.3 -- Handle errors with sentry
// export const handleError = handleErrorWithSentry();
