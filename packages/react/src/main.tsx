import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import {
  provideMyDesignSystem,
  myPrimaryButton,
  mySecondaryButton,
} from '@my-design-system/elements';

import App from './app/app';

provideMyDesignSystem(document.body).register(myPrimaryButton(), mySecondaryButton());

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
