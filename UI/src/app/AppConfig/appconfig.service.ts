import { InjectionToken } from "@angular/core";
import { AppConfig } from "./appconfig.interface";
import { environment } from '../environments/environment';

export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('app.config', {
    providedIn: 'root',
    factory: () => APP_CONFIG
});
    

export const APP_CONFIG: AppConfig = {
    apiEndpoint: environment.apiEndpoint
};