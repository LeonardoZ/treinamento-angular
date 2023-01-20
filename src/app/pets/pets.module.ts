import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetsRoutingModule } from './pets-routing.module';
import { DogsComponent } from './dogs/dogs.component';
import { CatsComponent } from './cats/cats.component';


@NgModule({
  declarations: [
    DogsComponent,
    CatsComponent
  ],
  imports: [
    CommonModule,
    PetsRoutingModule
  ]
})
export class PetsModule { }
