// $("div").each(function(index,element){
	// //$(element);
	// console.log(index,element);
// });

// var target={
	// test:25
// }

// var source1={
	// test1:256,
	// test2:15
// }

// var source2={
	// test2:30,
	// test3:25
// }
// console.log($.extend(target,source1,source2));

// var divsArray=$.makeArray($("div"));
// console.log(divsArray);

// test(1,2,3);
// function test(){
	//console.log(arguments.foreEach);
	// console.log($.makeArray(arguments).foreEach);
// }

// fnWithCallback($.noop);
// function fnWithCallback(callback){
	// console.log("asd");
	// callback("asd");
// }

// var currentTimestamp=new Date().getTime();
// var now=$.now();
// console.log(currentTimestamp);
// console.log(now);

// console.log($.type(""));
// console.log($.type(new RegExp()));

var callbacks=$.Callbacks("once");

var func1=function(data){
	console.log("1",data);
}
var func2=function(data){
	console.log("2",data);
}
var func3=function(data){
	console.log("3",data,this);
}

// //flags "once"
// callbacks.add(func1);
// callbacks.fire("test");
// callbacks.fire("test");

// callbacks.add(func1);
// callbacks.add(func2);

// callbacks.fire("test");

// //flags "once memory"

// var callbacks=$.Callbacks("once memory");
// callbacks.add(func1);
// callbacks.fire("test");
// callbacks.fire("test 2");

// callbacks.add(func1);
// callbacks.add(func2);

// callbacks.fire("test 3");

// //flags "memory"

// var callbacks=$.Callbacks("memory");
// callbacks.add(func1);
// callbacks.fire("test");
// callbacks.fire("test 2");

// callbacks.add(func1);
// callbacks.add(func2);

// callbacks.fire("test 3");

//flags "unique"

// var callbacks=$.Callbacks("unique");
// callbacks.add(func1);
// callbacks.add(func2);
// callbacks.fire("test");

//flags "stopOnFalse"

// var callbacks=$.Callbacks("stopOnFalse");
// callbacks.add(func1);
// callbacks.add(func2);
// callbacks.fire("test");

var callbacks=$.Callbacks();
// callbacks.add(func1);
// callbacks.fire("test");
// callbacks.add(func2);
// callbacks.fire("test 2");
// callbacks.remove(func1);
// callbacks.fire("test 3");
// console.log(callbacks.fired());
// callbacks.add(func3);
// callbacks.fire("test");
// callbacks.fireWith({key:"value"},["test"]);
// console.log(callbacks.fired());
// console.log(callbacks.has(func1));
// console.log(callbacks.has(func3));
// callbacks.add(func1);
// callbacks.add(func2);
// callbacks.add(func3);
// callbacks.fire("test");
// callbacks.empty();
// callbacks.fire("test 2");

// callbacks.add(func1);
// callbacks.add(func2);
// callbacks.add(func3);
// callbacks.disable();
// callbacks.fire("test 2");
// console.log(callbacks.disable());

// callbacks.add(func1);
// callbacks.add(func2);
// callbacks.add(func3);
// callbacks.fire("test 1");
// callbacks.lock();
// callbacks.fire("test 2");
// console.log(callbacks.locked());

// var callbacks=$.Callbacks("memory");
// callbacks.add(func1);
// callbacks.add(func2);
// callbacks.add(func3);
// callbacks.fire("test 1");
// callbacks.lock();
// callbacks.fire("test 2");
// console.log(callbacks.locked());
// callbacks.add(func1);

//promise
var resolver, rejecter;
function callToServer(){
	var promise=$.Deferred();
	console.log(promise);
	resolver=function(){
		promise.resolve("some resolve data");
	}
	rejecter=function(){
		promise.reject("some reject data");
	}
	notifier=function(){
		promise.notify("some notify data");
	}
	return promise.promise();
}

var promise=callToServer();
promise.then(
function resolverFn(data){
	console.log(data);
},
function rejecterFn(data){
	console.log(data);
},
function notifierFn(data){
	console.log(data);
}
);
// setTimeout(resolver,2000);
// setTimeout(rejecter,2100);
// setTimeout(rejecter,2100);
// setTimeout(resolver,2000);
// setTimeout(function(){
	// promise.catch(function(data){
		// console.log(data);
	// });
// },2200);

// promise.done(function done(data){
	// console.log("done",data);
// },function done2(data){
	// console.log("done 2",data);
// })

// promise.fail(function done(data){
	// console.log("fail",data);
// },function done2(data){
	// console.log("fail 2",data);
// })
// promise.progress(function done(data){
	// console.log("progress",data);
// },function done2(data){
	// console.log("progress 2",data);
// })

var promise2=$.Deferred();
promise2.resolve("|| promise 2 data");

// promise.always(function (data){
	// console.log("always",data);
	// console.log(promise.state());
	
// })
console.log(promise.state());

setInterval(notifier,200);
setTimeout(resolver,2000);

$.when(promise,promise2).done(function(data1,data2){
	console.log(data1,data2);
});



























