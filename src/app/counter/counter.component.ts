import { Component } from '@angular/core';

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

  // métodos da classe
  increment() {
    this.previousNumbers.push(this.counter);
    this.counter += 1;
  }

  decrement() {
    this.previousNumbers.push(this.counter);
    this.counter -= 1;
  }
}
