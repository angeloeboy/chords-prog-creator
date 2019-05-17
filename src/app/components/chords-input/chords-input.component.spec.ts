import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChordsInputComponent } from './chords-input.component';

describe('ChordsInputComponent', () => {
  let component: ChordsInputComponent;
  let fixture: ComponentFixture<ChordsInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChordsInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChordsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
