import {
  accentColor,
  baseLayerLuminance,
  neutralColor,
  StandardLuminance,
  SwatchRGB,
} from '@microsoft/fast-components';
import { DesignSystem } from '@microsoft/fast-foundation';
import { parseColorHexRGB, ColorRGBA64 } from '@microsoft/fast-colors';

export { myPrimaryButton } from './lib/PrimaryButton';
export { mySecondaryButton } from './lib/SecondaryButton';

export function provideMyDesignSystem(element: HTMLElement): DesignSystem {
  baseLayerLuminance.withDefault(StandardLuminance.LightMode);

  const primary = SwatchRGB.from(parseColorHexRGB('#ecf8ff') as ColorRGBA64);
  neutralColor.setValueFor(element, primary);

  const secondary = SwatchRGB.from(parseColorHexRGB('#0660d4') as ColorRGBA64);
  accentColor.setValueFor(element, secondary);

  return DesignSystem.getOrCreate(element).withPrefix('my');
}
