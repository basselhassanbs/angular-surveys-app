import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyTakeComponent } from './surveys/survey-take/survey-take.component';
import { SurveyEditComponent } from './surveys/survey-edit/survey-edit.component';
import { SurveyListComponent } from './surveys/survey-list/survey-list.component';
import { SurveysComponent } from './surveys/surveys.component';
import { SurveyResultComponent } from './surveys/survey-result/survey-result.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/surveys',
    pathMatch: 'full'
  },
  {
    path: 'surveys',
    component: SurveysComponent,
    children: [
      {
        path: '',
        component: SurveyListComponent,
      },
      {
        path: 'new',
        component: SurveyEditComponent,
      },
      {
        path: ':id',
        component: SurveyTakeComponent
      },
      {
        path: ':id/result',
        component: SurveyResultComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/surveys'
    // We should make page not found
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
