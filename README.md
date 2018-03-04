# [nevir](https://github.com/nevir)'s code style

## Using It In Your Own Project

For a node project:

```sh
npm install @nevir/code-style --save-dev
# Adds peer dependencies to your project, and sets up shared configs.
./node_modules/@nevir/code-style/bootstrap
```

That's it!  It will set you up with configuration for the various style tools

## What You Get

### Prettier

Pretty standard configuration for Prettier.  Nothing much special here.

### Eslint

This package configures eslint with…

* …a pretty strict set of style rules; to keep you out of trouble, and to minimize arguments over style in PRs.

* …support for TypeScript sources.

* …`--fix` rules that play nice with Prettier.
