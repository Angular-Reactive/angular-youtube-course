import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpApiRoutingModule } from './http-api-routing.module';
import { HttpApiComponent } from './http-api.component';


@NgModule({
  declarations: [
    HttpApiComponent
  ],
  imports: [
    CommonModule,
    HttpApiRoutingModule
  ]
})
export class HttpApiModule { }
