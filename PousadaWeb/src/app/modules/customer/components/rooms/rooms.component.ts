import { Component } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NgFor } from '@angular/common';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { UserStorageService } from '../../../../auth/services/storage/user-storage.service';
import { error } from 'console';
import { FormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'app-rooms',
  imports: [
    NzCardModule,
    NzSkeletonModule,
    NzAvatarModule,
    NzIconModule,
    NgFor,
    NzPaginationModule,
    FormsModule, // Necessário para [(ngModel)]
    NzModalModule, // Necessário para nz-modal
    NzDatePickerModule // Necessário para nz-range-picker
  ],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {

  //IMAGES
  quarto1 = 'assets/img/quarto01.png'

  currentPage = 1;
    rooms = [];
    total:any;
    loading = false;
  
    constructor(private customerService: CustomerService,
      private message: NzMessageService,
      private modalService: NzModalService,
    ){
      this.getRooms();
    }
  
    getRooms(){
      this.customerService.getRooms(this.currentPage -1).subscribe(res => {
        console.log(res);
        this.rooms = res.roomDtoList;
        this.total = res.totalPages * 1;
      })
    }
  
    nzPageIndexChange(value: any){
      this.currentPage = value;
      this.getRooms();
    }

    isVisibleMiddle = false;
    date: Date[] = [];
    checkInDate: Date;
    checkOutDate: Date;
    id: number;

    onChange(result: Date[]){
      if(result.length === 2){
        this.checkInDate = result[0];
        this.checkOutDate = result[1];
      }
    }

    handleCancelMiddle(){
      this.isVisibleMiddle = false;
    }

    handleOkMiddle(){
      const obj = {
        userId: UserStorageService.getUserId(),
        roomId: this.id,
        checkInDate: this.checkInDate,
        checkOutDate: this.checkOutDate
      }

      this.customerService.bookRoom(obj).subscribe(res => {
        this.message.success(`solicitação de reserva enviada para aprovação`, { nzDuration: 5000 });
        this.isVisibleMiddle = false;
      }, error => {
        this.message.error(`${error.error}`, { nzDuration: 5000 });
      })
    }

    showModalMiddle(id:number){
      this.id = id;
      this.isVisibleMiddle = true;
    }

}
