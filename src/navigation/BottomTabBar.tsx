import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../theme';
import { TABS } from './tabs';
import type { TabRouteName } from './types';

type BottomTabBarProps = {
  activeTab: TabRouteName;
  onTabPress: (tab: TabRouteName) => void;
};

/**
 * Pill-style bottom bar: the focused tab gets a soft rounded background
 * and the accent color, the rest stay plain text.
 */
export function BottomTabBar({ activeTab, onTabPress }: BottomTabBarProps) {
  const { colors, spacing, radius, typography } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.bar,
        {
          backgroundColor: colors.tabBar,
          borderTopColor: colors.border,
          paddingTop: spacing.sm,
          paddingHorizontal: spacing.sm,
          // Keep the bar clear of the home indicator / gesture area.
          paddingBottom: Math.max(insets.bottom, spacing.sm),
          shadowColor: colors.shadow,
        },
      ]}>
      {TABS.map(tab => {
        const focused = tab.name === activeTab;

        return (
          <Pressable
            key={tab.name}
            accessibilityRole="tab"
            accessibilityState={{ selected: focused }}
            accessibilityLabel={tab.label}
            hitSlop={8}
            onPress={() => onTabPress(tab.name)}
            style={({ pressed }) => [
              styles.tab,
              {
                borderRadius: radius.md,
                paddingVertical: spacing.sm,
                paddingHorizontal: spacing.md,
                backgroundColor: focused ? colors.primarySoft : 'transparent',
                opacity: pressed && !focused ? 0.6 : 1,
              },
            ]}>
            <Text
              numberOfLines={1}
              style={[
                typography.tabLabel,
                { color: focused ? colors.primary : colors.text },
              ]}>
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: StyleSheet.hairlineWidth,
    // iOS shadow / Android elevation for the lift seen in the mock.
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 12,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BottomTabBar;
