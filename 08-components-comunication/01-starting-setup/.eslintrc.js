module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'airbnb-base',
		'eslint:recommended',
		'plugin:vue/vue3-essential',
		'prettier',
	],
	parserOptions: {
		parser: 'babel-eslint',
	},
	plugins: ['vue'],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-unused-vars': 'warn',
		'object-curly-spacing': [2, 'always'],
		indent: [2, 'tab'],
		'no-tabs': 0,
		'no-plusplus': 'off',
		'comma-dangle': [2, 'only-multiline'],
	},
};
