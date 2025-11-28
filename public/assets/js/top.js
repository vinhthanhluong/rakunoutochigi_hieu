jQuery(window).bind('load', function() {
    "use strict";
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
    /*↑↑ INTERVIEW CAROUSEL ↑↑*/
});


const initFixed = () => {
    const el = document.querySelector(".js-fixed");
    if (!el) return;

    const run = () => {
        if (window.innerWidth < 992) {
            el.classList.remove("is-fixed");
            document.body.classList.remove("is-fixed");
            window.removeEventListener("scroll", onScroll);
            return;
        }

        window.addEventListener("scroll", onScroll);
        onScroll();
    };

    const offset = el.offsetTop - 16;

    const onScroll = () => {
        const shouldFix = window.scrollY >= offset;
        el.classList.toggle("is-fixed", shouldFix);
        document.body.classList.toggle("is-fixed", shouldFix);
    };

    run();

    window.addEventListener("resize", run);
};
/*↑↑ FIXED NAV ↑↑*/

document.addEventListener("DOMContentLoaded", initFixed);