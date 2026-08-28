import type { ComponentType } from 'react';
import { AboutSection } from './AboutSection';
import { CtaSection } from './CtaSection';
import { HeroSection } from './HeroSection';
import { ServicesSection } from './ServicesSection';
import { ShowcaseSection } from './ShowcaseSection';
import { TestimonialsSection } from './TestimonialsSection';

export type HomeSectionEntry = {
  id: string;
  Component: ComponentType;
};

/**
 * Home page sections, in the order they scroll from top to bottom.
 * Add, remove or reorder here — HomeScreen just renders this list.
 */
export const HOME_SECTIONS: HomeSectionEntry[] = [
  { id: 'hero', Component: HeroSection },
  { id: 'services', Component: ServicesSection },
  { id: 'about', Component: AboutSection },
  { id: 'showcase', Component: ShowcaseSection },
  { id: 'testimonials', Component: TestimonialsSection },
  { id: 'cta', Component: CtaSection },
];

export {
  AboutSection,
  CtaSection,
  HeroSection,
  ServicesSection,
  ShowcaseSection,
  TestimonialsSection,
};
export { HomeSection, type SectionTint } from './HomeSection';
