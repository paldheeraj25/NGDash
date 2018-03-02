import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth/providers/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public inj: Injector) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const auth = this.inj.get(AuthService);
    request = request.clone({
      setHeaders: {
        Bearer: auth.getToken()
      }
    });
    return next.handle(request);
  }
}
