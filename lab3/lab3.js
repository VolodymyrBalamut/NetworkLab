$(document).ready(function(){

	$('#N').on("input", draw);

	function draw(){
		var myCanvas = $('#draw');
		myCanvas.clearCanvas();
		let N = $('#N').val();
		let res = resolve(N);
		console.log(res);
		//input signals

		let xo = 10;
		let yo = 60;
		let yfin = drawInput(myCanvas,res.V,xo,yo,res.V);
		
		//pg1
		let xpg = xo +50;
		let ypg = yfin + 80;
		let xstep = drawPG(myCanvas,1,xpg,ypg,res.V,res.V,res.pgsign);

		//connect input signals with pg1
		//
		drawPath(myCanvas,xo,60-10,xstep-10,60-10,xstep-10,ypg-64);

		//
		if(res.V ===12) {
			drawText(myCanvas,xo+40,40,res.findnes[1])
			drawText(myCanvas,xo+40,yfin-30,res.findnes[12]);
		}
		if(res.V ===3) {
			drawText(myCanvas,xo+40,yfin-30,res.findnes[1]);
			drawText(myCanvas,xo+40,40,res.findnes[3])
		}

		drawPath(myCanvas,xo,yfin-10,xpg-10,yfin-10,xpg-10,ypg-64);

		//second pg
		let ypgstep = 0;
		let vgy = 0;
		if(res.Naip>1){
			let count = 0;
			let index = 2;
			for(let j =1; j < res.Naip; j++){
				if(j===(res.Naip-1) && res.Ost!==0){
			      	//console.log(res.Ost);
			      	count = res.Ost;
			    } else {
			      	//console.log(res.V);
			      	count = res.V;
			    }
			    ypgstep = ypg+1.5*j*50;
			    if(j === 4) vgy = ypgstep;
			    drawPG(myCanvas,index++,xpg,ypgstep,count,res.V,res.pgsign);
			}
		}
		console.log(vgy);
		//vg
		if(res.V === 12 && res.Napp === 1){
			let xvg = xstep + 50;
			let yvg = ypgstep + 80;
			let width = drawVG(myCanvas,1,xvg,yvg,res.V,res.V,res.pgsign2);
			//connect input signals with vg1

			let lstep = 65;

			drawText(myCanvas,xstep+40,ypg-20,res.figrnes[1]);
			drawPath(myCanvas,xstep,ypg-10,xvg+10,ypg-10,xvg+10,yvg-64);

			drawText(myCanvas,xstep+40,ypg+lstep,res.figrnes[2]);
			drawPath(myCanvas,xstep,ypg+lstep,xvg+60,ypg+lstep,xvg+60,yvg-64);

			drawText(myCanvas,xstep+40,ypg+2*lstep,res.figrnes[3]);
			drawPath(myCanvas,xstep,ypg+2*lstep+10,xvg+110,ypg+2*lstep+10,xvg+110,yvg-64);

			drawText(myCanvas,xstep+40,ypg+3*lstep,res.figrnes[4]);
			drawPath(myCanvas,xstep,ypg+3*lstep+20,xvg+170,ypg+3*lstep+20,xvg+170,yvg-64);

			drawText(myCanvas,xstep+40,vgy-20,res.figrnes[5]);
			drawPath(myCanvas,xstep,vgy-10,
							 width+10,vgy-10,
							 width+10,yvg-64);
		}
		

		drawText(myCanvas,400,20,"fінд.нес :");
		drawText(myCanvas,470,20,"fк :");
		if(res.V ===12){
			for(let i = 1; i<=12; i++){
				drawText(myCanvas,440,i*20,res.findnes[i]);
			}
			/*drawText(myCanvas,500,20,"fгр.нес :");
			for(let i = 1; i<=5; i++){
				drawText(myCanvas,550,i*20,res.figrnes[i]);
			}*/
			for(let i = 1; i<=12; i++){
				drawText(myCanvas,500,i*20,res.pgsign[i].end);
				drawText(myCanvas,550,i*20,res.pgsign[i].start);
			}
		}
		if(res.V === 3) {
			for(let i = 1; i<=3; i++){
				drawText(myCanvas,440,i*20,res.findnes[i]);
			}
			for(let i = 1; i<=12; i++){
				drawText(myCanvas,500,i*20,res.pgsign[i].start);
				drawText(myCanvas,550,i*20,res.pgsign[i].end);
			}
		}
		
	}
	draw();
	
});