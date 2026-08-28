import { ScreenContainer } from '../../components';
import { HOME_SECTIONS } from './section';

/**
 * Home is a stack of full-bleed sections scrolled top to bottom.
 * The order lives in ./section/index.ts.
 */
export function HomeScreen() {
  return (
    <ScreenContainer
      title="Home"
      subtitle="Welcome back — here is what happened while you were away."
      padded={false}>
      {HOME_SECTIONS.map(({ id, Component }) => (
        <Component key={id} />
      ))}
    </ScreenContainer>
  );
}

export default HomeScreen;
