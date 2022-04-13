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
export class MazesService {
	host:string = 'https://solvegen-server.herokuapp.com';

	constructor(private http:HttpClient) { }

	getMaze(size:number, type:string):Observable<number[]> {
		let path:string = '/maze';
		let query:string = '?size=' + size + '&type=' + type;
		return this.http.get<number[]>(this.host + path + query)
	}

	testMazes():Observable<string> {
		let path:string = '/test';
		return this.http.get<string>(this.host + path);
	}
}