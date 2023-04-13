import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioListarComponent } from './servicio-listar.component';

describe('ServicioListarComponent', () => {
  let component: ServicioListarComponent;
  let fixture: ComponentFixture<ServicioListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
