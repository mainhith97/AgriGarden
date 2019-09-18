import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnthanComponent } from './anthan.component';

describe('AnthanComponent', () => {
  let component: AnthanComponent;
  let fixture: ComponentFixture<AnthanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnthanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnthanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
