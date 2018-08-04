window.onload = function() {
    var scrollTrigger = 100, // px
        backToTop = function () {
              var scrollTop = $(window).scrollTop();
              if (scrollTop > scrollTrigger) {
                  $('#back-to-top').addClass('show');
              } else {
                  $('#back-to-top').removeClass('show');
              }
        };
    backToTop();
    $(window).on('scroll', function () {
          backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });

    $('#projects').click(function() {
        $('html,body').animate({
              scrollTop: $(".projects").offset().top},
              'slow');
    })

    $('#about-me').click(function() {
        $('html,body').animate({
              scrollTop: $(".about-me").offset().top},
              'slow');
    })

}
