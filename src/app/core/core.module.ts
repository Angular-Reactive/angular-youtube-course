import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppMaterialModule } from '@app/app-material/app-material.module';
import { MenuItemComponent } from './components/navbar/menu-item/menu-item.component';




@NgModule({
  declarations: [
    NavbarComponent,
    MenuItemComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
