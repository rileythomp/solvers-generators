import { Component, OnInit } from '@angular/core';
import { SudokusolverService } from 'src/app/services/sudokusolver.service';

@Component({
	selector: 'app-sudoku',
	templateUrl: './sudoku.component.html',
	styleUrls: ['./sudoku.component.less']
})
export class SudokuComponent implements OnInit {

	constructor(private sudokuGoService: SudokusolverService) { }

	ngOnInit():void {
		let input = document.getElementById('input-board').children[0].children;	
		for (let i = 1; i < input.length; ++i) {
			for (let j = 0; j < input[i].children.length; ++j) {
				(<HTMLInputElement>input[i].children[j]).id = 'cell'+(9*(i-1)+j);
			}
		}
		this.randomBoard('random');
	}

	getBoard(): string {
		let board: string = '';
		let table = document.getElementById('input-board').children[0];

		for (let i = 1; i < table.children.length; ++i) {
			for (let j = 0; j < table.children[i].children.length; ++j) {
				let val:string = (<HTMLInputElement>table.children[i].children[j].children[0]).value;
				board += (val === '' ? 0 : val);
			}
		}

		return board;
	}

	setBoardBackground(bgColor:string) {
		let inputBoard = document.getElementById('input-board').children[0].children;
		for (let i = 1; i < inputBoard.length; i++) {
			let row = inputBoard[i].children;
			for (let j = 0; j < row.length; j++) {
				let cell = (<HTMLElement>row[j]);
				cell.style.backgroundColor = bgColor;
				(<HTMLElement>cell.children[0]).style.backgroundColor = bgColor;
			}
		}
	}

	validateBoard():void {
		let board:string = this.getBoard();

		this.sudokuGoService.validateBoard(board).subscribe(res => {
			let bgColor = (res ? '#90ee90' : '#ffcccb');
			this.setBoardBackground(bgColor);

			setTimeout(() => {
				this.setBoardBackground('white');
				this.highlightRandom(board);
			}, 1000);

		});
	}

	solveBoard(): void {
		let table = document.getElementById('input-board').children[0];
		document.getElementById('loader').style.visibility = 'visible';

		let board: string = this.getBoard();
		this.sudokuGoService.solveBoard(board).subscribe(res => {
			for (let i = 1; i < table.children.length; ++i) {
				for (let j = 0; j < table.children[i].children.length; ++j) {
					let index:number = 9 * (i-1) + j;
					if (board[index] != '0') {
						(<HTMLInputElement>table.children[i].children[j].children[0]).value = res[index];
					}
				}
			}

			let row:number = 0;
			let col:number = 0;
			let interval = setInterval(() => {
				let index:number = 9*Math.floor(row/9) + (col%9);
				if (index > 80) {
					clearInterval(interval);
				}
				if (board[index] == '0') {
					(<HTMLInputElement>table.children[Math.floor(row/9)+1].children[col%9].children[0]).value = res[index];
				}
				col++;
				row++;
			}, 25)

			document.getElementById('loader').style.visibility = 'hidden';
		})
	}

	clearBoard():void {
		let input = document.getElementById('input-board').children[0];
		for (let i = 1; i < input.children.length; ++i) {
			for (let j = 0; j < input.children[i].children.length; ++j) {
				// (<HTMLInputElement>solved.children[i].children[j].children[0]).value = '';
				(<HTMLInputElement>input.children[i].children[j].children[0]).value = '';
			}
		}

		this.setBoardBackground('white');
	}

	highlightRandom(board):void {
		let table = document.getElementById('input-board').children[0];
		let randx = Math.floor(Math.random()*9);
		let randy = Math.floor(Math.random()*9);
		let tries = 0;
		while (board[randy*9 + randx] != '0' && tries < 100) {
			randx = Math.floor(Math.random()*9);
			randy = Math.floor(Math.random()*9);
			tries++;
		}

		if (tries < 100) {
			(<HTMLInputElement>table.children[randy+1].children[randx].children[0]).focus();
		}
	}

	randomBoard(diff:string):void {
		this.clearBoard();
		let table = document.getElementById('input-board').children[0];
		this.sudokuGoService.getRandomBoard(diff).subscribe(res => {
			let board = res.board;
			for (let i = 0; i < board.length; ++i) {
				for (let j = 0; j < board[i].length; ++j) {
					if (board[i][j] != '0') {
						(<HTMLInputElement>table.children[i+1].children[j].children[0]).value = board[i][j];
						(<HTMLInputElement>table.children[i+1].children[j].children[0]).disabled = true;
					}
					else {
						(<HTMLInputElement>table.children[i+1].children[j].children[0]).disabled = false;
					}
				}
			}

			this.highlightRandom(board.flat().join(''));
		})
	}

	testSolvers():void {
		this.sudokuGoService.testSolvers().subscribe(res => {
			console.log(res);
		});
	}

	partialSolve():void {
		let table = document.getElementById('input-board').children[0];
		document.getElementById('loader').style.visibility = 'visible';

		let board: string = this.getBoard();
		this.sudokuGoService.partialSolve(board).subscribe(res => {

			if (board == res) {
				document.getElementById('loader').style.visibility = 'hidden';
				alert('The solver could not make any logical deductions for this board');
				return;
			}

			for (let i = 1; i < table.children.length; ++i) {
				for (let j = 0; j < table.children[i].children.length; ++j) {
					let index:number = 9 * (i-1) + j;
					if (board[index] != '0') {
						(<HTMLInputElement>table.children[i].children[j].children[0]).value = res[index];
					}
				}
			}

			let row:number = 0;
			let col:number = 0;
			let interval = setInterval(() => {
				let index:number = 9*Math.floor(row/9) + (col%9);
				if (index > 80) {
					clearInterval(interval);
				}
				if (board[index] == '0' && res[index] != '0') {
					(<HTMLInputElement>table.children[Math.floor(row/9)+1].children[col%9].children[0]).value = res[index];
				}
				col++;
				row++;
			}, 25)

			document.getElementById('loader').style.visibility = 'hidden';
		})
	}
}
