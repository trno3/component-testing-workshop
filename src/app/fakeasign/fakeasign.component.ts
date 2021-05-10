import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fakeasign',
  template: `
    <h1>{{title}}</h1>
    <p>{{subtitle}}</p>
  `,
  styles: []
})
export class FakeasignComponent implements OnInit {
  public title: string = 'ayail';
  public subtitle: string = 'safe';

  public constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.title = "suxx!";
    });

    setTimeout(() => {
      this.subtitle = "not safe!";
    }, 1000);
  }

}
