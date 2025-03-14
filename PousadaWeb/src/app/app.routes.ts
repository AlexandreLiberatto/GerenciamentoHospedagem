import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/components/register/register.component';
import { LoginComponent } from './auth/components/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Rota padrão para redirecionamento inicial
  { path: 'login', component: LoginComponent }, // Rota correta para Login
  { path: 'register', component: RegisterComponent }, // Rota correta para Register
  //========== AQUI ADICIONE NOVAS ROTAS =============
];
