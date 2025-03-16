import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AdminService } from '../../admin-services/admin.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ActivatedRoute } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-update-room',
  imports: [
     ReactiveFormsModule, // Adicione ReactiveFormsModule aqui
        NzFormModule, // Para <nz-form>, <nz-form-item>, <nz-form-control>
        NzInputModule, // Para <input nz-input>
        NzButtonModule // Para <button nz-button>
  ],
  templateUrl: './update-room.component.html',
  styleUrl: './update-room.component.scss'
})
export class UpdateRoomComponent {

    updateRoomForm: FormGroup;
    id: number; 
    
    
  
    constructor(private fb: FormBuilder,
      private message: NzMessageService,
      private router: Router,
      private adminService: AdminService,
      private activatedroute: ActivatedRoute,
    ){
       this.id = this.activatedroute.snapshot.params['id']; // Inicializa id no construtor
       this.updateRoomForm = this.fb.group({
        name: ['', Validators.required],
        type: ['', Validators.required],
        price: ['', Validators.required]
       });
       this.getRoomById();

    }

    submitForm(){
      this.adminService.updateRoomDetails(this.id, this.updateRoomForm.value).subscribe(res => {
        this.message.success(`Quarto atualizado com sucesso!`, { nzDuration: 5000});
        this.router.navigateByUrl("/admin/dashboard");
      }, error => {
        this.message.error(`${error.error}`, { nzDuration: 5000})
      })
    }

    getRoomById(){
      this.adminService.getRoomById(this.id).subscribe(res => {
        this.updateRoomForm.patchValue(res);
      }, error => {
        this.message.error(`${error.error}`, { nzDuration: 5000})
      })
    }

}
