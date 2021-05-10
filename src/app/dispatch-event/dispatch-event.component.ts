import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dispatch-event',
  template: `
    <p (click)="onClick()">{{title}}</p>
  `,
  styles: []
})
export class DispatchEventComponent {
  public title:string= 'original text!';

  public onClick():void {
    this.title = 'modified text';
  }

}
