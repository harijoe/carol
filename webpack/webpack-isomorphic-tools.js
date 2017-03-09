const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')

const config = {
  webpack_assets_file_path: 'webpack/webpack-assets.json',
  webpack_stats_file_path: 'webpack/webpack-stats.json',
  assets: {
    images: {
      extensions: ['jpeg', 'jpg', 'png', 'gif', 'svg'],
      parser: WebpackIsomorphicToolsPlugin.url_loader_parser,
    },
    fonts: {
      extensions: ['woff', 'woff2', 'ttf', 'eot'],
      parser: WebpackIsomorphicToolsPlugin.url_loader_parser,
    },
    styles: {
      extensions: ['css'],
      filter(module, regular_expression, options, log) {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.style_loader_filter(module, regular_expression, options, log)
        }

        return null
      },
      path: WebpackIsomorphicToolsPlugin.style_loader_path_extractor,
      parser: WebpackIsomorphicToolsPlugin.css_loader_parser,
    },
  },
  modulesDirectories: ['src', 'node_modules'],
  patch_require: true,
}

module.exports = exports = config
