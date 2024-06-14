/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TripleCardComponent } from './triple-card.component';

describe('TripleCardComponent', () => {
  let component: TripleCardComponent;
  let fixture: ComponentFixture<TripleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripleCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
