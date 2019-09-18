import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestAnlaComponent } from './guest-anla.component';

describe('GuestAnlaComponent', () => {
  let component: GuestAnlaComponent;
  let fixture: ComponentFixture<GuestAnlaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestAnlaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestAnlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
