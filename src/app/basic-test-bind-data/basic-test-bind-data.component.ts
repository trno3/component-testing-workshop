import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-test-bind-data',
  template: `
    <h1>{{title}}</h1>
  `,
  styles: []
})
export class BasicTestBindDataComponent implements OnInit {

  public title: string = 'component works!';

  public constructor() { }

  public ngOnInit() {
  }

}
