/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,pug,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				// custom rules for starter web page, remove these for your own project
				primary: '#142239',
				accent: '#ebf92f'
			}
		}
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};
