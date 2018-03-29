$( document ).ready(function() {

  $("#start").click(function() {
    
    //SO THAT PREVIOS MESSAGES ARE GONE BEFORE TRYING FRESH
    $('.text-danger').addClass('hide');
    $('.text-success').addClass('hide');
    
    if($("#new-forgot").is(':checked') ){
      $('.text-success').removeClass('hide');
      $('.text-danger').addClass('hide');
    }else{
      $('.text-danger').removeClass('hide');
      $('.text-success').addClass('hide');
    }
  });
  
});