import { Component, OnInit } from '@angular/core';
import { ActionForm } from '../models/action-form';
import { PegaApiService } from '../services/pega-api.service';

@Component({
  selector: 'app-action-form',
  templateUrl: './action-form.component.html',
  styleUrls: ['./action-form.component.css']
})
export class ActionFormComponent implements OnInit {
  actionForm:ActionForm

  constructor() { }

  ngOnInit() {

  }

}