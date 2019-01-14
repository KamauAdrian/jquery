$(document).ready(function () {
   $('input[type="file"]').change(function () {
       $(this).next().removeAttr('disabled');
   }).next().attr('disabled','disabled');


   $('#btn_post').click(function () {
       var comment=$('#user_text').val();
      $.post('php/reverse.php',{input:comment},function (data) {
          $('#display_text').text(data);
          $('#user_text').attr('value','');
          
      });


   });

    // $('a').mouseenter(function () {
    //     $(this).addClass('bold');
    // }).mouseleave(function () {
    //     $(this).removeClass('bold');
    // });
$('a').bind('mouseenter mouseleave',function () {
    $(this).toggleClass('bold');
});

});