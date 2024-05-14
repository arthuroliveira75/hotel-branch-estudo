import { Component, OnInit, Self } from '@angular/core'
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  // providers: [RoomsService]
}) 
export class EmployeeComponent implements OnInit {

  empName: string = 'John';

  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {
  }

}

//6:32:28