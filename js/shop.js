function addCountQrcode(uid){
	var qrcodeNumber=prompt("请输入额度","");
	if(qrcodeNumber==null){
		return;
	}else if(qrcodeNumber==""||qrcodeNumber==undefined||qrcodeNumber=="undefined"||isNaN(qrcodeNumber)){
		alert("请输入正确的额度");
		return;
	}
	$.ajax({
		url: '/cgi-bin/qr_incre_number.cgi',
		type: 'POST',  /*选取类型*/
		dataType: 'html',
		data: {server_no:"300013",uid:uid,number:qrcodeNumber}, /*传递数据*/
		success:function(xml){  /*如果发送成功就提示*/
			var retcode = $(xml).find("errorcode").text();
			var retmsg = $(xml).find("errormessage").text();
			switch(retcode){
				case "0000":
					alert("额度添加成功！");
					break;
				default :
					alert(retmsg);
					break;
			}
		}                        
	})
}

/*添加行的点击事件*/
function trClick(tdValue) {
	$.ajax({
		url: '/cgi-bin/query_cmer_detail.cgi',  /*要交互的页面网址*/
		type: 'POST',  /*选取类型*/
		dataType: 'html',
		data: {uid:tdValue}, /*传递数据*/
		success:function(xml){  /*如果发送成功就提示*/
			//alert(xml);
			window.sessionStorage.setItem("shopxml", xml);
			window.location.href="../html/shopdetals.html";
			
		}                        
	})
}
/*分配二维码额度*/
function allocationQrcode(){
	
}


$(function() {

    /*页面加载完执行第一次请求*/
    $.ajax({
        url: '/cgi-bin/query_cmer_list.cgi',  /*要交互的页面网址*/
        type: 'POST',  /*选取类型*/
        dataType: 'html',
        data: {offset:"0",limit:"8"}, /*传递数据*/
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
                    /*把数据绑定到表格上*/
                    var aging = $(this).find("aging").text();
                   	if(aging == "1"){
                   		aging = "T + 0"
                   	}else if(aging == "2"){
                   		aging = "T + 1"
                   	}
                    html += "<tr><td>" + $(this).find("uid").text() + "</td>";
                    html += "<td>" + $(this).find("short_name").text() + "</td>";
                    html += "<td>" + $(this).find("contact_name").text() + "</td>";
                    html += "<td>" + $(this).find("contact_phone").text() + "</td>";
                    html += "<td>" + aging + "</td>";
					html += "<td>" + $(this).find("qrcode_total_num").text() + "</td>";
					html += "<td>" + $(this).find("qrcode_left_num").text() + "</td>";
					var state = $(this).find("state").text();
					if(state==1||state=="1"){
						state = "未审核";	
					}else if(state==2||state=="2"){
						state = "审核不通过";	
					}else if(state==3||state=="3"){
						state = "审核通过";	
					}else if(state==4||state=="4"){
						state = "注册失败";	
					}else if(state==5||state=="5"){
						state = "注册成功";	
					}
					html += "<td>" + state + "</td>";
					html += "<td>" + "<span class=\"checkdetail\" onclick=\"trClick("+$(this).find("uid").text()+");\">查看详情"+ "</span></td>";
                    html += "<td>" + "<span class=\"qcode\" onclick=\"addCountQrcode("+$(this).find("uid").text()+")\">分配二维码" + "</span></td></tr>";
                    //alert($(this).find("rate").text())
                });
				
				window.sessionStorage.setItem("uid", $(this).find("uid").text());
                $("#tBody").html(html);
                
            }else{
                alert(errormessage);
            }            
        },
        error:function(){   /*发送失败的情况*/
            alert("对不起,请求失败");
        }                        
    })/*第一次请求*/


    /*换页异步请求*/
    $(".tcdPageCode").createPage({
        backFn:function(p){
            //alert(p);
			
            window.sessionStorage.setItem("pageshop", p);
            pageshop = (window.sessionStorage.getItem("pageshop") - 1)*8;
            var key = window.sessionStorage.getItem("key1");			
            var data = {offset:pageshop,limit:"8"};
			var key2 = $("#key").val();
			if(key2==""){
				window.sessionStorage.removeItem("key1");
			}else{
				key = {key:key}
                data = $.extend(data, key)
			}
			//console.log(data);
            $.ajax({
                url: '/cgi-bin/query_cmer_list.cgi',  /*要交互的页面网址*/
                type: 'POST',  /*选取类型*/
                dataType: 'html',
                data: data, /*传递数据*/
                success:function(data){  /*如果发送成功就提示*/
                    //alert(data);
					//console.log(data);
                    var errorcode = $(data).find("errorcode").text(); //取文本
                    var errormessage = $(data).find("errormessage").text(); //取文本
                    //alert(typeof(value))
                    if(errorcode == "0000"){
                        //alert("message")
                        var html = "";
                        $(data).find('record').each(function() {
                            html += "<tr><td>" + $(this).find("uid").text() + "</td>";
		                    html += "<td>" + $(this).find("short_name").text() + "</td>";
		                    html += "<td>" + $(this).find("contact_name").text() + "</td>";
		                    html += "<td>" + $(this).find("contact_phone").text() + "</td>";
							var aging = $(this).find("aging").text();
							if(aging == "1"){
								aging = "T + 0"
							}else if(aging == "2"){
								aging = "T + 1"
							}
		                    html += "<td>" + aging + "</td>";
							html += "<td>" + $(this).find("qrcode_total_num").text() + "</td>";
							html += "<td>" + $(this).find("qrcode_left_num").text() + "</td>";
							var state = $(this).find("state").text();
							if(state==1||state=="1"){
								state = "未审核";	
							}else if(state==2||state=="2"){
								state = "审核不通过";	
							}else if(state==3||state=="3"){
								state = "审核通过";	
							}else if(state==4||state=="4"){
								state = "注册失败";	
							}else if(state==5||state=="5"){
								state = "注册成功";	
							}
							html += "<td>" + state + "</td>";
							html += "<td>" + "<span class=\"checkdetail\" onclick=\"trClick("+$(this).find("uid").text()+");\">查看详情"+ "</span></td>";
                    		html += "<td>" + "<span class=\"qcode\" onclick=\"addCountQrcode("+$(this).find("uid").text()+")\">分配二维码" + "</span></td></tr>";
                        });
                       
                        $("#tBody").html(html);
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

	
    /*第三次请求,查询功能*/
    $("#shopcheck").click(function(event) {
		
		var key = $("#key").val();
		var data1 = {offset:"0",limit:"8"};
		if(key){
			var a = {key:key};
            data1 = $.extend(data1, a);
			window.sessionStorage.setItem("key1", key);
		}else{
			window.sessionStorage.setItem("key1", null);
		}
        $.ajax({
            url: '/cgi-bin/query_cmer_list.cgi',  /*要交互的页面网址*/
            type: 'POST',  /*选取类型*/
            dataType: 'html',
            data: data1, /*传递数据*/
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
                        html += "<tr><td>" + $(this).find("uid").text() + "</td>";
	                    html += "<td>" + $(this).find("short_name").text() + "</td>";
	                    html += "<td>" + $(this).find("contact_name").text() + "</td>";
	                    html += "<td>" + $(this).find("contact_phone").text() + "</td>";
						var aging = $(this).find("aging").text();
						if(aging == "1"){
							aging = "T + 0"
						}else if(aging == "2"){
							aging = "T + 1"
						}
	                    html += "<td>" + aging + "</td>";
						html += "<td>" + $(this).find("qrcode_total_num").text() + "</td>";
						html += "<td>" + $(this).find("qrcode_left_num").text() + "</td>";
						var state = $(this).find("state").text();
						if(state==1||state=="1"){
							state = "未审核";	
						}else if(state==2||state=="2"){
							state = "审核不通过";	
						}else if(state==3||state=="3"){
							state = "审核通过";	
						}else if(state==4||state=="4"){
							state = "注册失败";	
						}else if(state==5||state=="5"){
							state = "注册成功";	
						}
						html += "<td>" + state + "</td>";
						html += "<td>" + "<span class=\"checkdetail\" onclick=\"trClick("+$(this).find("uid").text()+");\">查看详情"+ "</span></td>";
                    html += "<td>" + "<span class=\"qcode\" onclick=\"addCountQrcode("+$(this).find("uid").text()+")\">分配二维码" + "</span></td></tr>";
                    });
                   
                    $("#tBody").html(html);
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