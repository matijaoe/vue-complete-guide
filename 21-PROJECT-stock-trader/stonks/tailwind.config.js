module.exports = {
	purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {},
			fontFamily: {
				display: ['Bebas Neue', 'cursive'],
				primary: ['Rubik', 'ui-sans-serif'],
			},
		},
	},
	variants: {
		opacity: ({ after }) => after(['disabled']),
	},
	plugins: [
		// require('@tailwindcss/forms'),
		// require('@tailwindcss/typography'),
		// require('@tailwindcss/line-clamp'),
		// require('@tailwindcss/aspect-ratio'),
	],
};
