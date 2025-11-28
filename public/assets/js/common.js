const initHamburger = () => {
    const btn = document.querySelector(".c_hamburger");
    const nav = document.querySelector(".nav_wrapper");
    if (!btn || !nav) return;

    btn.addEventListener("click", () => {
        const isOpen = document.documentElement.classList.toggle("open-nav");
        nav.classList.toggle("show", isOpen);
        btn.classList.toggle("active", isOpen);
    });
};
/*↑↑ HAMBURGER ↑↑*/


const initSubmenu = () => {
    const trigger = jQuery('.c_recruit .c_recruit__ttl');

    trigger.on('click', function () {
        if (jQuery(window).width() <= 992) {
            jQuery(this).toggleClass('open');
            jQuery(this).next().stop(true, true).slideToggle(400);
        }
    });

    jQuery(window).on('resize', () => {
        if ($(window).width() > 992) {
            trigger.removeClass('open').next().removeAttr('style');
        }
    });
};
/*↑↑ SUBMENU ↑↑*/


const initToTop = () => {
    const totopBtn = document.querySelector(".c_totop");
    
    if (!totopBtn) return;

    const onScroll = () => {
        const scrollY = window.scrollY;
        const vh50 = window.innerHeight * 0.5;

        totopBtn.classList.toggle("show", scrollY > vh50);

        const bottomLimit = document.documentElement.scrollHeight - window.innerHeight - 20;
        totopBtn.classList.toggle("active", scrollY >= bottomLimit);
    };

    const scrollToTop = () =>
        window.scrollTo({ top: 0, behavior: "smooth" });

    totopBtn.addEventListener("click", scrollToTop);
    window.addEventListener("scroll", onScroll);
    onScroll();
};
/*↑↑ SCROLL TO-TOP ↑↑*/


const initFixedBanner = () => {
    const btnMain  = document.querySelector(".c_fixed");
    const btnTotop = document.querySelector(".c_totop");

    if (!btnMain) {
        if (btnTotop) btnTotop.classList.add("reset");
        return;
    }

    const btnClose = btnMain.querySelector(".c_fixed__close");

    if (btnClose) {
        btnClose.addEventListener("click", () => {
            btnMain.classList.add("hide");
            btnTotop?.classList.add("reset");
        });
    }

    const onScroll = () => {
        const scrollY = window.scrollY;
        const vh50 = window.innerHeight * 0.5;

        btnMain.classList.toggle("show", scrollY > vh50);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
};
/*↑↑ FIXED BANNER ↑↑*/

const init = () => {
    initHamburger();
    initToTop();
    initFixedBanner();
    initSubmenu();
};

document.addEventListener("DOMContentLoaded", init);