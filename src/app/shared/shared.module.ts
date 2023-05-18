import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {MaterialModule} from "../material/material.module";
import { TestDialogComponent } from './components/test-dialog/test-dialog.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    TestDialogComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
