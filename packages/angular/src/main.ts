import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  provideMyDesignSystem,
  myPrimaryButton,
  mySecondaryButton,
} from '@my-design-system/elements';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

provideMyDesignSystem().register(myPrimaryButton(), mySecondaryButton());

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
