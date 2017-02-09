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
		if(nowSpeed<=this._maxSpeed&&nowSpeed>0&&nowSpeed!==undefined){
			this._speed=nowSpeed;
		}
		else{
			return this._speed;
		}
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
myAnimal.setWeight(7);
console.log(myAnimal.getWeight());
myAnimal.run(5);
console.log(myAnimal.run());
console.log(myAnimal.coverDistance(50));














