var Register_user = {            
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
    
    //�ύ����Ƿ�Ϊ��
    checkNull : function(obj,err){
    if("" == obj.value)
        {
         
         alert("����Ϊ��");
             return false;
    }
    return true;
    },

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

    //���ȷ�����������Ϣ
    pwd_repeatShow :function ()
    {
        var err_pwd_repeat = $("err_pwd_repeat");
        //alert("");
        return false;
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
    //��֤���ȡ������֤
    verifyCodeFocus : function(obj)
    {    
        var err_code = $("err_code");
        var code  = $("getVerifyCode").value;
        var vali_code  = valiCode(obj,code);
        if(obj.value.length == 0 || obj.value == "" )
        {
            //err_code.className = "import_prompt_code";
            alert("");
            return false;
        }
        if(obj.value != "" && !vali_code)
        {
        
            alert("��֤�����");
            return false;
        }
    },
    //��֤��ʧȥ������֤
    verifyCodeBlur : function(obj)
    {
        var err_code = $("err_code");
        var code  = $("getVerifyCode").value;
        var vali_code  = valiCode(obj,code);

        if("" == obj.value)
        {
        
            alert("��������֤��");
            return false;
        }    

        if(obj.value != "" && !vali_code)
        {
        
            alert("��֤�����");
            return false;
        }

        if(obj.value != "" && vali_code)
        {
            this.vericodeState = true;
            alert( "");
            return true;
        }
    },
    //�ֻ��Ż�ȡ������֤
    userMobileFocus : function(obj)
    {
        var err_mobile = $("err_mobile"),
            regMobile = /^[1]{1}[0-9]{10}$/;
        if(obj.value.length == 0 || obj.value == "")
        {
            alert("�������ֻ���");    
            return false;
        }
        if(obj.value != "" && (obj.value.length < 11 || obj.value.length > 11))
        {
            alert("��������ȷ�ֻ���");
            return false;
        }
        if(regMobile.test(obj.value) == true )
        {
            return true;
        }
    },
    //�ֻ���ʧȥ������֤
    userMobileBlur : function(obj)
    {
        var err_mobile = $("err_mobile");
        if("" == obj.value)
        {
            
            alert("�������ֻ���");
            return false;
        }    
        var regMobile = /^[1]{1}[0-9]{10}$/;
        if(regMobile.test(obj.value) == false)
        {
            
            alert("��������ȷ�ֻ���");
            return false;
        }

        var regMobile = /^[1]{1}[0-9]{10}$/;
        if(obj.value != "" && regMobile.test(obj.value) == true && Register_user.isUserMobile)
        {
            this.mobileState = true;
            
            alert( "");
            return true;
        }
        else
        {
            return false;
        }

        var regMobile = /^[1]{1}[0-9]{10}$/;
        if(regMobile.test(obj.value))
        {
            this.mobileState = true;
            
            alert( "");
            return true;
        }
    },
    userMobilehandle : function(xml)
    {
        var retcode = until.getNodeValue("errorcode", xml);   //������
        var retmsg = until.getNodeValue("errormessage", xml); //������Ϣ
        var err_mobile = $("err_mobile");
        switch(retcode)
        {
            case "0000":
               this.isUserMobile = true;
               
               alert("");
              break;
            case "20001":
               this.isUserMobile = false;
               
               alert(retmsg);
              break;
            case "3007":
               this.isUserMobile = false;
               
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
    //��֤���ȡ������֤
    veriCodeFocus : function(obj)
    {
        var err_vericode= $("err_vericode"),
            regVericode= /^[0-9]{6}$/;
        if(obj.value.length == 0 || obj.value == "")
        {
            alert("�������ֻ���֤��");    
            return false;
        }
        if(regVericode.test(obj.value) == true )
        {
            return true;
        }
        else
        {
            alert("����ȷ������֤��");
            return false;
        }
    },
    //��֤��ʧȥ������֤
    veriCodeBlur : function(obj)
    {
        var err_vericode = $("err_vericode");
        if("" == obj.value)
        {
            
            alert("�������ֻ���֤��");
            return false;
        }    
        var regVericode = /[0-9]{6}$/;
        if(regVericode.test(obj.value) == false)
        {
            
            alert("����ȷ������֤��");
            return false;
        }
        else
        {
            this.vericodeState = true;
            alert( "");
            return true;
        }
    },
    //����ĳ���ַ���������һ��.  
    CharMode : function(iN)
    {  
        if (iN>=48 && iN <=57) //����  
            return 1;  
        if (iN>=65 && iN <=90) //��д��ĸ  
            return 2;  
        if (iN>=97 && iN <=122) //Сд  
            return 4;  
        else  
            return 8; //�����ַ�  
    }, 
    //�������ǰ���뵱��һ���ж�����ģʽ  
    bitTotal : function(num)
    {  
        var modes = 0;  
        for (i=0;i<4;i++)
        {  
            if (num & 1)
            {
                modes++;  
            }
            num /= 2;  
        }  
        return modes;  
    }, 
    //���������ǿ�ȼ���  
    checkStrong : function(sPW)
    {  
        if (sPW.length<=4)  
            return 0; //����̫��  
        Modes=0;  
        for (i=0;i<sPW.length;i++)
        {  
            //����ÿһ���ַ������ͳ��һ���ж�����ģʽ.  
            Modes|=Register_user.CharMode(sPW.charCodeAt(i));  
        }  
        return Register_user.bitTotal(Modes);  
    }, 
    //���û��ſ����̻����������ʧȥ����ʱ�����ݲ�ͬ�ļ�����ʾ��ͬ����ɫ  
    pwdStrength : function(pwd)
    {  
        var L_color="#FF5809",
            M_color="#FFBD9D",  
            H_color="#FFBD9D",

            init_color="#FFBD9D",
            level_color="#FF5809";  

        if (pwd==null||pwd=='')  //��
        {  
            L_color = level_color;  
            M_color = H_color = init_color;  
        }
        else
        {  
            S_level = Register_user.checkStrong(pwd);  
            switch(S_level) 
            {  
                case 0:  
                    L_color = level_color;  
                    M_color = H_color = init_color;  
                   break;
                case 1:                       //�� 
                    L_color = level_color;  
                    M_color = H_color = init_color;  
                   break;  
                case 2:                       //�� 
                    L_color = M_color = level_color;  
                    H_color = init_color;  
                   break;  
                default:                      //ǿ
                    L_color = M_color = H_color = level_color;  
                   break;
            }  
            $('strength').value = Register_user.strength = S_level;
        }     
        $("strength_L").style.background = L_color;  
        $("strength_M").style.background = M_color;  
        $("strength_H").style.background = H_color;  
    },
    //��ʼ��ע����Ϣ������֤
    onload : function()
    {
       /* //�û�����ȡ�����¼�
        $("name").onfocus = function()
        {
            Register_user.userNameFocus(this);
        }
        //�û��������¼�
        $("name").onblur = function()
        {
            //Register_user.userNameBlur(this);
        }*/
        //��¼�����ȡ�����¼�
        $("pwd").onfocus = function()
        {
            //Register_user.pwdFocus(this);
        }
        //��¼����ʧȥ�����¼�
        $("pwd").onblur = function()
        {
            if(Register_user.pwdBlur(this))
            {
                //$("pwd_repeat").disabled = false;  
                $("pwd_repeat").readOnly = false;   
            }
            else
            {
                //$("pwd_repeat").disabled = true;  
                $("pwd_repeat").readOnly = false;   
            } 
        }
        //ȷ�������ȡ�����¼�
        $("pwd_repeat").onfocus = function()
        {
            //Register_user.pwd_repeatFocus(this);
        }
        //ȷ������ʧȥ�����¼�
        $("pwd_repeat").onblur = function()
        {
            //Register_user.pwd_repeatBlur(this);
        }    
        //�ֻ��Ż�ȡ�����¼�
        $("mobile").onfocus = function()
        {
            //Register_user.userMobileFocus(this);
        }
        //�ֻ��Ž����¼�
        $("mobile").onblur = function()
        {
            //Register_user.userMobileBlur(this);
        }
        //��֤���ȡ�����¼�
        $("vericode").onfocus = function()
        {
            //Register_user.veriCodeFocus(this);
        }
        //��֤��ʧȥ�����¼�
        $("vericode").onblur = function()
        {
            //Register_user.veriCodeBlur(this);
        }
    },    
    /* �ύ��¼  */
    login : function(){
        var params = [{
                name : 'name',
                value : this.name
            },{
                name : 'pwd',
                value : this.pwd
            },{
                name : 'v',
                value : Math.random()
            }
            ];
        request.sendUpdate.call(this, '/cgi-bin/user_login.cgi', params, this.uinloginHandle);
     },
     uinloginHandle : function(xml){
        var errorcode = until.getNodeValue("errorcode", xml); //������
        var errormessage = until.getNodeValue("errormessage", xml); //������Ϣ
        var state = until.getNodeValue("state", xml); //�����ֶ�
        var user_type = until.getNodeValue("user_type", xml);
        switch (errorcode){
             case "0":
             case "0000":
             	alert("��ϲ�㣬ע��ɹ�!")
                  location.href = "http://www.caidahu.com/auth/account.shtml";
                  break;
           default:
				 Box.text({
                title : "��ܰ��ʾ",
                infoPic : "2",
                info : '��¼��ʱ�������� <a href="http://www.caidahu.com/login.shtml">��¼</a> !',
                w : 350,
                btns : [["�ر�", function () {
                            Box.close();
                        }
                    ]]
					});
                  break;
        }
     },

    /* �ύע����Ϣ  */
    AddRegister_Info : function (){
        //var name = $('name').value;
        this.name = name;

        var key = "MTIzNDU2Nzg4NzY1NDMyMTEyMzQ1Njc4Cg==";
        var desret = triple_des(key, $('pwd').value, 1, 0,0,3);
        this.pwd = stringToHex(desret);

        var desret_repeat = triple_des(key, $('pwd_repeat').value, 1, 0,0,3);
        var pwd_repeat = stringToHex(desret_repeat);
	
        request.sendUpdate.call(this, '/cgi-bin/app_user_reg.cgi', 
                   [{ name : 'invitation_code',value : $('invitation_code').value }, 
                    { name : 'pwd',         value : this.pwd }, 
                    { name : 'pwd_repeat',  value : pwd_repeat },
                    { name : 'mobile',      value : $('mobile').value }, 
                    { name : 'verify_code', value : $('vericode').value },
                    { name : 'user_type',   value : this.type }, 
                    { name : 'v',           value : Math.random() }
                   ],Register_user.AddRegister_Infohandle);
    },
    AddRegister_Infohandle : function(xml){
    	console.log(xml)
        var retcode = until.getNodeValue("errorcode", xml); //������
        var retmsg = until.getNodeValue("errormessage", xml); //������Ϣ
        switch(retcode){
            case "0":
            case "0000":
            	alert("��ϲ�㣬ע��ɹ�!");
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
    SendMobileVericode : function (){
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

    SendMobileVericodehandle: function(xml){	
    	//console.log(xml)
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
    checkForm : function (){
             pwd = $("pwd").value,
             pwd_repeat = $("pwd_repeat").value,
             mobile = $("mobile").value;
			 
		var err_uin = $("err_uin"),
			err_pwd = $("err_pwd"),
			err_pwd_repeat = $("err_pwd_repeat"),
			err_mobile = $("err_mobile");
		
        var  first = pwd.charAt(0),
            num = 0;
		
		if(pwd == "" || pwd.length <= 0 || pwd.length > 16){
            alert("6-16���ַ�����ʹ����ĸ��������ɣ����ܵ���ʹ���ַ������֡�");
            return false;
        }
        for(var i=0;i<pwd.length;i++){
            if(first == pwd.charAt(i)){
                num++;
            }
        }
        if(pwd != "" && (pwd.length == num)){
            alert( "�û����벻��Ϊͬһ�ַ�");
            Register_user.pwd_repeatShow();
            return false;
        }
        if(pwd != "" && (pwd.length < 6 || pwd.length > 16)){
            alert("�û�����6-16���ַ�");
            Register_user.pwd_repeatShow();
            return false;
        }
        var regPwd = /^[a-zA-Z]{6,16}$/;
        if(regPwd.test(pwd) == true){
            
            alert( "�û����벻��ȫΪ��ĸ");
            Register_user.pwd_repeatShow();
            return false;
        }
        regPwd = /^[0-9]{6,16}$/;
        if(regPwd.test(pwd) == true){
            alert( "�û����벻��ȫΪ����");
			Register_user.pwd_repeatShow();
            return false;
        }
        if((pwd_repeat.length == 0 || pwd_repeat == "") && !Register_user.pwd_repeat_readOnly ){
             
             alert("���ٴ���������");
             return false;
        }
        if(pwd_repeat != "" && (pwd_repeat != pwd) ){
            
            alert("�����������벻һ��");
             return false;
        }
		return true;

	},
	checkFormVericode : function() {
		mobile = $("mobile").value;
		var regMobile = /^[1]{1}[0-9]{10}$/;
        if(regMobile.test(mobile) == false){
            alert("��������ȷ�ֻ���");
            return;
        }
		var errcode = Register_user.SendMobileVericode();
		if(errcode!="0000"&&errcode!=undefined){
			alert(errcode);
			return;
		}
		Register_user.time($('send_mobile_vericode'));
	},
	//ע����Ϣ���ύ��֤
	checkFormRegister : function (){
		var ret = Register_user.checkForm();
		var vericode = $('vericode').value;
		var err_vericode = $('err_vericode');	

		if(ret == true){
				if("" == vericode){    
						
						alert("�������ֻ���֤��");
						return false;
				}    
				var regVericode = /[0-9]{6}$/;
				if(regVericode.test(vericode) == false){    
						
						alert("����ȷ������֤��");
						return false;
				}
				Register_user.AddRegister_Info();
		}
	},
	time : function(o){
		   if (this.wait == 0){
				   o.removeAttribute("disabled");
				   o.style.background = "#EA7500";  
				   o.innerHTML = "���·���";
				   this.wait = 80;
		   }else{
				   o.setAttribute("disabled", true);
				   o.style.background = "#DDD";  
				   o.innerHTML = "�ѷ���(" + this.wait + ")";
				   this.wait--;
				   setTimeout(function() {
								   Register_user.time(o)
								   },1000)
		   }
	 },	
	 checkMobile : function() {
		var mobile = $("mobile").value;
		var invitation_code = $("invitation_code").value;
		if("" == invitation_code)
        {
            
            alert("�����벻��Ϊ��");
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
        return true;
	},
	init : function(){
	   //�Ƽ���
	   var re_person=until.getQueryString('g');
	   this.recomm_person=(re_person==""||re_person==null)?"":base64decode(re_person);
	   if(!(re_person==""||re_person==null)){
		   $('mobile_rec').value=this.recomm_person;
		   $('mobile_rec').disabled='true';
		   
	   }
	   //��ȡ��֤��
	   $('vericode').disabled = false;
	   $('send_mobile_vericode').onclick =  function() 
	   {
			if(Register_user.checkMobile()){
			   Register_user.SendMobileVericode();
			}
	   }
	   //ע�ᰴť 
	   $('create_user_info').onclick = function()
	   {
			   Register_user.checkFormRegister();        
	   }        
	}
}
