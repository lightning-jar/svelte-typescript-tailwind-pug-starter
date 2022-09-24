/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,pug,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#142239',
				accent: '#ebf92f'
			}
		}
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};
