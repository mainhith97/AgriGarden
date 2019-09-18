import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnquaComponent } from './anqua.component';

describe('AnquaComponent', () => {
  let component: AnquaComponent;
  let fixture: ComponentFixture<AnquaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnquaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnquaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
