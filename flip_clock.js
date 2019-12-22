var clock = new FlipClock($('.clock'), 600, {

	// Create a minute counter
	clockFace: 'MinuteCounter',
    countdown: true,

	// The onStart callback
	onStart: function() {
		// Do something
	},

	// The onStop callback
	onStop: function() {
		clock.stop(function(){
            $('#submit').attr("disabled" , true);
        })
	},

	// The onReset callback
	onReset: function() {
		// Do something
	}
});

clock.start(function() {
    // Optional callback will fire when the clock starts
});

$(document).ready(function(){
	$('.checkbox').iCheck({
	  checkboxClass: 'icheckbox_flat',
	  radioClass: 'iradio_flat'
	});
	$('.checkbox').on('ifChecked', function(event){
		$('.submit').removeAttr('disabled');
	});
	$('.checkbox').on('ifUnchecked', function(event){
		$('.submit').attr('disabled','true');
	});
});