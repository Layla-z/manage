// JavaScript Document
$(document).ready(function(){
	var xsuin = $.cookie('xsuin');
	if(xsuin==""){
		xsuin = $.cookie('uno');
	}
	$(".user2").html(xsuin);	
	
	$(".title").click(function(event){
		$(this).toggleClass("titleclick");
	});
	$(".title1").click(function(event){
		$(".titleone").slideToggle();	
	});
	$(".title2").click(function(event){
		$(".titletwo").slideToggle();	
	});
	$(".title3").click(function(event){
		$(".titlethree").slideToggle();	
	})
	;$(".title4").click(function(event){
		$(".titlefour").slideToggle();	
			console.log("�����");
	});
	

    $(".out").click(function(event) {  
    	
    	window.location.href="http://www.transt.cn/";
    	
    	//console.log($.cookie('xsuin'));
    	
    	var xsuin = $.cookie('xsuin');
        $.ajax({
            url: '/cgi-bin/user_logout.cgi',  /*Ҫ������ҳ����ַ*/
            type: 'POST',  /*ѡȡ����*/
            dataType: 'html',
            data: {uin:xsuin}, /*��������*/
            success:function(data){  /*������ͳɹ�����ʾ*/
                //alert(data);                        
            },
//          error:function(){   /*����ʧ�ܵ����*/
//              alert("�Բ���,����ʧ��");
//          }
        })
    });  
});