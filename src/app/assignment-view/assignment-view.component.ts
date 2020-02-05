import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AssignmentView } from '@app/models/assignment-view';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignment-view',
  templateUrl: './assignment-view.component.html',
  styleUrls: ['./assignment-view.component.css']
})
export class AssignmentViewComponent implements OnInit {
  @Input() private assignmentView:AssignmentView
  @Output() private choice = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    this.assignmentView.fields.forEach(
      (f) => {
        
      }
    )
  }

  onSubmit(formValue: NgForm) {
    console.log("onSubmit of AssignmentViewComponent:")
    console.log(formValue)
    this.choice.emit(formValue)
  }

}
