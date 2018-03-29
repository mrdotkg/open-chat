$(function(){
  $( document ).ready(function() {
   
    $(".action").hide();
  
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
    
    function hideProfile(){
        // console.log('closing');
        $(".conversation").removeClass('col-sm-6 ').addClass('col-sm-8 ');
        $(".side.left").removeClass('col-sm-3 ').addClass('col-sm-4');
        $(".side.right").hide();
    }

    function showProfile(){        
        // console.log('opening');
        $(".conversation").removeClass('col-sm-8 ').addClass('col-sm-6 ');
        $(".side.left").removeClass('col-sm-4 ').addClass('col-sm-3 ');
        $(".side.right").show();
    }

    $(".done").on("click", function(){
      hideProfile();
    });

    $(".heading-name").on("click", function(){
      showProfile();
    });
    
    $(".newMessage-back").click(function() {
      $(".side-two").css({
        "left": "-100%"
      });
    });

    $(".side-two .sideBar-body").hover(
      function() {
        $(this).find("i.action").show();
      },
      function() {
        $(this).find("i.action").hide();
      }
    );
    $('.message').each(function () {
      $(this).scrollTop($(this)[0].scrollHeight);
  });
  }); 
})