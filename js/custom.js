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
        preloader.delay(preloaderDelay).fadeOut(preloaderFadeOutTime, function() {
        	jQuery('.animate').waypoint(function() {
        	     var animation = jQuery(this).attr("data-animate");
        	     jQuery(this).addClass(animation);
        	     jQuery(this).addClass('animated');
        	}, { offset: '80%' }); 
         });
    }
    
    hidePreloader();
    
});

/* DOCUMENT READY  ----------- */
jQuery(document).ready(function() {



"use strict";	
	
	/* ==============================================
    SCROLL PAGE WITH EASING EFFECT
    =============================================== */
	
	$('.navbar-brand').bind('click', function(e) {
	    e.preventDefault();
	    var target = this.hash;
	    $.scrollTo(0, 1250, {
	    	easing: 'swing',
	    	axis: 'y'
	    });
	});
	
	$('.scroll-down').bind('click', function(e) {
	    e.preventDefault();
	    var target = this.hash;
	    $.scrollTo(target, 750, {
	    	easing: 'easeInSine',
	    	axis: 'y',
	    	offset: -45
	    });
	});
	
	$('.navbar-nav li a').bind('click', function(e) {
	    e.preventDefault();
	    var target = this.hash;
	    $.scrollTo(target, 1250, {
	    	easing: 'swing',
	    	axis: 'y',
	    	offset: -45
	    });
	});
	
	$('.back-top').bind('click', function(e) {
	    e.preventDefault();
	    var target = this.hash;
	    $.scrollTo(0, 1250, {
	    	easing: 'swing',
	    	axis: 'y'
	    });
	});

	$('.getapp').bind('click', function(e) {
	    e.preventDefault();
	    var target = this.hash;
	    $.scrollTo(target, 1750, {
	    	easing: 'swing',
	    	axis: 'y'
	    });
	});

	
	/* ==============================================
    ACTIVE LINKS ON NAVIGATION BAR
    =============================================== */
	jQuery('body').scrollspy({ offset: 300,target: 'nav' })

	/* ==============================================
    TESTIMONIALS SLIDER
    =============================================== */
	var owl = $("#testimonials-slides");
	owl.owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 600,
		paginationSpeed : 800,
		singleItem:true,
		items : 1,
		navigationText : ["<span class='testimonial-icon' aria-hidden='true' data-icon='&#x3c;'></span>", "<span class='testimonial-icon' aria-hidden='true' data-icon='&#x3d;'></span>"],
		pagination : false
	});

	/* ==============================================
	/*	SUSCRIPTION FORM
	=============================================== */
    $('.success-message').hide();
    $('.error-message').hide();

    $('.subscribe form').submit(function() {
        var postdata = $('.subscribe form').serialize();
        $.ajax({
            type: 'POST',
            url: 'php/sendmail.php',
            data: postdata,
            dataType: 'json',
            success: function(json) {
                if(json.valid == 0) {
                    $('.success-message').hide();
                    $('.error-message').hide();
                    $('.error-message').html(json.message);
                    $('.error-message').fadeIn().delay(3000).fadeOut();
                }
                else {
                    $('.success-message').hide();
                    $('.error-message').hide();
                    $('.subscribe form').hide().delay(3000).fadeIn();
                    $('.subscribe form input').val('');
                    $('.success-message').html(json.message);
                    $('.success-message').fadeIn().delay(2000).fadeOut();
                }
            }
        });
        return false;
    });
    
    /* ==============================================
    /* MAGNIFIC POPUP FOR PORTFOLIO
	================================================== */
	$('.portfolio-popup').magnificPopup({
		type: 'image',
		removalDelay: 500, //delay removal by X to allow out-animation
		callbacks: {
		beforeOpen: function() {
			   this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
			   this.st.mainClass = 'mfp-zoom-in';
			}
		},
		closeOnContentClick: true,
		fixedContentPos: false
	});
	
	/* ==============================================
    /* GALLERY HOVER
	================================================== */
	$('.gallery-images > div ').each( function() { $(this).hoverdir(); } );
	
	/* ==============================================
    /* LOAD THE ANIMATIONS IF THE BROWSER IS NOT IE
	================================================== */	
	if( !device.tablet() && !device.mobile() ) { //Load the animations if the device is not a mobile or tablet
		$('head').append('<!--[if !IE]><!--><link rel="stylesheet" type="text/css" media="screen" href="css/animate.css"><!--<![endif]-->');
	}
	
    /* ==============================================
    /* CLOSE COOKIES MESSAGE
	================================================== */
	$(".close-cookies").click(function() {
		$("#cookies-message").css("visibility", "hidden");
		return false;
	});
	
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



/* FUNCTIONS  ----------- */

/* scroll down navigation  ----------- */

jQuery(function() {
		var bar = jQuery('nav');
		var top = bar.css('top');
		var ww = jQuery(window).width();
		var navigationHeight = -jQuery('.collapse').height();
		var mobileTop = Math.floor(navigationHeight - 60);
		
		jQuery(window).scroll(function() {
				if(jQuery(this).scrollTop() > 310) {
						bar.stop().animate({top : '0'}, 300);
				} else {
						if(ww < 768) {
								bar.stop().animate({top : mobileTop}, 600);
						} else {
								bar.stop().animate({top : top}, 300);
						}
				}  
		});
});