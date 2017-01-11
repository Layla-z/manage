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
            var retcode = until.getNodeValue("errorcode", this.accountXml); //������
            var retmsg = until.getNodeValue("errormessage", this.accountXml); //������Ϣ
            switch (retcode) {
            case "0":
            case "0000":
                    this.showAccount();
                    break;
            case "51000080":
                    alert("     ���ڱ��β���������IP��ַ�����¼ʱ������IP��ַ��ͬ����ʱ��δ���������ڰ�ȫ������Ϊ�˱��������˺Ű�ȫ�����µ�¼��\n    �練����ʾ����Ϣ��ԭ�����������������̿��ٱ任������IP��ַ����������ʱ����������ʽ�ٵ�¼���Ժ����ԡ�" );
                    window.location.href = 'http://www.transt.cn/login.shtml';
                    break;
            case "2058":
                    alert("��¼״̬�쳣�������µ�¼");
                    window.location.href = 'http://www.transt.cn/login.shtml';
                    break;
            default:
                    Box.text({
                            title : "��ܰ��ʾ",
                            infoPic : "2",
                            info : retmsg,
                            w : 350,
                            btns : [["�ر�", function () {
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
            $('balance').html( "0.00Ԫ") ;
            $('total_money').html("0.00Ԫ") ;
            $('total_due_money').html("0.00Ԫ");
            $('total_frozen').html("0.00Ԫ");
            $('tiyan_money').html("0.00Ԫ");
            
        }else 
        {
        	
            this.balance = until.getNodeValue("balance",this.accountXml);
            this.total_money= until.getNodeValue("total_money",this.accountXml);
            this.total_due_money= until.getNodeValue("total_due_money",this.accountXml);
            this.total_frozen= until.getNodeValue("total_frozen",this.accountXml);
			this.tiyan_money= until.getNodeValue("total_caidahu",this.accountXml);
           // $('#balance').html(this.balance + "Ԫ");
            $('#balance')[0].innerHTML = this.balance + "Ԫ";
            $('#total_money').html(this.total_money + "Ԫ");
            $('#total_due_money').html(this.total_due_money + "Ԫ");
            $('#total_frozen').html(this.total_frozen + "Ԫ") ;
			if(this.tiyan_money>0){
				$('#tiyan_money').html(this.tiyan_money + "Ԫ  "+"<a href='http://www.transt.cn/comm/invest/newbie.shtml' style='color:blue;font-size:13px;'>&gt;&gt;ȥͶ�������Ʒ</a>");
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
		var retcode = until.getNodeValue("errorcode", xml); //������
            var retmsg = until.getNodeValue("errormessage", xml); //������Ϣ
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
                            title : "��ܰ��ʾ",
                            infoPic : "2",
                            info : retmsg,
                            w : 350,
                            btns : [["�ر�", function () {
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
			msg='����û�а����п����뵽<a href="/auth/security.shtml" style="color:red;">��ȫ����</a>���ú��ٽ��в���';
			Box.text({
                            title : "��ܰ��ʾ",
                            infoPic : "3",
                            info : msg,
                            w : 350,
                            btns : [["�ر�", function () {
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
						msg='����û�н���ʵ����֤���뵽<a href="/auth/security.shtml" style="color:red;">��ȫ����</a>���ú��ٽ��в���';
					}else if(this.transpwd_status!=1){
						msg='����û�����ý������룬�뵽<a href="/auth/security.shtml" style="color:red;">��ȫ����</a>���ú��ٽ��в���';
					}else if(this.card_status!=1){
						msg='����û�а����п����뵽<a href="/auth/security.shtml" style="color:red;">��ȫ����</a>���ú��ٽ��в���';
					}
					if(msg!=''){
							Box.text({
                            title : "��ܰ��ʾ",
                            infoPic : "3",
                            info : msg,
                            w : 350,
                            btns : [["�ر�", function () {
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
//			console.log('��������ְ�ť')
//				//Account.stepGetCash();			
//		}
		$('#getcash').click(function(){
			Account.checkCardStatus();
			console.log('��������ְ�ť')
		})
        return;
    }
};
