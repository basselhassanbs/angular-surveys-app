import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import 'rxjs';
import { map } from 'rxjs/operators';
import { Observable, Subject } from "rxjs";
import { Answer } from "./answer.model";
import { Survey } from "./survey.model";

@Injectable()
export class DataService {
    private REST_API_SERVER = "http://127.0.0.1:8000/api";
    private surveys: Survey[] = [];
    isLoadingUpdated = new Subject<boolean>();
    isLoadingAnswersUpdated = new Subject<boolean>();
    surveysUpdated = new Subject<Survey[]>();

    constructor(private http: HttpClient) { }

    addSurvey(survey: any) {
        return this.http.post(this.REST_API_SERVER + '/surveys', survey);
    }

    addQuestions(survey: any) {
        return this.http.post(this.REST_API_SERVER + '/surveys/questions/', survey.questions);
    }

    getSurveys() {
        return this.http.get<Survey[]>(this.REST_API_SERVER + '/surveys')
            .subscribe((surveyData) => {
                this.surveys = surveyData;
                this.surveysUpdated.next([...this.surveys]);
                this.isLoadingUpdated.next(false);
            });
    }

    getSurvey(id: number) {
        return this.http.get<Survey>(this.REST_API_SERVER + '/surveys/' + id);
    }

    addAnswers(answers: Answer[]) {
        return this.http.post(this.REST_API_SERVER + '/surveys/take', answers);
    }

    getAnswers(sur_id: number, ques_id: number, value): Observable<any> {
        // return this.http.get(this.REST_API_SERVER + '/surveys/answers/', { id, value });

        return this.http.get(this.REST_API_SERVER + '/answers/' + sur_id + '/' + ques_id + '/' + value)
            .pipe(
                // map(res => res),
                map(
                    (response) => {
                        // console.log(response);
                        this.isLoadingAnswersUpdated.next(false);
                        return response;
                    }
                )
            );
    }

}
