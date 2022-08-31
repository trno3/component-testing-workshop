import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExternalFilesComponent } from './external-files.component';

describe('ExternalFilesComponent', () => {
  let component: ExternalFilesComponent;
  let fixture: ComponentFixture<ExternalFilesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalFilesComponent ]
    })
    //en entornos que no usan el angular cli, puede ser necesario llamar al compileComponents() para que compile correctamente el componente
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
