var BaseRequest = {
	//例子
	/*
	init:function(){
		document.getElementById("check").onclick = function(){
			var qrcode_id = document.getElementById("qrcode_id").value;
			var params = [
						{ name : 'server_no',value : "300015"},
						{ name : 'number',value : qrcode_id}
					 ];
			BaseRequest.resquest(params,"/cgi-bin/qr_make_list.cgi",requestCustomResult);
		};
	},*/
	//公共方法
	resquest:function(params,url,menthodName){
		var a = { name : 'v',value : Math.random()};
		params.push(a);
		if(menthodName==undefined||menthodName=="undefined"||menthodName==null||menthodName==""||menthodName==0||menthodName=="0"){
			request.sendQuery.call(this, url ,params,BaseRequest.requestResult);
		}else{
			request.sendQuery.call(this, url ,params,menthodName);
		}
	},
	requestResult:function(xml){
		var retcode = until.getNodeValue("errorcode", xml); //返回码
        var retmsg = until.getNodeValue("errormessage", xml); //返回信息
        switch(retcode){
            case "0000":
				alert(retmsg);
                break;
            default :
                alert(retmsg);
                break;
        }
	}
}
//qr_cmer_pay.cgi返回的参数
function requestCustomResult(xml){
	var retcode = until.getNodeValue("errorcode", xml); //返回码
	var retmsg = until.getNodeValue("errormessage", xml); //返回信息
	switch(retcode){
		case "0000":
			var state = until.getNodeValue("state", xml);//状态：1、待审核2、审核失败3、审核成功、4、未注册
			var account = until.getNodeValue("account", xml);//账号
			var short_name = until.getNodeValue("short_name", xml);//简称
			var signature = until.getNodeValue("signature", xml);//签名
			alert(state);
			break;
		default :
			alert(retmsg);
			break;
	}
}