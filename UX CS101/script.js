//this is for main carousel
var i;
var slidePosition =0;
LandscapeCarousel(slidePosition);

function slidesPlus(i, name) {
    // if(name == "room"){
    //     roomSlidesPlus(slidePosition+=i);
    // }
    // else{
    //     LandscapeCarousel(slidePosition+=i);
    // }
    LandscapeCarousel(slidePosition+=i);
}

function currentSlide(i) {
    LandscapeCarousel(slidePosition = i);
}

function LandscapeCarousel() {
   
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
    slidePosition++;
    if (slidePosition >slides.length) {
        slidePosition = 1;
    }
    for(i=0;i<slideMarker.length;i++){
        slideMarker[i].className = slideMarker[i].className.replace(" enable", "");
    }
  
    slides[slidePosition-1].style.display ="block";
    slideMarker[slidePosition-1].className += " enable";
    setTimeout(LandscapeCarousel,2000);
}
//this is for rooms carousel
var j;
var roomSlidePosition =0;var roomSlides= document.getElementsByClassName("roomcarouselslides");
    var roomSlideMarker= document.getElementsByClassName("roomcurrentslidemarker");
RoomsCarousel(roomSlidePosition);

function roomSlidesPlus(j) {
    RoomsCarousel(roomSlidePosition+=j);
}

function roomCurrentSlide(j) {
    RoomsCarousel(roomSlidePosition = j);
}

function RoomsCarousel() {
    
    
    if (j>roomSlideMarker.length) {
        roomSlidePosition =1;
    }
    if (j<1) {
        roomSlidePosition = roomSlides.length;
    }
    for (j=0;j<roomSlides.length;j++){
        roomSlides[j].style.display = "none";
    }
    roomSlidePosition++;
    if (roomSlidePosition >roomSlides.length) {
        roomSlidePosition = 1;
    }
    for(j=0;j<roomSlideMarker.length;j++){
        roomSlideMarker[j].classname = roomSlideMarker[j].className.replace(" roomenable", "");
    }
  
    
    roomSlides[roomSlidePosition-1].style.display ="block";
    roomSlideMarker[roomSlidePosition-1].className += " roomenable";
    setTimeout(RoomsCarousel,2000);
}