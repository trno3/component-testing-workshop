import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BasicTestComponent } from './basic-test.component';

describe('BasicTestComponent', () => {
  let component: BasicTestComponent;
  let fixture: ComponentFixture<BasicTestComponent>;

  beforeEach(() => {
    //configuramos el testbed, como si fuera la definición de un módulo
    TestBed.configureTestingModule({
      declarations: [BasicTestComponent]
    });

    //llamamos a TestBed.createComponent para que nos cree una instancia del componente
    //agrega el componente al DOM, y retorna un ComponentFixture
    //a partir de este punto no se puede reconfigurar el testbed
    //fixture es un test harness que nos permite interactuar con el componente creado
    fixture = TestBed.createComponent(BasicTestComponent);
    //la propiedad componentInstance nos devuelve la instancia del componente creada
    component = fixture.componentInstance;
  });

  it('should create', () => {
    //testeamos que la instancia esté creada
    expect(component).toBeTruthy();
  });

  it('should contain "basic-test works!"', () => {
    //verificamos que el componente devuelve el texto
    const text:string='basic-test works!';

    //nativeElement contiene el html asociado al componente
    const bannerElement: HTMLElement = fixture.nativeElement;
    //esto es equivalente a:
    // const bannerElement: HTMLElement = fixture.debugElement.nativeElement;
    //debugElement contiene info del compilador de angular sobre un elemento y provee acceso al ElementInjector y el DOM del element
    //también nos permite hacer querys de elementos hijos
    //al final es una abstracción para no estar ligado a alguna de las plataformas que ofrece angular 

    expect(bannerElement.textContent).toContain(text);
  });

  it('should find the <p> with fixture.debugElement.query(By.css)', () => {
    const text:string='basic-test works!';

    //vamos a buscar el párrafo que contiene el texto a buscar, usando By.css
    //primero obtenemos el debugElement
    const bannerDe: DebugElement = fixture.debugElement;
    //ahora hacemos la consulta usando un selector css
    const paragraphDe = bannerDe.query(By.css('p'));
    const p: HTMLElement = paragraphDe.nativeElement;

    expect(p.textContent).toEqual(text);
  });

  it('should find the <p> with querySelector', () => {
    const text:string='basic-test works!';

    //vamos a buscar el párrafo que contiene el texto a buscar, a partir del nativeElement
    //y usando el método querySelector de javascript https://developer.mozilla.org/es/docs/Web/API/Document/querySelector
    const p: HTMLElement = fixture.debugElement.nativeElement.querySelector('p');

    //esta es otra opción para hacer el anterior test
    expect(p.textContent).toEqual(text);
  });
});
