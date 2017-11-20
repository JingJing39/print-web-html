//创建模块
var app = angular.module("app",[]);
/*-----------------------打印设置------------------------------*/
app.controller("printDetail",["$scope","$http","$rootScope",function($scope,$http,$rootScope){
	var type;
	var name = getUrlParam("name");
	$("#name").text(name);
	$(".sigOrDoub").on("click",function(){
		type = "sb"
		$(".block").show();
		$("#sigOrDoub").show();
	})
	$(".centi").on("click",function(){
		$(".block").hide();
		$(".alertBox").hide();
	})
	$(".sdType").on("click",function(){
		if(!$(this).hasClass("selected")){
			$(this).addClass("selected").siblings(".sdType").removeClass("selected");
			if(type == "sb"){
				$(".sigOrDoub").text($(this).attr("data-text")).attr("data-val",$(this).attr("data-val"));				
			}else if(type == 'color'){
				$(".printColor").text($(this).attr("data-text")).attr("data-val",$(this).attr("data-val"));				
			}else if(type == 'size'){
				$(".PringSize").text($(this).attr("data-text")).attr("data-val",$(this).attr("data-val"));				
			}
		}
	})
	$(".printColor").on("click",function(){
		type="color"
		$(".block").show();
		$("#color").show();
	})
	$(".PringSize").on("click",function(){
		type="size"
		$(".block").show();
		$("#pageType").show();
	})
	$(".plus").on("click",function(){
		$(".printAmount").val(parseInt($(".printAmount").val())+1);
	})
	$(".reduce").on("click",function(){
		if(parseInt($(".printAmount").val())>1){
			$(".printAmount").val(parseInt($(".printAmount").val())-1);			
		}
	})
}])