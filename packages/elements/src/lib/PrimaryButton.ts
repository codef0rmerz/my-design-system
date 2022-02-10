import { Button, buttonStyles } from '@microsoft/fast-components';
import { css } from '@microsoft/fast-element';
import {
  buttonTemplate,
  ElementDefinitionContext,
  ButtonOptions,
  forcedColorsStylesheetBehavior,
} from '@microsoft/fast-foundation';

const myPrimaryButtonStyles = (context: ElementDefinitionContext, definition: ButtonOptions) =>
  css`
    ${buttonStyles(context, definition)}

    :host {
      --accent-fill-rest: green;
    }
  `.withBehaviors(
    forcedColorsStylesheetBehavior(
      css`
        :host {
          --accent-fill-rest: red;
        }
      `
    )
  );

export const myPrimaryButton = Button.compose({
  baseName: 'primary-button',
  template: buttonTemplate as never,
  styles: myPrimaryButtonStyles as never,
});
