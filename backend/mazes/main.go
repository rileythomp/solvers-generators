package main

import (
	"os"
	"fmt"
	_ "time"
	"strings"
	"database/sql"
	"net/http"
	_ "github.com/google/uuid"
	_ "github.com/lib/pq"
)

func insertTests(db *sql.DB, mazeTests string) error {
	insertStmt := "INSERT INTO maze_tests (id, solver, length, gentime, analysistime, longestpath, crossroadcells, junctioncells, decisioncells, straightcells, deadendcells, turncells) VALUES "
	insertStmt += mazeTests
	insertStmt = strings.TrimSuffix(insertStmt, ", ") + ";"
	_, err := db.Exec(insertStmt)
	if err != nil {
		return err
	}
	return nil
}

func main() {
	PORT := os.Getenv("PORT")
    if PORT == "" {
        PORT = "8000"
    }
	fmt.Printf("Starting maze server at port %s\n", PORT)

	http.HandleFunc("/maze", GetMaze)
	http.HandleFunc("/mazedata", GetMazeData)
	http.HandleFunc("/testmaze", TestMazes)

	http.ListenAndServe(":" + PORT, nil)

	fmt.Println("Maze server ending")

}

// func main() {
// 	fmt.Println("Testing mazes...")
// 	var lengths []int
// 	for i := 1; i < 11; i++ {
// 		lengths = append(lengths, 10*i)
// 	}
// 	DB_URL := os.Getenv("DB_URL")
// 	db, err := sql.Open("postgres", DB_URL)
// 	if err != nil {
// 		fmt.Printf("Error connecting to database: %s", err.Error())
// 		return
// 	}
// 	defer db.Close()
// 	tests := 0
// 	minutes := 1024 // about 12 hours
// 	mazeTests := ""
// 	totalStart := time.Now()
// 	for name, generator := range generators {
// 		for _, len := range lengths {
// 			for i := 0; i < minutes; i++ {
// 				genStart := time.Now()
// 				maze := generator(len, name)
// 				genTime := time.Since(genStart).Seconds()

// 				// maze analysis
// 				md := analyzeMaze(maze)

// 				mazeTests += fmt.Sprintf(
// 					"('%v', '%v', %v, %v, %v, %v, %v, %v, %v, %v, %v, %v), ",
// 					uuid.New(),
// 					name,
// 					len,
// 					genTime,
// 					md.analysisTime,
// 					md.longestPath,
// 					md.crossRoadCells,
// 					md.junctionCells,
// 					md.decisionCells,
// 					md.straightCells, 
// 					md.deadEndCells,
// 					md.turnCells,
// 				)

// 				tests++	

// 				if tests%10000 == 0 {
// 					if err = insertTests(db, mazeTests); err != nil {
// 						fmt.Println("Error adding tests to database: %s", err.Error())
// 						return
// 					}
// 					mazeTests = ""
// 				}
// 			}
// 		}
// 	}
// 	if err = insertTests(db, mazeTests); err != nil {
// 		fmt.Println("Error adding tests to database: %s", err.Error())
// 		return
// 	}
// 	fmt.Printf("TOOK: %v, TESTS: %d\n", time.Since(totalStart).Seconds(), tests)
// 	fmt.Println("Finished testing mazes")
// }
