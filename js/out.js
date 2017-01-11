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
			console.log("点击了");
	});
	

    $(".out").click(function(event) {  
    	
    	window.location.href="http://www.transt.cn/";
    	
    	//console.log($.cookie('xsuin'));
    	
    	var xsuin = $.cookie('xsuin');
        $.ajax({
            url: '/cgi-bin/user_logout.cgi',  /*要交互的页面网址*/
            type: 'POST',  /*选取类型*/
            dataType: 'html',
            data: {uin:xsuin}, /*传递数据*/
            success:function(data){  /*如果发送成功就提示*/
                //alert(data);                        
            },
//          error:function(){   /*发送失败的情况*/
//              alert("对不起,请求失败");
//          }
        })
    });  
});