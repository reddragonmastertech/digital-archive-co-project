import { StyleSheet, Text, View } from 'react-native';
import { Card, ScreenContainer } from '../../components';
import { useTheme } from '../../theme';

const PLANS = [
  {
    name: 'Starter',
    price: '$0',
    period: '/month',
    perks: ['1 project', 'Community support', 'Basic analytics'],
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/month',
    perks: ['Unlimited projects', 'Priority support', 'Advanced analytics'],
    highlighted: true,
  },
  {
    name: 'Team',
    price: '$49',
    period: '/month',
    perks: ['Everything in Pro', 'Shared workspaces', 'Audit log'],
    highlighted: false,
  },
];

export function PricesScreen() {
  const { colors, spacing, radius, typography } = useTheme();

  return (
    <ScreenContainer
      title="Prices"
      subtitle="Simple pricing. Cancel any time.">
      {PLANS.map(plan => (
        <Card key={plan.name} highlighted={plan.highlighted}>
          <View style={styles.planHeader}>
            <Text style={[typography.heading, { color: colors.text }]}>
              {plan.name}
            </Text>
            {plan.highlighted ? (
              <View
                style={[
                  styles.badge,
                  {
                    backgroundColor: colors.primarySoft,
                    borderRadius: radius.pill,
                    paddingHorizontal: spacing.md,
                    paddingVertical: spacing.xs,
                  },
                ]}>
                <Text style={[typography.caption, { color: colors.primary }]}>
                  Popular
                </Text>
              </View>
            ) : null}
          </View>

          <View style={[styles.priceRow, { marginTop: spacing.sm }]}>
            <Text style={[typography.title, { color: colors.text }]}>
              {plan.price}
            </Text>
            <Text
              style={[
                typography.body,
                { color: colors.textMuted, marginLeft: spacing.xs },
              ]}>
              {plan.period}
            </Text>
          </View>

          <View style={{ marginTop: spacing.md }}>
            {plan.perks.map(perk => (
              <View key={perk} style={[styles.perk, { marginTop: spacing.xs }]}>
                <View
                  style={[styles.dot, { backgroundColor: colors.primary }]}
                />
                <Text
                  style={[
                    typography.body,
                    { color: colors.textMuted, marginLeft: spacing.sm },
                  ]}>
                  {perk}
                </Text>
              </View>
            ))}
          </View>
        </Card>
      ))}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  planHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  badge: {
    alignSelf: 'flex-start',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  perk: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
});

export default PricesScreen;
