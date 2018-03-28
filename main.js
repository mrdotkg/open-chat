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
    
    $(".toggle-profile").on("click", function(){
      if ($(this).hasClass('open')){
        
        // console.log('closing');
        $(".conversation").removeClass('col-sm-6 ').addClass('col-sm-8 ');
        $(".side.left").removeClass('col-sm-3 ').addClass('col-sm-4');
        $(this).find('i').removeClass('fa-chevron-circle-right').addClass('fa-chevron-circle-left');
        $(".side.right").hide();
        $(this).removeClass('open');
      
      }else {
        
        // console.log('opening');
        $(".conversation").removeClass('col-sm-8 ').addClass('col-sm-6 ');
        $(".side.left").removeClass('col-sm-4 ').addClass('col-sm-3 ');
        $(this).find('i').removeClass('fa-chevron-circle-left').addClass('fa-chevron-circle-right');
        $(".side.right").show();
        $(this).addClass('open');
      }
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
  }); 
})