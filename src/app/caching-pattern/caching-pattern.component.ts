import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { dateData } from './date-data';
import { of as observableOf } from 'rxjs/observable/of';
import { from as observableFrom } from 'rxjs/observable/from';
import { Subject } from 'rxjs/Subject';
import { map, scan, mergeMap, last, filter, switchMap, concatMap, concat, take } from 'rxjs/operators';

@Component({
  selector: 'app-caching-pattern',
  templateUrl: './caching-pattern.component.html',
  styleUrls: ['./caching-pattern.component.css']
})
export class CachingPatternComponent implements OnInit {
  beginDate;
  endDate;
  dateData$;
  search$;
  datesSearched = [];
  cachedResultsReturned = 0;
  newResultsReturned = 0;
  data = [];

  dateIsBetween(start, end, date) {
    return start <= date && date <= end;
  }

  ngOnInit() {
    this.beginDate = new FormControl(new Date());
    this.endDate = new FormControl(new Date());
    this.dateData$ = observableOf(dateData);
    this.search$ = new Subject();

    this.search$.pipe(
      map(() => ({beginDate: this.beginDate.value, endDate: this.endDate.value})),
      scan((state, searchDates) => {
        if (state.beginDate === searchDates.beginDate && 
            state.endDate === searchDates.endDate) {
            state.cached = true;
        } else {
          state = { ...searchDates, cached: false };
          this.datesSearched.push(searchDates);
        }
        return state;
      }, { beginDate: null, endDate: null, cached: false }),
      switchMap((state: any) => {
        if (state.cached === true) {
          this.cachedResultsReturned ++;
          return observableOf(this.data);
        }
        this.newResultsReturned ++;
        debugger;
        return this.dateData$.pipe(
          // use filter here instead for from
          map((data: any) => {
            debugger;
            // use for from
            // return this.dateIsBetween(state.beginDate, state.endDate, new Date(data.date))
            return data.filter(d => this.dateIsBetween(state.beginDate, state.endDate, new Date(d.date)))
          })
        )
      }),
    ).subscribe(d => this.data = d);
  }
// think about how to concat the last and the gap together when cached
}
// rxjs-tslint