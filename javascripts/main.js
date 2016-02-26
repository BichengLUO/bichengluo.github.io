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
                  "I am <strong>Bicheng LUO</strong>.",
                  "I am a <strong>software engineer</strong>.",
                  "I am an <strong>iOS/C/C++</strong> developer.",
                  "I code in <strong>Python/Java/JavaScript</strong>, too.",
                  "I am studying in <strong>Tsinghua University</strong>.",
                  "I graduated from <strong>Nanjing University</strong>.",
                  "I worked as a research intern in <strong>University of Queensland</strong>.",
                  "I worked as an intern in <strong>Morgan Stanley</strong>.",
                  "I founded a <strong>startup</strong> with my friends.",
                  "I am not just these.",
                  "See the <strong>projects</strong> below to know more about <strong>Bicheng</strong>."],
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
