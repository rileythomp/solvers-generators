import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SudokuTableComponent } from './components/sudoku-table/sudoku-table.component';
import { SudokuComponent } from './components/sudoku/sudoku.component';
import { AboutComponent } from './components/about/about.component';
import { MazesComponent } from './components/mazes/mazes.component';
import { SudokuStatsComponent } from './components/sudoku-stats/sudoku-stats.component';
import { FooterComponent } from './components/footer/footer.component';
import { TruchetComponent } from './components/truchet/truchet.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SudokuTableComponent,
    SudokuComponent,
    AboutComponent,
    MazesComponent,
    SudokuStatsComponent,
    FooterComponent,
    TruchetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
