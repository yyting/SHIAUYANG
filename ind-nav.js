$(function(){
	$("#menu-nav > li").hover(function(){
		$(this).children("div").stop().animate({
			height:350
		},400);
	}, function(){
	$(".header-menu-subnav ").stop().animate({
		height:0
	},100);
	}). focus(function(){
		$(".header-menu-subnav ").blur();
	});
});
