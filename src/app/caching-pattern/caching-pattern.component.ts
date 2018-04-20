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
    const today = new Date();
    today.setHours(0,0,0,0);
    const beginningOfMonth = new Date(today);
    beginningOfMonth.setDate(1);
    this.beginDate = new FormControl(beginningOfMonth);
    this.endDate = new FormControl(today);
    this.dateData$ = observableOf(dateData);
    this.search$ = new Subject();

    this.search$.pipe(
      map(() => ({beginDate: this.beginDate.value, endDate: this.endDate.value})),
      scan((state, searchDates: any) => {
        debugger;
        if (state.search && state.search.add) {
          state.searchCache.push(state.search);
        }
        const filteredSearchCache = state.searchCache.filter(s => s.beginDate.getTime() === searchDates.beginDate.getTime() && 
          s.endDate.getTime() === searchDates.endDate.getTime())
        if (filteredSearchCache.length > 0) {
          state.search = filteredSearchCache[0];
        } else {
          state.search = searchDates;
        }
        return state;
      }, { searchCache: [], search: null }),
      switchMap((state: any) => {
        debugger;
        if (state.search.data) {
          state.search.add = false;
          this.cachedResultsReturned ++;
        } else {
          state.search.add = true;
          this.newResultsReturned ++;
          state.search.data = this.dateData$.pipe(
            map((data: any) => {
              return data.filter(d => this.dateIsBetween(state.search.beginDate, state.search.endDate, new Date(d.date)))
            })
          )
        }
        return state.search.data
      }),
    ).subscribe(d => {
      debugger;
      this.data = d
    }
    ); 
  }
// think about how to concat the last and the gap together when cached
}
// rxjs-tslint