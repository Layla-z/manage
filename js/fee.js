var FeeWork = {
	init:function(){
		window.sessionStorage.removeItem("type");
		$("#beginDate").val(beginFormatDate());
		$("#endDate").val(endFormatDate());
		/*换页异步请求*/
    	$(".tcdPageCode").createPage({
        	backFn:function(p){
				var page = (p - 1)*8;
				var type = window.sessionStorage.getItem("type");
				findList1(page,type);
			}
		});
		/*查询功能*/
		$("#check").click(function(event) {
			window.sessionStorage.setItem("type","1");
			findList(null,"1");
		});
		/*查询功能*/
		$("#check1").click(function(event) {
			window.sessionStorage.setItem("type","2");
			findList(null,"2");
		});
		findList();
	}
}
//查询所有
function findList(page,type){
	if(page==null||page==""){
		page = "0";
	}
	if(type==null||type==""){
		type = "1";
	}
	var params = [
				{ name : 'offset',value :page},
				{ name : 'limit',value : "8"},
				{ name : 'type',value : type}
			 ];
	var beginDate = $("#beginDate").val();
	var endDate = $("#endDate").val();
	if(!beginDate&&!endDate){
		var dresult = validateTimePeriod($("#beginDate"),$("#endDate"));        //验证是否起始时间小于等于截至时间  
		if(dresult!=true){
			alert("请确保起始时间小于截至时间");  
			return;  
		}
	}
	if(beginDate==null||beginDate==""){
		beginDate = beginFormatDate();
	}
	if(endDate==null||endDate==""){
		endDate = endFormatDate();
	}
	if(beginDate != null && beginDate !="") {
		var a = { name : 'fee_date_beg',value : beginDate};
		params.push(a);
	}
	if(endDate != null && endDate !="") {
		var a = { name : 'fee_date_end',value : endDate};
		params.push(a);
	}
	BaseRequest.resquest(params,"/cgi-bin/query_fee_split_list.cgi",requestFindListResult);
}
//query_fee_split_list.cgi返回的参数
function requestFindListResult(xml){
	console.log(xml)
	var errorcode = until.getNodeValue("errorcode", xml); //返回码
	var errormessage = until.getNodeValue("errormessage", xml); //返回信息
	switch(errorcode){
		case "0000":
			var total = until.getNodeValue("total", xml);
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
				var short_name=until.getNodeValue("short_name", nodes[i]);
				if(short_name == ""){
					short_name = "无"
				}
				var total_amount = (until.getNodeValue("total_amount", nodes[i])/100);
				total_amount = parseFloat(total_amount).toFixed(2);
				var total_fee = until.getNodeValue("total_fee", nodes[i])/100;
				total_fee = parseFloat(total_fee).toFixed(2);
				var total_fee_split = until.getNodeValue("total_fee_split", nodes[i])/100;
				total_fee_split = parseFloat(total_fee_split).toFixed(2);
				var result = until.getNodeValue("result", nodes[i]);
				if(result == "1"){
					result = "待分润";
				} else if(result == "2"){
					result = "已分润";
				} else{
					result = "无";
				}
				var transfer_date = until.getNodeValue("transfer_date", nodes[i]);
				if(transfer_date==""){
					transfer_date = "无"
				}
				var date_range = until.getNodeValue("date_range", nodes[i]);
				/*把数据绑定到表格上*/
				html += "<tr><td>" + short_name + "</td>";
				html += "<td>" + until.getNodeValue("cmer_level", nodes[i]) + "</td>";
				html += "<td>" + total_amount + "</td>";
				html += "<td>" + total_fee + "</td>";
				html += "<td>" + total_fee_split + "</td>";
				html += "<td>" + result + "</td>";
				html += "<td>" + transfer_date + "</td>";
				html += "<td>" + date_range + "</td></tr>";
			}
			$("#tBody").html(html);
			break;
		default :
			alert(errormessage);
			break;
	}
}
//查询所有
function findList1(page,type){
	if(page==null||page==""){
		page = "0";
	}
	if(type==null||type==""){
		type = "1";
	}
	var params = [
				{ name : 'offset',value :page},
				{ name : 'limit',value : "8"},
				{ name : 'type',value : "2"}
			 ];
	var beginDate = $("#beginDate").val();
	var endDate = $("#endDate").val();
	if(!beginDate&&!endDate){
		var dresult = validateTimePeriod($("#beginDate"),$("#endDate"));        //验证是否起始时间小于等于截至时间  
		if(dresult!=true){
			alert("请确保起始时间小于截至时间");  
			return;  
		}
	}
	if(beginDate==null||beginDate==""){
		beginDate = beginFormatDate();
	}
	if(endDate==null||endDate==""){
		endDate = endFormatDate();
	}
	if(beginDate != null && beginDate !="") {
		var a = { name : 'fee_date_beg',value : beginDate};
		params.push(a);
	}
	if(endDate != null && endDate !="") {
		var a = { name : 'fee_date_end',value : endDate};
		params.push(a);
	}
	BaseRequest.resquest(params,"/cgi-bin/query_fee_split_list.cgi",requestFindListResult1);
}
//query_fee_split_list.cgi返回的参数
function requestFindListResult1(xml){
	var errorcode = until.getNodeValue("errorcode", xml); //返回码
	var errormessage = until.getNodeValue("errormessage", xml); //返回信息
	switch(errorcode){
		case "0000":
			var html = "";
			var ret_num = until.getNodeValue("ret_num", xml);
            var nodes = xml.getElementsByTagName("record");
			for (var i = 0; i < ret_num; i++) {
				var short_name=until.getNodeValue("short_name", nodes[i]);
				if(short_name == ""){
					short_name = "无"
				}
				var total_amount = (until.getNodeValue("total_amount", nodes[i])/100);
				total_amount = parseFloat(total_amount).toFixed(2);
				var total_fee = until.getNodeValue("total_fee", nodes[i])/100;
				total_fee = parseFloat(total_fee).toFixed(2);
				var total_fee_split = until.getNodeValue("total_fee_split", nodes[i])/100;
				total_fee_split = parseFloat(total_fee_split).toFixed(2);
				var result = until.getNodeValue("result", nodes[i]);
				if(result == "1"){
					result = "待分润";
				} else if(result == "2"){
					result = "已分润";
				} else{
					result = "无";
				}
				var transfer_date = until.getNodeValue("transfer_date", nodes[i]);
				if(transfer_date==""){
					transfer_date = "无"
				}
				var date_range = until.getNodeValue("date_range", nodes[i]);
				/*把数据绑定到表格上*/
				html += "<tr><td>" + short_name + "</td>";
				html += "<td>" + until.getNodeValue("cmer_level", nodes[i]) + "</td>";
				html += "<td>" + total_amount + "</td>";
				html += "<td>" + total_fee + "</td>";
				html += "<td>" + total_fee_split + "</td>";
				html += "<td>" + result + "</td>";
				html += "<td>" + transfer_date + "</td>";
				html += "<td>" + date_range + "</td></tr>";
			}
			$("#tBody").html(html);
			break;
		default :
			alert(errormessage);
			break;
	}
}
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
var endFormatDate = function(){
	var date = getDays1();
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '' + m + '' + d;
};
var beginFormatDate = function(){
	var date = getDays();
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '' + m + '' + d;
};
var getDays = function (){
	var now = new Date();
	var day = now.getDay();
	var week = "7123456";
	var first = 0 - week.indexOf (day);
	var f = new Date;
	f.setDate (f.getDate ()-7 + first);
	return f;
}
var getDays1 = function (){
	var now = new Date();
	var day = now.getDay();
	var week = "7123456";
	var last = 6 - week.indexOf (day);
	var l = new Date;
	l.setDate (l.getDate ()-7 + last);
	return l;
}