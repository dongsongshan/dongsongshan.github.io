$(function(){

	var $list = $('#list ul');

	$.ajax({
		type:"GET",
		url:"order",
		success:function(order){
			console.log('succsee',order);
			// $.each(order,function(i,o){
			// 	$list.append('<li>name:'+ o.name +';drink:'+ o.drink +'</li>');
			// });
		},
		error:function(){
			alert(0);
		}
	});



})
