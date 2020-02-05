import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Casetype } from '@app/models/casetype';

@Component({
  selector: 'app-casetype-details',
  templateUrl: './casetype-details.component.html',
  styleUrls: ['./casetype-details.component.css']
})
export class CasetypeDetailsComponent {

  @Input() private casetype:Casetype
  @Input() private values:any
  @Output() private choice = new EventEmitter<string>();
  constructor() { }

  onSubmit() {
    console.log("CasetypeDetails onSubmit")
    this.choice.emit(this.casetype.ID)
  }

}
