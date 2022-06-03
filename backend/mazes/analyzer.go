package main

import (
	"time"
)

type MazeData struct {
	solver         string 	`json:"solver"`
	length         int		`json:"length"`
	genTime        float64	`json:"genTime"`
	analysisTime   float64	`json:"analysisTime"`
	longestPath    int		`json:"longestPath"`
	crossRoadCells int		`json:"crossRoadCells"`
	junctionCells  int		`json:"junctionCells"`
	decisionCells  int		`json:"decisionCells"`
	straightCells  int		`json:"straightCells"`
	deadEndCells   int		`json:"deadEndCells"`
	turnCells      int		`json:"turnCells"`
}

func analyzeCellTypes(md *MazeData, cell MazeCell) {
	walls := 0
	for _, b := range cell.borders {
		if b {
			walls++
		}
	}
	if walls == 0 {
		md.crossRoadCells++
	} else if walls == 1 {
		md.junctionCells++
	} else if walls == 2{
		if cell.borders[0] == cell.borders[3] || cell.borders[1] == cell.borders[2] {
			md.straightCells++
		} else {
			md.turnCells++
		}
	} else if walls == 3 {
		md.deadEndCells++
	}
}

func getLongestPath(m [][]MazeCell, cell MazeCell) int {
	longestPath := 1
	curPathLength := 0
	stack := Stack{cell}
	for !stack.IsEmpty() {
		elem, _ := stack.Peek()
		curCell := elem.(MazeCell)
		m[curCell.r][curCell.c].visited = true
		if !curCell.borders[0] && !m[curCell.r-1][curCell.c].visited {
			stack.Push(m[curCell.r-1][curCell.c])
		} else if !curCell.borders[1] && !m[curCell.r][curCell.c+1].visited {
			stack.Push(m[curCell.r][curCell.c+1])
		} else if !curCell.borders[2] && !m[curCell.r][curCell.c-1].visited {
			stack.Push(m[curCell.r][curCell.c-1])
		} else if !curCell.borders[3] && !m[curCell.r+1][curCell.c].visited {
			stack.Push(m[curCell.r+1][curCell.c])
		} else {
			if curPathLength > longestPath {
				longestPath = curPathLength
			}
			_, _ = stack.Pop()
			curPathLength--
			continue
		}
		curPathLength++
	}
	return longestPath
}


func analyzeMaze(m [][]MazeCell) MazeData {
	md := MazeData{}
	// clear the maze
	for r := 0; r < len(m); r++ {
		for c := 0; c < len(m[r]); c++ {
			m[r][c].visited = false
		} 
	}
	start := time.Now()
	for r := 0; r < len(m); r++ {
		for c := 0; c < len(m[r]); c++ {
			cell := m[r][c]
			analyzeCellTypes(&md, cell)
			maxPathFromCell := getLongestPath(m,cell)
			if maxPathFromCell > md.longestPath {
				md.longestPath = maxPathFromCell
			}
		} 
	}
	md.decisionCells = md.crossRoadCells + md.junctionCells
	md.analysisTime = time.Since(start).Seconds()
	return md
}