// var x;
// var y;
// function summ(x,y){
	// var z=x+y;
	// return z;
// }
// var s=summ(3,5);
// console.log(s);

// var x;
// function isPositive(x){
	// return typeof x==='number'&&x>0;
// }
// var positive=isPositive(-5);
// console.log(positive);
// console.log(isPositive(8));

// var x;
// function toBoolean(x){
	// var y=!!x;
	// return y;
// }
// var bool=toBoolean('string');
// console.log(bool);
// console.log(toBoolean(''));

// var x;
// function toBoolean(x){
	
	// return !!x;
// }

// function greeting(name){
	// if (typeof name==='string'&&!!name){
		// return 'Hello, '+name;
	// }
	// else{console.log('Wrong name');}
	
// }


// function square(x){
	// if (typeof x==='number'){
		// var s=x*x;
		// return s;
		 // console.log('Square x=',s);
	// }else{console.log('Wrong x');}
// }

// function powerOrNot(x){
	// var s;
	// switch (true){
		// case x%2===0:
		// s=x*x;
		
		// break;
		// case x%3===0:
		// s=x*x*x;
		
		// break;
		// default:
		// s=x;
		
		// break;
	// }
	// return s;
// }
// console.log(powerOrNot(3));

// console.log(greeting('vasya'));
// console.log(greeting(null));
// console.log(greeting(12));
// console.log(greeting(''));

// console.log(square(2));
// console.log(square(''));
// console.log(square(null));
// console.log(square(0));
// console.log(square(-5));

// console.log(powerOrNot(2));
// console.log(powerOrNot(3));
// console.log(powerOrNot(6));
// console.log(powerOrNot(5));


function getType(x){
	switch(true){
		case x===number:
		//console.log('number');
		return 'number';
		break;
		
		case typeof x==='string':
		console.log('string');
		return x;
		break;
		
		case typeof x==='boolean':
		console.log('boolean');
		return x;
		break;
		
		case isNaN(x):
		console.log('NaN');
		return x;
		break;
		
		case Array.isArray(x):
		console.log('Array');
		return x;
		break;
		
		case x==null:
		console.log('null');
		return x;
		break;
		
		case typeof x==='object':
		console.log('object');
		break;
	}
}
//console.log(getType({}));


// function getLengthOfHyp(x1,x2,y1,y2,x3,x4,y3,y4){
	// if (x1==x3&&y1==x3){
		// var k1=x4-x1;
		// var k2=y2-y3;
		// var g=Math.sqrt(k1*k1+k2*k2);
	// }
// }

console.log(getType(null));
console.log(getType(NaN));
console.log(getType([1,2,3]));
console.log(getType(undefined));
console.log(getType(''));
console.log(getType(123));
console.log(getType(0));
console.log(getType(function (){}));
console.log(getType({}));
















