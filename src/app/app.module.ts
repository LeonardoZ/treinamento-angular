import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { EvenOddDisplayComponent } from './even-odd-display/even-odd-display.component';
import { PetsModule } from './pets/pets.module';

import { HttpClientModule } from '@angular/common/http';
import { ListProductComponent } from './list-product/list-product.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    EvenOddDisplayComponent,
    ListProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, PetsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
