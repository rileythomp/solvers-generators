import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-truchet',
	templateUrl: './truchet.component.html',
	styleUrls: ['./truchet.component.less']
})
export class TruchetComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
		this.generateTruchet(50);
	}

	generateTruchet(radius:number) {
		let canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
		let context = canvas.getContext('2d');
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.fillStyle = 'rgba(0, 0, 0, 0)';
		context.strokeStyle = 'black';
		context.lineWidth = 2;
		let length = canvas.height;
		let r = radius;
		let angle=0

		for (let i = 0; i < length/(2*r); i++) {
			for (let j = 0; j < length/(2*r); j++) {
				if (Math.random() < 0.5) {
					context.beginPath();
					angle=1.5*Math.PI
					context.arc(2*r*j,2*r*(i+1), r, angle, angle+Math.PI/2, false);
					context.fill();
					context.stroke();
					
					context.beginPath();
					angle=0.5*Math.PI
					context.arc(2*r*(j+1),2*r*i, r, angle, angle+Math.PI/2, false);
					context.fill();
					context.stroke();
				} else {
					context.beginPath();
					angle = 0
					context.arc(2*r*j, 2*r*i, r, angle, angle+Math.PI/2, false);
					context.fill();
					context.stroke();
					
					context.beginPath();
					angle=Math.PI
					context.arc(2*r*(j+1), 2*r*(i+1), r, angle, angle+Math.PI/2, false);
					context.fill();
					context.stroke();
				}
			}
		}
	}
}
