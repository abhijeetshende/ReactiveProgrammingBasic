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
import { FilterAsyncPipe } from './components/pipes/filter-async.pipe';
import { HttpexampleComponent } from './components/httpexample/httpexample.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { RequestInterceptorService } from './components/httpexample/interceptors/request-interceptor.service';
import { ResponseInterceptorInterceptor } from './components/httpexample/interceptors/response-interceptor.interceptor';
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
    FilterPipe,
    FilterAsyncPipe,
    HttpexampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:RequestInterceptorService,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:ResponseInterceptorInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
