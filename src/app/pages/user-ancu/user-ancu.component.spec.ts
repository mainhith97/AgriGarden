import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAncuComponent } from './user-ancu.component';

describe('UserAncuComponent', () => {
  let component: UserAncuComponent;
  let fixture: ComponentFixture<UserAncuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAncuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAncuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
