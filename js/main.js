//--------------------------------1-----------------------------------------
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

//--------------------------------2------------------------------------------
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

//---------------------------------3-------------------------------------------
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
// console.log(getRequiredSymbols("yt 38 5g5 22Hh//\\ -44 ff","string"));





















