import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoPlaceComponent } from './compo-place.component';

describe('CompoPlaceComponent', () => {
  let component: CompoPlaceComponent;
  let fixture: ComponentFixture<CompoPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompoPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
