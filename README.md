[![npm](https://img.shields.io/npm/v/@nevir/code-style.svg)](https://www.npmjs.com/package/@nevir/code-style)
[![Build Status](https://img.shields.io/circleci/project/github/nevir/code-style/master.svg)](https://circleci.com/gh/nevir/workflows/code-style)

# [nevir](https://github.com/nevir)'s code style

## Using It In Your Own Project

For a node project:

```sh
npm install @nevir/code-style --save-dev
# Adds peer dependencies to your project, and sets up shared configs.
node ./node_modules/@nevir/code-style/scripts/bootstrap.js
```

That's it! It will set you up with configuration for the various style tools.

Similarly, whenever you upgrade to a new version of the package, run `bootstrap.js` again to update any necessary peer dependencies.

## What You Get

### Prettier

Pretty standard configuration for Prettier. Nothing much special here.

### Eslint

This package configures eslint with…

* …a pretty strict set of style rules; to keep you out of trouble, and to minimize arguments over style in PRs.

* …support for TypeScript sources.

* …`--fix` rules that play nice with Prettier.

### TypeScript

TypeScript will be set up with a relatively strict configuration.
