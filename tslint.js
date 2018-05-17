const path = require('path');

module.exports = {
  rulesDirectory: [
    path.join(path.dirname(require.resolve('tslint-consistent-codestyle')), './'),
    path.join(path.dirname(require.resolve('tslint-eslint-rules')), 'dist/rules'),
    path.join(path.dirname(require.resolve('tslint-microsoft-contrib')), './'),
  ],
  rules: { // base on https://github.com/airbnb/javascript/tree/44dbd0bdc41d08eb5de8ad698099ae44240f4b0d
    'prefer-const': true, // 2.1, 13.1
    'no-var-keyword': true, // 2.2
    'object-literal-shorthand': true, // 3.3, 3.4
    'object-shorthand-properties-first': true, // 3.5
    'object-literal-key-quotes': [true, 'as-needed'], // 3.6
    'prefer-array-literal': true, // 4.1
    quotemark: [
      true,
      'single',
      'jsx-double',
    ], // 6.1
    'no-eval': true, // 6.4
    'no-function-constructor-with-string-args': true, // 7.10
    'space-before-function-paren': [
      true,
      {
        anonymous: 'always', // 7.11
        named: 'never', // 19.3
      },
    ],
    'no-parameter-reassignment': true, // 7.12
    align: [
      true,
      'arguments',
      'parameters',
    ], // 7.15
    'ter-prefer-arrow-callback': [true], // 8.1
    'arrow-parens': false, // 8.2
    'ter-arrow-parens': [
      true,
      'as-needed',
      { 'requireForBlockBody': true },
    ], // 8.4
    'no-duplicate-imports': true, // 10.4
    'one-variable-per-declaration': [true, 'ignore-for-loop'], // 13.2
    'no-increment-decrement': true, // 13.6
    'triple-equals': [true, 'allow-null-check'], // 15.1
    'no-boolean-literal-compare': true, // 15.3
    curly: [true, 'ignore-same-line'], // 16.1
    'brace-style': [
      true,
      '1tbs',
      { allowSingleLine: true },
    ], // 16.2
    'no-else-after-return': true, // 16.3
    'comment-format': [true, 'check-space'], // 18.3
    indent: [true, 'space'], // 19.1
    'ter-indent': [
      true,
      2,
      { 'SwitchCase': 1 },
    ], // 19.1
    whitespace: [
      true,
      'check-branch', // 19.3
      'check-decl', // 19.4
      'check-operator', // 19.4
      'check-preblock', // 19.2
    ],
    eofline: true, // 19.5
    'space-in-parens': [true, 'never'], // 19.9
    'array-bracket-spacing': [true, 'never'], // 19.10
    'object-curly-spacing': [true, 'always'], // 19.11
    'max-line-length': [true, 100], // 19.12
    'trailing-comma': [
      true,
      {
        multiline: 'always',
        singleline: 'never',
      },
    ], // 20.2
    semicolon: [true, 'always'], // 21.1
    'no-construct': true, // 22.2, 22.3, 22.6
    radix: true, // 22.3
    'function-name': [
      true,
      {
        'function-regex': /^[a-z$][\w\d]+$/,
        'method-regex': /^[a-z$][\w\d]+$/,
        'private-method-regex': /^[a-z$][\w\d]+$/,
        'protected-method-regex': /^[a-z$][\w\d]+$/,
        'static-method-regex': /^[a-z$][\w\d]+$/,
      }, // 23.1
    ],
    'variable-name': [true, 'check-format'], // 23.2
    'no-this-assignment': true, // 23.5
    'import-name': true, // 23.6
    'react-a11y-anchors': true,
    'react-a11y-aria-unsupported-elements': true,
    'react-a11y-event-has-role': true,
    'react-a11y-image-button-has-alt': true,
    'react-a11y-img-has-alt': true,
    'react-a11y-lang': true,
    'react-a11y-props': true,
    'react-a11y-proptypes': true,
    'react-a11y-role-has-required-aria-props': true,
    'react-a11y-role-supports-aria-props': true,
    'react-a11y-role': true,
    'react-a11y-tabindex-no-positive': true,
  },
};
