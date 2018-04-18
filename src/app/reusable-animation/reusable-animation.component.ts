import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { fadeInOut } from './animations';

@Component({
  selector: 'reusable-animation',
  templateUrl: './reusable-animation.component.html',
  styleUrls: ['./reusable-animation.component.css'],
  animations: [fadeInOut]
})
export class ReusableAnimationComponent {

  // The current state of the button text
  state = 'shown';
  // The text currently being show
  buttonText = 'ADD TO CART';
  // The text that will be shown when the transition is finished
  transitionButtonText = 'ADD TO CART';

  /**
   * Respond to the transition event of the button text
   * by setting the text awaiting transition then setting the state as shown
   */
  buttonTextTransitioned(event) {
    this.buttonText = this.transitionButtonText;
    this.state = this.state = 'shown';
  }

  onAddToCart() {
    // Kick off the first transition
    this.state = 'transitioning';
    this.transitionButtonText = 'ADDING...';

    // Do whatever logic here. If it is asynchronous, put the remaining code in your subscribe/then callbacks
    // Note if your logic is snappy, you could leave the timeouts in to simulate the animation for a better UX
    setTimeout(() => {
      this.state = 'transitioning';
      this.transitionButtonText = 'ADDED';
    }, 1800);

    // Reset button text
    setTimeout(() => {
      this.state = 'transitioning';
      this.transitionButtonText = 'ADD TO CART';
    }, 3600);
  }
}
