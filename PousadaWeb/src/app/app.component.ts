import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout'; // Importe o módulo de layout
import { NzMenuModule } from 'ng-zorro-antd/menu'; // Importe o módulo de menu
import { NzIconModule } from 'ng-zorro-antd/icon'; // Importe o módulo de ícones
import { UserStorageService } from './auth/services/storage/user-storage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    RouterOutlet,
    NzLayoutModule, // Adicione o módulo de layout
    NzMenuModule,   // Adicione o módulo de menu
    NzIconModule    // Adicione o módulo de ícones
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PousadaWeb';

  isCustomerLoggedIn: boolean = UserStorageService.isCustomerLoggedIn();
  isAdminLoggedIn: boolean = UserStorageService.isAdminLoggedIn();


  constructor(private router: Router){}

  ngOnInit(){
    this.router.events.subscribe(event => {
      if(event.constructor.name === "NavigationEnd"){
        this.isCustomerLoggedIn = UserStorageService.isCustomerLoggedIn();
        this.isAdminLoggedIn = UserStorageService.isAdminLoggedIn();
      }
    })
  }

  logout(){
    UserStorageService.signOut();
    this.router.navigateByUrl('/');
  }
}