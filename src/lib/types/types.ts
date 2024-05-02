// a great place to put some custom types
interface Link {
	[key: string]: unknown;
	label?: string;
	href?: string;
	rel?: string;
	target?: string;
	title?: string;
}
interface Image {
	[key: string]: unknown;
	src?: string;
	alt?: string;
	loading?: string;
	height?: string;
	width?: string;
}