import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarVendedorPageComponent } from './agregar-vendedor-page.component';

describe('AgregarVendedorPageComponent', () => {
  let component: AgregarVendedorPageComponent;
  let fixture: ComponentFixture<AgregarVendedorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarVendedorPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarVendedorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
