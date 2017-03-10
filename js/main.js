$(function(){

 var users=[];
 var tasks=[];
 var tableUsersTasks=[];
 var emailPattern=/\w+@\w+\.\w+/;
 var usersList=[];
 var $usersContainer=$(".users");
 var $tasksContainer=$(".tasks");

(function activate() {
	addUserFunctionality();
	addTaskFunctionality();
	activeTask();
})();

function addUserFunctionality() {
	var $userNameField=$('.userName');
	var $userEmailField=$('.userEmail');
	$(".addUserButton").on("click",function(){
		var valid=true,
		 errorText="Field(s) ";
		if(!validateRequired($userNameField)){
		 errorText +="User name";
		 valid=false;
		}
		if(!validateRequired($userEmailField)||
		 !validateEmail($userEmailField)||
		 findInCollection(users, {"email":$userEmailField.val()})
		 ){
			 errorText +="User email ";
			 valid=false;
		 }
		if(valid){
			users.push({
				name:$userNameField.val(),
				email:$userEmailField.val(),
				assignedTo:[]
			})
		generateUsersList();
		tableUsersTasks.push([]);
		//clearInput(".addUser");
		//console.log(tableUsersTasks);
		}
		else{
			alert(errorText+"are invalid");
		}
	})
}

function clearInput(classOfWrap){
	$(classOfWrap).find(":input").not(":button").val("");
	
}

function validateRequired(field){
	return $(field).val()||$(field).is(":checked");
}

function validateEmail(field){
	return emailPattern.test($(field).val());
}

function findInCollection(collection, findParams){
	return collection.reduce(function (findElem, elem){
		var finded=null;
		if(findParams &&typeof findParams === "object" && !Array.isArray(findParams)){
			for(var field in findParams){
				if((finded===null||finded===true)&&elem[field]===findParams[field]){
					finded=true;
				}
				else{
					finded=false;
				}
			}
			return findElem !== undefined ? findedElem : finded ? elem : undefined;
		}
		else{
			return findedElem !== undefined ? findedElem : elem === findParams ? elem : undefined; 
		}
	},  undefined);
}

function generateUsersList(){
	usersList=[];
	users.forEach(function (user,index){
		usersList[index]=generateUser(user);
	});
	$usersContainer.html(usersList);
}

function generateUser(user){
	var li=$('<li />').data("user",user);
	var userName=$('<p class="userName">'+user.name+'</p>');
	var userEmail=$('<p class="userEmail">'+user.email+'</p>');
	var assignedLable=$('<label>Assigned</label>');
	var assignedCheckbox=$('<input class="check" type="checkbox" />').appendTo(assignedLable);
	var button=$('<button type="button">Delete user</button>')
	 .on("click",function(){
		 removeItem(users,user,generateUsersList);
	 });
	 return li.append([userName,userEmail,assignedLable,button]);
}

function removeItem(list,item,callback){
	var index=list.indexOf(item);
	if(~index){
		list.splice(index,1);
		callback();
	}
}

function relocateItem(list,item,callback){
	var index=list.indexOf(item);
	list.push(item);
	if(~index){
		list.splice(index,1);
		callback();
	}
	
}

function addTaskFunctionality() {
	var $taskTitleField=$('.taskTitle');
	var $taskDescriptionField=$('.taskDescription');
	var $taskIdField=$('.taskId');
	var createDate=new Date();
	$(".addTaskButton").on("click",function(){
		var valid=true;
		 errorText="Field(s) ";
		if(!validateTaskFields($taskTitleField)){
			errorText += "task title ";
			valid=false;
		}
		if(!validateTaskFields($taskDescriptionField)){
			errorText += "task description ";
			valid=false;
		}
		if(!validateTaskFields($taskIdField)||findInCollection(tasks,{"id":$taskIdField.val()})){
			errorText += "task ID";
			valid=false;
		}
		if(valid){
			tasks.push({
				title: $taskTitleField.val(),
				description: $taskDescriptionField.val(),
				id: $taskIdField.val(),
				date: createDate,
				assignedTo: []
			})
		generateTasksList();
		for(var i=0;i<tableUsersTasks.length;i++){
			if(!tableUsersTasks[i].length){
				for(var j=0;j<tasks.length;j++){
					tableUsersTasks[i][j]=0;
				}
			}
			else{
				for(var j=tasks.length-1;j<tasks.length;j++){
					tableUsersTasks[i][j]=0;
				}
			}
		}
		//clearInput(".addTask");
		//console.log(tableUsersTasks);
		}
		else{
			alert(errorText+"are invalid");
		}
	})
}



function validateTaskFields(field){
	return $(field).val();
}

function generateTasksList(){
	tasksList=[];
	tasks.forEach(function(task,index){
		tasksList[index]=generateTask(task);
	});
	$tasksContainer.html(tasksList);
}

function generateTask(task){
	var li=$('<li class="task" />').data("task",task);
	var taskTitle=$('<h2 class="taskTitle">'+task.title+'</h2>');
	var taskCreateDate=$('<p>Create datetime<span class="createDate">'+task.date+'</span></p>');
	var taskDescription=$('<p class="taskDescription">'+task.description+'</p>');
	var taskAssignedTo=$('<p>Assigned to <span class="assigned"></span> users</p>');
	var buttonDeleteTask=$('<button type="button">Delete task</button>')
	 .on("click",function(){
		 removeItem(tasks,task,generateTasksList);
	 });
	 var buttonComleteTask=$('<button class="complete" type="button">Complete task</button>')
	 .on("click",function(event){
		 $(event.target).closest("li").addClass("green");
		// removeChecked();
		 relocateItem(tasks,task,generateTasksList);
	 });
	 return li.append([taskTitle,taskCreateDate,taskDescription,taskAssignedTo,buttonDeleteTask,buttonComleteTask]);
}

function activeTask(){
	
	$(".tasks").on("click",function(event){
		
		removeChecked();
		var objEventTask=$(event.target).closest("li");
		var indexEvenTask=objEventTask.index();
		objEventTask.addClass("gray");
		objEventTask.siblings().removeClass("gray");
		fixChecked(indexEvenTask,tableUsersTasks);
		
		$(".users").find(":checkbox").on("change",function(event){
				var objEventUser=$(event.target).closest("li");
				var indexEventUser=objEventUser.index();
				removeTrueOrFalse(indexEventUser,indexEvenTask,tableUsersTasks);
				var countAssignedUsers=getAssignedUsers(indexEvenTask,tableUsersTasks);
				$(".gray").find(".assigned").text(countAssignedUsers);
		})
	})
}
function findTrueOrFalse(index1,index2,array){
	for(var i=0;i<array.length;i++){
		for(var j=0;j<array[i].length;j++){
			if(i==index1&&j==index2){
				if(array[i][j]==1){
					return true;
				}
				else{
					return false;
				}
			}
			else{return false;}
		}
	}
}
function removeTrueOrFalse(index1,index2,array){
	if(!findTrueOrFalse(index1,index2,array)){
		for(var i=0;i<array.length;i++){
			if(array[i].length){
				for(var j=0;j<array[i].length;j++){
					if(i==index1&&j==index2){
						array[i][j]=1;
						
					}
				}
			}
			else{
				for(var j=0;j<tasks.length;j++){
					array[i][j]=0;
				}
			}
		}
	}
	else{
		for(var i=0;i<array.length;i++){
			if(array[i].length){
				for(var j=0;j<array[i].length;j++){
					if(i==index1&&j==index2){
						array[i][j]=0;
					}
				}
			}
			else{
				for(var j=0;j<tasks.length;j++){
					array[i][j]=0;
				}
			}
		}
	}
}

function getAssignedUsers(index2,array){
	var count=0;
	for(var i=0;i<array.length;i++){
		for(var j=0;j<array[i].length;j++){
			if(j==index2){
				count+=array[i][j];
			}	
		}
	}
	return count;
}

function removeChecked(){
	if($(":checkbox").prop("checked")){
		$(":checkbox").prop("checked",false); 
	}
}

function fixChecked(index,array){
	for(var i=0;i<array.length;i++){
			for(var j=0;j<array[i].length;j++){
				if(j==index){
					if(array[i][j]==1){
						$(".users").find("li").eq(i).find(":checkbox").prop("checked",true);
					
					}
					else{$(".users").find("li").eq(i).find(":checkbox").prop("checked",false);}
				}
				else{
					$(".users").find("li").eq(i).find(":checkbox").prop("checked",false);
				}
			}
		}
}

})
































