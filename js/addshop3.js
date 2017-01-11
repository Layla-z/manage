var AddShop = {
    addShopRequest : function (){
    	var card_type = document.getElementById('card_type').value;
        var bank_name = document.getElementById('bank_name').value;
        var card_name = document.getElementById('card_name').value;
        var card_no = document.getElementById('card_no').value;
        var mobile = document.getElementById('mobile').value;
        var id_card = document.getElementById('id_card').value;
		var provice_name = "";
		var obj = document.getElementById("province_addr");
        for (i=0;i<obj.length;i++) {//下拉框的长度就是它的选项数.
            if (obj[i].selected== true ) {
            	provice_name=obj[i].text;//获取当前选择项的 值 .
			}
		}
		var city_name = "";
		var objcity = document.getElementById("city_addr");
		for (i=0;i<objcity.length;i++) {//下拉框的长度就是它的选项数.
            if (objcity[i].selected== true ) {
            	city_name=objcity[i].text;//获取当前选择项的 值 .
			}
		}
        
    	//var amount  = $("amount").value;
    	var name = window.sessionStorage.getItem("name");
        var short_name = window.sessionStorage.getItem("short_name");
        var reg_address = window.sessionStorage.getItem("reg_address");
        var pm_id = window.sessionStorage.getItem("pm_id");
        var address = window.sessionStorage.getItem("address");
        var business_license = window.sessionStorage.getItem("business_license");
        var s_province = window.sessionStorage.getItem("s_province");
        var s_city = window.sessionStorage.getItem("s_city");
        var s_county = window.sessionStorage.getItem("s_county");
        var rate = window.sessionStorage.getItem("rate");


        var contact_name = window.sessionStorage.getItem("contact_name");
        var contact_phone = window.sessionStorage.getItem("contact_phone");
        var contac_tmail = window.sessionStorage.getItem("contac_tmail");
	    var params = [ 	
						{ name : 'card_type',value : card_type},
					    { name : 'bank_name',value : bank_name},
					    { name : 'card_name',value : card_name},
					    { name : 'card_no',value : card_no},
					    { name : 'id_card',value : id_card},
					    { name : 'provice_name',value : provice_name},
					    { name : 'city_name',value : city_name},
					    { name : 'mobile',value : mobile},
	    
	    				{ name : 'name',value : name},
	    			  { name : 'short_name',value : short_name},
	    			  { name : 'reg_address',value : reg_address},
	    			  { name : 'pm_id',value : pm_id},
	    			  { name : 'address',value : address},
	    			  { name : 'business_license',value : business_license},
	    			  { name : 's_province',value : s_province},
	    			  { name : 's_city',value : s_city},
	    			  { name : 's_county',value : s_county},
	    			  { name : 'rate',value : rate},
	    			  { name : 'contact_name',value : contact_name},
	    			  { name : 'contact_phone',value : contact_phone},
	    			  { name : 'contac_tmail',value : contac_tmail}];
		 
         request.sendQuery.call(this, '/cgi-bin/add_cmer.cgi',params,AddShop.addshophandle);
		
        //request.sendUpdate.call(this, '/cgi-bin/add_cmer.cgi',params,AddShop.addshophandle);
    },
    addshophandle : function(xml){
        var retcode = until.getNodeValue("errorcode", xml); //返回码
        var retmsg = until.getNodeValue("errormessage", xml); //返回信息
        switch(retcode){
            case "0000":
				//清除session
				window.sessionStorage.removeItem("name");
				window.sessionStorage.removeItem("reg_address");
				window.sessionStorage.removeItem("address");
				window.sessionStorage.removeItem("business_license");
				window.sessionStorage.removeItem("s_province");
				window.sessionStorage.removeItem("s_city");
				window.sessionStorage.removeItem("s_county");            
				window.sessionStorage.removeItem("pm_id");
				window.sessionStorage.removeItem("rate");
				
				window.sessionStorage.removeItem("contact_name");
				window.sessionStorage.removeItem("contact_phone");
				window.sessionStorage.removeItem("contac_tmail");
			
               var new_uid = until.getNodeValue("new_uid", xml); //返回信息
               window.sessionStorage.setItem("new_uid", new_uid);
			   window.location.href = "shopresult.shtml";
               break;
            default :
                alert(retmsg);
              break;
        }
    },

init : function(){
	provinceAndCityAndAddr.init(json.provinceAndCity);
		$('distpicker4').distpicker({
			province: '广东省',
			city: '深圳市'
		 });
    }
	
}
var json = {
    provinceAndCity : {
           provinceListID : "province_addr",
           provinceOptionName : "province_addr",
           cityListID : "city_addr",
           cityOptionName : "city_addr",
           addrID:"detail_address"
    },
    maritalStatus : {
            maritalStatusListID : "marital_status",
            maritalStatusListName : "marital_status"
    },
    eduLevel : {
            eduLevelListID : "edu_level",
            eduLevelListName : "edu_level"
    },
    houseFlag : {
            houseFlagListID : "house_flag",
            houseFlagListName : "house_flag"
    },
    carFlag : {
           carFlagListID : "car_flag",
           carFlagListName : "car_flag"
    },
    houseWith : {
           houseWithListID : "house_with",
           houseWithListName : "house_with"
    },
    ecoNature : {
            companyTypeListID :"eco_nature",
            companyTypeListName:"eco_nature"
    },
    storeStatus : {
            hasShopListID :"store_status",
            hasShopListName:"store_status"
    } 
}

