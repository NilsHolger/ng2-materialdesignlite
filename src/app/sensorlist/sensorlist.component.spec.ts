/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SensorlistComponent } from './sensorlist.component';

describe('SensorlistComponent', () => {
  let component: SensorlistComponent;
  let fixture: ComponentFixture<SensorlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
