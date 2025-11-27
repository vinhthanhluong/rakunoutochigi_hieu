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
/*============== END - SCROLL TO-TOP ================*/

document.addEventListener("DOMContentLoaded", initToTop);