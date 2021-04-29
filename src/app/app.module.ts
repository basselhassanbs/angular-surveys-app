import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SurveysComponent } from './surveys/surveys.component';
import { SurveyListComponent } from './surveys/survey-list/survey-list.component';
import { SurveyItemComponent } from './surveys/survey-list/survey-item/survey-item.component';
import { SurveyEditComponent } from './surveys/survey-edit/survey-edit.component';
import { SurveyTakeComponent } from './surveys/survey-take/survey-take.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './surveys/Data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SurveyResultComponent } from './surveys/survey-result/survey-result.component';
import { AnswerPipe } from './pipes/answer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SurveysComponent,
    SurveyListComponent,
    SurveyItemComponent,
    SurveyEditComponent,
    SurveyTakeComponent,
    SurveyResultComponent,
    AnswerPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
