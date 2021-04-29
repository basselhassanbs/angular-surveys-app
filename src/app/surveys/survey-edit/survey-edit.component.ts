import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../Data.service';
import { Question } from '../question.model';
import { Survey } from '../survey.model';

@Component({
  selector: 'app-survey-edit',
  templateUrl: './survey-edit.component.html',
  styleUrls: ['./survey-edit.component.css']
})
export class SurveyEditComponent implements OnInit {

  surveyForm: FormGroup;
  questionNumber: number = 0;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService) { }

  ngOnInit(): void {
    this.surveyForm = new FormGroup({
      title: new FormControl('', Validators.required),
      purpose: new FormControl('', Validators.required),
      questions: new FormArray([]),
    });
  }

  get questions() {
    return (<FormArray>this.surveyForm.get('questions')).controls;
  }

  onAddQuestion() {
    const group = new FormGroup({
      text: new FormControl()
    });
    (<FormArray>this.surveyForm.get('questions')).push(group);
    this.questionNumber++;
  }

  onDeleteQuestion(index: number) {
    (<FormArray>this.surveyForm.get('questions')).removeAt(index);
    this.questionNumber--;
  }

  onSubmit() {
    this.dataService.addSurvey(this.surveyForm.value)
      .subscribe((response) => {
        console.log(response);
      });
    this.dataService.getSurveys();
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
