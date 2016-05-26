$(function(){

	var $list = $('#list ul');
	var $name = $('#name').val();
	var $drink = $('#drink').val();
	$.ajax({
		type:"GET",
		url:"order",
		success:function(date){
			date = eval(date);
			console.log(typeof(date));
			console.log('succsee',date);
			$.each(date,function(i,o){
				$list.append('<li>name:'+ o.name +';drink:'+ o.drink +'</li>');
			});
		},
		error:function(){
			alert(0);
		}
	});
	
	$.ajax({
		type:'POST',
		url:"order",
		date:{"name":$name,"drink":$drink},
		success:function(){
			console.log(1);
		},
		error:function(){
			alert(0);
		}
	});



})
