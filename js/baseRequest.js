var BaseRequest = {
	//����
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
	//��������
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
		var retcode = until.getNodeValue("errorcode", xml); //������
        var retmsg = until.getNodeValue("errormessage", xml); //������Ϣ
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
//qr_cmer_pay.cgi���صĲ���
function requestCustomResult(xml){
	var retcode = until.getNodeValue("errorcode", xml); //������
	var retmsg = until.getNodeValue("errormessage", xml); //������Ϣ
	switch(retcode){
		case "0000":
			var state = until.getNodeValue("state", xml);//״̬��1�������2�����ʧ��3����˳ɹ���4��δע��
			var account = until.getNodeValue("account", xml);//�˺�
			var short_name = until.getNodeValue("short_name", xml);//���
			var signature = until.getNodeValue("signature", xml);//ǩ��
			alert(state);
			break;
		default :
			alert(retmsg);
			break;
	}
}