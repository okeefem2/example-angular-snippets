import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-vs-function',
  templateUrl: './pipe-vs-function.component.html',
  styleUrls: ['./pipe-vs-function.component.css']
})
export class PipeVsFunctionComponent implements OnInit {

  public scores;
  public totalCalls;
  public averageCalls;

  ngOnInit() {
    this.totalCalls = 0;
    this.averageCalls = 0;
    this.scores = [
      { name: 'Fiddler', score: 10 },
      { name: 'Ben', score: 3 },
      { name: 'Apsalar', score: 14 },
      { name: 'Helian', score: 8 },
    ];
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

  getScoreValues(): number[] {
    return this.scores.map(s => s.score);
  }
}
