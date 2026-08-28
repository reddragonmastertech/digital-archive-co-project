import { HomeSection } from './HomeSection';

export function CtaSection() {
  return (
    <HomeSection
      name="Call to action"
      tint={{ light: '#111827', dark: '#0B1220' }}
      heightRatio={0.45}
    />
  );
}

export default CtaSection;
