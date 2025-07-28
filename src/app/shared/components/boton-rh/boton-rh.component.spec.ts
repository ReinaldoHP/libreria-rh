/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BotonRhComponent } from './boton-rh.component';

describe('BotonRhComponent', () => {
  let component: BotonRhComponent;
  let fixture: ComponentFixture<BotonRhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonRhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
