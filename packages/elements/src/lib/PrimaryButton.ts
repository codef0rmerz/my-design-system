import { Button, buttonStyles } from '@microsoft/fast-components';
import { css } from '@microsoft/fast-element';
import {
  buttonTemplate,
  ElementDefinitionContext,
  ButtonOptions,
} from '@microsoft/fast-foundation';

const myPrimaryButtonStyles = (context: ElementDefinitionContext, definition: ButtonOptions) => css`
  ${buttonStyles(context, definition)}

  :host {
    height: 50px;
  }
`;

export const myPrimaryButton = Button.compose({
  baseName: 'primary-button',
  template: buttonTemplate as never,
  styles: myPrimaryButtonStyles as never,
});
