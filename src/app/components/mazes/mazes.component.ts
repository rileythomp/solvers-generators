import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { MazesService } from 'src/app/services/mazes.service';
import { TimeInterval, VirtualTimeScheduler } from 'rxjs';

@Component({
	selector: 'app-mazes',
	templateUrl: './mazes.component.html',
	styleUrls: ['./mazes.component.less']
})
export class MazesComponent implements OnInit {
	readonly directions:any[] = [
		{prime: 7, dr: 1, dc: 0}, // bottom
		{prime: 3, dr: 0, dc: 1}, // right
		{prime: 2, dr:-1, dc: 0}, // up
		{prime: 5, dr: 0, dc: -1} // left
	]

	boardLen:number = 15
	visits:number = 0
	maxVisits:number = 0
	startRow:number = 0
	startCol:number = 0
	maxRow:number = 0
	maxCol:number = 0
	row:number = 0
	col:number = 0

	mazeData:any
	solveMaze:any
	playMaze:any
	solveInterval:NodeJS.Timeout
	maze:HTMLElement;

	constructor(private mazesGoService: MazesService) { }

	ngOnInit(): void {
		this.generateMaze("rb", 12);
	}

	// Creates and displays a maze 
	displayMaze(res):void {
		this.maze = document.createElement('table');
		this.maze.style.margin = '0 auto';
		for (let i = 0; i < res.length; i++) {
			let r = Math.floor(i/this.boardLen);
			let c = i%this.boardLen;
			if (c == 0) {
				let row = document.createElement('tr');
				this.maze.appendChild(row);
			}
			let cell = document.createElement('td');
			cell.style.height = '2em';
			cell.style.width = '2em';
			cell.style.textAlign = 'center';
			cell.style.border = '1px dotted grey'
			if (res[i]%2 == 0) {
				cell.style.borderTop = '2px solid black'
			}
			if (res[i]%3 == 0) {
				cell.style.borderRight = '2px solid black'
			}
			if (res[i]%5 == 0) {
				cell.style.borderLeft = '2px solid black'
			}
			if (res[i]%7 == 0) {
				cell.style.borderBottom = '2px solid black'
			}
			this.maze.children[r].appendChild(cell);
		}
		this.maze.style.borderCollapse = 'collapse';
		document.getElementById('maze').innerHTML = '';
		document.getElementById('maze').appendChild(this.maze);
		(<HTMLElement>this.maze.children[this.row].children[this.col]).style.backgroundColor = 'lightgreen';
	}

	// Creates maze structure from raw maze data
	getMaze(res) {
		let mz = []
		for (let i = 0; i < this.boardLen; i++) {
			let row = [];
			for (let j = 0; j < this.boardLen; j++) {
				row.push({
					row: i,
					col: j,
					val: res[this.boardLen*i+j],
					visited: false
				});
			}
			mz.push(row);
		}
		return mz;
	}

	// Initializes maze structure for determining longest path and playing on
	initMazes(res):void {
		this.visits = 0
		this.maxVisits = 0
		this.startRow = 0
		this.startCol = 0
		this.maxRow = 0
		this.maxCol = 0
		this.row = 0
		this.col = 0
		this.solveMaze = this.getMaze(res);
		this.playMaze = JSON.parse(JSON.stringify(this.solveMaze));
	}

	// Displays and initializes a maze of a given type
	generateMaze(type:string, boardLen:number):void {
		this.boardLen = boardLen;
		this.mazesGoService.getMaze(this.boardLen, type).subscribe(
			res => {
				if (res.toString() == 'err') {
					alert('Failed to generate maze');
					return;
				}
				this.mazeData = res;
				this.initMazes(res);
				this.displayMaze(res);
				document.addEventListener('keydown', this.movePlayer)			
			},
			err => {
				alert('Maze could not be generated');
				console.log(err);
			}
		)
	}

	// Tests mazes API
	testMazes():void {
		this.mazesGoService.testMazes().subscribe(res => {
			console.log(res);
		})
	}

	// Stops solving the maze
	stopSolve():void {
		clearInterval(this.solveInterval);
	}

	// Updates the maze after moving
	updateMaze(dir, dv, r, c):boolean {
		this.solveMaze[this.row][this.col].visited = true;
		this.solveMaze[this.row][this.col].val *= dir.prime;
		this.row += dir.dr
		this.col += dir.dc
		this.visits += dv
		if (this.visits > this.maxVisits) {
			this.maxVisits = this.visits;
			this.maxRow = this.row;
			this.maxCol = this.col;
			this.startRow = r;
			this.startCol = c;
		}
		if (this.visits < 0) {
			console.log('Visits counter error: ', this.visits);
		}
		return true;
	}

	// Moves the player around the maze
	movePlayer = (ev) => {
		ev.preventDefault();
		(<HTMLElement>this.maze.children[this.row].children[this.col]).style.backgroundColor = '#E6E6FA'
		if (ev.key == 'ArrowDown' && this.row < this.playMaze.length-1 && this.playMaze[this.row][this.col].val%7 != 0) {
			this.row += 1;
		}
		else if (ev.key == 'ArrowUp' && this.row > 0 && this.playMaze[this.row][this.col].val%2 != 0) {
			this.row -= 1;
		}
		else if (ev.key == 'ArrowLeft' && this.col > 0 && this.playMaze[this.row][this.col].val%5 != 0) {
			this.col -= 1;
		}
		else if (ev.key == 'ArrowRight' && this.col < this.playMaze[0].length-1  && this.playMaze[this.row][this.col].val%3 != 0) {
			this.col += 1;
		}
		(<HTMLElement>this.maze.children[this.row].children[this.col]).style.backgroundColor = 'lightgreen'
		if (this.row == this.maxRow && this.col == this.maxCol && this.row+this.col > 0) {
			alert('You Won');
			document.removeEventListener('keydown', this.movePlayer);
			return;
		}
	};

	// Makes the maze playable
	makeMazePlayable(color):void {
		this.row = this.startRow;
		this.col = this.startCol;
		(<HTMLElement>this.maze.children[this.row].children[this.col]).style.backgroundColor = 'lightgreen';
		(<HTMLElement>this.maze.children[this.maxRow].children[this.maxCol]).style.backgroundColor = color;
		document.addEventListener('keydown', this.movePlayer)
	}

	// Determines the longest path in the maze
	getLongestPath(interval:number):void {
		(<HTMLElement>this.maze.children[this.row].children[this.col]).style.backgroundColor = '#E6E6FA';
		this.maxVisits = 0
		this.maxRow = 0
		this.maxCol = 0

		// find longest path in maze
		for (let r = 0; r < this.boardLen; r++) {
			for (let c = 0; c < this.boardLen; c++) {
				let moved = true;
				this.visits = 0
				this.row = r
				this.col = c
				while (moved) {
					moved = false;
					for (let dir of this.directions) {
						// if you can move to a cell
						if (this.solveMaze[this.row][this.col].val%dir.prime != 0
							&& !this.solveMaze[this.row+dir.dr][this.col+dir.dc].visited) {
							moved = this.updateMaze(dir, 1, r, c)
							break;
						}
					}
					if (!moved) {
						for (let dir of this.directions) {
							if (this.solveMaze[this.row][this.col].val%dir.prime != 0) {
								moved = this.updateMaze(dir, -1, r, c)
								break;
							}
						}
					}
				}
				this.solveMaze = this.getMaze(this.mazeData);
			}
		}

		this.visits = 0
		this.row = this.startRow
		this.col = this.startCol
		// do the animation between the two points
		this.solveInterval = setInterval(() => {
			let moved = false
			for (let dir of this.directions) {
				if (this.solveMaze[this.row][this.col].val%dir.prime != 0 && !this.solveMaze[this.row+dir.dr][this.col+dir.dc].visited) {
					(<HTMLElement>this.maze.children[this.row].children[this.col]).style.backgroundColor = 'lightgreen';
					moved = this.updateMaze(dir, 1, this.startRow, this.startCol);
					break;
				}
			}
			if (!moved) {
				for (let dir of this.directions) {
					if (this.solveMaze[this.row][this.col].val%dir.prime != 0) {
						(<HTMLElement>this.maze.children[this.row].children[this.col]).style.backgroundColor = '#E6E6FA';
						moved = this.updateMaze(dir, -1, this.startRow, this.startCol);
						break;
					}
				}
			}
			if (!moved) {
				clearInterval(this.solveInterval)
				this.makeMazePlayable('lightpink');
				return
			}	
			(<HTMLElement>this.maze.children[this.row].children[this.col]).style.backgroundColor = 'lightgreen';
		}, interval);
	}
}
