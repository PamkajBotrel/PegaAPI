import { Injectable } from '@angular/core'
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { environment } from '@environments/environment';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Interceptor")
        // add authorization header with basic auth credentials from environment.ts
        // TODO : put in a service, and add a login component
        let basicAuthToken = "Basic "+btoa(`${environment.user}:${environment.password}`)
        const authReq = request.clone({
            setHeaders : {'Authorization': basicAuthToken}
        })
        return next.handle(authReq).pipe(tap(evt => {
            if (evt instanceof HttpResponse) {
              console.log('---> status:', evt.status);
              console.log('---> filter:', authReq.params.get('filter'));
            }
          }))
    }
}