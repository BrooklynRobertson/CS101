


// //this is for main carousel
// var i;
// var imageIndex =0;
// LandscapeCarousel(imageIndex);

// function slidesPlus(i) {
//     LandscapeCarousel(imageIndex += i);
// }

// function currentSlide(i) {
//     LandscapeCarousel(imageIndex = i);
// }

// function LandscapeCarousel() {
//     var slides= document.getElementsByClassName("carouselslides");
//     var slideMarker= document.getElementsByClassName("currentslidemarker");
//     if (i>slideMarker.length) {
//         imageIndex =1;
//     }
//     if (i<1) {
//         imageIndex = slides.length;
//     }
//     for (i=0;i<slides.length;i++){
//         slides[i].style.display = "none";
//     }
//     imageIndex++;
//     if (imageIndex >slides.length) {
//         imageIndex = 1;
//     }
//     for(i=0;i<slideMarker.length;i++){
//         slideMarker[i].className = slideMarker[i].className.replace(" enable", "");
//     }
  
//     slides[imageIndex-1].style.display ="block";
//     slideMarker[imageIndex-1].className += " enable";
//     // setTimeout(LandscapeCarousel,2000);
// }






// //this is for rooms carousel
// var j;
// var roomimageIndex =0;
// RoomsCarousel(roomimageIndex);

// function roomSlidesPlus(j) {
//     RoomsCarousel(roomimageIndex+=j);
// }

// function roomCurrentSlide(j) {
//     RoomsCarousel(roomimageIndex = j);
// }

// function RoomsCarousel() {
//     var roomSlides= document.getElementsByClassName("roomcarouselslides");
//     var roomSlideMarker= document.getElementsByClassName("roomcurrentslidemarker");
    
//     if (j>roomSlideMarker.length) {
//         roomimageIndex =1;
//     }
//     if (j<1) {
//         roomimageIndex = roomSlides.length;
//     }
//     for (j=0;j<roomSlides.length;j++){
//         roomSlides[j].style.display = "none";
//     }
//     roomimageIndex++;
//     if (roomimageIndex >roomSlides.length) {
//         roomimageIndex = 1;
//     }
//     for(j=0;j<roomSlideMarker.length;j++){
//         roomSlideMarker[j].className = roomSlideMarker[j].className.replace(" roomenable", "");
//     }
  
    
//     roomSlides[roomimageIndex-1].style.display ="block";
//     roomSlideMarker[roomimageIndex-1].className += " roomenable";
//     // setTimeout(RoomsCarousel,2000);
// }
var i;
var imageIndex = [0,0];
var slideClass = ["carouselslides", "roomcarouselslides"]
var slideMarker = ["currentslidemarker","roomcurrentslidemarker"]
let style;

//document.getElementById("endRoomCarousel").onload = setTimeout(slideTimeout(1, 0), 5000);


// function slideTimeout(x, y){
// imageIndex[y] += imageIndex[y];
// slideShow(imageIndex[y], y);
// console.log("hit");
// setTimeout(slideShow, 1000);
// }

//landscape(slide 1, carousel 0)
slideShow(0, 0);

//rooms (slide 1, carousel 1)
slideShow(0, 1);


function currentSlide(i) {
    slideShow(imageIndex[y] = i);
}
function slidesPlus(x, y) {
  slideShow(imageIndex[y] += x, y);
}


function slideShow(galIndex, y) {
  
  let slides = document.getElementsByClassName(slideClass[y]);
  let dash = document.getElementsByClassName(slideMarker[y]);
  
  for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none"; 
  }
  for (i = 0; i < dash.length; i++) {
    dash[i].className = dash[i].className.replace(" enable", "");  
 }
 
//VV how do i increase the slide by 1 to automate VV
  //let index = 0;
  //index++;
  //slides[index];
 
  console.log(galIndex);
  if(galIndex > slides.length-1)
  {
    galIndex = 0;
    imageIndex[y] = 0;
  }
  

  if (galIndex < 0)
  {
    galIndex = slides.length-1;
    imageIndex[y] = slides.length-1;
  }
imageIndex[y] = galIndex;


  for(i = 0; i < slides.length; i++){
    if(slides[i] == slides[galIndex]){
      slides[imageIndex[y]].style.display = "block"; 
      dash[galIndex].className += " enable";
    }
  } 
   
}

