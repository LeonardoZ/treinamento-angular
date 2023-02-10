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

  // metadados da classe
  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }
}
