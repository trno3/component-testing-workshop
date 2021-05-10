import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-automatic-change-detection',
  template: `
    <h1>{{title}}</h1>
  `,
  styles: []
})
export class AutomaticChangeDetectionComponent implements OnInit {
  public title:string = 'safe train!'
  constructor() { }

  ngOnInit() {
  }

}
