/**
 * Toggles the classes for navigation items to define if the nav menu is open or
 * closed.
 */
function toggleNav() {
    $(".nav-button").toggleClass("nav-button--open-nav");
    $(".nav-cover").toggleClass("nav-cover--open-nav");
    $("nav").toggleClass("open-nav");
    setNavTabIndex();
}

/**
 * Removes the classes for navigation items to remove indication that the nav
 * menu is open.
 */
function removeNav() {
    $(".nav-button").removeClass("nav-button--open-nav");
    $(".nav-cover").removeClass("nav-cover--open-nav");
    $("nav").removeClass("open-nav");
}

/**
 * Checks if the nav element has the class "open-nav" or if the window is at a
 * width of greater than 768px. If either condition applies, the nav links are
 * placed in the tab index. If not, the links are removed from the tab order.
 */
function setNavTabIndex() {
    const $navList = $(".nav-list").find("a");
    if ($("nav").hasClass("open-nav") || window.innerWidth > 768) {
        $navList.attr("tabindex", "0");
    } else {
        removeNav();
        $navList.attr("tabindex", "-1");
    }
}

/**
 * Checks if the window moves into desktop layout, and so switches from mobile
 * navigation to desktop.
 */
window.onresize = function () {
    if (window.innerWidth > 768) {
        removeNav();
    }
    setNavTabIndex();
};

/**
 * Closes the mobile navigation on scroll.
 */
window.onscroll = function () {
    removeNav();
    setNavTabIndex();
};

/**
 * Calls setNavLinksTabIndex() to check if the window is loaded in a desktop or
 * tablet/mobile layout.
 */
window.onload = function () {
    setNavTabIndex();
};
