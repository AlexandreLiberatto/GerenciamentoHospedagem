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
  selector: 'app-login',
  standalone: true, // Standalone component
  imports: [
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private message: NzMessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }

  submitForm() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(res => {
        if (res.token) { // Ajuste conforme o retorno da API
          this.message.success('Login realizado com sucesso!', { nzDuration: 5000 });
          this.router.navigateByUrl('/'); // Redireciona para a home ou dashboard
        } else {
          this.message.error('Falha ao realizar login, verifique as credenciais.', { nzDuration: 5000 });
        }
      }, error => {
        this.message.error('Erro no servidor. Tente novamente mais tarde.', { nzDuration: 5000 });
      });
    } else {
      this.message.warning('Preencha todos os campos corretamente.', { nzDuration: 5000 });
    }
  }
}
