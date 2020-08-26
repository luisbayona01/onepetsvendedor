import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenescompraComponent } from './ordenescompra.component';

describe('OrdenescompraComponent', () => {
  let component: OrdenescompraComponent;
  let fixture: ComponentFixture<OrdenescompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenescompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenescompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
