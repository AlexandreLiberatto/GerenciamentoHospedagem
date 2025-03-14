import { Route } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { RoomsComponent } from './components/rooms/rooms.component';

export const routes: Route[] = [
  {
    path: '',
    component: CustomerComponent,
  },
  {
    path: 'rooms',
    component: RoomsComponent,
  },
];