# TSLint Config Airbnb

[![NPM version](https://img.shields.io/npm/v/tslint-config-airbnb.svg?style=flat)](https://www.npmjs.com/package/tslint-config-airbnb)
[![Downloads](http://img.shields.io/npm/dm/tslint-config-airbnb.svg?style=flat)](https://npmjs.org/package/tslint-config-airbnb)

> A [TSLint config](https://palantir.github.io/tslint/usage/configuration/) for [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

---

## This package is deprecated

### Migrate to eslint

1. Remove `tslint.json`

2. Remove lines from `tsconfig.json` if included

```json
    "plugins": [
      {
        "name": "typescript-tslint-plugin"
      }
    ],
```

3. Replace packages

```bash
$ npm uninstall tslint tslint-config-airbnb
$ npm uninstall typescript-tslint-plugin
$ npm install --dev eslint @typescript-eslint/eslint-plugin eslint-config-airbnb
$ npx install-peerdeps --dev eslint-config-airbnb
```

4. Create `.eslintrc.json`

```json
{
  "extends": ["airbnb"],
  "plugins": ["@typescript-eslint"],
  "parser": "@typescript-eslint/parser",
  "rules": {
    "import/no-unresolved": 0,
    "react/jsx-filename-extension": {
      "extensions": [
        ".jsx",
        ".tsx"
      ]
    }
  }
}
```

With webpack

```json
{
  :
  "rules": {
    :
    "import/extensions": [".js", ".json", ".jsx", ".ts", ".tsx"],
    :
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "webpack.config.js"
      }
    }
  }
  :
}
```

5. if you are using Visual Studio Code, add to `vscode's settings.json`

```json
{
  "[typescript]": {
    "editor.formatOnSave": false,
  },
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    { "language": "typescript", "autoFix": true },
    { "language": "typescriptreact", "autoFix": true }
  ]
}
```

---

## Installation

```sh
npm install tslint-config-airbnb --save-dev
```

## Usage

In `tslint.json`:

```json
{
  "extends": "tslint-config-airbnb"
}
```

### Rules

- [tslint](https://www.npmjs.com/package/tslint)
- [tslint-consistent-codestyle](https://www.npmjs.com/package/tslint-consistent-codestyle)
- [tslint-eslint-rules](https://www.npmjs.com/package/tslint-eslint-rules)
- [tslint-microsoft-contrib](https://www.npmjs.com/package/tslint-microsoft-contrib)

## Versioning

```
+----- Major version is synchronize with tslint's major version.
| +--- Minor version has BREAKING CHANGE and feat.
| | +- Patch version has patch.
| | |
x.x.x
```

## License

Apache 2.0
