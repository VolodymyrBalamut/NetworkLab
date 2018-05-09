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

function drawCircle(canvas,X,Y){
	canvas.drawEllipse({
	  strokeStyle: 'black',
	  strokeWidth: 1,
	  x: X, y: Y,
	  width: 4, height: 5
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

