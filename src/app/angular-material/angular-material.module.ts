import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';

const appMaterialModules = [
  CommonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDatepickerModule,
  MatNativeDateModule
];
@NgModule({
  imports: appMaterialModules,
  exports: appMaterialModules
})
export class AngularMaterialModule { }
