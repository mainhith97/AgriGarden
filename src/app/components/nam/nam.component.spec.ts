import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamComponent } from './nam.component';

describe('NamComponent', () => {
  let component: NamComponent;
  let fixture: ComponentFixture<NamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
