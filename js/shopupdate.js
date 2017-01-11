var ShopupdateWork = {
	init:function(){
		$("#beginDate").val(beginFormatDate());
		$("#endDate").val(endFormatDate());
		/*��ҳ�첽����*/
    	$(".tcdPageCode").createPage({
        	backFn:function(p){
				var page = (p - 1)*8;
				findList1(page);
			}
		});
		/*��ѯ����*/
		$("#search").click(function(event) {
			findList(null);
		});
		findList();
	}
}
//��ѯ����
function findList(page){
	if(page==null||page==""){
		page = "0";
	}
	var params = [
				{ name : 'server_no',value :"400005"},
				{ name : 'offset',value :page},
				{ name : 'limit',value : "8"},
				{ name : 'state',value : "2"}
			 ];
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
	var key = $("#key").val();
	if(key!=null&&key!=""){
		var a = { name : 'key',value : key};
		params.push(a);
	}
	BaseRequest.resquest(params,"/cgi-bin/query_upgrade_list.cgi",requestFindListResult);
}
//query_fee_split_list.cgi���صĲ���
function requestFindListResult(xml){
	var errorcode = until.getNodeValue("errorcode", xml); //������
	var errormessage = until.getNodeValue("errormessage", xml); //������Ϣ
	switch(errorcode){
		case "0000":
			var total = until.getNodeValue("total", xml);
            /*������ҳ��*/
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
					short_name = "��"
				}
				var level_name=until.getNodeValue("level_name", nodes[i]);
				var upgrade_level_name=until.getNodeValue("upgrade_level_name", nodes[i]);
				var create_time=until.getNodeValue("create_time", nodes[i]);
				var contact_name=until.getNodeValue("contact_name", nodes[i]);
				var contact_phone=until.getNodeValue("contact_phone", nodes[i]);
				var rate=until.getNodeValue("rate", nodes[i]);
				var upgrade_rate=until.getNodeValue("upgrade_rate", nodes[i]);
				var pro_id=until.getNodeValue("pro_id", nodes[i]);
				var rate1 = rate/100;
				/*�����ݰ󶨵������*/
				html += "<tr><td>" + short_name + "</td>";
				html += "<td>" + contact_name + "</td>";
				html += "<td>" + contact_phone + "</td>";
				html += "<td>" + level_name + "</td>";
				html += "<td>" + upgrade_level_name + "</td>";
				html += "<td>" + parseFloat(rate1).toFixed(2) + "��</td>";
				html += "<td>" + create_time + "</td>";
				html += '<td><a href="updatecheck.shtml?short_name='+encodeURI(short_name)+'&contact_name='+encodeURI(contact_name)+'&contact_phone='+contact_phone+'&level_name='+encodeURI(level_name)+'&upgrade_level_name='+encodeURI(upgrade_level_name)+'&rate='+rate+'&upgrade_rate='+upgrade_rate+'&pro_id='+pro_id+'">���</a></td></tr>';
			}
			$("#tBody").html(html);
			break;
		default :
			alert(errormessage);
			break;
	}
}
//��ѯ����
function findList1(page){
	if(page==null||page==""){
		page = "0";
	}
	var params = [
				{ name : 'server_no',value :"400005"},
				{ name : 'offset',value :page},
				{ name : 'limit',value : "8"},
				{ name : 'state',value : "2"}
			 ];
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
	var key = $("#key").val();
	if(key!=null&&key!=""){
		var a = { name : 'key',value : key};
		params.push(a);
	}
	BaseRequest.resquest(params,"/cgi-bin/query_upgrade_list.cgi",requestFindListResult1);
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
				var short_name=until.getNodeValue("short_name", nodes[i]);
				if(short_name == ""){
					short_name = "��"
				}
				var level_name=until.getNodeValue("level_name", nodes[i]);
				var upgrade_level_name=until.getNodeValue("upgrade_level_name", nodes[i]);
				var create_time=until.getNodeValue("create_time", nodes[i]);
				var contact_name=until.getNodeValue("contact_name", nodes[i]);
				var contact_phone=until.getNodeValue("contact_phone", nodes[i]);
				var rate=until.getNodeValue("rate", nodes[i]);
				var upgrade_rate=until.getNodeValue("upgrade_rate", nodes[i]);
				var pro_id=until.getNodeValue("pro_id", nodes[i]);
				var rate1 = rate/100;
				/*�����ݰ󶨵������*/
				html += "<tr><td>" + short_name + "</td>";
				html += "<td>" + contact_name + "</td>";
				html += "<td>" + contact_phone + "</td>";
				html += "<td>" + level_name + "</td>";
				html += "<td>" + upgrade_level_name + "</td>";
				html += "<td>" + parseFloat(rate1).toFixed(2) + "��</td>";
				html += "<td>" + create_time + "</td>";
				html += '<td><a href="updatecheck.shtml?short_name='+encodeURI(short_name)+'&contact_name='+encodeURI(contact_name)+'&contact_phone='+contact_phone+'&level_name='+encodeURI(level_name)+'&upgrade_level_name='+encodeURI(upgrade_level_name)+'&rate='+rate+'&upgrade_rate='+upgrade_rate+'&pro_id='+pro_id+'">���</a></td></tr>';
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
var endFormatDate = function(){
	var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
};
var beginFormatDate = function(){
	var date =  new Date();
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
};