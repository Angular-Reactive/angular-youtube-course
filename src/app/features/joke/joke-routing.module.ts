import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokeListComponent } from './components/joke-list/joke-list.component';
import { JokeComponent } from './joke.component';

const routes: Routes = [{ path: '', component: JokeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JokeRoutingModule { }
