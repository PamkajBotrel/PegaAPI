import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class CaseTypeService {

  
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${environment.api}/${environment.apiServicesUrl.casetypes}`)
  }

}