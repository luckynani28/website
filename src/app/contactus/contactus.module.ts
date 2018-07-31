import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { ContactusComponent } from './contactus.component';

@NgModule({
  imports: [
    CommonModule,
    // ReactiveFormsModule,
    // FormsModule,
    // HttpModule
  ],
  declarations: [
    ContactusComponent
  ]
})
export class ContactusModule { }
