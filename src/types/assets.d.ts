/**
 * Ambient declarations so TypeScript accepts asset imports.
 * React Native's base tsconfig does not ship these.
 */

declare module '*.png' {
  import type { ImageSourcePropType } from 'react-native';
  const content: ImageSourcePropType;
  export default content;
}

declare module '*.jpg' {
  import type { ImageSourcePropType } from 'react-native';
  const content: ImageSourcePropType;
  export default content;
}

declare module '*.jpeg' {
  import type { ImageSourcePropType } from 'react-native';
  const content: ImageSourcePropType;
  export default content;
}

declare module '*.gif' {
  import type { ImageSourcePropType } from 'react-native';
  const content: ImageSourcePropType;
  export default content;
}

declare module '*.webp' {
  import type { ImageSourcePropType } from 'react-native';
  const content: ImageSourcePropType;
  export default content;
}

/**
 * Requires `react-native-svg` + `react-native-svg-transformer`.
 * Harmless if unused.
 */
declare module '*.svg' {
  import type { FC } from 'react';
  import type { SvgProps } from 'react-native-svg';
  const content: FC<SvgProps>;
  export default content;
}
