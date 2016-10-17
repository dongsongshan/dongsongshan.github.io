<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
<script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="js/jquery.form.js"></script>

</head>

<body>
<input type="file" name="pic" id="pic" />

<div id="uploadFileDiv">
    这里是隐藏域
    <form name="aaa" id="aaa" action="http://localhost/fileupload/upload.php" method="post" enctype="multipart/form-data">
    </form>
</div>

<script language="javascript">
$("#pic").bind('change',function(){
	//window.alert($(this).val());
	$("#aaa").html($(this));
	var options = {  
	   //target: '#output',          //把服务器返回的内容放入id为output的元素中      
	   beforeSubmit: showRequest,  //提交前的回调函数  
	   success: showResponse,      //提交后的回调函数  
	   //url: 'http://localhost/my/fileupload/upload.php',                 //默认是form的action， 如果申明，则会覆盖  
	   type:'post',               //默认是form的method（get or post），如果申明，则会覆盖  
	   dataType: 'html',           //html(默认), xml, script, json...接受服务端返回的类型  
	   //clearForm: true,          //成功提交后，清除所有表单元素的值  
	   //resetForm: true,          //成功提交后，重置所有表单元素的值  
	   //timeout: 3000               //限制请求的时间，当请求大于3秒后，跳出请求  
	}
	$("#aaa").ajaxSubmit(options);
	return false; 
});
function showRequest(formData, jqForm, options){  
   return true;
};  
function showResponse(responseText, statusText){  
   window.alert(responseText);
}; 


</script>
</body>
</html>