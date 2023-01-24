import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orderchild2Component } from './orderchild2.component';

describe('Orderchild2Component', () => {
  let component: Orderchild2Component;
  let fixture: ComponentFixture<Orderchild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Orderchild2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Orderchild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
