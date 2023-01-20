import { Component, OnInit, ViewChild } from '@angular/core';
import { EvenOddDisplayComponent } from '../even-odd-display/even-odd-display.component';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  counter = 0;
  previousNumbers: number[] = [];

  @ViewChild(EvenOddDisplayComponent)
  evenOddDisplay!: EvenOddDisplayComponent;

  increment() {
    this.previousNumbers.push(this.counter);
    this.counter += 1;
    this.logEvenOdd();
  }

  decrement() {
    this.previousNumbers.push(this.counter);
    this.counter -= 1;
    this.logEvenOdd();
  }

  private logEvenOdd() {
    const message = `O número ${
      this.counter
    } é ${this.evenOddDisplay.evenOdd()}`;

    console.log(message);
  }
}
