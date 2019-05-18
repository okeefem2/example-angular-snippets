import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-example-component-lib',
  template: `
    <p>
      Goodbye {{ name }}!
    </p>
  `,
  styles: []
})
export class ExampleComponentLibComponent implements OnInit {

  @Input() name: string;
  constructor() { }

  ngOnInit() {
  }

}
