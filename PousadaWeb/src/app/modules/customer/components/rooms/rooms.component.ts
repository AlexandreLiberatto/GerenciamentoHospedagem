import { Component } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NgFor } from '@angular/common';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

@Component({
  selector: 'app-rooms',
  imports: [
    NzCardModule,
    NzSkeletonModule,
    NzAvatarModule,
    NzIconModule,
    NgFor,
    NzPaginationModule,
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

}
