var ShopinfoWork = {
	init : function (){
		$(".closeWrap").click(function(event) {
			window.history.back(-1);
		});
		findDetail();
		$(".nav ul li:first-child").click(function(event) {
			$(this).addClass('color').siblings().removeClass('color');
			$("#first").show().siblings().hide();
		});
		$(".nav ul li:nth-child(2)").click(function(event) {
			$(this).addClass('color').siblings().removeClass('color');
			$("#second").show().siblings().hide();
		});
		$(".nav ul li:last-child").click(function(event) {
			$(this).addClass('color').siblings().removeClass('color');
			$("#third").show().siblings().hide();
		});
	}
}
function findDetail() {
	var params = [
				{ name : 'server_no',value :"300006"}
			 ];
	BaseRequest.resquest(params,"/cgi-bin/query_cmer_detail.cgi",requestFindDetailResult);
}
function requestFindDetailResult(xml){
	console.log(xml)
	var errorcode = until.getNodeValue("errorcode", xml); //返回码
	var errormessage = until.getNodeValue("errormessage", xml); //返回信息
	switch(errorcode){
		case "0000":	
			$("#name").val(until.getNodeValue("name", xml));
			$("#short_name").val(until.getNodeValue("short_name", xml));
			var cmer_level = until.getNodeValue("cmer_level", xml);
			switch (cmer_level){ 
				case "1" : 
					cmer_level="一级" 
					break;
				case "2" : 
					cmer_level="二级"; 
					break;
				case "3" : 
					cmer_level="三级" 
					break;
				case "4" : 
					cmer_level="四级" 
					break;
				case "5" : 
					cmer_level="五级" 
					break;
				case "6" : 
					cmer_level="六级" 
					break;
				default : 
					cmer_level="无级" 
					break;
			}
			document.getElementById("cmer_level").value=cmer_level;
			document.getElementById("reg_address").value=until.getNodeValue("reg_address", xml);
			document.getElementById("address").value=until.getNodeValue("address", xml);
			document.getElementById("business_license").value=until.getNodeValue("business_license", xml);
			var pm_id = until.getNodeValue("pm_id", xml);
			if(pm_id == 1){
				pm_id = "微信码支付";
			} else if(pm_id == 0){
				pm_id = "wap方式";
			} else{
				pm_id = "app";
			}
			document.getElementById("pm_id").value=pm_id;
			var rate = (until.getNodeValue("rate", xml))/100
			rate = parseFloat(rate).toFixed(2) + " ‰";
			document.getElementById("rate").value=rate;
			document.getElementById("contact_name").value=until.getNodeValue("contact_name", xml);
			document.getElementById("contact_phone").value=until.getNodeValue("contact_phone", xml);
			document.getElementById("contac_tmail").value=until.getNodeValue("contac_tmail", xml);
		
			var card_type = until.getNodeValue("card_type", xml);
			if(card_type==1){
				card_type = "个人";
			}else{
				card_type = "企业";
			}
			document.getElementById("card_type").value=card_type;
			document.getElementById("bank_name").value=until.getNodeValue("bank_name", xml);
			document.getElementById("provice_name").value=until.getNodeValue("provice_name", xml);
			document.getElementById("city_name").value=until.getNodeValue("city_name", xml);
			document.getElementById("card_no").value=until.getNodeValue("card_no", xml);
			document.getElementById("card_name").value=until.getNodeValue("card_name", xml);
			document.getElementById("id_card").value=until.getNodeValue("id_card", xml);
			document.getElementById("mobile").value=until.getNodeValue("mobile", xml);
			break;
		default :
			alert(errormessage);
			break;
	}
}