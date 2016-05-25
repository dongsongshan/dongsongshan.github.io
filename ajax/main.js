$(function(){

	var $list = $('#list ul')

	$.ajax({
		type:"GET",
		url:"order",
		success:function(date){
			console.log(1);
			// $.each(order,function(i,order){
			// 	$list.append('<li>'+ 2 +'</li>');
			// });
		},
		error:function(){
			alert(0);
		}
	});



})