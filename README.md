[![npm](https://img.shields.io/npm/v/@nevir/code-style.svg)](https://www.npmjs.com/package/@nevir/code-style)
[![Build Status](https://img.shields.io/circleci/project/github/nevir/code-style/master.svg)](https://circleci.com/gh/nevir/workflows/code-style)

# [nevir](https://github.com/nevir)'s code style

[![Greenkeeper badge](https://badges.greenkeeper.io/nevir/code-style.svg)](https://greenkeeper.io/)

## Using It In Your Own Project

For a node project:

```sh
npm install @nevir/code-style --save-dev
# Adds peer dependencies to your project, and sets up shared configs.
./node_modules/@nevir/code-style/bootstrap
```

That's it! It will set you up with configuration for the various style tools

## What You Get

### Prettier

Pretty standard configuration for Prettier. Nothing much special here.

### Eslint

This package configures eslint with…

* …a pretty strict set of style rules; to keep you out of trouble, and to minimize arguments over style in PRs.

* …support for TypeScript sources.

* …`--fix` rules that play nice with Prettier.
