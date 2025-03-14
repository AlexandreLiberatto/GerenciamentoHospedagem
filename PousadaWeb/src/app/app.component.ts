import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout'; // Importe o módulo de layout
import { NzMenuModule } from 'ng-zorro-antd/menu'; // Importe o módulo de menu
import { NzIconModule } from 'ng-zorro-antd/icon'; // Importe o módulo de ícones

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
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
}