if( !device.tablet() && !device.mobile() ) {

	jQuery(function(){
		"use strict";
		
		$.fn.extend({
			bgVimeoVideo: function(options){			
			var settings = $.extend({
				 videoId: "6165372",
				 videoVolume: 0
			}, options );
			    
			return this.each(function() {
				var that = $(this);
				that.append('<div id="fullscreen-wrap"><iframe id="player1" src="http://player.vimeo.com/video/'+settings.videoId+'?autoplay=1&loop=1&api=1&player_id=player1" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>');
				
				function onMessageReceived(e) {
				    var data = JSON.parse(e.data);
				    if ('ready' === data.event) {
					    var d = {method:'setVolume', value:settings.videoVolume};
					    var f = $('#player1'), url = f.attr('src').split('?')[0];
					    f[0].contentWindow.postMessage(JSON.stringify(d), url);							    
				    }
			    }
				
			    if (window.addEventListener){
				    window.addEventListener('message', onMessageReceived, false);
			    } else {
				    window.attachEvent('onmessage', onMessageReceived, false);
			    }
					
				function resize() {	
					var windowWidth	= $(window).width();
					var windowHeight = $(window).height();
					var windowRatio	= windowWidth/windowHeight;
					var videoRatio	= 16/9;
					var videoWrap	= $("#fullscreen-wrap");
					var $new_width, $new_height, $left, $top;							
					if (windowRatio > videoRatio) {
						$new_width = windowWidth;
						$new_height = (windowWidth / videoRatio);
					} else {
						$new_width = (windowHeight * videoRatio);
						$new_height = windowHeight;
					}							
					$left = (windowWidth-$new_width)/2;
					$top = (windowHeight-$new_height)/2;							
					videoWrap.css({
						width: $new_width + 'px',
						height: $new_height+256 + 'px',
						left: $left + 'px',
						top: $top-128 + 'px'
					});
				}
					
				resize();
					
				$(window).on( 'resize', function() {
					resize();
				});						
			});
	
			}
				
	    });			
	
	});

} else {
	
	$('#bgimg').addClass('poster-image');
	
}