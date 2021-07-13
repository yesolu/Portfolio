$(document).ready(function(){
    $('.icon>li').on('click',function(){
      $('.icon>li').removeClass('on')
      $(this).addClass('on')
  
      var i = $(this).index()
  
      $('.menu_panel>div').removeClass('on')
      $('.menu_panel>div').eq(i).addClass('on')
    })
  });

$(document).ready(function(){

    balloonUp();

    function balloonUp(){
        $('#topBtn').stop().animate({'top':'-80px'},1000, 
        balloonDown)
    }

    function balloonDown(){
        $('#topBtn').stop().animate({'top':'-60px'},1000, 
        balloonUp)
    }

});

