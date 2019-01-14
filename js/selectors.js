
$(document).ready(function () {


    var user_default ='Choose a Username';
    var phone_default ='Enter Your Phone Number';
    var email_default ='Email Adress (Optional)';
    var pass_default ='Create Password';
    var user_reset_pass='Enter Your Username';
    var phone_reset_pass='Your Phone Number';
    var reset_pass='Create new Password';
    var reset_pass1='Confirm new Password';

    $('#user_name').attr('value',user_default).focus(function () {
        if($(this).val()==user_default){
            $(this).attr('value','');

        };
    }).blur(function () {
        if ($(this).val()==''){
            $(this).attr('value',user_default);
        };
    });




    $('#user_phone').attr('value',phone_default).focus(function () {
        if($(this).val()==phone_default){
            $(this).attr('value','');

        };
    }).blur(function () {
        if ($(this).val()==''){
            $(this).attr('value',phone_default);
        };
    });


    $('input[type="email"]').attr('value',email_default).focus(function () {
        if($(this).val()==email_default){
            $(this).attr('value','');

        };
    }).blur(function () {
        if ($(this).val()==''){
            $(this).attr('value',email_default);
        };
    });


    $('#user_pass').attr('value',pass_default).focus(function () {
        if($(this).val()==pass_default){
            $(this).attr('value','');

        };
    }).blur(function () {
        if ($(this).val()==''){
            $(this).attr('value',pass_default);
        };
    });

});