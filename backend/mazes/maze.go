// Maze helper functions

package main

import (
	"fmt"
	"time"
	"strconv"
	"math/rand"
)

type Coord struct {
	r int
	c int
}

type Region struct {
	topLeft Coord
	bottomRight Coord
}

func (reg *Region) area() int {
	return (reg.bottomRight.r-reg.topLeft.r+1)*(reg.bottomRight.c-reg.topLeft.c+1)
}

func (reg *Region) width() int {
	return reg.bottomRight.c - reg.topLeft.c + 1
}

func (reg *Region) height() int {
	return reg.bottomRight.r - reg.topLeft.r + 1
}

func (reg *Region) isSquare() bool {
	return reg.bottomRight.r-reg.topLeft.r == reg.bottomRight.c-reg.topLeft.c
}

func (reg *Region) isWide() bool {
	return reg.bottomRight.r-reg.topLeft.r < reg.bottomRight.c-reg.topLeft.c
}

func (reg *Region) isTall() bool {
	return reg.bottomRight.r-reg.topLeft.r > reg.bottomRight.c-reg.topLeft.c	
}

type Edge struct {
	r int
	c int
	bottom bool
	right bool
}

type MazeCell struct {
	visited bool
	// 0 is top, 1 is right, 2 is left, 3 is bottom
	lastDir int
	borders [4]bool
	r int
	c int
	set int
}

// Initialize an empty maze
// setIncr is used to determine how much to increase the cell set value
// Usually either (all same set) or 1 (all different sets)
func InitMaze(length int, setIncr int, borders bool) [][]MazeCell {
	maze := make([][]MazeCell, 0)
	setVal := 0
	for i := 0; i < length; i++ {
		row := make([]MazeCell, 0)
		for j := 0; j < length; j++ {
			setVal += setIncr
			cell := MazeCell{
				visited: false,
				lastDir: -1,
				borders: [4]bool{borders, borders, borders, borders},
				r: i,
				c: j,
				set: setVal,
			}
			row = append(row, cell)
		}
		maze = append(maze, row)
	}
	return maze
}

func addEdgeBorders(m *[][]MazeCell, length int) {
	for i := 0; i < length; i++ {
		(*m)[0][i].borders[0] = true
		(*m)[length-1][i].borders[3] = true
		(*m)[i][0].borders[2] = true
		(*m)[i][length-1].borders[1] = true
	}
}

func cellInList(cells []MazeCell, r int, c int) bool {
	for _, cell := range cells {
		if cell.r == r && cell.c == c {
			return true
		}
	}
	return false
}

func pickNewFrontier(m [][]MazeCell, frontiers []MazeCell, length int) ([][]MazeCell, []MazeCell) {
	src := rand.NewSource(time.Now().UnixNano())
	pick := rand.New(src)
	index := pick.Intn(len(frontiers))
	var f MazeCell
	frontiers, f = removeFrontier(frontiers, index)
	for {
		dir := pick.Intn(4)
		if dir == 0 && f.r > 0 && m[f.r-1][f.c].set == 1 {
			m[f.r][f.c].borders[0], m[f.r-1][f.c].borders[3] = false, false
			break
		} else if dir == 1 && f.c < length-1 && m[f.r][f.c+1].set == 1 {
			m[f.r][f.c].borders[1], m[f.r][f.c+1].borders[2] = false, false
			break
		} else if dir == 2 && f.c > 0 && m[f.r][f.c-1].set == 1 {
			m[f.r][f.c].borders[2], m[f.r][f.c-1].borders[1] = false, false
			break
		} else if dir == 3 && f.r < length-1 && m[f.r+1][f.c].set == 1 {
			m[f.r][f.c].borders[3], m[f.r+1][f.c].borders[0] = false, false
			break
		}
	}
	m[f.r][f.c].set = 1
	frontiers = addFrontiers(frontiers, m, f.r, f.c, length)
	return m, frontiers
}

func addFrontiers(frontiers []MazeCell, m [][]MazeCell, r int, c int, length int) []MazeCell {
	// add top
	if r > 0 &&  !cellInList(frontiers, r-1, c) && m[r-1][c].set != 1 {
		frontiers = append(frontiers, m[r-1][c])
	}
	// add right
	if c < length-1 && !cellInList(frontiers, r, c+1) && m[r][c+1].set != 1 {
		frontiers = append(frontiers, m[r][c+1])
	}
	// add bottom
	if r < length-1 && !cellInList(frontiers, r+1, c) && m[r+1][c].set != 1 {
		frontiers = append(frontiers, m[r+1][c])
	}
	// add left
	if c > 0 && !cellInList(frontiers, r, c-1) && m[r][c-1].set != 1 {
		frontiers = append(frontiers, m[r][c-1])
	}
	return frontiers
}

// Removes the maze cell at index i
func removeFrontier(frontiers []MazeCell, i int) ([]MazeCell, MazeCell) {
	frontier := frontiers[i]
	frontiers[i] = frontiers[len(frontiers)-1]
	return frontiers[:len(frontiers)-1], frontier
}

func removeEdge(edges []Edge, i int) ([]Edge, Edge) {
	rmEdge := edges[i]
	edges[i] = edges[len(edges)-1]
	return edges[:len(edges)-1], rmEdge
}

func removeElem(s []int, i int) ([]int, int) {
	elem := s[i]
	s[i] = s[len(s)-1]
	return s[:len(s)-1], elem
}

func initEdgeList(length int) []Edge {
	edgeList := []Edge{}
	for r := 0; r < length; r++ {
		for c := 0; c < length; c++ {
			if r < length-1 {
				edgeList = append(edgeList, Edge{r, c, true, false})
			}
			if c < length-1 {
				edgeList = append(edgeList, Edge{r, c, false, true})
			}
		}
	}
	return edgeList
}

func hasDiffSets(m [][]MazeCell, length int) bool {
	for r := 0; r < length-1; r++ {
		for c := 0; c < length-1; c++ {
			if m[r][c].set != m[r][c+1].set || m[r][c].set != m[r+1][c].set {
				return true
			}
		}
	}
	return false
}

func mergeSets(m [][]MazeCell, src int, dst int, length int) [][]MazeCell {
	for r := 0; r < length; r++ {
		for c := 0; c < length; c++ {
			if m[r][c].set == src {
				m[r][c].set = dst
			}
		}
	}
	return m
}

func InitEllerRow(mr []MazeCell, r int, length int, lastRow bool, joinProb int) []MazeCell {
	setVal := r*length + 1
	for c := 0; c < length; c++ {
		if mr[c].set == 0 {
			mr[c].set = setVal
			setVal += 1
		}
	}
	// Randomly join adjacent disjoint cells
	src := rand.NewSource(time.Now().UnixNano())
	join := rand.New(src)
	for i := 0; i < len(mr)-1; i++ {	
		if mr[i].set != mr[i+1].set && (join.Intn(100) > joinProb || lastRow) {
			mr[i].borders[1], mr[i+1].borders[2] = false, false
			mr[i+1].set = mr[i].set
		} else if mr[i].set == mr[i+1].set {
			mr[i].borders[1], mr[i+1].borders[2] = true, true
		}
	}
	return mr
}

// Get a random direction
func RandDir() int {
    rand.Seed(time.Now().UnixNano())
    return rand.Intn(4)
}

// Choose a random direction to move in
func ChooseDirection(curRow int, curCol int, length int) (int, int, int) {
	// 0 is top, 1 is right, 2 is left, 3 is bottom
	dir := RandDir()
	newRow := curRow
	newCol := curCol

	if dir == 0 {
		newRow--
	} else if dir == 1 {
		newCol++
	} else if dir == 2 {
		newCol--
	} else if dir == 3 {
		newRow++
	}

	for newRow < 0 || newRow >= length || newCol < 0 || newCol >= length {
		dir, newRow, newCol = ChooseDirection(curRow, curCol, length)
	}

	return dir, newRow, newCol
}

// Finds first cell in maze that hasn't been visited yet
func FindFirstUnvisitedCell(maze [][]MazeCell, length int) (int, int) {
	for i := 0; i < length; i++ {
		for j := 0; j < length; j++ {
			if !maze[i][j].visited {
				return i, j
			}
		}
	}
	return -1, -1
}

// Picks a random adjacent visited cell
func PickAdjaventVisitedCell(maze [][]MazeCell, curRow int, curCol int, length int) (int, int, int) {
	dir, r, c := ChooseDirection(curRow, curCol, length)
	for !maze[r][c].visited {
		dir, r, c = ChooseDirection(curRow, curCol, length)
	}
	return dir, r, c
}

// Determines if a cell has a visited neighbour
func hasAdjacentVisited(m [][]MazeCell, r int, c int, length int) bool {
	return (r > 0 && m[r-1][c].visited) || (r < length-1 && m[r+1][c].visited) || (c > 0 && m[r][c-1].visited) || (c < length-1 && m[r][c+1].visited)
}

// Determines if cell is surrounded by visited cells
func allAdjacentVisited(m [][]MazeCell, r int, c int) bool {
	return (r <= 0 || m[r-1][c].visited) && (c <= 0 || m[r][c-1].visited) && (r >= len(m)-1 || m[r+1][c].visited) && (c >= len(m[0])-1 || m[r][c+1].visited)
}

type MazeTest struct {
	length, iterations int
}

// Tests a maze generator on boards of a given size
func MazeGenerationTest(
	mazeGenerator Generator,
	name string,
	numTests int,
	length int,
) {
	var maxTime time.Duration = 0
	var minTime time.Duration = 100000000000
	var totalTime time.Duration = 0

	// DB_URL := os.Getenv("DATABASE_URL")
	// db, err := sql.Open("postgres", DB_URL)
	// if err != nil {
	// 	fmt.Println(err)
	// }
	// defer db.Close()
	// insertTests := "INSERT INTO maze_tests (id, solver, length, time) VALUES "

	for i := 0; i < numTests; i++ {
		start  := time.Now()
		_ = mazeGenerator(length, name)
		genTime := time.Since(start)

		maxTime, minTime = MaxTime(maxTime, genTime), MinTime(minTime, genTime)

		totalTime += genTime

		// insertTests += fmt.Sprintf("('%v', '%v', %v, %v), ", uuid.New(), name, length, genTime.Seconds())
	}

	// insertTests = strings.TrimSuffix(insertTests, ", ") + ";"
	// _, err = db.Exec(insertTests)
	// if err != nil {
	// 	panic(err)
	// }

	PrintMazeTestTableRow(name, numTests, length, totalTime, maxTime, minTime)
}

// Prints a maze test row with info like
// the number of boards, time and difficulty
func PrintMazeTestTableRow(
	name string,
	numTests int,
	length int,
	totalTime time.Duration,
	maxTime time.Duration,
	minTime time.Duration,
) {
	l := strconv.Itoa(length)
	size := l + "x" + l
	secondFloat := float64(time.Second)
	totalSeconds := float64(totalTime)/secondFloat

	fmt.Printf("| %-20s | %7s | %8s | %11s | %10s | %10s | %10s |\n", " ", " ", " ", " ", " ", " ", " ")
	stats := fmt.Sprintf(
		"| %-20s | %7d | %8s | %10fs | %9fs | %9fs | %9fs |",
		name,
		numTests,
		size,
		totalSeconds,
		totalSeconds/float64(numTests),
		float64(maxTime)/secondFloat,
		float64(minTime)/secondFloat,
	)
	fmt.Println(stats)
	fmt.Println("|______________________|_________|__________|_____________|____________|____________|____________|")
}

// Prints the generated maze
func PrintMaze(maze [][]MazeCell) {
	for i := 0; i < len(maze[0]); i++ {
		fmt.Print(" _")
	}
	fmt.Println()
	for i := 0; i < len(maze); i++ {
		for j := 0; j < len(maze[i]); j++ {
			if maze[i][j].borders[2] {
				fmt.Print("|")
			} else {
				fmt.Print(" ")
			}

			if maze[i][j].borders[3] {
				if maze[i][j].set != 0 {
					fmt.Print(toUpperChar(maze[i][j].set))
				} else {
					fmt.Print("_")
				}
			} else {
				if maze[i][j].set != 0 {
					fmt.Print(toUpperChar(maze[i][j].set))
				} else {
					fmt.Print(" ")
				}
			}
		}
		fmt.Println("|")
	}
}

func PrintMazeVisited(maze [][]MazeCell) {
	for i := 0; i < len(maze); i++ {
		for j := 0; j < len(maze[i]); j++ {
			if maze[i][j].visited {
				fmt.Print("1")
			} else {
				fmt.Print(" ")
			} 
		}
		fmt.Println()
	}
}
