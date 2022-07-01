import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpApiRoutingModule } from './http-api-routing.module';
import { HttpApiComponent } from './http-api.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '@app/shared/shared.module';
import { AppMaterialModule } from '@app/app-material/app-material.module';
import { HttpWithPromisesModule } from '@features/http-api/dashboards/http-with-promises/http-with-promises.module';


@NgModule({
  declarations: [
    HttpApiComponent
  ],
  imports: [
    CommonModule,
    HttpApiRoutingModule,
    SharedModule,
    AppMaterialModule,
    HttpWithPromisesModule
  ]
})
export class HttpApiModule { }
