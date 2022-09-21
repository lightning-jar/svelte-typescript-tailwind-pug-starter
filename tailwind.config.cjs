/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,pug,js,svelte,ts}'],
	safelist: ['px-6', 'px-12', 'px-16', 'px-24'],
	theme: {
		extend: {
			colors: {
				accent: '#FDE74C',
				dark: '#292f36',
				light: '#eef0f2',
				primary: {
					DEFAULT: '#7BC021',
					dark: '#6cad18'
				},
				fontSize: {
					xxs: ['.75rem', '1rem'], // 12
					xs: ['.8125rem', '1.125rem'], // 13
					sm: ['.875rem', '1.25rem'], // 14
					sub: ['.9375rem', '1.375rem'], // 15
					base: ['1rem', '1.5rem'], // 16
					body: ['1.0625rem', '1.5625rem'], // 17
					md: ['1.125rem', '1.625rem'], // 18 - 26
					lg: ['1.25rem', '1.75rem'], // 20 - 28
					xl: ['1.5rem', '2rem'] // 24
				},
				screens: {
					xs: '420'
				}
			}
		},
		fontFamily: {
			sans: [
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'Oxygen',
				'Ubuntu',
				'Cantarell',
				'"Fira Sans"',
				'"Droid Sans"',
				'"Helvetica Neue"',
				'sans-serif'
			]
		}
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};
