module.exports = {
	purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {},
			fontFamily: {
				display: ['Alegreya', 'ui-serif'],
				primary: ['Inter', 'ui-sans-serif'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		// require('@tailwindcss/forms'),
		// require('@tailwindcss/typography'),
		// require('@tailwindcss/line-clamp'),
		// require('@tailwindcss/aspect-ratio'),
	],
};
