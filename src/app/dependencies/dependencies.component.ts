import { Component, OnInit } from '@angular/core';

import { DummyService } from './dummy.service';
import { AnotherDummyService } from './anotherDummy.service';

@Component({
  selector: 'app-dependencies',
  templateUrl: './dependencies.component.html',
  styles: []
})
export class DependenciesComponent implements OnInit {
  public title: string = null;
  public subtitle: string = null;

  public constructor(
    private _dummyService: DummyService,
    private _anotherDummyService: AnotherDummyService
  ) { }

  public ngOnInit(): void {
    this.title = this._dummyService.awesomeMethod();
    this.subtitle = this._anotherDummyService.lovelyMethod().text;
  }

}
