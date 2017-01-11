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
    curpage : 1,                    //当前页码
    datalistid : "listquery_data",  //显示数据区域
    pager : null,                   //页数
    start_date : '',                //起始日期
    end_date : '',                  //终止日期
    op_iotype : '1',
    limit : 5,
    offset : 0,
	other_uin:'',
    manager_uin : g_CCookie.GetCookie('xsuin'),
	
	getOpreation:function(state,id){
		var str='';
		if(state==3){
			str='<input id="'+(until.getNodeValue("trans_id", id)|| '')+'" class="my_btn" onclick="Record.openMydiv(event);" type="button" value="审核"/>';
				
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
            $('retmsg').innerHTML = '<span class="ico-info-s"></span>暂无数据，请稍后查询';
            return;
        }

        var listHTML = "";
		if(this.op_iotype=='1'){
			listHTML += "<table  border='0' style='margin-top:-16px;'>"
			 + '<tr>'
			 + '<th class="other_name" scope="col" >用户名</th>'
			 + '<th class="channel" scope="col">支付渠道</th>'
			 + '<th class="trade_date" scope="col">订单日期</th>'
			 + '<th class="op_money" scope="col">操作金额</th>'
			 + '<th class="fee_money" scope="col">手续费</th>'
			 + '<th class="actual_money" scope="col">成功金额</th>'
			  + '<th class="result_desc" scope="col">支付结果</th>'
			 + '<th class="result_desc" scope="col">订单结果</th>'
			 + '<th class="succ_time" scope="col">订单完成时间</th>'
			 + '<th class="trade_date" scope="col">日期</th>'
			 + '<th class="state" scope="col">状态</th>'
			 + '</tr>';
		}else{
			listHTML += "<table  border='0' style='margin-top:-16px; width:1500px;'>"
			 + '<tr>'
			 + '<th class="other_name" scope="col" width="80px">用户名</th>'
			 + '<th class="trans_id" scope="col" width="100px">流水号</th>'
			 + '<th class="out_ee" scope="col" width="60px">提现手续费</th>'
			 + '<th class="real_name" scope="col" width="80px">真实姓名</th>'
			 + '<th class="bank_name" scope="col" width="100px">银行名</th>'
			 + '<th class="out_actual" scope="col" width="60px">实际到帐金额</th>'
			 + '<th class="card_no" scope="col" width="130px">银行卡号</th>'
			 + '<th class="card_name" scope="col" width="80px">银行卡姓名</th>'
			 + '<th class="provice_name" scope="col" width="60px">省名</th>'
			 + '<th class="city_name" scope="col" width="60px">城市名</th>'
			 + '<th class="bank_branch_name" scope="col" width="150px">支行名</th>'
			 + '<th class="out_money" scope="col" width="50px">提现金额</th>'
			 + '<th class="create_time" scope="col" width="80px">创建时间</th>'
			 
			 + '<th class="decide_teller" scope="col" width="80px">审核人员</th>'
			 + '<th class="decide_time" scope="col" width="80px">审核时间</th>'
			 + '<th class="outile_time" scope="col" width="80px">文件导出时间</th>'
			 + '<th class="arrive_time" scope="col" width="80px">到账时间</th>'
			 + '<th class="state_desc" scope="col" width="80px">提现结果描述说明</th>'
			 
			 + '<th class="state" scope="col" width="100px">用户状态</th>'
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
                type = "充值";
                in_money = (until.getNodeValue("op_money", nodes[i]) || '0');
                out_money = '0';
            }
            else 
            {
                type = "提现";
                in_money = '0';
                out_money = (until.getNodeValue("op_money", nodes[i]) || '0');
            }

            if(op_state == 1)
            {
                state = "已到账";
            }
            else if(op_state == 2)
            {
                state = "提现失败";
            }
            else if(op_state==3)
            {
                state = "已提交";
            }else if(op_state==4)
            {
                state = "已审核";
            }else if(op_state==5)
            {
                state = "已导出";
            }
			if(result=='1'){
				result='成功';	
			}else if(result==='0'){
				result='失败';	
			}
			
            listHTML += "<tr>"

		 if(this.op_iotype=='1'){
			 listHTML+="<td class='other_name'>" + (until.getNodeValue("other_name", nodes[i])|| '') + "</td>"
             + "<td class='channel'>" + ((until.getNodeValue("channel", nodes[i])|| '')==1?'宝付':'') + "</td>"
             + "<td class='trade_date' >" + (until.getNodeValue("trade_date", nodes[i])|| '') + "</td>"
             + "<td class='op_money' >" + (until.getNodeValue("op_money", nodes[i])|| '') + "</td>"
             + "<td class='fee_money' >" + (until.getNodeValue("fee_money", nodes[i])|| '')  +"</td>"
			 + "<td class='actual_money'>" + (until.getNodeValue("actual_money", nodes[i])|| '') + "</td>"
			 + "<td class='result_desc'>" + result + "</td>"
             + "<td class='result_desc'>" + ((until.getNodeValue("result_desc", nodes[i])|| '')=='01'?'成功':'失败') + "</td>"
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
        //显示页数信息
        this.pager.showPageBar2(page_num, this.curpage, this.limit, 'Record.query');
    },
    getData : function (xml) {
        this.xml = xml;
        var retcode = until.getNodeValue("errorcode", this.xml); //返回码
        var retmsg = until.getNodeValue("errormessage", this.xml); //返回信息
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
                'invalid' : '起始日期格式错误'
             });
             dv.addEle('trade_time_b', validates.edate, {
                'invalid' : '结束日期格式错误'
             });
             dv.addEle('trade_time_b', validates.datecompare, {
                'invalid' : '结束日期不能小于起始日期'
             });
                 }
                 else if(start_date.length > 0 || end_date.length == 0)  
                 {       
                 dv.addEle('trade_time_a', validates.sdate, {
                'invalid' : '起始日期格式错误'
             });
                 }
                 else if(start_date.length == 0 || end_date.length > 0)
                 {
             dv.addEle('trade_time_b', validates.edate, {
                'invalid' : '结束日期格式错误'
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
                //初始日期
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
         { //后退
           this.curpage = until.getQueryString("page") || 1;
           $("trade_time_a").value = until.getQueryString("trade_time_a") || '';
           $("trade_time_b").value = until.getQueryString("trade_time_b")|| '';
		   Record.op_iotype = until.getQueryString("op_type")|| '1';
           //Record.query();
         }
    },
	getOutcomeFile_handle : function (xml) {
            var retcode = until.getNodeValue("errorcode", xml); //返回码
            var retmsg = until.getNodeValue("errormessage", xml); //返回信息
            var name = until.getNodeValue("file_url", xml); //返回信息
			console.log(xml);
            switch (retcode) {
                case "0000":
                    Record.downloadFile(name);
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
        downloadFile : function(name){
			
             var elemIF = document.createElement("iframe");
             elemIF.src = "/download/" + name;                 //文件路径
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
                            'null':  '请填写不通过原因' 
                           
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
		var retcode = until.getNodeValue("errorcode", xml);   //返回码
            var retmsg = until.getNodeValue("errormessage", xml); //返回信息
			
            switch (retcode) {
                case "0" :
                case "0000" :
						Record.closeMydiv();
						Record.query(this.curpage);


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
	 **上传文件格式
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
                            'null': '请上传.xls .csv格式文件',
                            'error': '请上传.xls .csv格式文件'
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
                              title : "温馨提示",
                              infoPic : "1",
                              info : '上传成功',
                              w : 350
                         });
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
        }
	
}
