const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  // 按需加载 antd
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  // 添加加载 less 的 javascriptEnabled 和 antd 的主题配置。
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { '@primary-color': '#1DA57A' },
    }
  }),
);
