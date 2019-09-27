import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HatgiongHoaComponent } from './hatgiong-hoa.component';

describe('HatgiongHoaComponent', () => {
  let component: HatgiongHoaComponent;
  let fixture: ComponentFixture<HatgiongHoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HatgiongHoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HatgiongHoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
