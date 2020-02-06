import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuItem1Component } from './sub-menu-item1.component';

describe('SubMenuItem1Component', () => {
  let component: SubMenuItem1Component;
  let fixture: ComponentFixture<SubMenuItem1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubMenuItem1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMenuItem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
