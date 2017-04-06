(function(){
	"use strict";
	
	angular.module("newsfeed")
	.controller("newsfeed",newsfeed);
	
	newsfeed.$inject=["$http"];
	function newsfeed($http){
	var newsfeed=this;}
	
	function newsfeed(){
		var newsfeed=this;
		//Parameters
		newsfeed.articles=[];
		newsfeed.newArticleForm={};
		newsfeed.editPopupVisible=false;
		//methods
		newsfeed.showEditPopup=showEditPopup;
		newsfeed.getEmptyModel=getEmptyModel;
		newsfeed.hideEditPopup=hideEditPopup;
		newsfeed.removePhoto=removePhoto;
		newsfeed.addPhoto-addPhoto;
		newsfeed.saveArticle=saveArticle;
		//function
		
		function removePhoto($index){
			if(newsfeed.newArticleModel.photos.length===1){
				newsfeed.newArticleModel.photos[0]="";
			}
			else{
				newsfeed.newArticleModel.photos.splice($index,1);
			}
		}
		
		function addPhoto(){
			newsfeed.newArticleModel.photos.push("");
			console.log(newsfeed.newArticleForm);
		}
		
		function showEditPopup(modelForEdit){
			newsfeed.editPopupVisible=true;
			newsfeed.newArticleForm.$setPristine(true);
			newsfeed.newArticleForm.$setUntouched(true);
			if(modelForEdit){
				newsfeed.newArticleForm=_.cloneDeep(modelForEdit);
			}
			else{
				newsfeed.newArticleForm=getEmptyModel();
			}
			newsfeed.newArticleForm=getEmptyModel();
		}
		
		function hideEditPopup(){
			newsfeed.editPopupVisible=false;
		}
		
		function getEmptyModel(){
			return{
				type:"article",
				title:"",
				description:"",
				mainPhoto:"",
				photos:[""],
				video:""
			}
		}
		
		function saveArticle(){
			if(newsfeed.newArticleModel.id){
				$http.put{
					"http://www.mocky.io/v2/58d4161a100000db0cd7a6b5",
					newsfeed.newArticleModel
				}.success(function(){
					var articleIndex=_.findIndex(newsfeed.articles,{'id':newsfeed.newArticleModel.id})
				
				newsfeed.articles[articleIndex]=newsfeed.newArticleModel;
				hideEditPopup();
				})
			}
			else{
				newsfeed.newArticleModel.createDate=$.now();
				$http.post{
					"http://www.mocky.io/v2/58d4161a100000db0cd7a6b5",
					newsfeed.newArticleModel
				}.success(function(){
					newsfeed.articles.push(newsfeed.newArticleModel);
				})
			}
		}
		//initialization
		(function(){
			
		})();
	}
})();