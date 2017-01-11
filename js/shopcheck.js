var ShopcheckWork = {
	init : function(){
		window.sessionStorage.removeItem("payValue");
		$("#beginDate").val(formatDate());
		$("#endDate").val(formatDate());
		/*换页异步请求*/
    	$(".tcdPageCode").createPage({
        	backFn:function(p){
				var page = (p - 1)*8;
				var payValue = window.sessionStorage.getItem("payValue");
				findList1(page,payValue);
			}
		});
		$("#review").toggleClass('togcolor');
		var payValue = "6";
		$("#succ").click(function(event){
			$(this).toggleClass('togcolor');
			$("#fail,#wait,#review").removeClass('togcolor');
			payValue = $(this).attr("data-value");
			findList(null,payValue);
			window.sessionStorage.setItem("payValue",payValue);
		});
		$("#fail").click(function(event){
			$(this).toggleClass('togcolor');
			$("#succ,#wait,#review").removeClass('togcolor');
			payValue = $(this).attr("data-value");
			findList(null,payValue);
			window.sessionStorage.setItem("payValue",payValue);
		});
		$("#wait").click(function(event){
			$(this).toggleClass('togcolor');
			$("#succ,#fail,#review").removeClass('togcolor');
			payValue = $(this).attr("data-value");
			findList(null,payValue);
			window.sessionStorage.setItem("payValue",payValue);
		});
		$("#review").click(function(event){
			$(this).toggleClass('togcolor');
			$("#succ,#fail,#wait").removeClass('togcolor');
			payValue = $(this).attr("data-value");
			findList(null,payValue);
			window.sessionStorage.setItem("payValue",payValue);
		});
		/*查询功能*/
		$("#shopcheck").click(function(event) {
			var payValue = window.sessionStorage.getItem("payValue");
			findList(null,payValue);
		});
		findList(null,null);
	}
}
//查询所有
function findList(page,payValue){
	if(page==null||page==""){
		page = "0";
	}
	if(payValue==null||payValue==""){
		payValue = "6";
	}
	var params = [
				{ name : 'server_no',value : "300007"},
				{ name : 'offset',value :page},
				{ name : 'limit',value : "8"},
				{ name : 'state',value : payValue}
			 ];
	var cmerkey = $("#key").val();
	if(cmerkey != null && cmerkey !="") {
		var a = { name : 'key',value : cmerkey};
		params.push(a);
	}
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
	 		var a = { name : 'time_beg',value : startdate};
			params.push(a);
		}
	}else{
		startdate = null;
	}
	if(enddate != " 59:59:59") {
		if(enddate != null) {
			var a = { name : 'time_end',value : enddate};
			params.push(a);
		}
	}else{
		enddate = null;
	}
	//alert(startdate+"==="+enddate);
	BaseRequest.resquest(params,"/cgi-bin/query_cmer_list.cgi",requestFindListResult);
}
//query_fee_split_list.cgi返回的参数
function requestFindListResult(xml){
	var errorcode = until.getNodeValue("errorcode", xml); //返回码
	var errormessage = until.getNodeValue("errormessage", xml); //返回信息
	switch(errorcode){
		case "0000":
            var total = until.getNodeValue("total", xml);
            /*计算总页数*/
            totalPage = (total%8)==0?(total/8):(parseInt(total/8)+1);    
            $(".tcdPageCode").createPage({
                pageCount:totalPage,
                current:1,
            });
			var html = "";
			var ret_num = until.getNodeValue("ret_num", xml);
			var nodes = xml.getElementsByTagName("record");
			for (var i = 0; i < ret_num; i++) {
				var aging = until.getNodeValue("aging", nodes[i]);
				if(aging == "1"){
					aging = "T + 0"
				}else if(aging == "2"){
					aging = "T + 1"
				}
				html += "<tr><td>" + until.getNodeValue("uid", nodes[i]) + "</td>";
				html += "<td>" + until.getNodeValue("short_name", nodes[i]) + "</td>";
				html += "<td>" + until.getNodeValue("contact_name", nodes[i]) + "</td>";
				html += "<td>" + until.getNodeValue("contact_phone", nodes[i]) + "</td>";
				html += "<td>" + aging + "</td>";
				html += "<td>" + until.getNodeValue("qrcode_total_num", nodes[i]) + "</td>";
				html += "<td>" + until.getNodeValue("qrcode_left_num", nodes[i]) + "</td>";
				var state = until.getNodeValue("state", nodes[i]);
				switch(state){
					case "1":
					   state = "审核中";
					   break;
					case "2":
						state = "审核失败";
					   break;
					case "3":
						state = "审核成功";
						break;
					case "6":
						state = "待实名";
						break;
					default :
						state ="无";
					  break;
				}
				html += "<td>" + state + "</td>";
				html += "<td>" + "<span class=\"checkdetail\" onclick=\"findDetail("+until.getNodeValue("uid", nodes[i])+")\">查看详情"+ "</span></td>";
				html += "<td>" + "<span class=\"qcode\" onclick=\"addCountQrcode("+until.getNodeValue("uid", nodes[i])+")\">分配二维码" + "</span></td></tr>";
			}
			$("#tBody").html(html);
			break;
		default :
			alert(errormessage);
			break;
	}
}
//查询所有
function findList1(page,payValue){
	if(page==null||page==""){
		page = "0";
	}
	if(payValue==null||payValue==""){
		payValue = "6";
	}
	var params = [
				{ name : 'server_no',value : "300007"},
				{ name : 'offset',value :page},
				{ name : 'limit',value : "8"},
				{ name : 'state',value : payValue}
			 ];
	var cmerkey = $("#key").val();
	if(cmerkey != null && cmerkey !="") {
		var a = { name : 'key',value : cmerkey};
		params.push(a);
	}
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
	 		var a = { name : 'time_beg',value : startdate};
			params.push(a);
		}
	}else{
		startdate = null;
	}
	if(enddate != " 59:59:59") {
		if(enddate != null) {
			var a = { name : 'time_end',value : enddate};
			params.push(a);
		}
	}else{
		enddate = null;
	}
	BaseRequest.resquest(params,"/cgi-bin/query_cmer_list.cgi",requestFindListResult1);
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
				var aging = until.getNodeValue("aging", nodes[i]);
				if(aging == "1"){
					aging = "T + 0"
				}else if(aging == "2"){
					aging = "T + 1"
				}
				html += "<tr><td>" + until.getNodeValue("uid", nodes[i]) + "</td>";
				html += "<td>" + until.getNodeValue("short_name", nodes[i]) + "</td>";
				html += "<td>" + until.getNodeValue("contact_name", nodes[i]) + "</td>";
				html += "<td>" + until.getNodeValue("contact_phone", nodes[i]) + "</td>";
				html += "<td>" + aging + "</td>";
				html += "<td>" + until.getNodeValue("qrcode_total_num", nodes[i]) + "</td>";
				html += "<td>" + until.getNodeValue("qrcode_left_num", nodes[i]) + "</td>";
				var state = until.getNodeValue("state", nodes[i]);
				switch(state){
					case "1":
					   state = "审核中";
					   break;
					case "2":
						state = "审核失败";
					   break;
					case "3":
						state = "审核成功";
						break;
					case "6":
						state = "待实名";
						break;
					default :
						state ="无";
					  break;
				}
				html += "<td>" + state + "</td>";
				html += "<td>" + "<span class=\"checkdetail\" onclick=\"findDetail("+until.getNodeValue("uid", nodes[i])+")\">查看详情"+ "</span></td>";
				html += "<td>" + "<span class=\"qcode\" onclick=\"addCountQrcode("+until.getNodeValue("uid", nodes[i])+")\">分配二维码" + "</span></td></tr>";
			}
			$("#tBody").html(html);
			break;
		default :
			alert(errormessage);
			break;
	}
}
function addCountQrcode(uid){
	var qrcodeNumber=prompt("请输入额度","");
	if(qrcodeNumber==null){
		return;
	}else if(qrcodeNumber==""||qrcodeNumber==undefined||qrcodeNumber=="undefined"||isNaN(qrcodeNumber)){
		alert("请输入正确的额度");
		return;
	}
	var params = [
				{ name : 'server_no',value : "300013"},
				{ name : 'uid',value :uid},
				{ name : 'number',value :qrcodeNumber}
			 ];
	BaseRequest.resquest(params,"/cgi-bin/qr_incre_number.cgi",addCountQrcodeResult);
}
function addCountQrcodeResult(xml){
	var errorcode = until.getNodeValue("errorcode", xml); //返回码
	var errormessage = until.getNodeValue("errormessage", xml); //返回信息
	switch(errorcode){
		case "0000":
			alert("额度添加成功！");
			location.reload();
			break;
		default :
			alert(errormessage);
			break;
	}
}
function findDetail(uid) {
	location.href="shopdetals.html?uid="+uid;
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