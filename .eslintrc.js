module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    "eol-last": 0,
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'no-console':'off',
    'no-trailing-spaces':'off',
    'func-call-spacing':'off',
    'indent':'off',
    'keyword-spacing':'off',
    'space-in-parens':'off',
    'brace-style':'off',
    'no-undef':'off',
    'padded-blocks':'off',
    'arrow-parens':'off'
    //eslint-disable-next-line,
    /*eslint-disable*/
  }
}
