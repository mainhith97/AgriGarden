import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTraComponent } from './user-tra.component';

describe('UserTraComponent', () => {
  let component: UserTraComponent;
  let fixture: ComponentFixture<UserTraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
