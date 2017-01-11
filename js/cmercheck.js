var CmercheckWork = {
	init:function(){
		/*��ҳ�첽����*/
    	$(".tcdPageCode").createPage({
        	backFn:function(p){
				var page = (p - 1)*8;
				findList1(page);
			}
		});
		/*��ѯ����*/
		$("#shopcheck").click(function(event) {
			findList();
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
				{ name : 'server_no',value : "300007"},
				{ name : 'offset',value :page},
				{ name : 'limit',value : "8"},
				{ name : 'state',value : "1"}
			 ];
	var cmerkey = $("#cmerkey").val();
	if(cmerkey != null && cmerkey !="") {
		var a = { name : 'key',value : cmerkey};
		params.push(a);
	}
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
				var short_name=until.getNodeValue("short_name", nodes[i]);                 
				/*�����ݰ󶨵������*/
				var aging = until.getNodeValue("aging", nodes[i]);
				if(aging == "1"){
					aging = "T + 0"
				}else if(aging == "2"){
					aging = "T + 1"
				}
				var state = until.getNodeValue("state", nodes[i]);
				switch(state){
					case "1":
					   state = "δ���";
					   break;
					case "2":
						state = "��˲�ͨ��";
					   break;
				    case "3":
						state = "���ͨ��";
				    	break;
				    case "4":
						state = "ע��ʧ��";
				    	break;
				    case "5":
						state = "ע��ɹ�";
				    	break;
					default :
						state ="��";
					  break;
				}
				html += "<tr onclick='findDetail("+until.getNodeValue("uid", nodes[i])+");'><td>" + until.getNodeValue("uid", nodes[i]) + "</td>";
				html += "<td>" + until.getNodeValue("short_name", nodes[i]) + "</td>";
				html += "<td>" + until.getNodeValue("contact_name", nodes[i]) + "</td>";
				html += "<td>" + until.getNodeValue("contact_phone", nodes[i]) + "</td>";
				html += "<td>" + state + "</td>";
				html += "<td>" + aging + "</td></tr>";
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
				{ name : 'server_no',value : "300007"},
				{ name : 'offset',value :page},
				{ name : 'limit',value : "8"},
				{ name : 'state',value : "1"}
			 ];
	var cmerkey = $("#cmerkey").val();
	if(cmerkey != null && cmerkey !="") {
		var a = { name : 'key',value : cmerkey};
		params.push(a);
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
				var short_name=until.getNodeValue("short_name", nodes[i]);                 
				/*�����ݰ󶨵������*/
				var aging = until.getNodeValue("aging", nodes[i]);
				if(aging == "1"){
					aging = "T + 0"
				}else if(aging == "2"){
					aging = "T + 1"
				}
				var state = until.getNodeValue("state", nodes[i]);
				switch(state){
					case "1":
					   state = "δ���";
					   break;
					case "2":
						state = "��˲�ͨ��";
					   break;
				    case "3":
						state = "���ͨ��";
				    	break;
				    case "4":
						state = "ע��ʧ��";
				    	break;
				    case "5":
						state = "ע��ɹ�";
				    	break;
					default :
						state ="��";
					  break;
				}
				html += "<tr onclick='findDetail("+until.getNodeValue("uid", nodes[i])+");'><td>" + until.getNodeValue("uid", nodes[i]) + "</td>";
				html += "<td>" + until.getNodeValue("short_name", nodes[i]) + "</td>";
				html += "<td>" + until.getNodeValue("contact_name", nodes[i]) + "</td>";
				html += "<td>" + until.getNodeValue("contact_phone", nodes[i]) + "</td>";
				html += "<td>" + state + "</td>";
				html += "<td>" + aging + "</td></tr>";
			}
			$("#tBody").html(html);
			break;
		default :
			alert(errormessage);
			break;
	}
}
function findDetail(uid){
	location.href="cmerdetail.shtml?uid="+uid;
}
