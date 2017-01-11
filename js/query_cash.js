var LiushuiWork = {
	init : function(){
		window.sessionStorage.removeItem("payValue");
		window.sessionStorage.removeItem("type");
		$("#beginDate").val(formatDate());
		$("#endDate").val(formatDate());
		/*换页异步请求*/
    	$(".tcdPageCode").createPage({
        	backFn:function(p){
				var page = (p - 1)*8;
				var payValue = window.sessionStorage.getItem("payValue");
				var type = window.sessionStorage.getItem("type");
				findList1(page,payValue,type);
			}
		});
		$("#trans_id").keyup(function(event) {
			var val = isNum($(this).val());
			if(val==false){
				$("#trans_id").val("");
				$("#trans_id").attr("placeholder","请输入数字");
			}
		});
		$("#succ").toggleClass('togcolor');
		var payValue = "1";
		$("#succ").click(function(event){
			$(this).toggleClass('togcolor');
			$("#fail,#wait").removeClass('togcolor');
			payValue = $(this).attr("data-value");
			var type = window.sessionStorage.getItem("type");
			findAll(payValue,type);
			window.sessionStorage.setItem("payValue",payValue);
		});
		$("#fail").click(function(event){
			$(this).toggleClass('togcolor');
			$("#succ,#wait").removeClass('togcolor');
			payValue = $(this).attr("data-value");
			var type = window.sessionStorage.getItem("type");
			findAll(payValue,type);
			window.sessionStorage.setItem("payValue",payValue);
		});
		$("#wait").click(function(event){
			$(this).toggleClass('togcolor');
			$("#succ,#fail").removeClass('togcolor');
			payValue = $(this).attr("data-value");
			var type = window.sessionStorage.getItem("type");
			findAll(payValue,type);
			window.sessionStorage.setItem("payValue",payValue);
		});
		/*查询功能*/
		$("#check").click(function(event) {
			var payValue = window.sessionStorage.getItem("payValue");
			window.sessionStorage.setItem("type","1");
			findAll(payValue,"1");
		});
		$("#check1").click(function(event) {
			var payValue = window.sessionStorage.getItem("payValue");
			window.sessionStorage.setItem("type","2");
			findAll(payValue,"2");
		});
	    findAll(null,null);
	}
}
function findAll(payValue,type){
	if(type==null||type==""){
		type = "1";
	}
	if(payValue==null||payValue==""){
		payValue = "1";
	}
	findList("0",payValue,type);
	findListTotal(payValue,type);
}
//查询所有总额
function findListTotal(payValue,type){
	var params = [
				{ name : 'server_no',value : "200003"},
				{ name : 'type',value : type},
				{ name : 'result',value : payValue}
			 ];
	if(!$(".startdate").val()&&!$(".enddate").val()){
		var dresult = validateTimePeriod(startdate = $(".startdate"),enddate = $(".enddate"));        //验证是否起始时间小于等于截至时间  
		if(dresult!=true){  
			alert("请确保起始时间小于截至时间");  
			return;  
		}
	}
	var startdate = $(".startdate").val() + " 00:00:00";
	var enddate = $(".enddate").val() + " 59:59:59";
	if(startdate != " 00:00:00") {
		if(startdate != null) {
	 		var a = { name : 'trade_time_beg',value : startdate};
			params.push(a);
		}
	}else{
		startdate = null;
	}
	if(enddate != " 59:59:59") {
		if(enddate != null) {
			var a = { name : 'trade_time_end',value : enddate};
			params.push(a);
		}
	}else{
		enddate = null;
	}
	var transId = $("#trans_id").val();
	if(transId!=null&&transId!=""){
		var a = { name : 'trans_id',value : transId};
		params.push(a);
	}
	BaseRequest.resquest(params,"/cgi-bin/query_order_total_amount.cgi",requestFindListTotalResult);
}
function requestFindListTotalResult(xml){
	var errorcode = until.getNodeValue("errorcode", xml); //返回码
	var errormessage = until.getNodeValue("errormessage", xml); //返回信息
	switch(errorcode){
		case "0000":
			var html = "";
			var total_fee = (until.getNodeValue("total_fee", xml)/100);
			total_fee = parseFloat(total_fee).toFixed(2);
			/*把整数转化成两个小数点*/
			var total_amount = (until.getNodeValue("total_amount", xml)/100);
			total_amount = parseFloat(total_amount).toFixed(2);
			$("#total_fee").html(total_fee+"元");
			$("#total_amount").html(total_amount+"元");
			var transId = $("#trans_id").val();
			if(transId!=null&&transId!=""){
				$("#total_fee").html("-");
				$("#total_amount").html("-");
			}
		break;
	default :
		alert(errormessage);
		break;
	}
}
//查询所有
function findList(page,payValue,type){
	if(page==null||page==""){
		page = "0";
	}
	var params = [
				{ name : 'offset',value :page},
				{ name : 'limit',value : "8"},
				{ name : 'type',value : type},
				{ name : 'result',value : payValue}
			 ];
	if(!$(".startdate").val()&&!$(".enddate").val()){
		var dresult = validateTimePeriod(startdate = $(".startdate"),enddate = $(".enddate"));        //验证是否起始时间小于等于截至时间  
		if(dresult!=true){
			alert("请确保起始时间小于截至时间");  
			return;  
		}
	}
	var startdate = $(".startdate").val() + " 00:00:00";
	var enddate = $(".enddate").val() + " 59:59:59";
	if(startdate != " 00:00:00") {
		if(startdate != null) {
	 		var a = { name : 'trade_time_beg',value : startdate};
			params.push(a);
		}
	}else{
		startdate = null;
	}
	if(enddate != " 59:59:59") {
		if(enddate != null) {
			var a = { name : 'trade_time_end',value : enddate};
			params.push(a);
		}
	}else{
		enddate = null;
	}
	var transId = $("#trans_id").val();
	if(transId!=null&&transId!=""){
		var a = { name : 'trans_id',value : transId};
		params.push(a);
	}
	BaseRequest.resquest(params,"/cgi-bin/gy_query_cash_list.cgi",requestFindListResult);
}
//query_order_list.cgi返回的参数
function requestFindListResult(xml){
	console.log(xml);
	var errorcode = until.getNodeValue("errorcode", xml); //返回码
	var errormessage = until.getNodeValue("errormessage", xml); //返回信息
	switch(errorcode){
		case "0000":
			var total = until.getNodeValue("total", xml);
			$("#total_count").html(total);
            /*计算总页数*/
            var totalPage = (total%8)==0?(total/8):(parseInt(total/8)+1);
			$(".tcdPageCode").createPage({
				pageCount:totalPage,
				current:1,
			});
			var html = "";
			var ret_num = until.getNodeValue("ret_num", xml);
            var nodes = xml.getElementsByTagName("record");
			for (var i = 0; i < ret_num; i++) {
				var trade_date=until.getNodeValue("trade_date", nodes[i]);
				var paytext=until.getNodeValue("pay_mode", nodes[i]);
				if(paytext == 1){
					paytext = "微信码支付";
				} else if(paytext == 0){
					paytext = "wap方式";
				} else{
					paytext = "app";
				}
				/*把整数转化成两个小数点*/
				var price = (until.getNodeValue("amount", nodes[i])/100);
				price = parseFloat(price).toFixed(2);
				var state = until.getNodeValue("state", nodes[i]);
				if(state == "1"){
					state = "已到帐 ";
				} else if(state == "2"){
					state = "提现失败 ";
				}else if(state == "3"){
					state = "已提交 ";
				}else{
					state = "已审核";
				}
				var rate = until.getNodeValue("rate", nodes[i])/100;
				var fee = until.getNodeValue("fee", nodes[i])/100;
				fee = parseFloat(fee).toFixed(2);
				var date = subStr(until.getNodeValue("trade_date", nodes[i]));
				/*把数据绑定到表格上*/
				html += "<tr onclick='findDetail("+until.getNodeValue("trans_id", nodes[i])+");'><td>" + until.getNodeValue("trans_id", nodes[i]) + "</td>";
				html += "<td>" + until.getNodeValue("out_money", nodes[i]) + "</td>";
				html += "<td>" + until.getNodeValue("out_fee", nodes[i]) + "</td>";
				html += "<td>" + until.getNodeValue("out_actual", nodes[i]) + "</td>";
				html += "<td>" + until.getNodeValue("state", nodes[i]) + "</td>";
				html += "<td>" + until.getNodeValue("create_time", nodes[i]) + "</td></tr>";
				
			}
			
			$("#tBody").html(html);
			break;
		default :
			alert(errormessage);
			break;
	}
}
//查询所有
function findList1(page,payValue,type){
	if(page==null||page==""){
		page = "0";
	}
	if(type==null||type==""){
		type="1";
	}
	if(payValue==null||payValue==""){
		payValue = "1";
	}
	var params = [
				{ name : 'offset',value :page},
				{ name : 'limit',value : "8"},
				{ name : 'type',value : type},
				{ name : 'result',value : payValue}
			 ];
	if(!$(".startdate").val()&&!$(".enddate").val()){
		var dresult = validateTimePeriod(startdate = $(".startdate"),enddate = $(".enddate"));        //验证是否起始时间小于等于截至时间  
		if(dresult!=true){  
			alert("请确保起始时间小于截至时间");
			return;  
		}
	}
	var startdate = $(".startdate").val() + " 00:00:00";
	var enddate = $(".enddate").val() + " 59:59:59";
	if(startdate != " 00:00:00") {
		if(startdate != null) {
	 		var a = { name : 'trade_time_beg',value : startdate};
			params.push(a);
		}
	}else{
		startdate = null;
	}
	if(enddate != " 59:59:59") {
		if(enddate != null) {
			var a = { name : 'trade_time_end',value : enddate};
			params.push(a);
		}
	}else{
		enddate = null;
	}
	var transId = $("#trans_id").val();
	if(transId!=null&&transId!=""){
		var a = { name : 'trans_id',value : transId};
		params.push(a);
	}
	console.log(params);
	BaseRequest.resquest(params,"/cgi-bin/query_order_list.cgi",requestFindListResult1);
}
//query_order_list.cgi返回的参数
function requestFindListResult1(xml){
	var errorcode = until.getNodeValue("errorcode", xml); //返回码
	var errormessage = until.getNodeValue("errormessage", xml); //返回信息
	switch(errorcode){
		case "0000":
			var total = until.getNodeValue("total", xml);
			$("#total_count").html(total);
            /*计算总页数*/
            var totalPage = (total%8)==0?(total/8):(parseInt(total/8)+1);
			
			var html = "";
			var ret_num = until.getNodeValue("ret_num", xml);
            var nodes = xml.getElementsByTagName("record");
			for (var i = 0; i < ret_num; i++) {
				var trade_date=until.getNodeValue("trade_date", nodes[i]);
				var paytext=until.getNodeValue("pay_mode", nodes[i]);
				if(paytext == 1){
					paytext = "微信码支付";
				} else if(paytext == 0){
					paytext = "wap方式";
				} else{
					paytext = "app";
				}
				/*把整数转化成两个小数点*/
				var price = (until.getNodeValue("amount", nodes[i])/100);
				price = parseFloat(price).toFixed(2);
				var res = until.getNodeValue("result", nodes[i]);
				if(res == "1"){
					res = "成功";
				} else if(res == "2"){
					res = "失败";
				} else{
					res = "待支付";
				}
				var rate = until.getNodeValue("rate", nodes[i])/100;
				var fee = until.getNodeValue("fee", nodes[i])/100;
				fee = parseFloat(fee).toFixed(2);
				var date = subStr(until.getNodeValue("trade_date", nodes[i]));
				/*把数据绑定到表格上*/
				html += "<tr onclick='findDetail("+until.getNodeValue("trans_id", nodes[i])+");'><td>" + until.getNodeValue("trans_id", nodes[i]) + "</td>";
				html += "<td>" + until.getNodeValue("short_name", nodes[i]) + "</td>";
				html += "<td>" + paytext + "</td>";
				html += "<td>" + price + "</td>";
				html += "<td>" + res + "</td>";
				html += "<td>" + rate + "‰" + "</td>";
				html += "<td>" + fee + "</td>";
				html += "<td>" + date + "</td></tr>";
			}
			$("#tBody").html(html);
			break;
		default :
			alert(errormessage);
			break;
	}
}
/*拼接日期*/
function subStr(str) {
	var s1 = str.substr(0,4),
		s2 = str.substr(4,2),
		s3 = str.substr(6,2),
		s4 = str.substr(8,2),
		s5 = str.substr(10,2),
		s6 = str.substr(12,2),
		s = s1 + "-" + s2 + "-"+ s3 + " "+ s4 + ":" + s5 + ":" + s6;
	return s;
}
// 查询校验,校验起始时间必须小于截至时间  
function validateTimePeriod(begin, end) {
	if (!(begin instanceof jQuery)) {  
		begin = $(begin);  
	}
	if (!(end instanceof jQuery)) {  
		end = $(end);  
	}
	var beginString = new String(begin.val());  
	var endString = new String(end.val());  
  
	if (!(beginString == null || beginString == '')&&!(endString == null || endString == '')) {  
		// //转换为JavaScript日期类型
	    var bArray = beginString.split(/[- :]/);  
	    var beginTime = new Date(bArray[0], bArray[1]-1, bArray[2],  
	    bArray[3], bArray[4]);  
	    var eArray = endString.split(/[- :]/);  
	    var endTime= new Date(eArray[0], eArray[1]-1, eArray[2], eArray[3],  
	    eArray[4]);
		var beginTime = new Date(beginString);  
		var endTime = new Date(endString);
		if (beginTime <= endTime) {  
			return true;  
		} else {  
			return false;  
		}
	}  
	return true;        
}
/*判断查询流水号*/
function isNum(str){
	var s = /^[0-9]*$/;
	return s.test(str);
}
function findDetail(transId){
	location.href="liudetails.shtml?transId="+transId;
}
var formatDate = function(){
	var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
};