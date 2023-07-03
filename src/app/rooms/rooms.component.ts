import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  hotelName = 'Hilton Hotel';
  noOfRooms = 10;
  hideRooms = false;
 selectedRoom!:RoomList;

  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20,
  };
  roomList: RoomList[] = [];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.roomList = [
      {
        roomNumber: 1001,
        roomType: 'POP 80773J Hotel Premium Anchal',
        amenities: 'AC,Free Wifi,TV,Geyser,Power backup,Elevator',
        price: 500,
        photos:
          'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        checkinTime: new Date('11-nov-2023'),
        checkoutTime: new Date('11-nov-2023'),
        rating: 4.8,
      },
      {
        roomNumber: 1002,
        roomType: ' Hotel Premium ',
        amenities: 'AC,Free Wifi,TV,Geyser,Power backup,Elevator',
        price: 500,
        photos:
          'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        checkinTime: new Date('11-nov-2023'),
        checkoutTime: new Date('11-nov-2023'),
        rating: 3.8,
      },
      {
        roomNumber: 1003,
        roomType: 'POP  Hotel private ',
        amenities: 'AC,Free Wifi,TV,Geyser,Power backup,Elevator',
        price: 13500,
        photos:
          'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        checkinTime: new Date('11-nov-2023'),
        checkoutTime: new Date('11-nov-2023'),
        rating: 2.7,
      },
      {
        roomNumber: 1004,
        roomType: 'POP 80773J Hotel deluxe',
        amenities: 'AC,Free Wifi,TV,Geyser,Power backup,Elevator',
        price: 1500,
        photos:
          'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        checkinTime: new Date('11-nov-2023'),
        checkoutTime: new Date('11-nov-2023'),
        rating: 2.8,
      },
    ];
  }
  toggle() {
    this.hideRooms = !this.hideRooms;
  }
  selectRoom(room: RoomList) {
    this.selectedRoom=room;
  }
}
