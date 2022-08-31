import { ComponentFixture, ComponentFixtureAutoDetect, TestBed, waitForAsync } from '@angular/core/testing';

import { AutomaticChangeDetectionComponent } from './automatic-change-detection.component';

describe('AutomaticChangeDetectionComponent', () => {
  let component: AutomaticChangeDetectionComponent;
  let fixture: ComponentFixture<AutomaticChangeDetectionComponent>;
  let  h1:HTMLElement = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomaticChangeDetectionComponent ],
      //con este proveedor estamos haciendo que entorno de test ejecute la deteccion de cambios automaticamente
      //a veces esto es mas comodo que ir haciendo el .detectChanges() cada vez que se modifica algo
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    });

    fixture = TestBed.createComponent(AutomaticChangeDetectionComponent);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display original title ', () => {
    //en este caso no hace falta que hagamos el fixture.detectChanges() manualmente
    //y el test funciona correctamente
    expect(h1.textContent).toContain(component.title);
  });

  it('should still see original title after comp.title change', () => {
    //la detección de cambios no funciona cuando hay cambios de manera síncrona, solo aquellos que son asíncronos
    //así que en este caso se debería hacer el fixture.detectChanges() para ver el cambio
    const oldTitle = component.title;
    component.title = 'Test Title';

    expect(h1.textContent).toContain(oldTitle);
  });
  
  it('should display updated title after detectChanges', () => {
    //en este caso, al hacer la detección manual, el test si que hace lo que se espera
    component.title = 'Test Title';
    fixture.detectChanges();
    expect(h1.textContent).toContain(component.title);
  });

});
