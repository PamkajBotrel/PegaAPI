import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PegaApiService } from '@app/services/pega-api.service';
import { AssignmentDetailsComponent } from '../assignment-details/assignment-details.component';
import { AssignmentViewComponent } from '../assignment-view/assignment-view.component';
import { CasetypeChoiceFormComponent } from '../casetype-choice-form/casetype-choice-form.component';
import { CasetypeDetailsComponent } from '../casetype-details/casetype-details.component';
import { CaseWizardComponent } from './case-wizard.component';

@NgModule({
  declarations: [
    CasetypeChoiceFormComponent,
    CaseWizardComponent,
    CasetypeDetailsComponent,
    AssignmentViewComponent,
    AssignmentDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  bootstrap: [CaseWizardComponent],
  providers: [
    PegaApiService]
})

export class CaseWizardModule { }
