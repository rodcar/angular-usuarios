import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSuscripcionComponent } from './formulario-suscripcion.component';

describe('FormularioSuscripcionComponent', () => {
  let component: FormularioSuscripcionComponent;
  let fixture: ComponentFixture<FormularioSuscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioSuscripcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioSuscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
