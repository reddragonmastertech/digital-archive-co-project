import { useColorScheme } from 'react-native';
import { darkPalette, lightPalette, type Palette } from './colors';
import { radius, spacing } from './spacing';
import { typography } from './typography';

export type Theme = {
  colors: Palette;
  spacing: typeof spacing;
  radius: typeof radius;
  typography: typeof typography;
  isDark: boolean;
};

/**
 * Single entry point for design tokens. Follows the OS light/dark setting.
 */
export function useTheme(): Theme {
  const isDark = useColorScheme() === 'dark';

  return {
    colors: isDark ? darkPalette : lightPalette,
    spacing,
    radius,
    typography,
    isDark,
  };
}

export { darkPalette, lightPalette, radius, spacing, typography };
export type { Palette };
