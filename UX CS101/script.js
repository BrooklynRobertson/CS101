// nav function to show links on mobile with hamburger link
function hamburgerClick() {
  const navButtons = document.querySelector(".nav");
console.log(navButtons);
  
    if (navButtons.style.display == "none") {
        navButtons.style.display = "flex";
    } 
    else {
    navButtons.style.display = "none";
    }


}

//function to show pop up of active deals
function activeDeals() {
  console.log("active deals placeholder");
}

//carousel

let slideMarker = document.getElementsByClassName("currentslidemarker");
let i;
let slidePosition = 0;
let intervalId;

automateSlides(SlideShow(slidePosition));

function slidesPlus(i) {
  SlideShow((slidePosition += i));
}

function currentSlide(i) {
  SlideShow((slidePosition = i));
}

function automateSlides(slideshow) {
  // check if already an interval has been set up
  if (!intervalId) {
    intervalId = setInterval(SlideShow, 2000);
  }
}

function SlideShow() {
  const slides = Array.from(document.getElementsByClassName("carouselslides"));

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

  slides[slidePosition - 1].style.display = "inline";
  slideMarker[slidePosition - 1].className += " enable";
  
}
