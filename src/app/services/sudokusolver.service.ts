import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions ={
	headers: new HttpHeaders({
		'Content-type': 'application-json'
	}),
	params: {}
}

@Injectable({
	providedIn: 'root'
})
export class SudokusolverService {
	host:string = 'https://solvegen-server.herokuapp.com';

	constructor(private http:HttpClient) { }

	getBoard(board:string):Observable<string> {
		let path:string = '/board';
		let query:string = '?board=' + board;
		return this.http.get<string>(this.host + path + query);
	}

	getRandomBoard(diff:string):Observable<any> {
		return this.http.get<any>('https://sugoku2.herokuapp.com/board?difficulty=' + diff);
	}

	validateBoard(board:string):Observable<boolean> {
		let path:string = '/validate';
		let query:string = '?board=' + board;
		return this.http.get<boolean>(this.host + path + query);
	}

	solveBoard(board:string):Observable<string> {
		let path:string = '/solve';
		let query:string = '?board=' + board;
		return this.http.get<string>(this.host + path + query);
	}

	testSolvers():Observable<Number> {
		let path:string = '/test';
		return this.http.get<Number>(this.host + path);
	}

	partialSolve(board:string):Observable<string> {
		let path:String = '/partial';
		let query:string = '?board=' + board;
		return this.http.get<string>(this.host + path + query);
	}
}
