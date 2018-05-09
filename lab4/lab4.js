$(document).ready(function(){

	$('#length,#a1,#a2,#a3,#a4,#S1,#S2,#S3,#Pвих').on("input", draw);


	let resolveA = function(L,Alpha,Nyy,Sarr,Pout){
        const lyy = L/Nyy;
        if(Alpha !== undefined){
            for(let i=0; i < Alpha.length; i++){
             Alpha[i] = (Alpha[i] * lyy).toFixed(2);
            }
        }
        

        let Pprs = [];
        let Ppers = [];
        for(let i = 0; i < Nyy; i++ ){
        	if(i == 0) {
        		Ppers[i] = Pout;
        		Pprs[i] = Ppers[i] - Alpha[i];
        		
        	} 
        	else {
        		Pprs[i] = Ppers[i-1] - Alpha[i];
				Ppers[i] = Pprs[i] + Sarr[i-1];
			}

        }

        return {
            L:L,
            Alpha:Alpha,
            Sarr:Sarr,
            Nyy:Nyy,
            lyy:lyy,
            Pout:Pout,
            Pprs:Pprs,
            Ppers:Ppers
        }
    }
	function draw(){
		var myCanvas = $('#draw');
		myCanvas.clearCanvas();
		let res = resolveA($('#length').val(),
                            [
                                $('#a1').val(),
                                $('#a2').val(),
                                $('#a3').val(),
                                $('#a4').val()
                            ],
                            parseInt($('#number_station').val()),
                            [
                            	parseInt($('#S1').val()),
                            	parseInt($('#S2').val()),
                            	parseInt($('#S3').val()),
                            ],
                            parseInt($('#Pвих').val()));
		console.log(res);
		

		//draw OCA
		let x_oca = 25;
		const y_oca = 70;
		const size_oca = {
			height: 50,
			width: 50
		};

		drawDottedRect(myCanvas,x_oca-10,y_oca - 40,
								size_oca.width + 140,
								size_oca.width + 70);
		drawText(myCanvas,x_oca+160,y_oca - 20,"ОСА");
		//КОА
		drawRect(myCanvas,x_oca,y_oca,size_oca.width,size_oca.height);
		drawText(myCanvas,x_oca+25,y_oca+25,"КОА");

		drawLine(myCanvas,x_oca+50,y_oca+25,x_oca+110,y_oca+25);
		//АС
		x_oca += 60;
		drawRect(myCanvas,x_oca,y_oca,size_oca.width,size_oca.height);
		drawText(myCanvas,x_oca+25,y_oca+25,"АС");

		drawLine(myCanvas,x_oca+50,y_oca+25,x_oca+110,y_oca+25);
		//КАЛТ
		x_oca += 60;
		drawRect(myCanvas,x_oca,y_oca,size_oca.width,size_oca.height);
		drawText(myCanvas,x_oca+25,y_oca+25,"КАЛТ");

		drawLine(myCanvas,x_oca+60,y_oca+25,x_oca+60,y_oca+50+300);
		
		//draw midle
		let x_m = x_oca + 50 + 30;
		let y_m = y_oca;
		const size_m = {
			height: 50,
			width: 25
		};
		drawText(myCanvas,x_oca+70,y_oca+15,res.Alpha[0]);
		drawLine(myCanvas,x_oca+50,y_oca+25,x_m,y_m+25);
		for(let i = 0; i < 3; i++){
			drawRect(myCanvas,x_m,y_m,size_m.width,size_m.height);
			drawText(myCanvas,x_m+12,y_m+25,"ПС" + (i+1));
			drawDottedLine(myCanvas,x_m,y_m+50,x_m,y_m+50+300);
			drawDottedLine(myCanvas,x_m+25,y_m+50,x_m+25,y_m+50+300);
			drawText(myCanvas,x_m+14,y_m+60,res.Sarr[i]);
			x_m += 60;
			drawLine(myCanvas,x_m-35,y_m+25,x_m,y_m+25);
			drawText(myCanvas,x_m-15,y_oca+15,res.Alpha[i+1]);
		}
		

		//draw OCB
		let x_ocb = x_m-5;
		const y_ocb = y_oca;
		const size_ocb = {
			height: 50,
			width: 50
		};
		


		drawDottedRect(myCanvas,x_ocb-10,y_ocb - 40,
								size_oca.width + 140,
								size_oca.width + 70);
		drawText(myCanvas,x_ocb+160,y_ocb - 20,"ОСB");
		drawLine(myCanvas,x_ocb-20,y_m+25,x_ocb,y_m+25);
		drawLine(myCanvas,x_ocb-10,y_m+25,x_ocb-10,y_m+50+300);
		//КОА
		drawRect(myCanvas,x_ocb,y_ocb,size_oca.width,size_oca.height);
		drawText(myCanvas,x_ocb+25,y_ocb+25,"КАЛТ");

		drawLine(myCanvas,x_ocb+50,y_ocb+25,x_ocb+110,y_ocb+25);
		//АС
		x_ocb += 60;
		drawRect(myCanvas,x_ocb,y_ocb,size_oca.width,size_oca.height);
		drawText(myCanvas,x_ocb+25,y_ocb+25,"АС");

		drawLine(myCanvas,x_ocb+50,y_ocb+25,x_ocb+110,y_ocb+25);
		//КАЛТ
		x_ocb += 60;
		drawRect(myCanvas,x_ocb,y_ocb,size_oca.width,size_oca.height);
		drawText(myCanvas,x_ocb+25,y_ocb+25,"КОА");


		//signal
		//1
		drawText(myCanvas,x_oca+50,y_oca+200,res.Ppers[0]);
		drawLine(myCanvas,x_oca+60,
						  y_oca+200,
						  x_oca + 50 + 30,
						  y_oca+240);

		drawText(myCanvas,x_oca+50 + 30,y_oca+250,res.Pprs[0]);
		drawLine(myCanvas,x_oca+ 50 + 30,
				  y_oca+240,
				  x_oca + 60+ 45,
				  y_oca+205);

		//2
		drawText(myCanvas,x_oca+60+ 45 - 10,y_oca+200,
				Math.round(res.Ppers[1]));
		drawLine(myCanvas,x_oca+ 60+ 45,
				  y_oca+205,
				  x_oca + 60+ 20 +  60,
				  y_oca+245);
		drawText(myCanvas,x_oca+50 +60+ 30,y_oca+255,
			Math.round(res.Pprs[1]));
		drawLine(myCanvas,x_oca+ 60+ 20 + 60,
				  y_oca+245,
				  x_oca + 50 + 30+ 60 + 25,
				  y_oca+210);

		//3
		drawText(myCanvas,x_oca+60+ 45 + 60 - 10,y_oca+205,
				Math.round(res.Ppers[2]));
		drawLine(myCanvas, x_oca +50 + 30+ 60 + 25,
				  y_oca+210,
				  x_oca + 60+ 20 + 120,
				  y_oca+255);
		drawText(myCanvas,x_oca+50 +120+ 30,y_oca+260,
			Math.round(res.Pprs[2]));
		drawLine(myCanvas,x_oca+ 60+ 20 + 120,
				  y_oca+255,
				  x_oca + 50 + 30+ 120 + 25,
				  y_oca+215);

		drawText(myCanvas,x_oca+60+ 45 + 120 - 10,y_oca+210,
				Math.round(res.Ppers[3]));
		drawLine(myCanvas, x_oca + 50 + 30+ 120 + 25,
				  y_oca+215,
				  x_oca + 60+ 20 + 165,
				  y_oca+260);
		drawText(myCanvas,x_oca+50 +175+ 30,y_oca+265,
			Math.round(res.Pprs[3]));

		drawArrowLine(myCanvas,x_oca+60,y_m+50+300,
			x_oca+50 +165+ 30,y_m+50+300);
		drawText(myCanvas,(x_oca+60 + x_oca+50 +165+ 30)/2,
			y_m+50+310, res.L + " км"); 
		
	}
	draw();
});