import { animate, state, style, transition, trigger } from '@angular/animations';

export const fadeInOut =   trigger('trigger', [
  state('shown', style({
    opacity: 1
  })),
  state('transitioning', style({
    opacity: 0.3
  })),
  transition('shown => transitioning', animate('600ms ease-out')),
  transition('transitioning => shown', animate('600ms ease-in'))
]);
