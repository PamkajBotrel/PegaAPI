import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { map } from 'rxjs/operators';
import { Casetype } from '@app/models/case-type';

@Injectable()
export class CreateCaseService {

  constructor(private http: HttpClient) { }

  startCase(casetypeID:string) {
    let ctObj = {"caseTypeID":casetypeID,"processID":"pyStartCase"}
    return this.http.post(`${environment.api}/${environment.apiServicesUrl.createCase}`,ctObj)
  }
}