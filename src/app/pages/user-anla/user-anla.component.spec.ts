import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAnlaComponent } from './user-anla.component';

describe('UserAnlaComponent', () => {
  let component: UserAnlaComponent;
  let fixture: ComponentFixture<UserAnlaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAnlaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAnlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
