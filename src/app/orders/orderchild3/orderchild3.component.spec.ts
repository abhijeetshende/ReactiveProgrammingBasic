import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orderchild3Component } from './orderchild3.component';

describe('Orderchild3Component', () => {
  let component: Orderchild3Component;
  let fixture: ComponentFixture<Orderchild3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Orderchild3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Orderchild3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
