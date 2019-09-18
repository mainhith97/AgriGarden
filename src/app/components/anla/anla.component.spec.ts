import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnlaComponent } from './anla.component';

describe('AnlaComponent', () => {
  let component: AnlaComponent;
  let fixture: ComponentFixture<AnlaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnlaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
