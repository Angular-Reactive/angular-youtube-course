import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { 
    path: 'users', 
    loadChildren: () => import('@features/user/user.module').then(m => m.UserModule) 
  },
  { 
    path: 'add-user', 
    loadChildren: () => import('@features/add-user/add-user.module').then(m => m.AddUserModule) 
  },
  { 
    path: 'custom-directive', 
    loadChildren: () => import('@features/joke/joke.module').then(m => m.JokeModule) 
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: 'reactive-prog', loadChildren: () => import('@features/reactiveprog/reactiveprog.module').then(m => m.ReactiveprogModule) },
  { path: 'async-pipe', loadChildren: () => import('@features/async-pipe/async-pipe.module').then(m => m.AsyncPipeModule) },
  { path: 'custom-pipe', loadChildren: () => import('@features/default-pipe/default-pipe.module').then(m => m.DefaultPipeModule) },
  { path: 'providers', loadChildren: () => import('./features/providers/providers.module').then(m => m.ProvidersModule) },
  { path: 'http-api', loadChildren: () => import('./features/http-api/http-api.module').then(m => m.HttpApiModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }