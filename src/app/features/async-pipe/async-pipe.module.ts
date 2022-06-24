import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsyncPipeRoutingModule } from './async-pipe-routing.module';
import { AsyncPipeComponent } from './async-pipe.component';


@NgModule({
  declarations: [
    AsyncPipeComponent
  ],
  imports: [
    CommonModule,
    AsyncPipeRoutingModule
  ]
})
export class AsyncPipeModule { }
