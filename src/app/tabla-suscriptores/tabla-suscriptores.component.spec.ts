import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaSuscriptoresComponent } from './tabla-suscriptores.component';

describe('TablaSuscriptoresComponent', () => {
  let component: TablaSuscriptoresComponent;
  let fixture: ComponentFixture<TablaSuscriptoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaSuscriptoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaSuscriptoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
