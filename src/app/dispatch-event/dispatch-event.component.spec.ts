import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DispatchEventComponent } from './dispatch-event.component';

describe('DispatchEventComponent', () => {
  let component: DispatchEventComponent;
  let fixture: ComponentFixture<DispatchEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchEventComponent ]
    });

    fixture = TestBed.createComponent(DispatchEventComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change the title when click in the <p> element', () => {
    //en este test vamos a simular un click para ver que el metodo asociado hace lo que tiene que hacer
    const hostElement: HTMLElement = fixture.nativeElement;
    const titleDisplay: HTMLElement = hostElement.querySelector('p');

    //lanzamos el evento
    titleDisplay.dispatchEvent(new Event('click'));
    //y hacemos la deteccion de cambios
    fixture.detectChanges();

    //el texto dentro de <p> se ha modificado
    expect(titleDisplay.textContent).toBe('modified text');
  });
});
