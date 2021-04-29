import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Answer } from '../answer.model';
import { DataService } from '../Data.service';
import { Question } from '../question.model';
import { Survey } from '../survey.model';

@Component({
  selector: 'app-survey-take',
  templateUrl: './survey-take.component.html',
  styleUrls: ['./survey-take.component.css']
})
export class SurveyTakeComponent implements OnInit {
  survey: Survey;
  id: number;
  isLoading = true;
  questions: Question[] = [];
  answers: Answer[] = [];
  ans = [];


  constructor(private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
      }
    );

    this.dataService.getSurvey(this.id).subscribe(
      (data: any) => {
        this.isLoading = false;
        this.survey = data;
        this.questions = this.survey.questions;
      }
    );
  }

  onSubmit(form: NgForm) {

    for (let i = 0; i < this.questions.length; i++) {
      this.answers.push({
        value: this.ans[i] === "true",
        question_id: this.questions[i].id,
        survey_id: this.questions[i].survey_id
      });
    }

    this.dataService.addAnswers(this.answers).subscribe(
      (response) => {
        console.log(response);
      }
    );

    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
