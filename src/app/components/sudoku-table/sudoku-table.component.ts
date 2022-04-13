import { Component, OnInit, Input } from '@angular/core';
import { SudokusolverService } from 'src/app/services/sudokusolver.service';

@Component({
	selector: 'app-sudoku-table',
	templateUrl: './sudoku-table.component.html',
	styleUrls: ['./sudoku-table.component.less']
})
export class SudokuTableComponent implements OnInit {
	@Input() boardTitle:string;

	constructor(private sudokuGoService: SudokusolverService) { }

	ngOnInit():void { }

	getBoard():string {
		let board:string = '';
		let table = document.getElementById('input-board').children[0];

		for (let i = 1; i < table.children.length; ++i) {
			for (let j = 0; j < table.children[i].children.length; ++j) {
				let val:string = (<HTMLInputElement>table.children[i].children[j].children[0]).value;
				board += (val === '' ? 0 : val);
			}
		}

		return board;
	}

	keyUp(ev):void {
		this.sudokuGoService.validateBoard(this.getBoard()).subscribe(res => {
			if (res && ev.key >= '1' && ev.key <= '9') {
				ev.target.value = ev.key;
			}
			else {
				ev.target.value = '';
			}
		});
	}

	highlightCells(ev) {
		let index = Number(ev.target.parentElement.id.replace('cell', ''));

		let r = Math.floor(index/9);
		let c = index%9;
		let q = Math.floor(r/3)*3 + Math.floor(c/3);

		let input = document.getElementById('input-board').children[0].children;

		for (let i = 0; i < 9; i++) {
			for (let j = 0; j < 9; j++) {
				let color = 'white';
				if (c == j || r == i || q == Math.floor(i/3)*3 + Math.floor(j/3)) {
					color = '#E6E6FA';
				}
				(<HTMLInputElement>input[i+1].children[j]).style.backgroundColor = color;
				(<HTMLInputElement>input[i+1].children[j].children[0]).style.backgroundColor = color;
			}
		}

		(<HTMLInputElement>input[r+1].children[c]).style.backgroundColor = '#9370DB';
		(<HTMLInputElement>input[r+1].children[c].children[0]).style.backgroundColor = '#9370DB';
	}
}
