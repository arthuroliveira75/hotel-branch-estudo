import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from "./app.component";
import { RoomsComponent } from "./rooms/rooms.component";
import { Router, RouterModule } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { ContainerComponent } from "./container/container.component";
import { EmployeeComponent } from "./employee/employee.component";
import { RoomsListComponent } from "./rooms/rooms-list/rooms-list.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { RequestInterceptor } from './request.interceptor';
import { Init } from 'v8';
import { Observable, tap } from 'rxjs';
import { config } from 'process';
import { InitService } from './init.service';


function initFactory(initService: InitService){
  return () => initService.init();
}

// function initializeAppFactory(httpClient: HttpClient): () => Observable<any> 


@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomsListComponent,
    HeaderComponent,
    ContainerComponent,
    EmployeeComponent,
    RequestInterceptor,
  ],
  imports: [CommonModule, AppModule, HttpClientModule, BrowserModule, RouterModule],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [InitService],
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }




