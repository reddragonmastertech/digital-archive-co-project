import type { PropsWithChildren } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../theme';

type ScreenContainerProps = PropsWithChildren<{
  title: string;
  subtitle?: string;
}>;

/**
 * Shared screen chrome: page heading and a scrollable body. Every tab screen
 * renders through this.
 *
 * The top safe-area inset belongs to <TopBar>, which sits above this, so no
 * inset padding is applied here.
 */
export function ScreenContainer({
  title,
  subtitle,
  children,
}: ScreenContainerProps) {
  const { colors, spacing, typography } = useTheme();

  return (
    <View style={[styles.root, { backgroundColor: colors.background }]}>
      <ScrollView
        contentContainerStyle={[
          styles.content,
          {
            paddingTop: spacing.lg,
            paddingHorizontal: spacing.lg,
            paddingBottom: spacing.xxl,
          },
        ]}
        showsVerticalScrollIndicator={false}>
        <Text style={[typography.title, { color: colors.text }]}>{title}</Text>
        {subtitle ? (
          <Text
            style={[
              typography.body,
              styles.subtitle,
              { color: colors.textMuted, marginBottom: spacing.lg },
            ]}>
            {subtitle}
          </Text>
        ) : (
          <View style={{ height: spacing.lg }} />
        )}
        {children}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
  subtitle: {
    marginTop: 6,
  },
});

export default ScreenContainer;
