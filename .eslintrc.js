module.exports = {
    extends: 'airbnb-base',
    parserOptions: {
        ecmaVersion: 6
    },
    rules: {
        indent: ['error', 4],
        semi: ['error', 'never'],
        'import/newline-after-import': ['off'],
        'comma-dangle': ['error', 'never']
    },
    env: {
        browser: true,
        node: true
    },
    plugins: [
        'import'
    ]
}
