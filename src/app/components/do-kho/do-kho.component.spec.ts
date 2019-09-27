import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoKhoComponent } from './do-kho.component';

describe('DoKhoComponent', () => {
  let component: DoKhoComponent;
  let fixture: ComponentFixture<DoKhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoKhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoKhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
