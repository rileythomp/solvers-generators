import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SudokuComponent } from './components/sudoku/sudoku.component';
import { AboutComponent } from './components/about/about.component'
import { MazesComponent } from './components/mazes/mazes.component'
import { TruchetComponent } from './components/truchet/truchet.component'
import { SudokuStatsComponent } from './components/sudoku-stats/sudoku-stats.component'


const routes: Routes = [
  {
    path: '',
    component: MazesComponent
  },
  {
    path: 'sudoku',
    component: SudokuComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'mazes',
    component: MazesComponent
  },
  {
    path: 'truchet',
    component: TruchetComponent
  },
  {
    path: 'sudoku/stats',
    component: SudokuStatsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
