(function(){
	"use strict";
	angular.module("app",[
	"price",
	"toHtml",
	"myComponent",
	"ScrollService",
	"scrollToTop"
	]).run(function($templateCach){
		$templateCach.put('myTamplate.html','This is the<br/> contant of');
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
	myCtrl.$inject=["$scope","$filter","$http","$q","$sce","$templateCache","$interval","testConstant","testConstant2","massage","massages","ScrollService"];
	function myCtrl($scope,$filter,$http,$q,$sce,$templateCache,$interval,testConstant,testConstant2,massage,massages){
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
		
		console.log(testConstant);
		console.log(testConstant2);
		
		myCtrl.options=[
			{value:"",label:"Select item"},
			{value:"item1",label:"Item1 label"},
			{value:"item2",label:"Item2 label"},
			{value:"item3",label:"Item3 label"},
			{value:"item4",label:"Item4 label"},
			{value:"item5",label:"Item5 label"},
			{value:"item6",label:"Item6 label"},
			
		]
		
		myCtrl.onBlur=onBlur;
		myCtrl.askUser=askUser;
		myCtrl.usersFilterMethod=usersFilterMethod;
		myCtrl.getMassage=getMassage;
		myCtrl.getMassagesCount=getMassagesCount;
		
		function getMassage(){
			return massages.massage;
		}
		
		function getMassagesCount(){
			return massages.list.length;
		}
		
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

(function (){
	"use strict";
	
	angular.module("app")
	.constant("testConstant","testConstantValue")
	.constant("testConstant2",{
		"key1":"value1",
		"key2":"value2"
	})
})();

(function(){
	angular.module("app")
	.value("massage","")
	.value("massages",{
		list:[]
	})
})();

(function(){
	"use strict";
	
	angular.module("app")
	.controller("massagesController",massagesController);
	
	massagesController.$inject=["massage","massages","ScrollService"];
	function massagesController(massage,massages,ScrollService){
		var massagesController=this;
		
		massagesController.massageField="";
		
		massagesController.sendMassage=sendMassage;
		
		function sendMassage(newMassage){
			massage.list.push(newMassage);
			massages.massage=newMassage;
		}
	}
})();

(function(){
"use strict";

	angular.module("ScrollService",[])
	.service("ScrollService",ScrollService);
	
	ScrollService.$inject=["testFactory"];
	function ScrollService(testFactory){
	return{
		scrollTop:scrollTop
		}
		
		function scrollTop(position){
			console.log(testFactory);
			testFactory.method();
		$("body").animate({"scrollTop":position},500);
		}
	}
	
	
})();

(function(){
	"use strict";
	angular.module("app")
	.factory("testFactory",testFactory);
	
	function testFactory(){
	return{
		key1:"value1",
		key2:"value2",
		obj:{"test":"rest"},
		method:method
		}
		
		function scrollTop(position){
		$("html,body").animate({"scrollTop":position},500);
		}
	}
	
})();

(function(){
	"use strict";
	
	angular.module("app")
	.component("myMassanger",myMassanger());
	
	function myMassanger(){
		myMassangerCtrl.$inject=["massages"];
		return{
			templateUrl:"componentTemplate.html",
			//template:"<div><h1>{{myMassanger.myTitle}}</h1></div>",
			controller:myMassangerCtrl,
			controllerAs:"myMassanger",
			transclude:false,
			bindings:{
				title:"@",
				onMassageSent:"&"
			}
		}
		
		function myMassangerCtrl(){
			var myMassangerCtrl=this;
			
			myMassangerCtrl.massageField="";
			
			myMassangerCtrl.sendMassage=sendMassage;
			
			function sendMassage(massage){
				myMassangerCtrl.onMassageSent({"massage":massage});
				massages.massage=massage;
				massages.list.push(massage);
			}
		}
	}
	
})();


(function(){
	"use strict";
	
	angular.module("scrollToTop",["ScrollService"])
	.directive("scrollToTop",scrollToTop);
	
	scrollToTop.$inject=["ScrollService"];
	
	function scrollToTop(ScrollService){
		return {
			restrict:"A",
			link:link
			//scope:false
		}
		function link($scope,$element){
			$element.on("click",function(){
				ScrollService.scrollToTop(0);
			})
			
		}
	}
	
	
})();


(function(){
	"use strict";
	
	angular.module("app")
	.factory("myInterceptors",myInterceptors);
	.config("$httpProvider",interceptorsConfig);
	
	myInterceptors.$inject=["$q"];
	function myInterceptors($q){
		return{
			request:function(config){
				console.log(config);
				return config;
			},
			response:function(response){
				return response;
			},
			requestError:function(rejectReason){
				return $q.reject(rejectReason);
			},
			responseError:function(response){
				return $q.reject(response);
			}
		}
	}
	
	interceptorsConfig.$inject=["$httpProvider"];
	function interceptorsConfig($httpProvider){
		$httpProvider.interceptors.push('myInterceptors');
	}
	
})();

























