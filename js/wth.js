// JavaScript Document
//省市下拉列表
var provinceAndCity = {
    data : 
    [   {
            name : '--请选择省份--',
            code : '',
            city : [{ name : '--请选择城市--', code : ''}]
        }, 
        {
            name : '北京',
            code : '11',
            city : [{ name : '北京', code : '1100'}]
        }, 
        {
            name : '上海',
            code : '31',
            city : [{ name : '上海', code : '3100' } ]
        }, 
        {
            name : '天津',
            code : '12',
            city : [{ name : '天津', code : '1200'}]
        }, 
        {
            name : '重庆',
            code : '50',
            city : [{ name : '重庆', code : '5000' } ]
        }, 
        {
            name : '河北',
            code : '13',
            city : [
                { name : '石家庄市', code : '1301' },
                { name : '唐山市', code : '1302' },
                { name : '秦皇岛市', code : '1303' },
                { name : '邯郸市', code : '1304' },
                { name : '邢台市', code : '1305' },
                { name : '保定市', code : '1306' },
                { name : '张家口市', code : '1307' },
                { name : '承德市', code : '1308' },
                { name : '沧州市', code : '1309' },
                { name : '廊坊市', code : '1310' },
                { name : '衡水市', code : '1311' }
               ]
        },
        {
            name : '山西',
            code : '14',
            city : [
                { name : '太原市', code : '1401' },
                { name : '大同市', code : '1402' },
                { name : '阳泉市', code : '1403' },
                { name : '长治市', code : '1404' },
                { name : '晋城市', code : '1405' },
                { name : '朔州市', code : '1406' },
                { name : '晋中市', code : '1407' },
                { name : '运城市', code : '1408' },
                { name : '忻州市', code : '1409' },
                { name : '临汾市', code : '1410' },
                { name : '吕梁市', code : '1411' }
               ]
        },
        {
            name : '内蒙古',
            code : '15',
            city : [
                { name : '呼和浩特市', code : '1501' },
                { name : '包头市', code : '1502' },
                { name : '乌海市', code : '1503' },
                { name : '赤峰市', code : '1504' },
                { name : '通辽市', code : '1505' },
                { name : '鄂尔多斯市', code : '1506' },
                { name : '呼伦贝尔市', code : '1507' },
                { name : '巴彦淖尔市', code : '1508' },
                { name : '乌兰察布市', code : '1509' },
                { name : '兴安盟', code : '1522' },
                { name : '锡林郭勒盟', code : '1525' },
                { name : '阿拉善盟', code : '1529' }
               ]
        },
        {
            name : '辽宁',
            code : '21',
            city : [
                { name : '沈阳市', code : '2101' },
                { name : '大连市', code : '2102' },
                { name : '鞍山市', code : '2103' },
                { name : '抚顺市', code : '2104' },
                { name : '本溪市', code : '2105' },
                { name : '丹东市', code : '2106' },
                { name : '锦州市', code : '2107' },
                { name : '营口市', code : '2108' },
                { name : '阜新市', code : '2109' },
                { name : '辽阳市', code : '2110' },
                { name : '盘锦市', code : '2111' },
                { name : '铁岭市', code : '2112' },
                { name : '朝阳市', code : '2113' },
                { name : '葫芦岛市', code : '2114' }
               ]
        },
        {
            name : '吉林',
            code : '22',
            city : [
                { name : '长春市', code : '2201' },
                { name : '吉林市', code : '2202' },
                { name : '四平市', code : '2203' },
                { name : '辽源市', code : '2204' },
                { name : '通化市', code : '2205' },
                { name : '白山市', code : '2206' },
                { name : '松原市', code : '2207' },
                { name : '白城市', code : '2208' },
                { name : '延边朝鲜族自治州', code : '2224' }
               ]
        },
        {
            name : '黑龙江',
            code : '23',
            city : [
                { name : '哈尔滨市', code : '2301' },
                { name : '齐齐哈尔市', code : '2302' },
                { name : '鸡西市', code : '2303' },
                { name : '鹤岗市', code : '2304' },
                { name : '双鸭山市', code : '2305' },
                { name : '大庆市', code : '2306' },
                { name : '伊春市', code : '2307' },
                { name : '佳木斯市', code : '2308' },
                { name : '七台河市', code : '2309' },
                { name : '牡丹江市', code : '2310' },
                { name : '黑河市', code : '2311' },
                { name : '绥化市', code : '2312' },
                { name : '大兴安岭地区', code : '2327' }
               ]
        },
        {
            name : '江苏',
            code : '32',
            city : [
                { name : '南京市', code : '3201' },
                { name : '无锡市', code : '3202' },
                { name : '徐州市', code : '3203' },
                { name : '常州市', code : '3204' },
                { name : '苏州市', code : '3205' },
                { name : '南通市', code : '3206' },
                { name : '连云港市', code : '3207' },
                { name : '淮安市', code : '3208' },
                { name : '盐城市', code : '3209' },
                { name : '扬州市', code : '3210' },
                { name : '镇江市', code : '3211' },
                { name : '泰州市', code : '3212' },
                { name : '宿迁市', code : '3213' }
               ]
        },
        {
            name : '浙江',
            code : '33',
            city : [
                { name : '杭州市', code : '3301' },
                { name : '宁波市', code : '3302' },
                { name : '温州市', code : '3303' },
                { name : '嘉兴市', code : '3304' },
                { name : '湖州市', code : '3305' },
                { name : '绍兴市', code : '3306' },
                { name : '金华市', code : '3307' },
                { name : '衢州市', code : '3308' },
                { name : '舟山市', code : '3309' },
                { name : '台州市', code : '3310' },
                { name : '丽水市', code : '3311' }
               ]
        },
        {
            name : '安徽',
            code : '34',
            city : [
                { name : '合肥市', code : '3401' },
                { name : '芜湖市', code : '3402' },
                { name : '蚌埠市', code : '3403' },
                { name : '淮南市', code : '3404' },
                { name : '马鞍山市', code : '3405' },
                { name : '淮北市', code : '3406' },
                { name : '铜陵市', code : '3407' },
                { name : '安庆市', code : '3408' },
                { name : '黄山市', code : '3410' },
                { name : '滁州市', code : '3411' },
                { name : '阜阳市', code : '3412' },
                { name : '宿州市', code : '3413' },
                { name : '巢湖市', code : '3414' },
                { name : '六安市', code : '3415' },
                { name : '亳州市', code : '3416' },
                { name : '池州市', code : '3417' },
                { name : '宣城市', code : '3418' }
               ]
        },
        {
            name : '福建',
            code : '35',
            city : [
                { name : '福州市', code : '3501' },
                { name : '厦门市', code : '3502' },
                { name : '莆田市', code : '3503' },
                { name : '三明市', code : '3504' },
                { name : '泉州市', code : '3505' },
                { name : '漳州市', code : '3506' },
                { name : '南平市', code : '3507' },
                { name : '龙岩市', code : '3508' },
                { name : '宁德市', code : '3509' }
               ]
        },
        {
            name : '江西',
            code : '36',
            city : [
                { name : '南昌市', code : '3601' },
                { name : '景德镇市', code : '3602' },
                { name : '萍乡市', code : '3603' },
                { name : '九江市', code : '3604' },
                { name : '新余市', code : '3605' },
                { name : '鹰潭市', code : '3606' },
                { name : '赣州市', code : '3607' },
                { name : '吉安市', code : '3608' },
                { name : '宜春市', code : '3609' },
                { name : '抚州市', code : '3610' },
                { name : '上饶市', code : '3611' }
               ]
        },
        {
            name : '山东',
            code : '37',
            city : [
                { name : '济南市', code : '3701' },
                { name : '青岛市', code : '3702' },
                { name : '淄博市', code : '3703' },
                { name : '枣庄市', code : '3704' },
                { name : '东营市', code : '3705' },
                { name : '烟台市', code : '3706' },
                { name : '潍坊市', code : '3707' },
                { name : '济宁市', code : '3708' },
                { name : '泰安市', code : '3709' },
                { name : '威海市', code : '3710' },
                { name : '日照市', code : '3711' },
                { name : '莱芜市', code : '3712' },
                { name : '临沂市', code : '3713' },
                { name : '德州市', code : '3714' },
                { name : '聊城市', code : '3715' },
                { name : '滨州市', code : '3716' },
                { name : '菏泽市', code : '3717' }
               ]
        },
        {
            name : '河南',
            code : '41',
            city : [
                { name : '郑州市', code : '4101' },
                { name : '开封市', code : '4102' },
                { name : '洛阳市', code : '4103' },
                { name : '平顶山市', code : '4104' },
                { name : '安阳市', code : '4105' },
                { name : '鹤壁市', code : '4106' },
                { name : '新乡市', code : '4107' },
                { name : '焦作市', code : '4108' },
                { name : '濮阳市', code : '4109' },
                { name : '许昌市', code : '4110' },
                { name : '漯河市', code : '4111' },
                { name : '三门峡市', code : '4112' },
                { name : '南阳市', code : '4113' },
                { name : '商丘市', code : '4114' },
                { name : '信阳市', code : '4115' },
                { name : '周口市', code : '4116' },
                { name : '驻马店市', code : '4117' }
               ]
        },
        {
            name : '湖北',
            code : '42',
            city : [
                { name : '武汉市', code : '4201' },
                { name : '黄石市', code : '4202' },
                { name : '十堰市', code : '4203' },
                { name : '宜昌市', code : '4205' },
                { name : '襄樊市', code : '4206' },
                { name : '鄂州市', code : '4207' },
                { name : '荆门市', code : '4208' },
                { name : '孝感市', code : '4209' },
                { name : '荆州市', code : '4210' },
                { name : '黄冈市', code : '4211' },
                { name : '咸宁市', code : '4212' },
                { name : '随州市', code : '4213' },
                { name : '恩施土家族苗族自治州', code : '4228' }
               ]
        },
        {
            name : '湖南',
            code : '43',
            city : [
                { name : '长沙市', code : '4301' },
                { name : '株洲市', code : '4302' },
                { name : '湘潭市', code : '4303' },
                { name : '衡阳市', code : '4304' },
                { name : '邵阳市', code : '4305' },
                { name : '岳阳市', code : '4306' },
                { name : '常德市', code : '4307' },
                { name : '张家界市', code : '4308' },
                { name : '益阳市', code : '4309' },
                { name : '郴州市', code : '4310' },
                { name : '永州市', code : '4311' },
                { name : '怀化市', code : '4312' },
                { name : '娄底市', code : '4313' },
                { name : '湘西土家族苗族自治州', code : '4331' }
               ]
        },
        {
            name : '广东',
            code : '44',
            city : [
                { name : '广州市', code : '4401' },
                { name : '韶关市', code : '4402' },
                { name : '深圳市', code : '4403' },
                { name : '珠海市', code : '4404' },
                { name : '汕头市', code : '4405' },
                { name : '佛山市', code : '4406' },
                { name : '江门市', code : '4407' },
                { name : '湛江市', code : '4408' },
                { name : '茂名市', code : '4409' },
                { name : '肇庆市', code : '4412' },
                { name : '惠州市', code : '4413' },
                { name : '梅州市', code : '4414' },
                { name : '汕尾市', code : '4415' },
                { name : '河源市', code : '4416' },
                { name : '阳江市', code : '4417' },
                { name : '清远市', code : '4418' },
                { name : '东莞市', code : '4419' },
                { name : '中山市', code : '4420' },
                { name : '潮州市', code : '4451' },
                { name : '揭阳市', code : '4452' },
                { name : '云浮市', code : '4453' }
               ]
        },
        {
            name : '广西',
            code : '45',
            city : [
                { name : '南宁市', code : '4501' },
                { name : '柳州市', code : '4502' },
                { name : '桂林市', code : '4503' },
                { name : '梧州市', code : '4504' },
                { name : '北海市', code : '4505' },
                { name : '防城港市', code : '4506' },
                { name : '钦州市', code : '4507' },
                { name : '贵港市', code : '4508' },
                { name : '玉林市', code : '4509' },
                { name : '百色市', code : '4510' },
                { name : '贺州市', code : '4511' },
                { name : '河池市', code : '4512' },
                { name : '来宾市', code : '4513' },
                { name : '崇左市', code : '4514' }
               ]
        },
        {
            name : '海南',
            code : '46',
            city : [
                { name : '海口市', code : '4601' },
                { name : '三亚市', code : '4602' },
                { name : '儋州市', code : '4603' }
               ]
        },
        {
            name : '四川',
            code : '51',
            city : [
                { name : '成都市', code : '5101' },
                { name : '自贡市', code : '5103' },
                { name : '攀枝花市', code : '5104' },
                { name : '泸州市', code : '5105' },
                { name : '德阳市', code : '5106' },
                { name : '绵阳市', code : '5107' },
                { name : '广元市', code : '5108' },
                { name : '遂宁市', code : '5109' },
                { name : '内江市', code : '5110' },
                { name : '乐山市', code : '5111' },
                { name : '南充市', code : '5113' },
                { name : '眉山市', code : '5114' },
                { name : '宜宾市', code : '5115' },
                { name : '广安市', code : '5116' },
                { name : '达州市', code : '5117' },
                { name : '雅安市', code : '5118' },
                { name : '巴中市', code : '5119' },
                { name : '资阳市', code : '5120' },
                { name : '阿坝藏族羌族自治州', code : '5132' },
                { name : '甘孜藏族自治州', code : '5133' },
                { name : '凉山彝族自治州', code : '5134' }
               ]
        },
        {
            name : '贵州',
            code : '52',
            city : [
                { name : '贵阳市', code : '5201' }, 
                { name : '六盘水市', code : '5202' },
                { name : '遵义市', code : '5203' }, 
                { name : '安顺市', code : '5204' }, 
                { name : '铜仁地区', code : '5222' },
                { name : '黔西南布依族苗族自治州', code : '5223' },
                { name : '毕节地区', code : '5224' },
                { name : '黔东南苗族侗族自治州', code : '5226' },
                { name : '黔南布依族苗族自治州', code : '5227' }
               ]
        },
        {
            name : '云南',
            code : '53',
            city : [
                { name : '昆明市', code : '5301' },
                { name : '曲靖市', code : '5303' },
                { name : '玉溪市', code : '5304' },
                { name : '保山市', code : '5305' },
                { name : '昭通市', code : '5306' },
                { name : '丽江市', code : '5307' },
                { name : '普洱市', code : '5308' },
                { name : '临沧市', code : '5309' },
                { name : '楚雄彝族自治州', code : '5323' },
                { name : '红河哈尼族彝族自治州', code : '5325' },
                { name : '文山壮族苗族自治州', code : '5326' },
                { name : '西双版纳傣族自治州', code : '5328' },
                { name : '大理白族自治州', code : '5329' },
                { name : '德宏傣族景颇族自治州', code : '5331' },
                { name : '怒江傈僳族自治州', code : '5333' },
                { name : '迪庆藏族自治州', code : '5334' }
               ]
        },
        {
            name : '西藏',
            code : '54',
            city : [
                { name : '拉萨市', code : '5401' },
                { name : '昌都地区', code : '5421' },
                { name : '山南地区', code : '5422' },
                { name : '日喀则地区', code : '5423' },
                { name : '那曲地区', code : '5424' },
                { name : '阿里地区', code : '5425' },
                { name : '林芝地区', code : '5426' }
               ]
        },
        {
            name : '陕西',
            code : '61',
            city : [
                { name : '西安市', code : '6101' },
                { name : '铜川市', code : '6102' },
                { name : '宝鸡市', code : '6103' },
                { name : '咸阳市', code : '6104' },
                { name : '渭南市', code : '6105' },
                { name : '延安市', code : '6106' },
                { name : '汉中市', code : '6107' },
                { name : '榆林市', code : '6108' },
                { name : '安康市', code : '6109' },
                { name : '商洛市', code : '6110' }
               ]
        },
        {
            name : '甘肃',
            code : '62',
            city : [
                { name : '兰州市', code : '6201' },
                { name : '嘉峪关市', code : '6202' },
                { name : '金昌市', code : '6203' },
                { name : '白银市', code : '6204' },
                { name : '天水市', code : '6205' },
                { name : '武威市', code : '6206' },
                { name : '张掖市', code : '6207' },
                { name : '平凉市', code : '6208' },
                { name : '酒泉市', code : '6209' },
                { name : '庆阳市', code : '6210' },
                { name : '定西市', code : '6211' },
                { name : '陇南市', code : '6212' },
                { name : '临夏回族自治州', code : '6229' },
                { name : '甘南藏族自治州', code : '6230' }
               ]
        },
        {
            name : '青海',
            code : '63',
            city : [
                { name : '西宁市', code : '6301' },
                { name : '海东地区', code : '6321' },
                { name : '海北藏族自治州', code : '6322' },
                { name : '黄南藏族自治州', code : '6323' },
                { name : '海南藏族自治州', code : '6325' },
                { name : '果洛藏族自治州', code : '6326' },
                { name : '玉树藏族自治州', code : '6327' },
                { name : '海西蒙古族藏族自治州', code : '6328' }
               ]
        },
        {
            name : '宁夏',
            code : '64',
            city : [
                { name : '银川市', code : '6401' },
                { name : '石嘴山市', code : '6402' },
                { name : '吴忠市', code : '6403' },
                { name : '固原市', code : '6404' },
                { name : '中卫市', code : '6405' }
               ]
        },
        {
            name : '新疆',
            code : '65',
            city : [
                { name : '乌鲁木齐市', code : '6501' },
                { name : '克拉玛依市', code : '6502' },
                { name : '吐鲁番地区', code : '6521' },
                { name : '哈密地区', code : '6522' },
                { name : '昌吉回族自治州', code : '6523' },
                { name : '博尔塔拉蒙古自治州', code : '6527' },
                { name : '巴音郭楞蒙古自治州', code : '6528' },
                { name : '阿克苏地区', code : '6529' },
                { name : '克孜勒苏柯尔克孜自治州', code : '6530' },
                { name : '喀什地区', code : '6531' },
                { name : '和田地区', code : '6532' },
                { name : '伊犁哈萨克自治州', code : '6540' },
                { name : '塔城地区', code : '6542' },
                { name : '阿勒泰地区', code : '6543' }
               ]
         }
    ],
	provinceListID : "",
	cityListID : "",
	provinceName : "",
	cityOptionName : "",
	init : function (json) //格式{provinceListID :"",provinceOptionName:"",cityListID:"",cityOptionName:""};
	{
		this.provinceListID = json.provinceListID;
		this.provinceOptionName = json.provinceOptionName;
		this.cityListID = json.cityListID;
		this.cityOptionName = json.cityOptionName;
		document.getElementById(this.provinceListID).innerHTML = "";
		for (var i = 0; i < this.data.length; i++) {
			var newOption = document.createElement("option");
			var newText = document.createTextNode(this.data[i].name);
			newOption.setAttribute("value", this.data[i].code);
			newOption.setAttribute("name", this.provinceOptionName);
			newOption.appendChild(newText);
			document.getElementById(this.provinceListID).appendChild(newOption);
		}

		document.getElementById(this.cityListID).innerHTML = "";
        	var index=document.getElementById(this.provinceListID).selectedIndex;
		for (var i = 0; i < this.data[index].city.length; i++) {
			var newOption = document.createElement("option");
			var newText = document.createTextNode(this.data[index].city[i].name);
			newOption.setAttribute("value", this.data[index].city[i].code);
			newOption.setAttribute("name", this.cityOptionName);
			newOption.appendChild(newText);
			document.getElementById(this.cityListID).appendChild(newOption);
		}

		var $this = this;
		document.getElementById(this.provinceListID).onchange = function () {
			$this.selectProvince()
		};
	},
	selectProvince : function () {
		var optionList = document.getElementById(this.provinceListID).options;
		var selectedIndex = document.getElementById(this.provinceListID).selectedIndex;
		var provinceCode = optionList[selectedIndex].value;
		this.listCity(provinceCode);
	},
	listCity : function (code) {
		var index = 0;
		for (var i = 0; i < this.data.length; i++) {
			if (this.data[i].code == code) {
				index = i;
				break;
			}
		}
		var cityData = this.data[index].city;
		document.getElementById(this.cityListID).innerHTML = "";
		for (var i = 0; i < cityData.length; i++) {
			var newOption = document.createElement("option");
			var newText = document.createTextNode(cityData[i].name);
			newOption.setAttribute("value", cityData[i].code);
			newOption.setAttribute("name", this.cityOptionName);
			newOption.appendChild(newText);
			document.getElementById(this.cityListID).appendChild(newOption);
		}
	},
	provinceCodeGetCity : function (code,json) {
		this.cityListID = json.cityListID;
		this.cityOptionName = json.cityOptionName;
		var index = 0;
		for (var i = 0; i < this.data.length; i++) {
			if (this.data[i].code == code) {
				index = i;
				break;
			}
		}
		var cityData = this.data[index].city;
		document.getElementById(this.cityListID).innerHTML = "";
		for (var i = 0; i < cityData.length; i++) {
			var newOption = document.createElement("option");
			var newText = document.createTextNode(cityData[i].name);
			newOption.setAttribute("value", cityData[i].code);
			newOption.setAttribute("name", this.cityOptionName);
			newOption.appendChild(newText);
			document.getElementById(this.cityListID).appendChild(newOption);
		}
	},
    showProvinceAndCityNameByCode : function(pcode,ccode){
        var pName = "";
        var cName = "";
        for(var i=0;i<this.data.length;i++){
            if(pcode == this.data[i].code){
                pName = this.data[i].name;
                for(var j=0;j<this.data[i].city.length;j++){
                    if(ccode == this.data[i].city[j].code){
                        cName = this.data[i].city[j].name;
                    }
                }
                break;
            }
        }
        return (pName + cName);
    }
}

// JavaScript Document
//省市下拉列表
var provinceAndCityAndAddr = {
    data : 
    [   {
            name : '--请选择省份--',
            code : '',
            city : [{ name : '--请选择城市--', code : ''}]
        }, 
        {
            name : '北京',
            code : '11',
            city : [{ name : '北京', code : '1100'}]
        }, 
        {
            name : '上海',
            code : '31',
            city : [{ name : '上海', code : '3100' } ]
        }, 
        {
            name : '天津',
            code : '12',
            city : [{ name : '天津', code : '1200'}]
        }, 
        {
            name : '重庆',
            code : '50',
            city : [{ name : '重庆', code : '5000' } ]
        }, 
        {
            name : '河北',
            code : '13',
            city : [
                { name : '石家庄市', code : '1301' },
                { name : '唐山市', code : '1302' },
                { name : '秦皇岛市', code : '1303' },
                { name : '邯郸市', code : '1304' },
                { name : '邢台市', code : '1305' },
                { name : '保定市', code : '1306' },
                { name : '张家口市', code : '1307' },
                { name : '承德市', code : '1308' },
                { name : '沧州市', code : '1309' },
                { name : '廊坊市', code : '1310' },
                { name : '衡水市', code : '1311' }
               ]
        },
        {
            name : '山西',
            code : '14',
            city : [
                { name : '太原市', code : '1401' },
                { name : '大同市', code : '1402' },
                { name : '阳泉市', code : '1403' },
                { name : '长治市', code : '1404' },
                { name : '晋城市', code : '1405' },
                { name : '朔州市', code : '1406' },
                { name : '晋中市', code : '1407' },
                { name : '运城市', code : '1408' },
                { name : '忻州市', code : '1409' },
                { name : '临汾市', code : '1410' },
                { name : '吕梁市', code : '1411' }
               ]
        },
        {
            name : '内蒙古',
            code : '15',
            city : [
                { name : '呼和浩特市', code : '1501' },
                { name : '包头市', code : '1502' },
                { name : '乌海市', code : '1503' },
                { name : '赤峰市', code : '1504' },
                { name : '通辽市', code : '1505' },
                { name : '鄂尔多斯市', code : '1506' },
                { name : '呼伦贝尔市', code : '1507' },
                { name : '巴彦淖尔市', code : '1508' },
                { name : '乌兰察布市', code : '1509' },
                { name : '兴安盟', code : '1522' },
                { name : '锡林郭勒盟', code : '1525' },
                { name : '阿拉善盟', code : '1529' }
               ]
        },
        {
            name : '辽宁',
            code : '21',
            city : [
                { name : '沈阳市', code : '2101' },
                { name : '大连市', code : '2102' },
                { name : '鞍山市', code : '2103' },
                { name : '抚顺市', code : '2104' },
                { name : '本溪市', code : '2105' },
                { name : '丹东市', code : '2106' },
                { name : '锦州市', code : '2107' },
                { name : '营口市', code : '2108' },
                { name : '阜新市', code : '2109' },
                { name : '辽阳市', code : '2110' },
                { name : '盘锦市', code : '2111' },
                { name : '铁岭市', code : '2112' },
                { name : '朝阳市', code : '2113' },
                { name : '葫芦岛市', code : '2114' }
               ]
        },
        {
            name : '吉林',
            code : '22',
            city : [
                { name : '长春市', code : '2201' },
                { name : '吉林市', code : '2202' },
                { name : '四平市', code : '2203' },
                { name : '辽源市', code : '2204' },
                { name : '通化市', code : '2205' },
                { name : '白山市', code : '2206' },
                { name : '松原市', code : '2207' },
                { name : '白城市', code : '2208' },
                { name : '延边朝鲜族自治州', code : '2224' }
               ]
        },
        {
            name : '黑龙江',
            code : '23',
            city : [
                { name : '哈尔滨市', code : '2301' },
                { name : '齐齐哈尔市', code : '2302' },
                { name : '鸡西市', code : '2303' },
                { name : '鹤岗市', code : '2304' },
                { name : '双鸭山市', code : '2305' },
                { name : '大庆市', code : '2306' },
                { name : '伊春市', code : '2307' },
                { name : '佳木斯市', code : '2308' },
                { name : '七台河市', code : '2309' },
                { name : '牡丹江市', code : '2310' },
                { name : '黑河市', code : '2311' },
                { name : '绥化市', code : '2312' },
                { name : '大兴安岭地区', code : '2327' }
               ]
        },
        {
            name : '江苏',
            code : '32',
            city : [
                { name : '南京市', code : '3201' },
                { name : '无锡市', code : '3202' },
                { name : '徐州市', code : '3203' },
                { name : '常州市', code : '3204' },
                { name : '苏州市', code : '3205' },
                { name : '南通市', code : '3206' },
                { name : '连云港市', code : '3207' },
                { name : '淮安市', code : '3208' },
                { name : '盐城市', code : '3209' },
                { name : '扬州市', code : '3210' },
                { name : '镇江市', code : '3211' },
                { name : '泰州市', code : '3212' },
                { name : '宿迁市', code : '3213' }
               ]
        },
        {
            name : '浙江',
            code : '33',
            city : [
                { name : '杭州市', code : '3301' },
                { name : '宁波市', code : '3302' },
                { name : '温州市', code : '3303' },
                { name : '嘉兴市', code : '3304' },
                { name : '湖州市', code : '3305' },
                { name : '绍兴市', code : '3306' },
                { name : '金华市', code : '3307' },
                { name : '衢州市', code : '3308' },
                { name : '舟山市', code : '3309' },
                { name : '台州市', code : '3310' },
                { name : '丽水市', code : '3311' }
               ]
        },
        {
            name : '安徽',
            code : '34',
            city : [
                { name : '合肥市', code : '3401' },
                { name : '芜湖市', code : '3402' },
                { name : '蚌埠市', code : '3403' },
                { name : '淮南市', code : '3404' },
                { name : '马鞍山市', code : '3405' },
                { name : '淮北市', code : '3406' },
                { name : '铜陵市', code : '3407' },
                { name : '安庆市', code : '3408' },
                { name : '黄山市', code : '3410' },
                { name : '滁州市', code : '3411' },
                { name : '阜阳市', code : '3412' },
                { name : '宿州市', code : '3413' },
                { name : '巢湖市', code : '3414' },
                { name : '六安市', code : '3415' },
                { name : '亳州市', code : '3416' },
                { name : '池州市', code : '3417' },
                { name : '宣城市', code : '3418' }
               ]
        },
        {
            name : '福建',
            code : '35',
            city : [
                { name : '福州市', code : '3501' },
                { name : '厦门市', code : '3502' },
                { name : '莆田市', code : '3503' },
                { name : '三明市', code : '3504' },
                { name : '泉州市', code : '3505' },
                { name : '漳州市', code : '3506' },
                { name : '南平市', code : '3507' },
                { name : '龙岩市', code : '3508' },
                { name : '宁德市', code : '3509' }
               ]
        },
        {
            name : '江西',
            code : '36',
            city : [
                { name : '南昌市', code : '3601' },
                { name : '景德镇市', code : '3602' },
                { name : '萍乡市', code : '3603' },
                { name : '九江市', code : '3604' },
                { name : '新余市', code : '3605' },
                { name : '鹰潭市', code : '3606' },
                { name : '赣州市', code : '3607' },
                { name : '吉安市', code : '3608' },
                { name : '宜春市', code : '3609' },
                { name : '抚州市', code : '3610' },
                { name : '上饶市', code : '3611' }
               ]
        },
        {
            name : '山东',
            code : '37',
            city : [
                { name : '济南市', code : '3701' },
                { name : '青岛市', code : '3702' },
                { name : '淄博市', code : '3703' },
                { name : '枣庄市', code : '3704' },
                { name : '东营市', code : '3705' },
                { name : '烟台市', code : '3706' },
                { name : '潍坊市', code : '3707' },
                { name : '济宁市', code : '3708' },
                { name : '泰安市', code : '3709' },
                { name : '威海市', code : '3710' },
                { name : '日照市', code : '3711' },
                { name : '莱芜市', code : '3712' },
                { name : '临沂市', code : '3713' },
                { name : '德州市', code : '3714' },
                { name : '聊城市', code : '3715' },
                { name : '滨州市', code : '3716' },
                { name : '菏泽市', code : '3717' }
               ]
        },
        {
            name : '河南',
            code : '41',
            city : [
                { name : '郑州市', code : '4101' },
                { name : '开封市', code : '4102' },
                { name : '洛阳市', code : '4103' },
                { name : '平顶山市', code : '4104' },
                { name : '安阳市', code : '4105' },
                { name : '鹤壁市', code : '4106' },
                { name : '新乡市', code : '4107' },
                { name : '焦作市', code : '4108' },
                { name : '濮阳市', code : '4109' },
                { name : '许昌市', code : '4110' },
                { name : '漯河市', code : '4111' },
                { name : '三门峡市', code : '4112' },
                { name : '南阳市', code : '4113' },
                { name : '商丘市', code : '4114' },
                { name : '信阳市', code : '4115' },
                { name : '周口市', code : '4116' },
                { name : '驻马店市', code : '4117' }
               ]
        },
        {
            name : '湖北',
            code : '42',
            city : [
                { name : '武汉市', code : '4201' },
                { name : '黄石市', code : '4202' },
                { name : '十堰市', code : '4203' },
                { name : '宜昌市', code : '4205' },
                { name : '襄樊市', code : '4206' },
                { name : '鄂州市', code : '4207' },
                { name : '荆门市', code : '4208' },
                { name : '孝感市', code : '4209' },
                { name : '荆州市', code : '4210' },
                { name : '黄冈市', code : '4211' },
                { name : '咸宁市', code : '4212' },
                { name : '随州市', code : '4213' },
                { name : '恩施土家族苗族自治州', code : '4228' }
               ]
        },
        {
            name : '湖南',
            code : '43',
            city : [
                { name : '长沙市', code : '4301' },
                { name : '株洲市', code : '4302' },
                { name : '湘潭市', code : '4303' },
                { name : '衡阳市', code : '4304' },
                { name : '邵阳市', code : '4305' },
                { name : '岳阳市', code : '4306' },
                { name : '常德市', code : '4307' },
                { name : '张家界市', code : '4308' },
                { name : '益阳市', code : '4309' },
                { name : '郴州市', code : '4310' },
                { name : '永州市', code : '4311' },
                { name : '怀化市', code : '4312' },
                { name : '娄底市', code : '4313' },
                { name : '湘西土家族苗族自治州', code : '4331' }
               ]
        },
        {
            name : '广东',
            code : '44',
            city : [
                { name : '广州市', code : '4401' },
                { name : '韶关市', code : '4402' },
                { name : '深圳市', code : '4403' },
                { name : '珠海市', code : '4404' },
                { name : '汕头市', code : '4405' },
                { name : '佛山市', code : '4406' },
                { name : '江门市', code : '4407' },
                { name : '湛江市', code : '4408' },
                { name : '茂名市', code : '4409' },
                { name : '肇庆市', code : '4412' },
                { name : '惠州市', code : '4413' },
                { name : '梅州市', code : '4414' },
                { name : '汕尾市', code : '4415' },
                { name : '河源市', code : '4416' },
                { name : '阳江市', code : '4417' },
                { name : '清远市', code : '4418' },
                { name : '东莞市', code : '4419' },
                { name : '中山市', code : '4420' },
                { name : '潮州市', code : '4451' },
                { name : '揭阳市', code : '4452' },
                { name : '云浮市', code : '4453' }
               ]
        },
        {
            name : '广西',
            code : '45',
            city : [
                { name : '南宁市', code : '4501' },
                { name : '柳州市', code : '4502' },
                { name : '桂林市', code : '4503' },
                { name : '梧州市', code : '4504' },
                { name : '北海市', code : '4505' },
                { name : '防城港市', code : '4506' },
                { name : '钦州市', code : '4507' },
                { name : '贵港市', code : '4508' },
                { name : '玉林市', code : '4509' },
                { name : '百色市', code : '4510' },
                { name : '贺州市', code : '4511' },
                { name : '河池市', code : '4512' },
                { name : '来宾市', code : '4513' },
                { name : '崇左市', code : '4514' }
               ]
        },
        {
            name : '海南',
            code : '46',
            city : [
                { name : '海口市', code : '4601' },
                { name : '三亚市', code : '4602' },
                { name : '儋州市', code : '4603' }
               ]
        },
        {
            name : '四川',
            code : '51',
            city : [
                { name : '成都市', code : '5101' },
                { name : '自贡市', code : '5103' },
                { name : '攀枝花市', code : '5104' },
                { name : '泸州市', code : '5105' },
                { name : '德阳市', code : '5106' },
                { name : '绵阳市', code : '5107' },
                { name : '广元市', code : '5108' },
                { name : '遂宁市', code : '5109' },
                { name : '内江市', code : '5110' },
                { name : '乐山市', code : '5111' },
                { name : '南充市', code : '5113' },
                { name : '眉山市', code : '5114' },
                { name : '宜宾市', code : '5115' },
                { name : '广安市', code : '5116' },
                { name : '达州市', code : '5117' },
                { name : '雅安市', code : '5118' },
                { name : '巴中市', code : '5119' },
                { name : '资阳市', code : '5120' },
                { name : '阿坝藏族羌族自治州', code : '5132' },
                { name : '甘孜藏族自治州', code : '5133' },
                { name : '凉山彝族自治州', code : '5134' }
               ]
        },
        {
            name : '贵州',
            code : '52',
            city : [
                { name : '贵阳市', code : '5201' }, 
                { name : '六盘水市', code : '5202' },
                { name : '遵义市', code : '5203' }, 
                { name : '安顺市', code : '5204' }, 
                { name : '铜仁地区', code : '5222' },
                { name : '黔西南布依族苗族自治州', code : '5223' },
                { name : '毕节地区', code : '5224' },
                { name : '黔东南苗族侗族自治州', code : '5226' },
                { name : '黔南布依族苗族自治州', code : '5227' }
               ]
        },
        {
            name : '云南',
            code : '53',
            city : [
                { name : '昆明市', code : '5301' },
                { name : '曲靖市', code : '5303' },
                { name : '玉溪市', code : '5304' },
                { name : '保山市', code : '5305' },
                { name : '昭通市', code : '5306' },
                { name : '丽江市', code : '5307' },
                { name : '普洱市', code : '5308' },
                { name : '临沧市', code : '5309' },
                { name : '楚雄彝族自治州', code : '5323' },
                { name : '红河哈尼族彝族自治州', code : '5325' },
                { name : '文山壮族苗族自治州', code : '5326' },
                { name : '西双版纳傣族自治州', code : '5328' },
                { name : '大理白族自治州', code : '5329' },
                { name : '德宏傣族景颇族自治州', code : '5331' },
                { name : '怒江傈僳族自治州', code : '5333' },
                { name : '迪庆藏族自治州', code : '5334' }
               ]
        },
        {
            name : '西藏',
            code : '54',
            city : [
                { name : '拉萨市', code : '5401' },
                { name : '昌都地区', code : '5421' },
                { name : '山南地区', code : '5422' },
                { name : '日喀则地区', code : '5423' },
                { name : '那曲地区', code : '5424' },
                { name : '阿里地区', code : '5425' },
                { name : '林芝地区', code : '5426' }
               ]
        },
        {
            name : '陕西',
            code : '61',
            city : [
                { name : '西安市', code : '6101' },
                { name : '铜川市', code : '6102' },
                { name : '宝鸡市', code : '6103' },
                { name : '咸阳市', code : '6104' },
                { name : '渭南市', code : '6105' },
                { name : '延安市', code : '6106' },
                { name : '汉中市', code : '6107' },
                { name : '榆林市', code : '6108' },
                { name : '安康市', code : '6109' },
                { name : '商洛市', code : '6110' }
               ]
        },
        {
            name : '甘肃',
            code : '62',
            city : [
                { name : '兰州市', code : '6201' },
                { name : '嘉峪关市', code : '6202' },
                { name : '金昌市', code : '6203' },
                { name : '白银市', code : '6204' },
                { name : '天水市', code : '6205' },
                { name : '武威市', code : '6206' },
                { name : '张掖市', code : '6207' },
                { name : '平凉市', code : '6208' },
                { name : '酒泉市', code : '6209' },
                { name : '庆阳市', code : '6210' },
                { name : '定西市', code : '6211' },
                { name : '陇南市', code : '6212' },
                { name : '临夏回族自治州', code : '6229' },
                { name : '甘南藏族自治州', code : '6230' }
               ]
        },
        {
            name : '青海',
            code : '63',
            city : [
                { name : '西宁市', code : '6301' },
                { name : '海东地区', code : '6321' },
                { name : '海北藏族自治州', code : '6322' },
                { name : '黄南藏族自治州', code : '6323' },
                { name : '海南藏族自治州', code : '6325' },
                { name : '果洛藏族自治州', code : '6326' },
                { name : '玉树藏族自治州', code : '6327' },
                { name : '海西蒙古族藏族自治州', code : '6328' }
               ]
        },
        {
            name : '宁夏',
            code : '64',
            city : [
                { name : '银川市', code : '6401' },
                { name : '石嘴山市', code : '6402' },
                { name : '吴忠市', code : '6403' },
                { name : '固原市', code : '6404' },
                { name : '中卫市', code : '6405' }
               ]
        },
        {
            name : '新疆',
            code : '65',
            city : [
                { name : '乌鲁木齐市', code : '6501' },
                { name : '克拉玛依市', code : '6502' },
                { name : '吐鲁番地区', code : '6521' },
                { name : '哈密地区', code : '6522' },
                { name : '昌吉回族自治州', code : '6523' },
                { name : '博尔塔拉蒙古自治州', code : '6527' },
                { name : '巴音郭楞蒙古自治州', code : '6528' },
                { name : '阿克苏地区', code : '6529' },
                { name : '克孜勒苏柯尔克孜自治州', code : '6530' },
                { name : '喀什地区', code : '6531' },
                { name : '和田地区', code : '6532' },
                { name : '伊犁哈萨克自治州', code : '6540' },
                { name : '塔城地区', code : '6542' },
                { name : '阿勒泰地区', code : '6543' }
               ]
         }
    ],
	provinceListID : "",
	cityListID : "",
	provinceOptionName : "",
	cityOptionName : "",
	addrID: "",
	init : function (json) //格式{provinceListID :"",provinceOptionName:"",cityListID:"",cityOptionName:"",addrID:""};
	{
		this.provinceListID = json.provinceListID;
		this.provinceOptionName = json.provinceOptionName;
		this.cityListID = json.cityListID;
		this.cityOptionName = json.cityOptionName;
                this.addrID = json.addrID;
		document.getElementById(this.provinceListID).innerHTML = "";
		for (var i = 0; i < this.data.length; i++) {
			var newOption = document.createElement("option");
			var newText = document.createTextNode(this.data[i].name);
			newOption.setAttribute("value", this.data[i].code);
			newOption.setAttribute("name", this.provinceOptionName);
			newOption.appendChild(newText);
			document.getElementById(this.provinceListID).appendChild(newOption);
		}
		document.getElementById(this.cityListID).innerHTML = "";
                var index=document.getElementById(this.provinceListID).selectedIndex;
		for (var i = 0; i < this.data[index].city.length; i++) {
			var newOption = document.createElement("option");
			var newText = document.createTextNode(this.data[index].city[i].name);
			newOption.setAttribute("value", this.data[index].city[i].code);
			newOption.setAttribute("name", this.cityOptionName);
			newOption.appendChild(newText);
			document.getElementById(this.cityListID).appendChild(newOption);
		}
		var $this = this;
		document.getElementById(this.provinceListID).onchange = function () {
			$this.selectProvince();
			//document.getElementById(this.addrID).value = "";
			document.getElementById(json.addrID).value = "";
		};
	},
	selectProvince : function () {
		var optionList = document.getElementById(this.provinceListID).options;
		var selectedIndex = document.getElementById(this.provinceListID).selectedIndex;
		var provinceCode = optionList[selectedIndex].value;
		this.listCity(provinceCode);
	},
	listCity : function (code) {
		var index = 0;
		for (var i = 0; i < this.data.length; i++) {
			if (this.data[i].code == code) {
				index = i;
				break;
			}
		}
		var cityData = this.data[index].city;
		document.getElementById(this.cityListID).innerHTML = "";
		for (var i = 0; i < cityData.length; i++) {
			var newOption = document.createElement("option");
			var newText = document.createTextNode(cityData[i].name);
			newOption.setAttribute("value", cityData[i].code);
			newOption.setAttribute("name", this.cityOptionName);
			newOption.appendChild(newText);
			document.getElementById(this.cityListID).appendChild(newOption);
		}
	},
	provinceCodeGetCity : function (code,json) {
		this.cityListID = json.cityListID;
		this.cityOptionName = json.cityOptionName;
		var index = 0;
		for (var i = 0; i < this.data.length; i++) {
			if (this.data[i].code == code) {
				index = i;
				break;
			}
		}
		var cityData = this.data[index].city;
		document.getElementById(this.cityListID).innerHTML = "";
		for (var i = 0; i < cityData.length; i++) {
			var newOption = document.createElement("option");
			var newText = document.createTextNode(cityData[i].name);
			newOption.setAttribute("value", cityData[i].code);
			newOption.setAttribute("name", this.cityOptionName);
			newOption.appendChild(newText);
			document.getElementById(this.cityListID).appendChild(newOption);
		}
	},
    showProvinceAndCityNameByCode : function(pcode,ccode){
        var pName = "";
        var cName = "";
        for(var i=0;i<this.data.length;i++){
            if(pcode == this.data[i].code){
                pName = this.data[i].name;
                for(var j=0;j<this.data[i].city.length;j++){
                    if(ccode == this.data[i].city[j].code){
                        cName = this.data[i].city[j].name;
                    }
                }
                break;
            }
        }
        return (pName +" "+ cName);
    }
}

var FormValidate = {
	config : null,
	validate : function (config) { //{form:object,msgsort:string}
		this.config = config;
		var returnVal = true;
		var formEle = this.config.form.elements;
		var errormsg = "";
		for (var i = 0; i < formEle.length; i++) {
			try {
				formEle[i].focus();
			} catch (e) {
				continue
			}
			if (this.config.isReduct && formEle[i].parentNode.parentNode.parentNode.style.display == 'none')
				continue;
			if (/FVEmpty/.test(formEle[i].className) && formEle[i].value.length == 0) {
				errormsg = formEle[i].title;
				this.showErrorMsg({
					msg : errormsg,
					ele : formEle[i],
					empty : 1
				});
				formEle[i].focus();
				return false;
			} else if (/FVMoney/.test(formEle[i].className)) {
				if (!/^\d+(\.\d{1,2})?$/.test(formEle[i].value) && "" != formEle[i].value) {
					errormsg = formEle[i].title + "格式不正确，正确格式参考：100/100.01/100.1";
					this.showErrorMsg({
						msg : errormsg,
						ele : formEle[i]
					});
					formEle[i].select();
					formEle[i].focus();
					return false;
				}
			} else if (/FVEmail/.test(formEle[i].className)) {
				if (!/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/gi.test(formEle[i].value) && "" != formEle[i].value) {
					errormsg = formEle[i].title + "格式不正确";
					this.showErrorMsg({
						msg : errormsg,
						ele : formEle[i]
					});
					formEle[i].select();
					formEle[i].focus();
					return false;
				}
			} else if (/FVWebsite/.test(formEle[i].className)) {
				if (!/^((https:\/\/)|(http:\/\/))(\S*\.){1,}(com|cn|org|net|hk|cc|biz|name|in|mobi|ac|tw)$/gi.test(formEle[i].value) && "" != formEle[i].value) {
					errormsg = formEle[i].title + "格式不正确，正确格式参考：http://www.tenpay.com";
					this.showErrorMsg({
						msg : errormsg,
						ele : formEle[i]
					});
					formEle[i].select();
					formEle[i].focus();
					return false;
				}
			} else if (/FVFasteningTel/.test(formEle[i].className)) {
				if (!/^\d{3,4}-\d{7,8}(-\d{3,6})?$/.test(formEle[i].value) && "" != formEle[i].value) {
					errormsg = formEle[i].title + "格式不正确，正确格式参0755-86013388-8888";
					this.showErrorMsg({
						msg : errormsg,
						ele : formEle[i]
					});
					formEle[i].select();
					formEle[i].focus();
					return false;
				}
			} else if (/FVPost/.test(formEle[i].className)) {
				if (!/^\d{6}$/gi.test(formEle[i].value) && "" != formEle[i].value) {
					errormsg = formEle[i].title + "格式不正确";
					this.showErrorMsg({
						msg : errormsg,
						ele : formEle[i]
					});
					formEle[i].select();
					formEle[i].focus();
					return false;
				}
			} else if (/FVMobilTel/.test(formEle[i].className)) {
				if (!/^\d{11}$/gi.test(formEle[i].value) && "" != formEle[i].value) {
					errormsg = formEle[i].title + "格式不正确";
					this.showErrorMsg({
						msg : errormsg,
						ele : formEle[i]
					});
					formEle[i].select();
					formEle[i].focus();
					return false;
				}
			} else if (/FVFile/.test(formEle[i].className)) {
				var classarr = formEle[i].className.split(" ");
				var tempclass = "";
				for (var j = 0; j < classarr.length; j++) {
					if (/FVFile/.test(classarr[j])) {
						tempclass = classarr[j];
						break;
					}
				}
				var regexp = tempclass.split("|")[0] + "|";
				var postfixName = tempclass.replace(regexp, "");
				var gexp = new RegExp("^.+\." + postfixName + "$", "gi");
				if (!gexp.test(formEle[i].value) && "" != formEle[i].value) {
					errormsg = formEle[i].title + "格式不正确";
					this.showErrorMsg({
						msg : errormsg,
						ele : formEle[i]
					});
					try {
						formEle[i].select();
						formEle[i].focus();
					} catch (e) {}
					return false;
				}
				
			} else if (/FVDatexxxxxxxx/.test(formEle[i].className)) {
				if (!/^\d{8}$/gi.test(formEle[i].value) && "" != formEle[i].value) {
					errormsg = formEle[i].title + "格式不正确,正确格式参考：20110101";
					this.showErrorMsg({
						msg : errormsg,
						ele : formEle[i]
					});
					formEle[i].select();
					formEle[i].focus();
					return false;
				} else if (/FVDateSort/.test(formEle[i].className) && "" != formEle[i].value) {
					var classarr = formEle[i].className.split(" ");
					var tempclass = "";
					for (var j = 0; j < classarr.length; j++) {
						if (/FVDateSort/.test(classarr[j])) {
							tempclass = classarr[j];
							break;
						}
					}
					var maxVal = formEle[tempclass.split("|")[2]].value;
					var minVal = formEle[tempclass.split("|")[1]].value;
					if (0 < (minVal - maxVal)) {
						errormsg = "起始时间已早于结束时间";
						this.showErrorMsg({
							msg : errormsg,
							ele : formEle[i]
						});
						formEle[i].select();
						formEle[i].focus();
						return false;
					}
				}
			} else if (/FVDatexxxx-xx-xx/.test(formEle[i].className) && "" != formEle[i].value) {
				if (!/^\d{4}-\d{2}-\d{2}$/gi.test(formEle[i].value)) {
					errormsg = formEle[i].title + "格式不正确,正确格式参考：2011-01-01";
					this.showErrorMsg({
						msg : errormsg,
						ele : formEle[i]
					});
					formEle[i].select();
					formEle[i].focus();
					return false;
				} else if (/FVDateSort/.test(formEle[i].className)) {
					var classarr = formEle[i].className.split(" ");
					var tempclass = "";
					for (var j = 0; j < classarr.length; j++) {
						if (/FVDateSort/.test(classarr[j])) {
							tempclass = classarr[j];
							break;
						}
					}
					var maxVal = formEle[tempclass.split("|")[2]].value.replace(/-/g, "");
					var minVal = formEle[tempclass.split("|")[1]].value.replace(/-/g, "");
					if (0 < (minVal - maxVal)) {
						errormsg = "起始时间已早于结束时间";
						this.showErrorMsg({
							msg : errormsg,
							ele : formEle[i]
						});
						formEle[i].select();
						formEle[i].focus();
						return false;
					}
				}
			} else if (/FVDatexxxx\/xx\/xx/.test(formEle[i].className)) {
				if (!/^\d{4}\/\d{2}\/\d{2}$/gi.test(formEle[i].value) && "" != formEle[i].value) {
					errormsg = formEle[i].title + "格式不正确,正确格式参考：2011/01/01";
					this.showErrorMsg({
						msg : errormsg,
						ele : formEle[i]
					});
					formEle[i].select();
					formEle[i].focus();
					return false;
				} else if (/FVDateSort/.test(formEle[i].className) && "" != formEle[i].value) {
					var classarr = formEle[i].className.split(" ");
					var tempclass = "";
					for (var j = 0; j < classarr.length; j++) {
						if (/FVDateSort/.test(classarr[j])) {
							tempclass = classarr[j];
							break;
						}
					}
					var maxVal = formEle[tempclass.split("|")[2]].value.replace(/\//g, "");
					var minVal = formEle[tempclass.split("|")[1]].value.replace(/\//g, "");
					if (0 < (minVal - maxVal)) {
						errormsg = "起始时间已早于结束时间";
						this.showErrorMsg({
							msg : errormsg,
							ele : formEle[i]
						});
						formEle[i].select();
						formEle[i].focus();
						return false;
					}
				}
			} else if (/FVDateyyyy-mm-ddHMS/.test(formEle[i].className)) {
				if (!/^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/gi.test(formEle[i].value) && "" != formEle[i].value) {
					errormsg = formEle[i].title + "格式错误,请参照：yyyy-mm-dd hh:mm:ss";
					this.showErrorMsg({
						msg : errormsg,
						ele : formEle[i]
					});
					formEle[i].select();
					formEle[i].focus();
					return false;
				}
			} else if (/FVDateyyyymmddHMS/.test(formEle[i].className)) {
				if (!/^\d{8}\s\d{2}:\d{2}:\d{2}$/gi.test(formEle[i].value) && "" != formEle[i].value) {
					errormsg = formEle[i].title + "格式错误,请参照：yyyymmdd hh:mm:ss";
					this.showErrorMsg({
						msg : errormsg,
						ele : formEle[i]
					});
					formEle[i].select();
					formEle[i].focus();
					return false;
				}
			}
		}
		//校验日期小时分秒
		for (var i = 0; i < formEle.length; i++) {
			if (/FVDateHms/.test(formEle[i].className)) {
				var classSet = [];
				classSet = formEle[i].className.split(" ");
				var date = "";
				var hms = "";
				var datehms = "";
				for (var j = 0; j < classSet.length; j++) {
					if (/FVDateHms/.test(classSet[j])) {
						date = classSet[j].split("|")[1];
						hms = classSet[j].split("|")[2];
						datehms = classSet[j].split("|")[3];
						break;
					}
				}
				if ("" == formEle[date].value) {
					errormsg = "请填写" + formEle[date].title;
					this.showErrorMsg({
						msg : errormsg,
						ele : formEle[date]
					});
					formEle[date].focus();
					return false;
				} else if (!/^\d{8}$/.test(formEle[date].value)) {
					errormsg = "格式不正确，格式请参考20110101";
					this.showErrorMsg({
						msg : errormsg,
						ele : formEle[date]
					});
					formEle[date].focus();
					return false;
				} else if ("" == formEle[hms].value) {
					errormsg = "请填写" + formEle[hms].title;
					this.showErrorMsg({
						msg : errormsg,
						ele : formEle[hms]
					});
					formEle[hms].focus();
					return false;
				} else if (!/^\d{2}:\d{2}:\d{2}$/.test(formEle[hms].value)) {
					errormsg = "格式不正确，格式请参考00:00:00";
					this.showErrorMsg({
						msg : errormsg,
						ele : formEle[hms]
					});
					formEle[hms].focus();
					return false;
				} else {
					formEle[datehms].value = formEle[date].value + " " + formEle[hms].value;
				}
			}
		}
		//校验密码
		if ("object" == typeof(this.config.pwd)) {
			if (this.config.pwd.passowdControl.isEmpty()) {
				errormsg = "密码";
				this.showErrorMsg({
					msg : errormsg,
					ele : document.getElementById(this.config.pwd.config.focusid),
					empty : 1
				});
				document.getElementById(this.config.pwd.config.focusid).SetEditFocus();
				return false;
			}
		}
		return returnVal;
	},
	msgBox : null,
	showErrorMsg : function (json) {
		if (this.msgBox) {
			this.msgBox.parentNode.removeChild(this.msgBox);
		}
		if ("" == this.config.msgsort || "right" == this.config.msgsort) {
			this.msgBox = document.createElement("span");
			if (json.ele.nextSibling) {
				json.ele.parentNode.insertBefore(this.msgBox, json.ele.nextSibling);
			} else {
				json.ele.parentNode.appendChild(this.msgBox);
			}
		} else if ("bottom" == this.config.msgsort) {
			this.msgBox = document.createElement("div");
			json.ele.parentNode.appendChild(this.msgBox);
		}
		this.msgBox.className = this.config.emsgcalss;
		if (1 == json.empty) {
			this.msgBox.innerHTML = "请填写" + json.msg;
			if ("select-one" == json.ele.type || "file" == json.ele.type) {
				this.msgBox.innerHTML = "??请选择" + json.msg;
			}
		} else {
			this.msgBox.innerHTML = json.msg;
		}
	},
	hideErrorMsg : function () {
		try {
			this.msgBox.parentNode.removeChild(this.msgBox);
		} catch (e) {}
	}
}
function PASSWORD() {
	this.passowdControl = null;
	this.config = null;
	this.set = function (config) { //{wrap:'',elemensName:'',width:'',height:'',tabindex:0,focusid:'',tmid:''}
		this.config = config;
		var pwdConfig = {
			parentNode : this.config.wrap, //密码控件存放的ID
			ctrlID : this.config.focusid, //密码取获焦点时的ID，用于表单验证时定焦点
			submitName : this.config.elemensName, //post或get到cgi时，密码框的name
			w : this.config.width, //显示宽底
			h : this.config.height, //显示高度
			tabIndex : this.config.tabindex,
			showLost : false,
			tipNode : "", //错误提示ID
			ctrlEvn : null //replaceDeductApply.submitData//光标在密码输入框时，回车事件
		}
		this.passowdControl = new TFL.PC();
		this.passowdControl.show(pwdConfig);
	}
	this.get = function (json) { //{form:obj,encryptType:0}
		var pwdElement = json.form.elements[this.config.elemensName];
		var seed = document.getElementById(this.config.tmid).value.substr(0, 20);
		switch (json.encryptType) {
		case 0:
			var strongPwd = this.passowdControl.getRsaPasswd2(seed);
			pwdElement.value = strongPwd.substr(0, 20) + strongPwd.substr(strongPwd.length - 256, 256);
			break;
		case 1:
			pwdElement.value = this.passowdControl.getStrongPasswd(seed);
			break;
		case 2:
			var strongPwd = this.passowdControl.getStrongPasswd(seed);
			pwdElement.value = strongPwd.substr(0, 20) + strongPwd.substr(strongPwd.length - 256, 256);
			break;
		}
		return pwdElement.value;
	}
	this.getLength = function () {
		return this.passowdControl.getLen();
	}
}
function AJAX() {
	this.xmlHttp = null;
	this.config = null;
	this.createXmlHttpRequest = function () {
		if (window.XMLHttpRequest) {
			this.xmlHttp = new XMLHttpRequest();
		} else if (window.ActiveXObject) {
			this.xmlHttp = new ActiveXObject("Microsoft.XMLHttp");
		}
	}
	this.send = function (json) { //{byform:0,form:form,paraAndVal:[{name:"date",value:new Date()}]}
		this.config = json;
		this.url = this.config.url;
		this.createXmlHttpRequest();
		var para = "";
		try {
			for (var i = 0; i < json.paraAndVal.length; i++) {
				para += json.paraAndVal[i].name + "=" + json.paraAndVal[i].value + "&";
			}
		} catch (e) {}
		if (1 == json.byform && "object" == typeof(json.form)) {
			if ("" != this.config.url) {
				this.url = this.config.url;
			} else {
				this.url = json.form.action;
			}
			para += this.getFormParamAndVal(json.form).replace('order_type', 'ordertype');
		}
		if (this.config.urlHash) {
			para = this.config.urlHash.replace(/^#/, "");
		}
		if ("post" == this.config.method) {
			this.xmlHttp.open("post", this.url, true); //与服务端建立连接(请求方式post或get，地址,true表示异步)
			this.xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			this.xmlHttp.send(para); //发送请求
		} else {
			this.url += "?" + para;
			this.xmlHttp.open("get", this.url, true); //与服务端建立连接(请求方式post或get，地址,true表示异步)
			this.xmlHttp.send(null); //发送请求
		}
		this.urlHash = para;
		var $this = this;
		this.xmlHttp.onreadystatechange = function () {
			if ($this.xmlHttp.readyState == 4) {
				if ($this.xmlHttp.status == 200 || $this.xmlHttp.status == 0) {
					$this.config.callBack($this.xmlHttp);
					$this.hideAjaxLoading();
				} else {
					switch ($this.xmlHttp.status) {
					case 404:
						alert("状态码：" + $this.xmlHttp.status + " ,找不到请求地址！");
						break;
					default:
						alert("状态码：" + $this.xmlHttp.status + " ,请求未知错误！");
					}
				}
			}
		}
		this.showAjaxLoading();
	}
	this.submitObj = null;
	this.ajaxLoading = null;
	this.submitBtn = null;
	this.showAjaxLoading = function () {
		try {
			//指定提交btn
			if (this.config.submitObject && "object" == typeof(this.config.submitObject)) {
				this.submitBtn = this.config.submitObject;
				this.tempLoadingbarParentNode = this.submitBtn.parentNode;
				this.tempLoadingbarHTML = this.submitBtn.parentNode.innerHTML;
				this.submitBtn.parentNode.innerHTML = "<img src='/images/load.gif' style='position:relative;top:4px;' />" + "正在为您提交数据，请稍候……";
				return;
			}
			//默认提交btn
			var elements = this.config.form.elements;
			for (var i = 0; i < elements.length; i++) {
				if ("submit" == elements[i].type) {
					this.submitBtn = elements[i];
					this.tempLoadingbarParentNode = this.submitBtn.parentNode;
					this.tempLoadingbarHTML = elements[i].parentNode.innerHTML;
					this.submitBtn.parentNode.innerHTML = "<img src='/images/load.gif' style='position:relative;top:4px;' />" + "正在为您提交数据，请稍候……";
					break;
				}
			}
		} catch (e) {}
	}
	this.hideAjaxLoading = function () {
		try {
			this.tempLoadingbarParentNode.innerHTML = this.tempLoadingbarHTML;
		} catch (e) {}
	}
	this.urlHash = "";
	this.getFormParamAndVal = function (form) {
		var returnVal = "";
		var cName = "";
		var rName = "";
		var eles = form.elements;
		for (var i = 0; i < eles.length; i++) {
			if (eles[i].name && "" != eles[i].name) {
				switch (eles[i].type) {
				case "checkbox":
					if (cName == eles[i].name) {
						continue;
					}
					cName = eles[i].name;
					var cboxlists = form.elements(eles[i].name);
					var cbxVal = "";
					for (var j = 0; j < cboxlists.length; j++) {
						if (true == cboxlists[j].checked) {
							cbxVal += cboxlists[j].value + "|";
						}
					}
					cbxVal = cbxVal.slice(0, cbxVal.length - 1);
					if ("" != cbxVal) {
						returnVal += eles[i].name + "=" + cbxVal + "&";
					}
					break;
				case "radio":
					if (rName == eles[i].name) {
						continue;
					}
					rName = eles[i].name;
					var rlists = form.elements(eles[i].name);
					var cbxVal = "";
					for (var j = 0; j < rlists.length; j++) {
						if (true == rlists[j].checked) {
							returnVal += eles[i].name + "=" + rlists[j].value + "&";
						}
					}
					break;
				default:
					returnVal += eles[i].name + "=" + eles[i].value + "&";
				}
			}
		}
		return returnVal.slice(0, returnVal.length - 1);
	}
	this.getXMLNodeValue = function (json) { //{xml:,tagName:'',index}
		var returnVal = [];
		try {
			var lists = json.xml.getElementsByTagName(json.tagName);
			for (var i = 0; i < lists.length; i++) {
				returnVal.push(lists[i].firstChild.data);
			}
		} catch (e) {}
		//if(0 == returnVal.length){returnVal = ["--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--"]}
		return returnVal;
	}
	this.getXMLIndexNodeValue = function (json) { //{xml:,tagName:'',index}
		var returnVal = "";
		try {
			var lists = json.xml.getElementsByTagName(json.tagName);
			returnVal = json.xml.getElementsByTagName(json.tagName)[json.index].firstChild.data;
		} catch (e) {
			returnVal = "--";
		}
		return returnVal;
	}
	this.getXMLAttrValue = function (json) { //{xml,tagName:,attrName:''}
		var returnVal = [];
		try {
			var lists = json.xml.getElementsByTagName(json.tagName);
			for (var i = 0; i < lists.length; i++) {
				returnVal.push(lists[i].getAttribute(json.attrName));
			}
		} catch (e) {
			returnVal.push("--")
		}
		//if(0 == returnVal.length){returnVal = ["--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--","--"]}
		return returnVal;
	}
	this.filterXMLNodeValue = function (val) {
		var returnVal = "";
		if (undefinded == val) {
			returnVal = ""
		}
		return returnVal;
	}
}
var XMLDOCUMENT = {
	xml : null,
	init : function (xml) {
		this.xml = xml;
	},
	getNodeValue : function (tagName, array) {
		var returnVal = "";
		var lists = this.xml.getElementsByTagName(tagName);
		if ("array" == array) {
			var returnVal = [];
			for (var i = 0; i < lists.length; i++) {
				try {
					returnVal.push(this.xml.getElementsByTagName(tagName)[i].firstChild.data);
				} catch (e) {}
			}
			return returnVal;
		}
		
		if (1 == lists.length) {
			try {
				returnVal = this.xml.getElementsByTagName(tagName)[0].firstChild.data;
			} catch (e) {}
		} else {
			var returnVal = [];
			for (var i = 0; i < lists.length; i++) {
				try {
					returnVal.push(this.xml.getElementsByTagName(tagName)[i].firstChild.data);
				} catch (e) {}
			}
			return returnVal;
		}
		return returnVal;
	},
	getNodeAttrValue : function (tagName, attrName) {
		var returnVal = "";
		var lists = this.xml.getElementsByTagName(tagName);
		if (1 == lists.length) {
			try {
				returnVal = this.xml.getElementsByTagName(tagName)[0].getAttribute(attrName);
			} catch (e) {}
		} else {
			var returnVal = [];
			for (var i = 0; i < lists.length; i++) {
				try {
					returnVal.push(this.xml.getElementsByTagName(tagName)[i].getAttribute(attrName));
				} catch (e) {}
			}
			return returnVal;
		}
		return returnVal;
	}
}
function XMLDocument() {
	this.xml = null;
	this.init = function (xml) {
		this.xml = xml;
	}
	this.getNodeValue = function (tagName, array) {
		var returnVal = "";
		var lists = this.xml.getElementsByTagName(tagName);
		if ("array" == array) {
			var returnVal = [];
			for (var i = 0; i < lists.length; i++) {
				try {
					returnVal.push(this.xml.getElementsByTagName(tagName)[i].firstChild.data);
				} catch (e) {}
			}
			return returnVal;
		}
		
		if (1 == lists.length) {
			try {
				returnVal = this.xml.getElementsByTagName(tagName)[0].firstChild.data;
			} catch (e) {}
		} else {
			var returnVal = [];
			for (var i = 0; i < lists.length; i++) {
				try {
					returnVal.push(this.xml.getElementsByTagName(tagName)[i].firstChild.data);
				} catch (e) {}
			}
			return returnVal;
		}
		return returnVal;
	}
	this.getNodeAttrValue = function (tagName, attrName) {
		var returnVal = "";
		var lists = this.xml.getElementsByTagName(tagName);
		if (1 == lists.length) {
			try {
				returnVal = this.xml.getElementsByTagName(tagName)[0].getAttribute(attrName);
			} catch (e) {}
		} else {
			var returnVal = [];
			for (var i = 0; i < lists.length; i++) {
				try {
					returnVal.push(this.xml.getElementsByTagName(tagName)[i].getAttribute(attrName));
				} catch (e) {}
			}
			return returnVal;
		}
		return returnVal;
	}
}
//获取url参数
String.prototype.requestQueryString = function (name) {
	var reg = new RegExp("(^|\\?|&|#)" + name + "=([^&#]*)");
	var r = [];
	if (r = this.match(reg))
		return unescape(r[2]);
	return null;
}
var TABLE = {
	splitTrByColor : function (json) { //{tableid:"",trClassName:""}
		var lists = document.getElementById(json.tableid).getElementsByTagName("tr");
		for (var i = 0; i < lists.length; i++) {
			if (0 == i % 2) {
				lists[i].className = json.trClassName;
			}
		}
	}
}
//对话框
function Dialog() {
	this.config = null;
	this.dialog = null;
	this.listtype = 0;
	this.title = null;
	this.cntbox = null;
	this.mask = null;
	this.maskFrame = null;
	this.btnbar = null;
	this.btnclose = null;
	this.show = function (config) { //{title:"温馨提示",msg:"你好！",width:400,height:150,align:"",valign:"middle",icon:"4",btn:[{text:"确定",clickevent:clickevent},{text:"取消",clickevent:clickevent}]}
		this.config = config;
		this.listtype = 0;
		this.create();
		
		//设置默认焦点
		this.setFocus();
	}
	this.load = function (config) { //{title:"温馨提示",msg:"你好！",width:400,height:300,url:"url.html",btn:[{text:"确定",clickevent:submitData},{text:"取消",clickevent:clickevent}]}
		this.config = config;
		this.listtype = 1;
		this.create();
		
		//设置默认焦点
		this.setFocus();
	}
	this.setFocus = function () {
		try {
			if (this.config.btn.length && this.config.btn.length >= 1) {
				this.btnbar.getElementsByTagName("input")[0].focus();
			} else {
				this.btnclose.focus();
			}
		} catch (e) {}
	}
	this.create = function () {
		var dialog = document.createElement("div");
		this.dialog = dialog;
		dialog.style.cssText = "border:1px solid #377479;width:" + this.config.width + "px;height:" + this.config.height + "px;position:absolute;z-index:100;background:#FFF";
		var title;
		if (this.config.title) {
			title = document.createElement("h2");
			this.title = title;
			title.style.cssText = "cursor:move;padding:0 8px;position:relative;margin:0;font-size:14px;;height:30px;line-height:30px;background:#377479;color:#FFF";
			title.innerHTML = this.config.title;
		}
		var btnclose = document.createElement("a");
		this.btnclose = btnclose;
		var addrPrefix = window.location.href.charAt(4) == "s" ? "https://mch.tenpay.com" : "http://mch.tenpay.com";
		btnclose.style.cssText = "display:block;padding:0;margin:0;width:45px;height:17px;line-height:16px;position:absolute;text-align:center;right:8px;top:0;background:url(" + addrPrefix + "/images/btn_close.jpg) no-repeat";
		btnclose.innerHTML = " ";
		btnclose.href = "javascript:;";
		var $this = this;
		btnclose.onmouseover = function () {
			this.style.background = "url(" + addrPrefix + "/images/btn_close_on.jpg) no-repeat";
		}
		btnclose.onmouseout = function () {
			this.style.background = "url(" + addrPrefix + "/images/btn_close.jpg) no-repeat";
		}
		btnclose.onclick = function () {
			$this.close()
		};
		if (this.listtype == 0) { //HTML形式显示
			var boxw = (this.config.width - 8 * 2);
			var boxh = (this.config.height - 8 * 2 - 30 - 31);
			boxw = boxw < 0 ? 0 : boxw;
			boxh = boxh < 0 ? 0 : boxh;
			var cntbox = document.createElement("div");
			this.cntbox = cntbox;
			var iconindex = this.config.icon;
			iconindex = !iconindex ? "0" : iconindex.toString();
			var fontc = "";
			var imgsrc = "";
			switch (iconindex) {
			case "0":
				fontc = "#000";
				break;
			case "1":
				fontc = "#F00";
				imgsrc = "/images/error.jpg";
				break;
			case "2":
				fontc = "#333";
				imgsrc = "/images/success.jpg";
				break;
			case "3":
				fontc = "#333";
				imgsrc = "/images/alarm.jpg";
				break;
			case "4":
				fontc = "#333";
				imgsrc = "/images/tip.jpg";
				break;
			case "5":
				fontc = "#000";
				imgsrc = "/images/error.jpg";
				break;
			case "6":
				fontc = "#000";
				imgsrc = "/images/success.jpg";
				break;
			}
			if (this.config.fontc) {
				fontc = this.config.fontc;
			}
			if (!this.config.align) {
				this.config.align = "left";
			}
			if (!this.config.valign) {
				this.config.valign = "middle";
			}
			if ("0" == iconindex) { //无图标提示
				cntbox.innerHTML = "<table style='width:" + boxw + "px;height:" + boxh + "px;'><tr><td align='" + this.config.align + "' valign='" + this.config.valign + "' style='color:" + this.config.fontc + "'>" + this.config.msg + "</td></tr></table>";
			} else {
				cntbox.innerHTML = "<table style='width:" + boxw + "px;height:" + boxh + "px;'><tr><td align='" + this.config.align + "' valign='" + this.config.valign + "' style='width:32px;padding:0 6px;'><img src='../js/" + imgsrc + "' width='32' height='34'/></td><td align='" + this.config.align + "' valign='" + this.config.valign + "' style='color:" + fontc + "'>" + this.config.msg + "</td></tr></table>";
			}
		} else { //iframe形式显示
			var cntbox = document.createElement("iframe");
			this.cntbox = cntbox;
			cntbox.name = "dialog_iframe";
			cntbox.src = this.config.url;
			cntbox.style.padding = "0";
			cntbox.style.margin = "0";
			cntbox.setAttribute("frameborder", "0");
			var boxw = (this.config.width - 8 * 2);
			var boxh = (this.config.height - 8 * 2 - 30 - 31);
			boxw = boxw < 0 ? 0 : boxw;
			boxh = boxh < 0 ? 0 : boxh;
		}
		cntbox.style.padding = "8px"
			try {
				if (this.config.btn && this.config.btn.length > 0) { //指定按钮
					var btnbar = document.createElement("div");
					this.btnbar = btnbar;
					btnbar.style.cssText = "background:#E7E8E9;text-align:right;padding:3px 8px;height:25px;";
					for (var i = 0; i < this.config.btn.length; i++) {
						var btn = document.createElement("input");
						btn.type = "button";
						btn.value = this.config.btn[i].text;
						btn.style.cssText = "height:25px;line-height:22px;padding:0 5px;margin:0;margin-left:10px;";
						var $this = this;
						if (!this.config.btn[i].clickToDo) {
							btn.onclick = function () {
								$this.close()
							};
						} else {
							(function (index) {
								btn.onclick = function () {
									$this.config.btn[index].clickToDo();
									if (1 != $this.config.btn[index].closeDialog) { //.closeDialog != 1 则关闭对话框
										$this.close();
									}
								}
							})(i);
						}
						btnbar.appendChild(btn);
					}
				} else {
					var boxw = (this.config.width - 8 * 2);
					var boxh = this.config.icon == "5" || this.config.icon == "6" ? this.config.height - 8 * 2 : (this.config.height - 8 * 2 - 30);
					boxw = boxw < 0 ? 0 : boxw;
					boxh = boxh < 0 ? 0 : boxh;
				}
			} catch (e) {}
			
			cntbox.style.width = boxw + "px";
		cntbox.style.height = boxh + "px";
		cntbox.style.overflow = "auto";
		cntbox.style.overflowX = "hidden";
		cntbox.style.background = "none";
		cntbox.style.fontSize = "12px";
		cntbox.style.lineHeight = "18px";
		if (title) {
			title.appendChild(btnclose);
			dialog.appendChild(title);
		}
		dialog.appendChild(cntbox);
		try {
			if (this.config.btn && this.config.btn.length > 0) {
				dialog.appendChild(btnbar);
			}
		} catch (e) {}
		document.body.appendChild(dialog);
		this.adjustPosition();
		this.drag();
	}
	this.adjustPosition = function () { //添加mask 与 对话框居中显示
		var mask = document.createElement("div");
		this.mask = mask;
		mask.style.zIndex = 99;
		mask.style.position = "absolute";
		mask.style.width = "100%";
		mask.style.background = "#000";
		//window.setTimeout(function(){mask.style.background = "#000";},0);
		var webcw = document.documentElement.clientWidth;
		var websh = document.documentElement.scrollHeight;
		var webch = document.documentElement.clientHeight;
		var scrollt = document.documentElement.scrollTop;
		var maskh = Math.max(websh, webch); //取网页高与可见高的最大值
		mask.style.height = maskh + "px";
		mask.style.left = "0";
		mask.style.top = "0";
		document.body.appendChild(mask);
		var maskFrame = document.createElement("iframe");
		this.maskFrame = maskFrame;
		maskFrame.style.position = "absolute";
		maskFrame.style.left = "0";
		maskFrame.style.top = "0";
		maskFrame.style.width = "100%";
		maskFrame.style.height = maskh + "px";
		maskFrame.style.zIndex = 98;
		document.body.appendChild(maskFrame);
		
		var leftd = parseInt((webcw - this.dialog.offsetWidth) / 2, 10);
		var topd = parseInt((webch - this.dialog.offsetHeight) / 2, 10);
		leftd = leftd < 0 ? 0 : leftd;
		topd = topd < 0 ? 0 : topd;
		this.dialog.style.left = leftd + "px";
		this.dialog.style.top = topd + scrollt + "px";
		this.setOpacity(this.maskFrame, 0);
		this.setOpacity(this.mask, 0.2);
		
	}
	this.close = function () { //关闭对话框
		try {
			this.maskFrame.parentNode.removeChild(this.maskFrame);
			this.mask.parentNode.removeChild(this.mask);
			this.dialog.parentNode.removeChild(this.dialog);
		} catch (e) {}
		if (this.config.closeToDo) {
			this.config.closeToDo();
		}
		return false;
	}
	this.drag = function () { //拖拽对话框
		var $this = this;
		try {
			this.title.onmousedown = function (event) {
				var event = event || window.event;
				var initX = event.clientX;
				var initY = event.clientY;
				var dialogL = $this.dialog.offsetLeft;
				var dialogT = $this.dialog.offsetTop;
				document.onmousemove = function (event) {
					var event = event || window.event;
					var mouseX = event.clientX;
					var mouseY = event.clientY;
					$this.dialog.style.left = mouseX - initX + dialogL + "px";
					$this.dialog.style.top = mouseY - initY + dialogT + "px";
				}
				document.onmouseup = function () {
					document.onmousemove = function () {};
				}
			}
		} catch (e) {}
	}
	this.setOpacity = function (node, val) { //设置mask的不透明度
		if (document.all) {
			node.style.filter = "alpha(opacity=" + val * 100 + ")";
		} else {
			node.style.opacity = val;
		}
	}
}
function DATE() {
	this.config = null;
	this.yearAndMonthText = null;
	this.list = null;
	this.dayTable = null;
	this.dayTbody = null;
	this.year_init = null;
	this.month_init = null;
	this.day_init = null;
	this.year = null;
	this.month = null;
	this.day = null;
	this.yearMonthDay = null;
	this.btnClickFlag = false;
	this.show = function (config) {
		this.config = config;
		this.createList();
	}
	this.getElementViewLeft = function (element) {
		　　　　var actualLeft = element.offsetLeft;
		　　　　var current = element.offsetParent;
		
		　　　　while(current !== null) {
			　　　　　　actualLeft += current.offsetLeft;
			　　　　　　current = current.offsetParent;
			　　　　
		}
		
		　　　　if(document.compatMode == "BackCompat") {
			　　　　　　var elementScrollLeft = document.body.scrollLeft;
			　　　　
		}
		else {
			　　　　　　var elementScrollLeft = document.documentElement.scrollLeft;
			　　　　
		}
		
		　　　　return actualLeft - elementScrollLeft;
		　　
	}
	this.getElementViewTop = function (element) {
		　　　　var actualTop = element.offsetTop;
		　　　　var current = element.offsetParent;
		
		　　　　while(current !== null) {
			　　　　　　actualTop += current.offsetTop;
			　　　　　　current = current.offsetParent;
			　　　　
		}
		　　　　var elementScrollTop = document.documentElement.scrollTop;
		
		　　　　return actualTop;
		　　
	}
	this.createList = function () {
		if ("" == this.config.saveAt.parentNode.style.position) {
			this.config.saveAt.parentNode.style.position = "relative";
		}
		var list = document.createElement("div");
		this.list = list;
		list.style.cssText = "font-size:14px;height:204px;width:auto;background:#FFF;border:1px solid #CCC;position:absolute;z-index:500;left:" + this.getElementViewLeft(this.config.saveAt) + "px;top:" + (this.getElementViewTop(this.config.saveAt) + this.config.saveAt.offsetHeight) + "px;";
		
		var $this = this;
		var dayTable = document.createElement("table");
		this.dayTable = dayTable;
		dayTable.style.cssText = "width:160px;font-size:12px;border-collapse:collapse";
		var yearAndMonthlist = document.createElement("caption");
		yearAndMonthlist.style.cssText = "font-family:Verdana,Geneva,sans-serif;height:25px;line-height:25px;padding:0;margin:0;text-align:left;";
		
		var btnPrevYear = document.createElement("a"); //上一年
		btnPrevYear.href = "###";
		btnPrevYear.innerHTML = "<<";
		btnPrevYear.onclick = function () {
			$this.prevYear()
		};
		btnPrevYear.style.cssText = "height:25px;width:25px;text-align:center;display:block;float:left;color:#333;text-decoration:none";
		yearAndMonthlist.appendChild(btnPrevYear);
		
		var btnPrevMonth = document.createElement("a"); //上一月
		btnPrevMonth.href = "###";
		btnPrevMonth.innerHTML = "<";
		btnPrevMonth.onclick = function () {
			$this.prevMonth()
		};
		btnPrevMonth.style.cssText = "height:25px;width:15px;text-align:center;display:block;float:left;color:#333;text-decoration:none";
		yearAndMonthlist.appendChild(btnPrevMonth);
		
		var yearAndMonthText = document.createElement("span");
		this.yearAndMonthText = yearAndMonthText;
		yearAndMonthText.style.cssText = "height:25px;width:80px;overflow:hidden;line-height:26px;text-align:center;display:block;float:left";
		yearAndMonthlist.appendChild(yearAndMonthText);
		
		var btnNextMonth = document.createElement("a"); //下一月
		btnNextMonth.href = "###";
		btnNextMonth.innerHTML = ">";
		btnNextMonth.onclick = function () {
			$this.nextMonth()
		};
		btnNextMonth.style.cssText = "height:25px;width:15px;text-align:center;display:block;float:left;color:#333;text-decoration:none";
		yearAndMonthlist.appendChild(btnNextMonth);
		
		var btnNextYear = document.createElement("a"); //下一年
		btnNextYear.href = "###";
		btnNextYear.innerHTML = ">>";
		btnNextYear.onclick = function () {
			$this.nextYear()
		};
		btnNextYear.style.cssText = "height:25px;width:25px;text-align:center;display:block;float:left;color:#333;text-decoration:none";
		yearAndMonthlist.appendChild(btnNextYear);
		dayTable.appendChild(yearAndMonthlist);
		
		var weekTbody = document.createElement("tbody");
		weekTbody.style.cssText = "margin:0;padding:0;";
		dayTable.appendChild(weekTbody);
		var weekday = document.createElement("tr");
		var weekdaylist = ["日", "一", "二", "三", "四", "五", "六"];
		for (var i = 0; i < weekdaylist.length; i++) {
			var newtd = document.createElement("td");
			newtd.style.cssText = "line-hieght:20px;height:15px;border-top:1px solid #CCC;font-weight:normal;color:#444;border-bottom:1px solid #CCC;padding:5px 3px;";
			newtd.innerHTML = weekdaylist[i];
			weekday.appendChild(newtd);
		}
		weekTbody.appendChild(weekday);
		this.createDayNode();
		
		//时间
		if (this.config.showHMS && 1 == this.config.showHMS) {
			var hmsdiv = document.createElement("div");
			hmsdiv.style.cssText = "padding:3px 5px;color:#369;border-top:1px solid #CCC;font-size:12px;position:absolute;left:0;bottom:0px;width:152px";
			var valspan = document.createElement("span");
			valspan.innerHTML = "时间：";
			valspan.style.cssText = "padding-right:3px;";
			hmsdiv.appendChild(valspan);
			
			var hmsinput = document.createElement("input");
			this.hmsinput = hmsinput;
			hmsinput.style.cssText = "padding:0;width:60px;hiehgt:25px;color:#666;position:relative;right:5px;top:2px;margin-right:13px";
			hmsinput.maxLength = "8";
			//hmsinput.onclick = function(){$this.editHMS(this)};
			hmsinput.onfocus = function () {
				document.onclick = null;
			};
			hmsinput.onblur = function () {
				
				window.setTimeout(function () {
					document.onclick = function () {
						$this.list.parentNode.removeChild($this.list);
					}
				}, 0);
			};
			var hmsval = this.config.saveAt.value.replace(/(^\s)|(\s$)/g, "").split(" ")[1];
			if (/^\d{2}:\d{2}:\d{2}$/.test(hmsval) && parseInt(hmsval.split(":")[0], 10) >= 0 && parseInt(hmsval.split(":")[0], 10) <= 23 && parseInt(hmsval.split(":")[1], 10) >= 0 && parseInt(hmsval.split(":")[1], 10) <= 59 && parseInt(hmsval.split(":")[2], 10) >= 0 && parseInt(hmsval.split(":")[2], 10) <= 59) {
				hmsinput.value = hmsval;
			} else {
				hmsinput.value = "00:00:00";
			}
			
			hmsdiv.appendChild(hmsinput);
			var btn = document.createElement("input");
			btn.type = "button";
			btn.value = "确定";
			btn.onclick = function () {
				$this.setYearMonthDay($this.day)
			}
			btn.style.cssText = "padding:0 1px;margin:0;width:36px;font-size:12px";
			hmsdiv.appendChild(btn);
			list.appendChild(hmsdiv);
			list.style.height = "234px";
			
			var btnup = document.createElement("p");
			btnup.href = "###";
			btnup.style.cssText = "padding:0;margin:0;cursor:pointer;position:absolute;left:105px;top:1px;text-decoration:none;color:#888";
			btnup.innerHTML = "▲";
			btnup.onmousedown = function () {
				$this.timer_down = window.setInterval(function () {
						$this.addHMS()
					}, 50);
			}
			//btnup.onclick = function(){$this.addHMS()}
			btnup.onmouseup = function () {
				document.onclick = null;
				window.clearInterval($this.timer_down);
				window.setTimeout(function () {
					document.onclick = function () {
						$this.list.parentNode.removeChild($this.list);
					}
				}, 0);
			}
			hmsdiv.appendChild(btnup);
			
			var btndown = document.createElement("p");
			btndown.href = "###";
			btndown.style.cssText = "padding:0;margin:0;cursor:pointer;position:absolute;left:105px;top:10px;text-decoration:none;color:#888;";
			btndown.innerHTML = "▼";
			btndown.onmousedown = function () {
				$this.timer_down = window.setInterval(function () {
						$this.minusHMS()
					}, 50);
			}
			//btndown.onclick = function(){$this.minusHMS()}
			btndown.onmouseup = function () {
				document.onclick = null;
				window.clearInterval($this.timer_down);
				window.setTimeout(function () {
					document.onclick = function () {
						$this.list.parentNode.removeChild($this.list);
					}
				}, 0);
			}
			hmsdiv.appendChild(btndown);
		}
		
		list.appendChild(dayTable);
		document.body.appendChild(list);
	}
	this.mdown = false;
	this.hh = 0;
	this.mm = 0;
	this.ss = 0;
	this.addHMS = function () {
		var hmsval = this.hmsinput.value.replace(/(^\s)|(\s$)/g, "");
		if (/^\d{2}:\d{2}:\d{2}$/.test(hmsval) && parseInt(hmsval.split(":")[0], 10) >= 0 && parseInt(hmsval.split(":")[0], 10) <= 23 && parseInt(hmsval.split(":")[1], 10) >= 0 && parseInt(hmsval.split(":")[1], 10) <= 59 && parseInt(hmsval.split(":")[2], 10) >= 0 && parseInt(hmsval.split(":")[2], 10) <= 59) {
			this.hh = parseInt(hmsval.split(":")[0], 10);
			this.mm = parseInt(hmsval.split(":")[1], 10);
			this.ss = parseInt(hmsval.split(":")[2], 10);
		} else {
			this.hh = 0;
			this.mm = 0;
			this.ss = 0;
		}
		//alert(this.ss +":"+ this.mm +":"+ this.ss);
		document.onclick = null;
		var returnVal = "";
		this.ss++;
		if (this.ss > 59) {
			this.ss = 0;
			this.mm++;
			if (this.mm > 59) {
				this.mm = 0;
				this.hh++;
				if (this.hh > 23) {
					this.hh = 0;
					this.mm = 0;
					this.ss = 0;
				}
			}
		}
		var hhval = this.hh.toString().length == 1 ? "0" + this.hh : this.hh;
		var mmval = this.mm.toString().length == 1 ? "0" + this.mm : this.mm;
		var ssval = this.ss.toString().length == 1 ? "0" + this.ss : this.ss;
		returnVal = hhval + ":" + mmval + ":" + ssval;
		
		this.hmsinput.value = returnVal;
		var $this = this;
		window.setTimeout(function () {
			document.onclick = function () {
				$this.list.parentNode.removeChild($this.list);
			}
		}, 0);
	}
	this.minusHMS = function () {
		var hmsval = this.hmsinput.value.replace(/(^\s)|(\s$)/g, "");
		if (/^\d{2}:\d{2}:\d{2}$/.test(hmsval) && parseInt(hmsval.split(":")[0], 10) >= 0 && parseInt(hmsval.split(":")[0], 10) <= 23 && parseInt(hmsval.split(":")[1], 10) >= 0 && parseInt(hmsval.split(":")[1], 10) <= 59 && parseInt(hmsval.split(":")[2], 10) >= 0 && parseInt(hmsval.split(":")[2], 10) <= 59) {
			this.hh = parseInt(hmsval.split(":")[0], 10);
			this.mm = parseInt(hmsval.split(":")[1], 10);
			this.ss = parseInt(hmsval.split(":")[2], 10);
		} else {
			this.hh = 0;
			this.mm = 0;
			this.ss = 0;
		}
		//alert(this.ss +":"+ this.mm +":"+ this.ss);
		document.onclick = null;
		var returnVal = "";
		this.ss--;
		if (this.ss < 0) {
			this.ss = 59;
			this.mm--;
			if (this.mm < 0) {
				this.mm = 59;
				this.hh--;
				if (this.hh < 0) {
					this.hh = 0;
					this.mm = 0;
					this.ss = 0;
				}
			}
		}
		var hhval = this.hh.toString().length == 1 ? "0" + this.hh : this.hh;
		var mmval = this.mm.toString().length == 1 ? "0" + this.mm : this.mm;
		var ssval = this.ss.toString().length == 1 ? "0" + this.ss : this.ss;
		returnVal = hhval + ":" + mmval + ":" + ssval;
		
		this.hmsinput.value = returnVal;
		var $this = this;
		window.setTimeout(function () {
			document.onclick = function () {
				$this.list.parentNode.removeChild($this.list);
			}
		}, 0);
	}
	this.setSaveAtVal = function () {};
	this.createDayNode = function () {
		if (this.dayTbody != null) {
			this.dayTbody.parentNode.removeChild(this.dayTbody)
		};
		this.dayTbody = document.createElement("tbody");
		this.dayTable.appendChild(this.dayTbody);
		var monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		//指向框内默认时间月
		var val = this.config.saveAt.value.replace(/(^\s)|(\s$)/g, "").split(" ")[0];
		if ("" != this.config.saveAt.value && !this.btnClickFlag) {
			var getDatePass = false;
			switch (this.config.dateFormat) {
			case "yyyymmdd":
				if (/^\d{8}$/.test(val) && parseInt(val.slice(0, 4), 10) > 1970 && (parseInt(val.slice(4, 6), 10) > 0 && parseInt(val.slice(4, 6), 10) < 13) && (parseInt(val.slice(6 - 8), 10) > 0 && parseInt(val.slice(6 - 8), 10) < 32)) {
					this.year = parseInt(val.slice(0, 4), 10);
					this.month = parseInt(val.slice(4, 6), 10);
					this.day = parseInt(val.slice(6 - 8), 10);
					getDatePass = true;
					
				}
				break;
			case "yyyy-mm-dd":
			case "yyyy-m-d":
				if (/^\d{4}-\d{1,2}-\d{1,2}$/.test(val) && parseInt(val.split("-")[0], 10) > 1970 && (parseInt(val.split("-")[1], 10) > 0 && parseInt(val.split("-")[1], 10) < 13) && (parseInt(val.split("-")[2], 10) > 0 && parseInt(val.split("-")[2], 10) < 32)) {
					this.year = parseInt(val.split("-")[0], 10);
					this.month = parseInt(val.split("-")[1], 10);
					this.day = parseInt(val.split("-")[2], 10);
					getDatePass = true;
				}
				break;
			case "yyyy/mm/dd":
			case "yyyy/m/d":
				if (/^\d{4}\/\d{1,2}\/\d{1,2}$/.test(val) && parseInt(val.split("/")[0], 10) > 1970 && (parseInt(val.split("/")[1], 10) > 0 && parseInt(val.split("/")[1], 10) < 13) && (parseInt(val.split("/")[2], 10) > 0 && parseInt(val.split("/")[2], 10) < 32)) {
					this.year = parseInt(val.split("/")[0], 10);
					this.month = parseInt(val.split("/")[1], 10);
					this.day = parseInt(val.split("/")[2], 10);
					getDatePass = true;
				}
				break;
			}
			if (getDatePass) {
				this.yearMonthDay = new Date(this.year + "", this.month + "", this.day + "");
				var dateVal = new Date();
				this.year_init = dateVal.getFullYear();
				this.month_init = (parseInt(dateVal.getMonth(), 10) + 1) % 12;
				this.day_init = dateVal.getDate();
			}
		}
		if (!this.yearMonthDay) { //检查是否第一次生成列表或在输入框内找到相匹配的日期
			var dateVal = new Date();
			this.year = this.year_init = dateVal.getFullYear();
			this.month = this.month_init = (parseInt(dateVal.getMonth(), 10) + 1) % 12;
			this.day = this.day_init = parseInt(dateVal.getDate(), 10);
		} else {
			var dateVal = this.yearMonthDay;
		}
		var tempDate = this.year + "-" + this.month + "-" + "01";
		var monthFirstDay = new Date(Date.parse(tempDate.replace(/-/g, '/')));
		var startIndex = parseInt(monthFirstDay.getDay(), 10);
		if (this.year % 4 == 0) { //检查是否为润年
			monthDay[1] = 29;
		} else {
			monthDay[1] = 28;
		}
		var endIndex = parseInt(monthDay[this.month - 1] + startIndex, 10);
		var $this = this;
		this.yearAndMonthText.innerHTML = this.year + "年" + this.month + "月"; //显示第一栏年与月
		for (var i = 0; i < 6; i++) {
			var newtr = document.createElement("tr");
			for (var j = 0; j < 7; j++) {
				var newtd = document.createElement("td");
				newtd.style.textAlign = "center";
				newtd.style.padding = "0";
				var index = (i * 7) + j;
				if (index >= startIndex && index < endIndex) {
					var newa = document.createElement("a");
					newa.href = "###";
					newa.style.cssText = "font-family:Arial,Helvetica,sans-serif;display:block;width:20px;height:20px;line-height:20px;margin-top:5px;text-align:center;text-decoration:none;color:#369;";
					var tempbgcolor = "";
					var tempfcolor = "";
					newa.onmouseover = function () {
						tempbgcolor = this.style.background;
						this.style.background = "#393672";
						tempfcolor = this.style.color;
						this.style.color = "#FFF"
					}; //鼠标经过数字
					newa.onmouseout = function () {
						this.style.background = tempbgcolor;
						this.style.color = tempfcolor
					}; //鼠标离开数字
					newa.innerHTML = index - startIndex + 1;
					if ((index - startIndex + 1) == this.day_init && this.year == this.year_init && this.month == this.month_init) { //today
						newa.style.background = "#555EAC";
						newa.style.color = "#FFF";
					}
					if (this.valDate(index - startIndex + 1)) {
						newa.style.background = "#393672";
						newa.style.color = "#FFF";
					}
					(function (index) {
						newa.onclick = function () {
							$this.setYearMonthDay(index)
						}
					})(index - startIndex + 1);
					newtd.appendChild(newa);
				}
				newtr.appendChild(newtd);
			}
			this.dayTbody.appendChild(newtr);
		}
		var $this = this;
		window.setTimeout(function () {
			document.onclick = function () {
				$this.list.parentNode.removeChild($this.list);
			}
		}, 0);
	}
	this.valDate = function (day) {
		if ("" == this.config.saveAt.value) {
			return false;
		}
		var val = this.config.saveAt.value.replace(/(^\s)|(\s$)/g, "").split(" ")[0];
		switch (this.config.dateFormat) {
		case "yyyymmdd":
			if (this.year == parseInt(val.slice(0, 4), 10) && this.month == parseInt(val.slice(4, 6), 10) && day == parseInt(val.slice(6 - 8), 10)) {
				return true;
			}
			break;
		case "yyyy-mm-dd":
		case "yyyy-m-d":
			if (this.year == parseInt(val.split("-")[0], 10) && this.month == parseInt(val.split("-")[1], 10) && day == parseInt(val.split("-")[2], 10)) {
				return true;
			}
			break;
		case "yyyy/mm/dd":
		case "yyyy/m/d":
			if (this.year == parseInt(val.split("/")[0], 10) && this.month == parseInt(val.split("/")[1], 10) && day == parseInt(val.split("/")[2], 10)) {
				return true;
			}
			break;
		default:
			return false;
		}
	}
	this.nextMonth = function () {
		document.onclick = null;
		this.month++;
		if (this.month > 12) {
			this.month = 1;
			this.year++;
		}
		this.btnClickFlag = true;
		this.yearMonthDay = new Date(this.year + "", this.month + "", this.day + "");
		this.createDayNode();
	}
	this.prevMonth = function () {
		document.onclick = null;
		this.month--;
		if (this.month < 1) {
			this.month = 12;
			this.year--;
		}
		this.btnClickFlag = true;
		this.yearMonthDay = new Date(this.year + "", this.month + "", this.day + "");
		this.createDayNode();
	}
	this.nextYear = function () {
		document.onclick = null;
		this.year++;
		this.btnClickFlag = true;
		this.yearMonthDay = new Date(this.year + "", this.month + "", this.day + "");
		this.createDayNode();
	}
	this.prevYear = function () {
		document.onclick = null;
		this.year--;
		this.btnClickFlag = true;
		this.yearMonthDay = new Date(this.year + "", this.month + "", this.day + "");
		this.createDayNode();
	}
	this.setYearMonthDay = function (day) {
		var outVal = "";
		switch (this.config.dateFormat) {
		case "yyyymmdd":
			var monthval = this.month.toString().length == 1 ? "0" + this.month : this.month;
			var dayval = day.toString().length == 1 ? "0" + day : day;
			outVal = this.year + "" + monthval + "" + dayval;
			break;
		case "yyyymd":
			outVal = this.year + "" + this.month + "" + day;
			break;
		case "yyyy-mm-dd":
			var monthval = this.month.toString().length == 1 ? "0" + this.month : this.month;
			var dayval = day.toString().length == 1 ? "0" + day : day;
			outVal = this.year + "-" + monthval + "-" + dayval;
			break;
		case "yyyy-m-d":
			outVal = this.year + "-" + this.month + "-" + day;
			break;
		case "yyyy/mm/dd":
			var monthval = this.month.toString().length == 1 ? "0" + this.month : this.month;
			var dayval = day.toString().length == 1 ? "0" + day : day;
			outVal = this.year + "/" + monthval + "/" + dayval;
			break;
		case "yyyy/m/d":
			outVal = this.year + "/" + this.month + "/" + day;
			break;
		default:
			var monthval = this.month.toString().length == 1 ? "0" + this.month : this.month;
			var dayval = day.toString().length == 1 ? "0" + day : day;
			outVal = this.year + "" + monthval + "" + dayval;
		}
		if (1 == this.config.showHMS) {
			if (/^\d{2}:\d{2}:\d{2}$/.test(this.hmsinput.value) && parseInt(this.hmsinput.value.split(":")[0], 10) >= 0 && parseInt(this.hmsinput.value.split(":")[0], 10) <= 23 && parseInt(this.hmsinput.value.split(":")[1], 10) >= 0 && parseInt(this.hmsinput.value.split(":")[1], 10) <= 59 && parseInt(this.hmsinput.value.split(":")[2], 10) >= 0 && parseInt(this.hmsinput.value.split(":")[2], 10) <= 59) {
				outVal += " " + this.hmsinput.value;
			} else {
				outVal += " 00:00:00";
			}
			
		}
		this.config.saveAt.value = outVal;
		try {
			this.list.parentNode.removeChild(this.list);
		} catch (e) {}
	}
}

/**
功能描述 * 证书导入
编写作者 * haihauhuang
编写日期 * 2011-11-29
 */
var InsallCert = {
	queryLoginType : function () {
		g_CTrans.CommitByStr("", "http://mch.tenpay.com/cgi-bin/mch_query_logintype.cgi", true, InsallCert.queryLoginTypeCal);
	},
	queryLoginTypeCal : function (objXml) {
		var retcode = parseInt(objXml.GetValue("retcode"), 10);
		if (retcode == 0) {
			var loginType = parseInt(objXml.GetValue("LoginType"), 10);
			if (loginType == 1) {
				InsallCert.loadScript();
				InsallCert.setInsallCertCookie();
			} else if (loginType == 2) {
				if (location.href.indexOf("https") == -1) {
					location.href = location.href.replace("http", "https");
				}
			}
		}
	},
	loadScript : function () {
		var oScript = document.createElement("script"); //创建script标签
		oScript.type = "text/javascript"; //添加type属性
		oScript.src = "https://mch.tenpay.com/cgi-bin/mch_change_logintype.cgi?jsonp=jsonpCallback&date=" + new Date(); //添加src
		document.getElementsByTagName('head')[0].appendChild(oScript); //将script标签附加给head标签
	},
	setInsallCertCookie : function () {
		g_CCookie.SetCookie("insallCert", 1, "", "/", "mch.tenpay.com", "");
	},
	getInsallCertCookie : function () {
		return g_CCookie.GetCookie("insallCert");
	},
	delInsallCertCookie : function () {
		g_CCookie.DelCookie("insallCert", "/", "mch.tenpay.com");
	},
	create : function () {
		var msg = "";
		var height = 250;
		if (parseInt(this.appInfo().version, 10) < 9) {
			msg += "<span class='extend_cert'>导入证书成功，请选择页面顶端”显示阻止的内容“，完成导入。</span>";
			msg += "<img src='/res_mch/common/img/ie_level.jpg' />";
		} else {
			msg += "<span class='extend_cert'>导入证书成功，请选择页面底部“显示内容”，完成导入。</span>";
			msg += "<img src='/res_mch/common/img/ie_high.jpg' />";
			height = 240;
		}
		msg += "<span class='back_to_index'>您也可以返回首页，以证书登录来完成操作。<span>";
		new Dialog().show({
			title : "提示",
			width : 410,
			height : height,
			msg : msg,
			btn : [{
					text : "我知道了"
				}, {
					text : "返回首页",
					clickToDo : function () {
						location.href = "http://mch.tenpay.com/";
					}
				}
			]
		});
	},
	appInfo : function () {
		var browser = {
			msie : false,
			firefox : false,
			opera : false,
			safari : false,
			chrome : false,
			netscape : false,
			appname : 'unknown',
			version : 0
		},
		userAgent = window.navigator.userAgent.toLowerCase();
		if (/(msie|firefox|opera|chrome|netscape)\D+(\d[\d.]*)/.test(userAgent)) {
			browser[RegExp.$1] = true;
			browser.appname = RegExp.$1;
			browser.version = RegExp.$2;
		} else if (/version\D+(\d[\d.]*).*safari/.test(userAgent)) { // safari
			browser.safari = true;
			browser.appname = 'safari';
			browser.version = RegExp.$2;
		}
		return browser;
	}
}
