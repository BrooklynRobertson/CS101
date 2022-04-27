var sheet = document.createElement('style');


// hamburgerClick() = nav function to show links on mobile with hamburger link

const navButtons = document.getElementById("nav");
console.log(navButtons);
//  function animateNav () {
  
//     let id = null;
    
//     let pos = 0;
//     clearInterval(id);
//     id = setInterval(frame, 1);
//     function frame() {
//       if (pos == 100) {
//         clearInterval(id);
//       } else {
//         pos++; 
//         navButtons.style.top = -25 + "%"; 
        
//       }
//     }
  
//  }
document.body.addEventListener('onclick', hamburgerClick());


function hamburgerClick() {
  
  if (navButtons.className == "") {
     navButtons.classList.add("navReveal");

  console.log("it workednavbuttons style display =",navButtons.style.display);
  } 
  else {
  navButtons.classList.remove("navReveal");

  console.log("navbuttons style display =",navButtons.style.display);
  }
}
// hideNav() = function when onload, hides the nav. then creates an event listener for when the
//hamburger button on header is clicked to show and hide navigation at will



// window.onload = function hideNav() {
//   const navButtons = document.querySelector(".navReveal");
//   console.log("hideNav was triggered", navButtons);
  
//   if (navButtons.classList == "navReveal") {
//     navButtons.classList.remove("navReveal");
//     console.log("nav was removed: " ,navButtons.classList);
// } 

// }

//setting real viewport height to use as variable
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
  
//setting real viewport width to use as variable
  let vw = window.innerWidth * 0.01;
document.documentElement.style.setProperty('--vw', `${vw}px`);

//add to listen to resizing
window.addEventListener('resize', () => {
  console.log("resize function happened");
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    let vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty('--vw', `${vw}px`);
  });

//calling reveal function to check page position on load
reveal();


//adding event listener to when someone scrolls
  document.body.addEventListener("scroll", reveal);

  //adding event listener to when someone scrolls on phone
  document.addEventListener('swiped-up', reveal);

  //function to make elements with class name 'reveal' to animate by 
  //fading in to view, from the bottom.
 function reveal() {
    let reveals = document.getElementsByClassName("reveal");
    
    for (let i = 0; i < reveals.length; i++) {
      
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      
      let elementVisible = 1;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        
      } 
      else {
        reveals[i].classList.remove("active");
        
      }
    }
  }


  
