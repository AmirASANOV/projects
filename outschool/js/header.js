const header = document.getElementById("header");

window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if(scrollPos > 1000) {
        header.classList.add("headerScroll");
    } else {
        header.classList.remove("headerScroll")
    }
});

