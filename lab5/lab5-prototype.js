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
let res = resolve(120);
let margin =40;
let step = 10;

let isVG = false;
		let isTG = false;
		let isCHG = false;

let Block = {
	X:40,
	Y:10,
	Width:30,
	Height:50,
	XRight: function()  {return this.Width+this.X},
    YBottom:function() {return this.Height+this.Y},
    YCenter:function() {return (this.YBottom() + this.Y)/2}
}

//ACO
let ACO = {
	X:40,
	Y:10,
	Width:30,
	Height:50,
	__proto__:Block
}


//VG
let VG = {
	X: ACO.XRight() + margin,
	Y:10,
	Width:ACO.Width + ACO.Width/2,
	Height:ACO.Height + 3*(step +ACO.Height),
	__proto__:Block
}

//TG
let TG = {
	X: VG.XRight() + margin,
	Y:10,
	Width:VG.Width + VG.Width/4,
	Height:VG.Height + (3)*(step +VG.Height),
	__proto__:Block
}


//ChG
let ChG = {
	X: TG.XRight() + margin,
	Y:10,
	Width:TG.Width + TG.Width/4,
	Height:TG.Height + (3)*(step +TG.Height),
	__proto__:Block
}



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
	__proto__:Block,
	XRight: function()  {return this.Width+this.X()}
}


//GO
let GO = {
	X: VG.X,
	Y:CALT.Height + 50,
	Width:VG.Width,
	Height:50,
	__proto__:Block
}


console.log("ACO: " + ACO.XRight());
console.log("VG: " + VG.XRight());
console.log("ChG: " + ChG.XRight());
console.log("CALT: " + CALT.XRight());

class Foo {
  toString(){
    return 'Pity the Foo from class';
  }
}

class Boo extends Foo {
	toString(){
    return 'Pity the Boo from class';
  }
}

const foo = new Foo();
const boo = new Boo();

console.log(foo.toString());
console.log(boo.toString());
});
