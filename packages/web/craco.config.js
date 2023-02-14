module.exports = {
  webpack: {
      configure: (webpackConfig, { env, paths }) => {
          // eslint-disable-next-line no-param-reassign
          webpackConfig.resolve.symlinks = true;
          webpackConfig.resolve.fallback = {
            "path": false,
            "fs": false,
            "react-native": false,
            "react-native-reanimated": false
          };
          return webpackConfig;
      },
  },
}