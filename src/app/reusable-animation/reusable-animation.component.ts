import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'reusable-animation',
  templateUrl: './reusable-animation.component.html',
  styleUrls: ['./reusable-animation.component.css'],
  animations: [
    trigger('buttonTextStateTrigger', [
      state('shown', style({
        opacity: 1
      })),
      state('transitioning', style({
        opacity: 0.3
      })),
      transition('shown => transitioning', animate('600ms ease-out')),
      transition('transitioning => shown', animate('600ms ease-in'))
    ])
  ]
})
export class ReusableAnimationComponent {

  // The current state of the button text
  buttonTextState = 'shown';
  // The text currently being show
  buttonText = "ADD TO CART";
  // The text that will be shown when the transition is finished
  transitionButtonText = "ADD TO CART";

  /**
   * Respond to the transition event of the button text
   * by setting the text awaiting transition then setting the state as shown
   */
  buttonTextTransitioned(event) {
    this.buttonText = this.transitionButtonText;
    this.buttonTextState = this.buttonTextState = 'shown';
  }

  onAddToCart() {
    // Kick off the first transition
    this.buttonTextState = 'transitioning';
    this.transitionButtonText = 'ADDING...';

    // Do whatever logic here. If it is asynchronous, put the remaining code in your subscribe/then callbacks
    // Note if your logic is snappy, you could leave the timeouts in to simulate the animation for a better UX

    setTimeout(() => {
      this.buttonTextState = 'transitioning';
      this.transitionButtonText = 'ADDED';
    }, 1800);

    // Reset button text
    setTimeout(() => {
      this.buttonTextState = 'transitioning';
      this.transitionButtonText = 'ADD TO CART';
    }, 3600);
  }
}
