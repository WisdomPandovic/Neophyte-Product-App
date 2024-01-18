document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");
    var navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 0) {
            navbar.classList.add("bg-dark");
            navbar.classList.remove("bg-light");
            navLinks.forEach(function(link) {
                link.style.color = "#fff"; 
            });
        } else {
            navbar.classList.remove("bg-dark");
                navbar.classList.add("bg-light");
            navLinks.forEach(function(link) {
                link.style.color = ""; 
            });
        }
    });
});