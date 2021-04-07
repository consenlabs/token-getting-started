const nextConfig = {
  target: 'serverless',

  pageExtensions: ['jsx', 'js', 'ts', 'tsx'],

  cssModules: true,

  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },

  env: {
    VERSION: require('./package.json').version,
  },

  trailingSlash: false,

  reactStrictMode: true,
}

module.exports = nextConfig
