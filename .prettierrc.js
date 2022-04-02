module.exports = {
  plugins: [
    require.resolve('prettier-plugin-organize-imports'),
    require.resolve('prettier-plugin-package'),
  ],
  proseWrap: 'always',
  singleQuote: true,
};