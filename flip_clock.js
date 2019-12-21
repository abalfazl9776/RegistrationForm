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
