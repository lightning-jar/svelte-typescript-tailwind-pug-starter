interface PageMeta {
	[key: string]: unknown;
	title?: string | null;
	shortTitle?: string | null;
	description?: string | null;
	keywords?: string[] | null;
	robotsFollow?: boolean;
	analyticsOn?: boolean;
}
