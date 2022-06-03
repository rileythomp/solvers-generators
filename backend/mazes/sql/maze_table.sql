CREATE TABLE maze_tests (
    id              uuid primary key,
    solver          varchar(255),   
    length          int,
    genTime         real,
    analysisTime    real,
    longestPath     int,
    crossRoadCells  int,
    junctionCells   int,
    decisionCells   int,
    straightCells   int,
    deadEndCells    int,
    turnCells       int
);
