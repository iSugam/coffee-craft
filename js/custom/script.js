$(document).ready(function() {
    window.addEventListener("scroll", function() {
        if(this.scrollY > 100) {
            $("#header").addClass("active")
        } else $("#header").removeClass("active")
    })
})