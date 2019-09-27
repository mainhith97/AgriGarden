import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestDokhoComponent } from './guest-dokho.component';

describe('GuestDokhoComponent', () => {
  let component: GuestDokhoComponent;
  let fixture: ComponentFixture<GuestDokhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestDokhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestDokhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
