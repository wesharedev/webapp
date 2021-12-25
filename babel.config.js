module.exports = {
  plugins: [
    '@babel/plugin-transform-runtime',
    'react-hot-loader/babel',
    [
      '@babel/plugin-proposal-decorators',
      { legacy: true },
    ],
    [
      '@babel/plugin-proposal-class-properties',
      { loose: true },
    ],
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.*',
        ],
        alias: {
          '~': './src/',
        },
      },
    ],
  ],
}
