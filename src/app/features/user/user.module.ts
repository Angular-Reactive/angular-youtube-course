import { NgModule } from '@angular/core';

import { UserRoutingModule } from '@features/user/user-routing.module';
import { UserComponent } from '@features/user/user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserService } from '@services/user.service';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    UserComponent,
    UserListComponent
  ],
  exports: [
    UserComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
