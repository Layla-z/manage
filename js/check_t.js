var validates = {
    sdate : function () {
        return datetime.datecheck($('trade_time_a').value.replace(/^\s+|\s+$/, '')) ? true : 'invalid';
    },
    edate : function () {
        return datetime.datecheck($('trade_time_b').value.replace(/^\s+|\s+$/, '')) ? true : 'invalid';
    },
    dateInterval : function () {
        return datetime.dateDiff($('trade_time_b').value.replace(/^\s+|\s+$/, ''), $('trade_time_a').value.replace(/^\s+|\s+$/, '')) <= 31 * 24 * 3600000 ? true : 'error';
    },
    datecompare : function () {
        var sdate = $('trade_time_a').value.replace(/^\s+|\s+$/, '');
        var edate = $('trade_time_b').value.replace(/^\s+|\s+$/, '');
        var stime = datetime.dateWith0Fill(sdate);
        var etime = datetime.dateWith0Fill(edate);
        return datetime.str2time(stime) > datetime.str2time(etime) ? 'invalid' : true;
    }
}
var Record = {
	showXMLMsgFlag:false,
    xml : null,
    curpage : 1,                    //��ǰҳ��
    datalistid : "listquery_data",  //��ʾ��������
    pager : null,                   //ҳ��
    start_date : '',                //��ʼ����
    end_date : '',                  //��ֹ����
    op_iotype : '1',
    limit : 5,
    offset : 0,
	other_uin:'',
    manager_uin : g_CCookie.GetCookie('xsuin'),
	
	getOpreation:function(state,amount,amount_ads,id){
		var str='';
		if(state==1 && amount != amount_ads){
			str='<input id="'+(until.getNodeValue("trans_id", id)|| '')+'" class="my_btn" onclick="Record.openMydiv(event);" type="button" value="����"/>';
				
		}
		return str;
	},

    showData : function () 
    {
        var page_num = parseInt(until.getNodeValue("ret_num", this.xml), 10);
        until.removeClass("hide", $("query_result"));

        if (0 == page_num) 
        {
            this.pager.hidePageBar();
            until.removeClass("hide", $("noDataTr"));
            $('retmsg').innerHTML = '<span class="ico-info-s"></span>�������ݣ����Ժ��ѯ';
            return;
        }

        var listHTML = "";
		if(this.op_iotype=='1'){
			listHTML += "<table  border='0' style='margin-top:-16px;'>"
			 + '<tr>'
			 + '<th class="other_name" scope="col" >�û���</th>'
			 + '<th class="channel" scope="col">֧������</th>'
			 + '<th class="trade_date" scope="col">��������</th>'
			 + '<th class="op_money" scope="col">�������</th>'
			 + '<th class="fee_money" scope="col">������</th>'
			 + '<th class="actual_money" scope="col">�ɹ����</th>'
			  + '<th class="result_desc" scope="col">֧�����</th>'
			 + '<th class="result_desc" scope="col">�������</th>'
			 + '<th class="succ_time" scope="col">�������ʱ��</th>'
			 + '<th class="trade_date" scope="col">����</th>'
			 + '<th class="state" scope="col">״̬</th>'
			 + '</tr>';
		}else{
			listHTML += "<table  border='0' style='margin-top:-16px; width:1500px;'>"
			 + '<tr>'
			+ '<th class="channel" scope="col" width="80px">ͨ��ID</th>'
			 + '<th class="trans_id" scope="col" width="100px">��ˮ��</th>'
			 + '<th class="type" scope="col" width="70px">��������</th>'
			 + '<th class="check_date" scope="col" width="80px">��������</th>'
			 + '<th class="amount" scope="col" width="130px">���׽�ͨ������</th>'
			 + '<th class="amount_ads" scope="col" width="130px">���׽�ϵͳ��</th>'
			 + '<th class="result" scope="col" width="130px">֧�������ͨ������</th>'
			 + '<th class="result_ads" scope="col" width="130px">֧�������ϵͳ��</th>'
			
			 + '<th class="updater" scope="col" width="60px">������</th>'
			 + '<th class="update_time" scope="col" width="150px">����ʱ��</th>'
			 + '<th class="create_time" scope="col" width="150px">��������</th>'
			 
			 + '<th class="state" scope="col" width="100px">�û�״̬</th>'
			  + "<th class='' ></th>"
			 + '</tr>';
		}
        var nodes = this.xml.getElementsByTagName("record");
                var len = this.limit < page_num ? this.limit : page_num;

        //$('total').innerHTML= until.getNodeValue("total", this.xml);
        for (var i = 0; i < len && i < this.limit; i++) {
            var op_type = (until.getNodeValue("type", nodes[i]) || '');
            var op_state = (until.getNodeValue("state", nodes[i]) || '');
			var op_result = (until.getNodeValue("result", nodes[i]) || '');
			var op_result_ads = (until.getNodeValue("result_ads", nodes[i]) || '');
			var op_amount = (until.getNodeValue("amount", nodes[i]) || '');
			var op_amount_ads = (until.getNodeValue("amount_ads", nodes[i]) || '');
			
            var type = "";
            var state = "";
            var result = "";
            var in_money= "";
            var out_money= "";
			var result_ads = "";
            if(op_type == 1)
            {
                type = "������ ";
                in_money = (until.getNodeValue("op_money", nodes[i]) || '0');
                out_money = '0';
            }
            else if(op_type == 2)
            {
                type = "��ˮ�Ŵ���(�����ʼ�¼����)";
                in_money = '0';
                out_money = (until.getNodeValue("op_money", nodes[i]) || '0');
            }           
            else if(op_type == 3)
            {
                type = "����״̬����";
                in_money = '0';
                out_money = (until.getNodeValue("op_money", nodes[i]) || '0');
            }

            if(op_state == 1)
            {
                state = "������ ";
            }
            else if(op_state == 2)
            {
                state = "�ѵ��� ";
            }
            
            
			if(op_result == 1){
				result='�ɹ�';	
			}else if(op_result == 2 ){
				result='ʧ��';	
			}
			else if(op_result == 3 ){
				result='��֧��  ';	
			}
			else if(op_result== 4 ){
				result='��ʧЧ';	
			}
			
			if(op_result_ads == 1){
				result_ads='�ɹ�';	
			}else if(op_result_ads == 2 ){
				result_ads='ʧ��';	
			}
			else if(op_result_ads == 3 ){
				result_ads='��֧��  ';	
			}
			else if(op_result_ads== 4 ){
				result_ads='��ʧЧ';	
			}
			
            listHTML += "<tr>"

		 if(this.op_iotype=='1'){
			 listHTML+="<td class='other_name'>" + (until.getNodeValue("other_name", nodes[i])|| '') + "</td>"
             + "<td class='channel'>" + ((until.getNodeValue("channel", nodes[i])|| '')==1?'����':'') + "</td>"
             + "<td class='trade_date' >" + (until.getNodeValue("trade_date", nodes[i])|| '') + "</td>"
             + "<td class='op_money' >" + (until.getNodeValue("op_money", nodes[i])|| '') + "</td>"
             + "<td class='fee_money' >" + (until.getNodeValue("fee_money", nodes[i])|| '')  +"</td>"
			 + "<td class='actual_money'>" + (until.getNodeValue("actual_money", nodes[i])|| '') + "</td>"
			 + "<td class='result_desc'>" + result + "</td>"
             + "<td class='result_desc'>" + ((until.getNodeValue("result_desc", nodes[i])|| '')=='01'?'�ɹ�':'ʧ��') + "</td>"
             + "<td class='succ_time' >" + (until.getNodeValue("succ_time", nodes[i])|| '') + "</td>"
			 + "<td class='trade_date'>" + (until.getNodeValue("trade_date", nodes[i])|| '') + "</td>" 
             + "<td class='result' >" + state  +"</td>"
             + "</tr>";
		 }else{
			 listHTML+= "<td class='channel'>" + (until.getNodeValue("channel", nodes[i])|| '') + "</td>"
              + "<td class='trans_id'>" + (until.getNodeValue("trans_id", nodes[i])|| '') + "</td>"
           //  + "<td class='type' >" + (until.getNodeValue("type", nodes[i])|| '') + "</td>"
             + "<td class='type' >" + type + "</td>"
             + "<td class='check_date' >" + (until.getNodeValue("check_date", nodes[i])|| '') + "</td>"
             + "<td class='amount' >" + (until.getNodeValue("amount", nodes[i])|| '')  +"</td>"
			 + "<td class='amount_ads'>" + (until.getNodeValue("amount_ads", nodes[i])|| '') + "</td>"
             + "<td class='result'>" + result + "</td>"
             + "<td class='result_ads' >" + result_ads + "</td>"
			
             + "<td class='updater'>" + (until.getNodeValue("updater", nodes[i])|| '') + "</td>"
             + "<td class='update_time' >" + (until.getNodeValue("update_time", nodes[i])|| '') + "</td>"
             + "<td class='create_time' >" + (until.getNodeValue("create_time", nodes[i])|| '') + "</td>"
             + "<td class='state' >" + state  +"</td>"
			 + "<td class='state' >"+Record.getOpreation(op_state,op_amount,op_amount_ads,nodes[i])+"</td>"
             + "</tr>";
		 }
        }
        listHTML += "</table>";
		
        $(this.datalistid).innerHTML = listHTML + this.loadingHtml;
		
        var trs = document.getElementById("listquery_data").getElementsByTagName("tr");
        for (i = 0; i < trs.length; i++) {
            if ((i > 0) && ((i % 2) == 0))
                trs[i].className = "line-bg";
        }
        trs[trs.length - 3].className += " last-line";
        $('loadingDiv').className += $('loadingDiv').className.indexOf('hide') > -1 ? '' : 'hide';
        //��ʾҳ����Ϣ
        this.pager.showPageBar2(page_num, this.curpage, this.limit, 'Record.query');
    },
    getData : function (xml) {
    	console.log(xml);
        this.xml = xml;
        var retcode = until.getNodeValue("errorcode", this.xml); //������
        var retmsg = until.getNodeValue("errormessage", this.xml); //������Ϣ
        $('loadingTr').className = 'hide';
        switch (retcode) {
        case "0":
        case "0000":
            this.showData();
            j('#listquery_data').scrollLeft(600);
            break;
		case "51000080":
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
    query : function (page) 
    {
        if (page) 
        {
            this.curpage = page;
        }

                var trade_time_a = $('trade_time_a').value;
                var trade_time_b = $('trade_time_b').value;
                var dateTime = false;

                if(trade_time_a.length > 0)
                { 
                     dateTime = this.checkDate(trade_time_a,trade_time_b);
                }
                else if(trade_time_b.length > 0)
                { 
                     dateTime = this.checkDate(trade_time_a,trade_time_b);
                }
                else if(trade_time_a.length == 0 && trade_time_b.length == 0)
                {
                     dateTime = true;
                }
                
                if(!dateTime){
                    return false;
                }

        var s_date = trade_time_a.replace(/^\s+|\s+$/, '');
        this.start_date = datetime.dateWith0Fill(s_date);
        var e_date = trade_time_b.replace(/^\s+|\s+$/, '');
                this.end_date = datetime.dateWith0Fill(e_date);
             
        if (!this.loadingHtml) {
            this.loadingHtml = $(this.datalistid).innerHTML.replace(/.*?(<div.+?<\/div>).+/, '$1');
        }
        $(this.datalistid).innerHTML = this.loadingHtml;
                $('loadingDiv').className = $('loadingDiv').className.replace(/\s*?hide/, '');
                $('loadingTr').className = '';
                $('noDataTr').className = 'hide';
        if (!this.pager) {
            this.pager = new pager();
        }
        this.pager.hidePageBar();
		
	//	this.other_uin=$('other_uin').value;
		
        var params = [
                      { name: 'name', value: this.manager_uin }, 
                      { name: 'trade_time_a', value: this.start_date }, 
                      { name: 'trade_time_b', value: this.end_date },
                      { name: 'op_type', value: this.op_iotype},
                      { name : 'offset', value : (this.curpage-1)*this.limit }, 
                      { name : 'limit', value : this.limit }, 
					  { name : 'other_uin', value : this.other_uin },
                      { name : 'v', value : Math.random() }
                     ];
		var url='';
		if(Record.op_iotype==1){
			url='/cgi-bin/kf_query_cdh_iocome_list.cgi';
		}else{
			url='/cgi-bin/query_fail_income.cgi';
			params.push({name:'state_list',value:$('state_list').value});	
		}
        request.sendUpdate.call(this, url, params, this.getData);
        var hash = [];
        for (var i = 0, n = params.length; i < n; ++i) {
            hash.push(params[i].name + '=' + params[i].value);
        }
        location.hash = hash.join('&');
    },
	
        checkDate : function(start_date,end_date){
             var dv = new dataValid();
                 if(start_date.length == 0 || end_date.length == 0)
                 {
             return true;
                 }
                 else if(start_date.length > 0 || end_date.length > 0)
                 {
                 dv.addEle('trade_time_a', validates.sdate, {
                'invalid' : '��ʼ���ڸ�ʽ����'
             });
             dv.addEle('trade_time_b', validates.edate, {
                'invalid' : '�������ڸ�ʽ����'
             });
             dv.addEle('trade_time_b', validates.datecompare, {
                'invalid' : '�������ڲ���С����ʼ����'
             });
                 }
                 else if(start_date.length > 0 || end_date.length == 0)  
                 {       
                 dv.addEle('trade_time_a', validates.sdate, {
                'invalid' : '��ʼ���ڸ�ʽ����'
             });
                 }
                 else if(start_date.length == 0 || end_date.length > 0)
                 {
             dv.addEle('trade_time_b', validates.edate, {
                'invalid' : '�������ڸ�ʽ����'
             });
                 }
                
         if (dv.process()) {
             return true;
         }
         return false;
        },
        initCalender : function () {
        /*TFL.timer.bind({
            today : "hidden",
            items : ["trade_time_a","trade_time_b"],
            autoShow : false
        });
        $('startCalenderIco').onclick = function () {
            $('trade_time_a').focus();
        }
        $('endCalenderIco').onclick = function () {
            $('trade_time_b').focus();
        }*/
                //��ʼ����
                var _date = new Date();
                var end_date = _date.getFullYear() + "-" + (((_date.getMonth()+1) < 10) ? "0" + (_date.getMonth()+1) : (_date.getMonth()+1)) + "-" + ((_date.getDate() < 10) ? "0" + _date.getDate() : _date.getDate());
                var endDate = new Date();
                    //endDate.setMonth(endDate.getMonth() - 1);
                    endDate.setDate(endDate.getDate() - 1);
                var start_date = endDate.getFullYear() + '-' + (((endDate.getMonth() + 1) < 10) ? "0" + (endDate.getMonth() + 1) : (endDate.getMonth() + 1)) + '-' + ((endDate.getDate() < 10) ? "0" + endDate.getDate() : endDate.getDate());

                /*$("#trade_time_a").val(start_date);
                $("#trade_time_b").val(end_date);*/
               $("trade_time_a").value = start_date;
                $("trade_time_b").value = end_date;
    },
    init : function () 
    {

         this.initCalender();
//      $('income').onclick = function () 
//       {
//            Record.op_iotype= '1';
//            Record.query(1);
//       }
         $('outcome').onclick = function () 
         {
              Record.op_iotype = '2';
              Record.query(1);
         }
		 
//		$('outcome_output').onclick= function(){
//				 request.sendQuery.call(this, '/cgi-bin/down_custom_cash_list.cgi', [{name: 'state', value:'2'}],
//				 Record.getOutcomeFile_handle);
//		}
		$('close_').onclick=function(){
			Record.closeMydiv();
		}
		$('cancel_').onclick=function(){
			Record.closeMydiv();
		}
		$('submit_ok').onclick=function(){
			Record.submitExamineOk();
		}
//		$('submit_no').onclick=function(){
//			Record.submitExamineNo();
//		}
//		$('upload').onclick=function(){
//			Record.submitFile();	
//		}

         var url = window.location.href;
         if (window.location.hash) 
         { //����
           this.curpage = until.getQueryString("page") || 1;
           $("trade_time_a").value = until.getQueryString("trade_time_a") || '';
           $("trade_time_b").value = until.getQueryString("trade_time_b")|| '';
		   Record.op_iotype = until.getQueryString("op_type")|| '1';
           //Record.query();
         }
    },
	getOutcomeFile_handle : function (xml) {
            var retcode = until.getNodeValue("errorcode", xml); //������
            var retmsg = until.getNodeValue("errormessage", xml); //������Ϣ
            var name = until.getNodeValue("file_name", xml); //������Ϣ
			
            switch (retcode) {
                case "0000":
                    Record.downloadFile(name);
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
        downloadFile : function(name){
			
             var elemIF = document.createElement("iframe");
             elemIF.src = "/download/" + name;                 //�ļ�·��
             elemIF.style.display = "none";
             document.body.appendChild(elemIF);
        },
	submitExamineOk:function(){
			 this.showXMLMsgFlag = true;			
            request.sendUpdate.call(this, '/cgi-bin/adjust_account.cgi', [
            {
		 		name : 'trans_id',
	            value : $('trans_id').value
		 	},
		 	{
		 		name : 'amount',
                value : $('true_amount').value
		 	}
            ],Record.create_examine_handle);
			
	},
	submitExamineNo:function(){
		
			var MSG = {
                        'reason': {
                            'null':  '����д��ͨ��ԭ��' 
                           
                        }
                }

        var config = [
                    
                    {
                     id: 'reason',
                       isNull : false,
                       
                       msg: MSG['reason']
                    }
            ];

        var info = "";
        info = MCH.Valid.valid_2(config);
		if(info){
        
                   this.showXMLMsgFlag = true;

                 request.sendUpdate.call(this, '/cgi-bin/kf_decide_cdh_outcome.cgi', [
                 {
                    name : 'trans_id',
                    value : $('trans_id').value
                },
                {
                    name : 'state_desc',
                    value : $('reason').value
                },
                 {
                    name : 'decide_teller',
                    value : $('realName').value
                },
                {
                    name : 'state',
                    value : '2'
                },{
                    name : 'v',
                    value : Math.random()
					}
              ],Record.create_examine_handle);
			
			}
			else{
				return false;
			}
	},
	create_examine_handle : function(xml){
		var retcode = until.getNodeValue("errorcode", xml);   //������
            var retmsg = until.getNodeValue("errormessage", xml); //������Ϣ
			
            switch (retcode) {
                case "0" :
                case "0000" :
						Record.closeMydiv();
						Record.query(this.curpage);


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
	
	closeMydiv:function(){
			$('amount').value='';
			$('bg4').style.display='none';
			$('popDiv').style.display='none';
			
	},
	openMydiv:function(e){
			var obj=e.srcElement||e.target;
			$('trans_id').value=obj.id;
			$('bg4').style.display='block';
			$('popDiv').style.display='block';
		//	 $('realName').value=this.manager_uin;
		    $('true_amount').value = '';
		    console.log($j(obj).parent().siblings('td.amount').text());
		    $('check_date').value = $j(obj).parent().siblings('td.check_date').text();
			$('amount').value = $j(obj).parent().siblings('td.amount').text();
			$('amount_ads').value = $j(obj).parent().siblings('td.amount_ads').text();			
            request.sendQuery.call(this, '/cgi-bin/adjust_account.cgi', [
		 	{
		 		name : 'trans_id',
                value : $('trans_id').value
		 	},
		 	{
		 		name : 'amount',
                value : $('amount').value
		 	}
		 	],
		    Record.create_examine_handle);
	},
	    /**
	 **�ϴ��ļ���ʽ
 	 */
	checkUploadFile : function (filename)
        {
	    var extension = /(\.csv)|(\.xls)$/i;
	    if(extension.test(filename))
	    {  
		return true;
	    }
	    return false;
        },
		
	submitFile: function(){
		var MSG = {
                        'outcome_input': {
                            'null': '���ϴ�.xls .csv��ʽ�ļ�',
                            'error': '���ϴ�.xls .csv��ʽ�ļ�'
                        }
		}
		var config=[
			{
                       id: 'outcome_input', 
                       isNull : false,
                       msg: MSG['outcome_input'],
                       handle: Record.checkUploadFile
                    
			}];
		var info=MCH.Valid.valid_2(config);
		$('nameimport').value=g_CCookie.GetCookie('xsuin');
		var filename=document.getElementById('outcome_input').value;
		filename=filename.substring(filename.lastIndexOf('\\')+1,filename.length);
		$('filename').value=filename;
		
		if(info){
			this.showXMLMsgFlag = true;
			$('uploadForm').submit();
		}else{
			return false;
		}
	},
	showXMLMsg : function(objIframe){
              if (!this.showXMLMsgFlag) {
                    return;
              }
              var xml = new MCH.XML(objIframe.document.XMLDocument ? objIframe.document.XMLDocument : objIframe.document.documentElement);
              var retcode = xml.getVal("errorcode");
              var retmsg = xml.getVal("errormessage");
              switch (retcode) {
					case "0" :
                    case "0000":
                       	 Box.text({
                              title : "��ܰ��ʾ",
                              infoPic : "1",
                              info : '�ϴ��ɹ�',
                              w : 350
                         });
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
        }
	
}
