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

    $(".nav-menu li").click(function() {
        console.log("clicked");
        $("#navbar").removeClass("nav-active")
    });
})