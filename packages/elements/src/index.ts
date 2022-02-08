import { baseLayerLuminance, StandardLuminance } from '@microsoft/fast-components';
import { DesignSystem } from '@microsoft/fast-foundation';

export { myPrimaryButton } from './lib/PrimaryButton';
export { mySecondaryButton } from './lib/SecondaryButton';

export function provideMyDesignSystem(element?: HTMLElement): DesignSystem {
  baseLayerLuminance.withDefault(StandardLuminance.LightMode);
  return DesignSystem.getOrCreate(element).withPrefix('my');
}
