import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../Data.service';
import { Survey } from '../survey.model';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {

  surveys: Survey[] = [];
  isLoading = true;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getSurveys();
    this.dataService.isLoadingUpdated.subscribe(
      (val: boolean) => {
        this.isLoading = val;
      }
    );
    this.dataService.surveysUpdated.subscribe(
      (surveys: Survey[]) => {
        this.surveys = surveys;
      });
  }
}
