import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpWithPromisesRoutingModule } from './http-with-promises-routing.module';
import { HttpWithPromisesComponent } from './http-with-promises.component';
import { API_URL } from './http-with-promises.utils';
import { SearchService } from './search-service.service';


@NgModule({
  declarations: [
    HttpWithPromisesComponent
  ],
  imports: [
    CommonModule,
    HttpWithPromisesRoutingModule
  ],
  providers: [
    SearchService,
    {
      provide: API_URL,
      useValue: 'https://itunes.apple.com/search'
    }
  ]
})
export class HttpWithPromisesModule { }
