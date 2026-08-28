import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../theme';

export type MenuItemId = 'terms' | 'support' | 'login' | 'signup';

/** Rows above the divider — informational links. */
const LINK_ITEMS: { id: MenuItemId; label: string }[] = [
  { id: 'terms', label: 'Terms and Privacy' },
  { id: 'support', label: 'Support' },
];

const OPEN_DURATION = 220;
const CLOSE_DURATION = 180;
const MAX_WIDTH = 320;

type SideMenuProps = {
  visible: boolean;
  onClose: () => void;
  onSelect: (id: MenuItemId) => void;
};

/**
 * Slide-in side menu, anchored to the right to match the hamburger button.
 *
 * The Modal stays mounted for the length of the closing animation, otherwise
 * the drawer would vanish instantly instead of sliding out.
 */
export function SideMenu({ visible, onClose, onSelect }: SideMenuProps) {
  const { colors, spacing, radius, typography } = useTheme();
  const insets = useSafeAreaInsets();
  const { width: windowWidth } = useWindowDimensions();
  const progress = useRef(new Animated.Value(0)).current;
  const [rendered, setRendered] = useState(visible);

  const drawerWidth = Math.min(MAX_WIDTH, windowWidth * 0.82);

  useEffect(() => {
    if (visible) {
      setRendered(true);
      return;
    }

    Animated.timing(progress, {
      toValue: 0,
      duration: CLOSE_DURATION,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) {
        setRendered(false);
      }
    });
  }, [visible, progress]);

  useEffect(() => {
    if (rendered && visible) {
      Animated.timing(progress, {
        toValue: 1,
        duration: OPEN_DURATION,
        useNativeDriver: true,
      }).start();
    }
  }, [rendered, visible, progress]);

  const handlePress = (id: MenuItemId) => {
    onSelect(id);
    onClose();
  };

  const translateX = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [drawerWidth, 0],
  });

  return (
    <Modal
      visible={rendered}
      transparent
      animationType="none"
      statusBarTranslucent
      onRequestClose={onClose}>
      <View style={styles.root}>
        <Animated.View
          style={[styles.backdropFill, { opacity: progress }]}
          pointerEvents="none"
        />
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Close menu"
          style={styles.backdropTouch}
          onPress={onClose}
        />

        <Animated.View
          accessibilityViewIsModal
          style={[
            styles.drawer,
            {
              width: drawerWidth,
              backgroundColor: colors.surface,
              borderLeftColor: colors.border,
              paddingTop: insets.top + spacing.lg,
              paddingBottom: insets.bottom + spacing.lg,
              paddingHorizontal: spacing.lg,
              shadowColor: colors.shadow,
              transform: [{ translateX }],
            },
          ]}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Close menu"
            hitSlop={10}
            onPress={onClose}
            style={({ pressed }) => [
              styles.closeButton,
              {
                borderRadius: radius.md,
                backgroundColor: pressed ? colors.surfaceAlt : 'transparent',
              },
            ]}>
            <View style={styles.closeIcon}>
              <View
                style={[
                  styles.closeLine,
                  styles.closeLineForward,
                  { backgroundColor: colors.text },
                ]}
              />
              <View
                style={[
                  styles.closeLine,
                  styles.closeLineBack,
                  { backgroundColor: colors.text },
                ]}
              />
            </View>
          </Pressable>

          <View style={{ marginTop: spacing.md }}>
            {LINK_ITEMS.map(item => (
              <Pressable
                key={item.id}
                accessibilityRole="menuitem"
                onPress={() => handlePress(item.id)}
                style={({ pressed }) => [
                  styles.row,
                  {
                    borderRadius: radius.md,
                    paddingVertical: spacing.md,
                    paddingHorizontal: spacing.md,
                    backgroundColor: pressed
                      ? colors.surfaceAlt
                      : 'transparent',
                  },
                ]}>
                <Text style={[typography.body, { color: colors.text }]}>
                  {item.label}
                </Text>
              </Pressable>
            ))}
          </View>

          {/* Auth actions sit at the bottom, away from the link list. */}
          <View style={styles.spacer} />

          <View
            style={[
              styles.divider,
              { backgroundColor: colors.border, marginBottom: spacing.lg },
            ]}
          />

          <Pressable
            accessibilityRole="button"
            onPress={() => handlePress('login')}
            style={({ pressed }) => [
              styles.button,
              {
                borderRadius: radius.md,
                borderColor: colors.border,
                paddingVertical: spacing.md,
                backgroundColor: pressed ? colors.surfaceAlt : 'transparent',
              },
            ]}>
            <Text style={[typography.tabLabel, { color: colors.text }]}>
              Log in
            </Text>
          </Pressable>

          <Pressable
            accessibilityRole="button"
            onPress={() => handlePress('signup')}
            style={({ pressed }) => [
              styles.button,
              styles.buttonPrimary,
              {
                borderRadius: radius.md,
                paddingVertical: spacing.md,
                marginTop: spacing.sm,
                backgroundColor: colors.primary,
                opacity: pressed ? 0.85 : 1,
              },
            ]}>
            <Text style={[typography.tabLabel, styles.buttonPrimaryLabel]}>
              Sign up
            </Text>
          </Pressable>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  backdropFill: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(15, 23, 42, 0.45)',
  },
  backdropTouch: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  drawer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    borderLeftWidth: StyleSheet.hairlineWidth,
    shadowOffset: { width: -4, height: 0 },
    shadowOpacity: 0.18,
    shadowRadius: 20,
    elevation: 16,
  },
  closeButton: {
    alignSelf: 'flex-end',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    width: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeLine: {
    position: 'absolute',
    width: 18,
    height: 2,
    borderRadius: 1,
  },
  closeLineForward: {
    transform: [{ rotate: '45deg' }],
  },
  closeLineBack: {
    transform: [{ rotate: '-45deg' }],
  },
  row: {
    justifyContent: 'center',
  },
  spacer: {
    flex: 1,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
  },
  button: {
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
  },
  buttonPrimary: {
    borderColor: 'transparent',
  },
  buttonPrimaryLabel: {
    color: '#FFFFFF',
  },
});

export default SideMenu;
