$( document ).ready(function() {

  var start = function(){
    //SO THAT PREVIOS MESSAGES ARE GONE BEFORE TRYING FRESH
    $('.text-danger').addClass('hide');
    $('.text-success').addClass('hide');
    
    //if correct username passowrd redirect to app
    if ($('#email').val() == 'johndoe@company.com' && $('#password').val() == '12345678' )
    {
      window.location.href = "app.html";

    }else{
      if($("#new-forgot").is(':checked') ){
        $('.text-success').removeClass('hide');
        $('.text-danger').addClass('hide');
      }else{
        $('.text-danger').removeClass('hide');
        $('.text-success').addClass('hide');
      }
    }
  }
  $("#start").click(function() {
    start();
  });

  $('.input').keypress(function (e) {
    if (e.which == 13) {
      start();
      return false;
    }
  });
  
});