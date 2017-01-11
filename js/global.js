/******************************************************************************************************************
�������ļ�������request��Ҫ���/js/wth.js�е�AJAXʹ��
 ******************************************************************************************************************/

/*
 *������
 *@param json eleList ��ѡ����ʽ{id:{fun:handle,tip:{txt1,txt2}}
 */
var dataValid = function (eleList) {
	this.eleList = typeof(eleList) == 'array' ? eleList : [];
	this.flag = true;
	this.showedAtFirstNode = false; //�Ƿ��Ѿ��ڵ�һ��������ʾ������Ϣ
	this.errorTag = ''; //��ͨ������Ϣhtml��ǩ
	this.pwdErrorTag = ''; //����ؼ���ͼͼ���html��ǩ
	this.innerHtml = ''; //��ͨ������ʾ���tag�е�innerHTML
	this.pwdErrorInnerHtml = ''; //����ؼ�����ͼ���ڲ���innerHTML
	this.outerTagAttr = null;
	this.tipNodes = {};
	this.errorEle = ','; //����ʾ������Ϣ�Ľڵ�idƴ�ӳɵ��ַ�������βΪ����
	this.errorClassName = 'invalid-input';
	this.pwdERrorClassName = 'ico-error-s'; //����ؼ���Ĵ���ͼ��ڵ���ʽ
	this.errorHtml = '<div class="layer-tips layer-tips-yellow form-error-tip"><span class="ico-direction-b"><!-- ��ָʾͼ�� --></span><div class="layer-tips-main">{errorHtml}</div></div>';
	this.pwdErrorHtml = '<span class="ico-error-s"></span>';
	this.setErrorHtml(this.errorHtml);
	this.setPwdErrorHtml(this.pwdErrorHtml);
}

dataValid.prototype = {
	//���һ����Ԫ�أ��󶨴�����Ϣ
	addEle : function (eleId, handle, errorMsgs, param) {
		this.eleList[this.eleList.length] = {
			id : eleId,
			fun : handle,
			tip : errorMsgs,
			params : param || []
		};
		//����¼�����
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
				continue; //����ýڵ��Ѿ��д�����Ϣ��ʾ��������
			var _this = this.$(this.eleList[i].id);
			var result = this.eleList[i].fun.apply(_this, this.eleList[i].params);
			this.showError(_this, result in this.eleList[i].tip ? this.eleList[i].tip[result] : '', this.eleList[i].fun, this.eleList[i].params);
		}
		return this.flag;
	},
	//��ʾ������Ϣ
	showError : function (ele, msg, handle, params) {
		var _this = this;
		var isPasswd = ele.tagName.toLowerCase() == 'object';
		isPasswd ? this.removePasswdTip(ele) : this.removeTip(ele);
		//������Ϣ�����ڣ����Ƴ�������ʾ
		if (!msg || msg.length == 0) {
			this.flag = this.flag && true;
			return;
		}
		this.errorEle += ele.id + ',';
		//�������Ԫ����Ӵ�����ʾ��ʽ
		if (isPasswd) {
			this.showPasswdErrorIco(ele);
		} else {
			ele.className += ele.className.indexOf(this.errorClassName) > -1 ? '' : ' ' + this.errorClassName;
			var tagName = ele.tagName.toLowerCase();
		}
		this.flag = false; //�Ƿ�����֤ʧ�ܱ�ʶ
		var newNode = document.createElement(this.errorTag);
		newNode.id = 'datavalid_' + ele.id + '_error_info';
		//���´����Ľڵ㸳ֵ����
		for (var i in this.outerTagAttr)
			newNode[i] = this.outerTagAttr[i];
		newNode.innerHTML = this.innerHtml.replace('{errorHtml}', msg);
		document.body.appendChild(newNode);
		this.setPosition(ele, newNode);
		this.tipNodes[ele.id] = newNode.id;
		var _this = this;
		//����¼�����ȡ�����ʱ����ʾ������ʾ
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
	//����ؼ�������ʾ
	showPasswdErrorIco : function (ele) {
		var pwdErrorIco = document.createElement(this.pwdErrorTag);
		for (var i in this.pwdErrorTagAttrs)
			pwdErrorIco[i] = this.pwdErrorTagAttrs[i];
		pwdErrorIco.id = 'datavalid_' + Math.random();
		pwdErrorIco.style.display = 'block';
		pwdErrorIco.innerHTML = this.pwdErrorInnerHtml;
		this.tipNodes[ele.id] = pwdErrorIco.id;
		//���뵽�ĵ�
		ele.parentNode.parentNode.insertBefore(pwdErrorIco, ele.parentNode);
		//����λ��
		ele.parentNode.parentNode.insertBefore(ele.parentNode, pwdErrorIco);
	},
	//���ô���ʱ������ڱ�Ԫ���ϵ���ʽ����
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
	//������ʾ����ĸ���html
	setErrorHtml : function (html) {
		this.errorHtml = html;
		this.errorTag = html.replace(/^.*?<([^\s]+)\s.*$/, '$1');
		this.outerTagAttr = this.getTagAttributes(this.errorHtml);
		this.innerHtml = html.replace(/^.*?<[^>]+>(.*?)(?:<[^>]+?>[^<>]*)?$/, '$1');
	},
	//��������ؼ�����Ĵ�����ʾͼ��html
	setPwdErrorHtml : function (html) {
		this.pwdErrorHtml = html;
		this.pwdErrorTagAttrs = this.getTagAttributes(html);
		this.pwdErrorClassName = this.pwdErrorTagAttrs['className'];
		this.pwdErrorTag = html.replace(/^.*?<([^\s]+)\s.*$/, '$1');
		this.pwdErrorInnerHtml = html.replace(/^.*?<[^>]+>(.*?)(?:<[^>]+?>[^<>]*)?$/, '$1');
	},
	//��ȡhtml�е�����
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
	//��ȡ����
	$ : function (id) {
		return document.getElementById(id);
	},
	//�Ƴ���ͨ�ڵ������ʾ����
	removeTip : function (ele) {
		until.removeListener(ele, 'mouseover', this.mouseOver, this);
		until.removeListener(ele, 'mouseout', this.mouseOut, this);
		//����¼�����
		if ('onkeyup' in ele)
			until.removeListener(ele, 'keyup', this.listener, this);
		if ('onchange' in ele)
			until.removeListener(ele, 'change', this.listener, this);
		ele.className = ele.className.replace(this.errorClassName, '').replace(/^\s+|\s+$/, '');
		this.removeNode('datavalid_' + ele.id + '_error_info');
	},
	//�Ƴ�����ؼ�������ʾ����
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
	/*���ں��·�ʹ��0���*/
	dateWith0Fill : function (str) {
		return str.replace(/-(?!\d{2})/g, '-0');
	},
	/*���ں��·�ȡ��0���*/
	dateWithout0Fill : function (str) {
		return str.replace(/-0/g, '-');
	},
	/*��ȡָ���·ݵ��������*/
	getMaxDaysInMonth : function (year, month) {
		return 32 - new Date(year, month).getDate();
	},
	//���ڸ�ʽУ��
	datecheck : function (str) {
		if (!new RegExp(/^(19|20)\d{2}([-\/]\d{1,2}){2}$/).test(str))
			return false;
		var info = str.split(/[\/-]/);
		return parseInt(info[1], 10) <= 12 && parseInt(info[2], 10) <= 31;
	},
	//ʱ���ʽУ��
	timecheck : function (str) {
		if (!new RegExp(/^\d{1,2}(:\d{1,2}){2}$/).test(str))
			return false;
		var info = str.split(':');
		return parseInt(info[0], 10) <= 23 && parseInt(info[1], 10) <= 59 && parseInt(info[2], 10) <= 59;
	},
	//����ʱ���ʽУ��
	datetimecheck : function (str) {
		if (!new RegExp(/^(19|20)\d{2}([-\/]\d{1,2}){2}\s+\d{1,2}(:\d{1,2}){2}$/).test(str))
			return false;
		var info = str.split(/[\s+]/);
		return this.datecheck(info[0]) && this.timecheck(info[1]);
	},
	//�����¼�ת��Ϊʱ���
	str2time : function (str) {
		//�������Ķ���ո��滻�ɵ����ո�
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
	//ʱ���ת��Ϊ����ʱ��
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
	//��������֮��ļ��,��������ʱ��֮��ļ������λ:����
	dateDiff : function (sdate, edate) {
		var stime = this.str2time(sdate);
		var etime = this.str2time(edate);
		return stime - etime;
	}
}

//��ҳ
var pager = function (pagerId) {
	this.containerId = pagerId || 'pager';
	this.container = document.getElementById(this.containerId);
	this.showPageCount = true;
}
pager.prototype = {
	/**
	 *��ʾ��ҳ������
	 *@param pagenum int ��ҳ��
	 *@param curpage int ��ǰҳ��
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
		if (curpage > 1) { //���ǵ�һҳ
			until.removeClass('page-disabled', $('page_up'));
			page = parseInt(curpage, 10) - 1;
			$('page_up').href = 'javascript:' + clickFun + '(' + page + ')';
		} else { //�ǵ�һҳ
			until.addClass('page-disabled', $('page_up'));
			$('page_up').href = 'javascript:;';
		}
		if (total_num >= (parseInt(limit, 10) + 1)) { //����һҳ
			until.removeClass('page-disabled', $('page_down'));
			page = parseInt(curpage, 10) + 1;
			$('page_down').href = 'javascript:' + clickFun + '(' + page + ')';
		} else { //����һҳ
			until.addClass('page-disabled', $('page_down'));
			$('page_down').href = 'javascript:;';
		}
		this.container.className = this.container.className.replace('hide', '').replace(/^\s+|\s+$/g, '');
	},
	//���ط�ҳ��
	hidePageBar : function () {
		this.container.className += this.container.className.indexOf('hide') > -1 ? '' : ' hide';
		this.container.className = this.container.className.replace(/^s+|\s+$/g, '');
	},
	//������ߵĵ�ǰҳ����ҳ��
	disablePageCount : function () {
		this.showPageCount = false;
	},
	/**
	 *��ȡ��ҳ�ַ���
	 *@param curPage 	int 	��ǰҳ��
	 *@param totalPage 	int 	��ҳ��
	 *@param funName	string 	�����ҳʱִ�еĺ�����
	 *@param show		int 	��ǰҳ������ʾ��ҳ�룬Ĭ��Ϊ3
	 *@param curClass	string	��ǰҳ��ʽ����
	 */
	page : function (curPage, totalPage, funName, show, curClass) {
		if (totalPage == 0 || totalPage == 1)
			return '';
		var curClass = curClass || 'current';
		var pagenum = show || 3; //��ǰҳ��������ʾ��ҳ������
		curPage = parseInt(curPage, 10); //��ǰҳ��
		totalPage = parseInt(totalPage, 10); //��ҳ��
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
	 *���Ͳ�ѯ����
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
	 *����¼������
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
	 *�ı�����
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
						title : "��ܰ��ʾ",
						info : "��������ܾ���\n�����������ַ������'about:config'���س�\nȻ�� 'signed.applets.codebase_principal_support' ����Ϊ'true'",
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
					title : "��ܰ��ʾ",
					infoPic : "2",
					info : "���������֧�ָ��ƹ��ܣ���������IE������½��и��Ʋ�����",
					w : 355
				});
			}
			if (support) {
				Box.text({
					title : "��ܰ��ʾ",
					infoPic : "1",
					info : "�����Ÿ��Ƴɹ�����������Ctrl+Vճ�����ݡ�",
					w : 355
				});
			}
		} catch (e) {
			if (support) {
				Box.text({
					title : "��ܰ��ʾ",
					infoPic : "2",
					info : "����ʧ��\n\n" + e.message,
					w : 355
				});
			}
		}
	},
	//��д������
	toShort : function (str, len) {
		len = parseInt(len) || 8;
		if (len % 2 == 1)
			len++;
		var offset = len / 2;
		var txt = str.length <= len ? str : (str.substr(0, offset) + '...' + str.substr(str.length - offset + 1, offset));
		return '<a class="copy-txt" title="' + str + '" href="JavaScript:until.copy(\'' + str + '\')">' + txt + '</a>';
	},
	//����һ������ѡ��
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
	 *��ȡxml�ڵ�����
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
	//��ȡָ���Ľڵ�����
	getXmlNodes : function (parentNode, nodeName) {
		try {
			var nodes = TFL.Xml.selectNodes(parentNode, '//' + nodeName);
			return nodes && nodes.length > 0 ? nodes : [];
		} catch (e) {
			return [];
		}
	},
	/**
	 *��������ʾ��
	 */
	alert : function (html, title, btns, width, height, icon) {
		var cfg = {
			title : title || '��ܰ��ʾ',
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
	//ȥ���ո����ָ�����ַ���
	trim : function (str, chr) {
		var trimChar = chr || '\\s';
		var reg = new RegExp('^' + trimChar + '+|' + trimChar + '+$', 'g')
			return str.replace(reg, '');
	},
	/**
	 *Ԫ����ת��
	 */
	yuan2Fen : function (val) {
		var result,
		re = /^[\+|-]?\d+(\.\d+)?$/;
		if (typeof(val) != "string")
			val = val.toString();
		return (re.test(val)) ? (parseFloat(val) * 100).toFixed(0) : "0";
	},
	/**
	 *�ֵ�Ԫת��
	 */
	fen2Yuan : function (val) {
		var result,
		re = /^[\+|-]?[0-9]+$/;
		if (typeof(val) != "string")
			val = val.toString();
		return (re.test(val)) ? (parseFloat(val) / 100).toFixed(2) : "0.00";
	},
	/**
	 *���ñ����б�ɫ���Լ����һ����ɫ
	 */
	setTableRowClass : function (tbId) {
		var tb = typeof(tbId) == 'string' ? $(tbId) : tbId;
		if (!tb)
			return false;
		var rows = tb.rows;
		if (rows.length == 1) {
			var newRow = tb.insertRow(-1);
			var newCell = newRow.insertCell(-1);
			newCell.innerHTML = '<span class="ico-info-s"></span>�������ݣ����Ժ��ѯ';
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
	 *���ݲ�ѯ�ַ�����ʼ����
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
	 * �����ʽ(֧�ֶ��)
	 * @param {String} c ��ʽ�� 'a' | 'a b' | 'a b c'
	 * @param {Object} e Ԫ��
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
	 * �Ƴ���ʽ(֧�ֶ��)
	 * @param {String} c ��ʽ�� 'a' | 'a b' | 'a b c'
	 * @param {Object} e Ԫ��
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
	this.months = ['1��', '2��', '3��', '4��', '5��', '6��', '7��', '8��', '9��', '10��', '11��', '12��', ];
	this.disableFutureMonth = typeof(disableFutureMonth) == 'undefined' ? true : !!disableFutureMonth;
	this.ctrlId = ctrlId;
}

monthPicker.prototype = {
	//�������µ���ʼ�㣬Ĭ��Ϊǰ10�굽���굱ǰ�·�
	setDateLimit : function (start, end) {
		this.start = this.isYearMonth(start) ? start + '-1' : this.getDate(-365 * 10);
		this.end = this.isYearMonth(end) ? end + '-1' : this.getDate();
	},
	//������¸�ʽ���ָ���"/"��"-"
	isYearMonth : function (str) {
		return new RegExp(/^(19|20)\d{2}[\/\-][1-12]$/).test(str.replace(/\-0/g, '-'));
	},
	//��ȡָ�������£�������ʾ����ƫ�ƣ�����Ϊ��ǰ�ƶ�������Ϊ����ƶ�
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
				'title' : '��һ��',
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
		'title' : '�ϸ���',
		'href' : 'javascript:;'
		});
		var lastMonTag = this.create('span');
		lastMonth.appendChild(lastMonTag);*/
		var currentYear = this.create('span', 'now', '', curYear);
		/*var nextMonth = this.create('a', 'right-month v-hidden', {
		'title' : '�¸���',
		'href' : 'javascript:;'
		});
		var nextMonTag = this.create('span');
		nextMonth.appendChild(nextMonTag);*/
		var nextYear = this.create('a', 'right-year', {
				'title' : '��һ��',
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
    {type:"0",name:"�Ƹ�ͨ���"},
    {type:"1001",name:"��������"},
    {type:"1002",name:"��������"},
    {type:"1003",name:"��������"},
    {type:"1004",name:"�ַ�����"},
    {type:"1005",name:"ũҵ����"},
    {type:"1006",name:"��������"},
    {type:"1007",name:"ũ�й��ʿ�"},
    {type:"1008",name:"���ڷ�չ����"},
    {type:"1009",name:"��ҵ����"},
    {type:"1010",name:"ƽ������"},
    {type:"1020",name:"�й���ͨ����"},
    {type:"1021",name:"����ʵҵ����"},
    {type:"1022",name:"�й��������"},
    {type:"1023",name:"ũ�����������"},
    {type:"1024",name:"�Ϻ�����"},
    {type:"1025",name:"��������"},
    {type:"1026",name:"�й�����"},
    {type:"1027",name:"�㶫��չ����"},
    {type:"1028",name:"�㶫����"},
    {type:"1099",name:"��������"},
    {type:"9999",name:"�Ƹ�ͨ(Ԥ��)"},
    {type:"1030",name:"����B2B"},
    {type:"1031",name:"���д��"},
    {type:"1032",name:"��������"},
    {type:"1033",name:"����ͨ"},
    {type:"1034",name:"���д��"},
    {type:"1035",name:"���з�ʵ��"},
    {type:"1036",name:"�����⿨"},
    {type:"1037",name:"���д��"},
    {type:"1038",name:"���л���ҵ��"},
    {type:"1039",name:"����ֱ��"},
    {type:"2001",name:"���а�֧��"},
    {type:"2002",name:"���а�֧��"},
    {type:"3001",name:"��ҵ���ÿ�"},
    {type:"3002",name:"�������ÿ�"},
    {type:"1041",name:"�������н�ǿ�"},
    {type:"1052",name:"����С��"},
    {type:"1053",name:"���д��"},
    {type:"2033",name:"�ʴ�һ��ͨ"},
    {type:"3004",name:"�������ÿ�(���)"},
    {type:"1059",name:"��ҵ���ÿ�С��"},
    {type:"1051",name:"�㷢��ǿ�"},
    {type:"1061",name:"��ҵ���ÿ����"},
    {type:"2003",name:"����һ��ͨ"},
    {type:"3003",name:"�������ÿ�(���)"},
    {type:"1082",name:"�Ϻ�ũ����ҵ����"},
    {type:"1066",name:"�ʴ���ǿ�"},
    {type:"1077",name:"�������ÿ�"},
    {type:"1043",name:"ũ��B2B"},
    {type:"1091",name:"����wap�ֻ�֧��"},
    {type:"1092",name:"ũ��wap�ֻ�֧��"},
    {type:"1095",name:"����wap�ֻ�֧��"},
    {type:"1096",name:"���Ľ�ǿ�"},
    {type:"1103",name:"���������ҵ����"},
    {type:"3107",name:"���п��֧��"},
    {type:"2013",name:"���н�ǿ����֧��"},
    {type:"1104",name:"��������������������"},
    {type:"1087",name:"����֧������"},
    {type:"3110",name:"ƽ�����ÿ�(���)"},
    {type:"3106",name:"�������ÿ�(���)"},
    {type:"3006",name:"�������ÿ�(���)"},
    {type:"3007",name:"ũ�����ÿ�(���)"},
    {type:"4184",name:"���н�ǿ�(���)"},
    {type:"4185",name:"���н�ǿ�(���)"},
    {type:"4186",name:"ũ�н�ǿ�(���)"},
    {type:"4008",name:"��������"},
    {type:"3109",name:"�㷢���ÿ�(���)"},
    {type:"2016",name:"�㷢��ǿ�(���)"},
    {type:"3113",name:"��ҵ���ÿ�(���)"},
    {type:"3105",name:"�������ÿ�һ��ͨ"},
    {type:"3111",name:"�������ÿ�һ��ͨ"},
    {type:"2011",name:"���н�ǿ�(���)"},
    {type:"3108",name:"������ÿ�(���)"},
    {type:"2014",name:"����ǿ�(���)"},
    {type:"3201",name:"�����������ÿ�(���)"},
    {type:"3114",name:"���ڷ�չ�������ÿ�(���)"},
    {type:"1073",name:"�����ֻ�֧��"},
    {type:"4102",name:"ũ�д���"},
    {type:"3115",name:"�������ÿ����"},
    {type:"2125",name:"���Ž�ǿ����e"},
    {type:"3119",name:"�������ÿ����"},
    {type:"2008",name:"������ǿ����"},
    {type:"3118",name:"�������ÿ����"},
    {type:"2018",name:"���Ľ�ǿ����"},
    {type:"2021",name:"��ҵ��ǿ����"},
    {type:"2127",name:"�������н�ǿ�"},
    {type:"2131",name:"�������н�ǿ�"},
    {type:"2130",name:"�������н�ǿ�"},
    {type:"3203",name:"�����������ÿ����"},
    {type:"2128",name:"�������н�ǿ����"},
    {type:"3202",name:"�����������ÿ����"},
    {type:"2133",name:"˳��ũ���н�ǿ����"},
    {type:"2126",name:"ũ�н�ǿ����"}
	],
	tradeTypeList : [
	    {type:"1",name:"C2C����"},
		{type:"2",name:"B2C����"},
		{type:"3",name:"���ٽ���"},
		{type:"4",name:"�տ�/����"},
		{type:"5",name:"�տ�/����"}
	],
	tradeBillStatusList : [
	    {type:"1",name:"�ȴ�֧��"},
		{type:"2",name:"��֧���ɹ�"},
		{type:"3",name:"���յ���"},
		{type:"4",name:"���׽���"},
		{type:"5",name:"֧��ʧ��"},
		{type:"6",name:"�����Ҵ��ʧ��"},
		{type:"7",name:"ת���˿�"},
		{type:"8",name:"�ȴ��տȷ��"},
		{type:"9",name:"��ת��"},
		{type:"10",name:"�ܾ�ת��"},
		{type:"11",name:"�ѹ���"},
		{type:"12",name:"��ʹ��(����ȯ)"},
		{type:"13",name:"������ͣ"},
		{type:"99",name:"���׹ر�"}
	],
	splitAccountStatusList : [
		{type:"0",name:"δ����"},
		{type:"2",name:"�ѷ���"},
		{type:"4",name:"�ѷ��ʻ���"},
		{type:"6",name:"�ѷ��ʻ���"}	
	],
    bankListID : "",
    bankListName : "",
    listBank : function (json) //��ʽ{bankListID :"",bankListName:""};
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

