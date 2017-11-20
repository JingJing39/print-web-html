//创建模块
var app = angular.module("app",[]);

function checkCodeBtn(obj,btn){
	$("#"+obj).on("change",function(){
		if($(this).length == 11){
			$("#"+obj).addClass("live").removeAttr("disabled");
		}
	})
}


/*-----------------------主页------------------------------*/
app.controller("home",["$scope","$http","$rootScope",function($scope,$http,$rootScope){
	$("#userCenter").on("click",function(){
		location.href = 'userCenter.html';
	})
	$("#billDetail").on("click",function(){
		location.href = 'billDetail.html';
	})
	$("#forget").on("click",function(){
		location.href = 'forget.html';
	})
	$("#recharge").on("click",function(){
		location.href = 'recharge.html';
	})
	$("#register").on("click",function(){
		location.href = 'home.html';
	})
	$("#index").on("click",function(){
		location.href = 'index.html';
	})
	$("#listOver").on("click",function(){
		location.href = 'listOver.html';
	})
	$("#listWait").on("click",function(){
		location.href = 'listWait.html';
	})
	$("#login").on("click",function(){
		location.href = 'login.html';
	})
	$("#forget").on("click",function(){
		location.href = 'forget.html';
	})
	$("#pay").on("click",function(){
		location.href = 'pay.html';
	})
	$("#printDetail").on("click",function(){
		location.href = 'printDetail.html';
	})
	$("#setting").on("click",function(){
		location.href = 'setting.html';
	})
	$("#help").on("click",function(){
		location.href = 'help.html';
	})
	$("#userCenter").on("click",function(){
		location.href = 'userCenter.html';
	})
}])
/*-----------------------注册------------------------------*/
app.controller("register",["$scope","$http","$rootScope",function($scope,$http,$rootScope){
	$("#login").on("click",function(){
		location.href = 'login.html';
	})
}])
/*-----------------------登录------------------------------*/
app.controller("login",["$scope","$http","$rootScope",function($scope,$http,$rootScope){
	
}])
/*-----------------------主页------------------------------*/
app.controller("index",["$scope","$http","$rootScope",function($scope,$http,$rootScope){
	$("#userCenter").on("click",function(){
		location.href = 'userCenter.html';
	})
	$("#userCenter").on("click",function(){
		location.href = 'userCenter.html';
	})
	$("#upFile").on("change",function(){
		
	})
	$("#recharge").on("click",function(){
		location.href = 'recharge.html';
	})
	$("#printList").on("click",function(){
		location.href = 'printList.html'
	})
}])


/*-----------------------待打印列表------------------------------*/
app.controller("listWait",["$scope","$http","$rootScope",function($scope,$http,$rootScope){
	var name = '';
	$(".btn_con").on("click",function(){
		name = $(this).siblings("p").text();
		location.href = 'printDetail.html?name='+name;
	})
}])

/*-----------------------用户中心------------------------------*/
app.controller("userCenter",["$scope","$http","$rootScope",function($scope,$http,$rootScope){
	$("#recharge").on("click",function(){
		location.href = 'recharge.html';
	})
	$("#billDetail").on("click",function(){
		location.href = 'billDetail.html';
	})
	$("#help").on("click",function(){
		location.href = 'help.html';
	})
	$("#setting").on("click",function(){
		location.href = 'setting.html';
	})
}])



/*-----------------------充值------------------------------*/
app.controller("recharge",["$scope","$http","$rootScope",function($scope,$http,$rootScope){
	$("li").on("click",function(){
		if(!$(this).hasClass("selected")){
			$(this).addClass("selected").siblings("li").removeClass("selected");
		}
	})
	$(".normalBtn").on("click",function(){
		var amount = $(".fixed.selected").attr("data-val");
		var type = $(".type.selected").attr("data-val");
	})
	
}])


/*-----------------------设置------------------------------*/
app.controller("setting",["$scope","$http","$rootScope",function($scope,$http,$rootScope){
	$("#changePas").on("click",function(){
		location.href = 'forget.html';
	})
	$("#changeMobile").on("click",function(){
		location.href = 'forget.html';
	})
	
}])