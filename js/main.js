// function forSummator(x,y){
	// var s=0;
	// for(x;x<=y;x++){
		// s=s+x;
	// }
// return s;
// }
// console.log(forSummator(2,6));

function positiveMultiplier(x,y,z){
	var m=1;
	for(y;y<=z;y+x){
		m=m*y;
		// y=y+x;
	}
	return m;
}
console.log(positiveMultiplier(2,3,9));