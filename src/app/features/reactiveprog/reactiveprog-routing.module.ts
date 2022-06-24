import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAppComponent } from './form-app.component';


const routes: Routes = [{ path: '', component: FormAppComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveprogRoutingModule { }
