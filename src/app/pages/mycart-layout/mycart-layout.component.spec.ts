import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycartLayoutComponent } from './mycart-layout.component';

describe('MycartLayoutComponent', () => {
  let component: MycartLayoutComponent;
  let fixture: ComponentFixture<MycartLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycartLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycartLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
