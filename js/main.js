//1
// var x='123';
// var y=10;
// var z=100;
// console.log(!!x||y>=z); 

//2
// var x=11;
// var y=0;
// var z=5;
// console.log((x>10||x>y)&&(typeof y=='number'&&!isNaN(y))||z%2==0);

//3
// var x=50;
// var y=50;
// var z=51;
// console.log((x+y)%10==0&&(x+y+z)/3*2>100);

//4
// var y=7;
// var z=1;
// var x=(y%3==0)?y:(x=(z>y)?z:y+z);
// console.log(x);

//5
// var x=0;
// var y=NaN;
// var z=NaN;
// if(typeof y!=='number'||y==null){
	// x=y;
// }else{
	// if(typeof z!=='number'||z==null){
	// x=z;
	// }
// }	
// console.log(x);

//6
// var x='';
// var y=null;
// var z='else';
// if(!!y!==false){
	// x='true';
// }else{
	// x=z;
// }
// console.log(x);

//7
// var x=0;
// var y=NaN;
// var z='1';
// switch(y){
	// case 0:
	// x=y;
	// break;
	// case false:
	// x=y;
	// break;
	// case undefined:
	// x=y;
	// break;
	// case null:
	// x=y;
	// break;
	// default:
	// x=+z;
	// break;
// }
// console.log(x);

//8
// var x=0;
// var y=true;
// var z='1';
// switch(y){
	// case 0:
	// case false:
	// case undefined:
	// case null:
	// x=y;
	// break;
	// default:
	// x=+z;
	// break;
// }
// console.log(x);




	
	
	
	