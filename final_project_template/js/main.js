
$(window).on('scroll', function () {
  var distanceScrolled = $(window).scrollTop();
  console.log(distanceScrolled);

  // $('.fave-things').not(':offscreen').addClass('faded-in');
  // $('.projects').not(':offscreen').addClass('faded-in');
  //
  if ($('.fave-things') )
  // if ($(document).scrollTop() >= 650) {
  //   $('.projects').addClass('faded-in');
  // }
  // if ($(document).scrollTop() >= 1) {
  //   console.log('true');
  //   $('.fave-things').addClass('faded-in');
  //
  // }
});

// when target offset top = (value offset of the window) => then trigger fade in. 

// When a user scrolls to the contact section (.contact)
//  Slowly fadeIn the section .contact
