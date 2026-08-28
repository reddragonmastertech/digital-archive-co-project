/**
 * Image registry.
 *
 * Drop files into this folder and register them here once, then reference
 * them by name instead of scattering `require('../../assets/...')` paths
 * through the app.
 *
 * Use @2x / @3x suffixes for density variants — Metro picks the right one
 * automatically from a single `require`.
 *
 * Example:
 *   logo.png, logo@2x.png, logo@3x.png
 *
 *   export const images = {
 *     emptyState: require('./empty-state.png'),
 *   } as const;
 *
 * Usage:
 *   import { images } from '../../assets';
 *   <Image source={images.logoTopbar} />
 */
export const images = {
  logoTopbar: require('./logo-topbar.png'),
} as const;

export type ImageName = keyof typeof images;
