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
                  "I am <strong>Bicheng LUO</strong>",
                  "I am an <strong>software engineer</strong>",
                  "I am an <strong>iOS/Python/JavaScript</strong> dev",
                  "I wrote in <strong>C/C++/Java</strong>, too",
                  "I am studying in <strong>Tsinghua University</strong>",
                  "I got my bachelor in <strong>Nanjing University</strong>",
                  "I once worked as research intern in <strong>University of Queensland</strong>",
                  "I once worked as intern in <strong>Morgan Stanley</strong>",
                  "I once founded a <strong>startup</strong> with my friends, too",
                  "I am not just these",
                  "See the <strong>projects</strong> below to know more about <strong>Bicheng</strong>"],
        typeSpeed: 30
  });

  $(document).scroll(function(){
    var y = $(this).scrollTop();
    if (y > 520) {
      $('.left_float_panel').addClass('left_float_panel_show')
    } else {
      $('.left_float_panel').removeClass('left_float_panel_show')
    }
  })
});
