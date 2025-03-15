import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './admin.routes';
import { DemoNgZorroAntdModule } from '../../DemoNgZorroAntdModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  ],

  imports: [
    RouterModule.forChild(routes),
    DemoNgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class AdminModule {}