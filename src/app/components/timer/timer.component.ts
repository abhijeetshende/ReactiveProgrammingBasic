import { Component, OnDestroy, OnInit } from '@angular/core';
import { timer,interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit,OnDestroy{
  timerState:any;
  timerSubscription!: Subscription;
  ngOnInit(): void {
   this.timerSubscription =  interval(1000).subscribe((interval)=>{
      console.log(interval);
      this.timerState = interval;
    })
  }
  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }
}
