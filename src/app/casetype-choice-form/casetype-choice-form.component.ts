import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CaseWizardComponent } from '../case-wizard/case-wizard.component';
import { Casetype } from '../models/casetype';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-casetype-choice-form',
  templateUrl: './casetype-choice-form.component.html',
  styleUrls: ['./casetype-choice-form.component.css']
})
export class CasetypeChoiceFormComponent {
  private chosenCasetype:Casetype = new Casetype(null,null)
  @Input() private casetypes:Casetype[]
  @Output() private choice = new EventEmitter<Casetype>();

  constructor() {
    console.log(this.casetypes)
  }

  onSubmit() {
    console.log("CasetypeChoiceFormComponent onSubmit")
    this.choice.emit(<Casetype>this.chosenCasetype)
  }
}
