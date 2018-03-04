// Note that we are explicit about all options.
module.exports = {
  // We expand beyond the default 80, as TypeScript code can be pretty hard to
  // read when it is heavily line wrapped.
  //
  // Note that the eslint config does restrict comments to 80 columns.
  printWidth: 110,
  // JS community standard.
  tabWidth: 2,
  // JS community standard.
  semi: true,
  // JS community standard.
  singleQuote: true,
  // Consistent commas make it easier to move code around, and result in less
  // noise when diffing changes.
  trailingComma: 'all',
  // JS community standard.
  bracketSpacing: true,
  // JS community standard (for single line arrow functions).
  arrowParens: 'avoid',
  // Don't screw with line wrapping in markdown.
  proseWrap: 'preserve',
};
