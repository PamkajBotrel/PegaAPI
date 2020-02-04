import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Casetype } from '../models/casetype';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + btoa(`${environment.user}:${environment.password}`)
  })
};

@Injectable()
export class PegaApiService {

  constructor(private http: HttpClient) { }

  getAllCasetypes():Casetype[] {
    let casetypes:Casetype[] = []
    this.http.get(environment.apiUrl.casetypeList.url,httpOptions).subscribe((data)=>
    {
      data['caseTypes'].forEach(element => {
        casetypes.push(<Casetype>element)
      });
    })
    console.log(casetypes)
    return casetypes
  }
}

// When you pass an interface as a type parameter to the HttpClient.get() method, use the RxJS map operator to transform the response data as needed by the UI. You can then pass the transformed data to the async pipe.
