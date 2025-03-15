import { Component } from '@angular/core';
import { AdminService } from '../../admin-services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { CommonModule, NgFor } from '@angular/common';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [
    NzButtonModule,
    NzCardModule,
    NzSkeletonModule,
    NzAvatarModule,
    NzIconModule,
    CommonModule,
    NgFor,
    NzPaginationModule,
    RouterModule, 
    // outros módulos ou componentes
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
})
export class DashboardComponent {

  //IMAGES
  quarto1 = 'assets/img/quarto01.jpeg'

  currentPage = 1;
  rooms = [];
  total:any;
  loading = false;

  constructor(private adminService: AdminService,
    private message: NzMessageService,
  ){
    this.getRooms();
  }

  getRooms(){
    this.adminService.getRooms(this.currentPage -1).subscribe(res => {
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
