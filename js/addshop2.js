var Addshop2 = {
	checkingPhone : function(xml){
		var retcode = until.getNodeValue("errorcode", xml); //������
		var retmsg = until.getNodeValue("errormessage", xml); //������Ϣ
		var err_uin = $("err_uin");
		switch(retcode){
			case "":
			case "0000":
			  break;
			default :
				alert(retmsg);
			  break;
		}
    },	
    //�ֻ���ʧȥ������֤
    phoneBlur : function(obj){
		var phone = obj.value.trim();
		if(phone==null||phone==""||phone.length<=0){
			alert("�ֻ��Ų���Ϊ�գ�");
			obj.focus();
			return false;
		}
		if(phone.length>11){
			alert("����ֻ���λ����");
			obj.focus();
			return false;
		}
		var params = [	
						{name : 'server_no',value : "100001"},
						{name : 'uin',value : phone}];
		request.sendQuery.call(this, '/cgi-bin/check_user_exist.cgi', params ,Addshop2.checkingPhone);
		return true;
    },
	nameBlur : function(obj){
		var name = obj.value.trim();
		if (name == null || name == "" || name.length<=0) {
			alert("��������Ϊ�գ�");
			obj.focus();
			return false;
		}
		return true;
	},
	emailBlur : function(obj){
		var email = obj.value.trim();
		if (!email.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)) {
			alert("�����ʽ����ȷ");
			//$("#confirmMsg").html("<font color='red'>�����ʽ����ȷ�����������룡</font>");
			obj.focus();
			return false;
		}
		return true;
	},
	next2Click : function(){
		if(!Addshop2.nameBlur(document.getElementById("contact_name"))||!Addshop2.phoneBlur(document.getElementById("contact_phone"))){
			//alert("�������������");
			return false;
		}
		var email = document.getElementById("contac_tmail").value;
		if(email != null&&email != ""&&email.length>0){
			var fig = Addshop2.emailBlur(document.getElementById("contac_tmail"));
			if(fig==false||fig=="false"){
				return false;
			}
		}
		window.sessionStorage.setItem("contact_name", document.getElementById("contact_name").value);
		window.sessionStorage.setItem("contact_phone", document.getElementById("contact_phone").value);
		window.sessionStorage.setItem("contac_tmail", document.getElementById("contac_tmail").value);
		return true;
	},
	 //��ʼ��ע����Ϣ������֤
    onload : function(){
		//���佹���¼�
		document.getElementById("contact_name").onblur = function(){
			Addshop2.nameBlur(this);
		};
		document.getElementById("contact_phone").onblur = function(){
			Addshop2.phoneBlur(this);
		};
		document.getElementById("next2").onclick = function(){
			var fig1 = Addshop2.next2Click();
			if(fig1==false||fig1=="false"){
				return;
			}
			location.href="addshop3.shtml";
		};
	},
	init : function(){
		Addshop2.onload();
	}
}
