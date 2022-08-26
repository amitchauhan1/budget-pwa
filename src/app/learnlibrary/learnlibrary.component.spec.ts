import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnLibraryComponent } from './learnlibrary.component';

describe('LearnLibraryComponent', () => {
  let component: LearnLibraryComponent;
  let fixture: ComponentFixture<LearnLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
