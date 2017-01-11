var Account = {
    name : g_CCookie.GetCookie('xsuin'),
	accountXml : '',
	balance : '', 
    total_money : '', 
    total_due_money : '', 
    total_frozen : '', 
	truename_status:'',
	transpwd_status:'',
	card_status:'',
	tiyan_money:'0.00',

    queryAccount : function() 
    {
    	//console.log(g_CCookie.GetCookie('uno'));
         var params = [
                        { name: 'name', value: this.name}, 
                        { name: 'uid', value: this.name},
                        { name: 'v',    value: Math.random()}
                      ];
             request.sendQuery.call(this, '/cgi-bin/gy_query_user_account.cgi', params, this.getAccount);

    },
    getAccount : function (xml) 
    {
    	//	console.log(xml)
            this.accountXml = xml;
            var retcode = until.getNodeValue("errorcode", this.accountXml); //返回码
            var retmsg = until.getNodeValue("errormessage", this.accountXml); //返回信息
            switch (retcode) {
            case "0":
            case "0000":
                    this.showAccount();
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
    showAccount : function () 
    {
        var page_num = parseInt(until.getNodeValue("ret_num", this.accountXml), 10);
       
        if (0 == page_num)
        {
            $('balance').html( "0.00元") ;
            $('total_money').html("0.00元") ;
            $('total_due_money').html("0.00元");
            $('total_frozen').html("0.00元");
            $('tiyan_money').html("0.00元");
            
        }else 
        {
        	
            this.balance = until.getNodeValue("balance",this.accountXml);
            this.total_money= until.getNodeValue("total_money",this.accountXml);
            this.total_due_money= until.getNodeValue("total_due_money",this.accountXml);
            this.total_frozen= until.getNodeValue("total_frozen",this.accountXml);
			this.tiyan_money= until.getNodeValue("total_caidahu",this.accountXml);
           // $('#balance').html(this.balance + "元");
            $('#balance')[0].innerHTML = this.balance + "元";
            $('#total_money').html(this.total_money + "元");
            $('#total_due_money').html(this.total_due_money + "元");
            $('#total_frozen').html(this.total_frozen + "元") ;
			if(this.tiyan_money>0){
				$('#tiyan_money').html(this.tiyan_money + "元  "+"<a href='http://www.transt.cn/comm/invest/newbie.shtml' style='color:blue;font-size:13px;'>&gt;&gt;去投资体验产品</a>");
			}
           
        }

		this.queryUserInfo();
   },
	stepGetCash : function()
	{
		var hash = [];
            hash.push('balance' + '=' + this.balance);
            var param = hash.join('&');
            console.log(param);
            console.log(hash);
            window.location = "http://www.transt.cn/manage/html/getcash.shtml?param="+base64encode(param)+"&v="+Math.random();
	},
	queryUserInfo : function () {
        request.sendQuery.call(this, '/cgi-bin/query_auth_safe_stats.cgi', [
				 {
                    name : 'uin',
                    value : this.name 
				},
                 {
                    name : 'v',
                    value : Math.random()
                            }
              ],this.queryUserInfo_handle);
    },
	queryUserInfo_handle:function(xml){
		var retcode = until.getNodeValue("errorcode", xml); //返回码
            var retmsg = until.getNodeValue("errormessage", xml); //返回信息
			var truename_status_ = until.getNodeValue("truename_status", xml);
			var transpwd_status_ = until.getNodeValue("transpwd_status", xml);
			var card_status_ = until.getNodeValue("card_status", xml);
            switch (retcode) {
            case "0":
            case "0000":
					this.truename_status=truename_status_;
					this.transpwd_status=transpwd_status_;
					this.card_status=card_status_;
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
	checkCardStatus:function(){
		var msg='';
		
		if(this.card_status!=1){
			msg='您还没有绑定银行卡，请到<a href="/auth/security.shtml" style="color:red;">安全中心</a>设置后再进行操作';
			Box.text({
                            title : "温馨提示",
                            infoPic : "3",
                            info : msg,
                            w : 350,
                            btns : [["关闭", function () {
                                                    Box.close();
                                            }
                                    ]]
                    });
		}else{
			Account.stepGetCash();	
		}
		console.log(this.card_status);
	},
	checkPayOkStatus:function(){
		var msg='';
                    if(this.truename_status!=1){
						msg='您还没有进行实名认证，请到<a href="/auth/security.shtml" style="color:red;">安全中心</a>设置后再进行操作';
					}else if(this.transpwd_status!=1){
						msg='您还没有设置交易密码，请到<a href="/auth/security.shtml" style="color:red;">安全中心</a>设置后再进行操作';
					}else if(this.card_status!=1){
						msg='您还没有绑定银行卡，请到<a href="/auth/security.shtml" style="color:red;">安全中心</a>设置后再进行操作';
					}
					if(msg!=''){
							Box.text({
                            title : "温馨提示",
                            infoPic : "3",
                            info : msg,
                            w : 350,
                            btns : [["关闭", function () {
                                                    Box.close();
                                            }
                                    ]]
                    });
					}else{
						window.location = "http://www.transt.cn/auth/pay.shtml";		
					}
	},
    init : function()
    {
        Account.queryAccount();
		$('pay').onclick = function()
		{
			Account.checkPayOkStatus();
			
		}
//		$('getcash').onclick = function()
//		{
//			Account.checkCardStatus();
//			console.log('点击了提现按钮')
//				//Account.stepGetCash();			
//		}
		$('#getcash').click(function(){
			Account.checkCardStatus();
			console.log('点击了提现按钮')
		})
        return;
    }
};
