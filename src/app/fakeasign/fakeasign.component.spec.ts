import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';

import { FakeasignComponent } from './fakeasign.component';

describe('FakeasignComponent', () => {
  let component: FakeasignComponent;
  let fixture: ComponentFixture<FakeasignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeasignComponent ]
    });

    fixture = TestBed.createComponent(FakeasignComponent);
    component = fixture.componentInstance;
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the updated title', fakeAsync(() => {
    //hacemos el binding inicial
    fixture.detectChanges();

    //esperamos al siguiente ciclo
    tick();
    //y volvemos a detectar cambios
    fixture.detectChanges();

    //tenemos otro timer en marcha, lo eliminamos
    flush();
    const titleDisplay: HTMLElement = fixture.nativeElement.querySelector('h1');
    const subtitleDisplay: HTMLElement = fixture.nativeElement.querySelector('p');

    expect(titleDisplay.textContent).toEqual('suxx!');
    expect(subtitleDisplay.textContent).toEqual('safe');
  }));

  it('should get the updated subtitle', fakeAsync(() => {
    //hacemos el binding inicial
    fixture.detectChanges();

    //esperamos al siguiente ciclo
    tick(1000);
    //y volvemos a detectar cambios
    fixture.detectChanges();

    const titleDisplay: HTMLElement = fixture.nativeElement.querySelector('p');

    expect(titleDisplay.textContent).toEqual('not safe!');
  }));
});
