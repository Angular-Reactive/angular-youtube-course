import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    children: [
      { 
        path: 'http-with-promises', 
        loadChildren: () => import('./dashboards/http-with-promises/http-with-promises.module').then(m => m.HttpWithPromisesModule), 
      },
      { 
        path: 'http-with-observables', 
        loadChildren: () => import('./dashboards/http-with-observables/http-with-observables.module').then(m => m.HttpWithObservablesModule) 
      }, 
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpApiRoutingModule { }
