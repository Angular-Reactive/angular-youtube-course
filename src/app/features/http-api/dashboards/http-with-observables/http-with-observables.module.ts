import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpWithObservablesRoutingModule } from './http-with-observables-routing.module';
import { HttpWithObservablesComponent } from './http-with-observables.component';
import { SharedModule } from '@app/shared/shared.module';
import { ALERT_SERVICE } from '../http-with-promises/http-with-promises.utils';
import { AlertService } from '@app/shared/components/alert/alert.service';


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
