import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestHatgionghoaComponent } from './guest-hatgionghoa.component';

describe('GuestHatgionghoaComponent', () => {
  let component: GuestHatgionghoaComponent;
  let fixture: ComponentFixture<GuestHatgionghoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestHatgionghoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestHatgionghoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
