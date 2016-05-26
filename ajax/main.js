$(function(){

	var $list = $('#list ul');

	$.ajax({
		type:"GET",
		url:"order.js",
		success:function(order){
			// console.log('succsee',order);
			$.each(order,function(i,o){
				$list.append('<li>name:'+ o +';drink:'+'</li>');
			});
		},
		error:function(){
			alert(0);
		}
	});



})
