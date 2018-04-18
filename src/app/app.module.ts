import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';

/**
 * App Modules
 */
import { AngularMaterialModule } from './angular-material/angular-material.module';

/**
 * App Components
 */
import { AppComponent } from './app.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';
import { ObsMergeComponent } from './obs-merge/obs-merge.component';

const appRoutes: Routes = [
  { path: 'submit-button', component: SubmitButtonComponent },
  { path: 'obs-merge', component: ObsMergeComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    SubmitButtonComponent,
    ObsMergeComponent
  ],
  imports: [
    AngularMaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
