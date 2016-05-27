var xmlHttp;
if(window.ActiveXObject){
	xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
}else if(window.XMLHttpRequest){
	xmlHttp = new XMLHttpRequest();
}
xmlHttp.onreadystatechange = function(){
	console.log('返回值' + xmlHttp.readyState + '状态' + xmlHttp.status );
	if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
		document.getElementById('show').innerHTML = xmlHttp.responseText;
	}
}
xmlHttp.open('GET','test.txt',true);
xmlHttp.send();
