import { Card, ScreenContainer } from '../../components';

const FEATURES = [
  {
    title: 'Typed navigation',
    description:
      'Tab routes are defined once in a config file and typed end to end.',
  },
  {
    title: 'Themed by tokens',
    description:
      'Colors, spacing and type come from src/theme and follow the OS light/dark setting.',
  },
  {
    title: 'State preserving tabs',
    description:
      'Visited screens stay mounted, so scroll position and form input survive tab switches.',
  },
  {
    title: 'No extra dependencies',
    description:
      'Built on plain React Native primitives — no native rebuild required.',
  },
];

export function FeaturesScreen() {
  return (
    <ScreenContainer
      title="Features"
      subtitle="What ships in this starter out of the box.">
      {FEATURES.map(feature => (
        <Card
          key={feature.title}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </ScreenContainer>
  );
}

export default FeaturesScreen;
