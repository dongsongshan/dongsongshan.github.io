$(function(){

	var $list = $('#list ul');

	$.ajax({
		type:"GET",
		url:"order",
		success:function(date){
			console.log('success',date);
			$.each(date,function(i,date){
				$list.append('<li>my orders</li>');
			});
		},
		error:function(){
			alert(0);
		}
	});



})
