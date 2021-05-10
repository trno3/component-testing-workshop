import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-test',
  template: `
    <p>basic-test works!</p>
  `,
  styles: []
})
export class BasicTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
