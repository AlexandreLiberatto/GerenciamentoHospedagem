import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './customer.routes';
import { CommonModule } from '@angular/common';
import { DemoNgZorroAntdModule } from '../../DemoNgZorroAntdModule';
import { FormsModule } from '@angular/forms';

@NgModule({
  
  imports: 
  [
    CommonModule,
    FormsModule,
    DemoNgZorroAntdModule,
    RouterModule.forChild(routes)
  ],
})
export class CustomerModule {}