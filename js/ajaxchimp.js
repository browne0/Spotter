/* ---------------------------------------------------------------------- */
/*	SUSCRIPTION FORM MAILCHIMP
/* ---------------------------------------------------------------------- */
    
    var urlForm = '//spotterlife.us10.list-manage.com/subscribe/post';
	var u = '4b36faa76a2f4a3755098d62a';
	var id = 'c60247cae0';

    $('#mc-form').ajaxChimp({
    	url: urlForm+'?u='+u+'&amp;id='+id
	});