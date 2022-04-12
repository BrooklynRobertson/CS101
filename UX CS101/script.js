// //this is for main carousel
// var i;
// var slidePosition =0;
// LandscapeCarousel(slidePosition);

// function slidesPlus(i) {
//     LandscapeCarousel(slidePosition += i);
// }

// function currentSlide(i) {
//     LandscapeCarousel(slidePosition = i);
// }

// function LandscapeCarousel() {
//     var slides= document.getElementsByClassName("carouselslides");
//     var slideMarker= document.getElementsByClassName("currentslidemarker");
//     if (i>slideMarker.length) {
//         slidePosition =1;
//     }
//     if (i<1) {
//         slidePosition = slides.length;
//     }
//     for (i=0;i<slides.length;i++){
//         slides[i].style.display = "none";
//     }
//     slidePosition++;
//     if (slidePosition >slides.length) {
//         slidePosition = 1;
//     }
//     for(i=0;i<slideMarker.length;i++){
//         slideMarker[i].className = slideMarker[i].className.replace(" enable", "");
//     }
  
//     slides[slidePosition-1].style.display ="block";
//     slideMarker[slidePosition-1].className += " enable";
//     // setTimeout(LandscapeCarousel,2000);
// }






// //this is for rooms carousel
// var j;
// var roomSlidePosition =0;
// RoomsCarousel(roomSlidePosition);

// function roomSlidesPlus(j) {
//     RoomsCarousel(roomSlidePosition+=j);
// }

// function roomCurrentSlide(j) {
//     RoomsCarousel(roomSlidePosition = j);
// }

// function RoomsCarousel() {
//     var roomSlides= document.getElementsByClassName("roomcarouselslides");
//     var roomSlideMarker= document.getElementsByClassName("roomcurrentslidemarker");
    
//     if (j>roomSlideMarker.length) {
//         roomSlidePosition =1;
//     }
//     if (j<1) {
//         roomSlidePosition = roomSlides.length;
//     }
//     for (j=0;j<roomSlides.length;j++){
//         roomSlides[j].style.display = "none";
//     }
//     roomSlidePosition++;
//     if (roomSlidePosition >roomSlides.length) {
//         roomSlidePosition = 1;
//     }
//     for(j=0;j<roomSlideMarker.length;j++){
//         roomSlideMarker[j].className = roomSlideMarker[j].className.replace(" roomenable", "");
//     }
  
    
//     roomSlides[roomSlidePosition-1].style.display ="block";
//     roomSlideMarker[roomSlidePosition-1].className += " roomenable";
//     // setTimeout(RoomsCarousel,2000);
// }

var i;
var slidePosition = [0,0];
var slideClass = ["carouselslides", "roomcarouselslides"]
var slideMarker = ["currentslidemarker","roomcurrentslidemarker"]

//making the below calls to function start at 0, makes the element at the start 'undefined'

//landscape(slide 1, carousel 0)
slideShow(1, 0);

//rooms (slide 1, carousel 1)
slideShow(1, 1);


function currentSlide(i) {
    slideShow(slidePosition[y] = i);
}
function slidesPlus(x, y) {
  slideShow(slidePosition[y] += x, y);
}

//new issue: landscape (and rooms)
//slideshow will iterate up(with buttons) where x=9 then x=2
//going backwards, perfectly fine. goes x=0 then x=7. why
//it was doing this the other way round before

function slideShow(x, y) {
  
  var slides = document.getElementsByClassName(slideClass[y]);
  var dash = document.getElementsByClassName(slideMarker[y]);
  //slidePosition[y]=x;

  //why is the x and y values adding 2 extra index only on forward click?
  console.log(slides[x],x,slides[y],y);

  
    //if (x > slides.length) {slidePosition[y] = 1;}   
   //if (x > dash.length) {slidePosition[y] = 1;}   
   
//   if (x < 1 ) {
//       //++slidePosition[y];
//       slidePosition[y] = slides.length;
//       console.log(slides[slidePosition[y]], slidePosition[y]);
//     }
//     console.log(slides[slidePosition[y]], slidePosition[y]);
  for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none"; 
  }
  for (i = 0; i < dash.length; i++) {
    dash[i].className = dash[i].className.replace(" enable", "");  
 }
 console.log(slides[slidePosition[y]]);
 //slidePosition[y]= (slidePosition[y]+=1);
 //console.log(slides[slidePosition[y]]);
//slidePosition += x, y;
 
//how do i increase the slide by 1 to automate :'(
 
  if (slidePosition[y] > slides.length) {slidePosition[y] = 1}
  if (slidePosition[y] > dash.length) {slidePosition[y] = 1}
  if (slidePosition[y] < 1) {slidePosition[y] = slides.length;}
  if (slidePosition[y] < 1) {slidePosition[y] = dash.length;}
  //if (slidePosition[y] = 1) {slidePosition[y] = 1}
  
  slides[slidePosition[y]-1].style.display = "block";  
  dash[slidePosition[y]-1].className += " enable";
   //setTimeout(slideShow, 2000);
}
