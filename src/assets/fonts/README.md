# Fonts

Drop `.ttf` / `.otf` files here, then link them into the native projects:

```sh
npx react-native-asset
```

`react-native.config.js` at the repo root already points asset linking at this
folder. Linking copies fonts into `android/app/src/main/assets/fonts` and
registers them in the iOS `Info.plist` — it must be re-run whenever you add or
remove a font file, followed by a native rebuild (`npm run android` / `npm run ios`).

## Using a font

Reference it by its **PostScript name**, not the filename:

```ts
// src/theme/typography.ts
export const typography = {
  title: { fontFamily: 'Inter-Bold', fontSize: 28 },
} as const;
```

On Android the family name must match the filename (`Inter-Bold.ttf` →
`'Inter-Bold'`). On iOS it must match the font's internal PostScript name,
which is not always the same as the filename — check with Font Book, or
inspect the file if a font renders as the system default after linking.
