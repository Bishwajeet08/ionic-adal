import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPageComponent } from './demo-page.component';

describe('DemoPageComponent', () => {
  let component: DemoPageComponent;
  let fixture: ComponentFixture<DemoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoPageComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
