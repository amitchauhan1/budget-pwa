import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgresspanelComponent } from './progresspanel.component';

describe('ProgresspanelComponent', () => {
  let component: ProgresspanelComponent;
  let fixture: ComponentFixture<ProgresspanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgresspanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgresspanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
