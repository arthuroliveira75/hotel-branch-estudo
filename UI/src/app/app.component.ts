import { AfterViewInit, Component, ElementRef, Inject, NgModule, OnInit, Optional, ViewChild, ViewContainerRef, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { ContainerComponent } from "./container/container.component";
import { EmployeeComponent } from './employee/employee.component';
import { LoggerService } from './logger.service';
import { localStorageToken } from './localstorage.token';

// NgModule({
//   imports:[EmployeeComponent],
//   declarations: [EmployeeComponent],
//   providers:[],
// })


@Component({
    selector: 'hinv-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, RoomsComponent, RoomsListComponent, ContainerComponent, EmployeeComponent]
})
export class AppComponent implements OnInit {
  title = 'hotelinventory';

  @ViewChild('name', {static: true}) name!: ElementRef;

  constructor(@Optional() private loggerService: LoggerService,
  @Inject(localStorageToken) private localStorage: any) {

  }

  ngOnInit(): void {
    this.loggerService?.log('AppComponent.ngOnInit()');
    this.name.nativeElement.innerText = 'Hilton Hotel';
    this.localStorage.setItem('name', 'Arthur');
   }



//  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;


//   ngAfterViewInit() {
//     const componentRef = this.vcr.createComponent(RoomsComponent);
//     componentRef.instance.numberOfRooms = 50;
//}
  

}
