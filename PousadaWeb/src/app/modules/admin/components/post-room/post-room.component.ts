import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AdminService } from '../../admin-services/admin.service';
import { error } from 'console';

@Component({
  selector: 'app-post-room',
  standalone: true,
  imports: [
    ReactiveFormsModule, // Adicione ReactiveFormsModule aqui
    NzFormModule, // Para <nz-form>, <nz-form-item>, <nz-form-control>
    NzInputModule, // Para <input nz-input>
    NzButtonModule // Para <button nz-button>
  ],
  templateUrl: './post-room.component.html',
  styleUrls: ['./post-room.component.scss']
})
export class PostRoomComponent {

  roomDetailsForm: FormGroup;

  constructor(private fb: FormBuilder,
    private message: NzMessageService,
    private router: Router,
    private adminService: AdminService
  ){
     this.roomDetailsForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      price: ['', Validators.required]
     })
  }

  submitForm(){
    this.adminService.postRoomDetails(this.roomDetailsForm.value).subscribe(res => {
      this.message
      .success(
        `Quarto cadastrado com sucesso!`,
        { nzDuration: 5000}
      );
      this.router.navigateByUrl('/admin/dashboard')
    }, error => {
      this.message.error(
        `${error.error}`,
        { nzDuration: 5000}
      )
    })
  }

}
