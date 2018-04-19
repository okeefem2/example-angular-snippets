import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-on-push-optimization',
  templateUrl: './on-push-optimization.component.html',
  styleUrls: ['./on-push-optimization.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushOptimizationComponent implements OnInit {

  public scores;
  public totalCalls;
  public averageCalls;
  public scoreValues;

  ngOnInit() {
    this.totalCalls = 0;
    this.averageCalls = 0;
    this.scores = [
      { name: 'Fiddler', score: 10 },
      { name: 'Ben', score: 3 },
      { name: 'Apsalar', score: 14 },
      { name: 'Helian', score: 8 }
    ];
    this.scoreValues = [];
  }

  addScore() {
    this.scores.push({ name: '', score: 0 });
  }

  removeScore(index) {
    this.scores.splice(index, 1);
  }

  calculateTotal(): number {
    this.totalCalls ++;
    return this.scores.reduce((a, b) => +a + +b.score, 0);
  }

  onScoreChanged(score, index) {
    console.log(score);
    this.scores[index] = score;
    this.scoreValues = this.scores.map(s => s.score);
  }
}
