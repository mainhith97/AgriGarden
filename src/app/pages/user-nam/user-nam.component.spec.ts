import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNamComponent } from './user-nam.component';

describe('UserNamComponent', () => {
  let component: UserNamComponent;
  let fixture: ComponentFixture<UserNamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
