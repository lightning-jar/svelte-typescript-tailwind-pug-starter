// we're going to use app.d.ts to provide types for the data we're importing
// these global types will be available in all of our files
// and take the place of having to import types in every file

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

// import types
import type { Readable, Writable } from "svelte/store";

// import utils
import { error } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";
import type GeneralSettings from "$settings/general.json";
import type Redirects from "$settings/redirects.json";

// content
interface Content {
	[key: string]: unknown;
	homeContentStore: Writable<HomeContent>;
	footerContentStore: Writable<FooterContent>;
}

// utils
interface Utils {
	[key: string]: unknown;
	error: typeof error;
	get: <T>(store: Readable<T>) => T;
	redirect: typeof redirect;
}

interface SiteMeta {
	dev: boolean;
	version: string;
}

interface Settings {
	[key: string]: unknown;
	redirects: Redirects;
	general: GeneralSettings;
}

declare global {
	declare namespace App {
		interface Locals {
			content: Content;
			settings: Settings;
			siteMeta: SiteMeta;
			utils: Utils;
		}

		// interface PageData {}
		// interface Error {}
		// interface Platform {}
	}
}
