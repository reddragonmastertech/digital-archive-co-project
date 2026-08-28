import { Image, Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { images } from '../assets';
import { useTheme } from '../theme';

const LOGO_HEIGHT = 26;

/** Height of the bar below the status bar. Exported so the menu can anchor to it. */
export const TOP_BAR_HEIGHT = 56;

/**
 * The logo ships at an unknown size, so derive its width from the real
 * asset dimensions instead of hard-coding an aspect ratio.
 */
const logoSource = Image.resolveAssetSource(images.logoTopbar);
const LOGO_WIDTH =
  logoSource?.width && logoSource?.height
    ? Math.round(LOGO_HEIGHT * (logoSource.width / logoSource.height))
    : 120;

type TopBarProps = {
  onMenuPress: () => void;
  menuOpen?: boolean;
};

function HamburgerIcon({ color }: { color: string }) {
  return (
    <View style={styles.hamburger}>
      <View style={[styles.hamburgerLine, { backgroundColor: color }]} />
      <View style={[styles.hamburgerLine, { backgroundColor: color }]} />
      <View style={[styles.hamburgerLine, { backgroundColor: color }]} />
    </View>
  );
}

/**
 * Sticky app header: logo on the left, hamburger on the right.
 *
 * It renders above the screen container rather than inside it, so it stays
 * put while screen content scrolls underneath.
 */
export function TopBar({ onMenuPress, menuOpen = false }: TopBarProps) {
  const { colors, spacing, radius } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.bar,
        {
          backgroundColor: colors.tabBar,
          borderBottomColor: colors.border,
          paddingTop: insets.top,
          paddingHorizontal: spacing.lg,
          shadowColor: colors.shadow,
        },
      ]}>
      <View style={styles.row}>
        <Image
          source={images.logoTopbar}
          style={{ height: LOGO_HEIGHT, width: LOGO_WIDTH }}
          resizeMode="contain"
          accessibilityRole="image"
          accessibilityLabel="FamArchive"
        />

        <Pressable
          accessibilityRole="button"
          accessibilityLabel={menuOpen ? 'Close menu' : 'Open menu'}
          accessibilityState={{ expanded: menuOpen }}
          hitSlop={10}
          onPress={onMenuPress}
          style={({ pressed }) => [
            styles.menuButton,
            {
              borderRadius: radius.md,
              backgroundColor:
                menuOpen || pressed ? colors.primarySoft : 'transparent',
            },
          ]}>
          <HamburgerIcon color={menuOpen ? colors.primary : colors.text} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    // Lifts the header above the scrolling content on both platforms.
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 4,
    zIndex: 10,
  },
  row: {
    height: TOP_BAR_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hamburger: {
    width: 22,
    height: 16,
    justifyContent: 'space-between',
  },
  hamburgerLine: {
    height: 2,
    borderRadius: 1,
  },
});

export default TopBar;
