import { Component, OnInit } from '@angular/core';
import { DataService } from './Data.service';
import { Survey } from './survey.model';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
