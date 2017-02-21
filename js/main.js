// function Animal(name, type, weight, maxSpeed){
	// var name=name;
	// this.getName=function (){
		// return name;
    // }
	// var type=type;
	// this.getType=function (){
		// return type;
	// }
	// var weight=weight;
	// this.getWeight=function (){
		// return weight;
	// }
	// var maxSpeed=maxSpeed;
	// this.getMaxSpeed=function (){
		// return maxSpeed;
	// }
	// this.setWeight=function (newWeight){
		// weight=newWeight;
	// }
	// var speed=maxSpeed;
	// this.run=function (nowSpeed){
		// if(nowSpeed<=maxSpeed&&nowSpeed>0&&nowSpeed!==undefined){
            // speed=nowSpeed;
		// }
		
        // else{
			// return speed;
		// }
		
	// }
	// this.coverDistance=function (distance){
		// var rez=distance/this.run();
		// return rez;
	// }
// }
// var myAnimal=new Animal("Puh","cat",5,10);
// console.log(myAnimal.getName());
// console.log(myAnimal.getType());
// console.log(myAnimal.getWeight());
// console.log(myAnimal.getMaxSpeed());
// myAnimal.setWeight(7);
// console.log(myAnimal.getWeight());
// myAnimal.run(5);
// console.log(myAnimal.run());
// console.log(myAnimal.coverDistance(50));

function Animal(name, type, weight, maxSpeed){
	this._name=name;
	this._type=type;
	this._weight=weight;
	this._maxSpeed=maxSpeed;
	this._speed=maxSpeed;
	}

Animal.prototype = {
	getName:function (){
		return this._name;
	},
	getType:function () {
		return this._type;
	},
	getWeight:function (){
		return this._weight;
	},
	getMaxSpeed:function (){
		return this._maxSpeed;
	},
	setWeight:function (newWeight){
		this._weight=newWeight;
	},
	run:function (nowSpeed){
		if(nowSpeed<=this._maxSpeed&&nowSpeed>0&&nowSpeed!==undefined){this._speed=nowSpeed;}
		else{if(nowSpeed<=0||nowSpeed>this._maxSpeed){throw "Error";}
			else{return this._speed;}}
	},
	coverDistance:function (distance){
		return distance/this.run();
	}
}

var myAnimal=new Animal("Puh","cat",5,10);
// console.log(myAnimal.getName());
// console.log(myAnimal.getType());
// console.log(myAnimal.getWeight());
// console.log(myAnimal.getMaxSpeed());
// myAnimal.setWeight(7);
// console.log(myAnimal.getWeight());
// myAnimal.run(3);
// console.log(myAnimal.run());
// console.log(myAnimal.coverDistance(50));

function Bird(name, type, weight, maxSpeed, maxFlySpeed){
	Animal.apply(this,arguments);
	this._maxFlySpeed=maxFlySpeed;
	this._canFly=maxFlySpeed;
	
}

Bird.prototype=Object.create(Animal.prototype);

Bird.prototype.constructor=Bird;

Bird.prototype.fly=function (canFly){
		if(canFly<=this._maxFlySpeed&&
		   canFly>0&&
		   canFly!==undefined){this._canFly=canFly;}
		else{if(canFly<0||canFly>this._maxFlySpeed){throw "This is error!";}
			else{if(canFly==false){throw "Bird doesn't move";}
				else{return this._canFly;}}}
	}
	
Bird.prototype.coverDistance=function (distance){
		var speedRun=Animal.prototype.run.call(this);
		 if(this.fly()>=speedRun){return distance/this.fly();}
		else{return distance/speedRun;}

	}


var myBird=new Bird("Wik","sparrow",0.03,0.3,10);
// console.log(myBird instanceof Bird);
// console.log(myBird.getName());
// console.log(myBird.getType());
// console.log(myBird.getWeight());
// console.log(myBird.getMaxSpeed());
// myBird.fly(4);
// console.log(myBird.fly());
// myBird.run(0.3);
// console.log(myBird.run());
// console.log(myBird.coverDistance(10));

function Zoo(cagesAmount,birdCagesAmount){
	this._cagesAmount=cagesAmount;
	this._birdCagesAmount=birdCagesAmount;
	this._allAnimal=[]||0;
    this._allBird=[]||0;
	this._newAnimal={};
	this._zooClock=new Date();
	this._allHungry=[]||0;
}

Zoo.prototype={
	setClockTime:function(hour,minute){
		this._zooClock.setHours(hour,minute);
	},
	addAnimal:function(newAnimal){
		this._newAnimal=newAnimal;
		var time=new Date(2017,0,0);
		this._newAnimal._time=time;
		if(newAnimal instanceof Bird){
			if(this._allBird.length<this._birdCagesAmount){
				this._allBird.push(this._newAnimal);
			}
			else{
				throw "Cages for bird aren't enough";
			}
		}
			
		else{if(newAnimal instanceof Animal){
				if(this._allAnimal.length<this._cagesAmount){
					 this._allAnimal.push(this._newAnimal);
				}
				else{
					throw "Cages for animal aren't enough";
				}
			}
		}return [this._allAnimal,this._allBird];
	},
	feedAnimal:function(name){
		for(var i=0;i<this._allAnimal.length;i++){
				if(this._allAnimal[i]._name==name){
					var time=new Date();
					this._allAnimal[i]._time=time;
			    }
		}
		for(var i=0;i<this._allBird.length;i++){
				if(this._allBird[i]._name==name){
					var time=new Date();
					this._allBird[i]._time=time;
				}
		}
		return [this._allAnimal,this._allBird];
	},
	getHungryAnimal:function(){
		for(var i=0;i<this._allAnimal.length;i++){
			if(this._zooClock-this._allAnimal[i]._time>=14400000){
			this._allHungry.push(this._allAnimal[i]._name);
			}
		}
	for(var i=0;i<this._allBird.length;i++){
			if(this._zooClock-this._allBird[i]._time>=14400000){
			this._allHungry.push(this._allBird[i]._name);
			}
		}
		return this._allHungry.join(", ");
		
	}
}
var myBird1=new Bird("Wik1","sparrow",0.03,0.3,10);
var myBird2=new Bird("Wik2","sparrow",0.03,0.3,10);
var myBird3=new Bird("Wik3","sparrow",0.03,0.3,10);
var myBird4=new Bird("Wik4","sparrow",0.03,0.3,10);
var myBird5=new Bird("Wik5","sparrow",0.03,0.3,10);
var myBird6=new Bird("Wik6","sparrow",0.03,0.3,10);
var myAnimal1=new Animal("Puh1","cat",5,10);
var myAnimal2=new Animal("Puh2","cat",5,10);
var myAnimal3=new Animal("Puh3","cat",5,10);
var myAnimal4=new Animal("Puh4","cat",5,10);
var myAnimal5=new Animal("Puh5","cat",5,10);
var zoo=new Zoo(30,30);
zoo.setClockTime(01,01);
zoo.addAnimal(myBird1);
zoo.addAnimal(myBird2);
zoo.addAnimal(myBird3);
zoo.addAnimal(myBird4);
zoo.addAnimal(myBird5);
zoo.addAnimal(myBird6);
zoo.addAnimal(myAnimal1);
zoo.addAnimal(myAnimal2);
zoo.addAnimal(myAnimal3);
zoo.addAnimal(myAnimal4);
zoo.addAnimal(myAnimal5);
//console.log(zoo.addAnimal());
zoo.feedAnimal("Wik1");
zoo.feedAnimal("Puh1");
//console.log(zoo.feedAnimal());
zoo.setClockTime(13,03);
//console.log(zoo.feedAnimal());
//console.log(zoo.getHungryAnimal());






$(document).ready(function(){

	// function validateAndSubmit() {
		// $('#Form').submit(function(e){e.preventDefault()})
		// // // $('#Form').submit(function(){if($("#Phone").val()=="fff"){
			// // // //$("#Phone").remove();
			// // // $("#Phone").prop("disabled",true)
			// // // }});
		// // // // var allInput=$('label>input');
		// // // // console.log(allInput);
		// $('div').addClass('invalid');
		
		
	// }
	$('submit').on('click', function validateAndSubmit(){$('#Form').submit(function(e){
		e.preventDefault();})});
	
	
	
	

});

