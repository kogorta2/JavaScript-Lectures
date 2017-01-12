function summOfFibonachi(n){
	var members=[];
	members[0]=0;
	members[1]=1;
	for(var i=2;i<=n;i++){
	members[i]=members[i-1]+members[i-2];
		}	
	var summ=0;
	for(var j=0;j<=n;j++){
		summ+=members[j];
	}
	return summ;
}
console.log(summOfFibonachi(4));