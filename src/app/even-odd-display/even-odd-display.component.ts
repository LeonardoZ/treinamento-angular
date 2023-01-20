import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-even-odd-display',
  templateUrl: './even-odd-display.component.html',
  styleUrls: ['./even-odd-display.component.css'],
})
export class EvenOddDisplayComponent {
  @Input('value')
  value: number = 0;

  evenOdd() {
    return this.isEven(this.value) ? 'PAR' : 'IMPAR';
  }

  isEven(value: number): boolean {
    return value % 2 === 0 ? true : false;
  }
}
