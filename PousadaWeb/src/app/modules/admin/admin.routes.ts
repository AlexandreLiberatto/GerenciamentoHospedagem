import { Route } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostRoomComponent } from './components/post-room/post-room.component';
import { UpdateRoomComponent } from './components/update-room/update-room.component';

export const routes: Route[] = [
  {
    path: '',
    component: AdminComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'room/:id/edit',
    component: PostRoomComponent,
  },
  {
    path: 'room',
    component: UpdateRoomComponent,
  },
];