import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss'],
})
export class CustomObservableComponent implements OnInit,OnDestroy {
  customObservable!: Observable<number>;
  sub!:Subscription;
  ngOnInit(): void {
    this.customObservable = new Observable((observer) => {
      interval(1000).subscribe((i) => {
        // console.log('hello from custom Observable', i);
        observer.next(i);
      });
    });

    this.sub = this.customObservable.subscribe((data) => {
      console.log('data from customObservable', data);
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
