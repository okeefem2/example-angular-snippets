import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

const appMaterialModules = [
  CommonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule
];
@NgModule({
  imports: appMaterialModules,
  exports: appMaterialModules
})
export class AngularMaterialModule { }
