var GetCash = {
	param : base64decode(until.getQueryString('param') === null ? '' : until.getQueryString('param')),
	name : g_CCookie.GetCookie('xsuin'),
	wait : '80',
	tran_pwd : '',
	transpwd_status : '',
	truename_status : '',
	card_status : '',
	mobile_status : '',
	card_no : '',
	mobile : '',
	balance : '',
	out_fee : '0.00',
    investcount:0,

    q_invest_count : function () {
        var params = [
            {
                name : 'name',
                value : this.name
            }, {
                name : 'v',
                value : Math.random()
            }
        ];

    //    request.sendQuery.call(this, '/cgi-bin/query_cdh_invest_count.cgi', params, this.q_invest_counthandle);
    },
    q_invest_counthandle:function(xml){
        var retcode = until.getNodeValue("errorcode", xml); //返回码
        var retmsg = until.getNodeValue("errormessage", xml); //返回信息
        switch (retcode){
            case '0000':
                this.out_fee=until.getNodeValue("out_fee",xml)||0.00;
                document.getElementById('out_fee').innerHTML=this.out_fee;
                break;
            default :
                Box.text({
                    title : "温馨提示",
                    infoPic : "2",
                    info : retmsg,
                    w : 350,
                    btns : [["关闭", function () {
                        Box.close();
                    }
                    ]]
                });
                break;
        }
    },
    query_auth : function () {
		var params = [
				{
                   name : 'uin',
                   value : this.name
				}, {
				   name : 'v',
				   value : Math.random()	
				}
                ];

		request.sendQuery.call(this, '/app/query_auth_safe_stats.cgi', params, this.getAuthData);

 		var hash = [];
		for (var i = 0, n = params.length; i < n; ++i) {
			hash.push(params[i].name + '=' + params[i].value);
		}
		location.hash = hash.join('&');
	},
	/** 获取查询数据*/
	getAuthData : function (xml) {
		this.xml = xml;
		var retcode = until.getNodeValue("errorcode", this.xml); //返回码
		var retmsg = until.getNodeValue("errormessage", this.xml); //返回信息
		switch (retcode) {
		case "0":
		case "0000":
			   this.transpwd_status = until.getNodeValue("transpwd_status",  this.xml);
			   this.truename_status = until.getNodeValue("truename_status",  this.xml);
			   this.card_status = until.getNodeValue("card_status",  this.xml);
			   this.mobile_status = until.getNodeValue("mobile_status",  this.xml);
			   this.mobile = until.getNodeValue("mobile",  this.xml) || '';
			   this.card_no = until.getNodeValue("card_no",  this.xml) || '';
			   if(this.card_status != '2')
			   {
					 document.getElementById("card_no").innerHTML = this.card_no ;  
			   }
			    if(this.mobile_status != '2')
			   {
					 document.getElementById("mobile").innerHTML = this.mobile ;  
			   }
			break;
            case "51000080":
                alert("     由于本次操作的上网IP地址和你登录时的上网IP地址不同，或长时间未操作，存在安全隐患，为了保障您的账号安全请重新登录。\n    如反复提示此消息，原因是您的上网服务商快速变换了您的IP地址，建议您暂时更换上网方式再登录或稍后再试。" );
                window.location.href = 'http://www.transt.cn/login.shtml';
                break;
            case "2058":
                alert("登录状态异常，请重新登录");
                window.location.href = 'http://www.transt.cn/login.shtml';
                break;
		default:
			Box.text({
				title : "温馨提示",
				infoPic : "2",
				info : retmsg,
				w : 350,
				btns : [["关闭", function () {
							Box.close();
						}
					]]
			});
			break;
		}
	},
	time : function(o)
       {
               if (this.wait == 0)
               {
                       o.removeAttribute("disabled");
                       o.style.background = "#EA7500";
                       o.value = "收不到验证码?";
                       this.wait = 80;
               }
               else
               {
                       o.setAttribute("disabled", true);
                       o.style.background = "#DDD";
                       o.value = "验证码已发送(" + this.wait + ")";
                       this.wait--;
                       setTimeout(function() {
                                       GetCash.time(o)
                                       },1000)
               }
       },	
	submitFormGetCash : function()		//充值金额
	{		

		if(this.name == '')
		{
			 Box.text({
                title : "温馨提示",
                infoPic : "2",
                info : '请登陆成功后，再重试 <a href="http://www.transt.cn/login.shtml">登录</a> !',
                w : 350,
                btns : [["关闭", function () {
                            Box.close();
                        }
                    ]]
            });	
		   return;
		}
		if(this.card_status == '2')
        {
             Box.text({
                title : "温馨提示",
                infoPic : "2",
                info : '请绑定银行卡，再重试 <a href="http://www.transt.cn/auth/security.shtml">绑定银行卡</a> !',
                w : 350,    
                btns : [["关闭", function () {
                            Box.close();
                        } 
                    ]]
            }); 
           return;
        }
		if(this.mobile_status == '2')
        {
             Box.text({
                title : "温馨提示",
                infoPic : "2",
                info : '请绑定手机号，再重试 <a href="http://www.transt.cn/auth/security.shtml">绑定手机号</a> !',
                w : 350,
                btns : [["关闭", function () {
                            Box.close();
                        }
                    ]]
            });
           return;
        }
		
		
		var err_out_money = document.getElementById("err_out_money");
        var out_money =  document.getElementById('out_money').value;
		var out_actual = out_money - this.out_fee;
       // var regAmount = /^[0-9]{1,12}$/;
        var regAmount = /^[1-9]\d*(\.[0-9]{0,2})?$/;

        if(out_money.length == 0 || out_money == "")
         {
                        err_out_money.className ="import_prompt";
                        err_out_money.innerHTML ="请输入提现金额，最低提现金额为50元";
                        return false;
         }
		 if("" == out_money||out_money<50)
            {
                err_out_money.className = "error_prompt";
                err_out_money.innerHTML ="请输入提现金额，最低提现金额为50元";
                return false;
            }
         if(out_money != "" && (out_money.length < 2 || out_money.length > 12))
        {
                        err_buy_amount.className = "error_prompt";
                        err_buy_amount.innerHTML ="请输入2-12位的数字，小数点后最多2位";
                        return false;
       }
       if(parseFloat(out_money) > parseFloat(GetCash.balance))
       {
                        err_out_money.className = "error_prompt";
                        err_out_money.innerHTML ="本次提现金额不能超过可提现金额";
                        return false;
       }

        if(regAmount.test(out_money) == false)
        {
                err_out_money.className = "error_prompt";
                err_out_money.innerHTML ="请输入2-12位的数字，小数点后最多2位";
                return false;
        }
        else
        {
                err_out_money.className = "";
                err_out_money.innerHTML = "";
        }

		var err_vericode = document.getElementById("err_vericode");
        var vericode =  document.getElementById('vericode').value;
         var regVericode = /^[0-9]{6}$/;

        if(vericode.length == 0 || vericode == "")
         {
                        err_vericode.className ="import_prompt";
                        err_vericode.innerHTML ="请输入手机验证码";
                        return false;
         }
		if(vericode != "" && (vericode.length != 6))
        {
				err_vericode.className = "error_prompt";
				err_vericode.innerHTML ="验证码错误，请输入6位长度的验证码";
				return false;
       }

        if(regVericode.test(vericode) == false)
        {
                err_vericode.className = "error_prompt";
				err_vericode.innerHTML ="验证码错误，请输入6位长度的验证码";
                return false;
        }
        else
        {
                err_vericode.className = "";
                err_vericode.innerHTML = "";
        }

		var err_tran_pwd = document.getElementById("err_tran_pwd");
        var tran_pwd =  document.getElementById('tran_pwd').value;
		var regTranPwd = /^[a-zA-Z0-9]{6}$/;

        if(tran_pwd.length == 0 || tran_pwd == "")
         {
                        err_tran_pwd.className ="import_prompt";
                        err_tran_pwd.innerHTML ="请输入交易密码";
                        return false;
         }
		if(tran_pwd != "" && (tran_pwd.length != 6))
        {
                        err_tran_pwd.className = "error_prompt";
                        err_tran_pwd.innerHTML ="交易密码错误，请输入6位长度的交易密码";
                        return false;
       }

        if(regTranPwd.test(vericode) == false)
        {
                err_tran_pwd.className = "error_prompt";
                err_tran_pwd.innerHTML ="交易密码错误，密码由英文或数字组成";
                return false;
        }
        else
        {
                err_tran_pwd.className = "";
                err_tran_pwd.innerHTML = "";
        }
		var key = document.getElementById('key').value;
		//var key = "MTIzNDU2Nzg4NzY1NDMyMTEyMzQ1Njc4Cg==";
        var desret = triple_des(key, document.getElementById('tran_pwd').value, 1, 0,0,3);
		this.tran_pwd = stringToHex(desret);

        request.sendUpdate.call(this, '/cgi-bin/custom_cash_commit.cgi', [
               {
                    name : 'name',
                    value : this.name
                },
                {
                    name : 'out_money',
                    value : document.getElementById('out_money').value
                },
                {
                    name : 'out_fee',
                    value : this.out_fee
                },
                {
                    name : 'out_actual',
                    value : out_actual
                },
                {
                    name : 'tran_pwd',
                    value : this.tran_pwd
                },
                {
                    name : 'vericode',
                    value : vericode
                },
                 {
                    name : 'v',
                    value : Math.random()
                 }
              ],this.getcash_handle);
	},
	getcash_handle : function(xml)
    {
    	console.log(xml);
         var retcode = until.getNodeValue("errorcode", xml);   //返回码
         var retmsg = until.getNodeValue("errormessage", xml); //返回信息
            switch (retcode) {
                case "0":
                case "0000":
                {
					Box.text({
						title : "温馨提示",
						infoPic : "1",
						info : '提交成功，1-2个工作日到帐',
						w : 350,
						btns : [["关闭", function () {
							Box.close();
							window.location.href = 'http://www.transt.cn/manage/html/gailan.shtml';
						}
						]]
					});
					console.log('提现成功');
                }
                break;
                default:
                    Box.text({
                                   title : "温馨提示",
                                   infoPic : "2",
                                   info : retmsg,
                                   w : 350
                         });
                  break;
            }
    },
    setVm:function(val){
        var key = document.getElementById('keyvm').value;
        var desret = triple_des(key,val, 1, 0, 0, 3);
        return stringToHex(desret);
    },
	/* 提交发送验证码  */
    SendMobileVericode : function ()
    {
		if(this.mobile_status == '2')
        {
             Box.text({
                title : "温馨提示",
                infoPic : "2",
                info : '请绑定手机号，再重试 <a href="http://www.transt.cn/auth/security.shtml">绑定手机号</a> !',
                w : 350,
                btns : [["关闭", function () {
                            Box.close();
                        }
                    ]]
            });
           return;
        }
        var v=Math.random()+'';
//        var vm=this.setVm(this.mobile+ v.substring(v.length-7, v.length-1));
        request.sendUpdate.call(this, '/cgi-bin/send_phone_vericode.cgi',
                 [{ name : 'name',   value : this.name },
                  { name : 'op_id',  value : "0" },
                  { name : 'op_type',value : "1" },
                  { name : 'op_stat',value : "2" },
                  { name : 'mobile', value : this.mobile },
                  { name : 'v',      value : v }
                 ],GetCash.SendMobileVericodehandle);
    },
	 SendMobileVericodehandle: function(xml)
    {
        var retcode = until.getNodeValue("errorcode", xml); //返回码
        var retmsg = until.getNodeValue("errormessage", xml); //返回信息
        switch(retcode)
        {
            case "0":
            case "0000":

                  document.getElementById('vericode').disabled = false;
               break;
             default :
                  Box.text({
                        title : "温馨提示",
                        infoPic : "2",
                        info :  retmsg,
                        w : 350
                  });
               break;
        }
    },    
	/* 提现金额获取焦点 */
        outMoneyFocus : function(obj)
        {
                var err_out_money = document.getElementById("err_out_money"),
                   // regAmount = /^[0-9]{1,12}$/;
					regAmount = /^[1-9]\d*(\.[0-9]{0,2})?$/;

                if(obj.value.length == 0 || obj.value == "")
                {
                        err_out_money.className ="import_prompt";
                        err_out_money.innerHTML ="请输入提现金额，最低提现金额为50元";
                        return false;
                }
                if(obj.value != "" && (obj.value.length < 2 || obj.value.length > 12))
                {
                        err_out_money.className = "error_prompt";
                        err_out_money.innerHTML ="请输入2-12位的数字，小数点后最多2位";
                        return false;
                }
				
            if(parseFloat(obj.value) > parseFloat(GetCash.balance))
                {
                        err_out_money.className = "error_prompt";
                        err_out_money.innerHTML ="本次提现金额不能超过可提现金额";
                        return false;
                }
                if(regAmount.test(obj.value) == true)
                {
                        return true;
                }
        },
		 /** 提现金额失去焦点*/
        outMoneyBlur : function(obj){
            var err_out_money = document.getElementById("err_out_money");
            //var reg = /^[1-9][0-9]*$/;
			var   regAmount = /^[1-9]\d*(\.[0-9]{0,2})?$/;

            if(this.name == "")
            {
                    err_out_money.className ="import_prompt";
                    err_out_money.innerHTML ="请用户注册或登陆成功后，再操作";
                    return false;
            }      

            if("" == obj.value||obj.value<50)
            {
                err_out_money.className = "error_prompt";
                err_out_money.innerHTML ="请输入提现金额，最低提现金额为50元";
                return false;
            }
             if(obj.value != "" && (obj.value.length < 2 || obj.value.length > 12))
             {
                        err_out_money.className = "error_prompt";
                        err_out_money.innerHTML ="请输入2-12位的数字，小数点后最多2位";
                        return false;
             }
            if( parseFloat(obj.value) > parseFloat(GetCash.balance))
            {
                        err_out_money.className = "error_prompt";
                        err_out_money.innerHTML = "本次提现金额不能超过可提现金额";
                        return false;
            }
            else if(regAmount.test(obj.value) == false)
            {
                err_out_money.className = "error_prompt";
                err_out_money.innerHTML ="请输入2-12位的数字，小数点后最多2位";
                return false;
            }
            else
            {
				if( parseFloat(obj.value) > parseFloat(GetCash.out_fee))
           		 {
                   document.getElementById("out_actual").innerHTML = (parseFloat(obj.value) - parseFloat(GetCash.out_fee)).toFixed(2);	
                   
           		 }else{
					  document.getElementById("out_actual").innerHTML = '0.00';	
				 }
           		//console.log(parseFloat(obj.value),parseFloat(GetCash.out_fee))
       		    //console.log(document.getElementById("out_actual").innerText);
                err_out_money.className = "";
                err_out_money.innerHTML ="";
                return true;
            }
           
        },
		//交易密码获取焦点验证
    tranPwdFocus : function(obj)
    {
		var err_tran_pwd = document.getElementById("err_tran_pwd");
		var regTranPwd = /^[a-zA-Z0-9]{6}$/;

        if(obj.value.length == 0 || obj.value == "")
         {
                        err_tran_pwd.className ="import_prompt";
                        err_tran_pwd.innerHTML ="请输入交易密码";
                        return false;
         }
		if(obj.value != "" && (obj.value.length != 6))
        {
                        err_tran_pwd.className = "error_prompt";
                        err_tran_pwd.innerHTML ="交易密码错误，请输入6位长度的交易密码";
                        return false;
       }

        if(regTranPwd.test(obj.value) == true)
        {
                return true;
        }
    },
		
	tranPwdBlur : function(obj)
	{	
		var err_tran_pwd = document.getElementById("err_tran_pwd");
		var regTranPwd = /^[a-zA-Z0-9]{6}$/;

        if(obj.value.length == 0 || obj.value == "")
         {
                        err_tran_pwd.className ="import_prompt";
                        err_tran_pwd.innerHTML ="请输入交易密码";
                        return false;
         }
		if(obj.value != "" && (obj.value.length != 6))
        {
                        err_tran_pwd.className = "error_prompt";
                        err_tran_pwd.innerHTML ="交易密码错误，请输入6位长度的交易密码";
                        return false;
       }

        if(regTranPwd.test(obj.value) == false)
        {
                err_tran_pwd.className = "error_prompt";
                err_tran_pwd.innerHTML ="交易密码错误，密码由英文或数字组成";
                return false;
        }
         else
            {
                err_tran_pwd.className = "";
                err_tran_pwd.innerHTML ="";
                return true;
            }
	},
	onload : function()
	{
		//提现金额获取焦点事件
        document.getElementById("out_money").onfocus = function()
        {
            GetCash.outMoneyFocus(this);
        }
        //提现金额焦点事件
        document.getElementById("out_money").onblur = function()
        {
            GetCash.outMoneyBlur(this);
        }	
		//交易密码获取焦点事件
        document.getElementById("tran_pwd").onfocus = function()
        {
            GetCash.tranPwdFocus(this);
        }
        //交易密码焦点事件
        document.getElementById("tran_pwd").onblur = function()
        {
            GetCash.tranPwdBlur(this);
        }	
	},
	 checkFormVericode : function() {
		 	var veri=document.getElementById('out_money');
		 	var boo=GetCash.outMoneyBlur(veri);
			if(!boo)
				return;

            
            var err_code = document.getElementById('err_vericode');
            err_code.className = "";
            err_code.innerHTML ="";

            GetCash.SendMobileVericode();
         GetCash.time(document.getElementById('send_mobile_vericode'));
    },	
	init : function()		
    {
		 	  this.onload();

			   var url = window.location.href;
               var query_url = window.location.hash;
			   

               /**首页或投资页有传值产品号(调用)*/
               if(!query_url && this.param != ""){
                   this.balance = getParamQueryString(this.param,'balance') || '0.00';						 
				 
				   document.getElementById('balance').innerHTML = this.balance;
               }

			   if (query_url) { //后退或刷新
				//	this.product_id = until.getQueryString("product_id") || '';
                   this.balance = getParamQueryString(this.param,'balance') || '0.00';						
				  
				   document.getElementById('balance').innerHTML = this.balance;
				}
				GetCash.query_auth();
				if(this.name != ""){
				    //GetCash.query_auth();
                    GetCash.q_invest_count();
				}
		
//		document.getElementById('vericode').disabled = true;
		document.getElementById('send_mobile_vericode').disabled = false;
	
		document.getElementById('send_mobile_vericode').onclick = function()
		{
			 GetCash.checkFormVericode();
		}

         document.getElementById('getcash').onclick = function()
         {
             GetCash.submitFormGetCash();
         }        
    }
}


