import { NgModule } from '@angular/core';

import { DependenciesComponent } from './dependencies.component';
import { DummyPipe } from './dummyPipe.pipe';
import { DummyService } from './dummy.service';
import { AnotherDummyService } from './anotherDummy.service';


@NgModule({
    imports: [],
    exports: [],
    declarations: [DependenciesComponent, DummyPipe],
    providers: [AnotherDummyService, DummyService],
})
export class DependenciesModule { }
