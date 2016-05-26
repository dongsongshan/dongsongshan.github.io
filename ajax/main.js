$(function(){

	var $list = $('#list ul');

	$.ajax({
		type:"GET",
		url:"order",
		success:function(date){
			// console.log('succsee',order);
			$.each(date,function(i,o){
				$list.append('<li>name:'+ i +';drink:'+ o +'</li>');
			});
		},
		error:function(){
			alert(0);
		}
	});



})
