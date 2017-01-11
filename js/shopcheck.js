var ShopcheckWork = {
	init : function(){
		window.sessionStorage.removeItem("payValue");
		$("#beginDate").val(formatDate());
		$("#endDate").val(formatDate());
		/*��ҳ�첽����*/
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
		/*��ѯ����*/
		$("#shopcheck").click(function(event) {
			var payValue = window.sessionStorage.getItem("payValue");
			findList(null,payValue);
		});
		findList(null,null);
	}
}
//��ѯ����
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
		var dresult = validateTimePeriod(startdate = $(".startdate"),enddate = $(".enddate"));        //��֤�Ƿ���ʼʱ��С�ڵ��ڽ���ʱ��  
		if(dresult!=true){  
			alert("��ȷ����ʼʱ��С�ڽ���ʱ��");  
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
//query_fee_split_list.cgi���صĲ���
function requestFindListResult(xml){
	var errorcode = until.getNodeValue("errorcode", xml); //������
	var errormessage = until.getNodeValue("errormessage", xml); //������Ϣ
	switch(errorcode){
		case "0000":
            var total = until.getNodeValue("total", xml);
            /*������ҳ��*/
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
					   state = "�����";
					   break;
					case "2":
						state = "���ʧ��";
					   break;
					case "3":
						state = "��˳ɹ�";
						break;
					case "6":
						state = "��ʵ��";
						break;
					default :
						state ="��";
					  break;
				}
				html += "<td>" + state + "</td>";
				html += "<td>" + "<span class=\"checkdetail\" onclick=\"findDetail("+until.getNodeValue("uid", nodes[i])+")\">�鿴����"+ "</span></td>";
				html += "<td>" + "<span class=\"qcode\" onclick=\"addCountQrcode("+until.getNodeValue("uid", nodes[i])+")\">�����ά��" + "</span></td></tr>";
			}
			$("#tBody").html(html);
			break;
		default :
			alert(errormessage);
			break;
	}
}
//��ѯ����
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
		var dresult = validateTimePeriod(startdate = $(".startdate"),enddate = $(".enddate"));        //��֤�Ƿ���ʼʱ��С�ڵ��ڽ���ʱ��  
		if(dresult!=true){  
			alert("��ȷ����ʼʱ��С�ڽ���ʱ��");  
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
//query_fee_split_list.cgi���صĲ���
function requestFindListResult1(xml){
	var errorcode = until.getNodeValue("errorcode", xml); //������
	var errormessage = until.getNodeValue("errormessage", xml); //������Ϣ
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
					   state = "�����";
					   break;
					case "2":
						state = "���ʧ��";
					   break;
					case "3":
						state = "��˳ɹ�";
						break;
					case "6":
						state = "��ʵ��";
						break;
					default :
						state ="��";
					  break;
				}
				html += "<td>" + state + "</td>";
				html += "<td>" + "<span class=\"checkdetail\" onclick=\"findDetail("+until.getNodeValue("uid", nodes[i])+")\">�鿴����"+ "</span></td>";
				html += "<td>" + "<span class=\"qcode\" onclick=\"addCountQrcode("+until.getNodeValue("uid", nodes[i])+")\">�����ά��" + "</span></td></tr>";
			}
			$("#tBody").html(html);
			break;
		default :
			alert(errormessage);
			break;
	}
}
function addCountQrcode(uid){
	var qrcodeNumber=prompt("��������","");
	if(qrcodeNumber==null){
		return;
	}else if(qrcodeNumber==""||qrcodeNumber==undefined||qrcodeNumber=="undefined"||isNaN(qrcodeNumber)){
		alert("��������ȷ�Ķ��");
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
	var errorcode = until.getNodeValue("errorcode", xml); //������
	var errormessage = until.getNodeValue("errormessage", xml); //������Ϣ
	switch(errorcode){
		case "0000":
			alert("�����ӳɹ���");
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
// ��ѯУ��,У����ʼʱ�����С�ڽ���ʱ��  
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
		// //ת��ΪJavaScript��������
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