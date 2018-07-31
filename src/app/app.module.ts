import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ClientsComponent } from './clients/clients.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactusComponent } from './contactus/contactus.component';
// import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ClientsComponent,
    TestimonialsComponent,
    ContactusComponent,
    // ReactiveFormsModule,
    // FormsModule,
    // HttpModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
