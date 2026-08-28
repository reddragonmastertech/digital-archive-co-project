import {
  ContactScreen,
  FeaturesScreen,
  HomeScreen,
  PricesScreen,
} from '../screens';
import type { TabRoute } from './types';

/**
 * Single source of truth for the bottom bar. Add a screen here and it
 * appears in the tab bar automatically.
 */
export const TABS: readonly TabRoute[] = [
  { name: 'Home', label: 'Home', component: HomeScreen },
  { name: 'Features', label: 'Features', component: FeaturesScreen },
  { name: 'Prices', label: 'Prices', component: PricesScreen },
  { name: 'Contact', label: 'Contact', component: ContactScreen },
];

export const INITIAL_TAB = TABS[0].name;
