var PasswordWork = {
	init : function(){
		$("#forgetBtn").click(function(event){
			var repeat_pwd = document.getElementById("repeat_pwd").value;
			var old_pwd = document.getElementById("old_pwd").value;
			var new_pwd = document.getElementById("new_pwd").value;
			var key = "MTIzNDU2Nzg4NzY1NDMyMTEyMzQ1Njc4Cg==";
			var old_pwd = triple_des(key, old_pwd, 1, 0,0,3);
			old_pwd = stringToHex(old_pwd);
	
			var new_pwd = triple_des(key, new_pwd, 1, 0,0,3);
			new_pwd = stringToHex(new_pwd);
	
			var repeat_pwd = triple_des(key, repeat_pwd, 1, 0,0,3);
			repeat_pwd = stringToHex(repeat_pwd);
			
			var params = [
						{ name : 'op_type',value : "1"},
						{ name : 'old_pwd',value : old_pwd},
						{ name : 'new_pwd',value : new_pwd},
						{ name : 'repeat_pwd',value : repeat_pwd}
					 ];
			BaseRequest.resquest(params,"/cgi-bin/modify_pwd.cgi",requestPasswordResult);
	    });
		$("#repeat_pwd").click(function(event){
			if(document.getElementById("repeat_pwd").value == "") {
				document.getElementById("namekong").setAttribute("visibility","visible");
			} else {
				document.getElementById("namekong").setAttribute("visibility","hidden");
			}
		});
		$("#old_pwd").click(function(event){
			if(document.getElementById("old_pwd").value == "") {
				document.getElementById("old_pwdkong").setAttribute("visibility","visible");
			} else {
				document.getElementById("old_pwdkong").setAttribute("visibility","hidden");
			}
		});
		$("#new_pwd").click(function(event){
			if(document.getElementById("new_pwd").value == "") {
				document.getElementById("new_pwdkong").setAttribute("visibility","visible");
			} else {
				document.getElementById("new_pwdkong").setAttribute("visibility","hidden");
			}
		});
	}
}
//modify_pwd.cgi返回的参数
function requestPasswordResult(xml){
	var retcode = until.getNodeValue("errorcode", xml); //返回码
	var retmsg = until.getNodeValue("errormessage", xml); //返回信息
	switch(retcode){
		case "0000":
			alert("恭喜你，成功改密！");
            self.location.href = "gailan.shtml";
			break;
		default :
			alert(retmsg);
			break;
	}
}