import { animate, state, style, transition, trigger } from '@angular/animations';
import { FUNCTION_TYPE } from '@angular/compiler/src/output/output_ast';

export class Animations {
  static fadeInOut = ({ shownOpacity, fadedOpacity, transitionTime}) => {
    return trigger('trigger', [
      state('shown', style({
        opacity: shownOpacity
      })),
      state('faded', style({
        opacity: fadedOpacity
      })),
      transition('shown <=> faded', animate(`${transitionTime} ease-out`))
    ]);
  }
};
