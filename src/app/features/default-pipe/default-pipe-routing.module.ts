import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultPipeComponent } from './default-pipe.component';

const routes: Routes = [{ path: '', component: DefaultPipeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultPipeRoutingModule { }
