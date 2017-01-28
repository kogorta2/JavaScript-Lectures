(function(){
	"use strict";
	var modules={};
	var ourAwesomeApi={};
	ourAwesomeApi.addModule=addModule;
	ourAwesomeApi.addMethod=addMethod;
	ourAwesomeApi.getModule=getModule;
	window.api=ourAwesomeApi;
	
	function addModule(name,module){
		if(modules[name]){
			throw("Module already exist");
		}
		else{
			var fn= new Function ("return function "+name+"(){}")();
			fn.prototype=module;
			modules[name]=fn;
		}
	}
	
	function addMethod(moduleName,name,method){
		if(!modules[moduleName]){
			throw("Module does not exist");
		}
		else if(modules[moduleName].prototype[name]){
			throw("Module already exist");
		}
		else{
			modules[moduleName].prototype[name]=method;
		}
	}
	
	function getModule(name){
		if(modules[name]){
			return new modules[name]();
		}
		else{
			throw("Module does not exist");
		}
	};
})();

// api.addModule("test",{});
// api.addMethod("test","testMethod",function (){console.log("Hooray")});

// var testModule = api.getModule("test");

// console.log(testModule);

// testModule.testMethod();


(function(){
	api.addModule("regExpServise",{
		hasTextBySample:hasTextBySample,
		getMatches:getMatches,
		getPartedPhone:getPartedPhone,
		checkEveryLineMatch:checkEveryLineMatch
	});
	function hasTextBySample(string,regExp){
		return regExp.test(string);
	};
	function getMatches(string,regExp){
		var str=regExp.toString();
		var newStr=str.substr(1,str.length-2);
		var newRegExp=new RegExp(newStr,"g");
		var arr=arr||[];
		return arr=string.match(newRegExp);
		
		
	};
	function getPartedPhone(string){
		var re=/[0-9]/;
		var arr=getMatches(string,re);
		
		var obj={};
		obj.countryCode=arr[0]+arr[1];
		obj.cityCode=arr[2]+arr[3]+arr[4];
		obj.phone=arr[5]+arr[6]+arr[7]+arr[8]+arr[9]+arr[10]+arr[11];
		return obj;
	};
	function checkEveryLineMatch(string,regExp){};
	
})();


var regExp = api.getModule("regExpServise");
console.log(regExp.hasTextBySample("jfwh2geyerh",/a/));

console.log(regExp.getMatches("477dAAjhn$^^&  GHJjedaa",/a/));
// var testString= api.getModule("hasTextBySample");
// console.log(testString.hasTextBySample("jfwh2geyerh",/a/));
console.log(regExp.getPartedPhone("+22(333)444-55-66"));

(function () {
	api.addModule("dateServices",{
		getDayByDate:getDayByDate,
		isYearLeap:isYearLeap,
		getWeekendsCount:getWeekendsCount
	});
	function getDayByDate(year,month,day){
		var date=new Date(year,month,day);
		var day=date.getDay();
		switch (day) {
			case 0:return "Sunday";
		    case 1:return "Monday";
			case 2:return "Tuesday";
			case 3:return "Wednesday";
			case 4:return "Thursday";
			case 5:return "Friday";
			case 6:return "Saturday";
			default: return "Invalid date"
		}
	};
	function isYearLeap(year){
		var date=new Date(year,2,5);
		var newDate=date.setDate(0);
		if(newDate.getDate==28){
			return false;
		}
		else{return true;}
	};
	function getWeekendsCount(year,month){
		if (month==0||2||4||6||7||9||11){
			return 
		}
	}
	
}) ();
var regExp2=api.getModule("dateServices");
console.log(regExp2.getDayByDate(2000,09,01));
console.log(regExp2.isYearLeap(2000));







