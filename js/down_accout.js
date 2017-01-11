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
	
	getOpreation:function(state,id){
		var str='';
		if(state==3){
			str='<input id="'+(until.getNodeValue("trans_id", id)|| '')+'" class="my_btn" onclick="Record.openMydiv(event);" type="button" value="���"/>';
				
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
			 + '<th class="other_name" scope="col" width="80px">�û���</th>'
			 + '<th class="trans_id" scope="col" width="100px">��ˮ��</th>'
			 + '<th class="out_ee" scope="col" width="60px">����������</th>'
			 + '<th class="real_name" scope="col" width="80px">��ʵ����</th>'
			 + '<th class="bank_name" scope="col" width="100px">������</th>'
			 + '<th class="out_actual" scope="col" width="60px">ʵ�ʵ��ʽ��</th>'
			 + '<th class="card_no" scope="col" width="130px">���п���</th>'
			 + '<th class="card_name" scope="col" width="80px">���п�����</th>'
			 + '<th class="provice_name" scope="col" width="60px">ʡ��</th>'
			 + '<th class="city_name" scope="col" width="60px">������</th>'
			 + '<th class="bank_branch_name" scope="col" width="150px">֧����</th>'
			 + '<th class="out_money" scope="col" width="50px">���ֽ��</th>'
			 + '<th class="create_time" scope="col" width="80px">����ʱ��</th>'
			 
			 + '<th class="decide_teller" scope="col" width="80px">�����Ա</th>'
			 + '<th class="decide_time" scope="col" width="80px">���ʱ��</th>'
			 + '<th class="outile_time" scope="col" width="80px">�ļ�����ʱ��</th>'
			 + '<th class="arrive_time" scope="col" width="80px">����ʱ��</th>'
			 + '<th class="state_desc" scope="col" width="80px">���ֽ������˵��</th>'
			 
			 + '<th class="state" scope="col" width="100px">�û�״̬</th>'
			  + "<th class='' ></th>"
			 + '</tr>';
		}
        var nodes = this.xml.getElementsByTagName("record");
                var len = this.limit < page_num ? this.limit : page_num;

        //$('total').innerHTML= until.getNodeValue("total", this.xml);
        for (var i = 0; i < len && i < this.limit; i++) {
            var op_type = (until.getNodeValue("op_type", nodes[i]) || '');
            var op_state = (until.getNodeValue("state", nodes[i]) || '');
			var result = (until.getNodeValue("result", nodes[i]) || '');
            var type = "";
            var state = "";
            var in_money= "";
            var out_money= "";
			
            if(op_type == 1)
            {
                type = "��ֵ";
                in_money = (until.getNodeValue("op_money", nodes[i]) || '0');
                out_money = '0';
            }
            else 
            {
                type = "����";
                in_money = '0';
                out_money = (until.getNodeValue("op_money", nodes[i]) || '0');
            }

            if(op_state == 1)
            {
                state = "�ѵ���";
            }
            else if(op_state == 2)
            {
                state = "����ʧ��";
            }
            else if(op_state==3)
            {
                state = "���ύ";
            }else if(op_state==4)
            {
                state = "�����";
            }else if(op_state==5)
            {
                state = "�ѵ���";
            }
			if(result=='1'){
				result='�ɹ�';	
			}else if(result==='0'){
				result='ʧ��';	
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
			 listHTML+= "<td class='other_name'>" + (until.getNodeValue("other_name", nodes[i])|| '') + "</td>"
             + "<td class='trans_id'>" + (until.getNodeValue("trans_id", nodes[i])|| '') + "</td>"
             + "<td class='out_fee' >" + (until.getNodeValue("out_fee", nodes[i])|| '') + "</td>"
             + "<td class='real_name' >" + (until.getNodeValue("real_name", nodes[i])|| '') + "</td>"
             + "<td class='bank_name' >" + (until.getNodeValue("bank_name", nodes[i])|| '')  +"</td>"
			 + "<td class='out_actual'>" + (until.getNodeValue("out_actual", nodes[i])|| '') + "</td>"
             + "<td class='card_no'>" + (until.getNodeValue("card_no", nodes[i])|| '') + "</td>"
             + "<td class='card_name' >" + (until.getNodeValue("card_name", nodes[i])|| '') + "</td>"
			 + "<td class='provice_name'>" + (until.getNodeValue("provice_name", nodes[i])|| '') + "</td>"
             + "<td class='city_name'>" + (until.getNodeValue("city_name", nodes[i])|| '') + "</td>"
             + "<td class='bank_branch_name' >" + (until.getNodeValue("bank_branch_name", nodes[i])|| '') + "</td>"
             + "<td class='out_money' >" + (until.getNodeValue("out_money", nodes[i])|| '') + "</td>"
			 + "<td class='create_time'>" + (until.getNodeValue("create_time", nodes[i])|| '') + "</td>"
             + "<td class='decide_teller' >" + (until.getNodeValue("decide_teller", nodes[i])|| '') + "</td>"
			 + "<td class='decide_time'>" + (until.getNodeValue("decide_time", nodes[i])|| '') + "</td>"
             + "<td class='outfile_time'>" + (until.getNodeValue("outfile_time", nodes[i])|| '') + "</td>"
             + "<td class='arrive_time' >" + (until.getNodeValue("arrive_time", nodes[i])|| '') + "</td>"
             + "<td class='state_desc' >" + (until.getNodeValue("state_desc", nodes[i])|| '') + "</td>"
             + "<td class='state' >" + state  +"</td>"
			 + "<td class='state' >"+Record.getOpreation(op_state,nodes[i])+"</td>"
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
		
		this.other_uin=$('other_uin').value;
		
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
			url='/cgi-bin/gy_query_outcome_list.cgi';
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
	      /*  TFL.timer.bind({
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
               $("trade_time_a").value = end_date;
                $("trade_time_b").value = end_date;
    },
    init : function () 
    {

         this.initCalender();
        /* $('income').onclick = function () 
         {
              Record.op_iotype= '1';
              Record.query(1);
         }*/
//       $('outcome').onclick = function () 
//       {
//            Record.op_iotype = '2';
//            Record.query(1);
//       }
		 
		 $('outcome_output').onclick= function(){
		 	    var trade_time_a = $('trade_time_a').value;
                var trade_time_b = $('trade_time_b').value;
                var dateTime = false;

                if(trade_time_a.length > 0)
                { 
                     dateTime = Record.checkDate(trade_time_a,trade_time_b);
                }
                else if(trade_time_b.length > 0)
                { 
                     dateTime = Record.checkDate(trade_time_a,trade_time_b);
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
		 	    
				 request.sendQuery.call(this, '/cgi-bin/download_custom_account.cgi', [
				 {
				 	name: 'type', value:'2'
				 },
				 {
				 	name: 'trans_date', value:this.start_date
				 }
				 ],
				 Record.getOutcomeFile_handle);
//				 console.log(this.start_date);
//				 console.log( $("trade_time_a").value);
		}
		$('close_').onclick=function(){
			Record.closeMydiv();
		}
		$('cancel_').onclick=function(){
			Record.closeMydiv();
		}
		$('submit_ok').onclick=function(){
			Record.submitExamineOk();
		}
		$('submit_no').onclick=function(){
			Record.submitExamineNo();
		}
		/*$('upload').onclick=function(){
			Record.submitFile();	
		}*/

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
            var name = until.getNodeValue("file_url", xml); //������Ϣ
			console.log(xml);
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
                    value : '1'
                },
                 {
                    name : 'v',
                    value : Math.random()
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
			$('reason').value='';
			$('bg4').style.display='none';
			$('popDiv').style.display='none';
			
	},
	openMydiv:function(e){
			var obj=e.srcElement||e.target;
			$('trans_id').value=obj.id;
			$('bg4').style.display='block';
			$('popDiv').style.display='block';
			 $('realName').value=this.manager_uin;
			
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
