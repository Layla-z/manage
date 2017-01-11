var QueryOrder = {            
	/*账单*/
    queryOrder : function ()
    {	
	    var params = [{ name : 'server_no',value : "100001"},
	                  { name : 'type',value : "1"}];
         //request.sendQuery.call(this, '/cgi-bin/queryOrder.cgi',params,QueryOrder.queryorderhandle);
        request.sendUpdate.call(this, '/cgi-bin/query_order_total_amount.cgi',params,QueryOrder.queryorderhandle);
    },
    queryorderhandle : function(xml)
    {
    	//console.log(xml)
        var retcode = until.getNodeValue("errorcode", xml); //返回码
        var retmsg = until.getNodeValue("errormessage", xml); //返回信息
        
        switch(retcode)
        {
            case "0000":
			   var total_num = until.getNodeValue("total_num", xml);
			   var total_amount = until.getNodeValue("total_amount", xml);
			   total_amount = parseFloat((total_amount)/100).toFixed(2);
			   $('total_num').innerHTML = total_num;
			   $('total_amount').innerHTML = total_amount;
               break;
            case "1001":
                alert(retmsg);
               break;
            default :
                alert(retmsg);
              break;
        }
    },

	queryList : function ()
    {	
    	//var amount  = $("amount").value;
	    var params = [{ name : 'server_no',value : "100001"},
	    			  { name : 'limit',value : "100"},
	                  { name : 'offset',value : "0"}];
         //request.sendQuery.call(this, '/cgi-bin/query_order_list.cgi',params,QueryOrder.querylisthandle);
        request.sendUpdate.call(this, '/cgi-bin/query_order_list.cgi',params,QueryOrder.querylisthandle);
    },
    queryListMore : function ()
    {	
    	QueryOrder.limit = QueryOrder.limit+5;
    	console.log(limit)
	    var params = [{ name : 'server_no',value : "100001"},
	    			  { name : 'limit',value : limit.toString()},
	                  { name : 'offset',value : "0"}];
         //request.sendQuery.call(this, '/cgi-bin/query_order_list.cgi',params,QueryOrder.querylisthandle);
        request.sendUpdate.call(this, '/cgi-bin/query_order_list.cgi',params,QueryOrder.querylisthandle);
    },
    querylisthandle : function(xml)
    {
    	console.log(xml)
        var retcode = until.getNodeValue("errorcode", xml); //返回码
        var retmsg = until.getNodeValue("errormessage", xml); //返回信息
        switch(retcode)
        {
            case "0000":
				QueryOrder.showList(xml);
               break;
            case "1001":
                alert(retmsg);
               break;
            default :
                alert(retmsg);
              break;
        }
    },
    subStr : function(str)
    {
    	var s1 = str.substr(0,4),
	            s2 = str.substr(4,2),
	            s3 = str.substr(6,2),
	            s4 = str.substr(8,2),
	            s5 = str.substr(10,2),
	            s6 = str.substr(12,2),
	            s = s1 + "-" + s2 + "-"+ s3 + " "+ s4 + ":" + s5 + ":" + s6;
	        return s;
    },
    showList : function (xml) 
    {	
	    var listHTML = "";
        var ret_num = until.getNodeValue("ret_num", xml);
        var nodes = xml.getElementsByTagName("record");
        for (var i = 0; i < ret_num; i++) {
            var amount=until.getNodeValue("amount", nodes[i]);
		        amount = parseFloat((amount)/100).toFixed(2);
		    var trade_date=until.getNodeValue("trade_date", nodes[i]);
		    var trade_date = QueryOrder.subStr(trade_date);
		    var result=until.getNodeValue("result", nodes[i]);
            if(result == "1"){
                result = "交易成功";
            } else if(result == "2"){
                result = "失败";
            } else{
                result = "待支付";
            }
		    var trans_id=until.getNodeValue("trans_id", nodes[i]);
			listHTML += "<div class=\"uin\" id=\"uin\">" + "<div class=\"u\">";
            listHTML += "<span class=\"money\" id=\"money\">"+"+"+ amount + " ￥" + "<\/span>";
            listHTML += "<span class=\"date\" id=\"date\">" + trade_date + "<\/span>";
            listHTML += "<span class=\"result\" id=\"result\">" + result + "<\/span>";
            listHTML += "<span class=\"none\">" + trans_id + "<\/span>";
            listHTML += "<img class=\"img\" id=\"img\" src=\"../images/jian.png\"/>";
            listHTML += "<\/div>" + "<\/div>";
        }
        
        $('body').innerHTML = listHTML;
    },

init : function()
	   {
		   window.onload = function(){
		   	alert("llll")
		   		QueryOrder.queryOrder();
		   		//QueryOrder.queryList(); 
		   }
	    }
}
