$(function(){
  $("i.fa-envelope-open").hide();
  
  $(".heading-compose").click(function() {
    $(".side-two").css({
      "left": "0"
    });
  });

  $(".newMessage-back").click(function() {
    $(".side-two").css({
      "left": "-100%"
    });
  });

  $(".side-two .sideBar-body").hover(
    function() {
      $(this).find("i.fa-envelope-open").show();
    },
    function() {
      $(this).find("i.fa-envelope-open").hide();
    }

);
  
    
})