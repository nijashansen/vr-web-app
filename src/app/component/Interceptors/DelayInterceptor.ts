// ANGULAR
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

// OBSERVABLES
import {Observable} from 'rxjs';
import {catchError, delay, map} from "rxjs/operators";

@Injectable()
export class DelayInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map(res => res),
      delay(500),
      catchError((error: any) => {
        return Observable.throw(error);
      })
    );
  }
}
