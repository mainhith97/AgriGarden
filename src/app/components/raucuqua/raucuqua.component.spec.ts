import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaucuquaComponent } from './raucuqua.component';

describe('RaucuquaComponent', () => {
  let component: RaucuquaComponent;
  let fixture: ComponentFixture<RaucuquaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaucuquaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaucuquaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
