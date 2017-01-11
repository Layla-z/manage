var UpdatecheckWork = {
	init:function(){
		$("#short_name").text(decodeURI(getUrlVars()["short_name"]));
		$("#contact_name").text(decodeURI(getUrlVars()["contact_name"]));
		$("#contact_phone").text(getUrlVars()["contact_phone"]);
		$("#level_name").text(decodeURI(getUrlVars()["level_name"]));
		$("#upgrade_level_name").text(decodeURI(getUrlVars()["upgrade_level_name"]));
		var rate = (getUrlVars()["rate"]/100);
		rate = parseFloat(rate).toFixed(2);
		$("#rate").text(rate+"‰");
		var upgrade_rate = (getUrlVars()["upgrade_rate"]/100);
		upgrade_rate = parseFloat(upgrade_rate).toFixed(2);
		$("#upgrade_rate").text(upgrade_rate+"‰");
		var pro_id = getUrlVars()["pro_id"];
		$("#ok").click(function(){
			audit(3,pro_id);
		})
		$("#no").click(function(){
			audit(4,pro_id);
		})
	}
}
function audit(type,pro_id){
	if(type=="4"||type==4){
		var content = $("#content").val();
		content = content.trim();
		if(content==null||content==""){
			alert("请输入审核结果说明");
			return;
		}
		if(content.length<6){
			alert("长度小于6了");
			return;
		}
	}
	var params = [
				{ name : 'server_no',value :"400008"},
				{ name : 'pro_id',value :pro_id},
				{ name : 'state',value : type}
			 ];
	if(content!=null&&content!=""){
		var a = { name : 'desc',value : content};
		params.push(a);
	}
	BaseRequest.resquest(params,"/cgi-bin/update_upgrade_check_result.cgi",requestAuditResult);
}
//update_upgrade_check_result.cgi返回的参数
function requestAuditResult(xml){
	var errorcode = until.getNodeValue("errorcode", xml); //返回码
	var errormessage = until.getNodeValue("errormessage", xml); //返回信息
	switch(errorcode){
		case "0000":
			alert("审核成功！");
			location.href="shopupdate.shtml";
			break;
		default :
			alert(errormessage);
			break;
	}
}
function getUrlVars(){
	var vars = [], hash;
	var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	for (var i = 0; i < hashes.length; i++) {
		hash = hashes[i].split('=');
		vars.push(hash[0]);
		vars[hash[0]] = hash[1];
	}
	return vars;
}