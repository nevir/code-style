module.exports = {
  parser: 'typescript-eslint-parser',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    jsx: true,
  },
  env: {
    es6: true,
  },

  plugins: ['typescript'],

  // Note that we explicitly opt into each rule that we wish to enforce, and do
  // not inherit base/recommended rule sets.
  //
  // Rules are included when they add value on top of Prettier and the
  // TypeScript compiler. Also, we have to be careful to not introduce
  // `--fix`able rules that conflict with Prettier.
  //
  // Rules that are not configured have a comment explaining why it's the case.
  rules: {
    // https://eslint.org/docs/rules/#possible-errors

    'for-direction': 'error',
    // 'getter-return': enforced by TypeScript
    // 'no-await-in-loop': desirable for workflows
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-console': 'error',
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-control-regex': 'error',
    'no-debugger': 'error',
    // 'no-dupe-args': enforced by TypeScript
    // 'no-dupe-keys': enforced by TypeScript
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    // 'no-extra-parens': enforced by Prettier
    // 'no-extra-semi': enforced by Prettier
    // 'no-func-assign': enforced by TypeScript
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    // 'no-unexpected-multiline': enforced by Prettier
    // 'no-unreachable': enforced by TypeScript
    'no-unsafe-finally': 'error',
    // 'no-unsafe-negation': enforced by TypeScript
    'use-isnan': 'error',
    // 'valid-jsdoc': prefer TypeScript types
    // 'valid-typeof': enforced by TypeScript

    // https://eslint.org/docs/rules/#ecmascript-6

    // 'arrow-body-style': enforced by Prettier
    // 'arrow-parens': enforced by Prettier
    // 'arrow-spacing': enforced by Prettier
    // 'constructor-super': enforced by TypeScript
    // 'generator-star-spacing': enforced by Prettier
    // 'no-class-assign': enforced by TypeScript
    // 'no-confusing-arrow': enforced by Prettier
    // 'no-const-assign': enforced by TypeScript
    // 'no-dupe-class-members': enforced by TypeScript
    'no-duplicate-imports': 'error',
    // 'no-new-symbol': enforced by TypeScript
    // 'no-this-before-super': enforced by TypeScript
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': ['error', 'always', { avoidExplicitReturnArrows: true }],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': ['error', { object: true }],
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    // 'require-yield': enforced by TypeScript
    // 'rest-spread-spacing': enforced by Prettier
    // 'sort-imports': TODO: eslint-plugin-import
    'symbol-description': 'error',
    // 'template-curly-spacing': enforced by Prettier
    // 'yield-star-spacing': enforced by Prettier
  },
};
