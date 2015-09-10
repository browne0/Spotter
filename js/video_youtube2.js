jQuery(function(){

	if (self.location.href == top.location.href){
	    var logo=$("<a href='http://pupunzi.com/#mb.components/components.html' style='position:absolute;top:0;z-index:1000'><img id='logo' border='0' src='http://pupunzi.com/images/logo.png' alt='mb.ideas.repository'></a>");
	   	$("#wrapper").prepend(logo);
	    $("#logo").fadeIn();

	}
	
	
	jQuery("button").not(".command").click(function(){
		jQuery("button").not(".command").removeClass("sel");
		jQuery(this).addClass("sel");
	});
	
	//debug functions
	jQuery("#bgndVideo").on("YTPStart", function(){ jQuery("#eventListener").html("YTPStart")});
	jQuery("#bgndVideo").on("YTPEnd", function(){ jQuery("#eventListener").html("YTPEnd")});
	jQuery("#bgndVideo").on("YTPPause", function(){ jQuery("#eventListener").html("YTPPause")});
	jQuery("#bgndVideo").on("YTPBuffering", function(){ jQuery("#eventListener").html("YTPBuffering")});
	
	jQuery("#bgndVideo").mb_YTPlayer();

});