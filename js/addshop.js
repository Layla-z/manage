var AddshopWork = {
	init : function(){
		$('#distpicker3').distpicker({
		    province: '广东省',
		    city: '深圳市',
		    district: '南山区'
		});
        $(".next").click(function(event) {
            if(!($("#name").val())||!($("#short_name").val())||!($("#reg_address").val())||!($("#address").val())||!($("#rate").val())){
                alert("请填完必填内容");
                return false;
            }
            window.sessionStorage.setItem("name", $("#name").val());
            window.sessionStorage.setItem("short_name", $("#short_name").val());
            window.sessionStorage.setItem("reg_address", $("#reg_address").val());
            window.sessionStorage.setItem("address", $("#address").val());
            window.sessionStorage.setItem("business_license", $("#business_license").val());
            window.sessionStorage.setItem("s_province", $("#s_province").val());
            window.sessionStorage.setItem("s_city", $("#s_city").val());
            window.sessionStorage.setItem("s_county", $("#s_county").val());            
            window.sessionStorage.setItem("pm_id", $("#pm_id").val());
            window.sessionStorage.setItem("rate", $("#rate").val());
        });
		$("#name").val(window.sessionStorage.getItem("name"));
		$("#short_name").val(window.sessionStorage.getItem("short_name"));
		$("#reg_address").val(window.sessionStorage.getItem("reg_address"));
		$("#pm_id").val(window.sessionStorage.getItem("pm_id"));
		$("#address").val(window.sessionStorage.getItem("address"));
		$("#business_license").val(window.sessionStorage.getItem("business_license"));
		$("#rate").val(window.sessionStorage.getItem("rate"));
	}
}