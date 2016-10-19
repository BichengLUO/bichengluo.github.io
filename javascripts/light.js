$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 40
        }, 1000);
        return false;
      }
    }
  });

  $("#typed").typed({
        strings: ["Hello, World!",
                  "I am <strong class=\"warning\">Bicheng LUO</strong>.",
                  "I am a <strong class=\"highlight\">software engineer</strong>.",
                  "I am an <strong class=\"highlight\">iOS<i class=\"fa fa-apple\" />/C/C++</strong> developer.",
                  "I am into <strong class=\"highlight\">Unity/OpenCV/OpenGL/ Direct3D/Arduino/VR</strong>, too.",
                  "I am studying in <strong class=\"highlight\">Tsinghua University</strong>.",
                  "I worked as a research intern in <strong class=\"highlight\">University of Queensland</strong>.",
                  "I worked as an intern in <strong class=\"highlight\">Microsoft</strong>, <strong class=\"highlight\">Morgan Stanley</strong>.",
                  "I am not just these.",
                  "See the <strong class=\"highlight\">projects</strong> and <strong class=\"highlight\">experiences</strong> below to know more about me<i class=\"fa fa-level-down\"></i>"],
        typeSpeed: 30
  });

  $(document).scroll(function(){
    var y = $(this).scrollTop();
    if (y > 200) {
      $('.left-float-panel').addClass('left-float-panel-show');
    } else {
      $('.left-float-panel').removeClass('left-float-panel-show');
    }
  });

  if ('ontouchstart' in document.documentElement) {
    $('.resume-btn-container').removeClass('hover-to-show');
    var $resumemenu = $('.resume-menu');
    $('.resume-btn-container a.btn').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $resumemenu.fadeIn();
    });
    $(document).on('touchstart', function(event){
      if (!($resumemenu.is(event.target)) && ($resumemenu.has(event.target).length === 0)) {
        $resumemenu.fadeOut();
      }
    });
  }

  $('.experiences').click(function(){
    $('.projects').removeClass('tab-on').addClass('tab-off');
    $(this).removeClass('tab-off').addClass('tab-on');
    $('.projects-container').addClass('containers-off');
    $('.experiences-container').removeClass('containers-off');
    $('.projects-navi').addClass('navis-off');
    $('.experiences-navi').removeClass('navis-off');
  });

  $('.projects').click(function(){
    $('.experiences').removeClass('tab-on').addClass('tab-off');
    $(this).removeClass('tab-off').addClass('tab-on');
    $('.experiences-container').addClass('containers-off');
    $('.projects-container').removeClass('containers-off');
    $('.experiences-navi').addClass('navis-off');
    $('.projects-navi').removeClass('navis-off');
  });

  $('.extra-title').click(function(){
    $(this).siblings('.extra-content').slideToggle();
  });

  $('.vote').each(function(){
    var vote_name = $(this).parent().parent().attr('id');
    var vote_count = $(this).find('.vote_count');
    get_vote(vote_name, function(voteCount){
      vote_count.text(voteCount);
    })
  })


  $('.vote').click(function(){
    var vote_name = $(this).parent().parent().attr('id');
    vote(vote_name);
    var vote_count = $(this).find('.vote_count');
    vote_count.text(parseInt(vote_count.text()) + 1);
  });
});
