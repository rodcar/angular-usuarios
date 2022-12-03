import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaVendedoresComponent } from './tabla-vendedores.component';

describe('TablaVendedoresComponent', () => {
  let component: TablaVendedoresComponent;
  let fixture: ComponentFixture<TablaVendedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaVendedoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaVendedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
