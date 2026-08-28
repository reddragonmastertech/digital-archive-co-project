/**
 * Color palettes. Everything visual should reference these tokens,
 * never a raw hex value.
 */

export type Palette = {
  background: string;
  surface: string;
  surfaceAlt: string;
  text: string;
  textMuted: string;
  primary: string;
  primarySoft: string;
  border: string;
  tabBar: string;
  shadow: string;
};

export const lightPalette: Palette = {
  background: '#F8FAFC',
  surface: '#FFFFFF',
  surfaceAlt: '#F1F5F9',
  text: '#111827',
  textMuted: '#64748B',
  primary: '#3B82F6',
  primarySoft: '#EBF3FF',
  border: '#E5E7EB',
  tabBar: '#FFFFFF',
  shadow: '#0F172A',
};

export const darkPalette: Palette = {
  background: '#0B1220',
  surface: '#151C2C',
  surfaceAlt: '#1E293B',
  text: '#F8FAFC',
  textMuted: '#94A3B8',
  primary: '#60A5FA',
  primarySoft: '#1E293B',
  border: '#1F2A3C',
  tabBar: '#111827',
  shadow: '#000000',
};
