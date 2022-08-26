import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransacationlistComponent } from './transacationlist.component';

describe('TransacationlistComponent', () => {
  let component: TransacationlistComponent;
  let fixture: ComponentFixture<TransacationlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransacationlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransacationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
