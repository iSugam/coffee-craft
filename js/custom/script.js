$(document).ready(function() {
"use strict"

    // HEADER Background on scroll
    $(window).scroll(function() {
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
    })();
    
        // Cache selectors
    const scrollToLinks = $(".scrollTo");
    const sections = scrollToLinks.map(function() {
        return $($(this).attr("href"));
    }).get();
    
    // Scrollspy function
    function updateActiveNav() {
        // Get current scroll position
        const scrollPosition = $(window).scrollTop() + 1; // Add 1px buffer
        
        // Determine the target offset based on screen size
        const targetOffset = window.innerWidth < 756 ? 80 : 60;
        
        let currentSection = null;
        
        // Check each section
        sections.forEach(function(section) {
            const sectionTop = section.offset().top - targetOffset;
            const sectionBottom = sectionTop + section.outerHeight();
            
            // If section is in view
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                currentSection = section;
            }
        });
        
        // Update active class only if it found a current section
        if (currentSection) {
            const id = "#" + currentSection.attr("id");
            scrollToLinks.removeClass("active");
            scrollToLinks.filter('[href="' + id + '"]').addClass("active");
        }
    }
    
    // Throttle scroll events for better performance
    let scrollTimeout;
    $(window).scroll(function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(updateActiveNav, 100);
    });
    
    // Run on page load
    updateActiveNav();

    // Scroll to SECTIONS 
    $(".scrollTo").click(function(e) {
        // Add active class
        $(".scrollTo").removeClass("active");
        $(this).addClass("active");

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

    $(".close-product").click(function() {
        $(".product-viewer").removeClass("active")
    })

});

document.querySelectorAll(".view-product").forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const productImage = $(".product-content .product-image img")[index].getAttribute("src");
        $(".product-viewer img").attr("src", productImage);
        $(".product-viewer").addClass("active");
    });
});