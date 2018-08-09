import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor() { }
  // Using a behavior subject allows us to define a default value
  // We also gain the benefit where whenever a new observer is registered, they
  // Automatically are pushed the last value.
  private testSubject = new BehaviorSubject<string>('Hello World');

  public getTestSubject(): Observable<string> {
    return this.testSubject.asObservable();
  }

  public pushTestSubject(value: string): void {
    this.testSubject.next(value);
  }
}
