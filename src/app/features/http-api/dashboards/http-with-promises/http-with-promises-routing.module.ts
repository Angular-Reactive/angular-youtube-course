import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpWithPromisesComponent } from './http-with-promises.component';

const routes: Routes = [{ path: '', component: HttpWithPromisesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpWithPromisesRoutingModule { }
