import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, map, Observable, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit, OnDestroy {

  observableData$: Observable<number>;
  subscription: Subscription;

  constructor() { 
    // this.promise = this.getPromise();
    // this.subscribeObservable();
    this.observableData$ = this.getObservable();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getPromise() {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => resolve('Promise completed!'), 3000);
    })
  }

  getObservable() {
    return interval(1000)
      .pipe(
        take(10),
        map((v) => v * v)
      );
  }

  subscribeObservable() {
    // this.subscription = this.getObservable().subscribe((v) => this.observableData = v);
  }

}
 