import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarUsuarioPageComponent } from './agregar-usuario-page.component';

describe('AgregarUsuarioPageComponent', () => {
  let component: AgregarUsuarioPageComponent;
  let fixture: ComponentFixture<AgregarUsuarioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarUsuarioPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarUsuarioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
