import { provideMyDesignSystem, myPrimaryButton, mySecondaryButton } from '../src';

import '!style-loader!css-loader!../../../packages/elements/src/assets/variables.css';

provideMyDesignSystem().register(myPrimaryButton(), mySecondaryButton());
