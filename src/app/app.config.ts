import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app-routing/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideHotToastConfig } from '@ngneat/hot-toast';
import { XhrInterceptor } from './app-utils/interceptors/app-request.interceptors';
import { AuthActivateRouteGuard } from './app-services/routegurd-services/auth.routegurd';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideHttpClient(withInterceptorsFromDi()), provideHotToastConfig(), AuthActivateRouteGuard, { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }]
};
