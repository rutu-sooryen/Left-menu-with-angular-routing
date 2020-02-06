import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedMenuItem2Component } from './nested-menu-item2.component';

describe('NestedMenuItem2Component', () => {
  let component: NestedMenuItem2Component;
  let fixture: ComponentFixture<NestedMenuItem2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedMenuItem2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedMenuItem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
