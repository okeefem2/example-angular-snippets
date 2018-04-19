import { forwardRef, Inject, Pipe, PipeTransform } from '@angular/core';
import { OnPushComponent } from '../component-optimization/on-push/on-push.component';

@Pipe({
  name: 'averageonpush'
})
export class AverageOnPushPipe implements PipeTransform {
  // I DO NOT RECOMMEND EVER DOING THIS, I AM JUST DOING THIS TO UPDATE THE COUNT
  constructor(@Inject(forwardRef(() => OnPushComponent)) private comp:OnPushComponent) {}

  transform(values: number[]): number {
    this.comp.averageCalls ++; // Again, please do not actually do this
    if (values && values.length > 0) {
      return values.reduce((a, b) => +a + +b, 0) / values.length;
    }
    return 0;
  }
}
