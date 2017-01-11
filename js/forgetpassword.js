var Register_user = {
	/*忘记密码*/
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

    /* 提交信息  */
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
        var retcode = until.getNodeValue("errorcode", xml); //返回码
        var retmsg = until.getNodeValue("errormessage", xml); //返回信息
        switch(retcode)
        {
            case "0":
            case "0000":
            	alert("恭喜你，修改成功!");
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
            
            alert("5-25个字符,由字母、数字、下划线、减号组成");
            return false;
        }  
        if(name != "" && (name.length < 5 || name.length > 25))
        {
            
			alert("用户名5-25个字符");
            return false;
        }
        var regUser = /^[0-9]{5,25}$/;
        if(regUser.test(name) == true)
        {
            
            alert("用户名不能全为数字");
            return false;
        }
        regUser = /^[a-zA-Z0-9][a-zA-Z0-9_-]{2,16}[a-zA-Z0-9]$/;
        if(regUser.test(name) == false)
        {
            
            alert("5-25个字符,由字母、数字、下划线、减号组成");
            return false;
        }
		if( regUser.test(name) == true && !Register_user.isUserUin)
		{
            
            alert("该用户名已被注册");
            return false;
		}*/
		
        var  first = pwd.charAt(0),
            num = 0;
		
		if(pwd == "" || pwd.length <= 0 || pwd.length > 16)
        {
    
            alert("6-16个字符，请使用字母加数字组成，不能单独使用字符或数字。");
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
            
            alert( "用户密码不能为同一字符");
            Register_user.pwd_repeatShow();
            return false;
        }
        if(pwd != "" && (pwd.length < 6 || pwd.length > 16))
        {
            
            alert("用户密码6-16个字符");
            Register_user.pwd_repeatShow();
            return false;
        }
        var regPwd = /^[a-zA-Z]{6,16}$/;
        if(regPwd.test(pwd) == true)
        {
            
            alert( "用户密码不能全为字母");
            Register_user.pwd_repeatShow();
            return false;
        }
        regPwd = /^[0-9]{6,16}$/;
        if(regPwd.test(pwd) == true)
        {
            
            alert( "用户密码不能全为数字");
			Register_user.pwd_repeatShow();
            return false;
        }

        if((pwd_repeat.length == 0 || pwd_repeat == "") && !Register_user.pwd_repeat_readOnly )
        {
             
             alert("请再次输入密码");
             return false;
        }

        if(pwd_repeat != "" && (pwd_repeat != pwd) )
        {
            
            alert("两次密码输入不一致");
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
/*		if( regUser.test(mobile) == true && !Register_user.isUserMobile)
		{
            
            alert("该手机号已被绑定");
            return false;
		}*/	
			
		return true;

	},
	checkMobile : function() {
		var mobile = $("mobile").value;
		
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

	//信息表单提交验证
	checkFormRegister : function (){

				var ret = Register_user.checkForm();
				var vericode = $('vericode').value;
				var err_vericode = $('err_vericode');	

				if(ret == true){
						if("" == vericode)
						{    
								
							alert("请输入手机验证码");
							return false;
						}    
						var regVericode = /[0-9]{6}$/;
						if(regVericode.test(vericode) == false)
						{    
								
								alert("请正确输入验证码");
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
					   o.innerHTML = "重新发送";
					   this.wait = 80;
			   }
			   else
			   {
					   o.setAttribute("disabled", true);
					   o.style.background = "#DDD";  
					   o.innerHTML = "已发送(" + this.wait + ")";
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

			   //获取验证码
			   //$('vericode').disabled = false;
			   $('send_mobile_vericode').onclick =  function() 
			   {
					if(Register_user.checkMobile()){
					   Register_user.SendMobileVericode();
					}
			   }

			   //修改密码按钮 
			   $('submit_apply').onclick = function()
			   {
					   Register_user.checkFormRegister();        
			   }        
	   }
}
