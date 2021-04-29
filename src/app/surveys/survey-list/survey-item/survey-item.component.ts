import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Survey } from '../../survey.model';

@Component({
  selector: 'app-survey-item',
  templateUrl: './survey-item.component.html',
  styleUrls: ['./survey-item.component.css']
})
export class SurveyItemComponent implements OnInit {
  @Input() survey: Survey;
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  onTake() {
    this.router.navigate([this.survey.id], { relativeTo: this.route });
  }
  onResultShow() {
    this.router.navigate([this.survey.id, '/result'], { relativeTo: this.route });
  }
}
