$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});

$('nav ul.nav li a, nav a').click(function(e){
    e.preventDefault();
    var section = $($(this).attr('href'));
    $('html, body').animate({scrollTop: section.offset().top - 50}, 'medium', 'swing');
    
});