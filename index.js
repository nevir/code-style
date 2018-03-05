module.exports = {
  get eslint() {
    return require('./eslint/config'); // eslint-disable-line global-require, import/no-internal-modules
  },
  get prettier() {
    return require('./prettier/config'); // eslint-disable-line global-require, import/no-internal-modules
  },
};
