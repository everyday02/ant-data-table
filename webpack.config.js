// Learn more on how to config.
// - https://github.com/ant-tool/atool-build#配置扩展


module.exports = function(webpackConfig) {
  console.info(webpackConfig);
  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.babel.plugins.push(['import', {
    libraryName: 'antd',
    style: 'css'
  }]);

  return webpackConfig;
};
