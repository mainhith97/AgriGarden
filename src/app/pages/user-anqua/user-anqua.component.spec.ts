import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAnquaComponent } from './user-anqua.component';

describe('UserAnquaComponent', () => {
  let component: UserAnquaComponent;
  let fixture: ComponentFixture<UserAnquaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAnquaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAnquaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
