import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  provideMyDesignSystem,
  myPrimaryButton,
  mySecondaryButton,
} from '@my-design-system/elements';

import { fastCard } from '@microsoft/fast-components';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

provideMyDesignSystem(document.body).register(myPrimaryButton(), mySecondaryButton(), fastCard());

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
