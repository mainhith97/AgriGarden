import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestNamComponent } from './guest-nam.component';

describe('GuestNamComponent', () => {
  let component: GuestNamComponent;
  let fixture: ComponentFixture<GuestNamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestNamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestNamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
