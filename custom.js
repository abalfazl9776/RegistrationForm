$('#checkbox').iCheck({
    checkboxClass: 'icheckbox_polaris'
});

$('#checkbox').on('ifChecked', function(){
    $('#submit').attr( "disabled", false );
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
    if($("#password").val() !== $("#passwordRetype").val() ){
        span = $('<span />').attr('class', 'red-color passwords-not-equal',).html('عدم تطابق رمز عبور و تکرار رمز عبور');
        span.appendTo($(".passwordRetype-container"));
    };
 });