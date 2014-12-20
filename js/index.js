
$(document).ready(function(){
	/*cycle*/
  $('#slides').cycle({   
          	fx:    'fade', 
          	timeout:  1000,
          	random:  1
    });
	$(window).resize(function(){
		$("body").css('width',$(window).width());
	});
	$('.nav .primary_nav').each(function(){
    	var $this = $(this),    		
    	$kidsLength = $this.find('ul').children().length,
    	$primary = $this.find('.primary');
    	$this.mouseenter(function()
      {
      	$primary.addClass('focus');
      	if($kidsLength){
      		$('.sub_bg').stop(true, true).slideDown(400, "easeOutExpo");    			
      	}else{
      		$('.sub_bg').stop(true, true).slideUp(600, "easeOutExpo");
      	}
      	$this.find('ul').show();
    	}).mouseleave(function()
      {
      	$primary.removeClass('focus');
  			$this.find('ul').hide();
    	})
  })
  $('.nav .container').mouseleave(function()
  {
    $('.sub_bg').stop(true, true).slideUp(600, "easeOutExpo");
  });    
     /*img click*/
var $tog=false;
var $maxw=$(window).width();
var $maxh=$(window).height();
  $(".content img").click(function(){
    if ($tog==false)
    {
      $("#pro_grid,#new_pro_grid").toggle();
      $tog=true;
      $("#pro_info").css({"width":"1024px","height":"640px","background-color":"#DEF","margin":"10px auto"});
      $("#pro_info >img").css({"width":"300px","height":"200px","margin":"20px 0 0 20px","display":"inline"});
      $("#pro_info").before("<h2 id=pro_text align=center>產品資訊<input type=button align=center id=back_grid value=回首頁 />");
      $("body").animate({scrollTop:610},1000);
      $("#pro_info > img").fancybox({
        'beforeLoad': function() {$("#pro_info").children("img").css({"margin":"0","width":$maxw*0.7,"height":$maxh*0.8})},
        'afterClose': function() {$("#pro_info").children("img").css({"margin":"20px 0 0 20px","width":300,"height":200,"display":""})}
      });
    }
      /*bind button back to new_pro&pro_info*/
    if ($tog==true)
    {
      $("#back_grid").click(function(){
        $("#pro_grid,#new_pro_grid").toggle();
        $("#pro_info").removeAttr("style");
        $("#pro_info > input , h2").remove("#pro_text , #back_grid");
        $tog=false;

      });
      
    }
  });

  
});

