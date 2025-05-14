(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 70) {
            $('.sticky-top').addClass('shadow-lg').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-lg').css('top', '-100px');
        }
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });

    $('.time').datetimepicker({
        format: 'LT'
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        animateOut: 'fadeOutLeft',
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    
})(jQuery);


document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
    const funFactsSection = document.querySelector(".fun-facts");
    let hasStarted = false;
  
    function animateCount(el, target, duration = 5000) {
      let current = 0;
      const increment = target / (duration / 16); // ~30fps (every 33ms)
  
      const update = () => {
        current += increment;
        if (current < target) {
          el.innerText = current.toFixed(target % 1 !== 0 ? 1 : 0);
          requestAnimationFrame(update);
        } else {
          el.innerText = target.toFixed(target % 1 !== 0 ? 1 : 0);
        }
      };
  
      requestAnimationFrame(update);
    }
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasStarted) {
          hasStarted = true;
          counters.forEach(counter => {
            const target = parseFloat(counter.getAttribute("data-target"));
            if (!isNaN(target)) {
              animateCount(counter, target);
            }
          });
        }
      });
    }, { threshold: 0.5 });
  
    observer.observe(funFactsSection);
});