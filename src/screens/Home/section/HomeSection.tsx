import type { PropsWithChildren } from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { useTheme } from '../../../theme';

export type SectionTint = {
  light: string;
  dark: string;
};

type HomeSectionProps = PropsWithChildren<{
  /** Placeholder label — remove once the section renders real content. */
  name: string;
  tint: SectionTint;
  /** Height as a fraction of the viewport. */
  heightRatio?: number;
}>;

/**
 * Layout primitive every Home section renders through: a full-bleed band that
 * stacks vertically inside the Home scroll view.
 *
 * While sections are still empty it shows its name on a flat tint so the
 * scroll order is visible.
 */
export function HomeSection({
  name,
  tint,
  heightRatio = 0.6,
  children,
}: HomeSectionProps) {
  const { isDark, spacing, typography } = useTheme();
  const { height } = useWindowDimensions();

  return (
    <View
      style={[
        styles.section,
        {
          backgroundColor: isDark ? tint.dark : tint.light,
          minHeight: height * heightRatio,
          paddingHorizontal: spacing.lg,
          paddingVertical: spacing.xl,
        },
      ]}>
      {children ?? (
        <Text style={[typography.title, styles.placeholder]}>{name}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholder: {
    color: '#FFFFFF',
    opacity: 0.85,
  },
});

export default HomeSection;
