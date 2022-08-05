$(document).ready(function() {

    // HEADER Background on scroll
    window.addEventListener("scroll", function() {
        if(this.scrollY > 100) {
            $("#header").addClass("active");
        } else $("#header").removeClass("active");
    });

    // Navbar OPEN and CLOSE on click
    $(".hamburger").click(function() {
        console.log("clicked");
        $("#navbar").addClass("nav-active")
    });

    $(".nav-close").click(function() {
        console.log("clicked");
        $("#navbar").removeClass("nav-active")
    });

    $(".nav-menu li a").click(function() {
        console.log("clicked");
        $("#navbar").removeClass("nav-active")
    });

    // Scroll to SECTIONS 
    $(".scrollTo").click(function() {
        let getSection = $(this).attr("href");
        if(($(getSection)).length) {
            let target = 60; // For seeting top margin

            if(window.innerWidth < 756) {
                target = 80
            }

            let getOffSet = $(getSection).offset().top - target; // Get top offset
            $("html,body").animate({
                scrollTop: getOffSet
            }, 1000)
        }
        return false
    })
})