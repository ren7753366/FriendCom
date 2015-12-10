var a = getOSInfo();
var up = isupversion(40,31);


if(a=="IOS" && up==0) {
	document.addEventListener('WebViewJavascriptBridgeReady',onBridgeReady, false);
	//WebViewJavascriptBridge.init(null);
}
			
function onBridgeReady(event) {
    var bridge = event.bridge;
    bridge.init(null);
	bridge.registerHandler('oneAccounts',function(content) {
		receiveaccount(JSON.stringify(content));
	});
	bridge.registerHandler('oneRoles',function(content) {
		receiverole(JSON.stringify(content));
	});
	bridge.registerHandler('onLocation',function(content) {
		receivelocation(JSON.stringify(content));
	});
	bridge.registerHandler('onCode',function(content) {
		receivecode(JSON.stringify(content));
	});
}

function getOSInfo() {
	var ua=navigator.userAgent,system,agent=ua;
	
	if(ua.indexOf("Windows NT")>-1)
	{
		system="Windows";
	}
	else if(ua.indexOf("Macintosh")>-1)
	{
		system="MacOS";
	}
	else if(ua.indexOf("CYoujia2")>-1)
	{
		system="Android";
	}
	else if(ua.indexOf("CYoujia1")>-1)
	{
		system="IOS";
	}
	else 
	{
		system="other";
	}
	return system;
}

function isupversion(ios,and) {
	var ua=navigator.userAgent;
	var strs= new Array(); 
	strs=ua.split("-"); 
	var ver = strs[strs.length-1];
	if(ua.indexOf("CYoujia2")>-1)
	{
		if(ver>=and) return 0;
	}
	else if(ua.indexOf("CYoujia1")>-1)
	{
		if(ver>=ios) return 0;
	}
	return -1;
}

function changetitle(text)
{
	if(a=="Android")
	{
		jsCallAnd.setTitleText(text); 
	}
	else if(a=="IOS")
	{
		WebViewJavascriptBridge.callHandler(
			'webTitle'
			,{'name': text}
			,function(response) {
				alert("SSS");
			}
		);
	}
	else {
		alert("INVALID");
	}
}

//通知客户端状态
function prizesHaveBeenReceived(){
	if(a=="Android")
	{
		jsCallAnd.prizesHaveBeenReceived(); 
	}
	else if(a=="IOS")
	{
		WebViewJavascriptBridge.callHandler(
			'prizesHaveBeenReceived'
			,{}
			,function(response) {
				
			}
		);
	}
	else {
		alert("INVALID");
	}
}

function copyToClipboard(text)
{
	if(a=="Android")
	{
		jsCallAnd.copyToClipboard(text); 
	}
	else if(a=="IOS")
	{
		WebViewJavascriptBridge.callHandler(
			'copyToClipboard'
			,{'content': text}
			,function(response) {
				alert("复制到剪切板！");
			}
		);
	}
	else {
		alert("INVALID");
	}
}


function noshare()
{
	if(a=="Android")
	{
		jsCallAnd.setTitleIsshare(1); 
	}
	else if(a=="IOS")
	{
		WebViewJavascriptBridge.callHandler(
			'webShare'
			,{'share': '0'}
			,function(response) {
				alert("SSS");
			}
		);
	}
}

function noping()
{
	if(a=="Android")
	{
		jsCallAnd.isComment(1); 
	}
	else if(a=="IOS")
	{
		WebViewJavascriptBridge.callHandler(
			'webDisableCom'
			,{'comment': '0'}
			,function(response) {
				alert("SSS");
			}
		);
	}
}

function freshweb()
{
	if(a=="Android")
	{
		jsCallAnd.finishByWeb(0);
	}
	else if(a=="IOS")
	{
		WebViewJavascriptBridge.callHandler(
			'actionfresh'
			,null
			,function(response) {
				alert("SSS");
			}
		);
	}
}

function finishweb()
{
	if(a=="Android")
	{
		jsCallAnd.finishByWeb(1);
	}
	else if(a=="IOS")
	{
		WebViewJavascriptBridge.callHandler(
			'actionClose'
			,null
			,function(response) {
				alert("SSS");
			}
		);
	}
	else 
	{
		this.window.opener = null;
		window.close();
	}
}

function opencyj(text)
{
	if(a=="Android")
	{
		jsCallAnd.clickperson(text);
	}
	else if(a=="IOS")
	{
		WebViewJavascriptBridge.callHandler(
			'actionOpenUser'
			,{'cyjid':text}
			,function(response) {
				alert("SSS");
			}
		);
	}
}

function getcyjid(callback)
{
	if(a=="Android")
	{
		callback(jsCallAnd.queryCYJID());
	}
	else if(a=="IOS")
	{  
		WebViewJavascriptBridge.callHandler(
			'cyjId'
			,null
			, function(responseData) {
				callback(JSON.stringify(responseData));
			}
		);
	}
	else 
	{
		alert("INVALID");
	}
}

function getnick(callback)
{
	if(a=="Android")
	{
		callback(jsCallAnd.query());
	}
	else if(a=="IOS")
	{
		WebViewJavascriptBridge.callHandler(
			'cyjInfo'
			,null
			, function(responseData) {
				callback(JSON.stringify(responseData));
			}
		);
	}
	else 
	{
		alert("INVALID");
	}
}

function getlocation(callback)
{
	if(a=="Android")
	{
		callback(jsCallAnd.getLocation());
	}
	else if(a=="IOS")
	{
		WebViewJavascriptBridge.callHandler(
			'cyjLocation'
			,null
			, function(responseData) {
				callback(JSON.stringify(responseData));
			}
		);
	}
}

function getcode(callback)
{
	if(a=="Android")
	{
		callback(jsCallAnd.actionGetCode());
	}
	else if(a=="IOS")
	{
		WebViewJavascriptBridge.callHandler(
			'actionGetCode'
			,null
			,function(responseData) {
				callback(JSON.stringify(responseData));
			}
		);
	}
}


function selectaccount() 
{
	if(a=="Android")
	{
		jsCallAnd.queryaccountList();
	}
	else if(a=="IOS")
	{
		WebViewJavascriptBridge.callHandler(
			'cyjAccounts'
			,null
			, function(responseData) {
				//document.getElementById("account").innerHTML = JSON.stringify(responseData);
			}
		);
	}
	
}

function selectrole()
{
	if(a=="Android")
	{
		jsCallAnd.queryMyRole();
	}
	else if(a=="IOS")
	{
		WebViewJavascriptBridge.callHandler(
			'cyjRoles'
			,null
			, function(responseData) {
				//document.getElementById("role").innerHTML = JSON.stringify(responseData);
			}
		);
	}
	
}

