import { InjectionToken, PLATFORM_ID, Inject, inject } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

export const localStorageToken = new InjectionToken<any>('local storage', {
    providedIn: 'root',
    factory() {
        const platformId = inject(PLATFORM_ID);
        return  isPlatformBrowser(platformId) ? localStorage : undefined;
    },
})