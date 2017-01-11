var ShopCode = {
	init:function(){
		//��ѯ�ҵ��տ�����Ѱ�
		ShopCode.findPaymentCode();
		document.getElementById("rbody").style.display="none";//block
		//��ά��ע�������ѯ
		document.getElementById("check").onclick = function(){
			var qrcode_id = document.getElementById("qrcode_id").value;
			if(qrcode_id==null||qrcode_id==""||qrcode_id==undefined||qrcode_id=="undefined"){
				alert("û���ҵ�");
				document.getElementById("rbody").style.display="none";//block
				return;
			}
			ShopCode.findById(qrcode_id);
		};
		//��ά����������
		document.getElementById("downloadQrcode").onclick = function(){
			var qrcodeNumber = document.getElementById("qrcodeNumber").value;
			if(qrcodeNumber<=0||qrcodeNumber>1000){
				alert("��������,����1000");
				return;
			}
			if(window.confirm('����'+qrcodeNumber+'���տ���')){
                ShopCode.downloadQrcode(qrcodeNumber);
            }else{
                return false;
            }
		};
	},
	//��ѯ�ҵ��տ�����Ѱ�
	findPaymentCode:function(){
		var params = [{ name : 'server_no',value : "300006"}];
        request.sendQuery.call(this, '/cgi-bin/query_cmer_detail.cgi',params,ShopCode.findPaymentCodeResult);
	},
	findPaymentCodeResult:function(xml){
		var retcode = until.getNodeValue("errorcode", xml); //������
        var retmsg = until.getNodeValue("errormessage", xml); //������Ϣ
        switch(retcode){
            case "0000":
				//cmer_level = 1,һ���̻�������
				var cmer_level = until.getNodeValue("cmer_level", xml);
				document.getElementById("qrcode_total_num").innerHTML=until.getNodeValue("qrcode_total_num", xml);
				if(cmer_level==1||cmer_level=="1"){
					document.getElementById("qrcode_total_num").innerHTML="����";
				}
				document.getElementById("qrcode_reg_num").innerHTML=until.getNodeValue("qrcode_reg_num", xml);
                break;
            default :
                alert(retmsg);
                break;
        }
	},
	//��ά��ע�������ѯ
	findById:function(qrcode_id){
		var params = [
						{ name : 'server_no',value : "300015"},
						{ name : 'qrcode_id',value : qrcode_id}
					 ];
		//alert("qrcode_id=="+qrcode_id);
        request.sendQuery.call(this, '/cgi-bin/qr_id_query.cgi',params,ShopCode.findByIdResult);
	},
	findByIdResult:function(xml){
		var retcode = until.getNodeValue("errorcode", xml); //������
        var retmsg = until.getNodeValue("errormessage", xml); //������Ϣ
        switch(retcode){
            case "0000":
				var create_time = until.getNodeValue("create_time", xml);
				if(create_time!=null&&create_time!=""){
					document.getElementById("rbody").style.display="block";//block
					var qrcode_id = document.getElementById("qrcode_id").value;
					document.getElementById("gatheringNumber").innerHTML=qrcode_id;
					document.getElementById("short_name").innerHTML=until.getNodeValue("short_name", xml);
					document.getElementById("create_time").innerHTML=create_time;
					document.getElementById("bind_time").innerHTML=until.getNodeValue("bind_time", xml);
				}else{
					alert("û���ҵ�");
					document.getElementById("rbody").style.display="none";//block
				}
                break;
            default :
                alert(retmsg);
                break;
        }
	},
	//��ά����������
	downloadQrcode:function(qrcodeNumber){
		var params = [
						{ name : 'server_no',value : "300014"},
						{ name : 'number',value : qrcodeNumber}
					 ];
        request.sendQuery.call(this, '/cgi-bin/qr_make_list.cgi',params,ShopCode.downloadQrcodeResult);
	},
	downloadQrcodeResult:function(xml){
		var retcode = until.getNodeValue("errorcode", xml); //������
        var retmsg = until.getNodeValue("errormessage", xml); //������Ϣ
        switch(retcode){
            case "0000":
				//���ض�ά���
				var qr_url = until.getNodeValue("qr_url", xml); //������
				location.href=qr_url;
                break;
            default :
                alert(retmsg);
                break;
        }
	},
	
	//����֧����ά��
	createCode:function(codeURL){
		var qrcode = new QRCode(document.getElementById("tgCode"), {
			width : 200,//���ÿ��
			height : 200
		});
		qrcode.makeCode(codeURL);
	}
}
