// https://github.com/stackblitz/core/issues/2366
import 'zone.js'; // Avoid error in StackBlitz for Angular polyfill

import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideRouter,
  withHashLocation,
  withInMemoryScrolling
} from '@angular/router';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes,
      withHashLocation(),
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })
    ),
    provideAnimations(),
    provideHttpClient()
  ]
}).catch(err => console.error(err));
