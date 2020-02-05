import { Component, OnInit } from '@angular/core';
import { PegaApiService } from '../services/pega-api.service';
import { Casetype } from '../models/casetype';
import { CasetypeChoiceFormComponent } from '../casetype-choice-form/casetype-choice-form.component';
import { Case } from '@app/models/case';
import { Observable } from 'rxjs';
import { first, flatMap } from 'rxjs/operators';
import { AssignmentView } from '../models/assignment-view';
import { AssignmentDetails } from '../models/assignment-details';

@Component({
  selector: 'app-case-wizard',
  templateUrl: './case-wizard.component.html',
  styleUrls: ['./case-wizard.component.css']
})
export class CaseWizardComponent implements OnInit {
  step: CaseWizardComponent.Step
  STEPS: any
  casetypes: Casetype[]
  chosenCasetype: Casetype
  currentCase: Case
  currentAssignmentDetails: AssignmentDetails
  currentAssignmentView: AssignmentView

  constructor(private service: PegaApiService) { }

  ngOnInit() {
    this.STEPS = CaseWizardComponent.Step
    this.step = this.STEPS.casetypeDetails
    this.casetypes = this.service.getAllCasetypes()
    this.currentCase = new Case()
    this.chosenCasetype = new Casetype("O9FKI1-MyLabEUT-Work-AjouterClientVer2","AjouterClientVer2")
  }

  goToCasetype(e: Event) {
    console.log(e)
    this.chosenCasetype = new Casetype('', '')
    Object.assign(this.chosenCasetype, <Casetype><unknown>e)
    this.chosenCasetype = this.service.getCasetypeDetails(this.chosenCasetype)
    console.log(this.chosenCasetype)
    this.step = this.STEPS.casetypeDetails
  }

  goToCreateCase(e: Event) {
    this.service.createCase(e.toString()).subscribe((data) => {
      this.currentCase = data
      this.service.getAssignmentDetails(this.currentCase.nextAssignmentID)
        .subscribe((x) => {
          this.currentAssignmentDetails = x
          this.service.getAssignmentActionView(this.currentAssignmentDetails.ID, this.currentAssignmentDetails.actionID)
            .subscribe((x) => this.currentAssignmentView = x)
        })
      })
    this.step = this.STEPS.assignmentView
  }

  goToAssignmentDetails() {
    /*this.currentCase.currentAssignmentDetails = this.service.getAssignmentDetails(this.currentCase.nextAssignmentID)
    console.log("goToAssignmentDetails,currentAssignment:"+this.currentCase.currentAssignmentDetails.ID)
    this.currentCase.currentAssignmentView = this.service.getAssignmentActionView(this.currentCase.nextAssignmentID,this.currentCase.nextActionID)
    console.log("goToAssignmentDetails, currentCase:")
    console.log(JSON.stringify(this.currentCase))*/
  }

  goToSubmitAssignmentView(e: Event) {
    console.log("goToSubmitAssignmentView event:")
    console.log(e)
    

    this.service.postAction(this.currentAssignmentDetails.ID,this.currentAssignmentDetails.actionID,e)
    .subscribe((data)=>
    {
      this.currentCase.nextPageID = data['nextPageID']
      if(data['nextAssignmentID']) {
      this.currentCase.nextAssignmentID = data['nextAssignmentID']
      this.service.getAssignmentDetails(this.currentCase.nextAssignmentID)
        .subscribe((x) => {
          this.currentAssignmentDetails = x
          this.service.getAssignmentActionView(this.currentAssignmentDetails.ID, this.currentAssignmentDetails.actionID)
            .subscribe((x) => this.currentAssignmentView = x)
        })
      }
      else {
        this.step = this.STEPS.caseOver
      }
    })
  }





}

export namespace CaseWizardComponent {
  export enum Step {
    casetypeChoice = 1,
    casetypeDetails,
    assignmentDetails,
    assignmentView,
    caseOver
  }
}