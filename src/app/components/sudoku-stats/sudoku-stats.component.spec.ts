import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuStatsComponent } from './sudoku-stats.component';

describe('SudokuStatsComponent', () => {
  let component: SudokuStatsComponent;
  let fixture: ComponentFixture<SudokuStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SudokuStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SudokuStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
