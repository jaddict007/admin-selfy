$(function(){
	$("#aside-menu").metisMenu();
	$('#table').bootstrapTable();
	runIt();
	
	$('body').djax('.dj', ['#', '.jpg', '.pdf', '.png', '.gif']);
	$(window).bind('djaxClick', function(e, data){
		$("html,body").scrollTop(0);
		$('#main').empty().addClass('loading');
	});
	$(window).bind('djaxLoad', function(e, data){
		$('#main').removeClass('loading');
		$('#table').bootstrapTable();
		runIt();
	});
});

function runIt(){
	//incrementCount();
	
	$('#date').datetimepicker();
}

function incrementCount(){
	$('.huge').each(function(){
		var el = $(this);
		var value = el.attr('data-value');
		console.log(value);
	});
}

$(document).on('click', '#menu-opener', function(){
	var el = $(this);
	if(el.hasClass('out')){
		el.removeClass('out');
		$('.sidebar').removeClass('sidebar-hide');
		$('#main').removeClass('main-full');
	}else{
		el.addClass('out');
		$('.sidebar').addClass('sidebar-hide');
		$('#main').addClass('main-full');
	}
	var timer = setTimeout(function(){
		clearTimeout(timer);
		$('#table').bootstrapTable('resetView');
	}, 500);
});

$(document).on('click', '#addModalOpener', function(){
	$('#addModal').modal();
});

$(document).on('click', '#deleteModalOpener', function(){
	$('#deleteModal').modal();
});
