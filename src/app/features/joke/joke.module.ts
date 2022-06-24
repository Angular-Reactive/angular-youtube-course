import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeComponent } from '@features/joke/joke.component';
import { JokeListComponent } from '@features/joke/components/joke-list/joke-list.component';
import { SharedModule } from '@app/shared/shared.module';
import { JokeRoutingModule } from './joke-routing.module';
import { JokeItemComponent } from './components/joke-item/joke-item.component';



@NgModule({
  declarations: [
    JokeComponent,
    JokeListComponent,
    JokeItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    JokeRoutingModule
  ],
  exports: [
    JokeComponent
  ]
})
export class JokeModule { }
