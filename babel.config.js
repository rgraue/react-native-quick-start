module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        alias: {
          '@appRealm': ([, name]) => {
            return './src/appRealm/';
          },
          '@styles': ([, name]) => {
            return './src/styles/';
          },
          '@components': ([, name]) => {
            return './src/components/';
          },
          '@controllers': ([, name]) => {
            return './src/controllers/';
          },
          '@services': ([, name]) => {
            return './src/services/';
          },
          '@screens': ([, name]) => {
            return './src/screens/';
          },
          '@utils': ([, name]) => {
            return './src/utils/';
          },
          '@models': ([, name]) => {
            return './src/models/';
          },
          '@store': ([, name]) => {
            return './src/store/';
          },
        },
      },
    ],
  ],
};
