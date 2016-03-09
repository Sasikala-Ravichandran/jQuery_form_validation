$(function(){
	$('form').validate({
		invalidHandler: function( event, validator ) {
			var errors = validator.numberOfInvalids();
			if( errors ) {
				var message = ( errors === 1 ) ? 'highlighted field' : errors + ' highlighted fields';
				$( '.submit-error' ).show().find( 'span' ).html( message );
			}
		},
		rules:{
			email:{
				required: true,
				email: true
			},
			confirm_email : {
				required: true,
				email: true,
				equalTo: '#email'
			},
			zipcode: {
				required: true,
				digits: true,
				rangelength: [5, 5]
			},
			password: {
				required: true,
				rangelength: [6, 32]
			},
			'confirm-password': {
				required: true,
				equalTo: '#password',
				rangelength: [6, 32]
			},
			terms_check : {
				required: true
			}
		},
		messages: {
			email:{
				required: "Please enter the email id",
				email: "Please enter the valid email"
			},
			confirm_email : {
				required: "Please enter the email id",
				email: "Please enter the valid email",
				equalTo: "Please enter the same email id"
			},
			zipcode: {
				required: "Please enter zipcode",
				digits: "Please enter the digits",
				rangelength: "Please enter 5 digits for a zipcode"
			},
			password: {
				required: "Please enter the password",
				rangelength:  "Please enter min 6 digits for a password"
			},
			'confirm-password': {
				required: "Please enter password again",
				equalTo: "Please enter password as same as password",
				rangelength:  "Please enter min 6 digits for a password"
			},
			terms_check : {
				required: "Please Agree the terms and conditions."
			}
		}
	});
});