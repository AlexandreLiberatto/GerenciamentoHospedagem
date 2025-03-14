import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/components/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' }, // Rota padrão
  { path: 'register', component: RegisterComponent },
  // Adicione outras rotas aqui conforme necessário
];