function toggleNav() {
    $(".nav-button").toggleClass("nav-button--open-nav");
    $(".nav-cover").toggleClass("nav-cover--open-nav");
}

window.onresize = function() {
    if (window.innerWidth > 768) {
        $(".nav-button").removeClass("nav-button--open-nav");
        $(".nav-cover").removeClass("nav-cover--open-nav");
    }
};
