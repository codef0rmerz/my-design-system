import { Component } from '@angular/core';
import { baseLayerLuminance, StandardLuminance } from '@microsoft/fast-components';

@Component({
  selector: 'my-design-system-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular';

  activateLightMode() {
    baseLayerLuminance.setValueFor(document.body, StandardLuminance.LightMode);
  }

  activateDarkMode() {
    baseLayerLuminance.setValueFor(document.body, StandardLuminance.DarkMode);
  }
}
