/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  resolver: {
    sourceExts: ['jsx', 'js', 'ts', 'tsx'], // Thêm các định dạng file mà bạn sử dụng cho ứng dụng của mình
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  hermes: {
    enabled: false, // Tắt Hermes
  },
};
