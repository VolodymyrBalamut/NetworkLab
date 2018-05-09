$(document).ready(function(){
	function resolve(N){
		if(N>0){
			return {
				Naco: Math.ceil(N/30),
				Navhg: Math.floor(N/120),
				Nathg: Math.floor(N/480),
				Nachg: Math.floor(N/1920),
				Ost: N%30,
				V:30
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

		/*var setCanvasSize = function() {
			myCanvas.width = window.innerWidth;
			myCanvas.height = window.innerHeight;
			}
		setCanvasSize();*/

		let isVG = false;
		let isTG = false;
		let isCHG = false;


		let step = 10;
		let margin = 40; 

		/*let xAIP = 40;
		let ystartAIP = 10;
		let widthAIP = 30;
		let heightAIP = 50;*/

		let ACO = {
			X:40,
			Y:10,
			Width:30,
			Height:50,
			XRight: function()  {return this.Width+this.X},
		    YBottom:function() {return this.Height+this.Y},
		    YCenter:function() {return (this.YBottom() + this.Y)/2}
		}
		function drawPRG(){
			//let X1 = (widthAIP + xAIP);
			//let Y1 = ((heightAIP+10)/2);
			//let X2 = xAPP;
			//let Y2 = Y1;
			let shortLine = res.Naco - (res.Naco%4);
			//console.log(ACO);
		    for(let i = 0; i < res.Naco; i++){
		      //rectangle
		      drawRect(myCanvas,ACO.X,ACO.Y,ACO.Width,ACO.Height);
		      //output line
		      if(shortLine > i) {
		      	drawArrowLine(myCanvas,ACO.XRight(),
		      						   ACO.YCenter(),
		      						   VG.X-2,
		      						   ACO.YCenter());
		      }
		      else {
		      	drawArrowLine(myCanvas,ACO.XRight(),
		      						   ACO.YCenter(),
		      						   VG.X-2,
		      						   ACO.YCenter());
		      }

		      //input lines
		      drawLine(myCanvas,20,ACO.YCenter()-15,
		      					   ACO.X-1,
		      					   ACO.YCenter()-15);
		      drawLine(myCanvas,20,ACO.YCenter()+15,
							       ACO.X-1,
							       ACO.YCenter()+15);
		      drawCircle(myCanvas,18,ACO.YCenter()-15);
		      drawCircle(myCanvas,18,ACO.YCenter()+15);

		      //input number
		      if(i===(res.Naco-1) && res.Ost!==0){
		      	drawText(myCanvas,8,ACO.YCenter()-15,1);
		      	drawText(myCanvas,8,ACO.YCenter()+15,res.Ost);
		      	console.log(res.Ost);
		      } else {
		      	drawText(myCanvas,8,ACO.YCenter()-15,1);
		      	drawText(myCanvas,8,ACO.YCenter()+15,res.V);
		      }
		      
		      //label
		      drawText(myCanvas,ACO.X+15,ACO.YCenter(),'АЦО');

		     // Y1 += (heightAIP + step);
			  //Y2 += (heightAIP + step);

			 // ACO.step += ACO.Height + step;
			  
		      ACO.Y += step+ACO.Height;	
		    }
		}

		/*let xAPP = xAIP + widthAIP + margin;
		let ystartAPP = 10;
		let widthAPP = widthAIP + widthAIP/2;
		let heightAPP = heightAIP + 3*(step+heightAIP);*/

		//VG
		let VG = {
			X: ACO.XRight() + margin,
			Y:10,
			Width:ACO.Width + ACO.Width/2,
			Height:ACO.Height + 3*(step +ACO.Height),
			XRight: function()  {return this.Width+this.X},
		    YBottom:function() {return this.Height+this.Y},
		    YCenter:function() {return (this.YBottom() + this.Y)/2}
		}

		function drawVG(){
			//let X1 = (widthAPP + xAPP);
			//let X2 = xAS;
			//let Y = ((heightAPP+10)/2);
			//console.log(VG);
		    for(let i = 0; i < res.Navhg; i++){
		      isVG = true;
		      drawRect(myCanvas,VG.X,VG.Y,VG.Width,VG.Height);
		      //VG.Y += step + heightAPP;
		      drawText(myCanvas,VG.X+25,VG.YCenter(),'АВЧГ');
		      //output line
		      drawArrowLine(myCanvas,VG.XRight(),
		      	VG.YCenter(),TG.X-2,VG.YCenter());
		      VG.Y += (VG.Height + step);
		    }
		}

		/*let xAS = xAPP + widthAPP + margin;
		let yAS = 10;
		let widthAS = widthAPP + widthAPP/4;
		let heightAS = heightAIP + (res.Naco-1)*(step+heightAIP);*/
		//TG
		let TG = {
			X: VG.XRight() + margin,
			Y:10,
			Width:VG.Width + VG.Width/4,
			Height:VG.Height + (3)*(step +VG.Height),
			XRight: function()  {return this.Width+this.X},
		    YBottom:function() {return this.Height+this.Y},
		    YCenter:function() {return (this.YBottom() + this.Y)/2}
		}

		function drawTG(){

			//let Y = ((heightAS+10)/2);
			for(let i = 0; i < res.Nathg; i++){
		      isTG = true;
		      drawRect(myCanvas,TG.X,TG.Y,TG.Width,TG.Height);
		      //ystartAPP += step + heightAPP;
		      drawText(myCanvas,TG.X+TG.Width/2,TG.YCenter(),'АТЧГ');
		      //output line
		      if(res.Nachg>=1){
		      	 drawArrowLine(myCanvas,TG.XRight(),
		      							TG.YCenter(),
		      							ChG.X-2,
		      							TG.YCenter());
		      }
		      else {
		      drawArrowLine(myCanvas,TG.XRight(),
		      							TG.YCenter(),
		      							CALT.X()-2,
		      							TG.YCenter());
		  	  }
		      TG.Y += (TG.Height + step);
		    }
		}

		//ChG
		let ChG = {
			X: TG.XRight() + margin,
			Y:10,
			Width:TG.Width + TG.Width/4,
			Height:TG.Height + (3)*(step +TG.Height),
			XRight: function()  {return this.Width+this.X},
		    YBottom:function() {return this.Height+this.Y},
		    YCenter:function() {return (this.YBottom() + this.Y)/2}
		}

		function drawChG(){

			//let Y = ((heightAS+10)/2);
			for(let i = 0; i < res.Nachg; i++){
		      isCHG = true;
		      drawRect(myCanvas,ChG.X,ChG.Y,ChG.Width,ChG.Height);
		      //ystartAPP += step + heightAPP;
		      drawText(myCanvas,ChG.X+ChG.Width/2,ChG.YCenter(),'АЧЧГ');
		      //output line
		      drawArrowLine(myCanvas,ChG.XRight(),
		      							ChG.YCenter(),
		      							CALT.X()-2,
		      							ChG.YCenter());
		      ChG.Y += (ChG.Height + step);
		    }
		}

		/*let xCALT = xAS + widthAS + margin;
		let yCALT = 10;
		let widthCALT = widthAS + widthAS/8;
		let heightCALT = heightAIP + (res.Naco-1)*(step+heightAIP);*/

		//CALT
		let CALT = {
			X: function(){
				if(!isVG){
					return ACO.XRight() + margin;
				}
				if(!isTG){
					return VG.XRight() + margin;
				}
				if(!isCHG){
					return TG.XRight() + margin;
				}
				else {
					return ChG.XRight() + margin;
				}
			},
			Y:10,
			Width:TG.Width + TG.Width/8,
			Height:ACO.Height + (res.Naco-1)*(step +ACO.Height),
			XRight: function()  {return this.Width+this.X()},
		    YBottom:function() {return this.Height+this.Y},
		    YCenter:function() {return (this.YBottom() + this.Y)/2}
		}

		function drawCALT(){
			//let Y = ((heightCALT+10)/2);
			//let X = xCALT+widthCALT;
			drawRect(myCanvas,CALT.X(),CALT.Y,CALT.Width,CALT.Height);
			//label
		    drawText(myCanvas,CALT.X()+CALT.Width/2,
		    						CALT.YCenter(),
		    						'КАЛТ');
		    //output line
		    //console.log(CALT.XRight());
		    drawArrowLine(myCanvas, CALT.XRight(),
		    						CALT.YCenter(),
		    						CALT.XRight()+50,
		    						CALT.YCenter());
		}

		/*let xGO = xAPP;
		let yGO = heightCALT + 50;
		let widthGO = widthAPP;
		let heightGO = 50;*/

		//GO
		let GO = {
			X: VG.X,
			Y:CALT.Height + 50,
			Width:VG.Width,
			Height:50,
			XRight: function()  {return this.Width+this.X},
		    YBottom:function() {return this.Height+this.Y},
		    YCenter:function() {return (this.YBottom() + this.Y)/2}
		}
		function drawGO(){
			drawRect(myCanvas,GO.X,GO.Y,GO.Width,GO.Height);
			//label
		    drawText(myCanvas,GO.X+GO.Width/2,GO.Y+20,'ГО');
		    //APRG arrow
		    drawPath(myCanvas,GO.X-10,GO.Y+20,ACO.X,GO.Y+20,
		    					ACO.X,CALT.Height+2);
		    //VG arrow
		    if(isVG){
		    	drawArrowLine(myCanvas,GO.X+GO.Width/2,
		    				GO.Y,GO.X+GO.Width/2,
		    				CALT.Height+12);
		    }
		    //TG arrow
		    if(isTG){
		    	drawPath(myCanvas,GO.X+GO.Width-10,GO.Y+20,
		    		TG.X+10,GO.Y+20,
		    		TG.X+10,CALT.Height+2);
			}
			//CHG arrow
			if(isCHG){
				drawPath(myCanvas,GO.X+GO.Width-10,GO.Y+20,
		    		ChG.X+10,GO.Y+20,
		    		ChG.X+10,CALT.Height+2);
			}
		    
		}
		
		drawPRG();
		drawVG();
		drawTG();
		drawChG();
		drawCALT();
		drawGO();
		console.log(ACO.XRight());
		console.log(VG.XRight());
		console.log(ChG.XRight());
		console.log(CALT.XRight());
	}

	draw();
	$('#N').on("input", draw);
});