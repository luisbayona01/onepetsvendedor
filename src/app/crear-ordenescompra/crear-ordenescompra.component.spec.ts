import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearOrdenescompraComponent } from './crear-ordenescompra.component';

describe('CrearOrdenescompraComponent', () => {
  let component: CrearOrdenescompraComponent;
  let fixture: ComponentFixture<CrearOrdenescompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearOrdenescompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearOrdenescompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
