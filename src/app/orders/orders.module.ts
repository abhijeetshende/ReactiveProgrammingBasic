import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { Orderchild2Component } from './orderchild2/orderchild2.component';
import { Orderchild3Component } from './orderchild3/orderchild3.component';


@NgModule({
  declarations: [
    OrdersComponent,
    Orderchild2Component,
    Orderchild3Component,
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
