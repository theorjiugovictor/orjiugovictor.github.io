// This script will add a smooth scroll effect to the links on the website.

$(document).ready(function() {
  $('a').click(function() {
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);
  });
});
