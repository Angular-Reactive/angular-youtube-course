import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpApiComponent } from './http-api.component';

const routes: Routes = [{ path: '', component: HttpApiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpApiRoutingModule { }
