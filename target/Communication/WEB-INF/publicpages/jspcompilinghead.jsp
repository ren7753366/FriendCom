<%--项目jsp通用头文件--%>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
request.setAttribute("basePath",basePath);
response.setContentType("text/html;charset=UTF-8");
%>