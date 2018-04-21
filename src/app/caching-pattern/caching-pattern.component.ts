import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { dateData } from './date-data';
import { of as observableOf } from 'rxjs/observable/of';
import { from as observableFrom } from 'rxjs/observable/from';
import { Subject } from 'rxjs/Subject';
import { map, scan, mergeMap, last, filter, switchMap, concatMap, concat, take } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-caching-pattern',
  templateUrl: './caching-pattern.component.html',
  styleUrls: ['./caching-pattern.component.css']
})
export class CachingPatternComponent implements OnInit, OnDestroy {
  beginDate;
  endDate;
  dateData$;
  search$;
  datesSearched = [];
  cachedResultsReturned = 0;
  newResultsReturned = 0;
  data = [];
  searchSubscription: Subscription;

  dateIsBetween(start, end, date) {
    return start <= date && date <= end;
  }

  updateState(state: any, searchDates: any): any {
    // If a state search exists from the previous search and we want to add it to the cache 
    if (state.search && state.search.add) {
      state.searchCache.push(state.search);
    }
    // Filter down the cache to match the current search dates
    const filteredSearchCache = state.searchCache.filter(s => s.beginDate.getTime() === searchDates.beginDate.getTime() && 
      s.endDate.getTime() === searchDates.endDate.getTime());
    // If we found a matching search in cache, set the current search so we have access to the data from that search
    // Otherwise use the current date values
    state.search = filteredSearchCache.length > 0 ? filteredSearchCache[0] : searchDates;
    return state
  }

  getData(state: any) {
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
    return state.seach.data;
  }

  ngOnInit() {
    // Set up today and the beginning of the current month as the default date range
    const today = new Date();
    today.setHours(0,0,0,0);
    const beginningOfMonth = new Date(today);
    beginningOfMonth.setDate(1);

    // Create our two datepicker form controls setting the initial values
    this.beginDate = new FormControl(beginningOfMonth);
    this.endDate = new FormControl(today);
    this.dateData$ = observableOf(dateData);
    this.search$ = new Subject();

    // Listen to the seach subject
    this.searchSubscription = this.search$.pipe(
      // When this subject emits (on button click), create an object with the current datepicker values
      map(() => ({beginDate: this.beginDate.value, endDate: this.endDate.value})),
      // Pass those dates into scan, which also holds onto the current state (our cache of searches)
      scan(
        (state, searchDates: any) => this.updateState(state, searchDates), 
        // Set a initial value for state
        { searchCache: [], search: null }
      ),
      // Using switch map so that if we make another request this one will be cancelled in favor of the new one
      switchMap(state => this.getData(state)),
    ).subscribe(d => this.data = d);
  }
  
  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }
}
// rxjs-tslint