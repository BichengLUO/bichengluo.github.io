$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $("#typed").typed({
        strings: ["Hello, World!",
                  "I am <strong class=\"highlight\">Bicheng LUO</strong>.",
                  "I am a <strong class=\"highlight\">software engineer</strong>.",
                  "I am an <strong class=\"highlight\">iOS<i class=\"fa fa-apple\" />/C/C++</strong> developer.",
                  "I code in <strong class=\"highlight\">Python/Java/JavaScript</strong>, too.",
                  "I am studying in <strong class=\"highlight\">Tsinghua University</strong>.",
                  "I graduated from <strong class=\"highlight\">Nanjing University</strong>.",
                  "I worked as a research intern in <strong class=\"highlight\">University of Queensland</strong>.",
                  "I worked as an intern in <strong class=\"highlight\">Morgan Stanley</strong>.",
                  "I founded a <strong class=\"highlight\">startup</strong> with my friends.",
                  "I am not just these.",
                  "See the <strong class=\"highlight\"><i class=\"fa fa-rocket\" />projects</strong> below to know more about <strong class=\"highlight\">Bicheng</strong>.<i class=\"fa fa-level-down\"></i>"],
        typeSpeed: 30
  });

  $(document).scroll(function(){
    var y = $(this).scrollTop();
    if (y > 520) {
      $('.left_float_panel').addClass('left_float_panel_show');
    } else {
      $('.left_float_panel').removeClass('left_float_panel_show');
    }
  });

});
