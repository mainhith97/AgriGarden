import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDokhoComponent } from './user-dokho.component';

describe('UserDokhoComponent', () => {
  let component: UserDokhoComponent;
  let fixture: ComponentFixture<UserDokhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDokhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDokhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
