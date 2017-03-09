var $anim1=$(".animate1");
var $anim2=$(".animate2");
var $anim3=$(".animate3");

//$anim1.hide(4000);

// $anim1.hide(4000, function (){
	// $anim1.show(1000);
// });

// $("h1").on("click",function(){
	// $anim1.toggle(1000);
// });


// $("h1").on("click",function(){
	// $anim1.stop().toggle(1000);
// });

// $("h1").on("click", function () {
	
	// $anim1.stop().toggle(1000);
	// $anim2.stop().slideToggle(1000);
	// $anim3.stop().fadeToggle(1000);
	// $(this).fadeTo(500,0.5,"swing",function(){
		// alert("complete");
	// });
// })

//$anim2.slideUp().slideDown();

//$anim3.fadeOut().fadeIn();

// $anim1.fadeOut({
	// duration:1000,
	// queue:true,
	// step:function(param1,param2){
		// console.log(param2.prop,param2.now,param2.end);
		// console.log(param1,param2);
	// },
	// done:function(promise){
		// promise.then(function(){
			// console.log("All ok");
		// }).done(function(){
			// console.log("All nice");
		// });
	// }
// })

// $anim1.animate({"width":"25%"}).fadeOut({
	// duration:1000,
	// queue:true
// }).slideUp({
	// duration:1000,
	// queue:false
// })

// $anim1.fadeOut({
	// duration:1000,
	// queue:true
// }).slideUp({
	// duration:1000,
	// queue:false
// })

// $anim3.css("position","relative").animate({
	// width:"50%",
	// height:"100px",
	// left:"100px"
// },400,"swing",function(){
	// alert("complete");
// })

// $("body").animate({
	// "scrollTop":500
// })

// $.ajax("http://www.mocky.io/v2/58c19622110000a91663f036").done(function(response){
	// alert(response);
// })

//$anim3.delay(2000).fadeOut(1000);

// $anim3.delay(2000).queue(function(){
// $(this).css("background","red");
// }).fadeOut(1000);

// $anim3.delay(2000).queue(function(){
// $(this).css("background","red").dequeue();
// }).fadeOut(1000);



// $("h1").on("click",function(){
	// $anim3.css({"width":"100%","height":"300px"});
	// $anim3.stop(true).animate({"height":"100px"},1000).animate({"width":"25%"},1000);
// })

// $("h1").on("click",function(){
	// $anim3.css({"width":"100%","height":"300px"});
	// $anim3.stop().animate({"height":"100px"},1000).animate({"width":"25%"},1000);
// })

// $("h1").on("click",function(){
	// $anim3.css({"width":"100%","height":"300px"});
	// $anim3.finish().animate({"height":"100px"},1000).animate({"width":"25%"},1000);
// })

// $.ajax("http://www.mocky.io/v2/58c19622110000a91663f036").done(function(response){
	// alert(response);
// })

// //JSON

// {
	// "key":"value",
	// "key2":true,
	// "someKey"{
		// "someInnerKey":256
	// },
	// "array":[1,2,3]
// }

// //XML
// <container>
  // <key>value</key>
  // <key2>true</key2>
  // <someKey>
     // <someInnerKey></someInnerKey>
  // </someKey>
  // <array>
     // <value>1</value>
     // <value>2</value>
     // <value>3</value>
  // </array>
// </container>

//Query parameters

//http://www.mocky.io/v2/58c19622110000a91663f036?param=value1&param2=value2#test

//  /deleteSomeEntity/entityId
// console.log($.now());
// $.ajax({
	// url:"http://www.mocky.io/v2/58c1aab2110000b31863f08a",
	// async:true,
	// beforeSend:function(jqXHR,settings){
		// // console.log(jqXHR);
		// // jqXHR.someCustomData="text";
		// // console.log(settings);
	// },
	// cache:true,
	// complete:function(jqXHR,status){
		// console.log(jqXHR,status);
	// },
	// data:{
		// key1:"value1",
		// key2:"value2"
	// },
	// method:"POST",
	// dataType:"json",
	// error:function(jqXHR,errorStatus,errorText){
		// console.log(jqXHR,errorStatus,errorText);
	// },
	// global:true,
	// headers:{
		// "My-header":"test"
	// },
	// statusCode:{
		// 200:function(){
			// alert("All Ok")
		// },
		// 404:function(){
			// alert("Not found")
		// }
	// }
// }).done(function(data,status,jqXHR){
	// //console.log(data);
	// //console.log(jqXHR);
// })
// console.log($.now());
// $("h1").fadeOut(10000);

$(document).on("ajaxStart",function(){
	console.log("start");
}).on("ajaxStop",function(){
	console.log("stop");
}).on("ajaxSuccess",function(){
	console.log("Success")
})

$.ajax("http://www.mocky.io/v2/58c19622110000a91663f036?param=value1&param2=value2#test")
$.ajax("http://www.mocky.io/v2/58c19622110000a91663f036?param=value1&param2=value2#test")
$.ajax("http://www.mocky.io/v2/58c19622110000a91663f036?param=value1&param2=value2#test")













