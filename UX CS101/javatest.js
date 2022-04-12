var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 2000); // Change image every 2 seconds
}


//hi
var i;
var slidePosition =0;
SlideShow(slidePosition);

function slidesPlus(i) {
    SlideShow(slidePosition+=i);
}

function currentSlide(i) {
    SlideShow(slidePosition = i);
}

function SlideShow() {
    var slides= document.getElementsByClassName("carouselslides");
    var slideMarker= document.getElementsByClassName("currentslidemarker");
    if (i>slideMarker.length) {
        slidePosition =1;
    }
    if (i<1) {
        slidePosition = slides.length;
    }
    for (i=0;i<slides.length;i++){
        slides[i].style.display = "none";
    }
    
    if (slidePosition >slides.length) {
        slidePosition = 1;
    }
    for(i=0;i<slideMarker.length;i++){
        slideMarker[i].className = slideMarker[i].className.replace(" enable", "");
    }
    slides[slidePosition-1].style.display ="block";
    slideMarker[slidePosition-1].className += " enable";
    setTimeout(SlideShow,2000);
}

function currentDiv(n, j) {
    showDivs(slideIndex = n, j); /* showDivs Not showSlides*/
}

function slideShow(n, no) {
    var i;
    var slides = document.getElementsByClassName(slideClass[no]);
    var dash = document.getElementsByClassName(slideMarker[no]);
    if (n > marker.length) {
        slidePosition[no] = 1;
      }
    if (n > slides.length) {
        slidePosition[no] = 1;
      }    
    if (n < 1) {
        slidePosition[no] = slides.length;
      }
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
  //   for(i=0;i<marker.length;i++) {
  //       marker[i].className = marker[i].className.replace(" enable", "");
  //     }
      //console.log(marker[slidePosition[no]]);
      console.log(slides[slidePosition[no]]);
    slides[slidePosition[no]-1].style.display = "block"; 
    //marker[slidePosition[no]-1].className += " enable";
    //setTimeout(slideShow,2000);