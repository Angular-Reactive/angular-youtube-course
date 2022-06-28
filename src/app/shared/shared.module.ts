import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CcCardHoverDirective } from './directives/cc-card-hover.directive';
import { DefaultPipe } from './pipes/default.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    CcCardHoverDirective,
    DefaultPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CcCardHoverDirective,
    DefaultPipe,
    FlexLayoutModule
  ]
})
export class SharedModule { }
