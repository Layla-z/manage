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
    
    //提交检查是否为空
    checkNull : function(obj,err){
    if("" == obj.value)
        {
         
         alert("不能为空");
             return false;
    }
    return true;
    },

    userNamehandle : function(xml)
    {
        var retcode = until.getNodeValue("errorcode", xml);   //返回码
        var retmsg = until.getNodeValue("errormessage", xml); //返回信息
        var err_uin = $("err_uin");
        switch(retcode)
        {
            case "0000":
               this.isUserUin = true;
               alert( "一旦注册成功不能修改");
              break;
            case "20001":
               this.isUserUin = false;
               
               //alert( "该用户名已被使用");
               alert(retmsg);
              break;
            case "3007":
               this.isUserUin = false;
               
               alert(retmsg);
              break;
            default :
                Box.text({
                    title : "温馨提示",
                    infoPic : "1",
                    info : retmsg,
                    w : 350
                });
              break;
        }
    },    

    //登录密码获取焦点验证
    pwdFocus : function(obj)
    {    
        var pwd_value = obj.value,
            err_pwd = $("err_pwd"),
            first = pwd_value.charAt(0),
            num = 0;
        if(pwd_value.length == 0 || pwd_value == "")
        {
    
            alert("6-16个字符，请使用字母加数字组成，不能单独使用字符或数字。");
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
            
            alert( "密码不能为同一字符");
            Register_user.pwd_repeatShow();
            return false;
        }
        if(pwd_value != "" && (pwd_value.length < 6 || pwd_value.length > 16))
        {
            
            alert("密码6-16个字符");
            Register_user.pwd_repeatShow();
            return false;
        }
        var regPwd = /^[a-zA-Z]{6,16}$/;
        if(regPwd.test(pwd_value) == true)
        {
            
            alert( "密码不能全为字母");
            Register_user.pwd_repeatShow();
            return false;
        }
        regPwd = /^[0-9]{6,16}$/;
        if(regPwd.test(pwd_value) == true)
        {
            
            alert( "密码不能全为数字");
                Register_user.pwd_repeatShow();
            return false;
        }
    },

    //登录密码失去焦点验证
    pwdBlur : function(obj)
    {
        var pwd_value = obj.value,
            err_pwd = $("err_pwd");
        if("" == pwd_value)
        {
            
            alert("请输入密码");
            Register_user.pwd_repeatShow();
            return false;
        }    
        if(pwd_value != "" && (pwd_value.length < 6 ||pwd_value.length > 16))
        {
            
            alert("密码6-16个字符");
            Register_user.pwd_repeatShow();
            return false;
        }
        var regPwd = /^[a-zA-Z0-9]{6,16}$/;
        if(regPwd.test(pwd_value) == false)
        {
            
            alert("6-16个字符，请使用字母加数字组成，不能单独使用字符或数字。");
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
            
            alert( "密码不能为同一字符");
            Register_user.pwd_repeatShow();
            return false;
        }
        regPwd = /^[a-zA-Z]{6,16}$/;
        if(regPwd.test(pwd_value) == true)
        {
            
            alert( "密码不能全为字母");
            Register_user.pwd_repeatShow();
            return false;
        }
        regPwd = /^[0-9]{6,16}$/;
        if(regPwd.test(pwd_value) == true)
        {
            
            alert( "密码不能全为数字");
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

    //清空确认密码错误信息
    pwd_repeatShow :function ()
    {
        var err_pwd_repeat = $("err_pwd_repeat");
        //alert("");
        return false;
    },

    //确认密码获取焦点验证
    pwd_repeatFocus : function(obj)
    {    
        var err_pwd_repeat = $("err_pwd_repeat");
        var pwd_repeat_readOnly = $("pwd_repeat").readOnly;
        if((obj.value.length == 0 || obj.value == "") && !pwd_repeat_readOnly )
        {
             
             alert("请再次输入密码");
             return false;
        }
        if(obj.value != "" && (obj.value != $("pwd").value) && pwd_repeat_readOnly == false)
        {
            
            alert("两次密码输入不一致");
             return false;
        }
    },

    //确认密码失去焦点验证
    pwd_repeatBlur : function(obj)
    {
        var err_pwd_repeat = $("err_pwd_repeat");
        var pwd_repeat_readOnly = $("pwd_repeat").readOnly;

        if("" == obj.value && pwd_repeat_readOnly == false)
        {
            
            alert("请再次输入密码");
            return false;
        }    
        if(obj.value != $("pwd").value && pwd_repeat_readOnly == false)
        {
            
            alert("两次密码输入不一致");
            return false;
        }
        if(obj.value != "" && (obj.value == $("pwd").value) && pwd_repeat_readOnly == false)
        {
            this.pwd_repeatState = true;
            alert( "");
            return true;
        }
    },
    //验证码获取焦点验证
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
        
            alert("验证码错误");
            return false;
        }
    },
    //验证码失去焦点验证
    verifyCodeBlur : function(obj)
    {
        var err_code = $("err_code");
        var code  = $("getVerifyCode").value;
        var vali_code  = valiCode(obj,code);

        if("" == obj.value)
        {
        
            alert("请输入验证码");
            return false;
        }    

        if(obj.value != "" && !vali_code)
        {
        
            alert("验证码错误");
            return false;
        }

        if(obj.value != "" && vali_code)
        {
            this.vericodeState = true;
            alert( "");
            return true;
        }
    },
    //手机号获取焦点验证
    userMobileFocus : function(obj)
    {
        var err_mobile = $("err_mobile"),
            regMobile = /^[1]{1}[0-9]{10}$/;
        if(obj.value.length == 0 || obj.value == "")
        {
            alert("请输入手机号");    
            return false;
        }
        if(obj.value != "" && (obj.value.length < 11 || obj.value.length > 11))
        {
            alert("请输入正确手机号");
            return false;
        }
        if(regMobile.test(obj.value) == true )
        {
            return true;
        }
    },
    //手机号失去焦点验证
    userMobileBlur : function(obj)
    {
        var err_mobile = $("err_mobile");
        if("" == obj.value)
        {
            
            alert("请输入手机号");
            return false;
        }    
        var regMobile = /^[1]{1}[0-9]{10}$/;
        if(regMobile.test(obj.value) == false)
        {
            
            alert("请输入正确手机号");
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
        var retcode = until.getNodeValue("errorcode", xml);   //返回码
        var retmsg = until.getNodeValue("errormessage", xml); //返回信息
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
                    title : "温馨提示",
                    infoPic : "1",
                    info : retmsg,
                    w : 350
                });
              break;
        }
    },    
    //验证码获取焦点验证
    veriCodeFocus : function(obj)
    {
        var err_vericode= $("err_vericode"),
            regVericode= /^[0-9]{6}$/;
        if(obj.value.length == 0 || obj.value == "")
        {
            alert("请输入手机验证码");    
            return false;
        }
        if(regVericode.test(obj.value) == true )
        {
            return true;
        }
        else
        {
            alert("请正确输入验证码");
            return false;
        }
    },
    //验证码失去焦点验证
    veriCodeBlur : function(obj)
    {
        var err_vericode = $("err_vericode");
        if("" == obj.value)
        {
            
            alert("请输入手机验证码");
            return false;
        }    
        var regVericode = /[0-9]{6}$/;
        if(regVericode.test(obj.value) == false)
        {
            
            alert("请正确输入验证码");
            return false;
        }
        else
        {
            this.vericodeState = true;
            alert( "");
            return true;
        }
    },
    //测试某个字符是属于哪一类.  
    CharMode : function(iN)
    {  
        if (iN>=48 && iN <=57) //数字  
            return 1;  
        if (iN>=65 && iN <=90) //大写字母  
            return 2;  
        if (iN>=97 && iN <=122) //小写  
            return 4;  
        else  
            return 8; //特殊字符  
    }, 
    //计算出当前密码当中一共有多少种模式  
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
    //返回密码的强度级别  
    checkStrong : function(sPW)
    {  
        if (sPW.length<=4)  
            return 0; //密码太短  
        Modes=0;  
        for (i=0;i<sPW.length;i++)
        {  
            //测试每一个字符的类别并统计一共有多少种模式.  
            Modes|=Register_user.CharMode(sPW.charCodeAt(i));  
        }  
        return Register_user.bitTotal(Modes);  
    }, 
    //当用户放开键盘或密码输入框失去焦点时，根据不同的级别显示不同的颜色  
    pwdStrength : function(pwd)
    {  
        var L_color="#FF5809",
            M_color="#FFBD9D",  
            H_color="#FFBD9D",

            init_color="#FFBD9D",
            level_color="#FF5809";  

        if (pwd==null||pwd=='')  //空
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
                case 1:                       //弱 
                    L_color = level_color;  
                    M_color = H_color = init_color;  
                   break;  
                case 2:                       //中 
                    L_color = M_color = level_color;  
                    H_color = init_color;  
                   break;  
                default:                      //强
                    L_color = M_color = H_color = level_color;  
                   break;
            }  
            $('strength').value = Register_user.strength = S_level;
        }     
        $("strength_L").style.background = L_color;  
        $("strength_M").style.background = M_color;  
        $("strength_H").style.background = H_color;  
    },
    //初始化注册信息焦点验证
    onload : function()
    {
       /* //用户名获取焦点事件
        $("name").onfocus = function()
        {
            Register_user.userNameFocus(this);
        }
        //用户名焦点事件
        $("name").onblur = function()
        {
            //Register_user.userNameBlur(this);
        }*/
        //登录密码获取焦点事件
        $("pwd").onfocus = function()
        {
            //Register_user.pwdFocus(this);
        }
        //登录密码失去焦点事件
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
        //确认密码获取焦点事件
        $("pwd_repeat").onfocus = function()
        {
            //Register_user.pwd_repeatFocus(this);
        }
        //确认密码失去焦点事件
        $("pwd_repeat").onblur = function()
        {
            //Register_user.pwd_repeatBlur(this);
        }    
        //手机号获取焦点事件
        $("mobile").onfocus = function()
        {
            //Register_user.userMobileFocus(this);
        }
        //手机号焦点事件
        $("mobile").onblur = function()
        {
            //Register_user.userMobileBlur(this);
        }
        //验证码获取焦点事件
        $("vericode").onfocus = function()
        {
            //Register_user.veriCodeFocus(this);
        }
        //验证码失去焦点事件
        $("vericode").onblur = function()
        {
            //Register_user.veriCodeBlur(this);
        }
    },    
    /* 提交登录  */
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
        var errorcode = until.getNodeValue("errorcode", xml); //返回码
        var errormessage = until.getNodeValue("errormessage", xml); //返回信息
        var state = until.getNodeValue("state", xml); //返回字段
        var user_type = until.getNodeValue("user_type", xml);
        switch (errorcode){
             case "0":
             case "0000":
             	alert("恭喜你，注册成功!")
                  location.href = "http://www.caidahu.com/auth/account.shtml";
                  break;
           default:
				 Box.text({
                title : "温馨提示",
                infoPic : "2",
                info : '登录超时，请重新 <a href="http://www.caidahu.com/login.shtml">登录</a> !',
                w : 350,
                btns : [["关闭", function () {
                            Box.close();
                        }
                    ]]
					});
                  break;
        }
     },

    /* 提交注册信息  */
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
        var retcode = until.getNodeValue("errorcode", xml); //返回码
        var retmsg = until.getNodeValue("errormessage", xml); //返回信息
        switch(retcode){
            case "0":
            case "0000":
            	alert("恭喜你，注册成功!");
                window.location.href = "http://www.transt.cn";
                //注册完成后自动登录
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
    /* 提交发送验证码  */
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
        var retcode = until.getNodeValue("errorcode", xml); //返回码
        var retmsg = until.getNodeValue("errormessage", xml); //返回信息
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
    //验证输入信息
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
            alert("6-16个字符，请使用字母加数字组成，不能单独使用字符或数字。");
            return false;
        }
        for(var i=0;i<pwd.length;i++){
            if(first == pwd.charAt(i)){
                num++;
            }
        }
        if(pwd != "" && (pwd.length == num)){
            alert( "用户密码不能为同一字符");
            Register_user.pwd_repeatShow();
            return false;
        }
        if(pwd != "" && (pwd.length < 6 || pwd.length > 16)){
            alert("用户密码6-16个字符");
            Register_user.pwd_repeatShow();
            return false;
        }
        var regPwd = /^[a-zA-Z]{6,16}$/;
        if(regPwd.test(pwd) == true){
            
            alert( "用户密码不能全为字母");
            Register_user.pwd_repeatShow();
            return false;
        }
        regPwd = /^[0-9]{6,16}$/;
        if(regPwd.test(pwd) == true){
            alert( "用户密码不能全为数字");
			Register_user.pwd_repeatShow();
            return false;
        }
        if((pwd_repeat.length == 0 || pwd_repeat == "") && !Register_user.pwd_repeat_readOnly ){
             
             alert("请再次输入密码");
             return false;
        }
        if(pwd_repeat != "" && (pwd_repeat != pwd) ){
            
            alert("两次密码输入不一致");
             return false;
        }
		return true;

	},
	checkFormVericode : function() {
		mobile = $("mobile").value;
		var regMobile = /^[1]{1}[0-9]{10}$/;
        if(regMobile.test(mobile) == false){
            alert("请输入正确手机号");
            return;
        }
		var errcode = Register_user.SendMobileVericode();
		if(errcode!="0000"&&errcode!=undefined){
			alert(errcode);
			return;
		}
		Register_user.time($('send_mobile_vericode'));
	},
	//注册信息表单提交验证
	checkFormRegister : function (){
		var ret = Register_user.checkForm();
		var vericode = $('vericode').value;
		var err_vericode = $('err_vericode');	

		if(ret == true){
				if("" == vericode){    
						
						alert("请输入手机验证码");
						return false;
				}    
				var regVericode = /[0-9]{6}$/;
				if(regVericode.test(vericode) == false){    
						
						alert("请正确输入验证码");
						return false;
				}
				Register_user.AddRegister_Info();
		}
	},
	time : function(o){
		   if (this.wait == 0){
				   o.removeAttribute("disabled");
				   o.style.background = "#EA7500";  
				   o.innerHTML = "重新发送";
				   this.wait = 80;
		   }else{
				   o.setAttribute("disabled", true);
				   o.style.background = "#DDD";  
				   o.innerHTML = "已发送(" + this.wait + ")";
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
            
            alert("邀请码不能为空");
            return false;
        }
		if("" == mobile)
        {
            
            alert("手机号不能为空");
            return false;
        }
        var regMobile = /^[1]{1}[0-9]{10}$/;
        if(regMobile.test(mobile) == false)
        {
            
            alert("请输入正确手机号");
            return false;
        }
        return true;
	},
	init : function(){
	   //推荐人
	   var re_person=until.getQueryString('g');
	   this.recomm_person=(re_person==""||re_person==null)?"":base64decode(re_person);
	   if(!(re_person==""||re_person==null)){
		   $('mobile_rec').value=this.recomm_person;
		   $('mobile_rec').disabled='true';
		   
	   }
	   //获取验证码
	   $('vericode').disabled = false;
	   $('send_mobile_vericode').onclick =  function() 
	   {
			if(Register_user.checkMobile()){
			   Register_user.SendMobileVericode();
			}
	   }
	   //注册按钮 
	   $('create_user_info').onclick = function()
	   {
			   Register_user.checkFormRegister();        
	   }        
	}
}
