// HTTP maze server
// /maze?size= - Generates a maze with a length of size
// /maze?size= - Generates a maze with a length of size
// /test - Tests how long it takes to generate many mazes

package main

import (
	"fmt"
	"net/http"
	"encoding/json"
	"strconv"
)

// /maze - Generates a maze of certain size with a given algorithm
// Query Parameters
// size: sidelength of the maze
// type: maze generation algorithm
func GetMaze(w http.ResponseWriter, r *http.Request) {
	fmt.Println("GetMaze")

	var generator Generator
	
	length := 10
	size, ok := r.URL.Query()["size"]
	if ok {
		length, _ = strconv.Atoi(size[0])
	}

	gen, ok := r.URL.Query()["type"]
	if ok {
		generator, ok = generators[gen[0]]
		if !ok {
			w.Header().Set("Content-Type", "application/json")
			w.Header().Set("Access-Control-Allow-Origin", "*")
			w.WriteHeader(http.StatusBadRequest)
			json.NewEncoder(w).Encode( "No generator of type " + gen[0] + " exists")
		
			fmt.Println("Generator", gen[0], "does not exist")
			fmt.Println("/GetMaze\n")
			return
		}
	}

	maze := generator(length, gen[0])

	// 2 is top, 3 is right, 5 is left, 7 is bottom
	var mazeData []int
	for i := 0; i < len(maze); i++ {
		for j := 0; j < len(maze[i]); j++ {
			mazeCell := maze[i][j]
			cellVal := 1
			if mazeCell.borders[0] {
				cellVal *= 2
			}
			if mazeCell.borders[1] {
				cellVal *= 3
			}
			if mazeCell.borders[2] {
				cellVal *= 5
			}
			if mazeCell.borders[3] {
				cellVal *= 7
			}
			mazeData = append(mazeData, cellVal)
		}
	}

	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(mazeData)

	fmt.Println("Generated", gen[0], length)
	fmt.Println("/GetMaze")
}

func RespondWithError(msg string) {
	fmt.Printf("Error: %s\n", msg)
}

// /mazedata
func GetMazeData(w http.ResponseWriter, r *http.Request) {
	fmt.Println("GetMazeData")

	params, err := GetParams(r.URL.Query())
	if err != nil {
		RespondWithError(fmt.Sprintf("Error with query parameters: %s", err.Error()))
		return
	}
	fmt.Println(params)
	mdb, err := NewMazeDB()
	if err != nil {
		RespondWithError(fmt.Sprintf("Error connecting to database: %s", err.Error()))
		return
	}
	data, err := mdb.QueryMazes(params)
	if err != nil {
		RespondWithError(fmt.Sprintf("Error querying mazes: %s", err.Error()))
		return
	}
	fmt.Println(data)
	resp, err := json.Marshal(data[2])
	if err != nil {
		RespondWithError(fmt.Sprintf("Erorr marshalling response: %s", err.Error()))
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(string(resp))

	fmt.Println("/GetMazeData")
}

// /testmaze?size= - Generates a maze with a length of size
func TestMazes(w http.ResponseWriter, r *http.Request) {
	fmt.Println("TestMaze")
	// fmt.Println(" ________________________________________________________________________________________________")
	// fmt.Printf("| %-20s | %7s | %8s | %11s | %10s | %10s | %10s |\n", " ", " ", " ", " ", " ", " ", " ")
	// header := fmt.Sprintf(
	// 	"| %-20s | %7s | %8s | %11s | %10s | %10s | %10s |\n",
	// 	"Generator Name",
	// 	"# Tests",
	// 	"Size",
	// 	"Total time",
	// 	"Avg. time",
	// 	"Max. time",
	// 	"Min. time",
	// )
	// fmt.Print(header)
	// fmt.Println("|______________________|_________|__________|_____________|____________|____________|____________|")

	// mazeTests := []MazeTest{{5, 1000}, {10, 1000}, {25, 100}, {50, 25}, {75, 10}, {100, 10}}

	// for _, mt := range  mazeTests {
	// 	MazeGenerationTest(AldousBroderMazev0, "v0", mt.iterations, mt.length)
	// 	MazeGenerationTest(AldousBroderMazev1, "v1", mt.iterations, mt.length)	
	// }

	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(0)

	fmt.Println("/TestMaze")
}