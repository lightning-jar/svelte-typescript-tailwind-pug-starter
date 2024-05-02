// a great place to put some custom types
interface Link {
	[key: string]: string | undefined | null;
	label?: string | null;
	rel?: string | null;
	target?: string | null;
	url?: string | null;
	title?: string | null;
}
