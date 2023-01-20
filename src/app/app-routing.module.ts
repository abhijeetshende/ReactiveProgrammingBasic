import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomObservableComponent } from './components/custom-observable/custom-observable.component';
import { TimerComponent } from './components/timer/timer.component';

const routes: Routes = [
  {path:'timer',component:TimerComponent},
  {path:'customobserverable',component:CustomObservableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
