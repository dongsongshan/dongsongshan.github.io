$(function(){

	var $list = $('#list ul')

	$.ajax({
		type:"GET",
		url:"order",
		success:function(order){
			$.each(order,function(i,order){
				$list.append('<li>'+ 2 +'</li>');
			});
		},
		error:function(){
			alert(0);
		}
	});



})
