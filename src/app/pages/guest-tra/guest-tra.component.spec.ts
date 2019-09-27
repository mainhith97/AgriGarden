import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestTraComponent } from './guest-tra.component';

describe('GuestTraComponent', () => {
  let component: GuestTraComponent;
  let fixture: ComponentFixture<GuestTraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestTraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestTraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
