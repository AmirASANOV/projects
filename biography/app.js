const header = document.getElementById("header");
window.addEventListener("scroll" , function() {
    var scrollY = window.scrollY;
    if(scrollY > 1300) {
        header.classList.add("scrollHeader");
    } else {
        header.classList.remove("scrollHeader");
    }
})