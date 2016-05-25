$(function(){

	var $list = $('#list ul');

	$.ajax({
		type:"GET",
		url:"order",
		success:function(date){
			console.log('success',date);
			$.each(date,function(i,date){
				$list.append('<li>'+ '2' +'</li>');
			});
		},
		error:function(){
			alert(0);
		}
	});



})
