import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAnthanComponent } from './user-anthan.component';

describe('UserAnthanComponent', () => {
  let component: UserAnthanComponent;
  let fixture: ComponentFixture<UserAnthanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAnthanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAnthanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
