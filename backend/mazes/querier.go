package main

import (
	"strconv"
	"net/url"
	"os"
	"database/sql"
	_ "github.com/lib/pq"
)

type MazeDB struct {
	db *sql.DB
}

func NewMazeDB() (MazeDB, error) {
	DB_URL := os.Getenv("DB_URL")
	db, err := sql.Open("postgres", DB_URL)
	if err != nil {
		return MazeDB{}, err
	}
	if err := db.Ping(); err != nil {
		return MazeDB{}, err
	}
	return MazeDB{db: db}, err
}

type Params struct {
	solver string
	length int
	sortOrder string
	sortBy string
}

func (this *MazeDB) QueryMazes(p Params) ([]MazeData, error) {
	var mds []MazeData
	rows, err := this.db.Query(
		`SELECT solver, length, gentime, analysistime, longestpath, crossroadcells, junctioncells, decisioncells, straightcells, deadendcells, turncells FROM maze_tests
		LIMIT 40;`,
	)
	if err != nil {
		return []MazeData{}, err
	}
	defer rows.Close()
	for rows.Next() {
		var md MazeData
		if err := rows.Scan(
			&md.solver,
			&md.length,
			&md.genTime,
			&md.analysisTime,
			&md.longestPath,
			&md.crossRoadCells,
			&md.junctionCells,
			&md.decisionCells,
			&md.straightCells,
			&md.deadEndCells,
			&md.turnCells,
		); err != nil {
			return []MazeData{}, err
		}
		mds = append(mds, md)
	}
	if err := rows.Err(); err != nil {
		return []MazeData{}, err
	}
	return mds, err
}


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

func GetParams(queries url.Values) (Params, error) {
	var (
		q []string
		ok bool
		p Params
	)
	if q, ok = queries["solver"]; ok {
		p.solver = q[0]
	}
	if q, ok = queries["len"]; ok {
		var err error
		p.length, err = strconv.Atoi(q[0])
		if err != nil {
			return p, err
		}
	}
	p.sortOrder = "asc"
	if q, ok = queries["sortorder"]; ok && q[0] == "desc" {
		p.sortOrder = "desc"
	}
	p.sortBy = "avgGenTime"
	if q, ok = queries["sortby"]; ok {
		p.sortBy = q[0]
	}
	return p, nil
}