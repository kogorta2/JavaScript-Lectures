 $(function(){
	// var indexName=$(".nameAdd").index();
	// var indexEmail=$(".emailAdd").index();
	var allUsers=[];
	var objUser={};
	//for(var i=0;i<=4;i++){
		$(".nameAdd").change(function(){
		var name1=$(".nameAdd").val();
		$(".first .userName").text(name2);
	});
		$(".emailAdd").change(function(){
		var email1=$(".emailAdd").val();
		$(".first .userEmail").text(email1);
	});
	for(var i=0;i<=4;i++){
		$(".buttonAddUser").on("click", function(name,email){
		// objUser.objName=name;
		// objUser.objEmail=email;
		var name=$(".nameAdd").val();
		if(i==0){$(".first .userName").text($(".nameAdd").val());}
		allUsers.push()
	});
	}
	
		
	
})