import { Button, buttonStyles } from '@microsoft/fast-components';
import { css } from '@microsoft/fast-element';
import {
  buttonTemplate,
  ElementDefinitionContext,
  ButtonOptions,
} from '@microsoft/fast-foundation';

const mySecondaryButtonStyles = (
  context: ElementDefinitionContext,
  definition: ButtonOptions
) => css`
  ${buttonStyles(context, definition)}

  :host {
    height: 100px;
  }
`;

export const mySecondaryButton = Button.compose({
  baseName: 'secondary-button',
  template: buttonTemplate as never,
  styles: mySecondaryButtonStyles as never,
});
