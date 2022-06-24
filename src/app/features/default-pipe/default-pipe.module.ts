import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultPipeRoutingModule } from './default-pipe-routing.module';
import { DefaultPipeComponent } from './default-pipe.component';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    DefaultPipeComponent
  ],
  imports: [
    CommonModule,
    DefaultPipeRoutingModule,
    SharedModule
  ],
  exports: [
    DefaultPipeComponent
  ]
})
export class DefaultPipeModule { }
