$(function(){
    mentoringBubbleClick();
    mobileNav();
    smoothScroll(10);
});

function mentoringBubbleClick(){
    $('.face').on('click', function(){
        
        let faceTop = $(this).position().top,
        vertMath = -1 * (faceTop - 230),
        faceLeft = $(this).position().left,
        horzMath = 0 - faceLeft
        
        if($(window).width() > 640){
            $(this).parent().css('top', + vertMath + 'px');

        }else{
            if ($(this).hasClass('back-btn')){
                mentoringNarrowStart();
            }else{
                $(this).parent().css('left', + horzMath + 'px');
            }
        }
        if (!$(this).hasClass('back-btn')){
            $(this).addClass('has-bubble-open')
                    .siblings().removeClass('has-bubble-open')
        }
    });


}

$(window).scroll(function(){
    youtubeVidScroll();
    startMentoring();
});

function youtubeVidScroll() {
    let wScroll = $(window).scrollTop();
    
    $('.video-strip').css('background-position', 'center -'+ wScroll +'px');
}

function startMentoring(){

    let wScroll = $(window).scrollTop();

    if ($('section.mentoring').offset().top - 500 < wScroll){
        if ($(window).width() > 640){
            $('.faces').addClass('launched')

            if(!$('.face').hasClass('has-bubble-open')){
                setTimeout(function(){
                    $('.face:nth-child(3)').addClass('has-bubble-open');
                }, 400);
            }
        }else{
            mentoringNarrowStart();
        }
    }
};

function mentoringNarrowStart(){
    $('.faces').css({
        'top': '230px',
        'left': '0px'
    });
    $('.face').first().addClass('has-bubble-open')
        .siblings().removeClass('has-bubble-open');
}

function mentoringWideStart(){
    $('.faces').css({
        'top': '0px',
        'left': '0px'
    });
    $('.face:nth-child(3)').addClass('has-bubble-open')
        .siblings().removeClass('has-bubble-open');
}


$(window).resize(function(){
    if($(window).width() > 640){
        mentoringWideStart();
    }else{
        mentoringNarrowStart();
    }
})


  function mobileNav() {
    $('.mobile-nav-toggle').on('click', function(){
      var status = $(this).hasClass('is-open');
      if(status){ $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open'); }
      else { $('.mobile-nav-toggle, .mobile-nav').addClass('is-open'); }
    });
  }


function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}
  