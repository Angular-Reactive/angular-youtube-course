import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpWithPromisesRoutingModule } from './http-with-promises-routing.module';
import { HttpWithPromisesComponent } from './http-with-promises.component';


@NgModule({
  declarations: [
    HttpWithPromisesComponent
  ],
  imports: [
    CommonModule,
    HttpWithPromisesRoutingModule
  ]
})
export class HttpWithPromisesModule { }
