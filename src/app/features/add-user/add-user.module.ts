import { NgModule } from '@angular/core';

import { AddUserRoutingModule } from '@features/add-user/add-user-routing.module';
import { AddUserComponent } from '@features/add-user/add-user.component';
import { SharedModule } from '@app/shared/shared.module';
import { UserService } from '@app/services/user.service';
import { UserFormComponent } from './components/user-form/user-form.component';


@NgModule({
  declarations: [
    AddUserComponent,
    UserFormComponent
  ],
  imports: [
    SharedModule,
    AddUserRoutingModule
  ],
  exports: [
    AddUserComponent
  ],
  providers: [
    UserService
  ]
})
export class AddUserModule { }
