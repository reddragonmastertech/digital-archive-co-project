import { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../theme';
import { BottomTabBar } from './BottomTabBar';
import { INITIAL_TAB, TABS } from './tabs';
import type { TabRouteName } from './types';

/**
 * Minimal tab navigator. Screens mount lazily on first visit and then stay
 * mounted but hidden, so scroll offsets and form state survive tab switches.
 */
export function RootNavigator() {
  const { colors } = useTheme();
  const [activeTab, setActiveTab] = useState<TabRouteName>(INITIAL_TAB);
  const [mountedTabs, setMountedTabs] = useState<TabRouteName[]>([INITIAL_TAB]);

  const handleTabPress = useCallback((tab: TabRouteName) => {
    setActiveTab(tab);
    setMountedTabs(previous =>
      previous.includes(tab) ? previous : [...previous, tab],
    );
  }, []);

  return (
    <View style={[styles.root, { backgroundColor: colors.background }]}>
      <View style={styles.scene}>
        {TABS.map(tab => {
          if (!mountedTabs.includes(tab.name)) {
            return null;
          }

          const focused = tab.name === activeTab;
          const Screen = tab.component;

          return (
            <View
              key={tab.name}
              style={[StyleSheet.absoluteFill, !focused && styles.hidden]}
              pointerEvents={focused ? 'auto' : 'none'}
              accessibilityElementsHidden={!focused}
              importantForAccessibility={
                focused ? 'auto' : 'no-hide-descendants'
              }>
              <Screen />
            </View>
          );
        })}
      </View>

      <BottomTabBar activeTab={activeTab} onTabPress={handleTabPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  scene: {
    flex: 1,
  },
  hidden: {
    display: 'none',
  },
});

export default RootNavigator;
