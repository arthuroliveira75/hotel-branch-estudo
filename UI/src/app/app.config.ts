import { ApplicationConfig, Provider, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { RequestInterceptor } from './request.interceptor';

/** Provider for the Noop Interceptor. */
export const noopRequestInterceptor: Provider =
  { 
    provide: HTTP_INTERCEPTORS, 
    useClass: RequestInterceptor,
    multi: true 
  };



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(HttpClientModule),
    noopRequestInterceptor,
  ]
};

