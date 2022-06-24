import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveprogRoutingModule } from './reactiveprog-routing.module';
import { FormAppComponent } from './form-app.component';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    FormAppComponent
  ],
  exports: [
    FormAppComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveprogRoutingModule
  ]
})
export class ReactiveprogModule { }
