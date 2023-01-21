import { Component, OnInit } from '@angular/core';
import { SubjectdataService } from './components/subjects/subjectdata.service';
interface sidebarLinks {
  linkname: string;
  routerLink: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  subjectCount:number=0;
  constructor(private subjectData:SubjectdataService){}
  ngOnInit(): void {
    this.subjectData.subjectExample.subscribe((d)=>{
      this.subjectCount = d;
    })
  }
  title = 'reactiveProgrammingBasic';
  tutorialLinks: sidebarLinks[] = [
    { linkname: 'Timer', routerLink: 'timer' },
    { linkname: 'CustomObservable', routerLink: 'customobserverable' },
    { linkname: 'Subjects', routerLink: 'subjects' }
  ];
  
}
