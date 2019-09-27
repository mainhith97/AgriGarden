import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHatgionghoaComponent } from './user-hatgionghoa.component';

describe('UserHatgionghoaComponent', () => {
  let component: UserHatgionghoaComponent;
  let fixture: ComponentFixture<UserHatgionghoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHatgionghoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHatgionghoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
