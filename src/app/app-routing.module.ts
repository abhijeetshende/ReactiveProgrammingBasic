import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomObservableComponent } from './components/custom-observable/custom-observable.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { TemplateformsComponent } from './components/templateforms/templateforms.component';
import { TimerComponent } from './components/timer/timer.component';

const routes: Routes = [
  {path:'timer',component:TimerComponent},
  {path:'customobserverable',component:CustomObservableComponent},
  {path:'subjects',component:SubjectsComponent},
  {path:'templateForm',component:TemplateformsComponent},
  {path:'reactiveForm',component:ReactiveFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
