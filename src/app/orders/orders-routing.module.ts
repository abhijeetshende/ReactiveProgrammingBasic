import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Orderchild2Component } from './orderchild2/orderchild2.component';
import { Orderchild3Component } from './orderchild3/orderchild3.component';
import { OrdersComponent } from './orders.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
    children: [
      {
        path: 'order2',
        component: Orderchild2Component,
      },
      {
        path: 'order3',
        component: Orderchild3Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
