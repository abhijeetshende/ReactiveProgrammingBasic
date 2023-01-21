import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectdataService {
  constructor() {}
  subjectExample = new Subject<number>();
}
