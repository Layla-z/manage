$(document).ready(function(){
	//7һ���̻� 8 �����̻� 9�����̻� 10�ļ��̻� 11�弶�̻� 12 �����̻� 20�����û� 21 �����û� 22 �ͷ��û�
    var user_type = window.sessionStorage.getItem("user_type");
    if(user_type=="20"){
    	$(".user_type").show();
    	$(".user_type20").hide();
    }else{
    	$(".user_type").hide();
    	$(".user_type20").show();
    }
	if(user_type!="7"){
		//document.getElementById("user_upgrade_type1").style.display="none";
		//document.getElementById("user_upgrade_type2").style.display="none";
		$("#user_upgrade_type1").hide();
		$("#user_upgrade_type2").hide();
    }
});