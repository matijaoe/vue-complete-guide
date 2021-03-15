module.exports = {
    env: {
        browser: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/essential'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['vue'],
    rules: {
        'vue/no-multiple-template-root': 'off',
        'no-unused-vars': 'warn',
    },
};
