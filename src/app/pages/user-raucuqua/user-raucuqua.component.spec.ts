import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRaucuquaComponent } from './user-raucuqua.component';

describe('UserRaucuquaComponent', () => {
  let component: UserRaucuquaComponent;
  let fixture: ComponentFixture<UserRaucuquaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRaucuquaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRaucuquaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
