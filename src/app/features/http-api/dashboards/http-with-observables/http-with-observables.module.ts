import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpWithObservablesRoutingModule } from './http-with-observables-routing.module';
import { HttpWithObservablesComponent } from './http-with-observables.component';


@NgModule({
  declarations: [
    HttpWithObservablesComponent
  ],
  imports: [
    CommonModule,
    HttpWithObservablesRoutingModule
  ]
})
export class HttpWithObservablesModule { }
