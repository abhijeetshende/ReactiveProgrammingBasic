import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss'],
})
export class CustomObservableComponent implements OnInit, OnDestroy {
  customObservable!: Observable<number>;
  sub!: Subscription;
  ngOnInit(): void {
    this.customObservable = new Observable((observer) => {
      interval(1000).subscribe((i) => {
        // console.log('hello from custom Observable', i);

        if (i > 3) {
          observer.error('count greater than 3, stopping automatically');
        } else if ((i > 2)) {
          observer.complete();
        }
        observer.next(i);
      });
    });

    this.sub = this.customObservable.pipe(
      filter((data)=> data> 0),
      map((data)=>{
        return  data*12 +" asdsadjahsdjha" ;
      })
    ).subscribe(
      (data) => {
        console.log('data from customObservable', data);
      },
      (error) => {
        console.log('catching error in error handler', error);
      },
      () => {
        console.log('observable is complete');
      }
    );
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
