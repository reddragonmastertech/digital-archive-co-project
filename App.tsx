/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useCallback, useState } from 'react';
import {
  Alert,
  Linking,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SideMenu, TopBar, type MenuItemId } from './src/components';
import { SUPPORT_EMAIL, TERMS_URL } from './src/config/links';
import { RootNavigator } from './src/navigation';
import { useTheme } from './src/theme';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppShell />
    </SafeAreaProvider>
  );
}

/**
 * App layout: a sticky header pinned above the navigator, which owns the
 * scrolling screens and the bottom tab bar.
 */
function AppShell() {
  const { colors } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuSelect = useCallback((id: MenuItemId) => {
    switch (id) {
      case 'terms':
        Linking.openURL(TERMS_URL).catch(() =>
          Alert.alert('Could not open the link'),
        );
        break;
      case 'support':
        Linking.openURL(`mailto:${SUPPORT_EMAIL}`).catch(() =>
          Alert.alert('No mail app found', SUPPORT_EMAIL),
        );
        break;
      case 'login':
        // TODO: replace with your auth flow.
        Alert.alert('Log in', 'Hook this up to your authentication flow.');
        break;
      case 'signup':
        // TODO: replace with your auth flow.
        Alert.alert('Sign up', 'Hook this up to your registration flow.');
        break;
    }
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <TopBar menuOpen={menuOpen} onMenuPress={() => setMenuOpen(true)} />
      <RootNavigator />
      <SideMenu
        visible={menuOpen}
        onClose={() => setMenuOpen(false)}
        onSelect={handleMenuSelect}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
