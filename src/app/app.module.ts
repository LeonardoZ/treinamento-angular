import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { EvenOddDisplayComponent } from './even-odd-display/even-odd-display.component';
import { PetsModule } from './pets/pets.module';

import { HttpClientModule } from '@angular/common/http';
import { ListProductComponent } from './list-product/list-product.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorComponent } from './form-error/form-error.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    EvenOddDisplayComponent,
    ListProductComponent,
    AddUserComponent,
    FormErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
