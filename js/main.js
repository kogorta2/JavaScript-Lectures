// function fn(){    //it is function//function declaration;
	
// }
// var object={};//[],{},function();
// object.method=function(){};//it is method;
// var functionX=function (){};//it is functional expresion;
// var functionY=function fnName (){;//it is name functional expresion;
	// if(true){
		// fnName();
	// }
// };

// var newFnName=new Function("x","return x");
// console.log(newFnName(256));

// (function(){
	// console.log("test1");
// })();

// var test=(function privetName(x){
	
	// if(x<10){
	// return	privetName(x+1);
		
	// }
	// return x;
// })(0);

// console.log(test);

// var arrayWithFunctions=[
// function(){return 0;},
// function(){return 1;},
// function(){return 2;},
// ];
// arrayWithFunctions.methodOfArray=function(){
	// return"I am a method";                       //объявление метода
// }
// console.log(arrayWithFunctions[1]());
// console.log(arrayWithFunctions.methodOfArray());

// function fnName(){
	// return "I am a function";
// }
// fnName.methodOfFunction=function(){
	// return "I am a method";
// }
// console.log(fnName());
// console.log(fnName.methodOfFunction());
// console.log(fnName['methodOfFunction']());

// console.log(fnName);

// var newFunction = fnName;
// console.log(fnName());
// console.log(fnName.methodOfFunction());
// console.log(fnName['methodOfFunction']());

// console.log(fnName);

// fnName = null;

// var obj={
	// x:10
// }
// console.log(obj.x);
// changeX(obj);
// function changeX(obj){
	// obj.x=25;
// }
// console.log(obj.x);

// var x=10;
// var y=x;
// console.log(x);
// x++;
// changeX(x);
// function changeX(tast){
	// test=25;
// }
// console.log(x);
// console.log(y);

// var x=true?function(){return 25;}():false;
// console.log(x);

// var fn=x==25&&function(){return 50};
// console.log(fn);

// function test(number, name){
	// console.log(arguments);
	// console.log(number+=10);
	// console.log('hello',name);
	// var x=Array.apply(null,arguments);
	// console.log(x);
// }
// test(1,'ivan',2,null,[],265,'test');

function getAllNulls(array){
	if(!Array.isArray(array)){
		throw('attribute array is not array');//генегатор ошибки
	}
	var nullsArray=[];
	for(var i=0;i<array.length;i++){
		if(array[i]===null){
			nullsArray.push(array[i]);
		}
	}
	return nullsArray;
}
console.log(getAllNulls([1,23,'asd',null,undefined,[1,2,null],{"null":null},null]);)



















