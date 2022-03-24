const webpackConfig = require('@nrwl/react/plugins/webpack');

module.exports = (config) => {
  config.target = 'web';
  config.module.rules.push({
    test: /\.(png|jpeg|jpg|gif|jp2|webp|ico|svg)$/,
    loader: 'file-loader',
  });
  return webpackConfig(config);
};
