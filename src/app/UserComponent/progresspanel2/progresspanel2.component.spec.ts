import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Progresspanel2Component } from './progresspanel2.component';

describe('Progresspanel2Component', () => {
  let component: Progresspanel2Component;
  let fixture: ComponentFixture<Progresspanel2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Progresspanel2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Progresspanel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
