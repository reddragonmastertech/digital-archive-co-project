import { StyleSheet, Text, View } from 'react-native';
import { Card, ScreenContainer } from '../../components';
import { useTheme } from '../../theme';

const STATS = [
  { label: 'Active users', value: '12.4k' },
  { label: 'Uptime', value: '99.9%' },
  { label: 'Releases', value: '38' },
];

export function HomeScreen() {
  const { colors, spacing, radius, typography } = useTheme();

  return (
    <ScreenContainer
      title="Home"
      subtitle="Welcome back — here is what happened while you were away.">
      <View style={[styles.statsRow, { gap: spacing.md }]}>
        {STATS.map(stat => (
          <View
            key={stat.label}
            style={[
              styles.stat,
              {
                backgroundColor: colors.surface,
                borderColor: colors.border,
                borderRadius: radius.lg,
                padding: spacing.md,
              },
            ]}>
            <Text style={[typography.heading, { color: colors.primary }]}>
              {stat.value}
            </Text>
            <Text
              style={[
                typography.caption,
                { color: colors.textMuted, marginTop: spacing.xs },
              ]}>
              {stat.label}
            </Text>
          </View>
        ))}
      </View>

      <Card
        title="Getting started"
        description="Each tab below is a standalone screen under src/screens. Add your own by registering it in src/navigation/tabs.ts."
        style={{ marginTop: spacing.lg }}
      />

      <Card
        title="Recent activity"
        description="No new notifications. You are all caught up."
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  statsRow: {
    flexDirection: 'row',
  },
  stat: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
  },
});

export default HomeScreen;
