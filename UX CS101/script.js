// hamburgerClick() = nav function to show links on mobile with hamburger link

const navButtons = document.querySelector(".nav");

function hamburgerClick() {
  
  
  
  if (navButtons.style.display == "none") {
      navButtons.style.display = "flex";
      console.log("navbuttons style display =",navButtons.style.display);
      console.log("Nav was clicked via onload function");
  } 
  else {
  navButtons.style.display = "none";
  console.log("navbuttons style display =",navButtons.style.display);
  }
}
// hideNav() = function when onload, hides the nav. then creates an event listener for when the
//hamburger button on header is clicked to show and hide navigation at will



window.onload = function hideNav() {
  const navButtons = document.querySelector(".nav");
  console.log("hideNav was triggered");
  console.log("navbuttons style display =",navButtons.style.display);
  
  if (navButtons.style.display == "") {
    navButtons.style.display = "none";
    console.log("Nav was hidden ");
} 
else {
document.body.addEventListener('onclick', hamburgerClick());
}
}

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


  
