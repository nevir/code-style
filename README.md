[![npm](https://img.shields.io/npm/v/@nevir/code-style.svg)](https://www.npmjs.com/package/@nevir/code-style)
[![Build Status](https://img.shields.io/circleci/project/github/nevir/code-style/master.svg)](https://circleci.com/gh/nevir/workflows/code-style)

# [nevir](https://github.com/nevir)'s code style

This code style currently only supports JavaScript based projects (with an emphasis on TypeScript projects). It provides a pretty comprehensive set of rules, with an aim to…

* …avoid dangerous and/or confusing patterns.
* …encourage patterns that improve readability.
* …enforce as much of the style as possible, to let developers focus on code behavior, not style.

## Getting Started

```sh
npm install @nevir/code-style --save-dev
# Adds peer dependencies to your project, and sets up shared configs.
node ./node_modules/@nevir/code-style/.scripts/bootstrap.js
```

That's it! It will set you up with configuration for the various style tools.

Similarly, whenever you upgrade to a new version of the package, run `bootstrap.js` again to update any necessary peer dependencies.

## Using It

The bootstrap script will set you up with a few new npm scripts for your convenience:

`npm run test-style`: Checks to see whether any files in your project violate the style. You can optionally pass specific files/globs to test as arguments.

`npm run fix-style`: Fixes any auto-fixable style issues in your project. You can optionally pass specific files/globs to fix as arguments.

Additionally, it configures [VS Code](https://code.visualstudio.com/) to automatically fix and highlight style issues as you edit files.

## Tooling

The bootstrap script sets up several tools in your project:

### [TypeScript](./typescript)

This package configures typescript into a very strict mode. Primarily, this is to avoid ambiguous types (ensuring that the compiler can optimally check all usages).

### [Prettier](./prettier)

Pretty standard configuration for Prettier. Nothing much special here.

### [Eslint](./eslint)

This package configures eslint with…

* …a pretty strict set of style rules; to keep you out of trouble, and to minimize arguments over style in PRs.

* …support for TypeScript sources.

* …`--fix` rules that play nice with Prettier.
