var Pay = {
	init:function(){
		var account = getUrlVars()["account"];
		document.getElementById("account").value=account;
		var shopName = getUrlVars()["shopName"];
		document.getElementById("shopName").innerHTML=$URL.decode(shopName);		
		document.getElementById("money").onkeydown = function(){
			var reg = /^[0-9]\d*(\.\d{0,1})?$|^[0]\.\d{0,1}$/g;
			var f = reg.test(document.getElementById("money").value);
			if(!f){
				document.getElementById("money").value="";
			}
		}
		document.getElementById("payButton").onclick = function(){
			payment();
		};
	}
}
//获取URL中的参数
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
function payment(){//金额是分单位
	document.getElementById("payButton").setAttribute("disabled","disabled");
	var signatureKey = getUrlVars()["signatureKey"];
	var md5Code = hex_md5("{20000009}|{"+document.getElementById("account").value+"}|{"+document.getElementById("money").value*100+"}|{1}|{"+signatureKey+"}");
	md5Code = md5Code.toUpperCase();
	var params = [
						{ name : 'server_no',value : "100001"},
						{ name : 'syscode',value : "20000009"},
						{ name : 'account',value : document.getElementById("account").value},
						{ name : 'amount',value : document.getElementById("money").value*100},
						{ name : 'aging',value : "1"},
						{ name : 'signature',value : md5Code},
					 ];
	BaseRequest.resquest(params,"/cgi-bin/wei_pay.cgi",requestPaymentResult);
}
function requestPaymentResult(xml){
	var retcode = until.getNodeValue("errorcode", xml); //返回码
	var retmsg = until.getNodeValue("errormessage", xml); //返回信息
	switch(retcode){
		case "0000":
			var qrcode_url = until.getNodeValue("qrcode_url", xml)
			createCode(qrcode_url);
			//隐藏标签和显示标签
			document.getElementById('show2').style.display="block";
			document.getElementById('show1').style.display="none";
			var money = document.getElementById("money").value;
			document.getElementById("amcount").innerHTML=money;
			break;
		default :
			var info = "";
			if(retcode==undefined||retcode=="880026"){
				info = "该商户不存在";
			}else if(retcode=="880034"){
				info = "数据异常";
			}else{
				info = retmsg;
			}
			alert(info);
			document.getElementById("payButton").removeAttribute("disabled");
			break;
	}
}
//生成支付二维码
var createCode = function(codeURL) {
	var qrcode = new QRCode(document.getElementById("tgCode"), {
		width : 200,//设置宽高
		height : 200
	});
	qrcode.makeCode(codeURL);
}
function todo (t) {
	 var reg = /^[1-9]\d*(\.\d{1,2})?$|^[0]\.\d{1,2}$/g;
	 var f = reg.test(t);
	 if(!f){
		 alert("对不起,只能保留两位小数");
	 }
}
