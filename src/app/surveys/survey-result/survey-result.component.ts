import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../Data.service';
import { Question } from '../question.model';
import { Survey } from '../survey.model';

@Component({
  selector: 'app-survey-result',
  templateUrl: './survey-result.component.html',
  styleUrls: ['./survey-result.component.css']
})
export class SurveyResultComponent implements OnInit {

  survey: Survey;
  questions: Question[] = [];
  id: number;
  isLoading = true;
  isTrue = true;
  isFalse = false;

  constructor(private dataService: DataService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
      }
    );

    this.dataService.getSurvey(this.id).subscribe(
      (data: any) => {
        this.survey = data;
        this.questions = this.survey.questions;
      }
    );

    this.dataService.isLoadingAnswersUpdated.subscribe(
      (value) => {
        this.isLoading = value;
      }
    );
  }
}
