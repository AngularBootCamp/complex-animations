import { Component } from '@angular/core';

import { routeChange } from './routing.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeChange]
})
export class AppComponent {}
