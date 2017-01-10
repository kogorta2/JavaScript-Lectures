function pow(x,y,z){
	if(!y)
		return 1;
	z=z||x;
	y--;
	if(y>0){
		z*=x;
		return pow(x,y,z);
	}
	else{
		return z;
	}
}
//console.log(pow(2,2));

function toOneDimension(array,newArray){
	newArray=newArray||[];
	for(var i=0;i<array.length;i++){
	if(Array.isArray(array[i])){
		toOneDimension(array[i],newArray);
		}
	else{
		newArray.push(array[i])
		};
	}
	return newArray;
};
// console.log(toOneDimension([[1,2,3,[5,6,7, [23,24,56]]]]))

// var x=123;//123
// var y=0xF;//15
// var z=5e3;//5000
// var z2=5e-3;//0.005

// var infinity=Infinity;
// var nan=NaN;
// var number=123;
// console.log(isFinite(infinity));
// console.log(isFinite(nan));
// console.log(isFinite(number));

// console.log(+'56');//56
// console.log(+'');//0
// console.log(parseInt('12px'));//12
// console.log(parseInt(''));//NaN
// console.log(parseInt('FF',16));//255
// console.log(parseFloat('10.5.5'));//10.5
// console.log(parseFloat('as10.5'));//NaN

// console.log(isNaN(12));
// console.log(isNaN(''));
// console.log(isNaN('25.5'));
// console.log(isNaN(null));
// console.log(isNaN(true));

// function isNumber(n){
	// return !isNaN(parseFloat(n))&&isFinite(n);
// }

// console.log(Math.round(1.5));//2
// console.log(Math.round(1.4));//1
// console.log(Math.ceil(1.1));//2
// console.log(Math.floor(1.9));//1
// console.log(10.567.toFixed(2));//'10.57'
// console.log(Math.round(10.255*100)/100);//10.26

// var x=0.1+0.2;//0.3000000004
// console.log(x);
// console.log((0.1*10+0.2*10)/10);
// console.log(+(0.1+0.2).toFixed(10));
// console.log(Math.round((0.1+0.2)*10)/10);
// console.log(9999999999999999);

// var string="string";
// var string='string';
// var srting='it\'s test string';

// console.log('first line \n next line');
// console.log("\\");// \

// console.log('test   '.length);//7
// console.log('test'.charAt(0));//'t'
// console.log('test'[0]);//t
// console.log('test'[5]);//undefined

// console.log(('A and B').toUpperCase());
// console.log(('A and B').toLowerCase());
// var x="A and B";
// x=x.toLowerCase();
// console.log(x);

 var string='test string';
// console.log(string.substring(1,5));//'est'
// console.log(string.slice(1,5));//'est'
// console.log(string.substr(1,5));//'est'

// console.log(string.substring(5,1));//'est'
// console.log(string.slice(5,1))//''

// console.log(string.substring(5,-1));//'test'
// console.log(string.slice(5,-1));//'strin'
// console.log(string.slice(-5,-1));//'trin'

// console.log(string.indexOf("t"));//0
// console.log(string.lastIndexOf("t"));//6


// console.log(string.indexOf("est"));//1
// console.log(string.lastIndexOf("ing"));//8

// var x=~25;//-(25+1)//-26
// console.log(x);
// var x=~-10;//-(25+1)//9
// console.log(x);
// console.log(~-1);//0
// console.log(~0);//-1

var x="some string";
console.log(~string.indexOf("t"));
console.log(~string.indexOf("black"));




































