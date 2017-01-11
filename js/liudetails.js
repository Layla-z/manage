var LiudetailsWork = {
	init : function(){
		$("#goBack").click(function(event) {
			location.href="liushui.shtml";
		});
		findDetail();
	}
}
function findDetail() {
	var tdValue = getUrlVars()["transId"];
	if(tdValue==null||tdValue==""){
		return;
	}
	var params = [
				{ name : 'server_no',value :"200002"},
				{ name : 'trans_id',value :tdValue}
			 ];
	BaseRequest.resquest(params,"/cgi-bin/query_order.cgi",requestFindDetailResult);
}
function requestFindDetailResult(xml){
	var errorcode = until.getNodeValue("errorcode", xml); //返回码
	var errormessage = until.getNodeValue("errormessage", xml); //返回信息
	switch(errorcode){
		case "0000":
			var html = "";
            var price = (until.getNodeValue("amount", xml))/100;
            price = parseFloat(price).toFixed(2);
            var fact_money = (until.getNodeValue("fact_money", xml))/100;
            fact_money = parseFloat(fact_money).toFixed(2);
            var res = until.getNodeValue("result", xml);
            if(res == "1"){
                res = "成功";
            } else if(res == "2"){
                res = "失败";
            } else{
                res = "待支付";
            }
            var succdate = until.getNodeValue("succ_time", xml);
            if(!succdate){
                succdate = "暂无";
            }else{
                succdate = subStr(succdate)
            }
            var trade_date = subStr(until.getNodeValue("trade_date", xml));
            var notify_time = until.getNodeValue("notify_time", xml);
            if(!notify_time){
                notify_time = "暂无";
            }else{
                notify_time = subStr(notify_time)
            }
            var fee = (until.getNodeValue("fee", xml)/100);
            fee = parseFloat(fee).toFixed(2);
                
            var rate = until.getNodeValue("rate", xml)/100;
            html += "<tr><td>" + until.getNodeValue("trans_id", xml) + "</td>";
            html += "<td>" + until.getNodeValue("short_name", xml) + "</td>";
            html += "<td>" + price + "</td>";
            html += "<td>" + res + "</td>";
            html += "<td>" + trade_date + "</td>";
            html += "<td>" + fact_money + "</td>";
            html += "<td>" + succdate + "</td>";
			html += "<td>" +  notify_time  + "</td>";
			var pay_mode = until.getNodeValue("pay_mode", xml);
            if(pay_mode == 1){
                pay_mode = "微信码支付";
            } else if(pay_mode == 0){
                pay_mode = "wap方式";
            } else{
                pay_mode = "app";
            }
			html += "<td>" +  pay_mode  + "</td>";
            html += "<td>" + rate + "‰" + "</td>";
        	html += "<td>" + fee + "</td></tr>";
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
function getUrlVars(){
	var vars = [], hash;
	var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	for (var i = 0; i < hashes.length; i++) {
		hash = hashes[i].split('=');
		vars.push(hash[0]);
		vars[hash[0]] = hash[1];
	}
	return vars;
}