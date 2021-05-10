import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTestBindDataComponent } from './basic-test-bind-data.component';

describe('BasicTestBindDataComponent', () => {
  let component: BasicTestBindDataComponent;
  let fixture: ComponentFixture<BasicTestBindDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicTestBindDataComponent]
    });

    fixture = TestBed.createComponent(BasicTestBindDataComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should display original title KO', () => {
    //este test falla porque aunque hemos creado el componente usando createComponent()
    //este no hace el binding de los datos
    const h1: HTMLElement = fixture.nativeElement.querySelector('h1');

    expect(h1.textContent).toContain(component.title);
  });

  it('should display original title OK', () => {
    //aquí vamos a hacer que se haga el binding previamente a verificar que h1 contiene el texto correcto
    fixture.detectChanges();

    const h1: HTMLElement = fixture.nativeElement.querySelector('h1');

    expect(h1.textContent).toContain(component.title);
  });

  it('should display alternative title', () => {
    //aquí vamos a cambiar el texto original por otro antes de hacer el binding
    //esto es interesante porque podemos poner el componente en un estado que nos sirva para test concretos
    component.title = 'agile suxx!'
    fixture.detectChanges();

    const h1: HTMLElement = fixture.nativeElement.querySelector('h1');

    expect(h1.textContent).toContain(component.title);
  });
});
