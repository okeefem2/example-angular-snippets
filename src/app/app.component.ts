import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Groups consecutive items of an array together into a 2d array based on a comparator
  public constructArray() {
    const arr1 = ['1', '2', '3', '4', '5', '6', '7'];
    const arr2 = ['2', '4', '5', '6'];
    const arr3 = [];
    let i;
    let value;
    let subArr;
    for (i = arr2.length - 1; i >= 0; i -= 1) {
      value = arr2[i];
      subArr = [];
      if (arr1.indexOf(value) !== -1) {
        subArr.push(value);
        let nextIndex = i - 1;
        while (value !== null) {
          value = this.addToArray(value, arr2[nextIndex], subArr);
          nextIndex > 0 && nextIndex--;
        }
        arr2.splice(nextIndex + 1, subArr.length);
        arr3.push(subArr);
      }
    }
    console.log(arr3);
  }
  public addToArray(value, nextValue, arr) {
    if (+nextValue === +value - 1) {
      // Insert whatever comperator here
      arr.push(nextValue);
      return nextValue;
    }
    return null;
  }
}
