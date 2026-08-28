import type { ComponentType } from 'react';

/** Route names are derived from the tab config, so they stay in sync. */
export type TabRouteName = 'Home' | 'Features' | 'Prices' | 'Contact';

export type TabRoute = {
  name: TabRouteName;
  label: string;
  component: ComponentType;
};
