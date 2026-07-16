import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorKeyboard } from './calculator-keyboard';

describe('CalculatorKeyboard', () => {
  let component: CalculatorKeyboard;
  let fixture: ComponentFixture<CalculatorKeyboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorKeyboard],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorKeyboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
