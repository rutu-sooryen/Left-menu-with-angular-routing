import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuItem2Component } from './sub-menu-item2.component';

describe('SubMenuItem2Component', () => {
  let component: SubMenuItem2Component;
  let fixture: ComponentFixture<SubMenuItem2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubMenuItem2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMenuItem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
