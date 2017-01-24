//--------------------------------5.1-----------------------------------------
// function findBiggestApple(tree){
	// var allAppleOfTree=[];
	// function pickApple(a){
		// for(var i=0;i<a.length;i++){
			// if(typeof(a[i])!=="object"){
				// allAppleOfTree.push(a[i]);
			// }
			// else{pickApple(a[i]);}
		// }
		// return allAppleOfTree;
	// }
	// var b=pickApple(tree);
	// b.sort(function(a,b){return a-b;});
	// return b[b.length-1];
// }
// console.log(findBiggestApple([-10,2,6,[9,10],[1,6,[14,101],[0,-5],15],[415,5],0]));

//--------------------------------5.2------------------------------------------
// function getObjectValues(string){
	// var allObjectValues=[];
	// function pickObjectValues(a){
	    // for(var key in a){
			// if(typeof(a[key])!=="object"){
				// allObjectValues.push(a[key]);
			// }
			// else{pickObjectValues(a[key]);}
		// }
		// return allObjectValues;
	// }
	// return pickObjectValues(string);
// }
// console.log(getObjectValues([-10,2,6,[9,10],[1,6,[14,101],[0,-5],15],[415,5],0]));

//---------------------------------5.3-------------------------------------------
// function getRequiredSymbols(string,type){
	// var a=string.split("");
	// var b=[];
	// var c=[];
	// for(var i=0;i<a.length;i++){
		// if(typeof(+a[i])===type&&!isNaN(+a[i])&&(a[i]!==" ")){
			// b.push(a[i]);
		// }
		// if(isNaN(+a[i])||(a[i]===" ")){
			// c.push(a[i]);
			// }	
	// }
	// if(type==="number"){return b.join("");}
	// else{return c.join("");}
// }
// console.log(getRequiredSymbols("hde87iwowow334jwyG445HD42xTz7G0G","string"));
// console.log(getRequiredSymbols("hde87iwowow334jwyG445HD42xTz7G0G","number"));
// //----------------------------------6.1--------------------------------------------
// function getSortedString(tree){
	// var treeNumber=getRequiredSymbols(tree,"number");
	// var treeString=getRequiredSymbols(tree,"string");
	// var arrayNumber=treeNumber.split("");
	// var arrayString=treeString.split("");
	// arrayNumber.sort(function(a,b){return a-b;});
	// arrayString.sort(function(a,b){
		// var x=a.toLowerCase();
		// var y=b.toLowerCase();
		// return x>y?1:(x<y?-1:0);
		// });
	// return arrayNumber.join("")+arrayString.join("");
// }
// console.log(getSortedString("hde87iwowow334jwyG445HD42xTz7G0G"));
//-------------------------------------6.2----------------------------------------------------
// function getInvertedNumbers(arrayOfNumber){
	// var newArrayOfNumbers=arrayOfNumber.map(function(number){
		// return number>0||number<0?number*(-1):0;
	// })
	// return newArrayOfNumbers;
// }
// console.log(getInvertedNumbers([1,55,3,-6,-65,111,0]));
//------------------------------------6.3-----------------------------------------------------
// function getReversedString(string){
	// var reversedArray=string.split("");
	// reversedArray.reverse();
	// return reversedArray.join("");
// }
// console.log(getReversedString("gnirts desrever teg"));
//------------------------------------7.1-----------------------------------------------------
// function namesConcatenator(arrayOfObject){
	// for(var i=0;i<arrayOfObject.length;i++){
	// arrayOfObject[i].fullName=arrayOfObject[i].firstName+" "+arrayOfObject[i].lastName;
	// delete arrayOfObject[i].firstName;
	// delete arrayOfObject[i].lastName;
	// }
	// return arrayOfObject;
// }
// console.log(namesConcatenator([{"firstName":"Ivan","lastName":"Ivanov","age":"25","gender":"male"},
                               // {"firstName":"Itan","lastName":"Sokolov","age":"25","gender":"male"},
							   // {"firstName":"Iakov","lastName":"Shevchenko","age":"25","gender":"male"},
							   // {"firstName":"Helena","lastName":"Ivanova","age":"25","gender":"male"}]));
//------------------------------------7.2----------------------------------------------------
// function getBorderNumbers(arrayOfNumber,takeFrom){
	// var positiveArray=arrayOfNumber.filter(function(number){
		// return number>0;
	// })
	// return takeFrom=="first"?positiveArray.slice(0,3):positiveArray.slice(-3);
// }
// console.log(getBorderNumbers([0,-1,2,-3,4,-5,6,-7,8,-9,10],"first"));
// console.log(getBorderNumbers([0,-1,2,-3,4,-5,6,-7,8,-9,10],"last"));
// console.log(getBorderNumbers([0,-1,2,-3,4,-5],"last"));
// console.log(getBorderNumbers([0,-1,2,-3,4,-5],"first"));
//-------------------------------------7.3----------------------------------------------------
// function getTotalPrice(arrayOfProducts){
	// var sum=0;
	// for(var i=0;i<arrayOfProducts.length;i++){
		// if(arrayOfProducts[i].inCart==true){
			// arrayOfProducts[i].price=+getRequiredSymbols(arrayOfProducts[i].price,"number");
			// sum=sum+arrayOfProducts[i].price;
		// }
	// }
// return sum;
// }
// console.log(getTotalPrice([{"name":"coffe","price":"15$","inCart":true},
						   // {"name":"tea","price":"10$","inCart":false},
						   // {"name":"water","price":"4$","inCart":true},
						   // {"name":"milk","price":"5$","inCart":true},
						   // {"name":"beer","price":"7$","inCart":false}]));
// ---------------------------------------8.1-------------------------------------------------------------
// function getSortedArray(arrayOfObject,sortBy,order){
	// switch(sortBy){
		// case "name":
		// arrayOfObject.sort(function(a,b){return a.name>b.name?1:(a.name<b.name?-1:0);})
		// break;
		// case "age":
		// arrayOfObject.sort(function(a,b){return (+a.age)-(+b.age);})
		// break;
		// case "country":
		// arrayOfObject.sort(function(a,b){return a.country>b.country?1:(a.country<b.country?-1:0);})
		// break;
	// }
	// return order=="ascending"?arrayOfObject:arrayOfObject.reverse();
// }
// console.log(getSortedArray([{"name":"Elena","age":"25","country":"Ukraine"},
							// {"name":"Oksana","age":"20","country":"Moldova"},
							// {"name":"Oleg","age":"30","country":"Italy"},
							// {"name":"Franc","age":"18","country":"France"},
							// {"name":"Lucas","age":"9","country":"Germany"},
							// {"name":"Mike","age":"38","country":"USA"}],"country","descending"))
//----------------------------------------------8.2-----------------------------------------------------------
function greetingMatureUsers(arrayOfObject){
	var newArrayOfObject=[];
	for(var i=0;i<arrayOfObject.length;i++){
		if(+arrayOfObject[i].age>18){
			arrayOfObject[i].greeting=arrayOfObject[i].gender=="male"?"Welcome master "+arrayOfObject[i].name:"Welcome mistress "+arrayOfObject[i].name;
			newArrayOfObject.push(arrayOfObject[i]);
		}
	}
	return newArrayOfObject;
}
console.log(greetingMatureUsers([{"name":"Elena","age":"25","gender":"female"},
							{"name":"Oksana","age":"10","gender":"female"},
							{"name":"Oleg","age":"30","gender":"male"},
							{"name":"Franc","age":"18","gender":"male"},
							{"name":"Lucas","age":"9","gender":"male"},
							{"name":"Mike","age":"38","gender":"male"}]))














