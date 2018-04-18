import { Component } from '@angular/core';
import { fadeInOut } from '../animations';

@Component({
  selector: 'fade-button',
  templateUrl: './fade-button.component.html',
  styleUrls: ['./fade-button.component.css'],
  animations: [fadeInOut({ shownOpacity: 1, fadedOpacity: 0.3, transitionTime: '600ms'})]
})
export class FadeButtonComponent {

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
    this.state = 'faded';
    this.transitionButtonText = 'ADDING...';

    // Do whatever logic here. If it is asynchronous, put the remaining code in your subscribe/then callbacks
    // Note if your logic is snappy, you could leave the timeouts in to simulate the animation for a better UX
    setTimeout(() => {
      this.state = 'faded';
      this.transitionButtonText = 'ADDED';
    }, 1800);

    // Reset button text
    setTimeout(() => {
      this.state = 'faded';
      this.transitionButtonText = 'ADD TO CART';
    }, 3600);
  }
}
