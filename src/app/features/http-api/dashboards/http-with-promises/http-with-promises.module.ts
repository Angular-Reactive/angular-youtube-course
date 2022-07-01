import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpWithPromisesRoutingModule } from './http-with-promises-routing.module';
import { HttpWithPromisesComponent } from './http-with-promises.component';
import { SearchServiceService } from './search-service.service';


@NgModule({
  declarations: [
    HttpWithPromisesComponent
  ],
  imports: [
    CommonModule,
    HttpWithPromisesRoutingModule
  ],
  providers: [
    SearchServiceService
  ]
})
export class HttpWithPromisesModule { }
