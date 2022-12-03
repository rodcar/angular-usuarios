import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRegistroVendedorComponent } from './formulario-registro-vendedor.component';

describe('FormularioRegistroVendedorComponent', () => {
  let component: FormularioRegistroVendedorComponent;
  let fixture: ComponentFixture<FormularioRegistroVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioRegistroVendedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioRegistroVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
