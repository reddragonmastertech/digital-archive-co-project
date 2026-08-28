/**
 * Icon registry.
 *
 * Keep small, single-color UI glyphs here (tab bar, buttons, list chevrons)
 * separate from content imagery in ../images.
 *
 * Example:
 *   export const icons = {
 *     home: require('./home.png'),
 *     settings: require('./settings.png'),
 *   } as const;
 *
 * For PNG glyphs, tint them at the call site so they follow the theme:
 *   <Image source={icons.home} style={{ tintColor: colors.primary }} />
 *
 * For SVG instead, add `react-native-svg` + `react-native-svg-transformer`
 * and export components from this file.
 */
export const icons = {} as const;

export type IconName = keyof typeof icons;
