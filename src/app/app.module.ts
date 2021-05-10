import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicTestComponent } from './basic-test/basic-test.component';
import { BasicTestBindDataComponent } from './basic-test-bind-data/basic-test-bind-data.component';
import { AutomaticChangeDetectionComponent } from './automatic-change-detection/automatic-change-detection.component';
import { DispatchEventComponent } from './dispatch-event/dispatch-event.component';
import { ExternalFilesComponent } from './external-files/external-files.component';
import { DependenciesModule } from './dependencies/dependencies.module';
import { FakeasignComponent } from './fakeasign/fakeasign.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicTestComponent,
    BasicTestBindDataComponent,
    AutomaticChangeDetectionComponent,
    DispatchEventComponent,
    ExternalFilesComponent,
    FakeasignComponent
  ],
  imports: [
    BrowserModule,
    DependenciesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
