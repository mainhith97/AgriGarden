import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHatgiongrauComponent } from './user-hatgiongrau.component';

describe('UserHatgiongrauComponent', () => {
  let component: UserHatgiongrauComponent;
  let fixture: ComponentFixture<UserHatgiongrauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHatgiongrauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHatgiongrauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
