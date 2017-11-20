/*-------自定义alertZ弹窗-知道了-------*/
window.alertZ = function(text,text2){
    alertNum++;
    if(text2 == undefined){
    		con = '<div class="alert"><p class="p1">'+text+'</p><span class="btn">知道了</span></div>';
    }else{
	    	con = '<div class="alert"><p class="p2">'+text2+'</p><p class="p3">'+text+'</p><span class="btn">知道了</span></div>';
    }
    maskbox = '<div class="maskbox alert_mask"></div>';
    $("body").prepend(maskbox);
    $("body").prepend(con);
    $(".alert_mask").show();
    $(".alert").show();
    $(".alert .btn").click(function(){
        $(".maskbox").hide();
        $(".alert").hide();
        $(".alert_mask").remove()
        $(".alert").remove();

    });
}
/*-------自定义alertZ弹窗-知道了-------*/
window.loadingShow = function(text){
    var maskbox = '<div class="mask"></div>';
    if(text == undefined || text == null){
    		 var loading = '<div class="loading">'+
		'<div class="loading_bg"><img src="img/loading_icon.gif"/></div>'+
		'</div>';
    }else{
    		 var loading = '<div class="loading">'+
		'<div class="loading_bg"><img src="img/loading_icon.gif"/></div>'+
		'<p class="loading_text">'+text+'</p>'+
		'</div>';
    }
   	
    $("body").prepend(maskbox);
    $("body").prepend(loading);
    $(".mask").show();
    $(".loading").show();
}
window.loadingHide = function(){
	$(".mask").hide().remove();
    $(".loading").hide().remove();
}

//获取url中的参数
function getUrlParam(name) {     
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");     
    var r = window.location.search.substr(1).match(reg);     
    if (r != null) return  decodeURIComponent(r[2]);
    return null;
}

function isBlank( type ){
	if(type =="" || type == null || type == undefined || type=="null"){
		return true;
	}
	return false;
}

//写cookies 默认有效期7.2小时
function setCookie(name,value){
	var Days = 0.3;
	var exp = new Date();
	exp.setTime(exp.getTime() + Days*24*60*60*1000);
	document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

//写cookies指定时长
function setCookieT(name,value,time){
	var exp = new Date();
	exp.setTime(exp.getTime() + time*24*60*60*1000);
	document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

//读取cookie
function getCookie(name){
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg))
	return unescape(arr[2]);
	else
	return null;
}

//删除cookie
function delCookie(name)
{
var exp = new Date();
exp.setTime(exp.getTime() - 1);
var cval=getCookie(name);
if(cval!=null)
document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}

//toast框
var qp = 0;
function qipao(text){
	var qipao = '<div class="qipao">'+
		'<div class="text">'+text+'</div>'+
		'</div>'	;
	if(qp == 0){
		qp = 1;
	 	$("body").prepend(qipao);	
		$(".qipao").show();
		setTimeout(function(){
			$(".qipao").hide().remove();
			qp = 0;
		},2000);		
	}
}