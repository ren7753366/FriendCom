<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<jsp:include page="/WEB-INF/publicpages/jspcompilinghead.jsp"></jsp:include>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="${basePath}">
    
    <title>分享你的创意,创意这个世界</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
	<link rel="stylesheet" type="text/css" href="${basePath}css/index/index.css">
	
	<script type="text/javascript" src="${basePath}js/jQuery/jquery-1.11.1.min.js"></script>
	
  </head>
  	<!-- <div class="navigator">
	  	<div class="categorys"></div>
	  	<div class="adszone"></div>
	  	<div class="adszone2"></div>
  	</div>
  	<div class="content"></div> -->
  	
  	<form action="${basePath}add">
  		<input name="username"/>
  		<input name="password"/>
  		<input type="submit" value="提交"/>
  	</form>
  <body>
  </body>
</html>
