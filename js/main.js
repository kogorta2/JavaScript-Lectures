//1
// var x='1';
// var y=10;
// var z=10;
// console.log(typeof x=='string'&&y==10&&z>=y); 

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

//9
// var arr=['','0',0,true,undefined,NaN,234,'ololo',-1,[],{}];
// var arrTrue=[];
// for(var i=0;i<arr.length;i++){
	// if(!!arr[i]===true){
		// arrTrue.push(arr[i]);
	// }
// }
// console.log('arrTrue=');
// for(var j=0;j<arrTrue.length;j++){
	// console.log(arrTrue[j]);
	// }

//10
// var arr=['0',0,undefined,234,15,-29,'-287','',[1,2,3],{key:'value'},'test,false','14'];
// var arrNumber=[];
// for(var i=0;i<arr.length;i++){
	// if((typeof arr[i]=='number'||typeof +arr[i]=='number')&&arr[i]>0){
		// arrNumber.push(arr[i]);
	// }
// }
// console.log('arrNumber=');
// for(var j=0;j<arrNumber.length;j++){
	// console.log(arrNumber[j]);
// }	
	
//11
var baseArray=[];
for(j=0;j<99;j++){
	baseArray.push(j+1);
}
var newArray1=[];
var newArray2=[];
var newArray3=[];
for(var i=0;i<baseArray.length;i++){
	newArray1.push(baseArray[i]);
	i++;
	newArray2.push(baseArray[i]);
	i++;
	newArray3.push(baseArray[i]);
	}
console.log('newArray1=');	
for(var a=0;a<newArray1.length;a++){
	console.log(newArray1[a]);
}
console.log('newArray2=');	
for(var b=0;b<newArray2.length;b++){
	console.log(newArray2[b]);
}
console.log('newArray3=');	
for(var c=0;c<newArray3.length;c++){
	console.log(newArray3[c]);
}
	
	
	
	
	
	
	
	
	
	
	
	
	