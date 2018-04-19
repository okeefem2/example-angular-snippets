import { forwardRef, Inject, Pipe, PipeTransform } from '@angular/core';
import { PipeVsFunctionComponent } from '../component-optimization/pipe-vs-function/pipe-vs-function.component';
import { OnPushOptimizationComponent } from '../component-optimization/on-push-optimization/on-push-optimization.component';

@Pipe({
  name: 'averageonpushopt'
})
export class AverageOnPushOptPipe implements PipeTransform {
  // I DO NOT RECOMMEND EVER DOING THIS, I AM JUST DOING THIS TO UPDATE THE COUNT
  constructor(@Inject(forwardRef(() => OnPushOptimizationComponent)) private comp:OnPushOptimizationComponent) {}

  transform(values: number[]): number {
    this.comp.averageCalls ++; // Again, please do not actually do this
    if (values && values.length > 0) {
      return values.reduce((a, b) => +a + +b, 0) / values.length;
    }
    return 0;
  }
}
