import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MazesComponent } from './mazes.component';

describe('MazesComponent', () => {
  let component: MazesComponent;
  let fixture: ComponentFixture<MazesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MazesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MazesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
