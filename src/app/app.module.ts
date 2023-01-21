import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './components/timer/timer.component';
import { CustomObservableComponent } from './components/custom-observable/custom-observable.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { TemplateformsComponent } from './components/templateforms/templateforms.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    CustomObservableComponent,
    SubjectsComponent,
    TemplateformsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
