/**
 * Points `npx react-native-asset` at the fonts folder so custom fonts get
 * copied into the Android/iOS projects. Re-run it after adding a font.
 */
module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./src/assets/fonts'],
};
