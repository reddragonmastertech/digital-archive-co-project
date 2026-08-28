import type { PropsWithChildren } from 'react';
import { StyleSheet, Text, View, type ViewStyle } from 'react-native';
import { useTheme } from '../theme';

type CardProps = PropsWithChildren<{
  title?: string;
  description?: string;
  style?: ViewStyle;
  highlighted?: boolean;
}>;

/**
 * Neutral surface block used across the tab screens.
 */
export function Card({
  title,
  description,
  style,
  highlighted = false,
  children,
}: CardProps) {
  const { colors, spacing, radius, typography } = useTheme();

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.surface,
          borderColor: highlighted ? colors.primary : colors.border,
          borderWidth: highlighted ? 2 : StyleSheet.hairlineWidth,
          borderRadius: radius.lg,
          padding: spacing.lg,
          marginBottom: spacing.md,
        },
        style,
      ]}>
      {title ? (
        <Text style={[typography.heading, { color: colors.text }]}>{title}</Text>
      ) : null}
      {description ? (
        <Text
          style={[
            typography.body,
            { color: colors.textMuted, marginTop: title ? spacing.xs : 0 },
          ]}>
          {description}
        </Text>
      ) : null}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
  },
});

export default Card;
