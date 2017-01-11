/***********************************************************
 * Copyright (c) 2005-2012, TENPAY.COM All rights reserved *
 ***********************************************************/

/**
 * @fileOverView 商户系统API接口库
 * @author: haihuahuang
 * @version: 
 * @encode: GB2312
 * 
 * @modify:
 *     2012/04/26 haihuahuang create
 */
 
/** 去掉字符串两侧空白符 */
String.prototype.trim = function(){
    return this.replace(/(^\s*)|(\s*$)/g, '');
};
/** 去掉字符串空白符 */
String.prototype.trimAll = function(){
    return this.replace(/\s*/g, '');
};
/** 替换全角字符,1个中文=2个字符 */
String.prototype.len = function(){
    return this.replace(/[^\x00-\xff]/ig, '**').length;
};

String.prototype.fillBefore=function(chr,bit)
{var len=this.length;var shift=bit-len+1;var str=this;if(shift>0)
{var a=new Array(shift);str=a.join(chr)+str;a=null;}
return str;};Date.prototype.validDate=function(str,fmt){var tmp="";fmt=fmt||"%y%M%d%h%m%s";tmp=fmt;fmt=fmt.replace("%y","(\\d{4})");fmt=fmt.replace("%M","(\\d{1,2})");fmt=fmt.replace("%d","(\\d{1,2})");fmt=fmt.replace("%h","(\\d{1,2})");fmt=fmt.replace("%m","(\\d{1,2})");fmt=fmt.replace("%s","(\\d{1,2})");fmt=fmt.replace("%i","(\\d{1,3})");fmt=fmt.replace("%w","(星期[日|一|二|三|四|五|六])");fmt=fmt.replace("%W","(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)");fmt=fmt.replace("%a","(日|一|二|三|四|五|六)");fmt=fmt.replace("%A","(Sun\\.|Mon\\.|Tues\\.|Wed\\.|Thur\\.|Fri\\.|Sat\\.)");var regExp=new RegExp("^"+fmt+"$");var group=regExp.exec(str);var _year,_month,_date,_hour,_minute,_second,_millisecond;var yIndex=getIndex("y",tmp);var MIndex=getIndex("M",tmp);var dIndex=getIndex("d",tmp);var hIndex=getIndex("h",tmp);var mIndex=getIndex("m",tmp);var sIndex=getIndex("s",tmp);var iIndex=getIndex("i",tmp);var isUndefined=(undefined===yIndex&&undefined===MIndex&&undefined===dIndex&&undefined===hIndex&&undefined===mIndex&&undefined===sIndex&&undefined===iIndex);var _is=false;var d=new Date();if(null!=group){group.shift();_year=undefined===yIndex?d.getFullYear():parse(group[yIndex]);_month=undefined===MIndex?d.getMonth():parse(group[MIndex])-1;_date=undefined===dIndex?d.getDate():parse(group[dIndex]);_hour=undefined===hIndex?d.getHours():parse(group[hIndex]);_minute=undefined===mIndex?d.getMinutes():parse(group[mIndex]);_second=undefined===sIndex?d.getSeconds():parse(group[sIndex]);_millisecond=undefined===iIndex?d.getMilliseconds():parse(group[iIndex]);d=new Date(_year,_month,_date,_hour,_minute,_second,_millisecond);_is=(false===isUndefined)&&((d.getFullYear()===_year)&&(d.getMonth()===_month)&&(d.getDate()===_date)&&(d.getHours()===_hour)&&(d.getMinutes()===_minute)&&(d.getSeconds()===_second)&&(d.getMilliseconds()===_millisecond));}
function parse(v){return typeof(v)=="undefined"?0:parseInt(v,10);}
function getIndex(flag,fmt){var tmp=fmt.replace(/[^%yMdhmsi]+/g,"");var arr=tmp.split("%");var size=arr.length;for(var i=1;i<size;i++){if(arr[i]==flag){return(i-1);}}
return undefined;}
return{isValid:_is,date:d};};Date.prototype.parseDate=function(str,fmt){return this.validDate(str,fmt).date;};Date.prototype.dateDiff=function(interval,date){var diff=0;switch(interval){case'y':diff=date.getFullYear()-this.getFullYear();break;case'q':diff=((date.getMonth()+1)+((date.getFullYear()-this.getFullYear())*12)-(this.getMonth()+1))/3;break;case'n':diff=(date.getMonth()+1)+((date.getFullYear()-this.getFullYear())*12)-(this.getMonth()+1);break;case'd':diff=(date-this)/86400000;break;case'w':diff=(date-this)/(86400000*7);break;case'h':diff=(date-this)/3600000;break;case'm':diff=(date-this)/60000;break;case's':diff=(date-this)/1000;break;case'i':diff=date.getTime()-this.getTime();break;default:diff=date.getTime()-this.getTime();break;}
return diff;};Date.prototype.dateAdd=function(interval,num){switch(interval){case'y':this.setFullYear(this.getFullYear()+num);break;case'q':this.setMonth(this.getMonth()+(num*3));break;case'n':this.setMonth(this.getMonth()+num);break;case'd':this.setDate(this.getDate()+num);break;case'w':this.setDate(this.getDate()+(num*7));break;case'h':this.setHours(this.getHours()+num);break;case'm':this.setMinutes(this.getMinutes()+num);break;case's':this.setSeconds(this.getSeconds()+num);break;case'i':this.setMilliseconds(this.getMilliseconds()+num);break;default:this.setMilliseconds(this.getMilliseconds()+num);break;}
return this;};Date.prototype.format=function(fmt,isFill){var year=""+this.getFullYear();var month=""+(this.getMonth()+1);var date=""+this.getDate();var hour=""+this.getHours();var minute=""+this.getMinutes();var second=""+this.getSeconds();var miSec=""+this.getMilliseconds();var day=this.getDay();var cn_weeks=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];var cn_weeks_abbr=["日","一","二","三","四","五","六"];var en_weeks=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];var en_weeks_abbr=["Sun.","Mon.","Tues.","Wed.","Thur.","Fri.","Sat."];isFill=typeof(isFill)=="boolean"?isFill:true;fmt=fmt||"%y%M%d%h%m%s%i %w";fmt=fmt.replace("%y",year);fmt=fmt.replace("%M",isFill?month.fillBefore("0",2):month);fmt=fmt.replace("%d",isFill?date.fillBefore("0",2):date);fmt=fmt.replace("%h",isFill?hour.fillBefore("0",2):hour);fmt=fmt.replace("%m",isFill?minute.fillBefore("0",2):minute);fmt=fmt.replace("%s",isFill?second.fillBefore("0",2):second);fmt=fmt.replace("%i",isFill?miSec.fillBefore("0",3):miSec);fmt=fmt.replace("%w",cn_weeks[day]);fmt=fmt.replace("%W",en_weeks[day]);fmt=fmt.replace("%a",cn_weeks_abbr[day]);fmt=fmt.replace("%A",en_weeks_abbr[day]);return fmt;};

var MCH = {};
(function(){
        /**
	 * @namespace DOM Selector
	 */    
	MCH.Dom = {
		/**
		 * 通过ID获取对象, 若为对象直接返回
		 * @param {Object|String} id
		 * @return {Object}
		 */
		$: function(id) {
			return (typeof id == 'string') ? document.getElementById(id) : id;
		},
		/**
		 * 通过样式名获取元素集合
		 * @function
		 * @param {String} n 样式名
		 * @param {String} [t] 匹配的标签名
		 * @param {Object} [p:document] 父节点
		 * @return {Array}
		 */
		getElementsByClassName: function() {
			// ie9 support getElementsByClassName
			// ie8 support querySelectorAll
			if (document.querySelectorAll || document.getElementsByClassName) {
				return function(n, t, p) {
					var pNode = (typeof p == 'string') ? document.getElementById(p) : p || document,
						el = (document.getElementsByClassName && pNode.getElementsByClassName(n)) || pNode.querySelectorAll('.' + n),
						len = el.length;
					if (len > 0 && t) {
						var _el = el,
							el = [],
							tag = t.toLowerCase();
						for (var i = 0; i < len; i++) {
							if (_el[i].nodeName.toLowerCase() == tag) {
								el.push(_el[i]);
							}
						}
					}
					return el;
				};
			} else {
				// ie6, ie7 & other not support
				return function(n, t, p) {
					var tag = t || '*',
						pNode = (typeof p == 'string') ? document.getElementById(p) : p || document,
						el = pNode.getElementsByTagName(tag),
						_el = [],
						len = el.length;
					if (len > 0) {
						var pattern = new RegExp('(?:^|\\s+)' + n.replace(/\-/g, '\\-') + '(?:\\s+|$)');
						for (var i = 0; i < len; i++) {
							if (el[i].className && pattern.test(el[i].className)) {
								_el.push(el[i]);
							}
						}
					}
					return _el;
				};
			}
		}(),
		/**
		 * 是否存在样式(支持多个)
		 * @param {String} c 样式名
		 * @param {Object} e 元素
		 * @return {Boolean}
		 */
		hasClass: function(c, e) {
			c = c.trim().split(/\s+/);
			var cls = ' ' + e.className + ' ', i = 0, len = c.length;
			for (; i < len; i++) {
				if (cls.indexOf(' ' + c[i] + ' ') == -1) return false;
			}
			return true;
		},
		/**
		 * 添加样式(支持多个)
		 * @param {String} c 样式名 'a' | 'a b' | 'a b c'
		 * @param {Object} e 元素
		 */
		addClass: function(c, e) {
			c = c.trim().split(/\s+/);
			var cls = e.className, i = 0, len = c.length;
			for (; i < len; i++) {
				cls = (' ' + cls + ' ').replace(' ' + c[i] + ' ', ' ');
			}
			cls += ' ' + c.join(' ');
			e.className = cls.trim();
		},
		/**
		 * 移除样式(支持多个)
		 * @param {String} c 样式名 'a' | 'a b' | 'a b c'
		 * @param {Object} e 元素
		 */
		removeClass: function(c, e) {
			c = c.trim().split(/\s+/);
			var cls = e.className, i = 0, len = c.length;
			for (; i < len; i++) {
				cls = (' ' + cls + ' ').replace(' ' + c[i] + ' ', ' ');
			}
			e.className = cls.trim();
		},
		/**
		 * 替换样式 c1替换为c2
		 * @param {String} c1 样式名
		 * @param {String} c2 样式名
		 * @param {Object} e 元素
		 */
		replaceClass: function(c1, c2, e) {
            MCH.Dom.removeClass(c1, e);
            MCH.Dom.addClass(c2, e);
		},
        /**
		 * 添加/移除样式(支持多个)
		 * @param {String} c 样式名
		 * @param {Object} e 元素
		 */
		toggleClass: function(c, e) {
			MCH.Dom.hasClass(c, e) ? MCH.Dom.removeClass(c, e) : MCH.Dom.addClass(c, e);
		},
		/**
		 * 获取元素指定样式
		 * @param {Object} e 元素
		 * @param {String} name 样式
		 * @return {String|Null}
		 */
		getStyle: function(e, name) {
			if (e.style[name]) {
				return e.style[name];
			} else if (e.currentStyle) { // IE
				return e.currentStyle[name];
			} else if (document.defaultView && document.defaultView.getComputedStyle) { // W3C
				name = name.replace(/([A-Z])/g, '-$1').toLowerCase();
				var s = document.defaultView.getComputedStyle(e, '');
				return s && s.getPropertyValue(name);
			}
			return null;
		},
        remove : function(obj){
            if(obj.removeNode){ 
                obj.removeNode(true);
            }else{
                if(obj.parentNode){
                    obj.parentNode.removeChild(obj);
                }
            }
            obj = null;        
        }
	};
    
    /**
     * @namespace Valid object 表单验证类
     */
    MCH.Valid = {
        type : "default",
        currentInput : null,
        currentInputVal : null,
        currentInputName : null,
        isNull : true,
        position : null,
        defaultVal : null,
        sameValue : null,
        classname : null,        
        feature: null,        
        msg : "",
        append : false,
        pwdctl : 'passwdctl',
        handle : null,
        init : function(config){
            this.currentInput = MCH.Dom.$(config.id);
            this.currentInputVal = MCH.Utils.trim(this.currentInput.value);
            this.currentInputName = config.name ? config.name : null;
            this.isNull = config.isNull === undefined ? true : config.isNull;
            this.type = config.type ? config.type : "default";
            this.position = config.position ? config.position : null;
            this.defaultVal = config.defaultVal ? config.defaultVal : null;
            this.sameValue = config.sameValue ? config.sameValue : null;
            this.feature = config.feature? config.feature: null;
            this.classname = config.classname ? config.classname : null;
            this.msg = config.msg ? config.msg : "";
            this.append = config.append ? config.append : false;
            this.pwdctl = config.pwdctl ? config.pwdctl : 'passwdctl';
            this.handle = config.handle ? config.handle : null;//验证函数
	    this.pwdsame = config.pwdsame ? config.pwdsame : null;
        },
        /**
         *已废弃，建议使用MCH.Valid.valid_2()
         *@param 无
         *@return 无
         */
        valid : function(config){
            var returnStr = true;
            var len = config.length ? config.length : 0;
            if(!len) return;
            for(var i=0; i<len; i++){
                var o = config[i];
                var currentEle = MCH.Dom.$(o.id);
                var val = MCH.Utils.trim(currentEle.value);                
                var type = o.type ? o.type : "default";
                var position = o.position ? o.position : null;
                var defaultVal = o.defaultVal ? o.defaultVal : null;
	        var sameValue = o.sameValue ? o.sameValue : null;
                if(type != "passwd" && !o.isNull && !val){
                    this.showErrMsg(currentEle, o.msg["null"], position);
                    returnStr = false;
                }else{
                    this.hideErrMsg(currentEle);
                }
                switch(type){                 
                    case "passwd" : {
                        var p1_ctrl = MCH.Dom.$("passwdctl");
                        if(!MCH.Passwd.getEditLength(p1_ctrl)){
                            this.showErrMsg(currentEle, o.msg["null"], position);
                            returnStr = false;
                        }            
                        break;
                    }
                    case "email" : {
                        var re = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;
                        if(val && !re.test(val)){
                            this.showErrMsg(currentEle, o.msg["error"], position);
                            returnStr = false;
                        }                        
                        break;
                    }
                    case "cre_id" : {                        
                        if(val && !this.isCnID(val)){
                            this.showErrMsg(currentEle, o.msg["error"], position);
                            returnStr = false;
                        }                        
                        break;
                    }
                    case "select" : {
                        if(val == "" || val == "0"){
                            this.showErrMsg(currentEle, o.msg["null"], position);
                            returnStr = false;
                        }                        
                        break;
                    }
                    case "same" : {
                        if(val && val != sameValue){
                            this.showErrMsg(currentEle, o.msg["error"], position);
                            returnStr = false;
                        }                                
                        break;
                    }
                    case "mobile": {
                        if (val && !this.isMobile(val)){
                            this.showErrMsg(currentEle, o.msg["error"], position);
                            returnStr = false;
                        }
                        break;
                    }
                    case "website" : {
                        if (val && !this.isURL(val)){
                            this.showErrMsg(currentEle, o.msg["error"], position);
                            returnStr = false;
                        }
                        break;
                    }
                    case "zipcode" : {
                        if (val && !this.isZipcode(val)){
                            this.showErrMsg(currentEle, o.msg["error"], position);
                            returnStr = false;
                        }
                        break;
                    }
                    case "telephone" : {//带区号，分机号可带可不带的电话号码
                        if (val && !this.isTelephone(val)){
                            this.showErrMsg(currentEle, o.msg["error"], position);
                            returnStr = false;
                        }
                        break;
                    }
                    case "tel" : {//不带区号，不带分机号可带可不带的电话号码
                        var re = /^\d{7,8}$/;
                        if (val && !re.test(val)){
                            this.showErrMsg(currentEle, o.msg["error"], position);
                            returnStr = false;
                        }
                        break;
                    }
                    case "areacode" : {//区号
                        var re = /^\d{3,4}$/;   
                        if(!o.isNull && val == defaultVal){
                            this.showErrMsg(currentEle, o.msg["null"], position);
                            returnStr = false;
                            break;
                        }
                        if (val && !re.test(val) && val != defaultVal){
                            this.showErrMsg(currentEle, o.msg["error"], position);
                            returnStr = false;
                        }
                        break;
                    }
                    case "extension" : {//分机号
                        var re = /^\d{1,6}$/;
                        if(!o.isNull && val == defaultVal){
                            this.showErrMsg(currentEle, o.msg["null"], position);
                            returnStr = false;
                            break;
                        }
                        if (val && !re.test(val) && val != defaultVal){
                            this.showErrMsg(currentEle, o.msg["error"], position);
                            returnStr = false;
                        }
                        break;
                    }
                    case "img_vcode" : {
                        if (val && !this.isImgVCode(val)){
                            this.showErrMsg(currentEle, o.msg["error"], position);
                            returnStr = false;
                        }
                        break;
                    } 
		    case "time" : {
		        if (val && !this.isTime(val)){
                            this.showErrMsg(currentEle, o.msg["error"], position);
                            returnStr = false;
                        }
                        break;
	           }
		   case "number": {
		        if (val && !/^\d+$/.test(val)){
                            this.showErrMsg(currentEle, o.msg["error"], position);
                            returnStr = false;
                        }
		        break;
	          }
		  case "bank_id": {
		       if (val && !this.isBankId(val)){
                            this.showErrMsg(currentEle, o.msg["error"], position);
                            returnStr = false;
                        }
                        break;
		  }
                  default : {
                        if(!o.isNull && !MCH.Utils.trim(currentEle.value)){
                            this.showErrMsg(currentEle, o.msg["null"], position);
                            returnStr = false;
                        }
                        break;
                    }
                }                
            }            
            return returnStr;
        },
        /**
         * 检查复选框是否选择 
         * */
        checkbox : function(configs){
            var returnStr = true;
            var len = configs.length ? configs.length : 0;
            if(!len) return false;
            for(var i=0; i<len; i++){
                var config = configs[i];
                this.init(config);
                this.hideErrMsg(this.currentInput);
                switch(this.type){
                    case "radio" : {
                        if(this.currentInputName && this.handle && !this.handle.call(this, this.currentInputName)){
                            this.showErrMsg_2(this.currentInput, this.msg["null"]);
                            returnStr = false;
                        }
                        break;
                    }
                    default : {
                        if(this.currentInputName && this.handle && !this.handle.call(this, this.currentInputName)){
                            this.showErrMsg_2(this.currentInput, this.msg["null"]);
                            returnStr = false;
                        }
                        break;
                    }
                }
            }
            return returnStr;
        },
        valid_2 : function(configs){
            var returnStr = true;
            var len = configs.length ? configs.length : 0;
            if(!len) return false;
            for(var i=0; i<len; i++){
                var config = configs[i];
                this.init(config); 
                this.hideErrMsg(this.currentInput);
                //默认值
                if(!this.isNull && this.defaultVal && this.defaultVal == this.currentInputVal){
                    this.showErrMsg_2(this.currentInput, this.msg["null"]);
                    returnStr = false;
                }
                //相同值
                if(!this.isNull && this.sameValue && this.sameValue != this.currentInputVal){
                    this.showErrMsg_2(this.currentInput, this.msg["same"]);
                    returnStr = false;
                } 
                //判断字符串长度
                if(!this.isNull && this.feature){
                    if(!this.WidthCheck(this.currentInputVal,this.feature)){
                    	this.showErrMsg_2(this.currentInput, this.msg["long"]);
                    	returnStr = false;
                    }
                } 
                switch(this.type){                 
                    case "passwd" : {
                        var p1_ctrl = MCH.Dom.$(this.pwdctl);
                        if(!MCH.Passwd.getEditLength(p1_ctrl)){
                            this.showErrMsg_2(this.currentInput, this.msg["null"]);
                            returnStr = false;
                        }
			if(this.pwdsame && MCH.Passwd.getEditLength(p1_ctrl) != MCH.Passwd.getEditLength(MCH.Dom.$(this.pwdsame))){
			    this.showErrMsg_2(this.currentInput, this.msg["nosame"]);
                            returnStr = false;
			}
                        break;
                    }
                    case "amount" : {
                       /* 
                        if (!this.isNull && !this.currentInputVal) {
                            this.showErrMsg_2(this.currentInput, this.msg["null"]);
                            returnStr = false;
                        }
                        var v = this.formatAmount(this.currentInputVal);
                        if (this.currentInputVal && (!v || 0 == v)){
                            this.showErrMsg_2(this.currentInput, this.msg["error"]);
                            returnStr = false;
                        }
                        */
                        //var re = /^[0-9]+(\.[0-9]{2})?$/;
                        var re = /^[0-9]+?$/;
			if (!this.isNull && !this.currentInputVal) {
                            this.showErrMsg_2(this.currentInput, this.msg["null"]);
                            returnStr = false;
                        }
                        if (this.currentInputVal &&this.defaultVal != this.currentInputVal && !re.test(this.currentInputVal)){
                            this.showErrMsg_2(this.currentInput, this.msg["error"]);
                            returnStr = false;
                        }
                        break;
                    }
                    case "loan_amount" : {
                       /* 
                        if (!this.isNull && !this.currentInputVal) {
                            this.showErrMsg_2(this.currentInput, this.msg["null"]);
                            returnStr = false;
                        }
                        var v = this.formatAmount(this.currentInputVal);
                        if (this.currentInputVal && (!v || 0 == v)){
                            this.showErrMsg_2(this.currentInput, this.msg["error"]);
                            returnStr = false;
                        }
                        */
                        //var re = /^[0-9]+(\.[0-9]{2})?$/;
						var re =  /^[0-9]{12}$/;
						if (!this.isNull && !this.currentInputVal) {
                            this.showErrMsg_2(this.currentInput, this.msg["null"]);
                            returnStr = false;
                        }
                        if (this.currentInputVal &&this.defaultVal != this.currentInputVal && !re.test(this.currentInputVal)){
                            this.showErrMsg_2(this.currentInput, this.msg["error"]);
                            returnStr = false;
                        }
                        break;
                    }
					case "short_amount" : {
                       /* 
                        if (!this.isNull && !this.currentInputVal) {
                            this.showErrMsg_2(this.currentInput, this.msg["null"]);
                            returnStr = false;
                        }
                        var v = this.formatAmount(this.currentInputVal);
                        if (this.currentInputVal && (!v || 0 == v)){
                            this.showErrMsg_2(this.currentInput, this.msg["error"]);
                            returnStr = false;
                        }
                        */
                        var re = /^[0-9]+(\.[0-9]{1,2})?$/;
						//var re =  /^[0-9]{12}$/;
						if (!this.isNull && !this.currentInputVal) {
                            this.showErrMsg_2(this.currentInput, this.msg["null"]);
                            returnStr = false;
                        }
                        if (this.currentInputVal &&this.defaultVal != this.currentInputVal && !re.test(this.currentInputVal)){
                            this.showErrMsg_2(this.currentInput, this.msg["error"]);
                            returnStr = false;
                        }
                        break;
                    }
	 	    case "age" : {
                        var re = /^[1-9][0-9]$/;
			if (!this.isNull && !this.currentInputVal) {
                            this.showErrMsg_2(this.currentInput, this.msg["null"]);
                            returnStr = false;
                        }
                        if (this.currentInputVal && this.defaultVal != this.currentInputVal &&!re.test(this.currentInputVal)){
                            this.showErrMsg_2(this.currentInput, this.msg["error"]);
                            returnStr = false;
                        }                       
                        break;
                    }
	 	    case "email" : {
                        var re = /^[0-9a-zA-Z\_]+\@[0-9a-zA-Z\_]+\.[a-zA-Z\.]+$/;
                        //var re = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;
			if (!this.isNull && !this.currentInputVal) {
                            this.showErrMsg_2(this.currentInput, this.msg["null"]);
                            returnStr = false;
                        }
                        if (this.currentInputVal && this.defaultVal != this.currentInputVal &&!re.test(this.currentInputVal)){
                            this.showErrMsg_2(this.currentInput, this.msg["error"]);
                            returnStr = false;
                        }                       
                        break;
                    }
	 	    case "username" : {
                        var re = /^[a-zA-Z0-9][a-zA-Z0-9._-]{2,16}[a-zA-Z0-9]$/;
			if (!this.isNull && !this.currentInputVal) {
                            this.showErrMsg_2(this.currentInput, this.msg["null"]);
                            returnStr = false;
                        }
                        if (this.currentInputVal && this.defaultVal != this.currentInputVal &&!re.test(this.currentInputVal)){
                            this.showErrMsg_2(this.currentInput, this.msg["error"]);
                            returnStr = false;
                        }                       
                        break;
                    }
	 	    case "newpwd" : {
                        var re = /^[a-zA-Z0-9]{6,16}$/;
			if (!this.isNull && !this.currentInputVal) {
                            this.showErrMsg_2(this.currentInput, this.msg["null"]);
                            returnStr = false;
                        }
                        if (this.currentInputVal && this.defaultVal != this.currentInputVal &&!re.test(this.currentInputVal)){
                            this.showErrMsg_2(this.currentInput, this.msg["error"]);
                            returnStr = false;
                        }                       
                        break;
                    }
	 	    case "percent" : {
                        var re =  /^\d{1,}(\.\d{1,2})?$/; 
			if (!this.isNull && !this.currentInputVal) {
                            this.showErrMsg_2(this.currentInput, this.msg["null"]);
                            returnStr = false;
                        }
                        if (this.currentInputVal && this.defaultVal != this.currentInputVal &&parseInt(this.currentInputVal)>100){
                            this.showErrMsg_2(this.currentInput, this.msg["above"]);
                            returnStr = false;
                        }                       
                        if (this.currentInputVal && this.defaultVal != this.currentInputVal &&parseInt(this.currentInputVal)<0){
                            this.showErrMsg_2(this.currentInput, this.msg["below"]);
                            returnStr = false;
                        }                       
                        if (this.currentInputVal && this.defaultVal != this.currentInputVal &&!re.test(this.currentInputVal)){
                            this.showErrMsg_2(this.currentInput, this.msg["error"]);
                            returnStr = false;
                        }                       
                        break;
                    }
			case "percent_wan" : {//检查万分号
                        var re =  /^\d{1,}(\.\d{1,2})?$/; 
			if (!this.isNull && !this.currentInputVal) {
                            this.showErrMsg_2(this.currentInput, this.msg["null"]);
                            returnStr = false;
                        }
                        if (this.currentInputVal && this.defaultVal != this.currentInputVal &&parseInt(this.currentInputVal)>10000){
                            this.showErrMsg_2(this.currentInput, this.msg["above"]);
                            returnStr = false;
                        }                       
                        if (this.currentInputVal && this.defaultVal != this.currentInputVal &&parseInt(this.currentInputVal)<0){
                            this.showErrMsg_2(this.currentInput, this.msg["below"]);
                            returnStr = false;
                        }                       
                        if (this.currentInputVal && this.defaultVal != this.currentInputVal &&!re.test(this.currentInputVal)){
                            this.showErrMsg_2(this.currentInput, this.msg["error"]);
                            returnStr = false;
                        }                       
                        break;
                    }
                    case "cre_id" : {
                        if (!this.isNull && !this.currentInputVal) {
                            this.showErrMsg_2(this.currentInput, this.msg["null"]);
                            returnStr = false;
                        }
                        if (this.currentInputVal && this.defaultVal != this.currentInputVal &&!this.isCnID(this.currentInputVal)){
                            this.showErrMsg_2(this.currentInput, this.msg["error"]);
                            returnStr = false;
                        }
                        break;
                    }
                    case "mobile" : { 
                        if (!this.isNull && !this.currentInputVal) {
                            this.showErrMsg_2(this.currentInput, this.msg["null"]);
                            returnStr = false;
                        }
                        if (this.currentInputVal && this.defaultVal != this.currentInputVal &&!this.isMobile(this.currentInputVal)){
                            this.showErrMsg_2(this.currentInput, this.msg["error"]);
                            returnStr = false;
                        }
                        break;
                    }
                    case "website" : { 
                        if (!this.isNull && !this.currentInputVal) {
                            this.showErrMsg_2(this.currentInput, this.msg["null"]);
                            returnStr = false;
                        }
                        if (this.currentInputVal && this.defaultVal != this.currentInputVal &&!this.isURL(this.currentInputVal)){
                            this.showErrMsg_2(this.currentInput, this.msg["error"]);
                            returnStr = false;
                        }
                        break;
                    }
                    case "postcode" : { 
                        if (!this.isNull && !this.currentInputVal) {
                            this.showErrMsg_2(this.currentInput, this.msg["null"]);
                            returnStr = false;
                        }
                        if (this.currentInputVal && this.defaultVal != this.currentInputVal &&!this.isZipcode(this.currentInputVal)){
                            this.showErrMsg_2(this.currentInput, this.msg["error"]);
                            returnStr = false;
                        }
                        break;
                    }
                    case "date" : {//日期
                        var re = /^20[0-9]{2}\-[0-1][0-9]\-[0-3][0-9]$/;
                        if (!this.isNull && !this.currentInputVal) {
                            this.showErrMsg_2(this.currentInput, this.msg["null"]);
                            returnStr = false;
                        }
                        if (this.currentInputVal && this.defaultVal != this.currentInputVal &&!re.test(this.currentInputVal)){
                            this.showErrMsg_2(this.currentInput, this.msg["error"]);
                            returnStr = false;
                        }
                        break;
                    }
                    case "mobilecode" : {//手机验证码
                        var re = /^[0-9]{6}$/;
                        if (!this.isNull && !this.currentInputVal) {
                            this.showErrMsg_2(this.currentInput, this.msg["null"]);
                            returnStr = false;
                        }
                        if (this.currentInputVal && this.defaultVal != this.currentInputVal &&!re.test(this.currentInputVal)){
                            this.showErrMsg_2(this.currentInput, this.msg["error"]);
                            returnStr = false;
                        }
                        break;
                    }
                    case "telephone" : {//带区号，分机号可带可不带的电话号码 
                        if (!this.isNull && !this.currentInputVal) {
                            this.showErrMsg_2(this.currentInput, this.msg["null"]);
                            returnStr = false;
                        }
                        if (this.currentInputVal && this.defaultVal != this.currentInputVal &&!this.isTelephone(this.currentInputVal)){
                            this.showErrMsg_2(this.currentInput, this.msg["error"]);
                            returnStr = false;
                        }
                        break;
                    }
                    case "chkTel" : {//联系电话校验(手机和电话)
                        if (!this.isNull && !this.currentInputVal) {
                            this.showErrMsg_2(this.currentInput, this.msg["null"]);
                            returnStr = false;
                        }
                        if (this.currentInputVal && this.defaultVal != this.currentInputVal &&!this.chkTel(this.currentInputVal)){
                            this.showErrMsg_2(this.currentInput, this.msg["error"]);
                            returnStr = false;
                        }
                        break;
                    }
                    case "tel" : {//不带区号，不带分机号可带可不带的电话号码
                        var re = /^\d{7,8}$/;
                        if (!this.isNull && !this.currentInputVal) {
                            this.showErrMsg_2(this.currentInput, this.msg["null"]);
                            returnStr = false;
                        }
                        if (this.currentInputVal && this.defaultVal != this.currentInputVal &&!re.test(this.currentInputVal)){
                            this.showErrMsg_2(this.currentInput, this.msg["error"]);
                            returnStr = false;
                        }
                        break;
                    }
                    case "areacode" : {//区号
                        var re = /^\d{3,4}$/;
                        if (!this.isNull && !this.currentInputVal) {
                            this.showErrMsg_2(this.currentInput, this.msg["null"]);
                            returnStr = false;
                        }
                        if (this.currentInputVal && this.defaultVal != this.currentInputVal &&!re.test(this.currentInputVal)){
                            this.showErrMsg_2(this.currentInput, this.msg["error"]);
                            returnStr = false;
                        }
                        break;
                    }
                    case "bank_id" : {
                        if (!this.isNull && !this.currentInputVal) {
                            this.showErrMsg_2(this.currentInput, this.msg["null"]);
                            returnStr = false;
                        }
                        if (this.currentInputVal && this.defaultVal != this.currentInputVal &&!this.isBankId(this.currentInputVal)){
                            this.showErrMsg_2(this.currentInput, this.msg["error"]);
                            returnStr = false;
                        }
                        break;
                    }
                    case "isChn" : {
                        if (!this.isNull && !this.currentInputVal) {
                            this.showErrMsg_2(this.currentInput, this.msg["null"]);
                            returnStr = false;
                        }
                        if (this.currentInputVal && this.defaultVal != this.currentInputVal &&!this.isChn(this.currentInputVal)){
                            this.showErrMsg_2(this.currentInput, this.msg["error"]);
                            returnStr = false;
                        }
                        break;
                    }
                    case "checkStr" : {
                        if (!this.isNull && !this.currentInputVal) {
                            this.showErrMsg_2(this.currentInput, this.msg["null"]);
                            returnStr = false;
                        }
                        if (this.currentInputVal && this.defaultVal != this.currentInputVal &&!this.WidthCheck(this.currentInputVal,50)){
                            this.showErrMsg_2(this.currentInput, this.msg["long"]);
                            returnStr = false;
                        }
                        break;
                    }
                    case "img_vcode" : {
                        if (!this.isNull && !this.currentInputVal) {
                            this.showErrMsg_2(this.currentInput, this.msg["null"]);
                            returnStr = false;
                        }
                        if (this.currentInputVal && this.defaultVal != this.currentInputVal &&!this.isImgVCode(this.currentInputVal)){
                            this.showErrMsg_2(this.currentInput, this.msg["error"]);
                            returnStr = false;
                        }
                        break;
                    }
                    case "time" : {
                        if (!this.isNull && !this.currentInputVal) {
                            this.showErrMsg_2(this.currentInput, this.msg["null"]);
                            returnStr = false;
                        }
                        if (this.currentInputVal && this.defaultVal != this.currentInputVal &&!this.isTime(this.currentInputVal)){
                            this.showErrMsg_2(this.currentInput, this.msg["error"]);
                            returnStr = false;
                        }
                        break;
                    }
                    case "number" : {
                        var re = /^\d+$/;
                        if (!this.isNull && !this.currentInputVal) {
                            this.showErrMsg_2(this.currentInput, this.msg["null"]);
                            returnStr = false;
                        }
                        if (this.currentInputVal && this.defaultVal != this.currentInputVal &&!re.test(this.currentInputVal)){
                            this.showErrMsg_2(this.currentInput, this.msg["error"]);
                            returnStr = false;
                        }
                        break;
                    }
                    case "between" : {
                        if(!this.isNull && !this.currentInputVal){
                            this.showErrMsg_2(this.currentInput, this.msg["null"]);
                            returnStr = false;
                        }            
                        else if(this.currentInputVal && this.handle && this.defaultVal != this.currentInputVal && 
                                this.handle.call(this, this.currentInputVal).length > 0 && 
                                     this.handle.call(this, this.currentInputVal) != ""){
                            this.showErrMsg_2(this.currentInput, this.msg[this.handle.call(this, this.currentInputVal)]);
                            returnStr = false;
                        }                    
                        break;
                    }
                    default : {
                        if(!this.isNull && !this.currentInputVal){
                            this.showErrMsg_2(this.currentInput, this.msg["null"]);
                            returnStr = false;
                        }                        
                        else if(this.currentInputVal && this.defaultVal != this.currentInputVal 
                                &&this.handle && !this.handle.call(this, this.currentInputVal)){
                            this.showErrMsg_2(this.currentInput, this.msg["error"]);
                            returnStr = false;
                        }                    
						
						break;
                    }
                }
            }
            return returnStr;
        },
        isCnID: function (s){
            var arrExp = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
            var arrValid = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2]; //校验码
            var y, m, d;
            if(/^\d{15}$/.test(s)){
                y = "19" + s.substr(6, 2);
                m = s.substr(8, 2);
                d = s.substr(10, 2);
                return this.isDate(y, m, d);
            }else if(/^\d{17}\d|x$/i.test(s)){
                var sum = 0, vBit;
                for (var i = 0; i < s.length - 1; i++){
                    sum += parseInt(s.substr(i, 1), 10) * arrExp[i];
                }
                vBit = sum % 11;
                y = s.substr(6, 4);
                m = s.substr(10, 2);
                d = s.substr(12, 2);
                return (arrValid[vBit] == s.substr(17, 1).toUpperCase() && this.isDate(y, m, d));
            }else{
                return false;
            }
        },
        isDate: function (y, m, d){
            var _y, _m, _d, now;
            now = new Date(y, m - 1, d);
            _y = now.getFullYear();
            _m = now.getMonth() + 1;
            _d = now.getDate();
            return (y == _y && m == _m && d == _d);
        },
        isChn : function (str){
   	    var reg = /^[\u4E00-\u9FA5]+$/; //全都是汉字
            var reg1 = /.*[\u4e00-\u9fa5]+.*$/; //含有一个或多个汉字
   	    var reg2 = /^[A-Za-z]+$/; //全都是英文
   	    if(reg.test(str) || reg2.test(str)){
     	    	return true; 
   	    }
     	    return false; 
  	},
        WidthCheck : function (s, slength){
             var str =  slength.substring(slength.indexOf("[")+1,slength.indexOf("]"));
             var len = str.split(",");
             var w = 0; 
             for (var i=0; i<s.length; i++)
             {   
                 var c = s.charCodeAt(i);
                 //单字节加1    
                 if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f))
                 {   
                     w++;
                 }   
                 else
                 {   
                     w+=2;
                 }
             }
             if (w <= parseInt(len[1]) && w > parseInt(len[0]))
             {   
                 return true;
             }   
             return false;
     	 },
         /**
          *联系电话校验(手机和电话)
          */
         chkTel: function(val)
         {
             var tel = /^(1[0-9]{10})$/,
                 cellPhone = /^(\+?\d{1,4})?([\- ]?\d{3,5})?([\- ]?\d{7,8})([\- ]?\d{3,5})?$/;
             if (val == "") {
                 return "null";
             }
             if (!tel.test(val) && !cellPhone.test(val)) {
                 return "error";
             }
             return true;
         }, 
        isMobile : function (s){
            var re = /^1[0-9]{10}$/;
            //var re= /^(\+?\d{1,4})?([\- ]?\d{3,5})?([\- ]?\d{7,8})([\- ]?\d{3,5})?$/;
            return re.test(s);
        },
        isURL : function(s){ 
            var strRegex = "^((https|http|ftp|rtsp|mms)?://)"  
            + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" //ftp的user@  
            + "(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184  
            + "|" // 允许IP和DOMAIN（域名） 
            + "([0-9a-z_!~*'()-]+\.)*" // 域名- www.  
            + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." // 二级域名  
            + "[a-z]{2,6})" // first level domain- .com or .museum  
            + "(:[0-9]{1,4})?" // 端口- :80  
            + "((/?)|" // a slash isn't required if there is no file name  
            + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";  
            var re = new RegExp(strRegex);  
            if (re.test(s)){ 
                return true;  
            }else{  
                return false;  
            } 
        },
        isZipcode : function(s){
            var re = /^[1-9][0-9]{5}$/
            return re.test(s);
        },
        isTelephone : function(s){
            //var re = /^\d{3,4}\d{7,8}(\d{1,6})?$/;
            var re = /^1[0-9]{10}$/;
            return re.test(s);
        },
        isImgVCode: function(s){
            var re = /^[!a-z0-9]{4}$/i;
            return re.test(s);
        },
		isTime : function(s){
			var returnStr = true;
			var _r = /\d{8}/;
			var _re = /\-|\_|\.|\*|\/|\\/g;
			if(_r.test(s)) returnStr = false;						
			if(isNaN(s.replace(_re,""))) returnStr = false;
			var _l = s.split(_re);
			if(_l.length !== 3) returnStr = false;
			if(parseInt(_l[0],10) <= 0 || parseInt(_l[1],10) <= 0 || parseInt(_l[2],10) <= 0) returnStr = false;
			return returnStr;
		},
		isBankId : function(s){//8-48位数字银行id		
			var re = /^\d{8,48}$/i;
            return re.test(s);
		},
        formatAmount: function (s, bit) {
            s = (typeof s === "string") ? s : s.toString();
            bit = (typeof bit === "undefined") ? 2 : ((typeof bit === "number") ? bit : 2);
            s = s.replace(/,/g, "");    //trim (,)
            s = (/(\.[0-9]+)$/.test(s) ? s : (s + ".00")); //for firefox
            var re = new RegExp("^([\+-]?)([0-9]+)(\.[0-9]{1," + bit  + "})?$", ""), arr = null;
            arr = s.match(re);
            if (!arr) {
                return false;
            }
            if (+s >= 1000000000000) {
                return false;
            }
            arr[2] = arr[2].replace(/^0+(\d)/, "$1"); //trim left zero
            if (arr[3] !== "") {
                re = new RegExp("(\\d{" + bit + "})\\d+", "");
                arr[3] = arr[3].replace(re, "$1"); //trim right zero
                if (arr[3].length < 3) {
                    arr[3] += '0';
                }
            } else {
                arr[3] = ".00";
            }
            arr.shift();
            return arr.join("").replace(/^\+/, "").replace(/^0\.0+$/, "0");
        },        
        showErrMsg : function(obj, msg, position){
            this.hideErrMsg(obj);
            var errSpan = document.createElement("span"); 
            errSpan.id = obj.id + "_err_msg";
            errSpan.className = "err-msg";
            if(position){
                errSpan.style.position = "absolute";
                errSpan.style.left = position.x + "px";
                errSpan.style.top = position.y + "px";
            }
            errSpan.innerHTML = msg;
            obj.parentNode.appendChild(errSpan);        
        },
        showErrMsg_2 : function(obj, msg){
            this.hideErrMsg(obj);
            var errDiv = document.createElement("div");
			errDiv.id = obj.id + "_err_msg";
            errDiv.className = this.classname ? this.classname : "form-error";
            var errSpan = document.createElement("span");
            errSpan.className = "ico-error-s";
            errDiv.appendChild(errSpan);
            errDiv.appendChild(document.createTextNode(msg));
            var curContainer = obj.parentNode.getElementsByTagName("div");
            var existContainer = curContainer && curContainer[0] && curContainer[0].className.indexOf("form-error") > -1;
            if(existContainer) curContainer[0].parentNode.removeChild(curContainer[0]);
            if(this.append){
                obj.parentNode.parentNode.appendChild(errDiv);
            }else{
                obj.parentNode.appendChild(errDiv);
            }
        },
        hideErrMsg : function(obj){            
            var err_msg = document.getElementById(obj.id + "_err_msg");
            if(err_msg){
                MCH.Dom.remove(err_msg);
            }
        }
    };
    
    /**
	 * @namespace Utils object 工具类
	 */
    MCH.Utils = {
        trim : function(str){
            return str.replace(/(^\s*)|(\s*$)/g, "");//去左右空格
        },
        getQueryString : function(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]); return null;
        },
        yuan2Fen : function(val){
            var result, re = /^[\+|-]?\d+(\.\d+)?$/;
            if (typeof(val) != "string") val = val.toString();
            return (re.test(val)) ? (parseFloat(val) * 100).toFixed(0) : "0";
        },
        fen2Yuan : function(val){
            var result, re = /^[\+|-]?[0-9]+$/;
            if (typeof(val) != "string") val = val.toString();
            return (re.test(val)) ? (parseFloat(val) / 100).toFixed(2) : "0.00";
        },
        getCookie : function(name){
            var arg = name + "=";
            var alen = arg.length;
            var clen = document.cookie.length;
            var i = 0;
            while (i < clen){
                var j = i + alen;
                if (document.cookie.substring(i, j) == arg){
                    return this.getCookieVal(j);
                }
                i = document.cookie.indexOf(" ", i) + 1;
                if (i == 0) break;
            }
            return "";
        },
        setCookie : function(name, value, expires, path, domain, secure){
            document.cookie = name + "=" + escape (value) +
                ((expires) ? "; expires=" + expires : "") +
                ((path) ? "; path=" + path : "") +
                ((domain) ? "; domain=" + domain : "") +
                ((secure) ? "; secure" : "");
        },
        deleteCookie : function(name,path,domain){
            var exp = new Date();
            exp.setTime (exp.getTime() - 1);

            if (this.getCookie(name)){
                document.cookie = name + "=" +
                    ((path) ? "; path=" + path : "") +
                    ((domain) ? "; domain=" + domain : "") +
                    "; expires="+exp.toGMTString();
            }
        },
        getCookieVal : function(offset){
            var endstr = document.cookie.indexOf (";", offset);
            if (endstr == -1){
                endstr = document.cookie.length;
            }
            return unescape(document.cookie.substring(offset, endstr));
        },
		parseDate : function(date, type){
            if (!date) {
                return '';
            }
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            month = month >= 10 ? month : "0" + month;
            var day = date.getDate();
            day = day >= 10 ? day : "0" + day;
            var hour = date.getHours();
            hour = hour >= 10 ? hour : "0" + hour;
            var minute = date.getMinutes();
            minute = minute >= 10 ? minute : "0" + minute;
            var second = date.getSeconds();
            second = second >= 10 ? second : "0" + second;
            switch(type){
                case "short": //短格式，如2011-05-06
                    return year + "-" + month + "-" + day;
                    break;
                case "long": //长格式，如2011-05-06 10:05:06
                    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + day;
                    break;
                case "chinese": //中文格式，2011年05月06日 23:09
                    return year + "年" + month + "月" + day + "日 " + hour + ":" + minute;
                    break;
                default:
                    return str;
                    break;
            }
        },
        outputSafeContent : function(str){
            return str.replace("&", "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
        }
    };
    
    /**
	 * @namespace Passwd object 密码控件
	 */
    MCH.Passwd = {
        PasswdColVersion : "1,0,1,2",	// 控件的版本号
        PasswdColClassId : "clsid:E787FD25-8D7C-4693-AE67-9406BC6E22DF",
        showEditControlDownloadUrl : function(ctlid){	 	 
            try{
                var mode = Mch.Dom.$(ctlid).Mode;
                if(mode == null){		
                    document.write("<a href=\"https://www.tenpay.com/download/qqedit.exe\"><font style=\"font-size:12px\" color=ff6600>无法输入登录密码？");
                    document.write("请点此安装安全控件后刷新");
                    document.write("</font></a>");						
                }
            }catch(er){}		
        },
        // 获取通用密码(rsap)
        getStrongPasswd : function(ctrl, seed){
            ctrl.SetSalt(seed);
            shap = ctrl.GetSha1Value();
            rsap = ctrl.GetRsaPassword();
            return (seed + shap + rsap);
        },
        // 获取通用密码(rsap)
        getStrongPasswd2 : function(ctrl, seed){
            ctrl.SetSalt(seed);
            //shap = ctrl.GetSha1Value();
            rsap = ctrl.GetRsaPassword2();
            return (seed + rsap);
        },
        //获取通用密码的长度
        getEditLength : function (ctrl){
            var len = ctrl.GetInputInfo();
            var len1 = (len >> 16) & 65535;
            return len1;
        }
    };
    
    function Ajax(){
        this.config = {
            method : "GET",
            asynch : true,
            contentType : "application/x-www-form-urlencoded; charset=gb2312",
            cache : false,
            proxy : null,
            url : null,
            param : null,
            formName : null,
            requestHeader : [],
            headerHandler : null,
            responseHeader : [],
            headerArgs : [],
            handler : null,
            args : [],
            isXML : true,
            timeout : 8000,
            interval : -1,
            tryTimes : -1,
            isOld : false,
            isEncode : false
        };
        this.Request = {
            UNINITIALIZED : 0,
            LOADING       : 1,
            LOADED        : 2,
            INTERACTIVE   : 3,
            COMPLETED     : 4
        };
        this.instance = null;
        this.timeoutId = null;
        this.intervalId = null;
        this.requestTimes = 0;
        this.readystatechange = null;
    }
    Ajax.prototype = {
        setConfig : function(config){
            config = config || {};
            this.config.method = (config.method || "GET").toUpperCase();
            this.config.asynch = typeof(config.asynch) == "boolean" ? config.asynch : true;
            this.config.contentType = config.contentType || "application/x-www-form-urlencoded; charset=gb2312";
            this.config.cache = typeof(config.cache) == "boolean" ? config.cache : false;
            this.config.proxy = config.proxy || null;
            this.config.url = config.url || null;
            this.config.param = config.param || null;
            this.config.formName = config.formName || null;
            this.config.requestHeader = config.requestHeader || [];
            this.config.headerHandler = config.headerHandler || null;
            this.config.responseHeader = config.responseHeader || [];
            this.config.headerArgs = config.headerArgs || [];
            this.config.handler = config.handler || null;
            this.config.args = config.args || [];
            this.config.isXML = typeof(config.isXML) == "boolean" ? config.isXML : true;
            this.config.timeout = config.timeout || 10000;
            this.config.interval = config.interval || -1;
            this.config.tryTimes = config.tryTimes || -1;
            this.config.isOld = typeof(config.isOld) == "boolean" ? config.isOld : this.config.isOld;
            this.config.isEncode = typeof(config.isEncode) == "boolean" ? config.isEncode : false;
        },
        getConfig : function(){
            return this.config;
        },
        getInstance : function(){
            try{
                this.instance = new XMLHttpRequest();
            }catch(e1){
                try{
                    this.instance = new ActiveXObject("Microsoft.XMLHTTP");
                }catch(e2){
                    try{
                        this.instance = new ActiveXObject("Msxml2.XMLHTTP");
                    }catch (e3){
                        this.instance = null;
                    }
                }
            }
            return this.instance;
        },
        resetStatus : function(){
            this.clearAbort();
            this.clearCycle();
            this.clearReadyStateChange();
            this.requestTimes = 0;
            this.instance = null;
        },
        captureException : function(ex){
            this.resetStatus();
            throw new Error(ex);
        },
        evalHandler : function(handler, args){
            if (typeof(handler) == "function"){
                if(!this.config.isOld){
                    handler.apply(handler, args);
                }else{
                    var arg = args[0].data;
                    handler.apply(handler, [(arg === null) ? (this.config.isXML ? '<?xml version="1.0" encoding="gb2312"?><root><retcode>' + args[0].httpStatus + '</retcode><retmsg>请求异常！</retmsg></root>' : "[" + args[0].httpStatus + "]请求异常") : arg]);
                }
                this.instance = null;
            }else if (null != handler){
                this.instance = null;
                this.captureException("Get Handler Error!\n" +
                        "Please check the handler's type.\n" +
                        "The handler's type must be a function or null.");
            }
            this.instance = null;
        },
        filterChar : function(str){
            var temp = "";
            if(str){
                temp = str.replace(/%/g,"%25").replace(/\r\n/g,"%0D%0A").replace(/=/g,"%3D").replace(/&/g,"%26").replace(/\?/g,"%3F").replace(/\+/g,"%2B");
            }
            return temp;
        },
        getQueryString : function(){
            var cfg = this.getConfig();
            var strQuery = cfg.param;
            var formName = cfg.formName;
            if(null != formName){
                var qsItems = (strQuery) ? strQuery.split("&") : [];
                var els = [];
                var form = null;
                var el = null;
                var size = 0;
                var tagName = "";
                var type = "";
                try{
                    form = typeof(formName) == "object" ? formName : document.forms[formName];
                    els = form.elements;
                    size = els.length;
                    for(var i = 0; i < size; i++){
                        el = els[i];
                        tagName = (el.tagName||"").toUpperCase();
                        type = (el.type||"").toUpperCase();
                        if(!el.name){continue;}
                        switch(tagName){
                            case "SELECT":
                            case "TEXTAREA":
                                qsItems.push(el.name + "=" + (cfg.isEncode ? encodeURIComponent(el.value) : this.filterChar(el.value)));
                            break;
                            case "INPUT":{
                                switch(type){
                                    case "TEXT":
                                    case "PASSWORD":
                                    case "HIDDEN":
                                        qsItems.push(el.name + "=" + (cfg.isEncode ? encodeURIComponent(el.value) : this.filterChar(el.value)));
                                    break;
                                    case "RADIO":
                                    case "CHECKBOX":{
                                        if(el.checked){
                                            qsItems.push(el.name + "=" + (cfg.isEncode ? encodeURIComponent(el.value) : this.filterChar(el.value)));
                                        }
                                    }
                                    break;
                                }
                            }
                            break;
                        }
                    }
                    strQuery = qsItems.join("&");
                }catch(e){
                    this.captureException("get form data error ! \n " + e.message);
                }
                finally{
                    qsItems = null;
                    els = null;
                    form = null;
                    el = null;
                    size = 0;
                    tagName = null;
                    type = null;
                }
            }
            return strQuery;
        },
        appendParameter : function(url, params){
            if(params){
                url = url + (url.indexOf('?') === -1 ? '?' : '&') + params;
            }
            return url;
        },
        makeURL : function(){
            var conf = this.getConfig();
            var url = conf.url || "";
            var proxy = conf.proxy;
            var queryString = this.getQueryString();
            var param = null;
            if("GET" == conf.method){
                url = this.appendParameter(url, queryString);
            }else{
                param = queryString;
            }
            if(null != proxy){
                url = this.appendParameter(proxy, "req_url=" + encodeURIComponent(url));
            }
            conf = null; queryString = null;
            return {URL:url, DATA:param};
        },
        clearAbort : function(){
            if(null != this.timeoutId){
                clearTimeout(this.timeoutId);
                this.timeoutId = null;
            }
        },
        clearCycle : function(){
            if(null != this.intervalId){
                clearInterval(this.intervalId);
                this.intervalId = null;
            }
        },
        clearReadyStateChange : function(){
            if(null != this.readystatechange){
                clearInterval(this.readystatechange);
                this.readystatechange = null;
            }
        },
        $abort : function(xmlHttp, handler, args){
            var conf = this.getConfig();
            if(conf.timeout > 0){
                var _this = this;
                this.timeoutId = setTimeout(function(){
                    xmlHttp.abort();
                    if(conf.interval <= 0 &&
                            conf.tryTimes > 0 &&
                                _this.requestTimes < conf.tryTimes){
                        _this.requestTimes++;
                        args.unshift({status:"TRY#"+_this.requestTimes, data:null});
                        _this.evalHandler(handler, args);
                        args.shift();
                        _this.$send();
                    }else{
                        args.unshift({status:"TIMEOUT", data:null});
                        _this.evalHandler(handler, args);
                        args.shift();
                    }
                    _this.clearAbort();
                }, conf.timeout);
            }
        },
        callSender : function(){
            if(this.getConfig().interval > 0){
                var ajax = this;
                this.$send();
                this.intervalId = setInterval(function(){
                    ajax.$send();
                }, this.config.interval);
            }else{
                this.$send();
            }
        },
        $getResponseHeader : function(xhr){
            var headers = this.config.responseHeader;
            var size = headers.length;
            var ret = [];
            for(var i = 0; i < size; i++){
                ret.push({name:i, value:xhr.getResponseHeader(headers[i])});
            }
            return ret;
        },
        $interactive : function(xhr){
            var conf = this.getConfig();
            var handler = conf.headerHandler;
            var args = conf.headerArgs;
            var allHeaders = xhr.getAllResponseHeaders();
            var $headers = this.$getResponseHeader(xhr);
            args.unshift({all:allHeaders, headers:$headers});
            this.evalHandler(handler, args);
            args.shift();
        },
        $completed : function(xhr){
            var conf = this.config;
            var isRX = conf.isXML;
            var handler = conf.handler;
            var args = conf.args;
            this.clearAbort();
            if (200 == xhr.status || 304 == xhr.status || 302 == xhr.status){
                args.unshift({status:xhr.status, data:(isRX ? xhr.responseXML : xhr.responseText)});
                this.evalHandler(handler, args);
                args.shift();
            }else{
                if(conf.interval <= 0 &&
                        conf.tryTimes > 0 &&
                            this.requestTimes < conf.tryTimes){
                    this.requestTimes++;
                    args.unshift({status:"TRY#"+this.requestTimes, data:null, httpStatus: xhr.status});
                    this.evalHandler(handler, args);
                    args.shift();
                    this.$send();
                }else{
                    args.unshift({status:xhr.status, data:null, httpStatus: xhr.status});
                    this.evalHandler(handler, args);
                    args.shift();
                }
            }
            conf = null;
            xhr = null;
        },
        $setHeader : function(xhr){
            var headers = this.config.requestHeader;
            var size = headers.length;
            var header = null;
            for(var i = 0; i < size; i++){
                header = headers[i];
                xhr.setRequestHeader(header.name, header.value);
            }
        },
        $send : function(){
            try{
                var ajax = this;
                var xhr = this.getInstance();
                var url = this.makeURL();
                var conf = this.getConfig();
                if (null != xhr){
                    xhr.open(conf.method, url.URL, conf.asynch);
                    if (!conf.cache){
                        xhr.setRequestHeader("No-Cache","1");
                        xhr.setRequestHeader("Pragma","no-cache");
                        xhr.setRequestHeader("Cache-Control","no-cache");
                        xhr.setRequestHeader("Expire","0");
                        xhr.setRequestHeader("Last-Modified","Thu, 1 Jan 1970 00:00:00 GMT");
                        xhr.setRequestHeader("If-Modified-Since","-1");
                    }
                    xhr.setRequestHeader("Content-Type", conf.contentType);
                    this.$setHeader(xhr);
                    this.$abort(xhr, conf.handler, conf.args);
                    if(conf.asynch){
                        if(null != conf.headerHandler || null != conf.handler){
                            ajax.readystatechange = setInterval(function(){
                                switch(xhr.readyState){
                                    case ajax.Request.UNINITIALIZED:
                                        break;
                                    case ajax.Request.LOADING:
                                        break;
                                    case ajax.Request.LOADED:
                                        break;
                                    case ajax.Request.INTERACTIVE:
                                        if(null != conf.headerHandler){
                                            ajax.$interactive(xhr);
                                            if(null == handler){
                                                ajax.clearReadyStateChange();
                                                ajax.clearAbort();
                                            }
                                        }
                                        break;
                                    case ajax.Request.COMPLETED:
                                        if(null != conf.handler){
                                            ajax.clearReadyStateChange();
                                            ajax.clearAbort();
                                            ajax.$completed(xhr);
                                        }
                                        break;
                                }
                            }, 50);
                        }
                    }
                    xhr.send(url.DATA);
                    if(!conf.asynch && null != conf.handler){
                        this.$completed(xhr);
                    }
                }else{
                    this.captureException("Get XMLHttpRequest Object Failure!");
                }
            }catch(e){
                this.captureException("An Runtime Error Occurred ! \n\n" + e.message);
            }
        },
        sendRequest : function(config){
            this.resetStatus();
            this.setConfig(config);
            this.callSender();
        },
        send : function(config){
            this.sendRequest({
                url : config.url,
                method : config.method || "GET",
                handler : config.callBack || null,
                args : [],
                param : config.vars || null,
                contentType : config.contentType || null,
                isXML : ((config.getType || 2) == 2),
                timeout : config.timeout || -1,
                interval : config.interval || -1,
                tryTimes : config.tryTimes || -1,
                isOld: true
            });
        },
        ajaxRequest : function(config){
            this.sendRequest({
                url : config.url,
                method : config.method || "GET",
                handler : config.callBack || null,
                args : [],
                param : config.vars || null,
                contentType : config.contentType || null,
                isXML : ((config.getType || 2) == 2),
                timeout : config.timeout || -1,
                interval : config.interval || -1,
                tryTimes : config.tryTimes || -1,
                isOld: true
            });
        },
        byForm : function(form, callback, config){
            config = config || {};
            this.sendRequest({
                url : form.getAttribute("action"),
                method : config.method || "GET",
                handler : callback || null,
                args : [],
                param : null,
                contentType : config.contentType || null,
                formName : form,
                timeout : config.timeout || -1,
                interval : config.interval || -1,
                tryTimes : config.tryTimes || -1,
                isEncode: config.isEncode || false,
                isXML : ((config.getType || 2) == 2),
                isOld : true
            });
        },
        ajaxByForm : function(form, callback, config){
            config = config || {};
            this.sendRequest({
                url : form.getAttribute("action"),
                method : config.method || "GET",
                handler : callback || null,
                args : [],
                param : null,
                contentType : config.contentType || null,
                formName : form,
                timeout : config.timeout || -1,
                interval : config.interval || -1,
                tryTimes : config.tryTimes || -1,
                isEncode: config.isEncode || false,
                isXML : ((config.getType || 2) == 2),
                isOld : true
            });
        }
    };
    /**
	 * @namespace AJAX (非单体)
	 */
	MCH.Ajax = function() {
		var ajax = null;
		/**
		 * @ignore
		 */
		var getXHR = function() {
			return !!(ajax && ajax.instance === null) ? ajax : (ajax = new Ajax());
		};
		/**
		 * @ignore
		 */
		var sendRequest = function() {
			var XHR = getXHR();
			XHR.sendRequest.apply(XHR, Array.prototype.slice.apply(arguments, [0, arguments.length]));
		};
		/**
		 * @ignore
		 */
		var send = function() {
			var XHR = getXHR();
			XHR.send.apply(XHR, Array.prototype.slice.apply(arguments, [0, arguments.length]));
		};
		/**
		 * @ignore
		 */
		var byForm = function() {
			var XHR = getXHR();
			XHR.byForm.apply(XHR, Array.prototype.slice.apply(arguments, [0, arguments.length]));
		};
		return {
			/**
			 * @function
			 */
			sendRequest: sendRequest,
			/**
			 * @function
			 */
			send: send,
			/**
			 * @function
			 */
			byForm: byForm
		};
	}();
    
    /**
	 * XPath表达式
	 * @param {String} xpathText 要编译的 XPath 表达式的字符串。
	 * @param {Function} namespaceURLMapper 从一个名字空间前缀映射到一个全称名字空间 URL 的一个函数。如果不需要这样的映射，则为 null。
	 */
	MCH.XPathExpression = function(xpathText, namespaceURLMapper) {
		this.XPathText = xpathText;
		this.namespaceURLMapper = namespaceURLMapper;
		if (document.createExpression) {
			this.expression = document.createExpression(xpathText, function(prefix) {
				return namespaceURLMapper[prefix];
			});
		} else {
			this.namespacesString = '';
			if (null != namespaceURLMapper) {
				for (var prefix in namespaceURLMapper) {
					if (this.namespacesString) this.namespacesString += ' ';
					this.namespacesString += 'xmlns:' + prefix + '="' + namespaceURLMapper[prefix] + '"';
				}
			}
		}
	};
	MCH.XPathExpression.prototype = {
		/**
		 * 获取匹配xpath的节点
		 * @param {Object} context 文档或元素对象
		 * @return {Array/Null} NodeList 如果没有找到匹配返回null
		 */
		selectNodes: function(context) {
			var nodeList = null;
			var result = null;
			var oEvaluator = null;
			var doc = null;
			if (this.expression) {
				result = null;
				oEvaluator = new XPathEvaluator();
				result = oEvaluator.evaluate(this.XPathText, context, this.namespaceURLMapper, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
				var length = result.snapshotLength;
				nodeList = [];
				if (length > 0) {
					for (var i = 0; i < length; i++) {
						nodeList.push(result.snapshotItem(i));
					}
				}
				result = null;
				oEvaluator = null;
				context = null;
				return nodeList || [];
			} else {
				try {
					doc = context.ownerDocument;
					if (null == doc) doc = context;
					doc.setProperty('SelectionLanguage', 'XPath');
					doc.setProperty('SelectionNamespaces', this.namespacesString);
					if (doc == context) context = doc.documentElement;
					nodeList = context.selectNodes(this.XPathText);
				} catch (e) {
					throw new Error('对不起，您的浏览器不支XPath！desc = ' + e.message);
				} finally {
					doc = null;
					context = null;
					return nodeList||[];
				}
			}
		},
		/**
		 * 获取匹配xpath的的第一个节点
		 * @param {Object} context 文档或元素对象
		 * @return {Object/Null} Node 如果没有找到匹配返回null
		 */
		selectSingleNode: function(context) {
			var node = null;
			var result = null;
			var oEvaluator = null;
			var doc = null;
			if (this.expression) {
				result = null;
				oEvaluator = new XPathEvaluator();
				result = oEvaluator.evaluate(this.XPathText, context, this.namespaceURLMapper, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
				node = result.singleNodeValue;
				result = null;
				oEvaluator = null;
				context = null;
				return node;
			} else {
				try {
					doc = context.ownerDocument;
					if (null == doc) doc = context;
					doc.setProperty('SelectionLanguage', 'XPath');
					doc.setProperty('SelectionNamespaces', this.namespacesString);
					if (doc == context) context = doc.documentElement;
					node = context.selectSingleNode(this.XPathText);
				} catch (e) {
					throw new Error('对不起，您的浏览器不支XPath！desc = ' + e.message);
				} finally {
					doc = null;
					context = null;
					return node;
				}
			}
		}
	};
    
    /**
	 * XML操作接口
	 */
	var XML = {
		/**
		 * 建立一个新的XML文档
		 * @param {String} namespace 命名空间URI
		 * @param {Object} root 根节点名
		 * @param {String} doctype 文档类型
		 * @return {Object} XML文档
		 */
		createXMLDocument: function(namespace, root, doctype) {
			if (3 != arguments.length) throw new Error('建立XML文档时参数错误; length = ' + arguments.length);
			var rootTagName = root || '';
			var namespaceURI = namespace || '';
			var docType = doctype || null;
			var xmlDoc = null;
			if (document.implementation && document.implementation.createDocument) {
				xmlDoc = document.implementation.createDocument(namespaceURI, rootTagName, docType);
			} else {
				xmlDoc = new ActiveXObject('MSXML2.DOMDocument');
				if (rootTagName) {
					var hasPrefix = rootTagName.indexOf(':') != -1 && namespaceURI;
					var prefix = hasPrefix ? rootTagName.split(':')[0] : '';
					var tagName = hasPrefix ? rootTagName.split(':')[1] : rootTagName;
					var xmlStr = '<' + (hasPrefix ? prefix + ':' : '') + tagName +
									(hasPrefix ? ' xmlns:' + prefix + '="' + namespaceURI + '"' : '') + ' />';
					xmlDoc.loadXML(xmlStr);
				}
			}
			return xmlDoc;
		},
		/**
		 * 加载XML文档
		 * @param {String} url 文档地址
		 * @return {Object} XML文档
		 */
		load: function(url) {
			var xmlDoc = this.createXMLDocument(null, null, null);
			try {
				xmlDoc.async = false;
				xmlDoc.load(url);
			} catch (e) {
				var request = new XMLHttpRequest();
				request.open('GET', url, false);
				request.send(null);
				xmlDoc = request.responseXML;
				request = null;
			} finally {
				return xmlDoc;
			}
		},
		/**
		 * 加载XML
		 * @param {String} xmlStr xml格式字符串
		 * @return {Object} XML文档
		 */
		loadXML: function(xmlStr) {
			var xmlDoc = null;
			if ('undefined' != typeof(DOMParser)) {
				var parser = new DOMParser();
				xmlDoc = parser.parseFromString(xmlStr, 'application/xml');
				parser = null;
			} else if (window.ActiveXObject) {
				xmlDoc = this.createXMLDocument(null, null, null);
				xmlDoc.async = false;
				xmlDoc.loadXML(xmlStr);
			} else {
				var url = 'data:text/xml;charset=gb2312,' + encodeURIComponent(xmlStr);
				var request = new XMLHttpRequest();
				request.open('GET', url, false);
				request.send(null);
				xmlDoc = request.responseXML;
				request = null;
			}
			return xmlDoc;
		},
		/**
		 * 获取匹配xpath的节点
		 * @param {Object} context 文档或元素对象
		 * @param {String} xpath XPATH查询串
		 * @param {Function} namespaceURLMapper 从一个名字空间前缀映射到一个全称名字空间 URL 的一个函数。如果不需要这样的映射，则为 null
		 * @return {Array/Null}
		 */
		selectNodes: function(context, xpathText, namespaceURLMapper) {
			var xPath = new MCH.XPathExpression(xpathText, namespaceURLMapper);
			var nodes = xPath.selectNodes(context);
			xPath = null;
			return nodes;
		},
		/**
		 * 获取匹配xpath的的第一个节点
		 * @param {Object} context 文档或元素对象
		 * @param {String} xpath XPATH查询串
		 * @param {Function} namespaceURLMapper 同XML.selectNodes
		 * @return {Object/Null}
		 */
		selectSingleNode: function(context, xpathText, namespaceURLMapper) {
			var xPath = new MCH.XPathExpression(xpathText, namespaceURLMapper);
			var node = xPath.selectSingleNode(context);
			xPath = null;
			return node;
		},
		/**
		 * 将XML文档或节点转成字符串
		 * @param {Object} node 元素节点
		 * @return {String} xml序列化后的字符串
		 */
		toString: function(node) {
			var fragment = node || null;
			var xmlStr = '';
			if (null != fragment) {
				if ('undefined' != typeof(XMLSerializer)) {
					var serializer = new XMLSerializer();
					xmlStr = serializer.serializeToString(fragment);
					serializer = null;
				} else if (fragment.xml) {
					xmlStr = fragment.xml;
				}
			}
			return xmlStr;
		}
	};   
	/**
	 * XML接口
	 * @constructor
	 */
	MCH.XML = function(x) {
		this.obj = (typeof x == 'string') ? XML.loadXML(x) : (typeof x == 'object') ? x : '';
	};
	MCH.XML.prototype = {
		/**
		 * 取一组节点(XPATH)
		 * @param {String} xpath XPATH查询串
		 * @param {Function} [namespaceURLMapper:null]
		 * @return {Array|Null}
		 */
		selectNodes: function(xpathText, namespaceURLMapper) {
			return XML.selectNodes(this.obj, xpathText, namespaceURLMapper);
		},
		/**
		 * 取首个节点(XPATH)
		 * @param {String} xpath XPATH查询串
		 * @param {Function} [namespaceURLMapper:null]
		 * @return {Object|Null}
		 */
		selectSingleNode: function(xpathText, namespaceURLMapper) {
			return XML.selectSingleNode(this.obj, xpathText, namespaceURLMapper);
		},
		/**
		 * 取一组节点(DOM)
		 * @param {String} n 节点名
		 * @return {Array|Null}
		 */
		getNodes: function(n) {
			return this.obj.getElementsByTagName(n) || null;
		},
		/**
		 * 取父节点下的一组子节点(DOM)
		 * @param {Object} p 父节点对象
		 * @param {String} n 子节点名
		 * @return {Array|Null}
		 */
		getChildNodes: function(p, n) {
			return p.getElementsByTagName(n) || null;
		},
		/**
		 * 取父节点(DOM)
		 * @param {Object} n 节点对象
		 * @return {Object|Null}
		 */
		getParentNode: function(n) {
			return n.parentNode || null;
		},
		/**
		 * 取当前节点对象内容
		 * @param {Object} n 节点对象
		 * @return {String}
		 */
		getNodeValue: function(n) {
			try{
                return n.firstChild.data;
            }catch(e){
                return '';
            }
		},
		/**
		 * 取某节点内容
		 * @param {String} n 节点名
		 * @return {String}
		 */
		getVal: function(n) {
			var node = this.obj.getElementsByTagName(n);
            try{
                return MCH.Utils.outputSafeContent(node[0].firstChild.data);
            }catch(e){
                return '';
            }
		}
	};
    
    /**
     * @namespace Event
     */
    MCH.Event = function() {
        var guid = 1;
        
        var randomKey = +new Date();
        
        return {
            /**
             * 获取事件
             * @return {Event}
             */
            getEvent: function() {
                // ie, safari support window.event
                if (window.event) {
                    return window.event;
                }
                var fn = arguments.callee.caller;
                while (fn != null) {
                    var arg = fn.arguments[0];
                    if (arg && String(arg.constructor).indexOf('Event') != -1) {
                        return arg;
                    }
                    fn = fn.caller;
                }
                return null;
            },
            /**
             * 获取事件源
             * @return {Object}
             */
            eventSrc: function() {
                var e = MCH.Event.getEvent();
                var target = (e && (e.target || e.srcElement)) || null;
                return target;
            },
            /**
             * 添加事件
             * @function
             * @param {Object} el 对象
             * @param {String} eventName 事件名称(不带on)
             * @param {Function} fn 函数
             */
            addEvent: function() {
                if (window.addEventListener) {
                    return function(el, eventName, fn) {
                        el.addEventListener(eventName, fn, false);
                    };
                } else {
                    return function(el, eventName, fn) {
                        if (!fn.guid) {
                            fn.guid = randomKey + guid;
                            guid++;
                        }
                        el['e' + fn.guid] = fn;
                        el[fn.guid] = function() {el['e' + fn.guid](window.event);};
                        el.attachEvent('on' + eventName, el[fn.guid]);
                    };
                }
            }(),
            /**
             * 移除事件
             * @function
             * @param {Object} el 对象
             * @param {String} eventName 事件名称(不带on)
             * @param {Function} fn 函数
             */
            removeEvent: function() {
                if (window.removeEventListener) {
                    return function(el, eventName, fn) {
                        el.removeEventListener(eventName, fn, false);
                    };
                } else {
                    return function(el, eventName, fn) {
                        if (fn.guid && el[fn.guid]) {
                            el.detachEvent('on' + eventName, el[fn.guid]);
                            el[fn.guid] = null;
                        } else {
                            el.detachEvent('on' + eventName, fn);
                        }
                    };
                }
            }(),
            /**
             * 阻止默认行为
             */
            preventDefault: function() {
                var e = MCH.Event.getEvent();
                if (window.event) {
                    e.returnValue = false;
                } else {
                    e.preventDefault();
                }
            },
            /**
             * 停止冒泡
             */
            stopPropagation: function() {
                var e = MCH.Event.getEvent();
                if (window.event) {
                    e.cancelBubble = true;
                } else {
                    e.stopPropagation();
                }
            },
            /**
             * 事件分发
             * @param {String|Object} target 事件源
             * @param {String} eventType 事件类型(不带on)
             */
            dispatchEvent: function(target, eventType) {
                var obj = MCH.Dom.$(target);
                var evt = null;
                if (document.createEvent) {
                    evt = document.createEvent('Events');
                    evt.initEvent(eventType, true, true); //'bubbles', 'cancelable'
                } else if (document.createEventObject) {
                    evt = document.createEventObject();
                } else {
                    return false;
                }
                if (obj.dispatchEvent) {
                    obj.dispatchEvent(evt);
                } else if (obj.fireEvent) {
                    obj.fireEvent('on' + eventType, evt);
                }
            },
            /**
             * 为对象集合绑定事件
             * @param {Object|Array} col 对象集合
             * @param {String} eventName 事件名(不带on)
             * @param {Object} fn 函数
             */
            bind: function(col, eventName, fn) {
                for (var i = 0; i < col.length; i++) {
                    MCH.Event.addEvent(col[i], eventName, fn);
                }
            },
            /**
             * 只执行一次函数
             * @param {Function} fn
             * @return {Function}
             */
            once: function(fn) {
                return function() { 
                    try { 
                        fn.apply(this, arguments); 
                    } catch (e) {  
                    } finally { 
                        fn = null; 
                    } 
                };
            }
        }
    }();
	
	function PageBar(){
		this.pageInfo = {
			recordcount : 0,
			positions : [],
			page : 1,
			returnPage : 1, //add new
			pageSize : 8,
			returnPages : 0, //add new
			noRecordcount : false, //add new
			hasNext : false, //add new
			offset : 2,
			radius : 3,
			handler:null,
			args:[],
			jumpSize:10,
			isShowJumper:true,
			isShowPages:true,
			currentPage : 0,
			virtualPage : 0, //add new
			totalPageSize : 0,
			viewSize : 0,
			defSize : 0,
			namespace : "MCH.PageBar"
		};
	}
	PageBar.prototype = {
		$:function(id){
			return document.getElementById(id);
		},
		setPageInfo : function(pageInfo){
			this.pageInfo.recordcount = pageInfo.recordcount || 0;
			this.pageInfo.positions = pageInfo.positions || [];
			this.pageInfo.pageSize  = pageInfo.pageSize || this.pageInfo.pageSize;
			this.pageInfo.jumpSize = pageInfo.jumpSize || this.pageInfo.jumpSize;
			this.pageInfo.returnPages = typeof(pageInfo.returnPages) == "number" ? pageInfo.returnPages : this.pageInfo.returnPages;
			this.pageInfo.noRecordcount = typeof(pageInfo.noRecordcount) == "boolean" ? pageInfo.noRecordcount : this.pageInfo.noRecordcount;
			this.pageInfo.hasNext = typeof(pageInfo.hasNext) == "boolean" ? pageInfo.hasNext : this.pageInfo.hasNext;
			this.pageInfo.isShowJumper = typeof(pageInfo.isShowJumper) == "boolean" ? pageInfo.isShowJumper : this.pageInfo.isShowJumper;
			this.pageInfo.isShowPages = typeof(pageInfo.isShowPages) == "boolean" ? pageInfo.isShowPages : this.pageInfo.isShowPages;
			this.pageInfo.offset  = typeof(pageInfo.offset) == "number" ? pageInfo.offset : this.pageInfo.offset;
			this.pageInfo.radius  = typeof(pageInfo.radius) == "number" ? pageInfo.radius : this.pageInfo.radius;
			this.pageInfo.namespace = pageInfo.namespace ? pageInfo.namespace : this.pageInfo.namespace;
			this.pageInfo.handler  = pageInfo.handler || null;
			this.pageInfo.args  = pageInfo.args || [];
			this.pageInfo.page = pageInfo.page || 1;
			this.pageInfo.returnPage = pageInfo.returnPage || 1;
			this.pageInfo.currentPage = Math.max(this.pageInfo.page - 1, 0);
			this.pageInfo.virtualPage = Math.max(this.pageInfo.returnPage - 1, 0) * this.pageInfo.returnPages + this.pageInfo.currentPage;
			this.pageInfo.totalPageSize = Math.ceil(this.pageInfo.recordcount / this.pageInfo.pageSize);
			this.pageInfo.viewSize = this.pageInfo.radius * 2 + 1;
			this.pageInfo.defSize = 9;/*this.pageInfo.viewSize + this.pageInfo.offset;*/
		},
		getPageInfo : function(){
			return this.pageInfo;
		},
		getPageItem : function(page){
			//var currentPage = this.pageInfo.noRecordcount ? this.pageInfo.virtualPage : this.pageInfo.currentPage;
			var currentPage = this.pageInfo.currentPage;
			var actualPage = this.pageInfo.noRecordcount ? Math.max(this.pageInfo.returnPage - 1, 0) * this.pageInfo.returnPages + page : page;
			var item = '<a${className} href="javascript:${link};">${page}</a>';
			item = item.replace("${page}", (actualPage + 1));
			if(page != currentPage){
				item = item.replace("${link}", this.pageInfo.namespace + ".turnPage("+page+", true, false)");
				item = item.replace("${className}", "");
			}else{
				item = item.replace("${link}", "void(0)");
				item = item.replace("${className}", " class=\"selected\"");
			}
			return item;
		},
		getPageItems : function(type){
			var totalPageSize = this.pageInfo.totalPageSize;
			var currentPage = this.pageInfo.currentPage;
			var offset = this.pageInfo.offset;
			var radius = this.pageInfo.radius;
			var viewSize = this.pageInfo.viewSize;
			var defSize = this.pageInfo.defSize;
			var ellipsis = this.pageInfo.noRecordcount ? '' : '<em class="ellipsis">…</em>';
			var tmp = "";
			var items = "";
			if(!this.pageInfo.noRecordcount){
				if(0 == type){ /* 1~9*/
					for(var i = 0; i < totalPageSize; i++){
						items += this.getPageItem(i);
					}
				}else{ /* >9*/
					var tmpSize = radius < 3 ? viewSize + offset : viewSize;
					if(currentPage >= tmpSize - 1){
						for(var i = 0; i < offset; i++){
							items += this.getPageItem(i);
						}
						items += ellipsis;
						if(totalPageSize - defSize - 1 > 0 && totalPageSize - defSize - 1 <= offset){
							for(var i = totalPageSize - defSize + offset; i < totalPageSize; i++){
								items += this.getPageItem(i);
							}
						}else{
							if(totalPageSize - currentPage < tmpSize){
								for(var i = totalPageSize - tmpSize; i < totalPageSize; i++){
									items += this.getPageItem(i);
								}
							}else{
								for(var i = currentPage - radius; i <= currentPage + radius; i++){
									items += this.getPageItem(i);
								}
								items += ellipsis;
								for(var i = totalPageSize - offset ; i < totalPageSize; i++){
									items += this.getPageItem(i);
								}
							}
						}
					}else{
						for(var i = 0; i < tmpSize; i++){
							items += this.getPageItem(i);
						}
						items += ellipsis;
						for(var i = totalPageSize - offset ; i < totalPageSize; i++){
							items += this.getPageItem(i);
						}
					}
				}
			}else{
				for(var i = 0; i < totalPageSize && i < this.pageInfo.returnPages; i++){
					//items += this.getPageItem(Math.max(this.pageInfo.returnPage - 1, 0) * this.pageInfo.returnPages + i);
					items += this.getPageItem(i);
				}
			}
			return items;
		},
		checkValue : function(isJump){
			var pattern = /^\d+$/;
			var input = this.$("_pagebar_input");
			var v = 1;
			if(null != input){
				v = input.value;
				if(!pattern.test(v)){
					this.$("_pagebar_input").value = 1;
					v = 1;
				}
				v = parseInt(v, 10);
				if(v < 1){
					v = 1;
				}else if(v > this.pageInfo.totalPageSize){
					v = this.pageInfo.totalPageSize;
				}
				input.value = v;
				v = v - 1;
				if(v != this.pageInfo.currentPage && isJump){
					this.turnPage(v, true, false);
				}
			}
		},
		getJumpInput : function(){
			var str = '<label>第<input type="text" value="'+ (this.pageInfo.currentPage + 1) +'" id="_pagebar_input" onkeyup="'+ this.pageInfo.namespace + '.checkValue(false)">页 <button onclick="'+ this.pageInfo.namespace + '.checkValue(true)">跳转</button><label>';
			return str;
		},
		turnPage : function(offset, isPage, isInit){
			var isCurrentPage = false;
			var isLTZero = false;
			if(isPage){
				isCurrentPage = (offset == this.pageInfo.currentPage);
				this.pageInfo.currentPage = offset;
			}else{
				isCurrentPage = false;
				this.pageInfo.currentPage += offset;
			}
			var currentPage = this.pageInfo.currentPage;
			var totalPageSize = this.pageInfo.totalPageSize;
			if(currentPage < 0){
				isLTZero = true;
				this.pageInfo.currentPage = 0;
			}
			if(currentPage > totalPageSize - 1){
				this.pageInfo.currentPage = totalPageSize - 1;
			}
			if(this.pageInfo.noRecordcount){
				this.pageInfo.virtualPage = Math.max(this.pageInfo.returnPage - 1, 0) * this.pageInfo.returnPages + this.pageInfo.currentPage;
			}
			this.draw();
			if(null != this.pageInfo.handler && (!isCurrentPage || isInit)){
				if(this.pageInfo.noRecordcount && isLTZero){
					this.pageInfo.currentPage -= 1;
				}
				this.pageInfo.handler.apply(this.pageInfo.handler, this.pageInfo.args);
			}
		},
		getPageBar : function(){
			var totalPageSize = this.pageInfo.totalPageSize;
			var currentPage = this.pageInfo.currentPage;
			if(totalPageSize > 1 || (this.pageInfo.noRecordcount && totalPageSize == 1 && this.pageInfo.virtualPage > 0)){
				var str = '<div class="page-bar">';
				str += this.pageInfo.isShowPages ? '<span>'+(currentPage+1)+'/'+totalPageSize+'页</span>' : "";
				if(currentPage > 0 || this.pageInfo.noRecordcount){
					if(0 == currentPage && this.pageInfo.noRecordcount && 0 == this.pageInfo.virtualPage){
						str += '<a class="text dis" href="javascript://">上一页</a>';
					}else{
						str += '<a class="text" href="javascript:'+ this.pageInfo.namespace + '.turnPage(-1, false, false);">上一页</a>';
					}
				}
				if(totalPageSize <= this.pageInfo.defSize){
					str += this.getPageItems(0);
				}else{
					str += this.getPageItems(1);
				}
				if(currentPage < totalPageSize - 1 || this.pageInfo.noRecordcount){
					if((currentPage == totalPageSize - 1 || currentPage == this.pageInfo.returnPages - 1) && !this.pageInfo.hasNext && this.pageInfo.noRecordcount){
						str += '<a class="text dis" href="javascript://">下一页</a>';
					}else{
						str += '<a class="text" href="javascript:'+ this.pageInfo.namespace + '.turnPage(1, false, false);">下一页</a>';
					}
				}
				if(totalPageSize > this.pageInfo.jumpSize && this.pageInfo.isShowJumper){
					str += this.getJumpInput();
				}
				str += "</div>";
				return str;
			}else{
				return "";
			}
		},
		draw : function(){
			var positions = this.pageInfo.positions;
			var len = positions.length;
			var pos = null;
			var pageBar = this.getPageBar();
			for(var i = 0; i < len; i++){
				pos = this.$(positions[i]);
				if(pos){
					pos.innerHTML = pageBar;
				}
			}
		},
		init : function(pageInfo){
			this.setPageInfo(pageInfo);
			this.turnPage(this.pageInfo.currentPage, true, true);
		}
	};
	/**
	 * 前端翻页组件
	 */
	MCH.PageBar = new PageBar();
})(window, document);
