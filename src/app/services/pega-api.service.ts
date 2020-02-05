import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Casetype } from '../models/casetype';
import { first, map } from 'rxjs/operators';
import { Case } from '@app/models/case';
import { Observable } from 'rxjs';
import { AssignmentDetails } from '../models/assignment-details';
import { AssignmentView } from '../models/assignment-view';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + btoa(`${environment.user}:${environment.password}`)
  })
};

@Injectable()
export class PegaApiService {
  req: any

  constructor(private http: HttpClient) { }

  getAllCasetypes(): Casetype[] {
    let casetypes: Casetype[] = []
    this.http.get(environment.apiUrl.casetypeList.url, httpOptions).subscribe((data) => {
      data['caseTypes'].forEach(element => {
        casetypes.push(<Casetype>element)
      });
    })
    console.log(casetypes)
    return casetypes
  }

  getCasetypeDetails(casetype: Casetype): Casetype {
    let url = environment.apiUrl.casetypeDetails.url.replace('$ID', casetype.ID)
    let result: Casetype = casetype
    this.http.get(url, httpOptions).pipe(first()).subscribe((data) => {
      data['creation_page']['groups'].forEach(element => {
        result.addField(
          element['field']['reference'],
          element['field']['type'],
          element['field']['maxLength']
        )
      });
    }
    )
    return result
  }

  createCase(casetypeID: string): Observable<Case> {
    let url: string = environment.apiUrl.createCase.url
    console.log("createCase,url:" + url)
    console.log("createCase,caseTypeID:" + casetypeID)
    let result: Case
    return this.http.post(url, { "caseTypeID": casetypeID }, httpOptions).pipe(first()).pipe(map(
      (data) => {
        result = <Case>{
          ID: data['ID'],
          nextAssignmentID: data['nextAssignmentID'],
          nextPageID: data['nextPageID'],
        }
        console.log("createCase, result:")
        console.log(result)
        return result
      }
    ))
  }

  getAssignmentDetails(nextAssignmentID: string): Observable<AssignmentDetails> {
    let url: string = environment.apiUrl.assignmentDetails.url.replace('$nextAssignmentID', nextAssignmentID)
    let result: AssignmentDetails
    return this.http.get<any>(url, httpOptions).pipe(first()).pipe(map(
      (data) => {
        result = <AssignmentDetails>{
          caseID: data['caseID'],
          ID: data['ID'],
          actionID: data['actions'][0]['ID'],
          actionName: data['actions'][0]['name']
        }
        console.log("getAssignmentDetails:")
        console.log(result)
        return result
      }
    ))

  }

  getAssignmentActionView(nextAssignmentID: string, nextActionID: string): Observable<AssignmentView> {
    let url: string = environment.apiUrl.assignmentsDetailsView.url
      .replace('$nextAssignmentID', nextAssignmentID)
      .replace('$nextActionID', nextActionID)
    let result: AssignmentView
    return this.http.get<any>(url, httpOptions).pipe(first()).pipe(map(
      (data) => {
        console.log(data)
        let fields: AssignmentView.Field[] = []
        data['view']['groups'][0]['layout']['groups'].forEach(element =>
          fields.push(new AssignmentView.Field(
            element['field']['label'],
            element['field']['fieldID']
          ))
        )
        result = <AssignmentView>{
          'name': data['view']['name'],
          'viewID': data['view']['viewID'],
          'fields': fields
        }
        console.log("getAssignmentActionView:")
        console.log(result)
        return result
      }))
  }

  postAction(nextAssignmentID: string, nextActionID: string, values: any): Observable<any> {
    let url: string = environment.apiUrl.submitAction.url
      .replace('$nextAssignmentID', nextAssignmentID)
      .replace('$nextActionID', nextActionID)
    let result: any
    return this.http.post(url, {"content":values}, httpOptions).pipe(first()).pipe(map(
      (data) => {
        result = {
          'nextAssignmentID': data['nextAssignmentID'],
          'nextPageID': data['nextPageID']
        }
        console.log("postAction result:")
        console.log(result)
        return result
      }
    ))
  }

}

// When you pass an interface as a type parameter to the HttpClient.get() method, use the RxJS map operator to transform the response data as needed by the UI. You can then pass the transformed data to the async pipe.
