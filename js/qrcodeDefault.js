var QrcodeDefault = {
	init:function(){
		var invitation_code = getUrlVars()["invitation_code"];
		var qrcode_id_encry = getUrlVars()["qrcode_id"];
		var privateKey = "asdfipkg123";
		var signature = hex_md5("{20000009}|{"+invitation_code+"}|{"+qrcode_id_encry+"}|{"+privateKey+"}");
		signature = signature.toUpperCase();
		qrcode_id_encry = encodeURIComponent(qrcode_id_encry);
		invitation_code = encodeURIComponent(invitation_code);
		signature = signature.toUpperCase();
		var params = [
					{ name : 'syscode',value : "20000009"},
					{ name : 'invitation_code',value : invitation_code},
					{ name : 'qrcode_id',value : qrcode_id_encry},
					{ name : 'signature',value : signature}
				 ];
		BaseRequest.resquest(params,"/cgi-bin/qr_cmer_pay.cgi",cmerPayResult);
	}
}
//qr_cmer_pay.cgi∑µªÿµƒ≤Œ ˝
function cmerPayResult(xml){
	var retcode = until.getNodeValue("errorcode", xml); //∑µªÿ¬Î
	var retmsg = until.getNodeValue("errormessage", xml); //∑µªÿ–≈œ¢
	switch(retcode){
		case "0000":
			var state = until.getNodeValue("state", xml);//◊¥Ã¨£∫1°¢¥˝…Û∫À2°¢…Û∫À ß∞‹3°¢…Û∫À≥…π¶°¢4°¢Œ¥◊¢≤·
			if(state==4||state=="4"){
				var invitation_code_plain = until.getNodeValue("invitation_code_plain", xml);//’À∫≈
				var qrcode_id_plain = until.getNodeValue("qrcode_id_plain", xml);//ºÚ≥∆
				location.href="/qrcode/html/register.html?invitation_code_plain="+invitation_code_plain+"&qrcode_id_plain="+qrcode_id_plain;
			}else if(state==1||state=="1"){
				//…Û∫À÷–
				location.href="/qrcode/html/waitren.html";
			}else if(state==2||state=="2"){
				//…Û∫À ß∞‹
				location.href="/qrcode/html/failren.html";
			}else if(state==3||state=="3"){
				//…Û∫À≥…π¶»•÷ß∏∂
				var account = until.getNodeValue("account", xml);//’À∫≈
				var short_name = until.getNodeValue("short_name", xml);//ºÚ≥∆
				var signature = until.getNodeValue("signature", xml);//«©√˚
				//alert("go pay.html"+short_name+"=="+account);
				location.href = "pay.html?shopName="+short_name+"&account="+account+"&signatureKey=asdfipkg123";
			}
			break;
		default :
			alert(retmsg);
			break;
	}
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