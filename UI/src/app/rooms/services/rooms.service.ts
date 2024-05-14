import { Inject, Injectable, inject } from '@angular/core';
import { RoomList } from '../rooms';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { environment } from '../../environments/environment';
import { config } from 'process';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  deleteRoom(arg0: string) {
    throw new Error('Method not implemented.');
  }
  roomList: RoomList[] = [];
  headers = new HttpHeaders({ token: '123123123123sdsdasd' });
  getRooms$ = this.htpp.get<RoomList[]>('/api/rooms', {
    headers: this.headers,
  }).pipe(
    shareReplay(1)
  );

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private htpp: HttpClient) {
    console.log(this.config.apiEndpoint);
    console.log('Rooms Service Initilized...');
  }

  getRooms() {
    return this.htpp.get<RoomList[]>('/api/rooms');
  }

  addRoom(room: RoomList) {
    return this.htpp.post<RoomList[]>('/api/rooms', room, {
      headers: this.headers,
      
    });
  }

  editRoom(room: RoomList) {
    return this.htpp.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  }

  delete(id: string) {
    return this.htpp.delete<RoomList[]>(`/api/rooms/${id}`);
  }

  getPhotos() {
    const request = new HttpRequest('GET',
      `https://jsonplaceholder.typicode.com/photos`,
      {
        reportProgress: true,
      }
    );
    return this.htpp.request(request);
  }
}


// Resolution Modifiers - Self, SkipSelf, Optional, Host.