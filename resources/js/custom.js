$(function(){
	$("#aside-menu").metisMenu();
});

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