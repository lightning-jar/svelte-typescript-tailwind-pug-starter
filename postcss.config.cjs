/** @type {import('tailwindcss').Config} */
const config = require('./tailwind.config.ts');

module.exports = {
	plugins: {
		tailwindcss: { config },
		autoprefixer: {}
	}
};
