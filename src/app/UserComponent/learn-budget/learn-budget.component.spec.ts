import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnBudgetComponent } from './learn-budget.component';

describe('LearnBudgetComponent', () => {
  let component: LearnBudgetComponent;
  let fixture: ComponentFixture<LearnBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
