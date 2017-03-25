(function(){
	"use strict";
	angular.module("app",[
	"price"
	]).run(function($templateCach){
		$templateCach.put('myTamplate.html','This is the<br/>');
	});
})();

(function(){
	"use strict";
	angular.module("price",[])
	.filter("price",price);
	
	function price(){
		return function (number,symbol){
			return(symbol||"$")+number;
		};
	}
})();


(function(){
	"use strict";
	angular.module("toHtml",[])
	.filter("toHtml",toHtml);
	toHtml.$inject=["$sce"];
	
	function toHtml($sce){
		return function (html){
			return $sce.trustAsHtml(html);
		};
	}
})();

(function(){
	"use strict";
	angular.module("app")
	.controller("myCtrl",myCtrl);
	myCtrl.$inject=["$scope","$filter","$http","$q","$sce","$templateCache","$interval"];
	function myCtrl($scope,$filter,$http,$q,$sce,$templateCache,$interval){
		var myCtrl=this;
		myCtrl.price=$filter("price")(25,"#");
		myCtrl.serverData={};
		myCtrl.userAction="";
		myCtrl.html=$sce.trustAsHtml("<h1>test text</h1>");
		myCtrl.html2=$sce.trustAsHtml($templateCache.get("myTemplate.html"));
		myCtrl.timer=new Date().getSeconds();
		myCtrl.date=$.now();
		myCtrl.usersFilter="";
		myCtrl.names=[];
		myCtrl.selectedOption="";
		myCtrl.imageSrc="";
		
		myCtrl.options={
			{value:"",lable:"Select item"},
			{value:"item1",lable:"Select item1"},
			{value:"item2",lable:"Select item2"},
			{value:"item3",lable:"Select item3"},
			{value:"item4",lable:"Select item4"},
			{value:"item5",lable:"Select item5"},
			{value:"item6",lable:"Select item6"},
			
		}
		
		myCtrl.onBlur=onBlur;
		myCtrl.askUser=askUser;
		myCtrl.usersFilterMethod=usersFilterMethod;
		
		function onBlur($event){
			console.log($event);
		}
		
		function usersFilterMethod(elem, index, array){
			return ~elem.name.toLowerCase().indexOf(myCtrl.usersFilter.toLowerCase());
		}
		
		$scope.$applyAsync(function(){
			myCtrl.serverData={"myKey1":"asdasd"};
		})
		
		$http
		.get("http://www.mocky.io/v2/58d4161a100000db0cd7a6b5")
		.then(function(data){
			console.log(data);
			myCtrl.serverData=data.data;
		});
		
		function askUser(){
			myModal().then(function(userAnswer){
				myCtrl.userAction=userAnswer;
				myCtrl.imageSrc=imageSrc;
			})
		}
		
		function myModal(){
			var deffered=$q.defer();
			setTimeout(function(){
				deffered.resolve("user click ok");
			}, 5000);
			return deffered.promise;
		}
		
		setInterval(function(time){
			console.log(time);
			myCtrl.timer=new Date().getSeconds();
		},1000,5,true,new Date().getSeconds() );
		
	}
	
})();


















