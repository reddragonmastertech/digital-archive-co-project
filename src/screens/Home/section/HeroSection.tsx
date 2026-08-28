import { HomeSection } from './HomeSection';

export function HeroSection() {
  return (
    <HomeSection
      name="Hero"
      tint={{ light: '#2563EB', dark: '#1D4ED8' }}
      heightRatio={0.75}
    />
  );
}

export default HeroSection;
