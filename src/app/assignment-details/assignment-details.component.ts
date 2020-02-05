import { Component, OnInit, Input } from '@angular/core';
import { AssignmentDetails } from '../models/assignment-details';

@Component({
  selector: 'app-assignment-details',
  templateUrl: './assignment-details.component.html',
  styleUrls: ['./assignment-details.component.css']
})
export class AssignmentDetailsComponent implements OnInit {
  @Input() private details:AssignmentDetails
  constructor() { }

  ngOnInit() {
  }
}
