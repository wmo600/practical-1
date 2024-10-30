import js from '@eslint/js';

export default [
    js.configs.recommended,

    {
        rules: {
            'semi': ['error', 'always'],
            'quotes': ['error', 'single'],
            'no-unused-vars': 'warn',
            'no-undef': 'warn'
        }
    }
];