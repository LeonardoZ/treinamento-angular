import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  counter = 0;
  previousNumbers: number[] = [];

  increment() {
    this.previousNumbers.push(this.counter);
    this.counter += 1;
  }

  decrement() {
    this.previousNumbers.push(this.counter);
    this.counter -= 1;
  }
}
