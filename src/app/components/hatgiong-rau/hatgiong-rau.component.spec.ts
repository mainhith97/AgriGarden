import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HatgiongRauComponent } from './hatgiong-rau.component';

describe('HatgiongRauComponent', () => {
  let component: HatgiongRauComponent;
  let fixture: ComponentFixture<HatgiongRauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HatgiongRauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HatgiongRauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
