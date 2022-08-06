$(document).ready(function() {

    // HEADER Background on scroll
    window.addEventListener("scroll", function() {
        if(this.scrollY > 100) {
            $("#header").addClass("active");
        } else $("#header").removeClass("active");
    });

    // Animation on Scroll
    (function(){ 
        AOS.init({
            offset: 100, // offset (in px) from the original trigger point
            duration: 900, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
        })
    }());

    // Scroll to SECTIONS 
    $(".scrollTo").click(function() {
        let getSection = $(this).attr("href");
        if(($(getSection)).length) {
            let target = 60; // For seeting top margin

            if(window.innerWidth < 756) {
                target = 80;
            }

            let getOffSet = $(getSection).offset().top - target; // Get top offset
            $("html,body").animate({
                scrollTop: getOffSet
            }, 1000);
        }
        return false
    });

    // Navbar OPEN and CLOSE on click
    $(".hamburger").click(function() {
        $("#navbar").addClass("nav-active");
    });

    $(".nav-close").click(function() {
        $("#navbar").removeClass("nav-active");
    });

    $(".nav-menu li a").click(function() {
        $("#navbar").removeClass("nav-active");
    });

});
