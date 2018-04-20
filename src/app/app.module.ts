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
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReusableAnimationComponent } from './reusable-animation/reusable-animation.component';
import { FadeBoxComponent } from './reusable-animation/fade-box/fade-box.component';
import { FadeButtonComponent } from './reusable-animation/fade-button/fade-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AveragePipe } from './pipe/average.pipe';

import { ComponentOptimizationComponent } from './component-optimization/component-optimization.component';
import { OnPushComponent } from './component-optimization/on-push/on-push.component';
import { AverageOnPushPipe } from './pipe/average-onpush.pipe';
import { PipeVsFunctionComponent } from './component-optimization/pipe-vs-function/pipe-vs-function.component';
import { OnPushOptimizationComponent } from './component-optimization/on-push-optimization/on-push-optimization.component';
import { ScoreFormComponent } from './component-optimization/on-push-optimization/score-form/score-form.component';
import { AverageOnPushOptPipe } from './pipe/average-onpush-opt.pipe';
import { environment } from '../environments/environment.prod';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CachingPatternComponent } from './caching-pattern/caching-pattern.component';

const appRoutes: Routes = [
  { path: 'submit-button', component: SubmitButtonComponent },
  { path: 'obs-merge', component: ObsMergeComponent },
  { path: 'reusable-animation', component: ReusableAnimationComponent },
  { path: 'pipe-v-function', component: PipeVsFunctionComponent },
  { path: 'pipe-v-function-onpush', component: OnPushComponent },
  { path: 'onpush-optimization', component: OnPushOptimizationComponent },
  { path: 'caching-pattern', component: CachingPatternComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    SubmitButtonComponent,
    ObsMergeComponent,
    ReusableAnimationComponent,
    PipeVsFunctionComponent,
    FadeBoxComponent,
    FadeButtonComponent,
    AveragePipe,
    AverageOnPushPipe,
    AverageOnPushOptPipe,
    OnPushComponent,
    ComponentOptimizationComponent,
    OnPushOptimizationComponent,
    ScoreFormComponent,
    CachingPatternComponent
  ],
  imports: [
    FlexLayoutModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
