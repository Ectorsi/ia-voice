module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        indent: ['error', 4],
        'react/jsx-indent': 0,
        'import/prefer-default-export': 'off',
        'linebreak-style': 'off',
        'react/prop-types': 'off',
        'react/jsx-props-no-spreading': 'off',
        'import/no-extraneous-dependencies': 'off',
    },
};
