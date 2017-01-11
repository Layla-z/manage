var Register_user = {
	/*��������*/
    name : "",
    pwd : "",
    wait : '80',
    strength : '1',
    isUserUin : false,
    isUserMobile : false,
    uinState : false,
    pwdState : false,
    pwd_repeatState : false,
    mobileState : false,
    vericodeState : false,
	recomm_person :'',
    type : until.getQueryString('type') === null ? '1' : base64decode(until.getQueryString('type')),
    userNamehandle : function(xml)
    {
        var retcode = until.getNodeValue("errorcode", xml);   //������
        var retmsg = until.getNodeValue("errormessage", xml); //������Ϣ
        var err_uin = $("err_uin");
        switch(retcode)
        {
            case "0000":
               this.isUserUin = true;
               alert( "һ��ע��ɹ������޸�");
              break;
            case "20001":
               this.isUserUin = false;
               
               //alert( "���û����ѱ�ʹ��");
               alert(retmsg);
              break;
            case "3007":
               this.isUserUin = false;
               
               alert(retmsg);
              break;
            default :
                Box.text({
                    title : "��ܰ��ʾ",
                    infoPic : "1",
                    info : retmsg,
                    w : 350
                });
              break;
        }
    },    

    //��¼�����ȡ������֤
    pwdFocus : function(obj)
    {    
        var pwd_value = obj.value,
            err_pwd = $("err_pwd"),
            first = pwd_value.charAt(0),
            num = 0;
        if(pwd_value.length == 0 || pwd_value == "")
        {
    
            alert("6-16���ַ�����ʹ����ĸ��������ɣ����ܵ���ʹ���ַ������֡�");
            return false;
        }
        for(var i=0;i<pwd_value.length;i++)
        {
            if(first == pwd_value.charAt(i))
            {
                num++;
            }
        }
        if(pwd_value != "" && (pwd_value.length == num))
        {
            
            alert( "���벻��Ϊͬһ�ַ�");
            Register_user.pwd_repeatShow();
            return false;
        }
        if(pwd_value != "" && (pwd_value.length < 6 || pwd_value.length > 16))
        {
            
            alert("����6-16���ַ�");
            Register_user.pwd_repeatShow();
            return false;
        }
        var regPwd = /^[a-zA-Z]{6,16}$/;
        if(regPwd.test(pwd_value) == true)
        {
            
            alert( "���벻��ȫΪ��ĸ");
            Register_user.pwd_repeatShow();
            return false;
        }
        regPwd = /^[0-9]{6,16}$/;
        if(regPwd.test(pwd_value) == true)
        {
            
            alert( "���벻��ȫΪ����");
                Register_user.pwd_repeatShow();
            return false;
        }
    },

    //��¼����ʧȥ������֤
    pwdBlur : function(obj)
    {
        var pwd_value = obj.value,
            err_pwd = $("err_pwd");
        if("" == pwd_value)
        {
            
            alert("����������");
            Register_user.pwd_repeatShow();
            return false;
        }    
        if(pwd_value != "" && (pwd_value.length < 6 ||pwd_value.length > 16))
        {
            
            alert("����6-16���ַ�");
            Register_user.pwd_repeatShow();
            return false;
        }
        var regPwd = /^[a-zA-Z0-9]{6,16}$/;
        if(regPwd.test(pwd_value) == false)
        {
            
            alert("6-16���ַ�����ʹ����ĸ��������ɣ����ܵ���ʹ���ַ������֡�");
            Register_user.pwd_repeatShow();
            return false;
        }
        var first = pwd_value.charAt(0),
            num = 0;
        for(var i=0;i<pwd_value.length;i++)
        {
            if(first == pwd_value.charAt(i))
            {
                num++;
            }
        }
        if(pwd_value.length == num)
        {
            
            alert( "���벻��Ϊͬһ�ַ�");
            Register_user.pwd_repeatShow();
            return false;
        }
        regPwd = /^[a-zA-Z]{6,16}$/;
        if(regPwd.test(pwd_value) == true)
        {
            
            alert( "���벻��ȫΪ��ĸ");
            Register_user.pwd_repeatShow();
            return false;
        }
        regPwd = /^[0-9]{6,16}$/;
        if(regPwd.test(pwd_value) == true)
        {
            
            alert( "���벻��ȫΪ����");
            Register_user.pwd_repeatShow();
            return false;
        }
        regPwd = /^[a-zA-Z0-9]{6,16}$/;
        if(pwd_value != "" && (regPwd.test(pwd_value) == true))
        {
            this.pwdState = true;
            
            //alert("");
            //$("pwd_repeat").disabled = false;  
            //$("pwd_repeat").readOnly = false;   
            return true;
        }
    },


    //ȷ�������ȡ������֤
    pwd_repeatFocus : function(obj)
    {    
        var err_pwd_repeat = $("err_pwd_repeat");
        var pwd_repeat_readOnly = $("pwd_repeat").readOnly;
        if((obj.value.length == 0 || obj.value == "") && !pwd_repeat_readOnly )
        {
             
             alert("���ٴ���������");
             return false;
        }
        if(obj.value != "" && (obj.value != $("pwd").value) && pwd_repeat_readOnly == false)
        {
            
            alert("�����������벻һ��");
             return false;
        }
    },

    //ȷ������ʧȥ������֤
    pwd_repeatBlur : function(obj)
    {
        var err_pwd_repeat = $("err_pwd_repeat");
        var pwd_repeat_readOnly = $("pwd_repeat").readOnly;

        if("" == obj.value && pwd_repeat_readOnly == false)
        {
            
            alert("���ٴ���������");
            return false;
        }    
        if(obj.value != $("pwd").value && pwd_repeat_readOnly == false)
        {
            
            alert("�����������벻һ��");
            return false;
        }
        if(obj.value != "" && (obj.value == $("pwd").value) && pwd_repeat_readOnly == false)
        {
            this.pwd_repeatState = true;
            alert( "");
            return true;
        }
    },

    /* �ύ��Ϣ  */
    AddRegister_Info : function ()
    {
        //var name = $('name').value;
        this.name = name;

        var key = "MTIzNDU2Nzg4NzY1NDMyMTEyMzQ1Njc4Cg==";
        var desret = triple_des(key, $('pwd').value, 1, 0,0,3);
        this.pwd = stringToHex(desret);

        var desret_repeat = triple_des(key, $('pwd_repeat').value, 1, 0,0,3);
        var pwd_repeat = stringToHex(desret_repeat);
	
        request.sendUpdate.call(this, '/cgi-bin/set_new_pwd.cgi', 
                   [{ name : 'server_no',value :"100010"}, 
                    { name : 'new_pwd',         value : this.pwd }, 
                    { name : 'pwd_repeat',  value : pwd_repeat },
                    { name : 'uin',      value : $('mobile').value }, 
                    { name : 'verify_code', value : $('vericode').value }, 
//                    { name : 'strength',    value : Register_user.strength }, 
//                    { name : 'mobile_rec',  value : $('mobile_rec').value },
                    { name : 'op_type',   value : "1" }, 
                    { name : 'v',           value : Math.random() }
                   ],Register_user.AddRegister_Infohandle);
    },
    AddRegister_Infohandle : function(xml)
    {
    	console.log(xml)
        var retcode = until.getNodeValue("errorcode", xml); //������
        var retmsg = until.getNodeValue("errormessage", xml); //������Ϣ
        switch(retcode)
        {
            case "0":
            case "0000":
            	alert("��ϲ�㣬�޸ĳɹ�!");
                window.location.href = "http://www.transt.cn";
                //ע����ɺ��Զ���¼
                //Register_user.login();
               break;
            case "3007":
                alert(retmsg);
               break;
            default :
                alert(retmsg);
              break;
        }
    },
    setVm:function(val){
        var key = "ODc2NTU2Nzg4NzY1NTY3ODg3NjU1Njc4Cg==";
        var desret = triple_des(key,val, 1, 0, 0, 3);
        return stringToHex(desret);
    },
    /* �ύ������֤��  */
    SendMobileVericode : function ()
    {
        //var name = $('name').value;
        var mobile = until.trim($('mobile').value);
        var v=Math.random()+'';
        var vm=this.setVm(mobile+ v.substring(v.length-7, v.length-1));
        //this.name = name;
        request.sendUpdate.call(this, '/cgi-bin/send_phone_vericode.cgi', 
                 [
                  { name : 'op_id',  value : "0" },
                  { name : 'code',  value : v },
                  { name : 'op_type',value : "1" },
                  { name : 'op_stat',value : "1" },
                  { name : 'mobile', value : mobile },
                  { name : 'vm', value : vm }
                 ],Register_user.SendMobileVericodehandle);
    },

    SendMobileVericodehandle: function(xml)
    {	
    	console.log(xml)
        var retcode = until.getNodeValue("errorcode", xml); //������
        var retmsg = until.getNodeValue("errormessage", xml); //������Ϣ
        switch(retcode)
        {
            case "0":
            case "0000":
            	Register_user.time($('send_mobile_vericode'));
               break;
             default :
                  alert(retmsg);
               break;
        }
    },    

	
    //��֤������Ϣ
    checkForm : function ()
    {
         //var name = $("name").value,
             pwd = $("pwd").value,
             pwd_repeat = $("pwd_repeat").value,
             mobile = $("mobile").value;
			 
		var err_uin = $("err_uin"),
			err_pwd = $("err_pwd"),
			err_pwd_repeat = $("err_pwd_repeat"),
			err_mobile = $("err_mobile");

        /*if("" == name)
        {
            
            alert("5-25���ַ�,����ĸ�����֡��»��ߡ��������");
            return false;
        }  
        if(name != "" && (name.length < 5 || name.length > 25))
        {
            
			alert("�û���5-25���ַ�");
            return false;
        }
        var regUser = /^[0-9]{5,25}$/;
        if(regUser.test(name) == true)
        {
            
            alert("�û�������ȫΪ����");
            return false;
        }
        regUser = /^[a-zA-Z0-9][a-zA-Z0-9_-]{2,16}[a-zA-Z0-9]$/;
        if(regUser.test(name) == false)
        {
            
            alert("5-25���ַ�,����ĸ�����֡��»��ߡ��������");
            return false;
        }
		if( regUser.test(name) == true && !Register_user.isUserUin)
		{
            
            alert("���û����ѱ�ע��");
            return false;
		}*/
		
        var  first = pwd.charAt(0),
            num = 0;
		
		if(pwd == "" || pwd.length <= 0 || pwd.length > 16)
        {
    
            alert("6-16���ַ�����ʹ����ĸ��������ɣ����ܵ���ʹ���ַ������֡�");
            return false;
        }
        for(var i=0;i<pwd.length;i++)
        {
            if(first == pwd.charAt(i))
            {
                num++;
            }
        }
        if(pwd != "" && (pwd.length == num))
        {
            
            alert( "�û����벻��Ϊͬһ�ַ�");
            Register_user.pwd_repeatShow();
            return false;
        }
        if(pwd != "" && (pwd.length < 6 || pwd.length > 16))
        {
            
            alert("�û�����6-16���ַ�");
            Register_user.pwd_repeatShow();
            return false;
        }
        var regPwd = /^[a-zA-Z]{6,16}$/;
        if(regPwd.test(pwd) == true)
        {
            
            alert( "�û����벻��ȫΪ��ĸ");
            Register_user.pwd_repeatShow();
            return false;
        }
        regPwd = /^[0-9]{6,16}$/;
        if(regPwd.test(pwd) == true)
        {
            
            alert( "�û����벻��ȫΪ����");
			Register_user.pwd_repeatShow();
            return false;
        }

        if((pwd_repeat.length == 0 || pwd_repeat == "") && !Register_user.pwd_repeat_readOnly )
        {
             
             alert("���ٴ���������");
             return false;
        }

        if(pwd_repeat != "" && (pwd_repeat != pwd) )
        {
            
            alert("�����������벻һ��");
             return false;
        }

		if("" == mobile)
        {
            
            alert("�ֻ��Ų���Ϊ��");
            return false;
        }
        var regMobile = /^[1]{1}[0-9]{10}$/;
        if(regMobile.test(mobile) == false)
        {
            
            alert("��������ȷ�ֻ���");
            return false;
        }
/*		if( regUser.test(mobile) == true && !Register_user.isUserMobile)
		{
            
            alert("���ֻ����ѱ���");
            return false;
		}*/	
			
		return true;

	},
	checkMobile : function() {
		var mobile = $("mobile").value;
		
		if("" == mobile)
        {
            
            alert("�ֻ��Ų���Ϊ��");
            return false;
        }
        var regMobile = /^[1]{1}[0-9]{10}$/;
        if(regMobile.test(mobile) == false)
        {
            
            alert("��������ȷ�ֻ���");
            return false;
        }
        return true;
	},

	//��Ϣ���ύ��֤
	checkFormRegister : function (){

				var ret = Register_user.checkForm();
				var vericode = $('vericode').value;
				var err_vericode = $('err_vericode');	

				if(ret == true){
						if("" == vericode)
						{    
								
							alert("�������ֻ���֤��");
							return false;
						}    
						var regVericode = /[0-9]{6}$/;
						if(regVericode.test(vericode) == false)
						{    
								
								alert("����ȷ������֤��");
								return false;
						}    

						Register_user.AddRegister_Info();
				}
	},

time : function(o) 
	   {
			   if (this.wait == 0)
			   {
					   o.removeAttribute("disabled");
					   o.style.background = "#EA7500";  
					   o.innerHTML = "���·���";
					   this.wait = 80;
			   }
			   else
			   {
					   o.setAttribute("disabled", true);
					   o.style.background = "#DDD";  
					   o.innerHTML = "�ѷ���(" + this.wait + ")";
					   this.wait--;
					   setTimeout(function() {
									   Register_user.time(o)
									   },1000)
			   }
	   },
init : function()
	   {
			   //$('agree_check').checked = true;

			   //$('create_user_info').disabled = true;
			   //$('create_user_info').style.background = "#DDD";  
			   //document.getElementById('vericode').disabled = true;
			   //Register_user.onload();        
			   
			   //Register_user.cleanForm();
			   
	   			//Register_user.time($('send_mobile_vericode'));

			   //��ȡ��֤��
			   //$('vericode').disabled = false;
			   $('send_mobile_vericode').onclick =  function() 
			   {
					if(Register_user.checkMobile()){
					   Register_user.SendMobileVericode();
					}
			   }

			   //�޸����밴ť 
			   $('submit_apply').onclick = function()
			   {
					   Register_user.checkFormRegister();        
			   }        
	   }
}
