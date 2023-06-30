module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        'google',
        'eslint:recommended',
        'prettier',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {},
};
