import { Component, OnInit } from '@angular/core';
import { of, Observable, interval, forkJoin } from 'rxjs';
import { mergeMap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-obs-merge',
  templateUrl: './obs-merge.component.html',
  styleUrls: ['./obs-merge.component.css']
})
export class ObsMergeComponent implements OnInit {

  mergedSource$: Observable<any[]>;

  ngOnInit() {
    // Create first observable
    const source1$ = of([
      { message: 'one' }
    ]);

    // Create second observable
    const source2$ = of([
      { message: 'two' }
    ]);

    // Create our merge function where we edit some of the data
    const mergeFun = (m: any[]) => {
      m.map((d) => d.message = d.message + ' merged!');
      return m;
    };

    // Fork join the two sources with the merge function applied to them.
    this.mergedSource$ = forkJoin(
      source1$.pipe(mergeMap(mergeFun)),
      source2$.pipe(mergeMap(mergeFun))
    );

    const source = interval(500);

    function filterOdd(src) {
      return src.pipe(
        filter((s: number) => s % 2 === 0)
      );
    }

    const odds = filterOdd(source);

    odds.subscribe(function(x) {
      console.log(x);
    });

  }
}
