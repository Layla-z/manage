var UpdatefeeWork = {
	init : function(){
		findInfo();
	}
}
function findInfo(){
	var params = [{ name : 'server_no',value : "400001"},
					{ name : 'type',value : "1"}];
	BaseRequest.resquest(params,"/cgi-bin/query_sys_level.cgi",requestFindInfoResult);
}
function requestFindInfoResult(xml){
	var errorcode = until.getNodeValue("errorcode", xml); //返回码
	var errormessage = until.getNodeValue("errormessage", xml); //返回信息
	switch(errorcode){
		case "0000":
			var state = until.getNodeValue("state", xml);
            if(state==1||state=="1"){
				return;
			}
			var level_num = until.getNodeValue("level_num", xml);
			var html = '<ul><li>升级级别<span class="c">修改费用</span></li>';
			var level_name_2 = until.getNodeValue("level_name_2", xml);
			var level_money_2 = until.getNodeValue("level_money_2", xml);
			level_money_2 = (level_money_2/100);
			level_money_2 = parseFloat(level_money_2).toFixed(2);
			if(keyIsNotNull(level_name_2)){
				html += '<li>'+level_name_2+'<input  class="c1 c2" id="money2" value="'+level_money_2+'" type="text"/></li>';
			}
			var level_name_3 = until.getNodeValue("level_name_3", xml);
			var level_money_3 = until.getNodeValue("level_money_3", xml);
			level_money_3 = (level_money_3/100);
			level_money_3 = parseFloat(level_money_3).toFixed(2);
			if(keyIsNotNull(level_name_3)){
				html += '<li>'+level_name_3+'<input  class="c1 c2" id="money3" value="'+level_money_3+'" type="text"/></li>';
			}
			var level_name_4 = until.getNodeValue("level_name_4", xml);
			var level_money_4 = until.getNodeValue("level_money_4", xml);
			level_money_4 = (level_money_4/100);
			level_money_4 = parseFloat(level_money_4).toFixed(2);
			if(keyIsNotNull(level_name_4)){
				html += '<li>'+level_name_4+'<input  class="c1 c2" id="money4" value="'+level_money_4+'" type="text"/></li>';
			}
			var level_name_5 = until.getNodeValue("level_name_5", xml);
			var level_money_5 = until.getNodeValue("level_money_5", xml);
			level_money_5 = (level_money_5/100);
			level_money_5 = parseFloat(level_money_5).toFixed(2);
			if(keyIsNotNull(level_name_5)){
				html += '<li>'+level_name_5+'<input  class="c1 c2" id="money5" value="'+level_money_5+'" type="text"/></li>';
			}
			html+='<li><input class="c3" type="button" id="goSubmit" onclick="goSubmit('+level_num+');" value="保存"/></li></ul>';
			$("#feebody").html(html);
			break;
		default :
			alert(errormessage);
			break;
	}
}
function goSubmit(level_num){
	var params = [{ name : 'server_no',value : "400006"},
					{ name : 'level_num',value : level_num}];
	if(keyIsNotNull($("#money2").val())){
		var a = { name : 'level_money_2',value : $("#money2").val()*100};
		params.push(a);
	}
	if(keyIsNotNull($("#money3").val())){
		var a = { name : 'level_money_3',value : $("#money3").val()*100};
		params.push(a);
	}
	if(keyIsNotNull($("#money4").val())){
		var a = { name : 'level_money_4',value : $("#money4").val()*100};
		params.push(a);
	}
	if(keyIsNotNull($("#money5").val())){
		var a = { name : 'level_money_5',value : $("#money5").val()*100};
		params.push(a);
	}
	BaseRequest.resquest(params,"/cgi-bin/update_upgrade_amount.cgi",requestGoSubmitResult);
	
}
function requestGoSubmitResult(xml){
	var errorcode = until.getNodeValue("errorcode", xml); //返回码
	var errormessage = until.getNodeValue("errormessage", xml); //返回信息
	switch(errorcode){
		case "0000":
			alert("修改成功！");
			break;
		default :
			alert(errormessage);
			break;
	}
}
function keyIsNotNull(key){
	if(key!=null&&key!=""){
		return true;
	}
	return false;
}