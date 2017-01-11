$(document).ready(function(){
	//7一级商户 8 二级商户 9三级商户 10四级商户 11五级商户 12 六级商户 20管理用户 21 财务用户 22 客服用户
    var user_type = window.sessionStorage.getItem("user_type");
    if(user_type=="20"){
    	$(".user_type").show();
    	$(".user_type20").hide();
    }else{
    	$(".user_type").hide();
    	$(".user_type20").show();
    }
	if(user_type!="7"){
		//document.getElementById("user_upgrade_type1").style.display="none";
		//document.getElementById("user_upgrade_type2").style.display="none";
		$("#user_upgrade_type1").hide();
		$("#user_upgrade_type2").hide();
    }
});