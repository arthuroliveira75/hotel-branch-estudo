import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy, OnChanges, SimpleChanges, DoCheck, OnDestroy } from '@angular/core';
import { RoomList } from '../rooms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from '../../app.component';
import { RoomsComponent } from '../rooms.component';


@Component({
  selector: 'hinv-rooms-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AppComponent, RoomsComponent],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

  @Input() rooms: RoomList [] | null = [];

  @Input() title: string = '';

  // @Output() roomSelected = new EventEmitter<RoomList>();

  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor () { }
  ngDoCheck(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  ngOnInit(): void {}

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }

  ngOnDestroy(){
    console.log('on destroy is called');
  }
}

// 5:38:50

// Dependency Injection - are a service or object needed by classes to perform some function.
// It's a design pattern.
// Angular has built-in Dependency Injection support.

// DI providers - Class based providers, Value Providers, Factory.

// Component Interaction using Services - Sharing data between multiple components, sharing data within App;

// Provider Types - root, any

// 6:57:23