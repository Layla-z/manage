var Login = {            
    err_msg : $('login-msg'),    
 
    checkForm : function()
    {
         var uin = until.trim($('uin').value);
         var pwd = until.trim($('pwd').value);
         var err_msg = $('login-msg');
         if((uin == "" ||uin.length==0)&&(pwd == "" || pwd.length == 0))
         {
             err_msg.className = "error";
             err_msg.innerHTML= "请输入手机名和登录密码";
             return false;
         }
         else if(uin.value == "" ||uin.length==0)
         {
             err_msg.className = "error";
             err_msg.innerHTML= "请输入手机名";
             return false;
         }
         else if(pwd.value == "" || pwd.length == 0)
         {
             err_msg.className = "error";
             err_msg.innerHTML= "请输入登录密码";
             return false;
         }
         else
         {
             Login.login();        
         }
    },
    login : function()
    {
        var uin = until.trim($('uin').value);

        var p = until.trim($('pwd').value);
        //var key = $('key').value;
        var key = "MTIzNDU2Nzg4NzY1NDMyMTEyMzQ1Njc4Cg==";
        window.sessionStorage.setItem("key", key);
        var desret = triple_des(key, p, 1, 0,0,3);
        window.sessionStorage.setItem("desret", desret);
        p = stringToHex(desret);
        window.sessionStorage.setItem("p", p);
        var params = [{
                name : 'uin',
                value : uin
            },{
                name : 'pwd',
                value : p
            },{
                name : 'v',
                value : Math.random()
            }
            ];
        request.sendUpdate.call(this, '/cgi-bin/user_login.cgi', params, this.uinloginHandle);
     },
     uinloginHandle : function(xml)
     {
     	//console.log(xml)
        var errorcode = until.getNodeValue("errorcode", xml); //返回码
        var errormessage = until.getNodeValue("errormessage", xml); //返回信息
        var state = until.getNodeValue("state", xml); //返回字段
        var user_type = until.getNodeValue("user_type", xml);
        window.sessionStorage.setItem("user_type",user_type);
        var err_msg = $('login-msg');
       // var uin = until.trim($('uin').value);
        switch (errorcode) 
        {
             case "0000":
					var u=g_CCookie.GetCookie('uno');
					if(u==''||u!=until.trim($('uin').value))
		 			Login.setUserCookie(7);
                 //   location.href = "manage/html/gailan.shtml";
                      location.href = "manage_platform/html/daily_count.shtml";
                     //检查是否注册完成
                     //Login.checkRegister();
                  break;
           default:
                    err_msg.className = "error";
                    err_msg.innerHTML= errormessage;
           break;
        }
     },
	 setUserCookie:function(expiredays){
		 var exdate=new Date();
		 exdate.setDate(exdate.getDate()+expiredays);
		 g_CCookie.SetCookie('uno',$('uin').value,exdate.toGMTString(),'/','transt.cn');
	 },
	 getUserCookie:function(){
		var uno=g_CCookie.GetCookie('uno');
		uno!=""?($('uin').value=uno):'';
	 },
     bindEnter : function(obj)
     {
          var button = document.getElementById('btn_login');
          if(obj.keyCode == 13)
          {
               button.click();
               obj.returnValue = false;
          }
     },
    init : function()
    {
         //document.getElementById('register').innerHTML = '<a href="http://www.transt.cn/register.shtml?type=' + base64encode("1") + '">免费注册</a>';

         $('btn_login').onclick = function()
         {
               Login.checkForm();
         }        
		 Login.getUserCookie();
    }
}
        
