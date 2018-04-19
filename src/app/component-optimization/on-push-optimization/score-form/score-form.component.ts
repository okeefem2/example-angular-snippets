import { Component, OnInit, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';

@Component({
  selector: 'score-form',
  templateUrl: './score-form.component.html',
  styleUrls: ['./score-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScoreFormComponent {
  @Input() score;
  @Output() scoreChanged = new EventEmitter();

  onScoreSaved() {
    this.scoreChanged.emit(this.score);
  }
}
