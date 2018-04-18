import { forwardRef, Inject, Pipe, PipeTransform } from '@angular/core';
import { PipeVsFunctionComponent } from './pipe-vs-function.component';

@Pipe({
  name: 'average'
})
export class AveragePipe implements PipeTransform {
  // I DO NOT RECOMMEND EVER DOING THIS, I AM JUST DOING THIS TO UPDATE THE COUNT
  constructor(@Inject(forwardRef(() => PipeVsFunctionComponent)) private comp:PipeVsFunctionComponent) {}

  transform(values: number[]): number {
    this.comp.averageCalls ++; // Again, please do not actually do this
    if (values && values.length > 0) {
      return values.reduce((a, b) => +a + +b, 0) / values.length;
    }
    return 0;
  }
}
