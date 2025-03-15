import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AdminService } from '../../admin-services/admin.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ActivatedRoute } from '@angular/router';

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
    id: string; 
    
    
  
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

    }

    submitForm(){
      //
    }

}
