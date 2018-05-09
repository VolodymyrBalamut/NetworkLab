$(document).ready(function(){
	function resolve(N){
		if(N>12){
			return {
				Naip: Math.ceil(N/12),
				Napp: Math.floor((N/12)/5),
				Ost: N%12,
				V:12
			}
		} else if(N<=12 && N>0){
			return {
				Naip: Math.ceil(N/3),
				Napp: 0,
				Ost: N%3,
				V:3
			}
		}
		else {
			return null;
		}
	}

	function draw(){
		var myCanvas = $('#draw'); 
		myCanvas.clearCanvas();
		let N = $('#N').val();
		let res = resolve(N);
		console.log(res);
		console.log($('#N').val());

		function drawRect(X,Y,W,H){
			myCanvas.drawRect({
			  fillStyle: 'white',
			  strokeStyle: 'black',
			  strokeWidth: 1,
			  x: X, y: Y,
			  fromCenter: false,
			  width: W,
			  height: H
			});
		}
		function drawLine(X1,Y1,X2,Y2){
			myCanvas.drawLine({
			  strokeStyle: 'black',
			  strokeWidth: 1,
			  rounded: true,
			  closed: true,
			  x1: X1 , y1:Y1 ,
			  x2: X2,  y2:Y2
			});
		}

		function drawArrowLine(X1,Y1,X2,Y2){
			myCanvas.drawLine({
			  strokeStyle: 'black',
			  strokeWidth: 1,
			  rounded: true,
			  endArrow: true,
  			  arrowRadius: 8,
              arrowAngle: 90,
			  //closed: true,
			  x1: X1 , y1:Y1 ,
			  x2: X2,  y2:Y2
			});
		}

		function drawPath(X1,Y1,X2,Y2,X3,Y3){
			myCanvas.drawPath({
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

		function drawText(X,Y,Text){
			myCanvas.drawText({
			  text: Text,
			  fontFamily: 'ariel',
			  fontSize: 14,
			  x: X, y: Y,
			  fillStyle: 'black'
			});
		}

		function drawCircle(X,Y){
			$('canvas').drawEllipse({
			  strokeStyle: 'black',
			  strokeWidth: 1,
			  x: X, y: Y,
			  width: 4, height: 5
			});
		}
		
		let isAPP = false;
		let step = 10;
		let margin = 40; 

		let xAIP = 40;
		let ystartAIP = 10;
		let widthAIP = 30;
		let heightAIP = 50;
		function drawAIP(){
			let X1 = (widthAIP + xAIP);
			let Y1 = ((heightAIP+10)/2);
			let X2 = xAPP;
			let Y2 = Y1;
			let shortLine = res.Naip - (res.Naip%5);
		    for(let i = 0; i < res.Naip; i++){
		      //rectangle
		      drawRect(xAIP,ystartAIP,widthAIP,heightAIP);
		      //output line
		      if(shortLine > i) {
		      	drawArrowLine(X1,Y1,X2-2,Y2);
		      }
		      else {
		      	drawArrowLine(X1,Y1,xAS-2,Y2);
		      }
		      //input lines
		      drawLine(20,Y1-15,xAIP-1,Y2-15);
		      drawLine(20,Y1+15,xAIP-1,Y2+15);

		      drawCircle(18,Y1-15);
		      drawCircle(18,Y1+15);
		      //input number
		      if(i===(res.Naip-1) && res.Ost!==0){
		      	drawText(8,Y1-15,1);
		      	drawText(8,Y1+15,res.Ost);
		      	console.log(res.Ost);
		      } else {
		      	drawText(8,Y1-15,1);
		      	drawText(8,Y1+15,res.V);
		      }
		      
		      //label
		      drawText(xAIP+15,Y1,'АІП');

		      Y1 += (heightAIP + step);
			  Y2 += (heightAIP + step);
			  
		      ystartAIP += step+heightAIP;	
		    }
		}

		let xAPP = xAIP + widthAIP + margin;
		let ystartAPP = 10;
		let widthAPP = widthAIP + widthAIP/2;
		let heightAPP = heightAIP + 4*(step+heightAIP);
		function drawAPP(){
			let X1 = (widthAPP + xAPP);
			let X2 = xAS;
			let Y = ((heightAPP+10)/2);
		    for(let i = 0; i < res.Napp; i++){
		      isAPP = true;
		      drawRect(xAPP,ystartAPP,widthAPP,heightAPP);
		      ystartAPP += step + heightAPP;
		      drawText(xAPP+25,Y,'АПП');
		      //output line
		      drawArrowLine(X1,Y,X2-2,Y);
		      Y += (heightAPP + step);
		    }
		}

		let xAS = xAPP + widthAPP + margin;
		let yAS = 10;
		let widthAS = widthAPP + widthAPP/4;
		let heightAS = heightAIP + (res.Naip-1)*(step+heightAIP);
		function drawAS(){
			let Y = ((heightAS+10)/2);
			drawRect(xAS,yAS,widthAS,heightAS);
			//label
		    drawText(xAS+widthAS/2,(yAS + heightAS)/2,'АС');
		    //output line
		    drawArrowLine(xAS+widthAS,Y,xCALT-2,Y);
		}

		let xCALT = xAS + widthAS + margin;
		let yCALT = 10;
		let widthCALT = widthAS + widthAS/8;
		let heightCALT = heightAIP + (res.Naip-1)*(step+heightAIP);
		function drawCALT(){
			let Y = ((heightCALT+10)/2);
			let X = xCALT+widthCALT;
			drawRect(xCALT,yCALT,widthCALT,heightCALT);
			//label
		    drawText(xCALT+widthCALT/2,(yCALT + heightCALT)/2,'КАЛТ');
		    //output line
		    drawArrowLine(X,Y,X+50,Y);
		}

		let xGO = xAPP;
		let yGO = heightCALT + 50;
		let widthGO = widthAPP;
		let heightGO = 50;
		function drawGO(){
			drawRect(xGO,yGO,widthGO,heightGO);
			//label
		    drawText(xGO+widthGO/2,yGO+20,'ГО');
		    //AIP arrow
		    drawPath(xGO-10,yGO+20,xAIP,yGO+20,xAIP,heightCALT+2);
		    //APP arrow
		    if(isAPP){
		    	drawArrowLine(xGO+widthGO/2,yGO,xGO+widthGO/2,heightAPP+12);
		    }
		    //AS arrow
		    drawPath(xGO+widthGO-10,yGO+20,
		    		xAS+10,yGO+20,
		    		xAS+10,heightCALT+2);
		    
		}
		
		drawAIP();
		drawAPP();
		drawAS();
		drawCALT();
		drawGO();
		
	}

	draw();
	$('#N').on("input", draw);
});