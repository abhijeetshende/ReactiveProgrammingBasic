import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './components/timer/timer.component';
import { CustomObservableComponent } from './components/custom-observable/custom-observable.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { TemplateformsComponent } from './components/templateforms/templateforms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CustomPipe } from './components/pipes/custom.pipe';
import { FilterPipe } from './components/pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    CustomObservableComponent,
    SubjectsComponent,
    TemplateformsComponent,
    ReactiveFormComponent,
    PipesComponent,
    CustomPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
