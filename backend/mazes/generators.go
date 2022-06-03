// Maze generation algorithms

package main

import (
	"math/rand"
	"time"
)

type Generator (func(int, string) ([][]MazeCell))

var generators = map[string]Generator{
	"abv0": AldousBroderMazev0,
    "abv1": AldousBroderMazev1,
    "rb": RecursiveBacktrackMaze,
    "ea": EllersAlgorithmMaze,
    "eah": EllersAlgorithmMaze,
    "eav": EllersAlgorithmMaze,
    "ka": KruskalsAlgorithmMaze,
    "pa": PrimsAlgorithmMaze,
    "rds": RecursiveDivisionMaze,
    "rdc": RecursiveDivisionMaze,
    "wa": WilsonsAlgorithmMaze,
    "hak": HuntAndKillMaze,
    "gt": GrowingTreeMaze,
    "bt": BinaryTreeMaze,
    "sw": SidewinderMaze,	
}

func RecursiveDivisionMaze(length int, name string) [][]MazeCell {
	src := rand.NewSource(time.Now().UnixNano())
	pick := rand.New(src)
	maze := InitMaze(length, 0, false)
	addEdgeBorders(&maze, length)
	stack := Stack{Region{Coord{0, 0}, Coord{length-1, length-1}}}
	for !stack.IsEmpty() {
		elem, _ := stack.Pop()
		reg := elem.(Region)
		if reg.width() > 1 || reg.height() > 1 {
			var c1, c2, c3, c4 Coord
			var vertCut bool
			vertCut = pick.Intn(2) == 0
			if (name == "rdc" && vertCut && reg.width() > 1) || (name == "rds" && (reg.isWide() || (reg.isSquare() && vertCut))) {
				cutIndex := reg.topLeft.c + pick.Intn(reg.width()-1)
				skipIndex := reg.topLeft.r + pick.Intn(reg.height())
				for r := reg.topLeft.r; r <= reg.bottomRight.r ; r++ {
					if r != skipIndex {
						maze[r][cutIndex].borders[1] = true
						maze[r][cutIndex+1].borders[2] = true
					}
				}
				c1 = Coord{reg.topLeft.r, reg.topLeft.c}
				c2 = Coord{reg.bottomRight.r, cutIndex}
				c3 = Coord{reg.topLeft.r, cutIndex+1}
				c4 = Coord{reg.bottomRight.r, reg.bottomRight.c,}
			} else if (name == "rdc" && !vertCut && reg.height() > 1) || (name == "rds" && (reg.isTall() || (reg.isSquare() && !vertCut))) {
				cutIndex := reg.topLeft.r + pick.Intn(reg.height()-1)
				skipIndex := reg.topLeft.c + pick.Intn(reg.width())
				for c := reg.topLeft.c; c <= reg.bottomRight.c; c++ {
					if c != skipIndex {
						maze[cutIndex][c].borders[3] = true
						maze[cutIndex+1][c].borders[0] = true
					}
				}
				c1 = Coord{reg.topLeft.r, reg.topLeft.c}
				c2 = Coord{cutIndex, reg.bottomRight.c}
				c3 = Coord{cutIndex+1, reg.topLeft.c}
				c4 = Coord{reg.bottomRight.r, reg.bottomRight.c}
			}
			stack.Push(Region{c1, c2})
			stack.Push(Region{c3, c4})
		}
	}
	return maze
}

func SidewinderMaze(length int, name string) [][]MazeCell {
	maze := InitMaze(length, 0, true)

	// Go right across the top row
	for i := 0; i < length-1; i++ {
		maze[0][i].borders[1], maze[0][i+1].borders[2] = false, false
	}

	for i := 1; i < length; i++ {
		runStart := 0
		runEnd := 0
		for j := 0; j < length; j++ {
			right := rand.Intn(2)
			if right == 1 && j < length-1{
				maze[i][j].borders[1], maze[i][j+1].borders[2] = false, false
				runEnd++
			} else {
				// Pick a random cell from the run set and go up
				randCol := runStart + rand.Intn(runEnd-runStart+1)
				maze[i][randCol].borders[0], maze[i-1][randCol].borders[3] = false, false				
				// Update run set
				runStart = runEnd+1
				runEnd = runStart
			}
		}
	}

	return maze
}

func BinaryTreeMaze(length int, name string) [][]MazeCell {
	maze := InitMaze(length, 0, true)

	for i := 0; i < length; i++ {
		for j := 0; j < length; j++ {
			// pick up or left
			up := rand.Intn(2)
			if i == 0 {
				up = 0
			}
			if j == 0 {
				up = 1
			}
			if i+j == 0 {
				up = -1
			}
			if up == 1 {
				// carve passage up
				maze[i][j].borders[0], maze[i-1][j].borders[3] = false, false
			} else if up == 0 {
				// carve passage left
				maze[i][j].borders[2], maze[i][j-1].borders[1] = false, false
			}
		}
	}

	return maze
}

func GrowingTreeMaze(length int, name string) [][]MazeCell {
	maze := InitMaze(length, 0, true)

	curRow, curCol := rand.Intn(length), rand.Intn(length)
	maze[curRow][curCol].visited = true
	frontiers := []MazeCell{maze[curRow][curCol]}

	for len(frontiers) > 0 {
		// Pick a random cell from frontier
		index := rand.Intn(len(frontiers))
		curCell := frontiers[index]

		// Remove it from frontier if all neighbours visisted
		if allAdjacentVisited(maze, curCell.r, curCell.c) {
			frontiers, _ = removeFrontier(frontiers, index)
			continue
		}

		// Otherwise, add an unvisited neighbour to frontier
		for {
			dir, newRow, newCol := ChooseDirection(curCell.r, curCell.c, length)
			if !maze[newRow][newCol].visited {
				maze[curCell.r][curCell.c].borders[dir], maze[newRow][newCol].borders[3-dir] = false, false
				maze[newRow][newCol].visited = true
				frontiers = append(frontiers, maze[newRow][newCol])
				break
			}
		}
	}

	return maze
}

func PrimsAlgorithmMaze(length int, name string) [][]MazeCell {
	src := rand.NewSource(time.Now().UnixNano())
	pick := rand.New(src)
	maze := InitMaze(length, 0, true)
	frontiers := []MazeCell{}
	r, c := pick.Intn(length), pick.Intn(length)
	maze[r][c].set = 1
	frontiers = addFrontiers(frontiers, maze, r, c, length)
	for len(frontiers) > 0 {
		maze, frontiers = pickNewFrontier(maze, frontiers, length)
	}
	return maze
}

func KruskalsAlgorithmMaze(length int, name string) [][]MazeCell {
	src := rand.NewSource(time.Now().UnixNano())
	pick := rand.New(src)
	maze := InitMaze(length,  1, true)
	edgeList := initEdgeList(length)
	var edge Edge
	for len(edgeList) > 0 {
		index := pick.Intn(len(edgeList))
		edgeList, edge = removeEdge(edgeList, index)
		r, c := edge.r, edge.c
		if edge.bottom && maze[r][c].set != maze[r+1][c].set {
			maze[r][c].borders[3], maze[r+1][c].borders[0] = false, false
			maze = mergeSets(maze, maze[r+1][c].set, maze[r][c].set, length)
		} else if edge.right && maze[r][c].set != maze[r][c+1].set {
			maze[r][c].borders[1], maze[r][c+1].borders[2] = false, false
			maze = mergeSets(maze, maze[r][c+1].set, maze[r][c].set, length)
		}
	}
	return maze
}

func EllersAlgorithmMaze(length int, name string) [][]MazeCell {
	joinProb := 50
	if name == "eah" {
		joinProb = 25
	} else if name == "eav" {
		joinProb = 75
	}
	src := rand.NewSource(time.Now().UnixNano())
	down := rand.New(src)
	maze := InitMaze(length, 0, true)
	for r := 0; r < length-1; r++ {
		// initialize new row
		maze[r] = InitEllerRow(maze[r], r, length, false, joinProb)

		// add down passages
		setsSeen := make(map[int][]int)
		for c := 0; c < length; c++ {
			setsSeen[maze[r][c].set] = append(setsSeen[maze[r][c].set], c)
		}
		for _, indices := range setsSeen {
			index := indices[down.Intn(len(indices))]
			// create the down passage
			maze[r][index].borders[3], maze[r+1][index].borders[0] = false, false
			maze[r+1][index].set = maze[r][index].set
		}
	}
	r := length-1
	maze[r] = InitEllerRow(maze[r], r, length, true, joinProb)
	return maze
}

func RecursiveBacktrackMaze(length int, name string) [][]MazeCell {
	maze, size := InitMaze(length, 0, true), length*length
	var stack Stack
	curRow, curCol := rand.Intn(length), rand.Intn(length)
	visitedCells := 0
	for size > visitedCells {
		if !maze[curRow][curCol].visited {
			maze[curRow][curCol].visited = true
			visitedCells += 1
		}
		if allAdjacentVisited(maze, curRow, curCol) {
			// back up to the last cell that has uncarved walls and repeat
			elem, ok := stack.Pop()
			coord := elem.(Coord)
			if !ok {
				return maze
			}
			curRow, curCol = coord.r, coord.c
		}
		dir, newRow, newCol := ChooseDirection(curRow, curCol, length)
		if !maze[newRow][newCol].visited {
			maze[curRow][curCol].borders[dir], maze[newRow][newCol].borders[3-dir] = false, false
			stack.Push(Coord{curRow, curCol})
			curRow, curCol = newRow, newCol
		}
	}
	return maze
}

func HuntAndKillMaze(length int, name string) [][]MazeCell {
	maze, size := InitMaze(length, 0, true), length*length

	curRow, curCol := rand.Intn(length), rand.Intn(length)
	maze[curRow][curCol].visited = true
	visitedCells := 1

	for visitedCells < size {
		dir, newRow, newCol := ChooseDirection(curRow, curCol, length)
		if !maze[newRow][newCol].visited {
			// Move to the new cell
			maze[curRow][curCol].borders[dir], maze[newRow][newCol].borders[3-dir] = false, false
			curRow, curCol = newRow, newCol
			maze[curRow][curCol].visited = true
			visitedCells++
			// Check if theres no moves left
			if allAdjacentVisited(maze, curRow, curCol) {
				// Scan board for an unvisited cell with a visited neighbour
				for i := 0; i < length; i++ {
					for j := 0; j < length; j++ {
						if !maze[i][j].visited && hasAdjacentVisited(maze, i, j, length) {
							// Connect this unvisited cells to one of its neighbours
							dir, r, c := PickAdjaventVisitedCell(maze, i, j, length)
							maze[i][j].borders[dir], maze[r][c].borders[3-dir] = false, false
							curRow, curCol = i, j
							maze[curRow][curCol].visited = true
							visitedCells++
							// Break out of the loop if it has an unvisited
							// neighbour to walk to, otherwise scan again
							if !allAdjacentVisited(maze, curRow, curCol) {
								i = length
								j = length
							}
						}
					}
				}
			}
		}
	}

	return maze
}

func WilsonsAlgorithmMaze(length int, name string) [][]MazeCell {
	maze, size := InitMaze(length, 0, true), length*length
	visitedCells := 0

	// Initialize list to keep track of unvisited cells
	unvisited := []int{}
	for i := 0; i < size; i++ {
		unvisited = append(unvisited, i)
	}

	// Mark an initial cell as visited
	index := rand.Intn(len(unvisited))
	unvisited, val := removeElem(unvisited, index)
	curRow, curCol := val/length, val%length
	maze[curRow][curCol].visited = true
	visitedCells++

	for visitedCells < size {
		// Pick a cell to start moving from
		index := rand.Intn(len(unvisited))
		unvisited, val = removeElem(unvisited, index)
		curRow, curCol = val/length, val%length
		startRow := curRow
		startCol := curCol
		
		// Pick a direction that isn't where you came from
		dir, newRow, newCol := ChooseDirection(curRow, curCol, length)
		dir++
		for !maze[newRow][newCol].visited {
			// Move to the new cell and update the path
			maze[curRow][curCol].lastDir = dir
			curRow, curCol = newRow, newCol
			dir, newRow, newCol = ChooseDirection(curRow, curCol, length)
			dir++
		}

		// Set the start and end cells
		maze[curRow][curCol].lastDir = dir
		curRow, curCol = newRow, newCol
		endRow := curRow
		endCol := curCol
		curRow, curCol = startRow, startCol

		// Trace the path
		for visitedCells < size && (curRow != endRow || curCol != endCol)  {
			maze[curRow][curCol].visited = true
			visitedCells++
			rmVal := length*curRow + curCol
			for i, v := range unvisited {
				if rmVal == v {
					unvisited, _ = removeElem(unvisited, i)
				}
			}
			if maze[curRow][curCol].lastDir == 1 {
				maze[curRow][curCol].borders[0] = false
				maze[curRow-1][curCol].borders[3] = false
				curRow -= 1
			} else if maze[curRow][curCol].lastDir == 2 {
				maze[curRow][curCol].borders[1] = false
				maze[curRow][curCol+1].borders[2] = false
				curCol += 1
			} else if maze[curRow][curCol].lastDir == 3 {
				maze[curRow][curCol].borders[2] = false
				maze[curRow][curCol-1].borders[1] = false
				curCol -= 1
			} else if maze[curRow][curCol].lastDir == 4 {
				maze[curRow][curCol].borders[3] = false
				maze[curRow+1][curCol].borders[0] = false
				curRow += 1
			}
		}

		// Set all the cell direction values to null
		for i := 0; i < length; i++ {
			for j := 0; j < length; j++ {
				maze[i][j].lastDir = -1
			}
		}
	}

	return maze
}

func AldousBroderMazev0(length int, name string) [][]MazeCell {
	maze, size := InitMaze(length, 0, true), length*length
	curRow, curCol := rand.Intn(length), rand.Intn(length)
	visitedCells := 0

	for size > visitedCells {
		if !maze[curRow][curCol].visited {
			maze[curRow][curCol].visited = true
			visitedCells++
		}

		dir, newRow, newCol := ChooseDirection(curRow, curCol, length)
		
		if !maze[newRow][newCol].visited {
			// 0 is top, 1 is right, 2 is left, 3 is bottom
			maze[curRow][curCol].borders[dir], maze[newRow][newCol].borders[3-dir] = false, false
		}

		curRow, curCol = newRow, newCol
	}

	return maze
}

func AldousBroderMazev1(length int, name string) [][]MazeCell {
	maze, size := InitMaze(length, 0, true), length*length
	curRow, curCol := rand.Intn(length), rand.Intn(length)
	visitedCells, stepsSinceNewCell, maxSteps := 0, 0, 0

	for size > visitedCells {
		if !maze[curRow][curCol].visited {
			maze[curRow][curCol].visited = true
			visitedCells++
		}

		dir, newRow, newCol := ChooseDirection(curRow, curCol, length)
		
		if !maze[newRow][newCol].visited {
			// 0 is top, 1 is right, 2 is left, 3 is bottom
			maze[curRow][curCol].borders[dir], maze[newRow][newCol].borders[3-dir] = false, false
		} else if (visitedCells > 9*size/10 && stepsSinceNewCell > maxSteps && size > visitedCells) {
			// If the board is almost full and you've only been running into visited cells, jump to an unvisited cell
			curRow, curCol = FindFirstUnvisitedCell(maze, length)
			maze[curRow][curCol].visited = true
			visitedCells++
			dir, newRow, newCol := ChooseDirection(curRow, curCol, length)
			maze[curRow][curCol].borders[dir], maze[newRow][newCol].borders[3-dir] = false, false
			maxSteps = stepsSinceNewCell
			stepsSinceNewCell = 0
		}

		curRow, curCol = newRow, newCol
		stepsSinceNewCell++
	}
	
	return maze
}
