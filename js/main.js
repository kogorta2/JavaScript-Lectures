// var t="EW3#$%%%55etweerRErf4uhfhyg  WRE5W56HDKJF";
// var arr=t.split("");
// for(var i=0;i<arr.length;i++){
	// arr[i]=arr[i].toString().toLowerCase();
	// //arr[i]=x;
// }
// console.log(arr);
// console.log(t.length);

// var filename="text.txt";
// console.log(filename.match(/.\w+$/g));
// var filename="text.jpg";
// console.log(filename.match(/.jpg|png|gif$/g));

// var currentDate=new Date();
// console.log(currentDate);
// console.log(new Date(1000));
// console.log(new Date(-100000000));
// console.log(new Date(2000,0,1,0,0,0,0));
// console.log(new Date(2000,0,1));
// console.log(new Date("2000-01-01T00:00:01.500+02:00"));
// console.log(new Date("2000-01-01"));
// console.log(currentDate.getFullYear());
// console.log(currentDate.getMonth());
// console.log(currentDate.getDate());
// console.log(currentDate.getHours());
// console.log(currentDate.getMinutes());
// console.log(currentDate.getSeconds());
// console.log(currentDate.getMilliseconds());
// console.log(currentDate.getDay());
// console.log(currentDate.getTime());
// console.log(currentDate.getTimezoneOffset());

// console.log(new Date());
// console.log(new Date().getHours());
// console.log(new Date().getUTCHours());

// var date=new Date(2000,0,0);
// date.setFullYear(2001);
// console.log(date);
// date.setMonth(2);
// console.log(date);
// date.setDate(5);
// console.log(date);
// date.setHours(10);
// console.log(date);
// date.setMinutes(15);
// date.setSeconds(30);
// console.log(date.getMilliseconds());
// date.setMilliseconds(350);
// console.log(date.getMilliseconds());

// var date=new Date(2000,0,0);
// date.setDate(5);
// console.log(date);
// date.setDate(35);
// console.log(date);
// date.setDate(0);
// console.log(date);
// date.setDate(-1);
// console.log(date.getDay());

// var date1=new Date(2000,0,0);
// var date2=new Date(2000,0,0,0,0,0,500);
// console.log(date1>date2);//false
// console.log(date1-date2);//500

// console.log(date1.getDay()===date2.getDay());

"use strict";
// function test(arg1,arg2){
	// console.log(this);
	// if(arg1||arg2){
		// console.log(arg1,arg2);
	// }
// }
// test();

// var obj={
	// method:test
// }
// obj.method();
// test();
// var object={
	// key:"value"
// }
// test.call(object);
// test.apply(object);

// test.call(object,"call","test");
// test.apply(object,["call","test"])

// function mediator(number1,number2){
	// if(number1>0){
		// return summ.apply(this,arguments);
	// }
	// else{
		// return multiply.apply(this,arguments);
	// }
// }

// function summ(number1,number2){
		// return number1+this.number+number2;
	// }
// function multiply(number1,number2){
		// return number1*this.number*number2;
	// }
// var object2={
	// number:10
// }

// //console.log(mediator.call(object2,10,10));
// //console.log(mediator.call(object2, -1,10));

// var bindedMediator=mediator.bind(object2);
// console.log(bindedMediator(10,10));
// console.log(bindedMediator(-1,10));
// object2.number=25;
// console.log(bindedMediator(10,10));

// var obj={
	// mediator:mediator
// }

// var bindedMediator=obj.mediator.bind(object2);

// console.log(bindedMediator(10,10));
// obj.mediator=function(){return this};
// console.log(bindedMediator(10,10));

// function bindLater(context,methodname){
	// return function(){
		// return context[methodname].apply(this,arguments);
	// }
// }

// var bindedMediator=bindLater(obj,"mediator").bind(object2);

// console.log(bindedMediator(10,10));
// obj.mediator=function(){return this};
// console.log(bindedMediator(10,10));



// document.querySelector("img").addEventListener("click",
// function(){
	// console.log(this);
// })
// function listener(){
	// console.log(this);
// }
// listener();
// document.querySelector("img").addEventListener("click",listener)
// document.querySelector("span").addEventListener("click",listener)

// var object={
	// counter:0,
	// increment:function(number){
		// this.counter+=number;
		// console.log(this.counter);
		// return this;},
	// decrement:function(number){
		// this.counter-=number;
		// console.log(this.counter);
		// return this;}
// }

// object.increment(10).decrement(5).decrement(1).increment(8);

// function fn1(callback,argument){
	// argument="Argument "+argument;
	// callback(argument);
// }
// function fn2(argumant){
	// console.log(argumant);
// }

// fn1(fn2,"sample text");

// function closureWithTimeout(){
	// var x=10;
	// setTimeout(function(){
		// console.log(x);
	// },2000);
// }
// //closureWithTimeout();

// function closureWithListener(){
	// var x=10;
	// document.querySelector("img").addEventListener("click",function(){
		// x++;
		// console.log(x);
	// });
// }
// closureWithTimeout();

// function closureWithJS(){
	// var x=10;
	// return function(){
		// x++;
		// console.log(x);
	// }
// }

// var JSClosuredFn1=closureWithJS();
// JSClosuredFn1();
// JSClosuredFn1();
// var JSClosuredFn2=closureWithJS();
// JSClosuredFn2();
// JSClosuredFn2();
// JSClosuredFn2();

// (function(){
	// var myApplication={};
	// myApplication.modules={};
	// myApplication.method1=function(){console.log(1)};
	// myApplication.method2=function(){console.log(2)};
	// myApplication.method3=function(){console.log(3)};
	// myApplication.methodN=function(){console.log("N")};
	// myApplication.addMethod=function(name,method){
		// if(!myApplication[name]&&typeof method==="function"){
			// myApplication[name]=method;
		// }
	// };
	// myApplication.addModule=function(name,module){
		// if(!myApplication.modules[name]){
			// myApplication.modules[name]=module;
		// }
	// };
	// myApplication.getModule=function(name,module){
		// if(!myApplication.modules[name]){
		// return myApplication.modules[name]=module;}
		// else
            // throw ("Module does not exist");	
		
	// }
	// window.myApplication=myApplication;
// })();

// myApplication.method1();
// myApplication.method2();
// myApplication.method3();
// myApplication.methodN();

// myApplication.addMethod("getDate",function(){return new Date()});
// console.log(myApplication.getDate());

// myApplication.addModule("classWorker",{
	// addClass:function(className){console.log(className,"added")},
	// removeClass:function(className){console.log(className,"removed")}
// });

// var classWorker=myApplication.getModule("classWorker");

// classWorker.addClass("test");
// classWorker.removeClass("rest");

function getType(entity){
	return {}.toString.call(entity).slice(8,-1);
}
console.log(getType(new Date()));
console.log(getType(/a/));
































