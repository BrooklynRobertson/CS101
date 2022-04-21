// nav function to show links on mobile with hamburger link
function hamburgerClick() {
    const navIcon = document.querySelector('.nav');

    if (navIcon.style.display == 'none') {
        navIcon.style.display = 'flex';
    } else {
        navIcon.style.display = 'none';
    }
}

//function to show pop up of active deals
function activeDeals() {
    console.log("active deals placeholder");
}


//carousel
var i;
var slidePosition = 0;
SlideShow(slidePosition);

function slidesPlus(i) {
    SlideShow(slidePosition += i);
}

function currentSlide(i) {
    SlideShow(slidePosition = i);
}

function SlideShow() {
    var slides = document.getElementsByClassName("carouselslides");
    var slideMarker = document.getElementsByClassName("currentslidemarker");
    if (i > slideMarker.length) {
        slidePosition = 1;
    }
    if (i < 1) {
        slidePosition = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slidePosition++;
    if (slidePosition > slides.length) {
        slidePosition = 1;
    }
    for (i = 0; i < slideMarker.length; i++) {
        slideMarker[i].className = slideMarker[i].className.replace(" enable", "");
    }
    slides[slidePosition - 1].style.display = "flex";
    slideMarker[slidePosition - 1].className += " enable";
    setTimeout(SlideShow, 2000);
}