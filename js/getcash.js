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
        var retcode = until.getNodeValue("errorcode", xml); //������
        var retmsg = until.getNodeValue("errormessage", xml); //������Ϣ
        switch (retcode){
            case '0000':
                this.out_fee=until.getNodeValue("out_fee",xml)||0.00;
                document.getElementById('out_fee').innerHTML=this.out_fee;
                break;
            default :
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
	/** ��ȡ��ѯ����*/
	getAuthData : function (xml) {
		this.xml = xml;
		var retcode = until.getNodeValue("errorcode", this.xml); //������
		var retmsg = until.getNodeValue("errormessage", this.xml); //������Ϣ
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
	time : function(o)
       {
               if (this.wait == 0)
               {
                       o.removeAttribute("disabled");
                       o.style.background = "#EA7500";
                       o.value = "�ղ�����֤��?";
                       this.wait = 80;
               }
               else
               {
                       o.setAttribute("disabled", true);
                       o.style.background = "#DDD";
                       o.value = "��֤���ѷ���(" + this.wait + ")";
                       this.wait--;
                       setTimeout(function() {
                                       GetCash.time(o)
                                       },1000)
               }
       },	
	submitFormGetCash : function()		//��ֵ���
	{		

		if(this.name == '')
		{
			 Box.text({
                title : "��ܰ��ʾ",
                infoPic : "2",
                info : '���½�ɹ��������� <a href="http://www.transt.cn/login.shtml">��¼</a> !',
                w : 350,
                btns : [["�ر�", function () {
                            Box.close();
                        }
                    ]]
            });	
		   return;
		}
		if(this.card_status == '2')
        {
             Box.text({
                title : "��ܰ��ʾ",
                infoPic : "2",
                info : '������п��������� <a href="http://www.transt.cn/auth/security.shtml">�����п�</a> !',
                w : 350,    
                btns : [["�ر�", function () {
                            Box.close();
                        } 
                    ]]
            }); 
           return;
        }
		if(this.mobile_status == '2')
        {
             Box.text({
                title : "��ܰ��ʾ",
                infoPic : "2",
                info : '����ֻ��ţ������� <a href="http://www.transt.cn/auth/security.shtml">���ֻ���</a> !',
                w : 350,
                btns : [["�ر�", function () {
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
                        err_out_money.innerHTML ="���������ֽ�������ֽ��Ϊ50Ԫ";
                        return false;
         }
		 if("" == out_money||out_money<50)
            {
                err_out_money.className = "error_prompt";
                err_out_money.innerHTML ="���������ֽ�������ֽ��Ϊ50Ԫ";
                return false;
            }
         if(out_money != "" && (out_money.length < 2 || out_money.length > 12))
        {
                        err_buy_amount.className = "error_prompt";
                        err_buy_amount.innerHTML ="������2-12λ�����֣�С��������2λ";
                        return false;
       }
       if(parseFloat(out_money) > parseFloat(GetCash.balance))
       {
                        err_out_money.className = "error_prompt";
                        err_out_money.innerHTML ="�������ֽ��ܳ��������ֽ��";
                        return false;
       }

        if(regAmount.test(out_money) == false)
        {
                err_out_money.className = "error_prompt";
                err_out_money.innerHTML ="������2-12λ�����֣�С��������2λ";
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
                        err_vericode.innerHTML ="�������ֻ���֤��";
                        return false;
         }
		if(vericode != "" && (vericode.length != 6))
        {
				err_vericode.className = "error_prompt";
				err_vericode.innerHTML ="��֤�����������6λ���ȵ���֤��";
				return false;
       }

        if(regVericode.test(vericode) == false)
        {
                err_vericode.className = "error_prompt";
				err_vericode.innerHTML ="��֤�����������6λ���ȵ���֤��";
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
                        err_tran_pwd.innerHTML ="�����뽻������";
                        return false;
         }
		if(tran_pwd != "" && (tran_pwd.length != 6))
        {
                        err_tran_pwd.className = "error_prompt";
                        err_tran_pwd.innerHTML ="�����������������6λ���ȵĽ�������";
                        return false;
       }

        if(regTranPwd.test(vericode) == false)
        {
                err_tran_pwd.className = "error_prompt";
                err_tran_pwd.innerHTML ="�����������������Ӣ�Ļ��������";
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
         var retcode = until.getNodeValue("errorcode", xml);   //������
         var retmsg = until.getNodeValue("errormessage", xml); //������Ϣ
            switch (retcode) {
                case "0":
                case "0000":
                {
					Box.text({
						title : "��ܰ��ʾ",
						infoPic : "1",
						info : '�ύ�ɹ���1-2�������յ���',
						w : 350,
						btns : [["�ر�", function () {
							Box.close();
							window.location.href = 'http://www.transt.cn/manage/html/gailan.shtml';
						}
						]]
					});
					console.log('���ֳɹ�');
                }
                break;
                default:
                    Box.text({
                                   title : "��ܰ��ʾ",
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
	/* �ύ������֤��  */
    SendMobileVericode : function ()
    {
		if(this.mobile_status == '2')
        {
             Box.text({
                title : "��ܰ��ʾ",
                infoPic : "2",
                info : '����ֻ��ţ������� <a href="http://www.transt.cn/auth/security.shtml">���ֻ���</a> !',
                w : 350,
                btns : [["�ر�", function () {
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
        var retcode = until.getNodeValue("errorcode", xml); //������
        var retmsg = until.getNodeValue("errormessage", xml); //������Ϣ
        switch(retcode)
        {
            case "0":
            case "0000":

                  document.getElementById('vericode').disabled = false;
               break;
             default :
                  Box.text({
                        title : "��ܰ��ʾ",
                        infoPic : "2",
                        info :  retmsg,
                        w : 350
                  });
               break;
        }
    },    
	/* ���ֽ���ȡ���� */
        outMoneyFocus : function(obj)
        {
                var err_out_money = document.getElementById("err_out_money"),
                   // regAmount = /^[0-9]{1,12}$/;
					regAmount = /^[1-9]\d*(\.[0-9]{0,2})?$/;

                if(obj.value.length == 0 || obj.value == "")
                {
                        err_out_money.className ="import_prompt";
                        err_out_money.innerHTML ="���������ֽ�������ֽ��Ϊ50Ԫ";
                        return false;
                }
                if(obj.value != "" && (obj.value.length < 2 || obj.value.length > 12))
                {
                        err_out_money.className = "error_prompt";
                        err_out_money.innerHTML ="������2-12λ�����֣�С��������2λ";
                        return false;
                }
				
            if(parseFloat(obj.value) > parseFloat(GetCash.balance))
                {
                        err_out_money.className = "error_prompt";
                        err_out_money.innerHTML ="�������ֽ��ܳ��������ֽ��";
                        return false;
                }
                if(regAmount.test(obj.value) == true)
                {
                        return true;
                }
        },
		 /** ���ֽ��ʧȥ����*/
        outMoneyBlur : function(obj){
            var err_out_money = document.getElementById("err_out_money");
            //var reg = /^[1-9][0-9]*$/;
			var   regAmount = /^[1-9]\d*(\.[0-9]{0,2})?$/;

            if(this.name == "")
            {
                    err_out_money.className ="import_prompt";
                    err_out_money.innerHTML ="���û�ע����½�ɹ����ٲ���";
                    return false;
            }      

            if("" == obj.value||obj.value<50)
            {
                err_out_money.className = "error_prompt";
                err_out_money.innerHTML ="���������ֽ�������ֽ��Ϊ50Ԫ";
                return false;
            }
             if(obj.value != "" && (obj.value.length < 2 || obj.value.length > 12))
             {
                        err_out_money.className = "error_prompt";
                        err_out_money.innerHTML ="������2-12λ�����֣�С��������2λ";
                        return false;
             }
            if( parseFloat(obj.value) > parseFloat(GetCash.balance))
            {
                        err_out_money.className = "error_prompt";
                        err_out_money.innerHTML = "�������ֽ��ܳ��������ֽ��";
                        return false;
            }
            else if(regAmount.test(obj.value) == false)
            {
                err_out_money.className = "error_prompt";
                err_out_money.innerHTML ="������2-12λ�����֣�С��������2λ";
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
		//���������ȡ������֤
    tranPwdFocus : function(obj)
    {
		var err_tran_pwd = document.getElementById("err_tran_pwd");
		var regTranPwd = /^[a-zA-Z0-9]{6}$/;

        if(obj.value.length == 0 || obj.value == "")
         {
                        err_tran_pwd.className ="import_prompt";
                        err_tran_pwd.innerHTML ="�����뽻������";
                        return false;
         }
		if(obj.value != "" && (obj.value.length != 6))
        {
                        err_tran_pwd.className = "error_prompt";
                        err_tran_pwd.innerHTML ="�����������������6λ���ȵĽ�������";
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
                        err_tran_pwd.innerHTML ="�����뽻������";
                        return false;
         }
		if(obj.value != "" && (obj.value.length != 6))
        {
                        err_tran_pwd.className = "error_prompt";
                        err_tran_pwd.innerHTML ="�����������������6λ���ȵĽ�������";
                        return false;
       }

        if(regTranPwd.test(obj.value) == false)
        {
                err_tran_pwd.className = "error_prompt";
                err_tran_pwd.innerHTML ="�����������������Ӣ�Ļ��������";
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
		//���ֽ���ȡ�����¼�
        document.getElementById("out_money").onfocus = function()
        {
            GetCash.outMoneyFocus(this);
        }
        //���ֽ����¼�
        document.getElementById("out_money").onblur = function()
        {
            GetCash.outMoneyBlur(this);
        }	
		//���������ȡ�����¼�
        document.getElementById("tran_pwd").onfocus = function()
        {
            GetCash.tranPwdFocus(this);
        }
        //�������뽹���¼�
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
			   

               /**��ҳ��Ͷ��ҳ�д�ֵ��Ʒ��(����)*/
               if(!query_url && this.param != ""){
                   this.balance = getParamQueryString(this.param,'balance') || '0.00';						 
				 
				   document.getElementById('balance').innerHTML = this.balance;
               }

			   if (query_url) { //���˻�ˢ��
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


