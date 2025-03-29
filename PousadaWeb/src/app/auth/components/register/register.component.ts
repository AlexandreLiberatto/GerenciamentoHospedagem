import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AuthService } from '../../services/auth/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private message: NzMessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      name: [null, Validators.required]
    });
  }
  submitForm(){
    this.authService.register(this.registerForm.value).subscribe(res=>{
      if(res.id != null){
        this.message.success("Usuário registrado com sucesso!", {nzDuration: 5000});
        this.router.navigateByUrl("/");
      } else {
        this.message.error("Erro ao registrar usuário, tente novamente mais tarde.", {nzDuration: 5000});
      }
    })
  }
}


