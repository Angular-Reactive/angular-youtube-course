import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { JokeModule } from './features/joke/joke.module';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { NavbarComponent } from '@app/core/components/navbar/navbar.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
