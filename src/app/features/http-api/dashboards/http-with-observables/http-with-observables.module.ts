import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpWithObservablesRoutingModule } from './http-with-observables-routing.module';
import { HttpWithObservablesComponent } from './http-with-observables.component';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    HttpWithObservablesComponent
  ],
  imports: [
    CommonModule,
    HttpWithObservablesRoutingModule,
    SharedModule
  ]
})
export class HttpWithObservablesModule { }
