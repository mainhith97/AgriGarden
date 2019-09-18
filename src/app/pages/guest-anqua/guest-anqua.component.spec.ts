import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestAnquaComponent } from './guest-anqua.component';

describe('GuestAnquaComponent', () => {
  let component: GuestAnquaComponent;
  let fixture: ComponentFixture<GuestAnquaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestAnquaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestAnquaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
