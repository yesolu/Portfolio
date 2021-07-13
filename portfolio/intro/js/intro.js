$('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $anchor.parent().addClass("on").siblings().removeClass("on");
    //a태그의 엄마에게 온 형제들은 온을 뺀다
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();//a태그의 링크 기능 막아버리기(a태그,버튼 등)
});


$(window).scroll(function(){
    //스크롤이 될때마다 위치를 담아라
    var scrollTopPus = $(window).scrollTop();
    if(scrollTopPus > 0){//스크롤을 아래로 내리는 순간 처리
        $("body").addClass('scroll');
    }
    else{//스크롤이 완전 위에 닿았을때 처리
        $('body').removeClass('scroll');
    }


});

var dtnum = 0;
$("#interview dt").click(function(){
    clearInterval(autoDt);
    dtnum=$(this).data('num');
    interview(dtnum);

});


var autoDt = setInterval(function(){
     dtnum++;
     dtnum=dtnum % 5;
     interview(dtnum);
     },2000);

function interview(num){    //선언
     $("#interview dt").eq(num).toggleClass('on').siblings().removeClass('on');
 }
 