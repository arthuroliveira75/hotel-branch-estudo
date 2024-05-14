import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'hinv-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit{
  
  
  constructor(private cd: ChangeDetectorRef) {}
  
  @ViewChild('item') item: any;
  loading = true;

  title: string = 'Rooms View';
  
  ngAfterViewInit(): void { 
      this.loading = false;

      this.cd.detectChanges();
  }

 

  // ngAfterViewinit(): void {
  //   this.loading = false;
  // }

}
