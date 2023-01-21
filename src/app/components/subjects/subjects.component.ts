import { Component } from '@angular/core';
import { SubjectdataService } from './subjectdata.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent {
  constructor(private subjectService:SubjectdataService){}
  count:number=0;
  sendEvent(){
    console.log(this.count);
    
    this.subjectService.subjectExample.next(this.count++);
  }
}
