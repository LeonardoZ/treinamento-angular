import { Component, ViewChild } from '@angular/core';

import { EvenOddDisplayComponent } from '../even-odd-display/even-odd-display.component';

// Identifica classe como componente e define metadados
@Component({
  // Seletor do componente, para referenciar esse component = <app-counter></app-counter>
  selector: 'app-counter',
  templateUrl: './counter.component.html', // Associa template ao componente
  styleUrls: ['./counter.component.css'], // Associa arquivo CSS
})
export class CounterComponent {
  // propriedades da Classe
  counter = 0;
  previousNumbers: number[] = [];

  // Componente filho referenciado no código
  @ViewChild(EvenOddDisplayComponent)
  evenOddDisplay!: EvenOddDisplayComponent;

  // métodos da classe
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
