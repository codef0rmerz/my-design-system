import React from 'react';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import { myPrimaryButton, mySecondaryButton } from '@my-design-system/elements';

const { wrap } = provideReactWrapper(React);

export const MyPrimaryButton = wrap(myPrimaryButton());
export const MySecondaryButton = wrap(mySecondaryButton());
