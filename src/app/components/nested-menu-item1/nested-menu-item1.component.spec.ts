import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedMenuItem1Component } from './nested-menu-item1.component';

describe('NestedMenuItem1Component', () => {
  let component: NestedMenuItem1Component;
  let fixture: ComponentFixture<NestedMenuItem1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedMenuItem1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedMenuItem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
