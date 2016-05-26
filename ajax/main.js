$(function(){

	var $list = $('#list ul');

	$.ajax({
		type:"GET",
		url:"order",
		success:function(date){
			$.each(date,function(i,order){
				$list.append('<li>name:'+ order.name +';drink:'+ order.drink +'</li>');
			});
		},
		error:function(){
			alert(0);
		}
	});



})
