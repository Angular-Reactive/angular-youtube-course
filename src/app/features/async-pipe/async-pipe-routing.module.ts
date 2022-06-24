import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncPipeComponent } from './async-pipe.component';

const routes: Routes = [{ path: '', component: AsyncPipeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsyncPipeRoutingModule { }
