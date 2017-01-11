// JavaScript Document
//ʡ�������б�
var provinceAndCity = {
    data : 
    [   {
            name : '--��ѡ��ʡ��--',
            code : '',
            city : [{ name : '--��ѡ�����--', code : ''}]
        }, 
        {
            name : '����',
            code : '11',
            city : [{ name : '����', code : '1100'}]
        }, 
        {
            name : '�Ϻ�',
            code : '31',
            city : [{ name : '�Ϻ�', code : '3100' } ]
        }, 
        {
            name : '���',
            code : '12',
            city : [{ name : '���', code : '1200'}]
        }, 
        {
            name : '����',
            code : '50',
            city : [{ name : '����', code : '5000' } ]
        }, 
        {
            name : '�ӱ�',
            code : '13',
            city : [
                { name : 'ʯ��ׯ��', code : '1301' },
                { name : '��ɽ��', code : '1302' },
                { name : '�ػʵ���', code : '1303' },
                { name : '������', code : '1304' },
                { name : '��̨��', code : '1305' },
                { name : '������', code : '1306' },
                { name : '�żҿ���', code : '1307' },
                { name : '�е���', code : '1308' },
                { name : '������', code : '1309' },
                { name : '�ȷ���', code : '1310' },
                { name : '��ˮ��', code : '1311' }
               ]
        },
        {
            name : 'ɽ��',
            code : '14',
            city : [
                { name : '̫ԭ��', code : '1401' },
                { name : '��ͬ��', code : '1402' },
                { name : '��Ȫ��', code : '1403' },
                { name : '������', code : '1404' },
                { name : '������', code : '1405' },
                { name : '˷����', code : '1406' },
                { name : '������', code : '1407' },
                { name : '�˳���', code : '1408' },
                { name : '������', code : '1409' },
                { name : '�ٷ���', code : '1410' },
                { name : '������', code : '1411' }
               ]
        },
        {
            name : '���ɹ�',
            code : '15',
            city : [
                { name : '���ͺ�����', code : '1501' },
                { name : '��ͷ��', code : '1502' },
                { name : '�ں���', code : '1503' },
                { name : '�����', code : '1504' },
                { name : 'ͨ����', code : '1505' },
                { name : '������˹��', code : '1506' },
                { name : '���ױ�����', code : '1507' },
                { name : '�����׶���', code : '1508' },
                { name : '�����첼��', code : '1509' },
                { name : '�˰���', code : '1522' },
                { name : '���ֹ�����', code : '1525' },
                { name : '��������', code : '1529' }
               ]
        },
        {
            name : '����',
            code : '21',
            city : [
                { name : '������', code : '2101' },
                { name : '������', code : '2102' },
                { name : '��ɽ��', code : '2103' },
                { name : '��˳��', code : '2104' },
                { name : '��Ϫ��', code : '2105' },
                { name : '������', code : '2106' },
                { name : '������', code : '2107' },
                { name : 'Ӫ����', code : '2108' },
                { name : '������', code : '2109' },
                { name : '������', code : '2110' },
                { name : '�̽���', code : '2111' },
                { name : '������', code : '2112' },
                { name : '������', code : '2113' },
                { name : '��«����', code : '2114' }
               ]
        },
        {
            name : '����',
            code : '22',
            city : [
                { name : '������', code : '2201' },
                { name : '������', code : '2202' },
                { name : '��ƽ��', code : '2203' },
                { name : '��Դ��', code : '2204' },
                { name : 'ͨ����', code : '2205' },
                { name : '��ɽ��', code : '2206' },
                { name : '��ԭ��', code : '2207' },
                { name : '�׳���', code : '2208' },
                { name : '�ӱ߳�����������', code : '2224' }
               ]
        },
        {
            name : '������',
            code : '23',
            city : [
                { name : '��������', code : '2301' },
                { name : '���������', code : '2302' },
                { name : '������', code : '2303' },
                { name : '�׸���', code : '2304' },
                { name : '˫Ѽɽ��', code : '2305' },
                { name : '������', code : '2306' },
                { name : '������', code : '2307' },
                { name : '��ľ˹��', code : '2308' },
                { name : '��̨����', code : '2309' },
                { name : 'ĵ������', code : '2310' },
                { name : '�ں���', code : '2311' },
                { name : '�绯��', code : '2312' },
                { name : '���˰������', code : '2327' }
               ]
        },
        {
            name : '����',
            code : '32',
            city : [
                { name : '�Ͼ���', code : '3201' },
                { name : '������', code : '3202' },
                { name : '������', code : '3203' },
                { name : '������', code : '3204' },
                { name : '������', code : '3205' },
                { name : '��ͨ��', code : '3206' },
                { name : '���Ƹ���', code : '3207' },
                { name : '������', code : '3208' },
                { name : '�γ���', code : '3209' },
                { name : '������', code : '3210' },
                { name : '����', code : '3211' },
                { name : '̩����', code : '3212' },
                { name : '��Ǩ��', code : '3213' }
               ]
        },
        {
            name : '�㽭',
            code : '33',
            city : [
                { name : '������', code : '3301' },
                { name : '������', code : '3302' },
                { name : '������', code : '3303' },
                { name : '������', code : '3304' },
                { name : '������', code : '3305' },
                { name : '������', code : '3306' },
                { name : '����', code : '3307' },
                { name : '������', code : '3308' },
                { name : '��ɽ��', code : '3309' },
                { name : '̨����', code : '3310' },
                { name : '��ˮ��', code : '3311' }
               ]
        },
        {
            name : '����',
            code : '34',
            city : [
                { name : '�Ϸ���', code : '3401' },
                { name : '�ߺ���', code : '3402' },
                { name : '������', code : '3403' },
                { name : '������', code : '3404' },
                { name : '��ɽ��', code : '3405' },
                { name : '������', code : '3406' },
                { name : 'ͭ����', code : '3407' },
                { name : '������', code : '3408' },
                { name : '��ɽ��', code : '3410' },
                { name : '������', code : '3411' },
                { name : '������', code : '3412' },
                { name : '������', code : '3413' },
                { name : '������', code : '3414' },
                { name : '������', code : '3415' },
                { name : '������', code : '3416' },
                { name : '������', code : '3417' },
                { name : '������', code : '3418' }
               ]
        },
        {
            name : '����',
            code : '35',
            city : [
                { name : '������', code : '3501' },
                { name : '������', code : '3502' },
                { name : '������', code : '3503' },
                { name : '������', code : '3504' },
                { name : 'Ȫ����', code : '3505' },
                { name : '������', code : '3506' },
                { name : '��ƽ��', code : '3507' },
                { name : '������', code : '3508' },
                { name : '������', code : '3509' }
               ]
        },
        {
            name : '����',
            code : '36',
            city : [
                { name : '�ϲ���', code : '3601' },
                { name : '��������', code : '3602' },
                { name : 'Ƽ����', code : '3603' },
                { name : '�Ž���', code : '3604' },
                { name : '������', code : '3605' },
                { name : 'ӥ̶��', code : '3606' },
                { name : '������', code : '3607' },
                { name : '������', code : '3608' },
                { name : '�˴���', code : '3609' },
                { name : '������', code : '3610' },
                { name : '������', code : '3611' }
               ]
        },
        {
            name : 'ɽ��',
            code : '37',
            city : [
                { name : '������', code : '3701' },
                { name : '�ൺ��', code : '3702' },
                { name : '�Ͳ���', code : '3703' },
                { name : '��ׯ��', code : '3704' },
                { name : '��Ӫ��', code : '3705' },
                { name : '��̨��', code : '3706' },
                { name : 'Ϋ����', code : '3707' },
                { name : '������', code : '3708' },
                { name : '̩����', code : '3709' },
                { name : '������', code : '3710' },
                { name : '������', code : '3711' },
                { name : '������', code : '3712' },
                { name : '������', code : '3713' },
                { name : '������', code : '3714' },
                { name : '�ĳ���', code : '3715' },
                { name : '������', code : '3716' },
                { name : '������', code : '3717' }
               ]
        },
        {
            name : '����',
            code : '41',
            city : [
                { name : '֣����', code : '4101' },
                { name : '������', code : '4102' },
                { name : '������', code : '4103' },
                { name : 'ƽ��ɽ��', code : '4104' },
                { name : '������', code : '4105' },
                { name : '�ױ���', code : '4106' },
                { name : '������', code : '4107' },
                { name : '������', code : '4108' },
                { name : '�����', code : '4109' },
                { name : '�����', code : '4110' },
                { name : '�����', code : '4111' },
                { name : '����Ͽ��', code : '4112' },
                { name : '������', code : '4113' },
                { name : '������', code : '4114' },
                { name : '������', code : '4115' },
                { name : '�ܿ���', code : '4116' },
                { name : 'פ�����', code : '4117' }
               ]
        },
        {
            name : '����',
            code : '42',
            city : [
                { name : '�人��', code : '4201' },
                { name : '��ʯ��', code : '4202' },
                { name : 'ʮ����', code : '4203' },
                { name : '�˲���', code : '4205' },
                { name : '�差��', code : '4206' },
                { name : '������', code : '4207' },
                { name : '������', code : '4208' },
                { name : 'Т����', code : '4209' },
                { name : '������', code : '4210' },
                { name : '�Ƹ���', code : '4211' },
                { name : '������', code : '4212' },
                { name : '������', code : '4213' },
                { name : '��ʩ����������������', code : '4228' }
               ]
        },
        {
            name : '����',
            code : '43',
            city : [
                { name : '��ɳ��', code : '4301' },
                { name : '������', code : '4302' },
                { name : '��̶��', code : '4303' },
                { name : '������', code : '4304' },
                { name : '������', code : '4305' },
                { name : '������', code : '4306' },
                { name : '������', code : '4307' },
                { name : '�żҽ���', code : '4308' },
                { name : '������', code : '4309' },
                { name : '������', code : '4310' },
                { name : '������', code : '4311' },
                { name : '������', code : '4312' },
                { name : '¦����', code : '4313' },
                { name : '��������������������', code : '4331' }
               ]
        },
        {
            name : '�㶫',
            code : '44',
            city : [
                { name : '������', code : '4401' },
                { name : '�ع���', code : '4402' },
                { name : '������', code : '4403' },
                { name : '�麣��', code : '4404' },
                { name : '��ͷ��', code : '4405' },
                { name : '��ɽ��', code : '4406' },
                { name : '������', code : '4407' },
                { name : 'տ����', code : '4408' },
                { name : 'ï����', code : '4409' },
                { name : '������', code : '4412' },
                { name : '������', code : '4413' },
                { name : '÷����', code : '4414' },
                { name : '��β��', code : '4415' },
                { name : '��Դ��', code : '4416' },
                { name : '������', code : '4417' },
                { name : '��Զ��', code : '4418' },
                { name : '��ݸ��', code : '4419' },
                { name : '��ɽ��', code : '4420' },
                { name : '������', code : '4451' },
                { name : '������', code : '4452' },
                { name : '�Ƹ���', code : '4453' }
               ]
        },
        {
            name : '����',
            code : '45',
            city : [
                { name : '������', code : '4501' },
                { name : '������', code : '4502' },
                { name : '������', code : '4503' },
                { name : '������', code : '4504' },
                { name : '������', code : '4505' },
                { name : '���Ǹ���', code : '4506' },
                { name : '������', code : '4507' },
                { name : '�����', code : '4508' },
                { name : '������', code : '4509' },
                { name : '��ɫ��', code : '4510' },
                { name : '������', code : '4511' },
                { name : '�ӳ���', code : '4512' },
                { name : '������', code : '4513' },
                { name : '������', code : '4514' }
               ]
        },
        {
            name : '����',
            code : '46',
            city : [
                { name : '������', code : '4601' },
                { name : '������', code : '4602' },
                { name : '������', code : '4603' }
               ]
        },
        {
            name : '�Ĵ�',
            code : '51',
            city : [
                { name : '�ɶ���', code : '5101' },
                { name : '�Թ���', code : '5103' },
                { name : '��֦����', code : '5104' },
                { name : '������', code : '5105' },
                { name : '������', code : '5106' },
                { name : '������', code : '5107' },
                { name : '��Ԫ��', code : '5108' },
                { name : '������', code : '5109' },
                { name : '�ڽ���', code : '5110' },
                { name : '��ɽ��', code : '5111' },
                { name : '�ϳ���', code : '5113' },
                { name : 'üɽ��', code : '5114' },
                { name : '�˱���', code : '5115' },
                { name : '�㰲��', code : '5116' },
                { name : '������', code : '5117' },
                { name : '�Ű���', code : '5118' },
                { name : '������', code : '5119' },
                { name : '������', code : '5120' },
                { name : '���Ӳ���Ǽ��������', code : '5132' },
                { name : '���β���������', code : '5133' },
                { name : '��ɽ����������', code : '5134' }
               ]
        },
        {
            name : '����',
            code : '52',
            city : [
                { name : '������', code : '5201' }, 
                { name : '����ˮ��', code : '5202' },
                { name : '������', code : '5203' }, 
                { name : '��˳��', code : '5204' }, 
                { name : 'ͭ�ʵ���', code : '5222' },
                { name : 'ǭ���ϲ���������������', code : '5223' },
                { name : '�Ͻڵ���', code : '5224' },
                { name : 'ǭ�������嶱��������', code : '5226' },
                { name : 'ǭ�ϲ���������������', code : '5227' }
               ]
        },
        {
            name : '����',
            code : '53',
            city : [
                { name : '������', code : '5301' },
                { name : '������', code : '5303' },
                { name : '��Ϫ��', code : '5304' },
                { name : '��ɽ��', code : '5305' },
                { name : '��ͨ��', code : '5306' },
                { name : '������', code : '5307' },
                { name : '�ն���', code : '5308' },
                { name : '�ٲ���', code : '5309' },
                { name : '��������������', code : '5323' },
                { name : '��ӹ���������������', code : '5325' },
                { name : '��ɽ׳������������', code : '5326' },
                { name : '��˫���ɴ���������', code : '5328' },
                { name : '�������������', code : '5329' },
                { name : '�º���徰����������', code : '5331' },
                { name : 'ŭ��������������', code : '5333' },
                { name : '�������������', code : '5334' }
               ]
        },
        {
            name : '����',
            code : '54',
            city : [
                { name : '������', code : '5401' },
                { name : '��������', code : '5421' },
                { name : 'ɽ�ϵ���', code : '5422' },
                { name : '�տ������', code : '5423' },
                { name : '��������', code : '5424' },
                { name : '�������', code : '5425' },
                { name : '��֥����', code : '5426' }
               ]
        },
        {
            name : '����',
            code : '61',
            city : [
                { name : '������', code : '6101' },
                { name : 'ͭ����', code : '6102' },
                { name : '������', code : '6103' },
                { name : '������', code : '6104' },
                { name : 'μ����', code : '6105' },
                { name : '�Ӱ���', code : '6106' },
                { name : '������', code : '6107' },
                { name : '������', code : '6108' },
                { name : '������', code : '6109' },
                { name : '������', code : '6110' }
               ]
        },
        {
            name : '����',
            code : '62',
            city : [
                { name : '������', code : '6201' },
                { name : '��������', code : '6202' },
                { name : '�����', code : '6203' },
                { name : '������', code : '6204' },
                { name : '��ˮ��', code : '6205' },
                { name : '������', code : '6206' },
                { name : '��Ҵ��', code : '6207' },
                { name : 'ƽ����', code : '6208' },
                { name : '��Ȫ��', code : '6209' },
                { name : '������', code : '6210' },
                { name : '������', code : '6211' },
                { name : '¤����', code : '6212' },
                { name : '���Ļ���������', code : '6229' },
                { name : '���ϲ���������', code : '6230' }
               ]
        },
        {
            name : '�ຣ',
            code : '63',
            city : [
                { name : '������', code : '6301' },
                { name : '��������', code : '6321' },
                { name : '��������������', code : '6322' },
                { name : '���ϲ���������', code : '6323' },
                { name : '���ϲ���������', code : '6325' },
                { name : '�������������', code : '6326' },
                { name : '��������������', code : '6327' },
                { name : '�����ɹ������������', code : '6328' }
               ]
        },
        {
            name : '����',
            code : '64',
            city : [
                { name : '������', code : '6401' },
                { name : 'ʯ��ɽ��', code : '6402' },
                { name : '������', code : '6403' },
                { name : '��ԭ��', code : '6404' },
                { name : '������', code : '6405' }
               ]
        },
        {
            name : '�½�',
            code : '65',
            city : [
                { name : '��³ľ����', code : '6501' },
                { name : '����������', code : '6502' },
                { name : '��³������', code : '6521' },
                { name : '���ܵ���', code : '6522' },
                { name : '��������������', code : '6523' },
                { name : '���������ɹ�������', code : '6527' },
                { name : '���������ɹ�������', code : '6528' },
                { name : '�����յ���', code : '6529' },
                { name : '�������տ¶�����������', code : '6530' },
                { name : '��ʲ����', code : '6531' },
                { name : '�������', code : '6532' },
                { name : '���������������', code : '6540' },
                { name : '���ǵ���', code : '6542' },
                { name : '����̩����', code : '6543' }
               ]
         }
    ],
	provinceListID : "",
	cityListID : "",
	provinceName : "",
	cityOptionName : "",
	init : function (json) //��ʽ{provinceListID :"",provinceOptionName:"",cityListID:"",cityOptionName:""};
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
//ʡ�������б�
var provinceAndCityAndAddr = {
    data : 
    [   {
            name : '--��ѡ��ʡ��--',
            code : '',
            city : [{ name : '--��ѡ�����--', code : ''}]
        }, 
        {
            name : '����',
            code : '11',
            city : [{ name : '����', code : '1100'}]
        }, 
        {
            name : '�Ϻ�',
            code : '31',
            city : [{ name : '�Ϻ�', code : '3100' } ]
        }, 
        {
            name : '���',
            code : '12',
            city : [{ name : '���', code : '1200'}]
        }, 
        {
            name : '����',
            code : '50',
            city : [{ name : '����', code : '5000' } ]
        }, 
        {
            name : '�ӱ�',
            code : '13',
            city : [
                { name : 'ʯ��ׯ��', code : '1301' },
                { name : '��ɽ��', code : '1302' },
                { name : '�ػʵ���', code : '1303' },
                { name : '������', code : '1304' },
                { name : '��̨��', code : '1305' },
                { name : '������', code : '1306' },
                { name : '�żҿ���', code : '1307' },
                { name : '�е���', code : '1308' },
                { name : '������', code : '1309' },
                { name : '�ȷ���', code : '1310' },
                { name : '��ˮ��', code : '1311' }
               ]
        },
        {
            name : 'ɽ��',
            code : '14',
            city : [
                { name : '̫ԭ��', code : '1401' },
                { name : '��ͬ��', code : '1402' },
                { name : '��Ȫ��', code : '1403' },
                { name : '������', code : '1404' },
                { name : '������', code : '1405' },
                { name : '˷����', code : '1406' },
                { name : '������', code : '1407' },
                { name : '�˳���', code : '1408' },
                { name : '������', code : '1409' },
                { name : '�ٷ���', code : '1410' },
                { name : '������', code : '1411' }
               ]
        },
        {
            name : '���ɹ�',
            code : '15',
            city : [
                { name : '���ͺ�����', code : '1501' },
                { name : '��ͷ��', code : '1502' },
                { name : '�ں���', code : '1503' },
                { name : '�����', code : '1504' },
                { name : 'ͨ����', code : '1505' },
                { name : '������˹��', code : '1506' },
                { name : '���ױ�����', code : '1507' },
                { name : '�����׶���', code : '1508' },
                { name : '�����첼��', code : '1509' },
                { name : '�˰���', code : '1522' },
                { name : '���ֹ�����', code : '1525' },
                { name : '��������', code : '1529' }
               ]
        },
        {
            name : '����',
            code : '21',
            city : [
                { name : '������', code : '2101' },
                { name : '������', code : '2102' },
                { name : '��ɽ��', code : '2103' },
                { name : '��˳��', code : '2104' },
                { name : '��Ϫ��', code : '2105' },
                { name : '������', code : '2106' },
                { name : '������', code : '2107' },
                { name : 'Ӫ����', code : '2108' },
                { name : '������', code : '2109' },
                { name : '������', code : '2110' },
                { name : '�̽���', code : '2111' },
                { name : '������', code : '2112' },
                { name : '������', code : '2113' },
                { name : '��«����', code : '2114' }
               ]
        },
        {
            name : '����',
            code : '22',
            city : [
                { name : '������', code : '2201' },
                { name : '������', code : '2202' },
                { name : '��ƽ��', code : '2203' },
                { name : '��Դ��', code : '2204' },
                { name : 'ͨ����', code : '2205' },
                { name : '��ɽ��', code : '2206' },
                { name : '��ԭ��', code : '2207' },
                { name : '�׳���', code : '2208' },
                { name : '�ӱ߳�����������', code : '2224' }
               ]
        },
        {
            name : '������',
            code : '23',
            city : [
                { name : '��������', code : '2301' },
                { name : '���������', code : '2302' },
                { name : '������', code : '2303' },
                { name : '�׸���', code : '2304' },
                { name : '˫Ѽɽ��', code : '2305' },
                { name : '������', code : '2306' },
                { name : '������', code : '2307' },
                { name : '��ľ˹��', code : '2308' },
                { name : '��̨����', code : '2309' },
                { name : 'ĵ������', code : '2310' },
                { name : '�ں���', code : '2311' },
                { name : '�绯��', code : '2312' },
                { name : '���˰������', code : '2327' }
               ]
        },
        {
            name : '����',
            code : '32',
            city : [
                { name : '�Ͼ���', code : '3201' },
                { name : '������', code : '3202' },
                { name : '������', code : '3203' },
                { name : '������', code : '3204' },
                { name : '������', code : '3205' },
                { name : '��ͨ��', code : '3206' },
                { name : '���Ƹ���', code : '3207' },
                { name : '������', code : '3208' },
                { name : '�γ���', code : '3209' },
                { name : '������', code : '3210' },
                { name : '����', code : '3211' },
                { name : '̩����', code : '3212' },
                { name : '��Ǩ��', code : '3213' }
               ]
        },
        {
            name : '�㽭',
            code : '33',
            city : [
                { name : '������', code : '3301' },
                { name : '������', code : '3302' },
                { name : '������', code : '3303' },
                { name : '������', code : '3304' },
                { name : '������', code : '3305' },
                { name : '������', code : '3306' },
                { name : '����', code : '3307' },
                { name : '������', code : '3308' },
                { name : '��ɽ��', code : '3309' },
                { name : '̨����', code : '3310' },
                { name : '��ˮ��', code : '3311' }
               ]
        },
        {
            name : '����',
            code : '34',
            city : [
                { name : '�Ϸ���', code : '3401' },
                { name : '�ߺ���', code : '3402' },
                { name : '������', code : '3403' },
                { name : '������', code : '3404' },
                { name : '��ɽ��', code : '3405' },
                { name : '������', code : '3406' },
                { name : 'ͭ����', code : '3407' },
                { name : '������', code : '3408' },
                { name : '��ɽ��', code : '3410' },
                { name : '������', code : '3411' },
                { name : '������', code : '3412' },
                { name : '������', code : '3413' },
                { name : '������', code : '3414' },
                { name : '������', code : '3415' },
                { name : '������', code : '3416' },
                { name : '������', code : '3417' },
                { name : '������', code : '3418' }
               ]
        },
        {
            name : '����',
            code : '35',
            city : [
                { name : '������', code : '3501' },
                { name : '������', code : '3502' },
                { name : '������', code : '3503' },
                { name : '������', code : '3504' },
                { name : 'Ȫ����', code : '3505' },
                { name : '������', code : '3506' },
                { name : '��ƽ��', code : '3507' },
                { name : '������', code : '3508' },
                { name : '������', code : '3509' }
               ]
        },
        {
            name : '����',
            code : '36',
            city : [
                { name : '�ϲ���', code : '3601' },
                { name : '��������', code : '3602' },
                { name : 'Ƽ����', code : '3603' },
                { name : '�Ž���', code : '3604' },
                { name : '������', code : '3605' },
                { name : 'ӥ̶��', code : '3606' },
                { name : '������', code : '3607' },
                { name : '������', code : '3608' },
                { name : '�˴���', code : '3609' },
                { name : '������', code : '3610' },
                { name : '������', code : '3611' }
               ]
        },
        {
            name : 'ɽ��',
            code : '37',
            city : [
                { name : '������', code : '3701' },
                { name : '�ൺ��', code : '3702' },
                { name : '�Ͳ���', code : '3703' },
                { name : '��ׯ��', code : '3704' },
                { name : '��Ӫ��', code : '3705' },
                { name : '��̨��', code : '3706' },
                { name : 'Ϋ����', code : '3707' },
                { name : '������', code : '3708' },
                { name : '̩����', code : '3709' },
                { name : '������', code : '3710' },
                { name : '������', code : '3711' },
                { name : '������', code : '3712' },
                { name : '������', code : '3713' },
                { name : '������', code : '3714' },
                { name : '�ĳ���', code : '3715' },
                { name : '������', code : '3716' },
                { name : '������', code : '3717' }
               ]
        },
        {
            name : '����',
            code : '41',
            city : [
                { name : '֣����', code : '4101' },
                { name : '������', code : '4102' },
                { name : '������', code : '4103' },
                { name : 'ƽ��ɽ��', code : '4104' },
                { name : '������', code : '4105' },
                { name : '�ױ���', code : '4106' },
                { name : '������', code : '4107' },
                { name : '������', code : '4108' },
                { name : '�����', code : '4109' },
                { name : '�����', code : '4110' },
                { name : '�����', code : '4111' },
                { name : '����Ͽ��', code : '4112' },
                { name : '������', code : '4113' },
                { name : '������', code : '4114' },
                { name : '������', code : '4115' },
                { name : '�ܿ���', code : '4116' },
                { name : 'פ�����', code : '4117' }
               ]
        },
        {
            name : '����',
            code : '42',
            city : [
                { name : '�人��', code : '4201' },
                { name : '��ʯ��', code : '4202' },
                { name : 'ʮ����', code : '4203' },
                { name : '�˲���', code : '4205' },
                { name : '�差��', code : '4206' },
                { name : '������', code : '4207' },
                { name : '������', code : '4208' },
                { name : 'Т����', code : '4209' },
                { name : '������', code : '4210' },
                { name : '�Ƹ���', code : '4211' },
                { name : '������', code : '4212' },
                { name : '������', code : '4213' },
                { name : '��ʩ����������������', code : '4228' }
               ]
        },
        {
            name : '����',
            code : '43',
            city : [
                { name : '��ɳ��', code : '4301' },
                { name : '������', code : '4302' },
                { name : '��̶��', code : '4303' },
                { name : '������', code : '4304' },
                { name : '������', code : '4305' },
                { name : '������', code : '4306' },
                { name : '������', code : '4307' },
                { name : '�żҽ���', code : '4308' },
                { name : '������', code : '4309' },
                { name : '������', code : '4310' },
                { name : '������', code : '4311' },
                { name : '������', code : '4312' },
                { name : '¦����', code : '4313' },
                { name : '��������������������', code : '4331' }
               ]
        },
        {
            name : '�㶫',
            code : '44',
            city : [
                { name : '������', code : '4401' },
                { name : '�ع���', code : '4402' },
                { name : '������', code : '4403' },
                { name : '�麣��', code : '4404' },
                { name : '��ͷ��', code : '4405' },
                { name : '��ɽ��', code : '4406' },
                { name : '������', code : '4407' },
                { name : 'տ����', code : '4408' },
                { name : 'ï����', code : '4409' },
                { name : '������', code : '4412' },
                { name : '������', code : '4413' },
                { name : '÷����', code : '4414' },
                { name : '��β��', code : '4415' },
                { name : '��Դ��', code : '4416' },
                { name : '������', code : '4417' },
                { name : '��Զ��', code : '4418' },
                { name : '��ݸ��', code : '4419' },
                { name : '��ɽ��', code : '4420' },
                { name : '������', code : '4451' },
                { name : '������', code : '4452' },
                { name : '�Ƹ���', code : '4453' }
               ]
        },
        {
            name : '����',
            code : '45',
            city : [
                { name : '������', code : '4501' },
                { name : '������', code : '4502' },
                { name : '������', code : '4503' },
                { name : '������', code : '4504' },
                { name : '������', code : '4505' },
                { name : '���Ǹ���', code : '4506' },
                { name : '������', code : '4507' },
                { name : '�����', code : '4508' },
                { name : '������', code : '4509' },
                { name : '��ɫ��', code : '4510' },
                { name : '������', code : '4511' },
                { name : '�ӳ���', code : '4512' },
                { name : '������', code : '4513' },
                { name : '������', code : '4514' }
               ]
        },
        {
            name : '����',
            code : '46',
            city : [
                { name : '������', code : '4601' },
                { name : '������', code : '4602' },
                { name : '������', code : '4603' }
               ]
        },
        {
            name : '�Ĵ�',
            code : '51',
            city : [
                { name : '�ɶ���', code : '5101' },
                { name : '�Թ���', code : '5103' },
                { name : '��֦����', code : '5104' },
                { name : '������', code : '5105' },
                { name : '������', code : '5106' },
                { name : '������', code : '5107' },
                { name : '��Ԫ��', code : '5108' },
                { name : '������', code : '5109' },
                { name : '�ڽ���', code : '5110' },
                { name : '��ɽ��', code : '5111' },
                { name : '�ϳ���', code : '5113' },
                { name : 'üɽ��', code : '5114' },
                { name : '�˱���', code : '5115' },
                { name : '�㰲��', code : '5116' },
                { name : '������', code : '5117' },
                { name : '�Ű���', code : '5118' },
                { name : '������', code : '5119' },
                { name : '������', code : '5120' },
                { name : '���Ӳ���Ǽ��������', code : '5132' },
                { name : '���β���������', code : '5133' },
                { name : '��ɽ����������', code : '5134' }
               ]
        },
        {
            name : '����',
            code : '52',
            city : [
                { name : '������', code : '5201' }, 
                { name : '����ˮ��', code : '5202' },
                { name : '������', code : '5203' }, 
                { name : '��˳��', code : '5204' }, 
                { name : 'ͭ�ʵ���', code : '5222' },
                { name : 'ǭ���ϲ���������������', code : '5223' },
                { name : '�Ͻڵ���', code : '5224' },
                { name : 'ǭ�������嶱��������', code : '5226' },
                { name : 'ǭ�ϲ���������������', code : '5227' }
               ]
        },
        {
            name : '����',
            code : '53',
            city : [
                { name : '������', code : '5301' },
                { name : '������', code : '5303' },
                { name : '��Ϫ��', code : '5304' },
                { name : '��ɽ��', code : '5305' },
                { name : '��ͨ��', code : '5306' },
                { name : '������', code : '5307' },
                { name : '�ն���', code : '5308' },
                { name : '�ٲ���', code : '5309' },
                { name : '��������������', code : '5323' },
                { name : '��ӹ���������������', code : '5325' },
                { name : '��ɽ׳������������', code : '5326' },
                { name : '��˫���ɴ���������', code : '5328' },
                { name : '�������������', code : '5329' },
                { name : '�º���徰����������', code : '5331' },
                { name : 'ŭ��������������', code : '5333' },
                { name : '�������������', code : '5334' }
               ]
        },
        {
            name : '����',
            code : '54',
            city : [
                { name : '������', code : '5401' },
                { name : '��������', code : '5421' },
                { name : 'ɽ�ϵ���', code : '5422' },
                { name : '�տ������', code : '5423' },
                { name : '��������', code : '5424' },
                { name : '�������', code : '5425' },
                { name : '��֥����', code : '5426' }
               ]
        },
        {
            name : '����',
            code : '61',
            city : [
                { name : '������', code : '6101' },
                { name : 'ͭ����', code : '6102' },
                { name : '������', code : '6103' },
                { name : '������', code : '6104' },
                { name : 'μ����', code : '6105' },
                { name : '�Ӱ���', code : '6106' },
                { name : '������', code : '6107' },
                { name : '������', code : '6108' },
                { name : '������', code : '6109' },
                { name : '������', code : '6110' }
               ]
        },
        {
            name : '����',
            code : '62',
            city : [
                { name : '������', code : '6201' },
                { name : '��������', code : '6202' },
                { name : '�����', code : '6203' },
                { name : '������', code : '6204' },
                { name : '��ˮ��', code : '6205' },
                { name : '������', code : '6206' },
                { name : '��Ҵ��', code : '6207' },
                { name : 'ƽ����', code : '6208' },
                { name : '��Ȫ��', code : '6209' },
                { name : '������', code : '6210' },
                { name : '������', code : '6211' },
                { name : '¤����', code : '6212' },
                { name : '���Ļ���������', code : '6229' },
                { name : '���ϲ���������', code : '6230' }
               ]
        },
        {
            name : '�ຣ',
            code : '63',
            city : [
                { name : '������', code : '6301' },
                { name : '��������', code : '6321' },
                { name : '��������������', code : '6322' },
                { name : '���ϲ���������', code : '6323' },
                { name : '���ϲ���������', code : '6325' },
                { name : '�������������', code : '6326' },
                { name : '��������������', code : '6327' },
                { name : '�����ɹ������������', code : '6328' }
               ]
        },
        {
            name : '����',
            code : '64',
            city : [
                { name : '������', code : '6401' },
                { name : 'ʯ��ɽ��', code : '6402' },
                { name : '������', code : '6403' },
                { name : '��ԭ��', code : '6404' },
                { name : '������', code : '6405' }
               ]
        },
        {
            name : '�½�',
            code : '65',
            city : [
                { name : '��³ľ����', code : '6501' },
                { name : '����������', code : '6502' },
                { name : '��³������', code : '6521' },
                { name : '���ܵ���', code : '6522' },
                { name : '��������������', code : '6523' },
                { name : '���������ɹ�������', code : '6527' },
                { name : '���������ɹ�������', code : '6528' },
                { name : '�����յ���', code : '6529' },
                { name : '�������տ¶�����������', code : '6530' },
                { name : '��ʲ����', code : '6531' },
                { name : '�������', code : '6532' },
                { name : '���������������', code : '6540' },
                { name : '���ǵ���', code : '6542' },
                { name : '����̩����', code : '6543' }
               ]
         }
    ],
	provinceListID : "",
	cityListID : "",
	provinceOptionName : "",
	cityOptionName : "",
	addrID: "",
	init : function (json) //��ʽ{provinceListID :"",provinceOptionName:"",cityListID:"",cityOptionName:"",addrID:""};
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
					errormsg = formEle[i].title + "��ʽ����ȷ����ȷ��ʽ�ο���100/100.01/100.1";
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
					errormsg = formEle[i].title + "��ʽ����ȷ";
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
					errormsg = formEle[i].title + "��ʽ����ȷ����ȷ��ʽ�ο���http://www.tenpay.com";
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
					errormsg = formEle[i].title + "��ʽ����ȷ����ȷ��ʽ��0755-86013388-8888";
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
					errormsg = formEle[i].title + "��ʽ����ȷ";
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
					errormsg = formEle[i].title + "��ʽ����ȷ";
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
					errormsg = formEle[i].title + "��ʽ����ȷ";
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
					errormsg = formEle[i].title + "��ʽ����ȷ,��ȷ��ʽ�ο���20110101";
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
						errormsg = "��ʼʱ�������ڽ���ʱ��";
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
					errormsg = formEle[i].title + "��ʽ����ȷ,��ȷ��ʽ�ο���2011-01-01";
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
						errormsg = "��ʼʱ�������ڽ���ʱ��";
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
					errormsg = formEle[i].title + "��ʽ����ȷ,��ȷ��ʽ�ο���2011/01/01";
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
						errormsg = "��ʼʱ�������ڽ���ʱ��";
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
					errormsg = formEle[i].title + "��ʽ����,����գ�yyyy-mm-dd hh:mm:ss";
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
					errormsg = formEle[i].title + "��ʽ����,����գ�yyyymmdd hh:mm:ss";
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
		//У������Сʱ����
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
					errormsg = "����д" + formEle[date].title;
					this.showErrorMsg({
						msg : errormsg,
						ele : formEle[date]
					});
					formEle[date].focus();
					return false;
				} else if (!/^\d{8}$/.test(formEle[date].value)) {
					errormsg = "��ʽ����ȷ����ʽ��ο�20110101";
					this.showErrorMsg({
						msg : errormsg,
						ele : formEle[date]
					});
					formEle[date].focus();
					return false;
				} else if ("" == formEle[hms].value) {
					errormsg = "����д" + formEle[hms].title;
					this.showErrorMsg({
						msg : errormsg,
						ele : formEle[hms]
					});
					formEle[hms].focus();
					return false;
				} else if (!/^\d{2}:\d{2}:\d{2}$/.test(formEle[hms].value)) {
					errormsg = "��ʽ����ȷ����ʽ��ο�00:00:00";
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
		//У������
		if ("object" == typeof(this.config.pwd)) {
			if (this.config.pwd.passowdControl.isEmpty()) {
				errormsg = "����";
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
			this.msgBox.innerHTML = "����д" + json.msg;
			if ("select-one" == json.ele.type || "file" == json.ele.type) {
				this.msgBox.innerHTML = "??��ѡ��" + json.msg;
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
			parentNode : this.config.wrap, //����ؼ���ŵ�ID
			ctrlID : this.config.focusid, //����ȡ�񽹵�ʱ��ID�����ڱ���֤ʱ������
			submitName : this.config.elemensName, //post��get��cgiʱ��������name
			w : this.config.width, //��ʾ���
			h : this.config.height, //��ʾ�߶�
			tabIndex : this.config.tabindex,
			showLost : false,
			tipNode : "", //������ʾID
			ctrlEvn : null //replaceDeductApply.submitData//��������������ʱ���س��¼�
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
			this.xmlHttp.open("post", this.url, true); //�����˽�������(����ʽpost��get����ַ,true��ʾ�첽)
			this.xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			this.xmlHttp.send(para); //��������
		} else {
			this.url += "?" + para;
			this.xmlHttp.open("get", this.url, true); //�����˽�������(����ʽpost��get����ַ,true��ʾ�첽)
			this.xmlHttp.send(null); //��������
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
						alert("״̬�룺" + $this.xmlHttp.status + " ,�Ҳ��������ַ��");
						break;
					default:
						alert("״̬�룺" + $this.xmlHttp.status + " ,����δ֪����");
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
			//ָ���ύbtn
			if (this.config.submitObject && "object" == typeof(this.config.submitObject)) {
				this.submitBtn = this.config.submitObject;
				this.tempLoadingbarParentNode = this.submitBtn.parentNode;
				this.tempLoadingbarHTML = this.submitBtn.parentNode.innerHTML;
				this.submitBtn.parentNode.innerHTML = "<img src='/images/load.gif' style='position:relative;top:4px;' />" + "����Ϊ���ύ���ݣ����Ժ򡭡�";
				return;
			}
			//Ĭ���ύbtn
			var elements = this.config.form.elements;
			for (var i = 0; i < elements.length; i++) {
				if ("submit" == elements[i].type) {
					this.submitBtn = elements[i];
					this.tempLoadingbarParentNode = this.submitBtn.parentNode;
					this.tempLoadingbarHTML = elements[i].parentNode.innerHTML;
					this.submitBtn.parentNode.innerHTML = "<img src='/images/load.gif' style='position:relative;top:4px;' />" + "����Ϊ���ύ���ݣ����Ժ򡭡�";
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
//��ȡurl����
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
//�Ի���
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
	this.show = function (config) { //{title:"��ܰ��ʾ",msg:"��ã�",width:400,height:150,align:"",valign:"middle",icon:"4",btn:[{text:"ȷ��",clickevent:clickevent},{text:"ȡ��",clickevent:clickevent}]}
		this.config = config;
		this.listtype = 0;
		this.create();
		
		//����Ĭ�Ͻ���
		this.setFocus();
	}
	this.load = function (config) { //{title:"��ܰ��ʾ",msg:"��ã�",width:400,height:300,url:"url.html",btn:[{text:"ȷ��",clickevent:submitData},{text:"ȡ��",clickevent:clickevent}]}
		this.config = config;
		this.listtype = 1;
		this.create();
		
		//����Ĭ�Ͻ���
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
		if (this.listtype == 0) { //HTML��ʽ��ʾ
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
			if ("0" == iconindex) { //��ͼ����ʾ
				cntbox.innerHTML = "<table style='width:" + boxw + "px;height:" + boxh + "px;'><tr><td align='" + this.config.align + "' valign='" + this.config.valign + "' style='color:" + this.config.fontc + "'>" + this.config.msg + "</td></tr></table>";
			} else {
				cntbox.innerHTML = "<table style='width:" + boxw + "px;height:" + boxh + "px;'><tr><td align='" + this.config.align + "' valign='" + this.config.valign + "' style='width:32px;padding:0 6px;'><img src='../js/" + imgsrc + "' width='32' height='34'/></td><td align='" + this.config.align + "' valign='" + this.config.valign + "' style='color:" + fontc + "'>" + this.config.msg + "</td></tr></table>";
			}
		} else { //iframe��ʽ��ʾ
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
				if (this.config.btn && this.config.btn.length > 0) { //ָ����ť
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
									if (1 != $this.config.btn[index].closeDialog) { //.closeDialog != 1 ��رնԻ���
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
	this.adjustPosition = function () { //���mask �� �Ի��������ʾ
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
		var maskh = Math.max(websh, webch); //ȡ��ҳ����ɼ��ߵ����ֵ
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
	this.close = function () { //�رնԻ���
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
	this.drag = function () { //��ק�Ի���
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
	this.setOpacity = function (node, val) { //����mask�Ĳ�͸����
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
		��������var actualLeft = element.offsetLeft;
		��������var current = element.offsetParent;
		
		��������while(current !== null) {
			������������actualLeft += current.offsetLeft;
			������������current = current.offsetParent;
			��������
		}
		
		��������if(document.compatMode == "BackCompat") {
			������������var elementScrollLeft = document.body.scrollLeft;
			��������
		}
		else {
			������������var elementScrollLeft = document.documentElement.scrollLeft;
			��������
		}
		
		��������return actualLeft - elementScrollLeft;
		����
	}
	this.getElementViewTop = function (element) {
		��������var actualTop = element.offsetTop;
		��������var current = element.offsetParent;
		
		��������while(current !== null) {
			������������actualTop += current.offsetTop;
			������������current = current.offsetParent;
			��������
		}
		��������var elementScrollTop = document.documentElement.scrollTop;
		
		��������return actualTop;
		����
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
		
		var btnPrevYear = document.createElement("a"); //��һ��
		btnPrevYear.href = "###";
		btnPrevYear.innerHTML = "<<";
		btnPrevYear.onclick = function () {
			$this.prevYear()
		};
		btnPrevYear.style.cssText = "height:25px;width:25px;text-align:center;display:block;float:left;color:#333;text-decoration:none";
		yearAndMonthlist.appendChild(btnPrevYear);
		
		var btnPrevMonth = document.createElement("a"); //��һ��
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
		
		var btnNextMonth = document.createElement("a"); //��һ��
		btnNextMonth.href = "###";
		btnNextMonth.innerHTML = ">";
		btnNextMonth.onclick = function () {
			$this.nextMonth()
		};
		btnNextMonth.style.cssText = "height:25px;width:15px;text-align:center;display:block;float:left;color:#333;text-decoration:none";
		yearAndMonthlist.appendChild(btnNextMonth);
		
		var btnNextYear = document.createElement("a"); //��һ��
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
		var weekdaylist = ["��", "һ", "��", "��", "��", "��", "��"];
		for (var i = 0; i < weekdaylist.length; i++) {
			var newtd = document.createElement("td");
			newtd.style.cssText = "line-hieght:20px;height:15px;border-top:1px solid #CCC;font-weight:normal;color:#444;border-bottom:1px solid #CCC;padding:5px 3px;";
			newtd.innerHTML = weekdaylist[i];
			weekday.appendChild(newtd);
		}
		weekTbody.appendChild(weekday);
		this.createDayNode();
		
		//ʱ��
		if (this.config.showHMS && 1 == this.config.showHMS) {
			var hmsdiv = document.createElement("div");
			hmsdiv.style.cssText = "padding:3px 5px;color:#369;border-top:1px solid #CCC;font-size:12px;position:absolute;left:0;bottom:0px;width:152px";
			var valspan = document.createElement("span");
			valspan.innerHTML = "ʱ�䣺";
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
			btn.value = "ȷ��";
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
			btnup.innerHTML = "��";
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
			btndown.innerHTML = "��";
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
		//ָ�����Ĭ��ʱ����
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
		if (!this.yearMonthDay) { //����Ƿ��һ�������б������������ҵ���ƥ�������
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
		if (this.year % 4 == 0) { //����Ƿ�Ϊ����
			monthDay[1] = 29;
		} else {
			monthDay[1] = 28;
		}
		var endIndex = parseInt(monthDay[this.month - 1] + startIndex, 10);
		var $this = this;
		this.yearAndMonthText.innerHTML = this.year + "��" + this.month + "��"; //��ʾ��һ��������
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
					}; //��꾭������
					newa.onmouseout = function () {
						this.style.background = tempbgcolor;
						this.style.color = tempfcolor
					}; //����뿪����
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
�������� * ֤�鵼��
��д���� * haihauhuang
��д���� * 2011-11-29
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
		var oScript = document.createElement("script"); //����script��ǩ
		oScript.type = "text/javascript"; //���type����
		oScript.src = "https://mch.tenpay.com/cgi-bin/mch_change_logintype.cgi?jsonp=jsonpCallback&date=" + new Date(); //���src
		document.getElementsByTagName('head')[0].appendChild(oScript); //��script��ǩ���Ӹ�head��ǩ
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
			msg += "<span class='extend_cert'>����֤��ɹ�����ѡ��ҳ�涥�ˡ���ʾ��ֹ�����ݡ�����ɵ��롣</span>";
			msg += "<img src='/res_mch/common/img/ie_level.jpg' />";
		} else {
			msg += "<span class='extend_cert'>����֤��ɹ�����ѡ��ҳ��ײ�����ʾ���ݡ�����ɵ��롣</span>";
			msg += "<img src='/res_mch/common/img/ie_high.jpg' />";
			height = 240;
		}
		msg += "<span class='back_to_index'>��Ҳ���Է�����ҳ����֤���¼����ɲ�����<span>";
		new Dialog().show({
			title : "��ʾ",
			width : 410,
			height : height,
			msg : msg,
			btn : [{
					text : "��֪����"
				}, {
					text : "������ҳ",
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
