import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestRaucuquaComponent } from './guest-raucuqua.component';

describe('GuestRaucuquaComponent', () => {
  let component: GuestRaucuquaComponent;
  let fixture: ComponentFixture<GuestRaucuquaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestRaucuquaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestRaucuquaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
