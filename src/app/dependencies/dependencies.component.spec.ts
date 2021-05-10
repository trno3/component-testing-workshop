import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockProvider, MockPipe } from 'ng-mocks';
import * as td from 'testdouble';

import { DependenciesComponent } from './dependencies.component';
import { DummyService } from './dummy.service';
import { AnotherDummyService } from './anotherDummy.service';
import { DummyPipe } from './dummyPipe.pipe';

describe('DependenciesComponent', () => {
  let component: DependenciesComponent = null;
  let fixture: ComponentFixture<DependenciesComponent> = null;
  let anotherDummyServiceMock: AnotherDummyService = null;
  let lovelyText: string = 'lovely!';

  beforeEach(() => {
    //usamos testdouble para crear un mock y poder modificar el comportamiento de un servicio
    anotherDummyServiceMock = td.constructor(AnotherDummyService).prototype;
    td.when(anotherDummyServiceMock.lovelyMethod()).thenReturn({ text: lovelyText });

    TestBed.configureTestingModule({
      declarations: [
        DependenciesComponent,
        //ng-mocks tiene un metodo mockpipe donde se mockea facilmente una pipe
        MockPipe(DummyPipe)
      ],
      providers: [
        //ng-mocks tiene un metodo mockpipe donde se mockea facilmente una servicio
        //e incluse se pueden customizar 
        MockProvider(DummyService, { awesomeMethod: () =>  'awesome!' }),
        //es este caso estamos usando un mock de testdouble, para poder tener acceso facil a metodos
        { provide: AnotherDummyService, useValue: anotherDummyServiceMock }
      ]
    });

    fixture = TestBed.createComponent(DependenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show "lovely" as a subtitle', () => {
    const hostElement: HTMLElement = fixture.nativeElement;
    const subtitleDisplay: HTMLElement = hostElement.querySelector('p');

    expect(subtitleDisplay.textContent).toEqual(lovelyText);
  });

  it('should use TestBed.get to get the dummyservice instance', () => {
    fixture.detectChanges();
    const titleDisplay: HTMLElement = fixture.nativeElement.querySelector('h1');

    expect(titleDisplay.textContent).toEqual('awesome!');
  });

  it('should use TestBed.get to get the dummyservice instance', () => {
    //mediante el Testbed.get() podemos obtener la instancia de servicios, pipes...
    const anotherDummyServiceInstance: AnotherDummyService = TestBed.get(AnotherDummyService);

    expect(anotherDummyServiceInstance.lovelyMethod()).toEqual({ text: lovelyText });
  });
});
