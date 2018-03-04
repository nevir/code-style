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

    // https://eslint.org/docs/rules/#best-practices

    // 'accessor-pairs': desirable for ergonomic APIs
    // 'array-callback-return': enforced by TypeScript
    // 'block-scoped-var': enforced by 'no-var'
    'class-methods-use-this': 'error',
    // 'complexity': not nuanced enough for global use
    // 'consistent-return': enforced by TypeScript
    curly: ['error', 'multi-line'],
    // 'default-case': desirable in some cases
    // 'dot-location': enforced by Prettier
    // 'dot-notation': desirable when calling out special properties
    // 'eqeqeq': enforced by TypeScript
    'guard-for-in': 'error',
    'no-alert': 'error',
    'no-caller': 'error', // Weirdly not enforced by TypeScript
    // 'no-case-declarations': enforced by TypeScript
    // 'no-div-regex': not that confusing
    // 'no-else-return': desirable for balanced condition style
    // 'no-empty-function': Prettier calls them out well
    'no-empty-pattern': 'error',
    // 'no-eq-null': enforced by TypeScript
    'no-eval': 'error',
    // 'no-extend-native': enforced by TypeScript
    'no-extra-bind': 'error',
    // 'no-extra-label': enforced by 'no-labels'
    'no-fallthrough': 'error',
    // 'no-floating-decimal': enforced by Prettier
    // 'no-global-assign': enforced by TypeScript
    // 'no-implicit-coercion': the shorthands are desirable
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    // 'no-invalid-this': enforced by TypeScript
    'no-iterator': 'error',
    'no-labels': ['error', { allowLoop: true }],
    'no-lone-blocks': 'error',
    // 'no-loop-func': desirable in code generation cases
    // 'no-magic-numbers': not nuanced enough for global use
    // 'no-multi-spaces': enforced by Prettier
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    // 'no-octal': enforced by TypeScript
    'no-octal-escape': 'error',
    // 'no-param-reassign': desirable for advanced default setting
    // 'no-proto': enforced by TypeScript
    // 'no-redeclare': enforced by TypeScript
    // 'no-restricted-properties': project-specific
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    // 'no-unused-labels': enforced by TypeScript
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    // 'no-warning-comments': desirable for lightweight issue tracking
    // 'no-with': enforced by TypeScript
    'prefer-promise-reject-errors': 'error',
    // 'radix': Not necessary as of ES5+
    // 'require-await': desirable for consistent APIs
    // 'vars-on-top': undesirable due to poor grouping of concerns
    // 'wrap-iife': enforced by Prettier
    yoda: 'error',

    // https://eslint.org/docs/rules/#strict-mode

    // strict: enforced by whatever compiler you're using

    // https://eslint.org/docs/rules/#variables

    // 'init-declarations': desirable in many cases
    'no-catch-shadow': 'error',
    // 'no-delete-var': enforced by TypeScript
    'no-label-var': 'error',
    // 'no-restricted-globals': project-specific
    'no-shadow': ['error', { builtinGlobals: true }],
    // 'no-shadow-restricted-names': enforced by 'no-shadow'
    // 'no-undef': enforced by TypeScript
    // 'no-undef-init': desirable in many cases
    // 'no-undefined': enforced by TypeScript
    // 'no-unused-vars': enforced by TypeScript
    // 'no-use-before-define': enforced by TypeScript

    // https://eslint.org/docs/rules/#nodejs-and-commonjs

    // 'callback-return': not nuanced enough for global use
    'global-require': 'error',
    'handle-callback-err': ['error', '^(err|error|.+[eE]rror)$'],
    'no-buffer-constructor': 'error',
    // 'no-mixed-requires': desirable for modules with side effects
    'no-new-require': 'error',
    'no-path-concat': 'error',
    // 'no-process-env': project-specific
    // 'no-process-exit': project-specific
    // 'no-restricted-modules': project-specific
    // 'no-sync': project-specific

    // https://eslint.org/docs/rules/#stylistic-issues

    // 'array-bracket-newline': enforced by Prettier
    // 'array-bracket-spacing': enforced by Prettier
    // 'array-element-newline': enforced by Prettier
    // 'block-spacing': enforced by Prettier
    // 'brace-style': enforced by Prettier
    camelcase: 'error',
    // 'capitalized-comments': not nuanced enough for global use
    // 'comma-dangle': enforced by Prettier
    // 'comma-spacing': enforced by Prettier
    // 'comma-style': enforced by Prettier
    // 'computed-property-spacing': enforced by Prettier
    // 'consistent-this': not important due to arrow functions
    // 'eol-last': enforced by Prettier
    // 'func-call-spacing': enforced by Prettier
    'func-name-matching': 'error',
    // 'func-names': not desirable due to unit testing library patterns
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    // 'function-paren-newline': enforced by Prettier
    'id-blacklist': ['error', 'e', 'err', 'cb'],
    // 'id-length': project-specific
    // 'id-match': project-specific
    // 'implicit-arrow-linebreak': enforced by Prettier
    // indent: enforced by Prettier
    // 'jsx-quotes': enforced by Prettier; https://github.com/prettier/prettier/pull/3839
    // 'key-spacing': enforced by Prettier
    // 'keyword-spacing': enforced by Prettier
    // 'line-comment-position': both styles are desirable
    // 'linebreak-style': enforced by Prettier
    // 'lines-around-comment': not nuanced enough for global use
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    // 'max-depth': not nuanced enough for global use
    'max-len': ['error', { code: 110, comments: 80, ignoreUrls: true }],
    // 'max-lines': not nuanced enough for global use
    // 'max-nested-callbacks': not nuanced enough for global use
    // 'max-params': not nuanced enough for global use
    // 'max-statements': not nuanced enough for global use
    // 'max-statements-per-line': not nuanced enough for global use
    'multiline-comment-style': ['error', 'separate-lines'],
    // 'multiline-ternary': enforced by Prettier
    'new-cap': 'error',
    // 'new-parens': enforced by Prettier
    // 'newline-per-chained-call': enforced by Prettier
    'no-array-constructor': 'error',
    // 'no-bitwise': enforced by TypeScript
    // 'no-continue': desirable in many cases
    // 'no-inline-comments': desirable in many cases
    'no-lonely-if': 'error',
    // 'no-mixed-operators': enforced by Prettier
    // 'no-mixed-spaces-and-tabs': enforced by Prettier
    'no-multi-assign': 'error',
    // 'no-multiple-empty-lines': enforced by Prettier
    // 'no-negated-condition': not nuanced enough for global use
    // 'no-nested-ternary': desirable in many cases
    'no-new-object': 'error',
    // 'no-plusplus': desirable in many cases
    // 'no-restricted-syntax': project-specific
    // 'no-tabs': enforced by Prettier
    // 'no-ternary': desirable in many cases
    // 'no-trailing-spaces': enforced by Prettier
    // 'no-underscore-dangle': desirable for whitelisting unused names
    'no-unneeded-ternary': 'error',
    // 'no-whitespace-before-property': enforced by Prettier
    // 'nonblock-statement-body-position': enforced by Prettier
    // 'object-curly-newline': enforced by Prettier
    // 'object-curly-spacing': enforced by Prettier
    // 'object-property-newline': enforced by Prettier
    'one-var': ['error', 'never'],
    // 'one-var-declaration-per-line': enforced by 'one-var'
    'operator-assignment': 'error',
    // 'operator-linebreak': enforced by Prettier
    // 'padded-blocks': enforced by Prettier
    // 'padding-line-between-statements': not nuanced enough for global use
    // 'quote-props': enforced by Prettier
    // quotes: enforced by Prettier
    // 'require-jsdoc': enforced by TypeScript
    // semi: enforced by Prettier
    // 'semi-spacing': enforced by Prettier
    // 'semi-style': enforced by Prettier
    // 'sort-keys': not nuanced enough for global use
    // 'sort-vars': not nuanced enough for global use
    // 'space-before-blocks': enforced by Prettier
    // 'space-before-function-paren': enforced by Prettier
    // 'space-in-parens': enforced by Prettier
    // 'space-infix-ops': enforced by Prettier
    // 'space-unary-ops': enforced by Prettier
    'spaced-comment': [
      'error',
      'always',
      {
        line: { exceptions: ['/', '-', '='] },
        block: { exceptions: ['*'], balanced: true },
      },
    ],
    // 'switch-colon-spacing': enforced by Prettier
    // 'template-tag-spacing': enforced by Prettier
    // 'unicode-bom': enforced by Prettier
    // 'wrap-regex': enforced by Prettier

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
