var GanlanWork = {
	init : function(){
		findDay();
		findSevenDay();
	}
}
function findDay() {
	var tdValue = zuoDay();
	if(tdValue==null||tdValue==""){
		return;
	}
	var params = [
				{ name : 'server_no',value :"400001"},
				{ name : 'trade_time',value :tdValue}
			 ];
	BaseRequest.resquest(params,"/cgi-bin/query_order_count_day.cgi",requestFindDayResult);
}
function requestFindDayResult(xml){
	var errorcode = until.getNodeValue("errorcode", xml); //返回码
	var errormessage = until.getNodeValue("errormessage", xml); //返回信息
	switch(errorcode){
		case "0000":
			var total_order_fail_num = until.getNodeValue("total_order_fail_num", xml);
			if(!total_order_fail_num){
				total_order_fail_num="0";
			}
			var total_order_suc_num = until.getNodeValue("total_order_suc_num", xml);
			if(!total_order_suc_num){
				total_order_suc_num="0";
			}
			var total_suc_amount = until.getNodeValue("total_suc_amount", xml);
			if(!total_suc_amount){
				total_suc_amount="0";
			}
			total_suc_amount =parseFloat(total_suc_amount/100).toFixed(2);
			var total = parseInt(total_order_fail_num) + parseInt(total_order_suc_num);
			if(!total){
				total="0";
			}
			$(".total").text(total);
			$(".suc_amount").text(total_suc_amount);
			$(".suc_num").text(total_order_suc_num);
			var sucrate;
			if(total!="0"){
				sucrate = (total_order_suc_num/total)*100;
			}else{
				sucrate = "0";
			}
			sucrate = parseFloat(sucrate).toFixed(2);
			$(".sucrate").text(sucrate);
			break;
		default :
			alert(errormessage);
			break;
	}
}
function findSevenDay() {
	var tdValue = zuoDay();
	if(tdValue==null||tdValue==""){
		return;
	}
	var params = [
				{ name : 'server_no',value :"400002"},
				{ name : 'trade_time',value :tdValue}
			 ];
	BaseRequest.resquest(params,"/cgi-bin/query_order_count_seven_day.cgi",requestFindSevenDayResult);
}
function requestFindSevenDayResult(xml){
	var errorcode = until.getNodeValue("errorcode", xml); //返回码
	var errormessage = until.getNodeValue("errormessage", xml); //返回信息
	switch(errorcode){
		case "0000":
			var total_order_fail_num = until.getNodeValue("total_order_fail_num", xml);
			
			var total_order_fail_num_day1 = until.getNodeValue("total_order_fail_num_day1", xml);
			var total_order_fail_num_day2 = until.getNodeValue("total_order_fail_num_day2", xml);
			var total_order_fail_num_day3 = until.getNodeValue("total_order_fail_num_day3", xml);
			var total_order_fail_num_day4 = until.getNodeValue("total_order_fail_num_day4", xml);
			var total_order_fail_num_day5 = until.getNodeValue("total_order_fail_num_day5", xml);
			var total_order_fail_num_day6 = until.getNodeValue("total_order_fail_num_day6", xml);
			var total_order_fail_num_day7 = until.getNodeValue("total_order_fail_num_day7", xml);
			
			var total_order_suc_num_day1 = until.getNodeValue("total_order_suc_num_day1", xml);
			var total_order_suc_num_day2 = until.getNodeValue("total_order_suc_num_day2", xml);
			var total_order_suc_num_day3 = until.getNodeValue("total_order_suc_num_day3", xml);
			var total_order_suc_num_day4 = until.getNodeValue("total_order_suc_num_day4", xml);
			var total_order_suc_num_day5 = until.getNodeValue("total_order_suc_num_day5", xml);
			var total_order_suc_num_day6 = until.getNodeValue("total_order_suc_num_day6", xml);
			var total_order_suc_num_day7 = until.getNodeValue("total_order_suc_num_day7", xml);
			if(!total_order_suc_num_day1){
				total_order_suc_num_day1 = "0";
			}
			if(!total_order_suc_num_day2){
				total_order_suc_num_day2 = "0";
			}
			if(!total_order_suc_num_day3){
				total_order_suc_num_day3 = "0";
			}
			if(!total_order_suc_num_day4){
				total_order_suc_num_day4 = "0";
			}
			if(!total_order_suc_num_day5){
				total_order_suc_num_day5 = "0";
			}
			if(!total_order_suc_num_day6){
				total_order_suc_num_day6 = "0";
			}
			if(!total_order_suc_num_day7){
				total_order_suc_num_day7 = "0";
			}
			var total_order_num_day1 = parseInt(total_order_fail_num_day1) + parseInt(total_order_suc_num_day1);							
			var total_order_num_day2 = parseInt(total_order_fail_num_day2) + parseInt(total_order_suc_num_day2);
			var total_order_num_day3 = parseInt(total_order_fail_num_day3) + parseInt(total_order_suc_num_day3);
			var total_order_num_day4 = parseInt(total_order_fail_num_day4) + parseInt(total_order_suc_num_day4);
			var total_order_num_day5 = parseInt(total_order_fail_num_day5) + parseInt(total_order_suc_num_day5);
			var total_order_num_day6 = parseInt(total_order_fail_num_day6) + parseInt(total_order_suc_num_day6);
			var total_order_num_day7 = parseInt(total_order_fail_num_day7) + parseInt(total_order_suc_num_day7);
			if(!total_order_num_day1){
				total_order_num_day1 = "0";
			}
			if(!total_order_num_day2){
				total_order_num_day2 = "0";
			}
			if(!total_order_num_day3){
				total_order_num_day3 = "0";
			}
			if(!total_order_num_day4){
				total_order_num_day4 = "0";
			}
			if(!total_order_num_day5){
				total_order_num_day5 = "0";
			}
			if(!total_order_num_day6){
				total_order_num_day6 = "0";
			}
			if(!total_order_num_day7){
				total_order_num_day7 = "0";
			}
			var total_suc_amount_day1 = (until.getNodeValue("total_suc_amount_day1", xml))/100;
			var total_suc_amount_day2 = (until.getNodeValue("total_suc_amount_day2", xml))/100;
			var total_suc_amount_day3 = (until.getNodeValue("total_suc_amount_day3", xml))/100;
			var total_suc_amount_day4 = (until.getNodeValue("total_suc_amount_day4", xml))/100;
			var total_suc_amount_day5 = (until.getNodeValue("total_suc_amount_day5", xml))/100;
			var total_suc_amount_day6 = (until.getNodeValue("total_suc_amount_day6", xml))/100;
			var total_suc_amount_day7 = (until.getNodeValue("total_suc_amount_day7", xml))/100;
			// 基于准备好的dom，初始化echarts图表
			var myChart = echarts.init(document.getElementById('main'));
			var date = [getBeforeDate(7),getBeforeDate(6),getBeforeDate(5),getBeforeDate(4),getBeforeDate(3),getBeforeDate(2),getBeforeDate(1)];
			var data = [total_suc_amount_day7, total_suc_amount_day6, total_suc_amount_day5, total_suc_amount_day4, total_suc_amount_day3, total_suc_amount_day2,total_suc_amount_day1];
			var myChart = echarts.init(document.getElementById('main'));
			var option = {
				title : {
					text: '最近7天交易额'
				},
				tooltip: {
					show: true
				},
				legend: {
					data:['交易额']
				},
				xAxis : [{
					type : 'category',
					data : date
				}],
				yAxis : [{
					type : 'value',
					axisLabel : {
						formatter: '{value} 元'
					}
				}],
				series : [{
					"name":"交易额",
					"type":"bar",
					"data":data,
					itemStyle: {
						normal: {
							color:'#e9b343',
							label : {
								show: true,
								textStyle: {
									color: '#000',
									fontSize:'18'
								}
							}
						}
					},
				}]
			};
			// 为echarts对象加载数据 
			myChart.setOption(option);
			var datafa = [total_order_num_day7,total_order_num_day6,total_order_num_day5,total_order_num_day4,total_order_num_day3,total_order_num_day2,total_order_num_day1];
			var datasu = [total_order_suc_num_day7,total_order_suc_num_day6,total_order_suc_num_day5,total_order_suc_num_day4,total_order_suc_num_day3,total_order_suc_num_day2,total_order_suc_num_day1];
			var myChart2 = echarts.init(document.getElementById('main2'));         
			option2 = {
				title : {
					text: '最近七天订单状况',
				},
				tooltip : {
					trigger: 'axis'
				},
				legend: {
					data:['发起订单','成功订单']
				},
				toolbox: {
					show : true,
				},
				calculable : true,
				xAxis : [{
					type : 'category',
					boundaryGap : false,
					data : date
				}],
				yAxis : [{
					type : 'value',
					axisLabel : {
						formatter: '{value} 笔'
					}
				}],
				series : [{
						name:'发起订单',
						type:'line',
						data:datafa,
						markPoint : {
							data : [
								{name : getBeforeDate(7), value : total_order_num_day7, xAxis: 0, yAxis: total_order_num_day7, symbolSize:15},
								{name : getBeforeDate(6), value : total_order_num_day6, xAxis: 1, yAxis: total_order_num_day6, symbolSize:15},
								{name : getBeforeDate(5), value : total_order_num_day5, xAxis: 2, yAxis: total_order_num_day5, symbolSize:15},
								{name : getBeforeDate(4), value : total_order_num_day4, xAxis: 3, yAxis: total_order_num_day4, symbolSize:15},
								{name : getBeforeDate(3), value : total_order_num_day3, xAxis: 4, yAxis: total_order_num_day3, symbolSize:15},
								{name : getBeforeDate(2), value : total_order_num_day2, xAxis: 5, yAxis: total_order_num_day2, symbolSize:15},
								{name : getBeforeDate(1), value : total_order_num_day1, xAxis: 6, yAxis: total_order_num_day1, symbolSize:15}
							]
						},
				 },{
						name:'成功订单',
						type:'line',
						data:datasu,
						markPoint : {
							data : [
								{name : getBeforeDate(7), value : total_order_suc_num_day7, xAxis: 0, yAxis: total_order_suc_num_day7, symbolSize:15},
								{name : getBeforeDate(6), value : total_order_suc_num_day6, xAxis: 1, yAxis: total_order_suc_num_day6, symbolSize:15},
								{name : getBeforeDate(5), value : total_order_suc_num_day5, xAxis: 2, yAxis: total_order_suc_num_day5, symbolSize:15},
								{name : getBeforeDate(4), value : total_order_suc_num_day4, xAxis: 3, yAxis: total_order_suc_num_day4, symbolSize:15},
								{name : getBeforeDate(3), value : total_order_suc_num_day3, xAxis: 4, yAxis: total_order_suc_num_day3, symbolSize:15},
								{name : getBeforeDate(2), value : total_order_suc_num_day2, xAxis: 5, yAxis: total_order_suc_num_day2, symbolSize:15},
								{name : getBeforeDate(1), value : total_order_suc_num_day1, xAxis: 6, yAxis: total_order_suc_num_day1, symbolSize:15}
							]
						},
				}]
			};
			// 为echarts对象加载数据 
			myChart2.setOption(option2);
			break;
		default :
			alert(errormessage);
			break;
	}
}
function zuoDay(){
	var mydate = new Date();
	var year = mydate.getFullYear();
	var mouth = (mydate.getMonth()+1);
	if(mouth<10){
		mouth="0"+mouth;
	}
	var day = (mydate.getDate()-1);
	if(day<10){
		day="0"+day;
	}
	return ""+year+mouth+day;
}
function getBeforeDate(n){
	var n = n;
	var d = new Date();
	var year = d.getFullYear();
	var mon=d.getMonth()+1;
	var day=d.getDate();
	if(day <= n){
			if(mon>1) {
			   mon=mon-1;
			}
		   else {
			 year = year-1;
			 mon = 12;
			 }
		   }
		  d.setDate(d.getDate()-n);
		  year = d.getFullYear();
		  mon=d.getMonth()+1;
		  day=d.getDate();
	 s = year+"-"+(mon<10?('0'+mon):mon)+"-"+(day<10?('0'+day):day);
	 return s;
}