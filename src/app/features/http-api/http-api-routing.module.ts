import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpApiComponent } from './http-api.component';

const routes: Routes = [
  { 
    path: 'httpapi', 
    children: [
      { 
        path: 'http-with-promises', 
        loadChildren: () => import('./dashboards/http-with-promises/http-with-promises.module').then(m => m.HttpWithPromisesModule) 
      }
    ] 
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpApiRoutingModule { }
