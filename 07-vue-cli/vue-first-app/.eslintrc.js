module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['plugin:vue/vue3-essential', '@vue/airbnb'],
	parserOptions: {
		parser: 'babel-eslint',
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-unused-vars': 'warn',
		'no-tabs': 0,
		'object-curly-spacing': [2, 'always'],
		'no-plusplus': 'off',
		indent: ['error', 'tab'],
	},
};
