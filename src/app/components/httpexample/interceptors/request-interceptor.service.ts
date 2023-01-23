import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService  implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let cloneReq = req.clone();
    console.log('intercepting Request.................');
    cloneReq.headers.append('helloyyyyyyyyyyyyyy','worldqejjjjjjjjjj');
    cloneReq.params.append('helloparam','worldparams')
    
    return next.handle(cloneReq)
  }
}
