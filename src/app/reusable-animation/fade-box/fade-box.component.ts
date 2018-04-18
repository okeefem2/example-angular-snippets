import { Component } from '@angular/core';
import { fadeInOut } from '../animations';

@Component({
  selector: 'fade-box',
  templateUrl: './fade-box.component.html',
  styleUrls: ['./fade-box.component.css'],
  animations: [fadeInOut({ shownOpacity: 1, fadedOpacity: 0, transitionTime: '1200ms'})]
})
export class FadeBoxComponent {
  // The current state of the button text
  state = 'shown';
  // The text currently being show
  buttonText = 'FADE';
  // The text that will be shown when the transition is finished
  transitionButtonText = 'FADE';

  onTransition() {
    // Kick off the first transition
    if (this.state === 'shown') {
      this.state = this.state = 'faded';
      this.buttonText = 'FADING...';
      this.transitionButtonText = 'SHOW';
    } else {
      this.state = this.state = 'shown';
      this.buttonText = 'SHOWING...';
      this.transitionButtonText = 'FADE';
    }
  }

  transitionComplete(event) {
    this.buttonText = this.transitionButtonText;
  }
}
