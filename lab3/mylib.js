function drawRect(canvas,X,Y,W,H){
	canvas.drawRect({
	  fillStyle: 'white',
	  strokeStyle: 'black',
	  strokeWidth: 2,
	  x: X, y: Y,
	  fromCenter: false,
	  width: W,
	  height: H
	});
}

function drawDottedRect(canvas,X,Y,W,H){
	canvas.drawRect({
	  fillStyle: 'white',
	  strokeStyle: 'black',
	  strokeWidth: 2,
	  strokeDash: [5],
	  strokeDashOffset: 0,
	  x: X, y: Y,
	  fromCenter: false,
	  width: W,
	  height: H
	});
}

function drawArrowLine(canvas,X1,Y1,X2,Y2){
	canvas.drawLine({
	  strokeStyle: 'black',
	  strokeWidth: 1,
	  rounded: true,
	  startArrow: true,
	  endArrow: true,
	  arrowRadius: 8,
      arrowAngle: 90,
	  //closed: true,
	  x1: X1 , y1:Y1 ,
	  x2: X2,  y2:Y2
	});
}
function drawPath(canvas,X1,Y1,X2,Y2,X3,Y3){
	canvas.drawPath({
	  strokeStyle: 'black',
	  strokeWidth: 1,
	  x: 10, y: 10,
	  p1: {
	    type: 'line',
	    x1: X1, y1: Y1,
	    x2: X2, y2: Y2
	  },
	 p2: {
	   type: 'line',
	   rounded: true,
	   endArrow: true,
	   arrowRadius: 8,
	   arrowAngle: 90,
	   x1: X2, y1: Y2,
	   x2: X3, y2: Y3
	  }
	});
}
let drawTriangleLeft = function (canvas,X,Y,width=25,height=50){
	canvas.drawLine({
	  strokeStyle: 'black',
	  strokeWidth: 2,
	  rounded: true,
	  closed: true,
	  x1: X, y1: Y-height,
	  x2: X, y2: Y,
	  x3: X+width, y3: Y
	});
}

let drawTriangleRight = function (canvas,X,Y,width=25,height=50){
	canvas.drawLine({
	  strokeStyle: 'black',
	  strokeWidth: 2,
	  rounded: true,
	  closed: true,
	  x1: X, y1: Y,
	  x2: X+width, y2: Y,
	  x3: X+width, y3: Y-height
	});
}



function drawText(canvas,X,Y,Text,fontSize=14){
	canvas.drawText({
	  text: Text,
	  fontFamily: 'ariel',
	  fontSize: fontSize,
	  x: X, y: Y,
	  fillStyle: 'black'
	});
}



function drawLine(canvas,X1,Y1,X2,Y2){
	canvas.drawLine({
	  strokeStyle: 'black',
	  strokeWidth: 1,
	  rounded: true,
	  closed: true,
	  x1: X1 , y1:Y1 ,
	  x2: X2,  y2:Y2
	});
}

function drawDottedLine(canvas,X1,Y1,X2,Y2){
	canvas.drawLine({
	  strokeStyle: '#000',
	  strokeWidth: 1,
	  strokeDash: [5],
	  strokeDashOffset: 0,
	  x1: X1, y1: Y1,
	  x2: X2, y2: Y2
	});
}


function resolve(N){
	//pg
	let findnes = [];
	let pgsign = [];
	//vg
	let figrnes = [];
	let pgsign2 = [];
	if(N>12){
		for(let i =1; i<=12;i++){
			findnes[i] = 108 - 4 * (i - 1);
			pgsign[i] = {
				start: findnes[i] - 0.3,
				end: findnes[i] - 3.4
			}
		}
		let pgsin_low = pgsign[12].end;
		let pgsin_top = pgsign[1].start;
		for(let i =1; i<=5;i++){
			figrnes[i] = 420 + 48 *(i - 1);
			pgsign2[i] = {
				start: figrnes[i] - pgsin_low,
				end: figrnes[i] - pgsin_top
			}
		}
		return {
			Naip: Math.ceil(N/12),
			Napp: Math.floor((N/12)/5),
			Ost: N%12,
			V:12,
			findnes:findnes,
			pgsign:pgsign,
			figrnes:figrnes,
			pgsign2:pgsign2
		}
	} else if(N<=12 && N>0){
		for(let j =1; j<=3;j++){
			findnes[j] = 12 + 4 * (j - 1);
			pgsign[j] = {
				start: findnes[j] + 0.3,
				end: findnes[j] + 3.4
			}
		}
		return {
			Naip: Math.ceil(N/3),
			Napp: 0,
			Ost: N%3,
			V:3,
			findnes:findnes,
			pgsign:pgsign,
			figrnes:null,
			pgsign2:pgsign2
		}
	}
	else {
		return null;
	}
}

function drawInput(canvas,index,X,Y,V){
	let ystep = 0;
	let char = index;
	for(let i = 0; i < 2; i++){
	//for(let i = 0; i < 12; i++){
		ystep = 2*Y*i + 60;
		//ystep = Y*i + 60;
		drawTriangleRight(canvas,X,ystep);
		//drawTriangleRight(canvas,X,ystep);
		//drawText(canvas,X+15,ystep-10,char--);
		switch(i){
			case 0:
				 if(V === 3) drawText(canvas,X+15,ystep-10,index);
				 if(V === 12) drawText(canvas,X+15,ystep-10,1);
				 break;
			case 1:
				 if(V === 3) drawText(canvas,X+15,ystep-10,1);
				 if(V === 12) drawText(canvas,X+15,ystep-10,index);
				 drawText(canvas,X,ystep+10,0.3,10);
				 drawText(canvas,X+25,ystep+10,3.4,10);
				 break;
		}	
	}
	drawDottedLine(canvas,X+25,Y,X+25,ystep-50);
	return ystep;
}

function drawInputU(canvas,index,X,Y,V){
	let ystep = 0;
	let char = index;
	if(V===3){
	 for(let i = 0; i < 3; i++){
		//ystep = 2*Y*i + 60;
		ystep = Y*i + 60;
		drawTriangleRight(canvas,X,ystep);
		//drawTriangleRight(canvas,X,ystep);
		//drawText(canvas,X+15,ystep-10,char--);
		drawText(canvas,X+15,ystep-10,i+1);
		}
	}
	if(V===12){
		for(let i = 0; i < 2; i++){
	//for(let i = 0; i < 12; i++){
		ystep = 2*Y*i + 60;
		//ystep = Y*i + 60;
		drawTriangleRight(canvas,X,ystep);
		//drawTriangleRight(canvas,X,ystep);
		//drawText(canvas,X+15,ystep-10,char--);
		switch(i){
			case 0:
				 if(V === 3) drawText(canvas,X+15,ystep-10,index);
				 if(V === 12) drawText(canvas,X+15,ystep-10,1);
				 break;
			case 1:
				 if(V === 3) drawText(canvas,X+15,ystep-10,1);
				 if(V === 12) drawText(canvas,X+15,ystep-10,index);
				 drawText(canvas,X,ystep+10,0.3,10);
				 drawText(canvas,X+25,ystep+10,3.4,10);
				 break;
		}	
	}
	drawDottedLine(canvas,X+25,Y,X+25,ystep-50);
	}
	
	return ystep;
}

function drawPG(canvas,index,X,Y,countsig,V,sign){
	//let xpg = 140;
	//let ypg = countsig*60 + 80;
	//console.log(sign);
	drawText(canvas,X-30,Y,"ПГ" + index);
	let xstep = 0;
	let step = 60;
	/*var func = null;
	if(countsig === 3){
		func = drawTriangleRight;
	else {
		func = drawTriangleLeft;
	}*/
	for(let i = 0; i < 2; i++){
	//for(let i = 0; i < 5; i++){
		xstep = 2*step*i + X;
		//xstep = step*i + X;
		if(V === 3){
		   drawTriangleRight(canvas,xstep,Y);
		}
		else {
			drawTriangleLeft(canvas,xstep,Y);
		}
		switch(i){
			case 0:
				 if(V === 3) {
				 	drawText(canvas,xstep+10,Y-10,1);
				 	drawText(canvas,xstep,Y+10,sign[1].start,10);
				 	drawText(canvas,xstep+25,Y+10,sign[1].end,10);
				 }
				 if(V === 12) {
				 	drawText(canvas,xstep+10,Y-10,countsig);
				 	drawText(canvas,xstep,Y+10,sign[12].end,10);
				 	drawText(canvas,xstep+25,Y+10,sign[12].start,10);
				 }
				 
				 break;
			case 1:
				 if(V === 3) {
				 	drawText(canvas,xstep+10,Y-10,countsig);
				 	drawText(canvas,xstep,Y+10,sign[3].start,10);
				 	drawText(canvas,xstep+25,Y+10,sign[3].end,10)
				 }
				 if(V === 12) {
				 	drawText(canvas,xstep+10,Y-10,1);
				 	drawText(canvas,xstep,Y+10,sign[1].end,10);
				 	drawText(canvas,xstep+25,Y+10,sign[1].start,10);
				 }
				 break;
		}	
	}
	drawDottedLine(canvas,X+25,Y-20,xstep-5,Y-20);
	drawLine(canvas,X,Y,xstep,Y);
	return xstep;
}
function drawVG(canvas,index,X,Y,countsig,V,sign){
	drawText(canvas,X-30,Y,"ВГ" + index);
	let xstep = 0;
	//let step = 60;
	let step = 50;
	//for(let i = 0; i < 2; i++){
	for(let i = 0; i < 5; i++){
		//xstep = 2*step*i + X;
		xstep = step*i + X;
		drawTriangleRight(canvas,xstep,Y,50);

		drawText(canvas,xstep+25,Y-10,i+1);
	    drawText(canvas,xstep+10,Y+10,Math.round(sign[i+1].end),10);
		drawText(canvas,xstep+40,Y+10,Math.round(sign[i+1].start),10);

/*
		switch(i){
			case 0:
			 	drawText(canvas,xstep+15,Y-10,1);
			 	drawText(canvas,xstep,Y+10,sign[1].end,10);
			 	drawText(canvas,xstep+25,Y+10,sign[1].start,10);
				break;
			case 1:
			 	drawText(canvas,xstep+15,Y-10,5);
			 	drawText(canvas,xstep,Y+10,sign[5].end,10);
			 	drawText(canvas,xstep+25,Y+10,sign[5].start,10);
				break;
		}	*/
	}
	drawLine(canvas,X,Y,xstep,Y);
	return xstep;
}