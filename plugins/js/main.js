$(function () {
  $(document).scroll(function () {
    var $nav = $(".top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
  $(document).scroll(function () {
    var $nav = $(".navbar-nav>li>a");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});


// scroll animation 

jQuery(function ($) {

  var doAnimations = function () {

    var offset = $(window).scrollTop() + $(window).height(),
      $animatables = $('.animatable');

    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }

    $animatables.each(function (i) {
      var $animatable = $(this);
      if (($animatable.offset().top - 0) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
      }
    });

  };

  $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});

// scroll animation 


// scroll top 
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $('.scrolltop:hidden').stop(true, true).fadeIn();
  } else {
    $('.scrolltop').stop(true, true).fadeOut();
  }
});
$(function () {
  $(".scroll").click(function () {
    $("html,body").animate({
      scrollTop: $(".thetop").offset().top
    }, "1000");
    return false
  })
});


// gallery popup 

$(document).ready(function () {
  $('.image-popup-vertical-fit').magnificPopup({
    type: 'image',
    mainClass: 'mfp-with-zoom',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300, // duration of the effect, in milliseconds
      easing: 'ease-in-out', // CSS transition easing function
      opener: function (openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });
});

// gallery popup

// cursor 

$(document).ready(function () {

  //attach div to cursor each time mouse moves
  $(document).mousemove(function (e) {
    $(".custom-cursor").css({
      left: e.pageX,
      top: e.pageY
    });
  });

  //attempt to attach div to cursor each time window scrolls
  $(document).on('scroll', function (e) {
    $(".custom-cursor").css({
      left: e.pageX,
      top: e.pageY
    });
  });


  //change cursor over menu
  $('body a').mouseenter(function () {
    $('.custom-cursor').addClass('activemenu');
  });

  $('body a').mouseleave(function () {
    $('.custom-cursor').removeClass('activemenu');
  });

});

// nav bar menu 

//main nav animation

$(document).ready(function () {
  $("#nav_links,.cross").removeClass("opacity_nav");
  $(".bars").addClass("opacity_nav");
  $(".bars").click(function () {
    $("#nav_links").addClass("opacity_nav");
    $(".bars").removeClass("opacity_nav");
    $(".cross").addClass("opacity_nav");
  });
  $(".cross").click(function () {
    $("#nav_links").removeClass("opacity_nav");
    $(".bars").addClass("opacity_nav");
    $(".cross").removeClass("opacity_nav");
  });
});


// faq 

document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  const a = item.querySelector('.faq-a');
  if (item.classList.contains('open')) {
    a.style.maxHeight = a.scrollHeight + 'px';
  }
  q.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(other => {
      other.classList.remove('open');
      other.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      other.querySelector('.faq-a').style.maxHeight = null;
    });
    if (!isOpen) {
      item.classList.add('open');
      q.setAttribute('aria-expanded', 'true');
      a.style.maxHeight = a.scrollHeight + 'px';
    }
  });
});

// faq 
