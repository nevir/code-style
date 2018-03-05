const { prettier } = require('@nevir/code-style'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = Object.assign({}, prettier, {
  trailingComma: 'es5',
});
