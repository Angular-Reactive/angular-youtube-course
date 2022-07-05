import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpWithObservablesComponent } from './http-with-observables.component';

const routes: Routes = [{ path: '', component: HttpWithObservablesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpWithObservablesRoutingModule { }
