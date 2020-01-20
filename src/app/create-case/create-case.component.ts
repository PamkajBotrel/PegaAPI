import { Component, OnInit } from '@angular/core';
import { CreateCaseService } from '@service/create-case/create-case.service';
import { Casetype } from '../models/case-type';
import { take } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-create-case',
  templateUrl: './create-case.component.html',
  styleUrls: ['./create-case.component.css'],
  providers: [CreateCaseService]
})
export class CreateCaseComponent implements OnInit {
  casetypeID:string
  ID:string
  constructor(private createCaseService:CreateCaseService, ct:Casetype) { 
    this.casetypeID = environment.testCaseType // HARDCODED, TODO: CHANGE
  }

  ngOnInit() {
    this.createCaseService.startCase(this.casetypeID).pipe(take(1))
    .subscribe(res=>
      this.ID = res['ID'])
  }

}
