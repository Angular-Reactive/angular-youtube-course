import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule
  ]
})
export class AppMaterialModule { }
