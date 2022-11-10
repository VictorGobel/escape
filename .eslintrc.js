const path = require('path');

module.exports = {
    rules: {
        'no-unused-vars': [2, { args: 'after-used', argsIgnorePattern: '^_' }],
    },
    root: false,
    settings: {
        'import/resolver': {
            node: {
                paths: [path.join(__dirname, 'src')],
                extensions: ['.ts', '.tsx'],
            },
        },
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            extends: ['plugin:@typescript-eslint/recommended'],
            settings: {
                'import/resolver': {
                    node: {
                        paths: [path.join(__dirname, 'src')],
                        extensions: ['.ts', '.tsx'],
                    },
                },
            },
            rules: {
                '@typescript-eslint/ban-ts-comment': 'warn',
                '@typescript-eslint/no-empty-function': 'warn'
            },
        },
    ],
};
