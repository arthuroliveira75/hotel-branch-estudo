import { AfterContentInit, Component, ContentChild, Host, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';
import { RoomsComponent } from '../rooms/rooms.component';
import { HeaderComponent } from '../header/header.component';
import { RoomsListComponent } from '../rooms/rooms-list/rooms-list.component';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';


@Component({
  selector: 'hinv-container',
  standalone: true,
  imports: [AppComponent, RoomsComponent, RoomsListComponent, HeaderComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
  providers: [RoomsService]
})
export class ContainerComponent implements OnInit, AfterContentInit {

  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log(this.employee);
    this.employee.empName = 'Rick';
  }

}

// 6:39:18