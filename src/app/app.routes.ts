import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { ContactusComponent } from './contactus/contactus.component';
export const routes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'contact', component: ContactusComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});





