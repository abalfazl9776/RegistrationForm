// tippy
tippy('#username', {
    content: "شما تنها مجاز به استفاده از الفبای انگلیسی، ارقام و نقطه هستید!",
    placement: "left",
    trigger: "focus"
});

tippy('#password', {
    content: "طول کلمه عبور باید حداقل 8 کارکتر باشد.برای امنیت بیشتر از کلمه عبور های ساده و یا سایت های دیگر استفاده نکنید.",
    placement: "left",
    trigger: "focus"
});

tippy('#passwordRetype', {
    content: "پسورد را دوباره تایپ کنید",
    placement: "left",
    trigger: "focus"
});

tippy('#phone', {
    content: "فرمت تلفن باید به فرم +989123456789",
    placement: "left",
    trigger: "focus"
});

// countdown
var clock = new FlipClock($('.clock'), 120, {

	// Create a minute counter
	clockFace: 'MinuteCounter',
    countdown: true,
    autoStart: true,
    callbacks: {
        stop: function() {
            $('#submit').attr("disabled" , true);
        }
    }
});

// checks
$('#checkbox').iCheck({
    checkboxClass: 'icheckbox_polaris'
});

$('#checkbox').on('ifChecked', function(){
    if(clock.getTime().time > 0) {
        $('#submit').attr( "disabled", false );
    }
});

$('#checkbox').on('ifUnchecked', function(){
    $('#submit').attr( "disabled", true );
});

$("#username").on("focusout" , function(){
    // check if username has invalid characters
    if($("#username").val().length != 0 && !/^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/.test($("#username").val())){
        if (!$(".username-container").find(".username-not-valid").length > 0){ 
            span = $('<span />').attr('class', 'red-color username-not-valid')
                .html('نام کاربری نباید شامل کاراکترهای غیرمجاز باشد!');
            span.appendTo($(".username-container"));
        }
    }
    else{            
        $('.username-not-valid').remove();
    }
});

$("#password").on("focusout" , function(){
    //check if username has fewer than 8 characters
    if($("#password").val().length != 0 && $("#password").val().length < 8){
        if (!$(".password-container").find(".password-is-short").length > 0){ 
            span = $('<span />').attr('class', 'red-color password-is-short')
                .html('طول رمز عبور نمیتواند کمتر از 8 کاراکتر باشد');
            span.appendTo($(".password-container"));
        }
    }
    else{            
        $('.password-is-short').remove();
    };
});

$("#passwordRetype").on("focusout" , function(){
    if($("#passwordRetype").val().length != 0){
        if($("#password").val() !== $("#passwordRetype").val() ){
            if (!$(".passwordRetype-container").find(".passwords-not-equal").length > 0){ 
                span = $('<span />').attr('class', 'red-color passwords-not-equal',)
                    .html('عدم تطابق رمز عبور و تکرار رمز عبور');
                span.appendTo($(".passwordRetype-container"));
            }
        }
        else {
            $('.passwords-not-equal').remove();
        }
    }
});

$("#phone").on("focusout" , function(){
    if($("#phone").val().length != 0){
        if( !(/^(\+98|0)?9\d{9}$/.test($("#phone").val())) ){
            if (!$(".phone-container").find(".phone-not-valid").length > 0){
                span = $('<span />').attr('class', 'red-color phone-not-valid')
                    .html('فرمت شماره همراه باید به صورت +989123456789 باشد');
                span.appendTo($(".phone-container"))
            }
        }
        else {
            $('.phone-not-valid').remove();
        }
    }
});

$('#submit').click(function(){
    $('input').each(function() {
        if(!$(this).val()){
            swal({
                title: "خطا",
                text: "لطفا همه فیلد ها را پر کنید",
                icon: "warning",
                button: "Aww yiss!",
            });
        }
        else {
            swal({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",
                button: "Aww yiss!",
            });
        }
    });
});