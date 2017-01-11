function addCountQrcode(uid){
	var qrcodeNumber=prompt("��������","");
	if(qrcodeNumber==null){
		return;
	}else if(qrcodeNumber==""||qrcodeNumber==undefined||qrcodeNumber=="undefined"||isNaN(qrcodeNumber)){
		alert("��������ȷ�Ķ��");
		return;
	}
	$.ajax({
		url: '/cgi-bin/qr_incre_number.cgi',
		type: 'POST',  /*ѡȡ����*/
		dataType: 'html',
		data: {server_no:"300013",uid:uid,number:qrcodeNumber}, /*��������*/
		success:function(xml){  /*������ͳɹ�����ʾ*/
			var retcode = $(xml).find("errorcode").text();
			var retmsg = $(xml).find("errormessage").text();
			switch(retcode){
				case "0000":
					alert("�����ӳɹ���");
					break;
				default :
					alert(retmsg);
					break;
			}
		}                        
	})
}

/*����еĵ���¼�*/
function trClick(tdValue) {
	$.ajax({
		url: '/cgi-bin/query_cmer_detail.cgi',  /*Ҫ������ҳ����ַ*/
		type: 'POST',  /*ѡȡ����*/
		dataType: 'html',
		data: {uid:tdValue}, /*��������*/
		success:function(xml){  /*������ͳɹ�����ʾ*/
			//alert(xml);
			window.sessionStorage.setItem("shopxml", xml);
			window.location.href="../html/shopdetals.html";
			
		}                        
	})
}
/*�����ά����*/
function allocationQrcode(){
	
}


$(function() {

    /*ҳ�������ִ�е�һ������*/
    $.ajax({
        url: '/cgi-bin/query_cmer_list.cgi',  /*Ҫ������ҳ����ַ*/
        type: 'POST',  /*ѡȡ����*/
        dataType: 'html',
        data: {offset:"0",limit:"8"}, /*��������*/
        success:function(data){  /*������ͳɹ�����ʾ*/
            //��console.log(data);
            var errorcode = $(data).find("errorcode").text(); //ȡ�ı�
            var errormessage = $(data).find("errormessage").text(); //ȡ�ı�
            var total = $(data).find("total").text();
            
            /*������ҳ��*/
            totalPage = (total%8)==0?(total/8):(parseInt(total/8)+1);    
            $(".tcdPageCode").createPage({
                pageCount:totalPage,
                current:1,
            });

            //alert(typeof(value))
            if(errorcode == "0000"){
                //��console.log("message")
                var html = "";
                $(data).find('record').each(function() {                    
                    /*�����ݰ󶨵������*/
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
						state = "δ���";	
					}else if(state==2||state=="2"){
						state = "��˲�ͨ��";	
					}else if(state==3||state=="3"){
						state = "���ͨ��";	
					}else if(state==4||state=="4"){
						state = "ע��ʧ��";	
					}else if(state==5||state=="5"){
						state = "ע��ɹ�";	
					}
					html += "<td>" + state + "</td>";
					html += "<td>" + "<span class=\"checkdetail\" onclick=\"trClick("+$(this).find("uid").text()+");\">�鿴����"+ "</span></td>";
                    html += "<td>" + "<span class=\"qcode\" onclick=\"addCountQrcode("+$(this).find("uid").text()+")\">�����ά��" + "</span></td></tr>";
                    //alert($(this).find("rate").text())
                });
				
				window.sessionStorage.setItem("uid", $(this).find("uid").text());
                $("#tBody").html(html);
                
            }else{
                alert(errormessage);
            }            
        },
        error:function(){   /*����ʧ�ܵ����*/
            alert("�Բ���,����ʧ��");
        }                        
    })/*��һ������*/


    /*��ҳ�첽����*/
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
                url: '/cgi-bin/query_cmer_list.cgi',  /*Ҫ������ҳ����ַ*/
                type: 'POST',  /*ѡȡ����*/
                dataType: 'html',
                data: data, /*��������*/
                success:function(data){  /*������ͳɹ�����ʾ*/
                    //alert(data);
					//console.log(data);
                    var errorcode = $(data).find("errorcode").text(); //ȡ�ı�
                    var errormessage = $(data).find("errormessage").text(); //ȡ�ı�
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
								state = "δ���";	
							}else if(state==2||state=="2"){
								state = "��˲�ͨ��";	
							}else if(state==3||state=="3"){
								state = "���ͨ��";	
							}else if(state==4||state=="4"){
								state = "ע��ʧ��";	
							}else if(state==5||state=="5"){
								state = "ע��ɹ�";	
							}
							html += "<td>" + state + "</td>";
							html += "<td>" + "<span class=\"checkdetail\" onclick=\"trClick("+$(this).find("uid").text()+");\">�鿴����"+ "</span></td>";
                    		html += "<td>" + "<span class=\"qcode\" onclick=\"addCountQrcode("+$(this).find("uid").text()+")\">�����ά��" + "</span></td></tr>";
                        });
                       
                        $("#tBody").html(html);
                    }else{
                        alert(errormessage);
                    }                                     
                },
                error:function(){   /*����ʧ�ܵ����*/
                    alert("�Բ���,����ʧ��");
                }                        
            })
        }
    });/*�ڶ�������*/

	
    /*����������,��ѯ����*/
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
            url: '/cgi-bin/query_cmer_list.cgi',  /*Ҫ������ҳ����ַ*/
            type: 'POST',  /*ѡȡ����*/
            dataType: 'html',
            data: data1, /*��������*/
            success:function(data){  /*������ͳɹ�����ʾ*/
                //alert(data);
                var errorcode = $(data).find("errorcode").text(); //ȡ�ı�
                var errormessage = $(data).find("errormessage").text(); //ȡ�ı�
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
							state = "δ���";	
						}else if(state==2||state=="2"){
							state = "��˲�ͨ��";	
						}else if(state==3||state=="3"){
							state = "���ͨ��";	
						}else if(state==4||state=="4"){
							state = "ע��ʧ��";	
						}else if(state==5||state=="5"){
							state = "ע��ɹ�";	
						}
						html += "<td>" + state + "</td>";
						html += "<td>" + "<span class=\"checkdetail\" onclick=\"trClick("+$(this).find("uid").text()+");\">�鿴����"+ "</span></td>";
                    html += "<td>" + "<span class=\"qcode\" onclick=\"addCountQrcode("+$(this).find("uid").text()+")\">�����ά��" + "</span></td></tr>";
                    });
                   
                    $("#tBody").html(html);
                }else{
                    alert(errormessage);
                }            
            },
            error:function(){   /*����ʧ�ܵ����*/
                alert("�Բ���,����ʧ��");
            }                        
        })
        
        
    });

});