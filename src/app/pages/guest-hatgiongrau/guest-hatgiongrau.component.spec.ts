import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestHatgiongrauComponent } from './guest-hatgiongrau.component';

describe('GuestHatgiongrauComponent', () => {
  let component: GuestHatgiongrauComponent;
  let fixture: ComponentFixture<GuestHatgiongrauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestHatgiongrauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestHatgiongrauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
