import { animate, state, style, transition, trigger } from '@angular/animations';

export const fadeInOut = ({ shownOpacity, fadedOpacity, transitionTime}) => {
  return trigger('trigger', [
    state('shown', style({
      opacity: shownOpacity
    })),
    state('faded', style({
      opacity: fadedOpacity
    })),
    transition('shown <=> faded', animate(`${transitionTime} ease-out`))
  ]);
};
