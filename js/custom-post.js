$(window).load(function() {
	"use strict";
    /* ==============================================
    PRELOADER
    =============================================== */
    var preloaderDelay = 800;
    var preloaderFadeOutTime = 1000;

    function hidePreloader() {
        var loadingAnimation = $('#loading-animation');
        var preloader = $('.main');

        loadingAnimation.fadeOut();
        preloader.delay(preloaderDelay).fadeOut(preloaderFadeOutTime);
    }
    
    hidePreloader();
    
});

/* DOCUMENT READY  ----------- */
jQuery(document).ready(function() {
		
"use strict";	
	
	/* ==============================================
    /* CONTACT FORM
	================================================== */
	
    $('.success-message-2').hide();
    $('.error-message-2').hide();
    
	var $contactform 	= $('#contactform'),
		$success		= 'Your message has been sent. Thank you!';
		
	$contactform.submit(function(){
		$.ajax({
		   type: "POST",
		   url: "php/contact.php",
		   data: $(this).serialize(),
		   success: function(msg)
		   {
				if(msg == 'SEND'){
					$('.error-message-2').hide();
                    $('.success-message-2').hide();
                    $contactform.hide().delay(3000).fadeIn();
                    $('#contactform input').val('');
                    $('#contactform textarea').val('');
                    $('.success-message-2').html('<div class="success-message-2">'+ $success +'</div>');
                    $('.success-message-2').fadeIn().delay(2000).fadeOut();
				}
				else{
					$('.success-message-2').hide();
                    $('.error-message-2').hide();
                    $('.error-message-2').html('<div class="error-message-2">'+ msg +'</div>');
                    $('.error-message-2').fadeIn().delay(3000).fadeOut();
				}
			}
		 });
		return false;
	});			

}); /* END DOCUMENT READY  ----------- */