// WINDOW LOAD
jQuery(window).bind('load', function() {
    "use strict";
    // INTERVIEW - CAROUSEL
    if( jQuery('.interview_carousel').length > 0 ) {
        jQuery('.interview_carousel').slick({
            dots: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            centerMode: false,
            centerPadding: 0,
            pauseOnHover: false,
            fade: false,
            variableWidth: true,
            accessibility: false,
        });
    }
    /*============== END - INTERVIEW - CAROUSEL ================*/
});


// FIXED NAV
const initFixed = () => {
    const el = document.querySelector(".js-fixed");
    if (!el) return;

    const offset = el.offsetTop - 16;

    const onScroll = () => {
        const shouldFix = window.scrollY >= offset;

        el.classList.toggle("is-fixed", shouldFix);
        document.body.classList.toggle("is-fixed", shouldFix);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
};
/*============== END - FIXED NAV ================*/

document.addEventListener("DOMContentLoaded", initFixed);