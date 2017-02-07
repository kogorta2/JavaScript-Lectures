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


// var regExp = api.getModule("regExpServise");
// console.log(regExp.hasTextBySample("jfwh2geyerh",/a/));

// console.log(regExp.getMatches("477dAAjhn$^^&  GHJjedaa",/a/));
// var testString= api.getModule("hasTextBySample");
// console.log(testString.hasTextBySample("jfwh2geyerh",/a/));
// console.log(regExp.getPartedPhone("+22(333)444-55-66"));

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
		var dayOff=0;
		var monthLength=new Date(year,month+1,0).getDate();
		
		for(var i=1;i<monthLength+1;i++){
			var getDay=new Date(year,month,i).getDay();
			if(getDay===0||getDay===6){
				dayOff++;
				}
		}
		return dayOff;
	};
	
}) ();
// var regExp2=api.getModule("dateServices");
// console.log(regExp2.getDayByDate(2000,09,01));
// console.log(regExp2.isYearLeap(2000));
// console.log(regExp2.getWeekendsCount(2017,1));



( function () {
	api.addModule("commonServices",{
		getTypeOf:getTypeOf,
		combine:combine,
		limitTo:limitTo
	});
	function getTypeOf(elem){
		return {}.toString.call(elem).slice(8, -1);
	};
	function combine(elem1,elem2,stringSeparator){
		var type=getTypeOf(elem1);
		switch (type) {
			case "String":
				return elem1+elem2;
				break;
			case "Number":
				return elem1+elem2;
				break;	
			case "Array":
			    var arr=elem1.concat(stringSeparator,elem2);
				return arr;
				break;
			case "Object":
			    return Object.assign(elem1,elem2);
				break;	
			default: return [elem1,elem2];
		}
	};
	function limitTo(elem,limit){
		var type=getTypeOf(elem);
		switch (type) {
			case "String":
				if(elem.length>limit){
					var str=elem.substr(0,limit);
					return str;
					}
				else{return elem;}
				break;
			case "Number":
				if(elem>limit){return limit;}
				else{return elem;}
				break;
			case "Array":
				if(elem.length>limit){
					var arr=elem.slice(0,limit);
					return arr;
				}
				else{return elem;}
			default: return elem;
		}
	}
}) ();

// var common=api.getModule("commonServices");
// console.log(common.getTypeOf(1));
// console.log(common.combine({1:1,2:2},{3:3,4:4}));
// console.log(common.combine(1,-5));
// console.log(common.combine("I am"," walking"));
// console.log(common.combine([1,2],[3,4],"T"));
// console.log(common.limitTo("12345678gggggg",8));
// console.log(common.limitTo(8.8,8.1));
// console.log(common.limitTo([1,2,3,4,5,6,7,8,9,10],8));
// console.log(common.limitTo(null,8));

(function () {
	api.addModule("arrayServises",{
		filterByField:filterByField,
		findByField:findByField,
		sortByField:sortByField
	});
	function filterByField(array,field){
		var newAllArr=[];
		for(var i=0;i<array.length;i++){
			if(!array[i][field]===false||null||undefined){
				newAllArr.push(array[i]);
			}
		}
			return newAllArr;
	};
	function findByField(array,field,value){
		for(var i=0;i<array.length;i++){
			if(array[i][field]===value){
				return array[i];
			}
		}
		
	};
	function sortByField(array,field,direction){
		function getTypeOf(elem){
		return {}.toString.call(elem).slice(8, -1);
		}
		var type=getTypeOf(array[field]);
			switch (type){
				case "Number":
					array.sort(function(a,b){return (+a.field)-(+b.field);})
				break;
				case "String":
					array.sort(function(a,b){return a.field>b.field?1:(a.field<b.field?-1:0);})
				break;
				case "Date":
					array.sort(function(a,b){return new Date(+a.field)-new Date(+b.field);})
				break;
			}
			if (direction==="ascending"){return array;}
			else{return array.reverse();}
		
	};
	
}) ();

var arraySer=api.getModule("arrayServises");
console.log(arraySer.filterByField([{1:1,2:null},{1:1,2:2}],2));
console.log(arraySer.findByField([{1:1,2:null},{1:1,2:2}],2,0));
console.log(arraySer.findByField([{1:1,2:null},{1:1,2:2}],2,null));
console.log(arraySer.sortByField([{"name":"Oksana","age":20,"date":1997-04-03},
							{"name":"Oleg","age":30,"date":1987,11,30},
							{"name":"Franc","age":18,"date":'1999,06,10'},
							{"name":"Lucas","age":9,"date":'2008,10,01'},
							{"name":"Mike","age":38,"date":'1978,08,04'}],"date","ascending"));





