import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryPanel } from './memory-panel';

describe('MemoryPanel', () => {
  let component: MemoryPanel;
  let fixture: ComponentFixture<MemoryPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemoryPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(MemoryPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
