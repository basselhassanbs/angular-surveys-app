import { Injectable, Pipe, PipeTransform } from "@angular/core";
import { Observable } from "rxjs";
import { DataService } from "../surveys/Data.service";
import { Question } from "../surveys/question.model";
import { map } from 'rxjs/operators';

@Injectable()

@Pipe({
    name: 'answer'
})
export class AnswerPipe implements PipeTransform {
    constructor(private dataService: DataService) { }

    public transform(question: Question, value: boolean): Observable<any> {
        const val = 1;
        return this.dataService.getAnswers(question.survey_id, question.id, value ? 1 : 0).pipe(
            map(response => {
                return response;
            })
        );
    }
}