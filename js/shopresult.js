var ShopresultWork = {
	init : function(){
		var new_uid = window.sessionStorage.getItem("new_uid");
		$(".new_uid").val(new_uid);
		var name = window.sessionStorage.getItem("short_name");
		$(".short_name").val(name);
	}
}
function closePage(){
	window.sessionStorage.removeItem("short_name");
	window.sessionStorage.removeItem("new_uid");
	location.href="shopcheck.shtml";
}
		