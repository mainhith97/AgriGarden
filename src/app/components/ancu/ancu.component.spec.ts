import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AncuComponent } from './ancu.component';

describe('AncuComponent', () => {
  let component: AncuComponent;
  let fixture: ComponentFixture<AncuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AncuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AncuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
