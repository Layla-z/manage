/******************************************************************************************************************
公共库文件，其中request需要配合/js/wth.js中的AJAX使用
 ******************************************************************************************************************/

/*
 *错误处理
 *@param json eleList 可选，格式{id:{fun:handle,tip:{txt1,txt2}}
 */
var dataValid = function (eleList) {
	this.eleList = typeof(eleList) == 'array' ? eleList : [];
	this.flag = true;
	this.showedAtFirstNode = false; //是否已经在第一个错误处显示错误信息
	this.errorTag = ''; //普通错误信息html标签
	this.pwdErrorTag = ''; //密码控件错图图标的html标签
	this.innerHtml = ''; //普通错误提示外层tag中的innerHTML
	this.pwdErrorInnerHtml = ''; //密码控件错误图标内部的innerHTML
	this.outerTagAttr = null;
	this.tipNodes = {};
	this.errorEle = ','; //已显示错误信息的节点id拼接成的字符串，首尾为逗号
	this.errorClassName = 'invalid-input';
	this.pwdERrorClassName = 'ico-error-s'; //密码控件后的错误图标节点样式
	this.errorHtml = '<div class="layer-tips layer-tips-yellow form-error-tip"><span class="ico-direction-b"><!-- 下指示图标 --></span><div class="layer-tips-main">{errorHtml}</div></div>';
	this.pwdErrorHtml = '<span class="ico-error-s"></span>';
	this.setErrorHtml(this.errorHtml);
	this.setPwdErrorHtml(this.pwdErrorHtml);
}

dataValid.prototype = {
	//添加一个表单元素，绑定错误信息
	addEle : function (eleId, handle, errorMsgs, param) {
		this.eleList[this.eleList.length] = {
			id : eleId,
			fun : handle,
			tip : errorMsgs,
			params : param || []
		};
		//添加事件监听
		var ele = this.$(eleId);
		if (!ele)
			return;
		//if('onkeyup' in ele) until.addListener(ele,'keyup',this.listener,this);
		//if('onchange' in ele) until.addListener(ele,'change',this.listener,this);
	},
	process : function () {
		var result = true;
		for (var i in this.eleList) {
			if (this.errorEle.indexOf(',' + this.eleList[i].id + ',') > -1)
				continue; //如果该节点已经有错误信息显示，则跳过
			var _this = this.$(this.eleList[i].id);
			var result = this.eleList[i].fun.apply(_this, this.eleList[i].params);
			this.showError(_this, result in this.eleList[i].tip ? this.eleList[i].tip[result] : '', this.eleList[i].fun, this.eleList[i].params);
		}
		return this.flag;
	},
	//显示错误信息
	showError : function (ele, msg, handle, params) {
		var _this = this;
		var isPasswd = ele.tagName.toLowerCase() == 'object';
		isPasswd ? this.removePasswdTip(ele) : this.removeTip(ele);
		//错误信息不存在，则移除错误提示
		if (!msg || msg.length == 0) {
			this.flag = this.flag && true;
			return;
		}
		this.errorEle += ele.id + ',';
		//给错误表单元素添加错误显示样式
		if (isPasswd) {
			this.showPasswdErrorIco(ele);
		} else {
			ele.className += ele.className.indexOf(this.errorClassName) > -1 ? '' : ' ' + this.errorClassName;
			var tagName = ele.tagName.toLowerCase();
		}
		this.flag = false; //是否有验证失败标识
		var newNode = document.createElement(this.errorTag);
		newNode.id = 'datavalid_' + ele.id + '_error_info';
		//给新创建的节点赋值属性
		for (var i in this.outerTagAttr)
			newNode[i] = this.outerTagAttr[i];
		newNode.innerHTML = this.innerHtml.replace('{errorHtml}', msg);
		document.body.appendChild(newNode);
		this.setPosition(ele, newNode);
		this.tipNodes[ele.id] = newNode.id;
		var _this = this;
		//添加事件，获取焦点的时候，显示错误提示
		ele.onmouseover = function (evt) {
			var e = evt || window.event;
			_this.mouseOver.call(_this, e);
		}
		ele.onmouseout = function (evt) {
			var e = evt || window.event;
			_this.mouseOut.call(_this, e);
		}
		//until.addListener(ele, 'mouseover', this.mouseOver, this);
		//until.addListener(ele, 'mouseout', this.mouseOut, this);
	},
	mouseOver : function (e) {
		var _this = e.target || e.srcElement;
		var tipId = 'datavalid_' + _this.id + '_error_info';
		if (this.$(tipId))
			this.$(tipId).style.visibility = 'visible';
	},
	mouseOut : function (e) {
		var _this = e.target || e.srcElement;
		var tipId = 'datavalid_' + _this.id + '_error_info';
		if (this.$(tipId))
			this.$(tipId).style.visibility = 'hidden';
	},
	listener : function (e) {
		var _this = e.target || e.srcElement;
		for (var i in this.eleList) {
			if (this.eleList[i].id == _this.id) {
				var handle = this.eleList[i].fun;
				var params = this.eleList[i].params;
				if (handle.apply(_this, params)) {
					this.removeTip(_this);
				}
				return;
			}
		}
	},
	//密码控件错误提示
	showPasswdErrorIco : function (ele) {
		var pwdErrorIco = document.createElement(this.pwdErrorTag);
		for (var i in this.pwdErrorTagAttrs)
			pwdErrorIco[i] = this.pwdErrorTagAttrs[i];
		pwdErrorIco.id = 'datavalid_' + Math.random();
		pwdErrorIco.style.display = 'block';
		pwdErrorIco.innerHTML = this.pwdErrorInnerHtml;
		this.tipNodes[ele.id] = pwdErrorIco.id;
		//插入到文档
		ele.parentNode.parentNode.insertBefore(pwdErrorIco, ele.parentNode);
		//交换位置
		ele.parentNode.parentNode.insertBefore(ele.parentNode, pwdErrorIco);
	},
	//设置错误时，添加在表单元素上的样式名称
	setErrorClassName : function (className) {
		this.setErrorClassName = className;
	},
	setPosition : function (ele, div) {
		var xy = this.getPosition(ele);
		var top = xy.y - div.offsetHeight;
    	div.style.visibility = this.showedAtFirstNode ? 'hidden' : '';
		div.style.zIndex = 999999;
		div.style.position = 'absolute';
		div.style.top = top + 'px';
		div.style.left = xy.x + 'px';
		this.showedAtFirstNode = true;
	},
	getPosition : function (e) {
		var xy = {};
		xy.x = e.offsetLeft;
		xy.y = e.offsetTop;
		while (e = e.offsetParent) {
			xy.x += e.offsetLeft;
			xy.y += e.offsetTop;
		}
		return xy;
	},
	//设置显示错误的浮层html
	setErrorHtml : function (html) {
		this.errorHtml = html;
		this.errorTag = html.replace(/^.*?<([^\s]+)\s.*$/, '$1');
		this.outerTagAttr = this.getTagAttributes(this.errorHtml);
		this.innerHtml = html.replace(/^.*?<[^>]+>(.*?)(?:<[^>]+?>[^<>]*)?$/, '$1');
	},
	//设置密码控件后面的错误提示图标html
	setPwdErrorHtml : function (html) {
		this.pwdErrorHtml = html;
		this.pwdErrorTagAttrs = this.getTagAttributes(html);
		this.pwdErrorClassName = this.pwdErrorTagAttrs['className'];
		this.pwdErrorTag = html.replace(/^.*?<([^\s]+)\s.*$/, '$1');
		this.pwdErrorInnerHtml = html.replace(/^.*?<[^>]+>(.*?)(?:<[^>]+?>[^<>]*)?$/, '$1');
	},
	//获取html中的属性
	getTagAttributes : function (html) {
		var html = html.replace(/^.*?<([^\s]+?\s+.+?)>.*$/, '$1').toLowerCase();
		var attr = html.match(new RegExp(/(\w+?=['"].+?['"])/g));
		var tagAttrs = {};
		for (var i = 0, n = attr.length; i < n; ++i) {
			var arr = attr[i].split('=');
			var index = arr[0] == 'class' ? 'className' : arr[0];
			tagAttrs[index] = arr[1].replace(/^['"]/, '').replace(/['"]+$/, '');
		}
		return tagAttrs;
	},
	//获取对象
	$ : function (id) {
		return document.getElementById(id);
	},
	//移除普通节点错误提示代码
	removeTip : function (ele) {
		until.removeListener(ele, 'mouseover', this.mouseOver, this);
		until.removeListener(ele, 'mouseout', this.mouseOut, this);
		//添加事件监听
		if ('onkeyup' in ele)
			until.removeListener(ele, 'keyup', this.listener, this);
		if ('onchange' in ele)
			until.removeListener(ele, 'change', this.listener, this);
		ele.className = ele.className.replace(this.errorClassName, '').replace(/^\s+|\s+$/, '');
		this.removeNode('datavalid_' + ele.id + '_error_info');
	},
	//移除密码控件错误提示代码
	removePasswdTip : function (ele) {
		until.removeListener(ele, 'mouseover', this.mouseOver, this);
		until.removeListener(ele, 'mouseout', this.mouseOut, this);
		var container = ele.parentNode.parentNode;
		var spans = container.getElementsByTagName('span');
		for (var i = 0, n = spans.length; i < n; ++i) {
			if (spans[i].className == 'ico-error-s') {
				spans[i].parentNode.removeChild(spans[i]);
				break;
			}
		}
		this.removeNode('datavalid_' + ele.id + '_error_info');
	},
	removeNode : function (nodeId) {
		var node = this.$(nodeId);
		if (node)
			node.parentNode.removeChild(node);
	}
}

var datetime = {
	/*日期和月份使用0填充*/
	dateWith0Fill : function (str) {
		return str.replace(/-(?!\d{2})/g, '-0');
	},
	/*日期和月份取消0填充*/
	dateWithout0Fill : function (str) {
		return str.replace(/-0/g, '-');
	},
	/*获取指定月份的最大天数*/
	getMaxDaysInMonth : function (year, month) {
		return 32 - new Date(year, month).getDate();
	},
	//日期格式校验
	datecheck : function (str) {
		if (!new RegExp(/^(19|20)\d{2}([-\/]\d{1,2}){2}$/).test(str))
			return false;
		var info = str.split(/[\/-]/);
		return parseInt(info[1], 10) <= 12 && parseInt(info[2], 10) <= 31;
	},
	//时间格式校验
	timecheck : function (str) {
		if (!new RegExp(/^\d{1,2}(:\d{1,2}){2}$/).test(str))
			return false;
		var info = str.split(':');
		return parseInt(info[0], 10) <= 23 && parseInt(info[1], 10) <= 59 && parseInt(info[2], 10) <= 59;
	},
	//日期时间格式校验
	datetimecheck : function (str) {
		if (!new RegExp(/^(19|20)\d{2}([-\/]\d{1,2}){2}\s+\d{1,2}(:\d{1,2}){2}$/).test(str))
			return false;
		var info = str.split(/[\s+]/);
		return this.datecheck(info[0]) && this.timecheck(info[1]);
	},
	//日期事件转换为时间戳
	str2time : function (str) {
		//把连续的多个空格替换成单个空格
		str = str.replace(/\s+/, ' ');
		var info = str.split(' ');
		var dates = info[0].split(/[\/-]/);
		var date = new Date();
		var times = [];
		if (info.length == 2)
			times = info[1].split(':');
		date.setFullYear(parseInt(dates[0], 10));
		date.setMonth(parseInt(dates[1], 10) - 1);
		date.setDate(parseInt(dates[2], 10));
		date.setHours(times[0] ? parseInt(times[0], 10) : 0);
		date.setMinutes(times[1] ? parseInt(times[1], 10) : 0);
		date.setSeconds(times[2] ? parseInt(times[2], 10) : 0);
		return date.getTime();
	},
	//时间戳转换为日期时间
	time2str : function (timestamp, withtime) {
		var date = new Date();
		date.setTime(timestamp);
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var day = date.getDate();
		if (withtime) {
			var hour = date.getHours();
			var minute = date.getMinutes();
			var second = date.getSeconds();
			var time = ' ' + hour + ':' + minute + ':' + second;
		}
		return year + '-' + month + '-' + day + (withtime ? time : '');
	},
	//计算天数之间的间隔,返回两个时间之间的间隔，单位:毫秒
	dateDiff : function (sdate, edate) {
		var stime = this.str2time(sdate);
		var etime = this.str2time(edate);
		return stime - etime;
	}
}

//分页
var pager = function (pagerId) {
	this.containerId = pagerId || 'pager';
	this.container = document.getElementById(this.containerId);
	this.showPageCount = true;
}
pager.prototype = {
	/**
	 *显示分页文字条
	 *@param pagenum int 总页数
	 *@param curpage int 当前页数
	 */
	showPageBar : function (pagenum, curpage, clickFun, show, curClass) {
		pagenum = parseInt(pagenum, 10);
		curpage = parseInt(curpage, 10);
		if (pagenum <= 1) {
			this.container.className += this.container.className.indexOf('hide') > -1 ? '' : ' hide';
			return;
		}
		curClass = curClass || 'on';
		show = show || 3;
		var pagestr = this.page(curpage, pagenum, clickFun, show, curClass);
		$('pageBar').innerHTML = pagestr;
		$('prevPage').href = curpage > 1 ? "javascript:" + clickFun + "(" + (curpage - 1) + ")" : 'javascript:;';
		$('nextPage').href = curpage < pagenum ? "javascript:" + clickFun + "(" + (curpage + 1) + ")" : 'javascript:;';
		if (this.showPageCount) {
			$('pageCount').getElementsByTagName('span')[0].innerHTML = curpage + '/' + pagenum;
		} else {
			$('pageCount').className += $('pageCount').className.indexOf('hide') > -1 ? '' : ' hide';
		}
		$('prevPage').className = curpage > 1 ? $('prevPage').className.replace(' page-previous-disabled', '') : ($('prevPage').className.indexOf('page-previous-disabled') > -1 ? $('prevPage').className : ($('prevPage').className + ' page-previous-disabled'));
		$('nextPage').className = curpage < pagenum ? $('nextPage').className.replace(' page-next-disabled', '') : ($('nextPage').className.indexOf('page-next-disabled') > -1 ? $('nextPage').className : ($('nextPage').className + ' page-next-disabled'));
		$('redirectTo').value = curpage < pagenum ? (parseInt(curpage, 10) + 1) : 1;
		$('pageRedirct').onclick = function () {
			var tarPage = parseInt($('redirectTo').value.replace(/\s+|\s+$/g, ''), 10);
			if (!tarPage || !new RegExp(/^\d+$/).test(tarPage))
				return;
			tarPage = tarPage < 1 ? 1 : (tarPage > pagenum ? pagenum : tarPage);
			setTimeout(clickFun + '(' + tarPage + ')', 0);
		}
		this.container.className = this.container.className.replace('hide', '').replace(/^\s+|\s+$/g, '');
	},
	showPageBar2 : function (total_num, curpage, limit, clickFun) {
		var page;
		if (curpage > 1) { //不是第一页
			until.removeClass('page-disabled', $('page_up'));
			page = parseInt(curpage, 10) - 1;
			$('page_up').href = 'javascript:' + clickFun + '(' + page + ')';
		} else { //是第一页
			until.addClass('page-disabled', $('page_up'));
			$('page_up').href = 'javascript:;';
		}
		if (total_num >= (parseInt(limit, 10) + 1)) { //有下一页
			until.removeClass('page-disabled', $('page_down'));
			page = parseInt(curpage, 10) + 1;
			$('page_down').href = 'javascript:' + clickFun + '(' + page + ')';
		} else { //无下一页
			until.addClass('page-disabled', $('page_down'));
			$('page_down').href = 'javascript:;';
		}
		this.container.className = this.container.className.replace('hide', '').replace(/^\s+|\s+$/g, '');
	},
	//隐藏分页条
	hidePageBar : function () {
		this.container.className += this.container.className.indexOf('hide') > -1 ? '' : ' hide';
		this.container.className = this.container.className.replace(/^s+|\s+$/g, '');
	},
	//禁用左边的当前页和总页数
	disablePageCount : function () {
		this.showPageCount = false;
	},
	/**
	 *获取分页字符串
	 *@param curPage 	int 	当前页码
	 *@param totalPage 	int 	总页码
	 *@param funName	string 	点击分页时执行的函数名
	 *@param show		int 	当前页两边显示的页码，默认为3
	 *@param curClass	string	当前页样式名称
	 */
	page : function (curPage, totalPage, funName, show, curClass) {
		if (totalPage == 0 || totalPage == 1)
			return '';
		var curClass = curClass || 'current';
		var pagenum = show || 3; //当前页码左右显示的页面数量
		curPage = parseInt(curPage, 10); //当前页码
		totalPage = parseInt(totalPage, 10); //总页码
		var classes = ' class="' + curClass + '"';
		var page = '<a href="javascript:' + funName + '(1);"' + (curPage == 1 ? classes : '') + '>1</a>';
		if (curPage <= 1 + pagenum) {
			for (var i = 2, rightpage = curPage + pagenum > totalPage ? totalPage : curPage + pagenum; i <= rightpage; ++i) {
				classes = i == curPage ? ' class="' + curClass + '"' : '';
				page += '<a href="javascript:' + funName + '(' + i + ')"' + classes + '>' + i + '</a>';
			}
		} else {
			page += '<a>...</a>';
			for (var i = curPage - pagenum, rightpage = (curPage + pagenum) > totalPage ? totalPage : curPage + pagenum; i <= rightpage; ++i) {
				classes = i == curPage ? ' class="' + curClass + '"' : '';
				page += '<a href="javascript:' + funName + '(' + i + ')"' + classes + '>' + i + '</a>';
			}
		}
		if (i < totalPage) {
			page += '<a>...</a>';
			page += '<a href="javascript:' + funName + '(' + totalPage + ')">' + totalPage + '</a>';
		}
		if (i == totalPage) {
			page += '<a href="javascript:' + funName + '(' + totalPage + ')">' + totalPage + '</a>';
		}
		return page;
	}
}

var request = {
	/**
	 *发送查询请求
	 */
	sendQuery : function (url, param, callBack, extraparams) {
		var params = {};
		params.paraAndVal = param || [];
		params.url = url;
		params.method = params.method || 'get';
		var _this = this;
		params.callBack = function (xhr) {
			try {
				var xml = xhr.responseXML;
				var param = extraparams || [];
				param.push(xml);
				if (callBack)
					callBack.apply(_this, param);
			} catch (e) {
				until.alert(e.message);
			}
		}
		var ajax = new AJAX();
		ajax.send(params);
	},
	sendQuery1 : function (url, param, callBack, extraparams) {
		var params = {};
		params.paraAndVal = param || [];
		params.url = url;
		params.method = params.method || 'get';
		//params.async=false;
		var _this = this;
		params.callBack = function (xhr) {
			try {
				var xml = xhr.responseText;
				var param = extraparams || [];
				param.push(xml);
				if (callBack)
					callBack.apply(_this, param);
			} catch (e) {
				until.alert(e.message);
			}
		}
		var ajax = new AJAX();
		ajax.send(params);
	},
	
	/**
	 *发送录入请求
	 */
	sendUpdate : function (url, param, callBack, extraparams) {
		var params = {};
		params.paraAndVal = param || [];
		params.url = url;
		params.method = params.method || 'post';
		var _this = this;
		params.callBack = function (xhr) {
			try {
				var xml = xhr.responseXML;
				var param = extraparams || [];
				param.push(xml);
				if (callBack)
					callBack.apply(_this, param);
			} catch (e) {
				until.alert(e.message);
			}
		}
		var ajax = new AJAX();
		ajax.send(params);
	}
}

var until = {
	/**
	 *文本复制
	 */
	copy : function (text) {
		var support = false;
		try {
			if (window.clipboardData) {
				support = true;
				clipboardData.setData('Text', text);
			} else if (window.netscape) {
				support = true;
				try {
					netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
				} catch (e) {
					Box.text({
						title : "温馨提示",
						info : "被浏览器拒绝！\n请在浏览器地址栏输入'about:config'并回车\n然后将 'signed.applets.codebase_principal_support' 设置为'true'",
						w : 355
					});
					return false;
				}
				var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
				var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
				if (!clip || !trans) {
					return false;
				}
				trans.addDataFlavor("text/unicode");
				var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
				str.data = text;
				trans.setTransferData("text/unicode", str, text.length * 2);
				var clipid = Components.interfaces.nsIClipboard;
				clip.setData(trans, null, clipid.kGlobalClipboard);
			} else if (navigator.userAgent.indexOf("Opera") != -1) {
				support = true;
				window.location = text;
			} else {
				support = false;
				Box.text({
					title : "温馨提示",
					infoPic : "2",
					info : "此浏览器不支持复制功能，您可以在IE浏览器下进行复制操作。",
					w : 355
				});
			}
			if (support) {
				Box.text({
					title : "温馨提示",
					infoPic : "1",
					info : "订单号复制成功，您可以用Ctrl+V粘贴内容。",
					w : 355
				});
			}
		} catch (e) {
			if (support) {
				Box.text({
					title : "温馨提示",
					infoPic : "2",
					info : "复制失败\n\n" + e.message,
					w : 355
				});
			}
		}
	},
	//缩写，复制
	toShort : function (str, len) {
		len = parseInt(len) || 8;
		if (len % 2 == 1)
			len++;
		var offset = len / 2;
		var txt = str.length <= len ? str : (str.substr(0, offset) + '...' + str.substr(str.length - offset + 1, offset));
		return '<a class="copy-txt" title="' + str + '" href="JavaScript:until.copy(\'' + str + '\')">' + txt + '</a>';
	},
	//创建一个下拉选项
	addOption : function (selID, txt, val) {
		var opt = new Option(txt, val);
		document.getElementById(selID).options.add(opt);
	},
	addListener : function (ele, evt, handle, obj) {
		var e = evt.substr(0, 2) == 'on' ? evt : 'on' + evt;
		var eventHandle = handle;
		if (typeof(obj) == 'object') {
			eventHandle = function (e) {
				handle.call(obj, e);
			}
		}
		if (ele.addEventListener) {
			ele.addEventListener(e, eventHandle, false);
			return;
		}
		if (ele.attachEvent) {
			ele.attachEvent(e, eventHandle);
			return;
		}
		ele[e] = eventHandle;
	},
	removeListener : function (ele, evt, handle, obj) {
		var e = evt.substr(0, 2) == 'on' ? evt : 'on' + evt;
		var eventHandle = handle;
		if (typeof(obj) == 'object') {
			eventHandle = function (e) {
				handle.call(obj, e);
			}
		}
		if (ele.removeEventListener) {
			ele.removeEventListener(e, eventHandle);
			return;
		}
		if (ele.detachEvent) {
			ele.detachEvent(e, eventHandle);
		}
	},
	/**
	 *获取xml节点内容
	 */
	getXmlNodeValue : function (parentNode, nodeName) {
		try {
			var _node = TFL.Xml.selectSingleNode(parentNode, nodeName);
			_node = _node ? _node.firstChild : "";
			return _node ? _node.data : "";
		} catch (e) {
			return "";
		}
	},
	//获取指定的节点数组
	getXmlNodes : function (parentNode, nodeName) {
		try {
			var nodes = TFL.Xml.selectNodes(parentNode, '//' + nodeName);
			return nodes && nodes.length > 0 ? nodes : [];
		} catch (e) {
			return [];
		}
	},
	/**
	 *弹出层提示框
	 */
	alert : function (html, title, btns, width, height, icon) {
		var cfg = {
			title : title || '温馨提示',
			info : html
		};
		if (width)
			cfg.w = width;
		if (height)
			cfg.h = height;
		if (btns)
			cfg.btns = btns;
		//Box.text(cfg);
	},
	//去掉空格或者指定的字符串
	trim : function (str, chr) {
		var trimChar = chr || '\\s';
		var reg = new RegExp('^' + trimChar + '+|' + trimChar + '+$', 'g')
			return str.replace(reg, '');
	},
	/**
	 *元到分转换
	 */
	yuan2Fen : function (val) {
		var result,
		re = /^[\+|-]?\d+(\.\d+)?$/;
		if (typeof(val) != "string")
			val = val.toString();
		return (re.test(val)) ? (parseFloat(val) * 100).toFixed(0) : "0";
	},
	/**
	 *分到元转换
	 */
	fen2Yuan : function (val) {
		var result,
		re = /^[\+|-]?[0-9]+$/;
		if (typeof(val) != "string")
			val = val.toString();
		return (re.test(val)) ? (parseFloat(val) / 100).toFixed(2) : "0.00";
	},
	/**
	 *设置表格隔行变色，以及最后一行颜色
	 */
	setTableRowClass : function (tbId) {
		var tb = typeof(tbId) == 'string' ? $(tbId) : tbId;
		if (!tb)
			return false;
		var rows = tb.rows;
		if (rows.length == 1) {
			var newRow = tb.insertRow(-1);
			var newCell = newRow.insertCell(-1);
			newCell.innerHTML = '<span class="ico-info-s"></span>暂无数据，请稍后查询';
			newCell.className = 'align-c only-line error-tip';
			newCell.colSpan = rows[0].cells.length;
			return;
		}
		for (var i = 1, n = rows.length; i < n; ++i) {
			var classes = [];
			if (i % 2 == 0)
				classes.push('line-bg');
			if (i == n - 1)
				classes.push('last-line');
			if (classes.length > 0)
				rows[i].className = classes.join(' ');
		}
	},
	/**
	 *根据查询字符串初始化表单
	 */
	initFormByQueryString : function (str) {
		var pairs = str.split('&');
		for (var i in pairs) {
			var pair = pairs[i].split('=');
			if (!pair[0])
				continue;
			var ele = document.getElementsByName(pair[0])[0];
			if (!ele)
				continue;
			if (ele.tagName.toLowerCase() == 'select') {
				for (var idx = 0, m = ele.options.length; idx < m; ++idx) {
					if (ele.options[idx].value == pair[1]) {
						ele.selectedIndex = idx;
						break;
					}
				}
				continue;
			}
			if (ele.type.toLowerCase() == 'radio') {
				var rdos = document.getElementsByName(ele.name);
				for (var k = 0, n = rdos.length; k < n; ++k) {
					if (rdos[k].value == pair[1]) {
						rdos[k].checked = true;
						break;
					}
				}
				if (pair[0] == 'query_type' && pair[1] == '1') {
					$('dateForm').style.display = 'none';
					$('numForm').style.display = 'block';
				}
				continue;
			}
			ele.value = pair[1];
		}
	},
	getQueryString : function (name) {
		//var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var reg = new RegExp("(^|\\?|&|#)" + name + "=([^&#]*)");
		//var r = window.location.href.match(reg);
		var r = decodeURIComponent(window.location.href).match(reg);
    	if (r != null)
			return r[2];
		return null;
	},
	getNodeValue : function (nodeName, parNode) {
		try {
			return until.outputSafeContent(parNode.getElementsByTagName(nodeName)[0].firstChild.data);
		} catch (e) {
			return '';
		}
	},
	hasClass : function (c, e) {
		c = this.trim(c).split(/\s+/);
		var cls = ' ' + e.className + ' ',
		i = 0,
		len = c.length;
		for (; i < len; i++) {
			if (cls.indexOf(' ' + c[i] + ' ') == -1)
				return false;
		}
		return true;
	},
	/**
	 * 添加样式(支持多个)
	 * @param {String} c 样式名 'a' | 'a b' | 'a b c'
	 * @param {Object} e 元素
	 */
	addClass : function (c, e) {
		c = this.trim(c).split(/\s+/);
		var cls = this.trim(e.className);
		for (var i = 0, len = c.length; i < len; i++) {
			cls = (' ' + cls + ' ').replace(' ' + c[i] + ' ', ' ');
		}
		cls += ' ' + c.join(' ');
		e.className = this.trim(cls);
	},
	/**
	 * 移除样式(支持多个)
	 * @param {String} c 样式名 'a' | 'a b' | 'a b c'
	 * @param {Object} e 元素
	 */
	removeClass : function (c, e) {
		c = this.trim(c).split(/\s+/);
		var cls = this.trim(e.className);
		for (var i = 0, len = c.length; i < len; i++) {
			cls = (' ' + cls + ' ').replace(' ' + c[i] + ' ', ' ');
		}
		e.className = this.trim(cls);
	},
	initCalender : function (startId, endId, startIco, endIco) {
		var startDate = startId ? this.trim($(startId).value) : '';
		var endDate = endId ? this.trim($(endId).value) : '';
		var hashes = location.hash.toString().replace('#', '');
		if (startDate.length == 0 && endDate.length == 0 && hashes.length == 0) {
			var d = new Date();
			var year = d.getFullYear();
			var mon = d.getMonth() + 1;
			var day = d.getDate();
			if (startId)
				$(startId).value = year + '-' + mon + '-' + day;
			if (endId)
				$(endId).value = year + '-' + mon + '-' + day;
		}
		var bindItems = [];
		if (startId)
			bindItems.push(startId);
		if (endId)
			bindItems.push(endId);
		TFL.timer.bind({
			today : "hidden",
			items : bindItems,
			autoShow : false
		});
		if (startIco) {
			$(startIco).onclick = function () {
				$(startId).focus();
			}
		}
		if (endIco) {
			$(endIco).onclick = function () {
				$(endId).focus();
			}
		}
	},
	moneyOrder : function (obj) {
		var symbol = /^-/.test(obj) ? "-" : "";
		var ZS = obj.split(".")[0].replace(/^0+/, "").replace(/^-/, "");
		var zs = (ZS == "") ? "0" : ZS;
		var xs = (typeof obj.split(".")[1] == "undefined") ? "00" : obj.split(".")[1];
		var fillArray = {
			"0" : "",
			"1" : "00",
			"2" : "0"
		};
		var str = (fillArray[zs.length % 3] + zs).replace(/^0+\./, "0.");
		var re = /\d{3}/g;
		var tmpArray = [];
		while ((val = re.exec(str)) != null)
			tmpArray.push(val);
		var newRe = new RegExp(tmpArray.join(""), "g");
		var end = str.replace(newRe, "");
		if (end != "") {
			tmpArray.push(end);
		}
		var result = tmpArray.join(",").replace(/^0+/, "");
		return (symbol + ((result == "") ? "0" : result) + "." + xs);
	},
	outputSafeContent : function (str) {
		return str.replace("&", "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
	},
	copyText : function (str) {
		if (window.clipboardData) {
			window.clipboardData.setData("Text", str);
			return true;
		} else {
			return false;
		}
	},
	goBack : function () {
		window.history.go(-1);
	},
	getElementsByClassName : function (clsName, htmltag, root) {
		var arr = new Array();
		var rootEl = arguments[2] || document;
		var elems = rootEl.getElementsByTagName(htmltag);
		for (var i = 0; (elem = elems[i]); i++) {
			if (this.hasClass(clsName, elem)) {
				arr[arr.length] = elem;
			}
		}
		return arr;
	},
	each : function (obj, fn, args) {
		if (args) {
			if (obj.length == undefined) {
				for (var i in obj)
					fn.apply(obj, args);
			} else {
				for (var i = 0, ol = obj.length; i < ol; i++) {
					if (fn.apply(obj, args) === false)
						break;
				}
			}
		} else {
			if (obj.length == undefined) {
				for (var i in obj)
					fn.call(obj, i, obj);
			} else {
				for (var i = 0, ol = obj.length, val = obj[0]; i < ol && fn.call(val, i, val) !== false; val = obj[++i]) {}
				
			}
		}
		return obj;
	},
	getRdoValue : function (n) {
		var rdos = document.getElementsByName(n);
		for (var i = 0; i < rdos.length; i++) {
			if (rdos[i].checked)
				return rdos[i].value;
		}
		return "";
	},
    setRdoValue : function (n, v) {
		var rdos = document.getElementsByName(n);
		for (var i = 0; i < rdos.length; i++) {
			if (rdos[i].value == v){
				rdos[i].checked = true;
                break;
            }
		}
	}
}

var monthPicker = function (ctrlId, disableFutureMonth) {
	this.months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', ];
	this.disableFutureMonth = typeof(disableFutureMonth) == 'undefined' ? true : !!disableFutureMonth;
	this.ctrlId = ctrlId;
}

monthPicker.prototype = {
	//设置年月的起始点，默认为前10年到今年当前月份
	setDateLimit : function (start, end) {
		this.start = this.isYearMonth(start) ? start + '-1' : this.getDate(-365 * 10);
		this.end = this.isYearMonth(end) ? end + '-1' : this.getDate();
	},
	//检查年月格式，分隔符"/"、"-"
	isYearMonth : function (str) {
		return new RegExp(/^(19|20)\d{2}[\/\-][1-12]$/).test(str.replace(/\-0/g, '-'));
	},
	//获取指定的年月，参数表示天数偏移，负数为向前移动，正数为向后移动
	getDate : function (dayOffset) {
		var date = new Date();
		if (dayOffset && !isNaN(dayOffset))
			date.setTime(date.getTime() + dayOffset * 3600 * 24 * 1000);
		return date.getFullYear() + '-' + (date.getMonth() + 1) + '-1';
	},
	bind : function (posid) {
		var _this = this;
		var positions = ['top', 'right', 'bottom', 'left'];
		var pos = positions[posid] || 'default';
		var date = new Date();
		var curYear = date.getFullYear();
		var curMonth = date.getMonth();
		var container = this.create('div', 'datearea');
		container.style.position = 'absolute',
		container.style.display = 'none';
		var outer = this.create('div', 'datenav clearfix');
		var lastYear = this.create('a', 'left-year', {
				'title' : '上一年',
				'href' : 'javascript:;'
			});
		lastYear.onclick = function (e) {
			var evt = e || window.event;
			if (evt.stopPropagation) {
				evt.stopPropagation();
			} else {
				evt.cancelBubble = true;
			}
			currentYear.innerHTML = parseInt(currentYear.innerHTML, 10) - 1;
			_this.listMonths(container, currentYear, curYear, curMonth);
		}
		var lastYearTag = this.create('span');
		lastYear.appendChild(lastYearTag);
		outer.appendChild(lastYear);
		/*var lastMonth = this.create('a', 'left-month v-hidden', {
		'title' : '上个月',
		'href' : 'javascript:;'
		});
		var lastMonTag = this.create('span');
		lastMonth.appendChild(lastMonTag);*/
		var currentYear = this.create('span', 'now', '', curYear);
		/*var nextMonth = this.create('a', 'right-month v-hidden', {
		'title' : '下个月',
		'href' : 'javascript:;'
		});
		var nextMonTag = this.create('span');
		nextMonth.appendChild(nextMonTag);*/
		var nextYear = this.create('a', 'right-year', {
				'title' : '下一年',
				'href' : 'javascript:;'
			});
		nextYear.onclick = function (e) {
			var evt = e || window.event;
			if (evt.stopPropagation) {
				evt.stopPropagation();
			} else {
				evt.cancelBubble = true;
			}
			currentYear.innerHTML = parseInt(currentYear.innerHTML, 10) + 1;
			_this.listMonths(container, currentYear, curYear, curMonth);
		}
		var nextYearTag = this.create('span');
		nextYear.appendChild(nextYearTag);
		outer.appendChild(lastYear);
		//outer.appendChild(lastMonth);
		outer.appendChild(currentYear);
		//outer.appendChild(nextMonth);
		outer.appendChild(nextYear);
		container.appendChild(outer);
		_this.listMonths(container, currentYear, curYear, curMonth);
		document.body.appendChild(container);
		var ctrl = document.getElementById(this.ctrlId);
		var xy = this.getPosition();
		if (pos == 'top')
			xy.y -= container.offsetHeight;
		if (pos == 'bottom')
			xy.y += ctrl.offsetHeight;
		if (pos == 'left')
			xy.x -= container.offsetWidth;
		if (pos == 'right')
			xy.x += ctrl.offsetWidth;
		container.style.top = xy.y + 'px';
		container.style.left = xy.x + 'px';
		document.body.onclick = function (e) {
			var evt = e || window.event;
			var tar = evt.srcElement || evt.target;
			while (tar) {
				if (tar == container || tar == ctrl)
					return;
				tar = tar.offsetParent;
			}
			container.style.display = 'none';
		};
		ctrl.onfocus = function () {
			container.style.display = 'block';
		}
	},
	listMonths : function (container, currentYear, curYear, curMonth) {
		var _this = this;
		var ul = container.getElementsByTagName('ul')[0] || this.create('ul', 'month');
		ul.innerHTML = '';
		for (var i in this.months) {
			var hasATag = !this.disableFutureMonth || (this.disableFutureMonth && (currentYear.innerHTML < curYear || (currentYear.innerHTML == curYear && curMonth >= i)));
			var cell = this.create('li', null, null, !hasATag ? this.months[i] : '');
			if (hasATag) {
				var aTag = this.create('a', null, {
						'href' : 'javascript:;'
					}, this.months[i]);
				(function (index) {
					aTag.onclick = function () {
						document.getElementById(_this.ctrlId).value = currentYear.innerHTML + '-' + (parseInt(index, 10) + 1);
						container.style.display = 'none';
					}
				})(i);
				cell.appendChild(aTag);
			}
			ul.appendChild(cell);
		}
		container.appendChild(ul);
	},
	getPosition : function () {
		var pos = {
			x : 0,
			y : 0
		};
		var ctrl = document.getElementById(this.ctrlId);
		while (ctrl = ctrl.offsetParent) {
			pos.x += ctrl.offsetLeft;
			pos.y += ctrl.offsetTop;
		}
		return pos;
	},
	create : function (tagName, className, attrs, innerhtml) {
		var ele = document.createElement(tagName);
		if (className)
			ele.className = className;
		if (attrs) {
			for (var i in attrs) {
				ele[i] = attrs[i];
			}
		}
		if (innerhtml)
			ele.innerHTML = innerhtml;
		return ele;
	}
}
var siteData = {
	bankList : [
    {type:"0",name:"财付通余额"},
    {type:"1001",name:"招商银行"},
    {type:"1002",name:"工商银行"},
    {type:"1003",name:"建设银行"},
    {type:"1004",name:"浦发银行"},
    {type:"1005",name:"农业银行"},
    {type:"1006",name:"民生银行"},
    {type:"1007",name:"农行国际卡"},
    {type:"1008",name:"深圳发展银行"},
    {type:"1009",name:"兴业银行"},
    {type:"1010",name:"平安银行"},
    {type:"1020",name:"中国交通银行"},
    {type:"1021",name:"中信实业银行"},
    {type:"1022",name:"中国光大银行"},
    {type:"1023",name:"农村合作信用社"},
    {type:"1024",name:"上海银行"},
    {type:"1025",name:"华夏银行"},
    {type:"1026",name:"中国银行"},
    {type:"1027",name:"广东发展银行"},
    {type:"1028",name:"广东银联"},
    {type:"1099",name:"其他银行"},
    {type:"9999",name:"财付通(预留)"},
    {type:"1030",name:"工行B2B"},
    {type:"1031",name:"招行大额"},
    {type:"1032",name:"北京银行"},
    {type:"1033",name:"网汇通"},
    {type:"1034",name:"建行大额"},
    {type:"1035",name:"建行非实名"},
    {type:"1036",name:"工行外卡"},
    {type:"1037",name:"工行大额"},
    {type:"1038",name:"招行基础业务"},
    {type:"1039",name:"工行直付"},
    {type:"2001",name:"招行绑定支付"},
    {type:"2002",name:"工行绑定支付"},
    {type:"3001",name:"兴业信用卡"},
    {type:"3002",name:"中行信用卡"},
    {type:"1041",name:"民生银行借记卡"},
    {type:"1052",name:"中行小额"},
    {type:"1053",name:"中行大额"},
    {type:"2033",name:"邮储一点通"},
    {type:"3004",name:"建行信用卡(快捷)"},
    {type:"1059",name:"兴业信用卡小额"},
    {type:"1051",name:"广发借记卡"},
    {type:"1061",name:"兴业信用卡大额"},
    {type:"2003",name:"建行一点通"},
    {type:"3003",name:"工行信用卡(快捷)"},
    {type:"1082",name:"上海农村商业银行"},
    {type:"1066",name:"邮储借记卡"},
    {type:"1077",name:"东亚信用卡"},
    {type:"1043",name:"农行B2B"},
    {type:"1091",name:"招行wap手机支付"},
    {type:"1092",name:"农行wap手机支付"},
    {type:"1095",name:"交行wap手机支付"},
    {type:"1096",name:"华夏借记卡"},
    {type:"1103",name:"光大银行企业网银"},
    {type:"3107",name:"中行快捷支付"},
    {type:"2013",name:"建行借记卡快捷支付"},
    {type:"1104",name:"宁波银行其他渠道接入"},
    {type:"1087",name:"银联支付网关"},
    {type:"3110",name:"平安信用卡(快捷)"},
    {type:"3106",name:"建行信用卡(快捷)"},
    {type:"3006",name:"招行信用卡(快捷)"},
    {type:"3007",name:"农行信用卡(快捷)"},
    {type:"4184",name:"工行借记卡(快捷)"},
    {type:"4185",name:"中行借记卡(快捷)"},
    {type:"4186",name:"农行借记卡(快捷)"},
    {type:"4008",name:"宁波银行"},
    {type:"3109",name:"广发信用卡(快捷)"},
    {type:"2016",name:"广发借记卡(快捷)"},
    {type:"3113",name:"兴业信用卡(快捷)"},
    {type:"3105",name:"中信信用卡一点通"},
    {type:"3111",name:"交行信用卡一点通"},
    {type:"2011",name:"招行借记卡(快捷)"},
    {type:"3108",name:"光大信用卡(快捷)"},
    {type:"2014",name:"光大借记卡(快捷)"},
    {type:"3201",name:"宁波银行信用卡(快捷)"},
    {type:"3114",name:"深圳发展银行信用卡(快捷)"},
    {type:"1073",name:"工行手机支付"},
    {type:"4102",name:"农行代扣"},
    {type:"3115",name:"中信信用卡快捷"},
    {type:"2125",name:"中信借记卡快捷e"},
    {type:"3119",name:"民生信用卡快捷"},
    {type:"2008",name:"民生借记卡快捷"},
    {type:"3118",name:"华夏信用卡快捷"},
    {type:"2018",name:"华夏借记卡快捷"},
    {type:"2021",name:"兴业借记卡快捷"},
    {type:"2127",name:"华润银行借记卡"},
    {type:"2131",name:"重庆银行借记卡"},
    {type:"2130",name:"包商银行借记卡"},
    {type:"3203",name:"包商银行信用卡快捷"},
    {type:"2128",name:"杭州银行借记卡快捷"},
    {type:"3202",name:"杭州银行信用卡快捷"},
    {type:"2133",name:"顺德农商行借记卡快捷"},
    {type:"2126",name:"农行借记卡快捷"}
	],
	tradeTypeList : [
	    {type:"1",name:"C2C付款"},
		{type:"2",name:"B2C付款"},
		{type:"3",name:"快速交易"},
		{type:"4",name:"收款/付款"},
		{type:"5",name:"收款/付款"}
	],
	tradeBillStatusList : [
	    {type:"1",name:"等待支付"},
		{type:"2",name:"买方支付成功"},
		{type:"3",name:"已收到货"},
		{type:"4",name:"交易结束"},
		{type:"5",name:"支付失败"},
		{type:"6",name:"给卖家打款失败"},
		{type:"7",name:"转入退款"},
		{type:"8",name:"等待收款方确认"},
		{type:"9",name:"已转帐"},
		{type:"10",name:"拒绝转帐"},
		{type:"11",name:"已过期"},
		{type:"12",name:"已使用(购物券)"},
		{type:"13",name:"交易暂停"},
		{type:"99",name:"交易关闭"}
	],
	splitAccountStatusList : [
		{type:"0",name:"未分帐"},
		{type:"2",name:"已分帐"},
		{type:"4",name:"已分帐回退"},
		{type:"6",name:"已分帐回退"}	
	],
    bankListID : "",
    bankListName : "",
    listBank : function (json) //格式{bankListID :"",bankListName:""};
    {
        this.bankListID = json.bankListID;
        this.bankListName = json.bankListName;
        document.getElementById(this.bankListID).innerHTML = "";
        for (var i = 0; i < this.bankList.length; i++) {
            var newOption = document.createElement("option");
            var newText = document.createTextNode(this.bankList[i].name);
            newOption.setAttribute("value", this.bankList[i].type);
            newOption.setAttribute("name", this.bankListName);
            newOption.appendChild(newText);
            document.getElementById(this.bankListID).appendChild(newOption);
        }
    },
    showBankNameByType : function (type) {
        var bankName = "";
        for (var i = 0; i < this.bankList.length; i++) {
            if (type.replace(/(^\s)|(\s$)/g, "") == this.bankList[i].type) {
                bankName = this.bankList[i].name;
                break;
            }
        }
        return bankName;
    }
};

