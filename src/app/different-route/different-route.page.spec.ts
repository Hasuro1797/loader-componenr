import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DifferentRoutePage } from './different-route.page';

describe('DifferentRoutePage', () => {
  let component: DifferentRoutePage;
  let fixture: ComponentFixture<DifferentRoutePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferentRoutePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
