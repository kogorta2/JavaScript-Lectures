// function list(names){
	// var separatedNames=[];
	// for(var i=0;i<names.length;i++){
		// separatedNames.push(names[i].name);
	// }
	// if(separatedNames.length<=1){return separatedNames.join('');}
	// else{
		// var newSeparatedNames=[];
		// for(var i=0;i<separatedNames.length;i++){
			// newSeparatedNames.push(separatedNames[i]);
			// if(i<separatedNames.length-2){newSeparatedNames.push(', ');}
			// else if(i==separatedNames.length-2){newSeparatedNames.push(' & ');}
		// }
		
    // }
	
	// return newSeparatedNames.join('');
// }

// console.log(list([{name:'Bart'},{name:'Lisa'},{name:'Maggie'},{name:'Bart2'},{name:'Lisa2'},{name:'Maggie2'}]))
// console.log(list([]));

function SeriesSum(n){
	
		if(n<=1){return n;}
		else{
			function divisor(n){
				if(n==1){return 1;}
				else{return (divisor(n-1)+3);}
			}
			return 1/divisor(n)+SeriesSum(n-1);
		}
		
	
	
}
console.log(SeriesSum(5));
var a = 1546;
var b = Number(a.toString(10));
console.log(a);
console.log(b);

