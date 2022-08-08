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
            offset: 100,
            duration: 900,
            easing: 'ease',
            once: false,
            mirror: false,
        })
    }());

    // Scroll to SECTIONS 
    $(".scrollTo").click(function() {
        let getSection = $(this).attr("href");
        if($(getSection).length) {
            // For seeting top margin
            let target = 60; 

            if(window.innerWidth < 756) {
                target = 80;
            }
            // Get top offset
            let getOffSet = $(getSection).offset().top - target; 
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
