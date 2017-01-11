/*cookie.js*/
function CCookie(){
  this.SetCookie = setCookie;
  this.GetCookie = getCookie;
  this.DelCookie = deleteCookie;
}

function getExpDate(days, hours, minutes){
    var expDate = new Date( );
    if (typeof days == "number" && typeof hours == "number" && typeof hours == "number"){
        expDate.setDate(expDate.getDate( ) + parseInt(days));
        expDate.setHours(expDate.getHours( ) + parseInt(hours));
        expDate.setMinutes(expDate.getMinutes( ) + parseInt(minutes));
        return expDate.toGMTString();
    }
}

// utility function called by getCookie
function getCookieVal(offset){
    var endstr = document.cookie.indexOf (";", offset);
    if (endstr == -1){
        endstr = document.cookie.length;
    }
    return unescape(document.cookie.substring(offset, endstr));
}

// primary function to retrieve cookie by name
function getCookie(name){
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while(i < clen){
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg){
            return getCookieVal(j);
        }
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0){ 
            break;
        }
    }
    return "";
}

// store cookie value with optional details as needed
function setCookie(name, value, expires, path, domain, secure){
    document.cookie = name + "=" + escape (value) +
        ((expires) ? "; expires=" + expires : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
}

// remove the cookie by setting ancient expiration date
function deleteCookie(name, path, domain){
	var exp = new Date();
	exp.setTime (exp.getTime() - 1);
    if (getCookie(name)){
        document.cookie = name + "=" +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            "; expires=" + exp.toGMTString();
    }
}

/**
 * 定义全局变量g_CCookie
 */
var g_CCookie = null ;
if(!g_CCookie){
    g_CCookie = new CCookie();
}	

/*load xml*/
var TFL = TFL || {
  DOMAIN: "tenpay.com"
};

TFL.Xml = {
  createDocument: function (r, ns) {
    r = r || "";
    ns = ns || "";
    if (document.implementation && document.implementation.createDocument) {    //W3C standard
      return document.implementation.createDocument(r, ns, null);
    }else { //IE
      var doc = new ActiveXObject("MSXML2.DOMDocument");
      if (r) {
        var arr = r.split(":"), prefix = arr[1] ? arr[0] : "", tagname = arr[1] ? arr[1] : r;
        prefix = ns ? (prefix ? prefix : "a0") : "";
        var text = '<' + (prefix ? (prefix + ':') : '') + tagname + (ns ? ('xmlns:' + prefix + '="' + ns + '"') : '') + '/>';
        doc.loadXML(text);
      }
      return doc;
    }
  },
  load: function (url) {
    var xmldoc = this.createDocument();
    try{
    xmldoc.async = false;
    xmldoc.load(url);
        }catch(e){
            var request = new XMLHttpRequest();
            request.open("GET", url, false);
            request.send(null);
            xmlDoc = request.responseXML;
            request = null;
        }finally{
    return xmldoc;
        }
  },
  loadAsync: function (url, callback, arg) {
    var xmldoc = this.createDocument();
    var COMPLETED = 4;
    if (typeof ActiveXObject !== "undefined") {
      xmldoc.onreadystatechange = function () {
        if (COMPLETED === xmldoc.readyState) {
          arg.unshift(xmldoc);
          callback.apply(null, arg);
          xmldoc = null;
        }
      };
    } else {
      xmldoc.onload = function () {
        arg.unshift(xmldoc);
        callback.apply(null, arg);
        xmldoc.onload = null;
        xmldoc = null;
      };
    }
    xmldoc.load(url);
  },
  loadXML: function (text) {
   if (typeof ActiveXObject !== "undefined") {
      // var xmldoc = this.createDocument();
      // xmldoc.loadXML(text);
      // return xmldoc;
      
      text = text.replace(/\r\n/g,"");   
      var xmldoc = new ActiveXObject("Microsoft.XMLDOM");
      xmldoc.async="false"; 
      xmldoc.loadXML(text);        
      return xmldoc;
    }else if(typeof DOMParser != "undefined") {
      return (new DOMParser()).parseFromString(text,"text/xml");
    }else {
      var url = 'data:text/xml;charset=utf-8,' + encodeURIComponent(text), request = new XMLHttpRequest();
      request.open("GET", url, false);
      request.send();
      return request.responseXML;
    }
  },
  selectNodes: function (context, xpath, ns) {
    return (new TFL.Xml.XPathExpression(xpath, ns)).getNodes(context);
  },
  selectSingleNode: function (context, xpath, ns) {
    return (new TFL.Xml.XPathExpression(xpath, ns)).getNode(context);
  }
};

TFL.Xml.XPathExpression = function (xpath, ns) {
  this.xpathText = xpath;
  this.namespaces = ns;
  if (document.createExpression) {
    this.xpathExpr = document.createExpression(xpath, function (prefix) {return ns[prefix];});
  }else {
    this.namespaceStr = "";
    if (ns) {
      for (var prefix in ns) {
        this.namespaceStr += (this.namespaceStr) ? " " : "";
        this.namespaceStr += 'xmlns:' + prefix + '="' + ns[prefix] + '"';
      }
    }
  }
};

TFL.Xml.XPathExpression.prototype = {
    getNodes: function (context) {
        if (this.xpathExpr) {
            var oEvaluator = new XPathEvaluator();
            var result = oEvaluator.evaluate(this.xpathText, (context.ownerDocument ? context : context.documentElement), this.namespaces, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
            var a = [];
            for (var i = 0, len = result.snapshotLength; i < len; i++) {
                a.push(result.snapshotItem(i));
            }
            return a;
        }else {
            try {
                var doc = context.ownerDocument || context;
                doc.setProperty("SelectionLanguage", "XPath");
                doc.setProperty("SelectionNamespaces", this.namespaceStr);
                context = (doc == context) ? doc.documentElement : context;
                return context.selectNodes(this.xpathText);
            }catch(e) {
                //throw "XPath not supported by this browser.";
            }
        }
    },
    getNode: function (context) {
        if (this.xpathExpr) {
            var oEvaluator = new XPathEvaluator(), result = oEvaluator.evaluate(this.xpathText, (context.ownerDocument ? context : context.documentElement), this.namespaces, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
            return result.singleNodeValue;
        }else {
            try {
                var doc = context.ownerDocument || context;
                doc.setProperty("SelectionLanguage", "XPath");
                doc.setProperty("SelectionNamespaces", this.namespaceStr);
                context = (doc == context) ? doc.documentElement : context;
                return context.selectSingleNode(this.xpathText);
            }catch(e) {
                //throw "XPath not supported by this browser.";
            }
        }
    }
};

var channelflag = 0;
var productflag = 0;
function $(id){
    return document.getElementById(id);
}
var getNodeValue = function(xmldoc){
	var n = TFL.Xml.selectSingleNode(xmldoc, "ret_num/text()");
	return n ? n.nodeValue : ""
}
//截取时间
function getDateLen(val){
    return document.write(val.substr(0,10));
}
//显示层
var TFL = TFL || {};
TFL.header = {
	initDropdown: function(menu,wrap) {
		var dropCon = $(menu);
		var dropLink = $(menu).getElementsByTagName('a')[0];
		var dropMenu = $(wrap)
		var reg = /(\s|^)hovSty(\s|$)/g;
		dropCon.onmouseover = function() {
		  dropMenu.style.display = 'block';
		  if (!reg.test(dropLink.className)){
			dropLink.className += ' hovSty';
		  }
		}
		dropCon.onmouseout = function() {
		  dropMenu.style.display = 'none';
		  dropLink.className = dropLink.className.replace(reg,'');
		}
	}
}
function moneyOrder(obj){
    var symbol = /^-/.test(obj)?"-":"";
    var ZS = obj.split(".")[0].replace(/^0+/, "").replace(/^-/, "");
    var zs = (ZS == "")?"0":ZS;
    var xs = (typeof obj.split(".")[1] == "undefined")?"00":obj.split(".")[1];
    var fillArray = {"0":"", "1":"00", "2":"0"};
    var str = (fillArray[zs.length % 3] + zs).replace(/^0+\./, "0.");
    var re = /\d{3}/g;
    var tmpArray = [];
    while ((val = re.exec(str)) != null)
        tmpArray.push(val);
    var newRe = new RegExp(tmpArray.join(""), "g");
    var end = str.replace(newRe, "");
    if ( end != ""){
        tmpArray.push(end);
    }
    var result = tmpArray.join(",").replace(/^0+/, "");
    document.write(symbol + ((result == "")?"0":result) + "." + xs);
}
function yuan2Fen(val){
	var result, re = /^[\+|-]?\d+(\.\d+)?$/;
	if (typeof(val) != "string") val = val.toString();
	return (re.test(val)) ? (parseFloat(val) * 100).toFixed(0) : "0";
}
function fen2Yuan(val){
	
	var result, re = /^[\+|-]?[0-9]+$/;
	if (typeof(val) != "string") val = val.toString();
	return (re.test(val)) ? (parseFloat(val) / 100).toFixed(2) : "0.00";
}


