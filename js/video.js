if( !device.tablet() && !device.mobile() ) {
	
	(function($) {
		  "use strict";
			// initialize BigVideo
		    var BV = new $.BigVideo();
			BV.init();
			BV.show('vids/video.mp4',{ambient:true});
		})(jQuery);
				
} else {
	
	$('#bgimg').addClass('poster-image');
	
}




