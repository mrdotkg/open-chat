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
    $(".animsition").animsition({
      inClass: 'fade-in',
      outClass: 'fade-out',
      inDuration: 1500,
      outDuration: 800,
      linkElement: '.animsition-link',
      // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
      loading: true,
      loadingParentElement: 'body', //animsition wrapper element
      loadingClass: 'animsition-loading',
      loadingInner: '', // e.g '<img src="loading.svg" />'
      timeout: false,
      timeoutCountdown: 5000,
      onLoadEvent: true,
      browser: [ 'animation-duration', '-webkit-animation-duration'],
      // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
      // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
      overlay : false,
      overlayClass : 'animsition-overlay-slide',
      overlayParentElement : 'body',
      transition: function(url){ window.location.href = url; }
    });

  }); 
})