

$(function() {
	/*存储类型ID*/
	var findType;
    /*存储商户id*/
    var cmer_id;
    // $("#userName").append(cmer_id);
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

    

    /*添加行的点击事件*/
    function trClick() {
        $("#tBody tr").click(function(event) {
         
            var tdValue = $(this).children('td:eq(0)').text();
			
            $.ajax({
                url: '/cgi-bin/query_order.cgi',  /*要交互的页面网址*/
                type: 'POST',  /*选取类型*/
                dataType: 'html',
                async:true,
                data: {trans_id:tdValue}, /*传递数据*/
                success:function(xml){  /*如果发送成功就提示*/
                    //alert(xml);
                    window.sessionStorage.setItem("xml", xml);
                    window.location.href="../html/liudetails.html";
                    
                }                        
            })

        });
    }

	function zuoDay(){
	   var mydate = new Date();
	   var year = mydate.getFullYear();
	   var mouth = (mydate.getMonth()+1);
	   if(mouth<10){
	   	 mouth="0"+mouth;
	   }
	   var day = (mydate.getDate()-1);
	   if(day<10){
	   	 day="0"+day;
	   }
	   return year+"-"+mouth+"-"+day+" 00:00:00";
	}
		
	var yestime = zuoDay();
	console.log(yestime)
    /*页面加载完执行第一次请求*/
    $.ajax({
        url: '/cgi-bin/query_order_list.cgi',  /*要交互的页面网址*/
        type: 'POST',  /*选取类型*/
        dataType: 'html',
        async:true,
        data: {account:cmer_id,offset:"0",limit:"8"}, /*传递数据*/
        success:function(data){  /*如果发送成功就提示*/
            //、console.log(data);
            var errorcode = $(data).find("errorcode").text(); //取文本
            var errormessage = $(data).find("errormessage").text(); //取文本
            var total = $(data).find("total").text();
            
            /*计算总页数*/
            totalPage = (total%8)==0?(total/8):(parseInt(total/8)+1);    
            $(".tcdPageCode").createPage({
                pageCount:totalPage,
                current:1,
            });

            //alert(typeof(value))
            if(errorcode == "0000"){
                //、console.log("message")
                var html = "";
                $(data).find('record').each(function() {
                    var paytext = $(this).find("pay_mode").text();
                    //alert(typeof(paytext))
                    if(paytext == 1){
                        paytext = "微信码支付";
                    } else if(paytext == 0){
                        paytext = "wap方式";
                    } else{
                        paytext = "app";
                    }

                    /*把整数转化成两个小数点*/
                    var price = ($(this).find("amount").text()/100);
                    price = parseFloat(price).toFixed(2);
                    //alert(typeof(price))
                    var res = $(this).find("result").text();
                    if(res == "1"){
                        res = "成功";
                    } else if(res == "2"){
                        res = "失败";
                    } else{
                        res = "待支付";
                    }
					
					var rate = $(this).find("rate").text()/100;
					//alert(rate)
					var fee = ($(this).find("fee").text()/100);
                    fee = parseFloat(fee).toFixed(2);
                    var date = subStr($(this).find("trade_date").text());
                    
                    /*把数据绑定到表格上*/
                    html += "<tr><td>" + $(this).find("trans_id").text() + "</td>";
                    html += "<td>" + $(this).find("short_name").text() + "</td>";
                    html += "<td>" + paytext + "</td>";
                    html += "<td>" + price + "</td>";
                    html += "<td>" + res + "</td>";
                    html += "<td>" + rate + "‰" + "</td>";
                    html += "<td>" + fee + "</td>";
                    html += "<td>" + date + "</td></tr>";
                    //alert($(this).find("rate").text())
                });

                $("#tBody").html(html);

                /*点击表格行*/
                trClick();
                
            }else{
                alert(errormessage);
            }            
        },
        error:function(){   /*发送失败的情况*/
            alert("对不起,请求失败");
        }                        
    })/*第一次请求*/

	var totaldata = {server_no:"100001",type:"2"};
	$.ajax({
        url: '/cgi-bin/query_order_total_amount.cgi',  /*要交互的页面网址*/
        type: 'GET',  /*选取类型*/
        dataType: 'html',
        async:true,
        data: totaldata, /*传递数据*/
        success:function(data){  /*如果发送成功就提示*/
            console.log(data);
            var errorcode = $(data).find("errorcode").text(); //取文本
            var errormessage = $(data).find("errormessage").text(); //取文本
			//console.log(errorcode);
            if(errorcode == "0000"){
                var html = "";
                //$(data).find('root').each(function() {
                    var total_fee = ($(data).find("total_fee").text()/100);
                    total_fee = parseFloat(total_fee).toFixed(2);
                    /*把整数转化成两个小数点*/
                    var total_amount = ($(data).find("total_amount").text()/100);
                    total_amount = parseFloat(total_amount).toFixed(2);
                    //alert(typeof(price))					
					//console.log(total_num);					
					//console.log(total_amount);
                $("#total_fee").html(total_fee+"元");
                $("#total_amount").html(total_amount+"元");
            }else{
                alert(errormessage);
            }            
        },
        error:function(){   /*发送失败的情况*/
            alert("对不起,请求失败");
        }                        
    })

    /*换页异步请求*/
    $(".tcdPageCode").createPage({
        backFn:function(p){
            //alert(p);
            window.sessionStorage.setItem("page", p);
            page = (window.sessionStorage.getItem("page") - 1)*8;

            var paytype = window.sessionStorage.getItem("paytype");
            var startdate = window.sessionStorage.getItem("startdate");
            var enddate = window.sessionStorage.getItem("enddate");

            var data = {account:cmer_id,offset:page,limit:"8"}
            if (paytype&&paytype!="0"){
                paytype = {result:paytype}
                data = $.extend(data, paytype)
                //console.log(data)
            }
            if(startdate) {
                startdate = {trade_time_beg:startdate}
                data = $.extend(data, startdate)
                //console.log(data)
            }
            //console.log(data)
            if(enddate) {
                startdate = {trade_time_end:enddate}
                data = $.extend(data, startdate)     
            }
            //console.log(data)
            //var data = {account:cmer_id,offset:page,limit:"8",result:paytype,trade_time_beg:startdate,trade_time_end:enddate};
            //alert(page);
            $.ajax({
                url: '/cgi-bin/query_order_list.cgi',  /*要交互的页面网址*/
                type: 'POST',  /*选取类型*/
                dataType: 'html',
                data: data, 
                async:true,/*传递数据*/
                success:function(data){  /*如果发送成功就提示*/
                    //alert(data);
                    var errorcode = $(data).find("errorcode").text(); //取文本
                    var errormessage = $(data).find("errormessage").text(); //取文本
                    //alert(typeof(value))
                    if(errorcode == "0000"){
                        //alert("message")
                        var html = "";
                        $(data).find('record').each(function() {
                            var paytext = $(this).find("pay_mode").text();
                            //alert(typeof(paytext))
                            if(paytext == 1){
                                paytext = "微信码支付";
                            } else if(paytext == 0){
                                paytext = "wap方式";
                            } else{
                                paytext = "app";
                            }

                            var price = ($(this).find("amount").text())/100;
                            price = parseFloat(price).toFixed(2);
                            //alert(typeof(price))
                            var res = $(this).find("result").text();
                            if(res == "1"){
                                res = "成功";
                            } else if(res == "2"){
                                res = "失败";
                            } else{
                                res = "待支付";
                            }
							
							var rate = $(this).find("rate").text()/100;
							//alert(rate)
							var fee = ($(this).find("fee").text()/100);
		                    fee = parseFloat(fee).toFixed(2);
		                    
                            var date = subStr($(this).find("trade_date").text());
                            
                            html += "<tr><td>" + $(this).find("trans_id").text() + "</td>";
                            html += "<td>" + $(this).find("short_name").text() + "</td>";
                            html += "<td>" + paytext + "</td>";
                            html += "<td>" + price + "</td>";
                            html += "<td>" + res + "</td>";
                            html += "<td>" + rate + "‰" + "</td>";
                    		html += "<td>" + fee + "</td>";
                            html += "<td>" + date + "</td></tr>";
                        });
                       
                        $("#tBody").html(html);

                        trClick();

                    }else{
                        alert(errormessage);
                    }                                     
                },
                error:function(){   /*发送失败的情况*/
                    alert("对不起,请求失败");
                }                        
            })
        }
    });/*第二次请求*/

	/*判断查询流水号*/
	function isNum(str){
            var s = /^[0-9]*$/;
            return s.test(str);
    }
    $("#trans_id").keyup(function(event) {
    	var val = isNum($(this).val());
    //console.log(val)
    	if(val==false){
    		$("#trans_id").val("");
    		$("#trans_id").attr("placeholder","请输入数字");
    	}
        window.sessionStorage.removeItem("paytype");
    });

	
	/*查询条件*/
	payResult();
	
	function payResult() {
		var payValue = "0";
		$("#all").click(function(event){
			$(this).toggleClass('togcolor');
			$("#succ,#fail,#wait").removeClass('togcolor');
			payValue = $(this).attr("data-value");
			findTotalData(payValue);
			findType = payValue;
			//window.sessionStorage.setItem("payValue",payValue);
		});
		$("#succ").click(function(event){
			$(this).toggleClass('togcolor');
			$("#all,#fail,#wait").removeClass('togcolor');
			payValue = $(this).attr("data-value");
			findTotalData(payValue);
			findType = payValue;
			window.sessionStorage.setItem("payValue",payValue);
		});
		$("#fail").click(function(event){
			$(this).toggleClass('togcolor');
			$("#all,#succ,#wait").removeClass('togcolor');
			payValue = $(this).attr("data-value");
			findTotalData(payValue);
			findType = payValue;
			window.sessionStorage.setItem("payValue",payValue);
			//console.log(payValue);
		});
		$("#wait").click(function(event){
			$(this).toggleClass('togcolor');
			$("#all,#succ,#fail").removeClass('togcolor');
			payValue = $(this).attr("data-value");
			findTotalData(payValue);
			findType = payValue;
			window.sessionStorage.setItem("payValue",payValue);
			//console.log(payValue);
		});
		//console.log(payValue)
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
      
        if (!(beginString == null || beginString == '')  
                && !(endString == null || endString == '')) {  
            // alert(beginString instanceof String); //JavaScripy判断一个对象是否是String类型  
            // alert(typeof beginString); //typeof String 类型 返回的是 Object  
      
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
	
	dateCun();
/*	检查是否设置了日期*/
	function dateCun() {
		var startdate = window.sessionStorage.getItem("startdate");
		var enddate = window.sessionStorage.getItem("enddate");
		if(startdate){
			startdate = startdate.replace(" 00:00:00", "");
			$(".startdate").val(startdate);
		}
		if(enddate){
			enddate = enddate.replace(" 59:59:59", "");
			$(".enddate").val(enddate);
		}
	}
	
    /*第三次请求,查询功能*/
    $("#check").click(function(event) {
		
		var dresult = validateTimePeriod(startdate = $(".startdate"),enddate = $(".enddate"));        //验证是否起始时间小于等于截至时间  
        if(dresult!=true){  
            alert("请确保起始时间小于截至时间");  
            return false;  
        }
            
        var paytype = findType;
            startdate = $(".startdate").val() + " 00:00:00",
            enddate = $(".enddate").val() + " 59:59:59",
            trans_id = $("#trans_id").val();
        var data = {trans_id:trans_id,limit:"8"};
        if(paytype != "0") {
        	data = {trans_id:trans_id,result:paytype,limit:"8"};
        }
        window.sessionStorage.setItem("paytype", paytype);
        //console.log(data)

        if(startdate != " 00:00:00") {
            if(startdate != null) {
                startdate = {trade_time_beg:startdate};
                data = $.extend(data, startdate);
				 window.sessionStorage.setItem("startdate", startdate);
         //      console.log(data)
            }
        }else{
			startdate = null;
		}
        if(enddate != " 59:59:59") {
            if(enddate != null) {
                startdate = {trade_time_end:enddate};
                data = $.extend(data, startdate);
				 window.sessionStorage.setItem("enddate", enddate);
                //console.log(data) 
            }
        }else{
			enddate = null;
		}
		findTotalData(paytype,startdate,enddate);
        $.ajax({
            url: '/cgi-bin/query_order_list.cgi',  /*要交互的页面网址*/
            type: 'POST',  /*选取类型*/
            dataType: 'html',
            data: data, /*传递数据*/
            async:true,
            success:function(data){  /*如果发送成功就提示*/
                //alert(data);
                var errorcode = $(data).find("errorcode").text(); //取文本
                var errormessage = $(data).find("errormessage").text(); //取文本
                var total = $(data).find("total").text();

                total = (total%8)==0?(total/8):(parseInt(total/8)+1);    
                $(".tcdPageCode").createPage({
                    pageCount:total,
                    current:1,
                });
                //alert(typeof(value))
                if(errorcode == "0000"){
                    //alert("message")
                    var html = "";
                    $(data).find('record').each(function() {
                        var paytext = $(this).find("pay_mode").text();
                        //alert(typeof(paytext))
                        if(paytext == 1){
                            paytext = "微信码支付";
                        } else if(paytext == 0){
                            paytext = "wap方式";
                        } else{
                            paytext = "app";
                        }

                        var price = $(this).find("amount").text()/100;
                        price = parseFloat(price).toFixed(2);
                        //alert(typeof(price))
                        var res = $(this).find("result").text();
                        if(res == "1"){
                            res = "成功";
                        } else if(res == "2"){
                            res = "失败";
                        } else{
                            res = "待支付";
                        }
                        
						var rate = $(this).find("rate").text()/100;
						//alert(rate)
						var fee = ($(this).find("fee").text()/100);
	                    fee = parseFloat(fee).toFixed(2);
	                    
                        var date = subStr($(this).find("trade_date").text());
                        
                        html += "<tr><td>" + $(this).find("trans_id").text() + "</td>";
                        html += "<td>" + $(this).find("short_name").text() + "</td>";
                        html += "<td>" + paytext + "</td>";
                        html += "<td>" + price + "</td>";
                        html += "<td>" + res + "</td>";
                        html += "<td>" + rate + "‰" + "</td>";
                    	html += "<td>" + fee + "</td>";
                        html += "<td>" + date + "</td></tr>";
                    });

                    $("#tBody").html(html);

                    trClick();
                }else{
                    alert(errormessage);
                }            
            },
            error:function(){   /*发送失败的情况*/
                alert("对不起,请求失败");
            }                        
        })
        
        
    });

});
function findTotalData(result,begDate,endDate){
	var totaldata = {server_no:"100001",type:"2"};
	if(result!=null&&result!=""&&result!=0){
		var result1 = {result:result};
        data = $.extend(totaldata, result1);  
	}
	/*if(begDate!=null&&begDate!=""){
		totaldata += ",trade_time_beg:"+begDate+"";
	}*/
	if(endDate!=null&&endDate!=""){
		var result1 = {trade_time_end:endDate};
        data = $.extend(totaldata, result1); 
	}
	/*var totaldata = {server_no:"100001",type:"2",result:result};
	if(result==0){
		totaldata = {server_no:"100001",type:"2"};
	}*/
	console.log(totaldata);
	$.ajax({
		url: '/cgi-bin/query_order_total_amount.cgi',  /*要交互的页面网址*/
		type: 'GET',  /*选取类型*/
		dataType: 'html',
		async:true,
		data: totaldata, /*传递数据*/
		success:function(data){  /*如果发送成功就提示*/
			console.log(data);
			var errorcode = $(data).find("errorcode").text(); //取文本
			var errormessage = $(data).find("errormessage").text(); //取文本
			//console.log(errorcode);
			if(errorcode == "0000"){
				var html = "";
				//$(data).find('root').each(function() {
					var total_fee = ($(data).find("total_fee").text()/100);
					total_fee = parseFloat(total_fee).toFixed(2);
					/*把整数转化成两个小数点*/
					var total_amount = ($(data).find("total_amount").text()/100);
					total_amount = parseFloat(total_amount).toFixed(2);
					//alert(typeof(price))					
					//console.log(total_num);					
					//console.log(total_amount);
				$("#total_fee").html(total_fee+"元");
				$("#total_amount").html(total_amount+"元");
			}else{
				alert(errormessage);
			}            
		},
		error:function(){   /*发送失败的情况*/
			alert("对不起,请求失败");
		}                        
	})	
}