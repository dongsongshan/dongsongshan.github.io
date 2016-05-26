$(function(){

	var $list = $('#list ul');

	$.ajax({
		type:"GET",
		url:"order",
		success:function(date){
			date = eval(date);
			console.log(typeof(date));
			console.log('succsee',date);
			$.each(date,function(i,o){
				$list.append('<li>name:'+ i +';drink:'+ o +'</li>');
			});
		},
		error:function(){
			alert(0);
		}
	});



})
