import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProductpageComponent } from './user-productpage.component';

describe('UserProductpageComponent', () => {
  let component: UserProductpageComponent;
  let fixture: ComponentFixture<UserProductpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProductpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProductpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
