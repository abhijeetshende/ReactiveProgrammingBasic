import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable()
export class ResponseInterceptorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log(request.params);

    return next
      .handle(request)
      .pipe(
        tap((response) => {
          console.log('intercepting response', response);
        })
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.log('intercepting error response');

          return throwError(error);
        })
      );
  }
}
